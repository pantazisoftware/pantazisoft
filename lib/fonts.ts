import {
  Google_Sans,
  Inter,
  Inter_Tight,
  Instrument_Serif,
  JetBrains_Mono,
  Outfit,
} from "next/font/google";

/* Every face is downloaded at build time and served from this origin, so the
   page makes no third-party request for type. latin-ext is required: Romanian
   ă, ș and ț live there. Instrument Serif, a light condensed display serif,
   carries the large headings; Inter Tight the small titles; Inter the rest. */
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

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

/* FeedFast's own faces, for its feature replicas on the product page (see
   components/replicas/feedfast). Not preloaded: a browser only fetches them
   on a page that actually renders a replica. */
export const googleSans = Google_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-google-sans",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jetbrains",
});

/* The wordmark's face, for the logo drawn live on the media kit page. Not
   preloaded, and its class is applied on that page only (views/media-kit). */
export const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  preload: false,
  variable: "--font-outfit",
});
