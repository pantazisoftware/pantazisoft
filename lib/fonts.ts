import { Inter, Inter_Tight } from "next/font/google";

/* Both faces are downloaded at build time and served from this origin, so the
   page makes no third-party request for type. latin-ext is required: Romanian
   ă, ș and ț live there. Inter Tight, Inter cut for display sizes, carries the headings;
   Inter the rest. */
export const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
