import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://manthan.dev"),
  title: "Manthan Kathiriya | Creative Developer",
  description: "Senior Creative Developer specializing in Next.js, Framer Motion, and high-performance interactive web experiences.",
  openGraph: {
    title: "Manthan Kathiriya | Developer Portfolio",
    description: "Full Stack Developer building modern web applications.",
    url: "https://manthan.dev",
    siteName: "Manthan Kathiriya",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Manthan Kathiriya Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Kathiriya | Developer Portfolio",
    description: "Full Stack Developer building modern web applications.",
    images: ["/preview.png"],
  },
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
