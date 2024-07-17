import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pantazi Software - Digital Solutions, Infinite Possibilities",
  description: "Digital Solutions, Infinite Possibilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-gray-800 overflow-x-hidden`}>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
