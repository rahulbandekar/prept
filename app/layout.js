import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Prept",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
        <main className="min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultThemes="system"
            enableSystem
            disableTraansitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
