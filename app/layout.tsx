import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navbar";
import Footer from "@/components/Footer";
import { Manrope, Bricolage_Grotesque, Inter, DM_Sans, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
export const metadata: Metadata = {
	title: "Pantazi Software - Custom Software Development",
	authors: [{ name: "Pantazi Software" }],
	creator: "Pantazi Software",
	openGraph: {
		title: {
    template: '%s | Pantazi Software',
    default: 'Pantazi Software',
  },
		description:
			"Designing and developing custom software solutions for businesses and startups.",
		url: "https://pantazisoft.com",
		type: "website",
		siteName: "Pantazi Software",
		images: [
			{
				url: "https://pantazisoft.com/logo-bg.png",
				width: 1200,
				height: 630,
				alt: "Pantazi Software - Innovate, Integrate, Succeed",
			},
		],
	},
	twitter: {
		site: "@pantazisoftware",
		card: "summary_large_image",
  },
	description:
		"We provide top-notch software solutions to help your business grow and succeed in the competitive market.",
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
  weight: ["400","500","700", "800"],
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
