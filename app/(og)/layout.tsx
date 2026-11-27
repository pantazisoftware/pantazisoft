import "@/app/globals.css";
import { notFound } from "next/navigation";
import { inter, instrumentSerif, outfit } from "@/lib/fonts";

/* Root layout for the Open Graph cards (views/og-card.tsx). They exist only
   to be captured into PNGs by scripts/og-images.mjs on the dev server; a
   production build serves a 404. */

export const metadata = { robots: { index: false, follow: false } };

export default function OgLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${outfit.variable}`}>
      <body className="m-0">
        {children}
        {/* The dev server's build badge would land in every capture. */}
        <style>{"nextjs-portal{display:none!important}"}</style>
      </body>
    </html>
  );
}
