"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { BookingCancellationEmail } from "@/emails/BookingCancellationEmail";
import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

export const getIntervieweeAppointments = async () => {
  const user = await currentUser();
  if (!user) return [];

  const dbUser = await db.user.findUnique({ where: { clerkUserId: user.id } });
  if (!dbUser) return [];

  return db.booking.findMany({
    where: { intervieweeId: dbUser.id },
    include: {
      interviewer: {
        select: {
          name: true,
          imageUrl: true,
          email: true,
          title: true,
          company: true,
          categories: true,
        },
      },
      feedback: true,
    },
    orderBy: { startTime: "desc" },
  });
};

export const cancelBooking = async (bookingId) => {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const dbUser = await db.user.findUnique({ where: { clerkUserId: user.id } });
  if (!dbUser) throw new Error("User not found");

  // Fetch booking with both parties
  const booking = await db.booking.findUnique({
    where: { id: bookingId },
    include: {
      interviewee: { select: { id: true, name: true, email: true, credits: true } },
      interviewer: { select: { id: true, name: true, email: true, creditBalance: true } },
    },
  });

  if (!booking) throw new Error("Booking not found");
  if (booking.status !== "SCHEDULED") throw new Error("Only scheduled bookings can be cancelled");
  if (booking.intervieweeId !== dbUser.id) throw new Error("You can only cancel your own bookings");

  // Block cancellation within 1 hour of the session
  const oneHourBefore = new Date(booking.startTime.getTime() - 60 * 60 * 1000);
  if (new Date() > oneHourBefore) {
    throw new Error("Bookings cannot be cancelled within 1 hour of the session");
  }

  const credits = booking.creditsCharged;

  // Cancel booking + refund credits atomically
  await db.$transaction([
    db.booking.update({
      where: { id: bookingId },
      data: { status: "CANCELLED" },
    }),
    db.user.update({
      where: { id: booking.intervieweeId },
      data: { credits: { increment: credits } },
    }),
    db.user.update({
      where: { id: booking.interviewerId },
      data: { creditBalance: { decrement: credits } },
    }),
    db.creditTransaction.create({
      data: {
        userId: booking.intervieweeId,
        amount: credits,
        type: "ADMIN_ADJUSTMENT",
        bookingId,
      },
    }),
  ]);

  revalidatePath("/appointments");
  revalidatePath("/dashboard");

  // Send cancellation emails — non-blocking
  try {
    const dateStr = format(new Date(booking.startTime), "EEEE, MMMM d, yyyy");
    const timeStr = `${format(new Date(booking.startTime), "h:mm a")} – ${format(new Date(booking.endTime), "h:mm a")}`;

    await Promise.all([
      render(BookingCancellationEmail({
        recipientName: booking.interviewee.name ?? "there",
        otherPersonName: booking.interviewer.name ?? "your interviewer",
        date: dateStr,
        time: timeStr,
        creditsRefunded: credits,
        isInterviewee: true,
      })).then((html) =>
        resend.emails.send({
          from: "Prept <onboarding@resend.dev>",
          to: booking.interviewee.email,
          subject: "Your session has been cancelled",
          html,
        })
      ),
      render(BookingCancellationEmail({
        recipientName: booking.interviewer.name ?? "there",
        otherPersonName: booking.interviewee.name ?? "your interviewee",
        date: dateStr,
        time: timeStr,
        creditsRefunded: credits,
        isInterviewee: false,
      })).then((html) =>
        resend.emails.send({
          from: "Prept <onboarding@resend.dev>",
          to: booking.interviewer.email,
          subject: "A session has been cancelled",
          html,
        })
      ),
    ]);
  } catch (emailErr) {
    console.error("Cancellation email failed:", emailErr);
  }

  return { success: true };
};