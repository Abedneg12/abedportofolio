// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import FaultyTerminalClient from "@/components/faultyterminalclients";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abednego's Portfolio",
  description: "Personal portfolio of Abednego, a Full-Stack Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="fixed inset-0 -z-10">
          <FaultyTerminalClient />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}