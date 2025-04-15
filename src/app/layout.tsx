// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Iridescence from "@/components/Iridescence";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abednego's Portfolio",
  description: "Personal portfolio of Abednego, a Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Iridescence
          color={[1, 1, 0]}    // Warna default (R=1,G=1,B=1) => putih
          speed={1.0}          // Kecepatan animasi
          amplitude={0.1}        // Besar efek "goyang" mouse
          mouseReact={true}
          />    
        <Navbar/>
        {children}
      </body>
    </html>
  );
}