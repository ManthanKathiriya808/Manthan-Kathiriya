import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manthan Kathiriya | Creative Developer",
  description: "Senior Creative Developer specializing in Next.js, Framer Motion, and high-performance interactive web experiences.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
