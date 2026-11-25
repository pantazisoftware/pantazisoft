import { SITE_URL } from "@/lib/i18n";

export const ORG_ID = `${SITE_URL}/#organization`;

export const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "PantaziSoft",
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  image: `${SITE_URL}/og-image.png`,
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Eduard Pantazi",
    url: "https://www.linkedin.com/in/eduardpantazi/",
    sameAs: [
      "https://x.com/eduard_pantazi",
      "https://www.linkedin.com/in/eduardpantazi/",
    ],
  },
  sameAs: [
    "https://x.com/eduard_pantazi",
    "https://www.linkedin.com/in/eduardpantazi/",
  ],
};

/** Makes a site-relative image path absolute; leaves remote URLs alone. */
export function absoluteImage(src: string): string {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}
