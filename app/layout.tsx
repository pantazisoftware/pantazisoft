import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsentLoader } from "@/components/cookie-consent-loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    template: "%s — PantaziSoft",
    default: "PantaziSoft — We Build Web Applications",
  },
  description:
    "Software development studio specializing in MVPs, custom web applications, and AI integration. Let's build something together.",
  metadataBase: new URL("https://pantazisoft.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pantazisoft.com",
    siteName: "PantaziSoft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-page text-primary font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsentLoader />
      </body>
    </html>
  );
}
