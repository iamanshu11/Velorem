import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Raleway } from "next/font/google";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Velorem",
  description: "Velorem",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // weights you need
  variable: "--font-raleway",     // optional CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <head>
        {/* Prevent flash of light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />

          <main className="mt-8 md-mt-0 transition-colors ">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}