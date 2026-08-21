import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentLoader } from "@/components/cookie-consent-loader";
import { FeedFast } from "@/components/feedfast";

/* Both faces are downloaded at build time and served from this origin, so the
   page still makes no third-party request for type. Outfit carries every
   heading; Inter carries everything else. */
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — PantaziSoft",
    default: "PantaziSoft — We Build Web Applications",
  },
  description:
    "Software development studio specializing in MVPs, custom web applications, and AI integration. Let's build something together.",
  metadataBase: new URL("https://pantazisoft.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // 96px — desktop shortcuts; 192px — Android Chrome home screen
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pantazisoft.com",
    siteName: "PantaziSoft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PantaziSoft — We Build Web Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PantaziSoft — We Build Web Applications",
    description:
      "Software development studio specializing in MVPs, custom web applications, and AI integration.",
    images: ["/og-image.png"],
    creator: "@eduard_pantazi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Turnstile sits on the conversion path and costs a full handshake before
            the widget can render, so the connection is warmed up front. Google Tag
            Manager is deliberately absent: reaching out to Google before the cookie
            banner has been answered is exactly what the banner exists to prevent. */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <link rel="preconnect" href="https://webscore.now" />
        <link rel="preconnect" href="https://feedfa.st" />
        <meta name="theme-color" content="#f2f2f0" />
      </head>
      <body className="font-body antialiased">
        {children}
        <FeedFast />
        <CookieConsentLoader />
      </body>
    </html>
  );
}
