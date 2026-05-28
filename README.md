<div align="center">

<h1>Prept</h1>
<p><strong>AI-powered mock interview platform connecting engineers with industry experts</strong></p>

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[Live Demo →](https://prept-tawny.vercel.app)**

</div>

---

## What is Prept?

Prept is a full-stack SaaS platform where software engineers book live mock interviews with industry professionals. Interviewers earn credits per session; interviewees receive an AI-generated feedback report after every call. The platform handles scheduling, live video, real-time chat, AI feedback generation, credit billing, and payouts end-to-end.

---

## Features

### For interviewees

- Browse and filter expert interviewers by category (Frontend, Backend, System Design, DSA, and more)
- Book 45-minute sessions using a monthly credit plan
- Join HD video calls with screen sharing via Stream
- Receive a detailed AI feedback report after the session (technical depth, communication, problem-solving, overall rating)
- Access session recordings to review your own performance (Pro plan)
- Persistent chat thread with your interviewer before and after the call
- Booking confirmation email sent automatically on successful booking

### For interviewers

- Set your own availability and categories
- AI question generator tailored live to each candidate's role during the call
- Earn credits per completed session
- Request withdrawals from a dedicated earnings dashboard
- Admin review and approval flow for payouts via email

### Platform

- Role-based onboarding (interviewee or interviewer)
- Credit-based subscription plans (Free, Starter, Pro) via Clerk billing
- Bot protection and rate limiting on all routes via Arcjet
- Webhook-driven AI feedback generation using Gemini after each call transcription
- Processing state on appointment cards while recording and feedback are being generated
- Fully responsive dark UI

---

## Tech Stack

| Layer          | Technology                                                    |
| -------------- | ------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, Server Actions)                       |
| Language       | JavaScript (React 19)                                         |
| Styling        | Tailwind CSS v4, shadcn/ui, Radix UI                          |
| Auth & Billing | Clerk (sign-in, plans, credit gating)                         |
| Database       | PostgreSQL via Supabase                                       |
| ORM            | Prisma 6 with `pg` connection pool adapter                    |
| Video & Chat   | Stream Video SDK + Stream Chat SDK                            |
| AI             | Google Gemini 2.5 Flash Lite (feedback + question generation) |
| Email          | Resend + React Email                                          |
| Bot Protection | Arcjet (shield + bot detection middleware)                    |
| Animations     | Motion (Framer Motion v12)                                    |
| Deployment     | Vercel                                                        |

---

## Architecture overview

```
User signs in (Clerk)
    ↓
checkUser() syncs Clerk identity → Supabase via Prisma
    ↓
Interviewee books a slot → Stream call created → credits deducted → confirmation email sent
    ↓
Live call runs (Stream Video + Chat + AI question panel)
    ↓
Call ends → Stream webhook fires → transcript downloaded
    ↓
Gemini generates structured feedback → saved to DB → booking marked COMPLETED
    ↓
Interviewee sees AI report + recording link on Appointments page
Interviewer credits earned → can request withdrawal → admin notified via Resend
```

---

## Local setup

### Prerequisites

- Node.js 18+
- A PostgreSQL database (Supabase free tier works)
- Accounts for: Clerk, Stream, Arcjet, Resend, Google AI Studio

### 1. Clone and install

```bash
git clone https://github.com/rahulbandekar/prept.git
cd prept
npm install
```

### 2. Environment variables

Create a `.env` file in the root:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database (Supabase)
DATABASE_URL=
DIRECT_URL=

# Arcjet
ARCJET_KEY=
ARCJET_ENV=development

# Stream
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# Gemini
GEMINI_API_KEY=

# Resend
RESEND_API_KEY=
```

### 3. Database setup

```bash
npx prisma migrate dev
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Subscription plans

| Plan          | Credits/month | Key features                            |
| ------------- | ------------- | --------------------------------------- |
| Free          | 1             | HD video, persistent chat               |
| Starter — $10 | 5             | + AI feedback report, credits roll over |
| Pro — $25     | 15            | + Session recording & playback          |

---

## Project structure

```
prept/
├── actions/          # Server actions (booking, onboarding, dashboard, payout...)
├── app/
│   ├── (auth)/       # Sign-in / sign-up pages
│   ├── (main)/       # Protected app routes
│   │   ├── appointments/
│   │   ├── call/[callId]/
│   │   ├── dashboard/
│   │   ├── explore/
│   │   ├── interviewers/[id]/
│   │   ├── onboarding/
│   │   └── payout/[id]/
│   ├── api/
│   │   └── webhooks/stream/   # Stream webhook → Gemini feedback pipeline
│   └── page.jsx               # Landing page
├── components/       # Shared UI components
├── emails/           # React Email templates
├── hooks/            # Custom React hooks
├── lib/              # Prisma client, Arcjet, data constants, helpers
├── middleware.js     # Clerk auth + Arcjet bot protection (Node.js runtime)
└── prisma/
    └── schema.prisma
```

---

## Deployment

Deployed on Vercel. Key configuration notes:

- `middleware.js` runs on the **Node.js runtime** (`export const runtime = "nodejs"`) to avoid Vercel's 1 MB Edge Function size limit while keeping full Arcjet + Clerk middleware support
- `prisma/schema.prisma` includes `binaryTargets = ["native", "rhel-openssl-3.0.x"]` for Vercel's Linux environment
- All environment variables must be added manually in Vercel → Settings → Environment Variables

---

<div align="center">
  <p>Built by <a href="https://github.com/rahulbandekar">Rahul Bandekar</a></p>
</div>
