import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prept — AI-Powered Mock Interviews",
  description:
    "Book live mock interviews with senior engineers. Get AI-generated feedback reports, HD video, and real-time chat. Credit-based plans starting free.",
  metadataBase: new URL("https://prept-tawny.vercel.app"),
  openGraph: {
    title: "Prept — AI-Powered Mock Interviews",
    description:
      "Book live mock interviews with senior engineers. Get AI-generated feedback reports, HD video, and real-time chat.",
    url: "https://prept-tawny.vercel.app",
    siteName: "Prept",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prept — AI-Powered Mock Interviews",
    description:
      "Book live mock interviews with senior engineers. Get AI-generated feedback reports, HD video, and real-time chat.",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="relative z-10 border-t border-white/7 py-12  mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400">
              <p className="text-sm text-center">
                &copy; {new Date().getFullYear()} Prept. Built by{" "}
                <a
                  href="https://github.com/rahulbandekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline transition-colors"
                >
                  Rahul Bandekar
                </a>
                . All rights reserved.
              </p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
