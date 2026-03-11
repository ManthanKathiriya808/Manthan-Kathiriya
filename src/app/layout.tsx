import type { Metadata } from "next";
import { Inter, Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manthan.dev"),
  title: {
    default: "Manthan Kathiriya | React Developer Portfolio | manthan.dev",
    template: "%s | Manthan Kathiriya",
  },
  description:
    "Manthan Kathiriya is a React Developer and Frontend Engineer specializing in modern web applications using React.js, Next.js, TypeScript and AI-powered interfaces. Explore projects, portfolio, and development work.",
  keywords: [
    "Manthan Kathiriya",
    "manthan kathiriya developer",
    "manthan dev",
    "manthan.dev",
    "Manthan",
    "Kathiriya",
    "Manthan React Developer",
    "Frontend Developer India",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Engineer",
    "MERN Stack Developer",
    "React Portfolio",
    "React Developer Portfolio",
    "AI SaaS Developer",
    "AI Frontend Developer",
    "Trading Bot Developer",
    "Algorithmic Trading Developer",
    "Web Developer India",
    "Freelance React Developer",
  ],
  authors: [{ name: "Manthan Kathiriya" }],
  creator: "Manthan Kathiriya",
  openGraph: {
    title: "Manthan Kathiriya | React Developer Portfolio",
    description:
      "Frontend Developer specializing in React.js, Next.js, TypeScript and modern UI engineering. View projects, SaaS dashboards and AI applications.",
    url: "https://manthan.dev",
    siteName: "Manthan.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Manthan Kathiriya Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Kathiriya | React Developer",
    description:
      "Portfolio of Manthan Kathiriya — React, Next.js, TypeScript developer building modern web applications.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manthan Kathiriya",
              url: "https://manthan.dev",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/ManthanKathiriya808",
                "https://linkedin.com/in/manthan-kathiriya",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "MERN Stack",
                "AI SaaS Applications",
                "Trading Bots",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} ${outfit.variable} bg-background text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
