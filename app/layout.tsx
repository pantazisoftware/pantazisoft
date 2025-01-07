import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navbar";
import Footer from "@/components/Footer";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  title: "Pantazi Software - Custom Software Development",
  authors: [{ name: "Pantazi Software" }],
  creator: "Pantazi Software",
  openGraph: {
    title: "Pantazi Software - Custom Software Development",
    description:
      "Designing and developing custom software solutions for businesses and startups.",
    url: "https://pantazisoftware.com",
    type: "website",
    siteName: "Pantazi Software",
    images: [
      {
        url: "https://pantazisoftware.com/logo-bg.png",
        width: 1200,
        height: 630,
        alt: "Pantazi Software - Custom Software Development",
      },
    ],
  },
  twitter: {
    site: "@pantazisoftware",
    card: "summary_large_image",
  },
  description: "Designing and developing custom software solutions for businesses and startups.",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  preload: true,
  weight: ["400","500","700","800"],
});

const inter = Manrope({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  weight: ["400","500","700","800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans text-zinc-800 bg-white antialiased scroll-smooth`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
