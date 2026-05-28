import { Html, Body, Container, Text, Hr } from "@react-email/components";

export function BookingCancellationEmail({
  recipientName,
  otherPersonName,
  date,
  time,
  creditsRefunded,
  isInterviewee,
}) {
  return (
    <Html>
      <Body style={{ fontFamily: "Georgia, serif", padding: "32px 16px" }}>
        <Container style={{ maxWidth: "480px", margin: "0 auto" }}>
          <Text
            style={{ fontSize: "22px", color: "#111827", margin: "0 0 4px" }}
          >
            Prept
          </Text>
          <Text
            style={{
              fontSize: "11px",
              color: "#6b7280",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 32px",
            }}
          >
            Session Cancelled
          </Text>

          <Text
            style={{ fontSize: "14px", color: "#374151", margin: "0 0 4px" }}
          >
            Hi <strong>{recipientName}</strong>, your upcoming session has been
            cancelled.
          </Text>

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          {[
            [isInterviewee ? "Interviewer" : "Interviewee", otherPersonName],
            ["Date", date],
            ["Time", time],
            ...(isInterviewee
              ? [
                  [
                    "Credits refunded",
                    `${creditsRefunded} credit${creditsRefunded !== 1 ? "s" : ""}`,
                  ],
                ]
              : []),
          ].map(([k, v]) => (
            <Text
              key={k}
              style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px" }}
            >
              {k}:{" "}
              <span
                style={{
                  color: k === "Credits refunded" ? "#10b981" : "#111827",
                  fontWeight: k === "Credits refunded" ? "700" : "400",
                }}
              >
                {v}
              </span>
            </Text>
          ))}

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          <Text style={{ fontSize: "12px", color: "#9ca3af", margin: "0" }}>
            {isInterviewee
              ? "Your credits have been returned to your account. Browse other interviewers to rebook."
              : "This slot has been freed up and is available for new bookings."}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
