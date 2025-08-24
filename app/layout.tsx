import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react";
import { Galaxy } from "@/components/backgrounds";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akkil's Portfolio",
  description: "Get to know me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.className} text-white cursor-custom bg-black customBackground`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Galaxy />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
