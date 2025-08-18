// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FaultyTerminal from "@/components/Faultyterminal";
import { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abednego's Portfolio",
  description: "Personal portfolio of Abednego, a Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen`}>
        {/* BACKGROUND (tidak memengaruhi flow) */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#FF2900"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>

        {/* KONTEN */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}