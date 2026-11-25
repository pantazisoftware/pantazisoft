import type { Metadata } from "next";

export const SITE_URL = "https://pantazisoft.com";

export const locales = ["en", "ro"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Română",
};

const ogLocale: Record<Locale, string> = { en: "en_US", ro: "ro_RO" };

/**
 * Turns a canonical (English) path into the path for a locale. English lives at
 * the root; Romanian lives under /ro.
 *
 *   href("ro", "/")            → "/ro"
 *   href("ro", "/#contact")    → "/ro#contact"
 *   href("ro", "/app/remoto")  → "/ro/app/remoto"
 */
export function href(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/ro";
  if (path.startsWith("/#")) return `/ro${path.slice(1)}`;
  return `/ro${path}`;
}

export function absolute(locale: Locale, path: string): string {
  const local = href(locale, path);
  return local === "/" ? SITE_URL : `${SITE_URL}${local}`;
}

/** hreflang map for a page that exists in every locale. */
export function languageAlternates(path: string): Record<string, string> {
  return {
    en: absolute("en", path),
    ro: absolute("ro", path),
    "x-default": absolute("en", path),
  };
}

type PageMeta = {
  locale: Locale;
  /** Canonical English path, e.g. "/services/ai-integration". */
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  /** Set to false for pages that only exist in English (legal documents). */
  translated?: boolean;
  /** Use the title exactly as given instead of appending the site name. */
  absoluteTitle?: boolean;
};

/** One place that builds canonical, hreflang, Open Graph and Twitter tags, so
 *  no page can ship with half of them. */
export function pageMeta({
  locale,
  path,
  title,
  description,
  image = "/og-image.png",
  imageAlt,
  keywords,
  translated = true,
  absoluteTitle = false,
}: PageMeta): Metadata {
  const url = absolute(locale, path);
  const other = locales.filter((l) => l !== locale);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: translated ? languageAlternates(path) : undefined,
    },
    openGraph: {
      type: "website",
      siteName: "PantaziSoft",
      title,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: translated ? other.map((l) => ogLocale[l]) : undefined,
      images: [{ url: image, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@eduard_pantazi",
    },
  };
}

/** Metadata shared by both root layouts. */
export function baseMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s — PantaziSoft",
      default: "PantaziSoft",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
    openGraph: { locale: ogLocale[locale] },
  };
}
