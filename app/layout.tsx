import type { Metadata } from "next";
import "./globals.css";
import { CookieConsentLoader } from "@/components/cookie-consent-loader";

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
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <CookieConsentLoader />
      </body>
    </html>
  );
}
