import { absolute, SITE_URL } from "@/lib/i18n";
import { getAllProducts, getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";

/**
 * /llms.txt — a curated Markdown map of the site for AI models
 * (https://llmstxt.org). Generated from the same data as the pages
 * themselves so it can't drift out of date.
 */
export function GET() {
  const products = getProducts("en");
  const services = getServices("en");

  const body = `# PantaziSoft

> A software studio that builds web applications, mobile apps and AI features for businesses, and ships its own products the same way. Founded in 2020 by Eduard Pantazi.

Every engagement starts with a scoping call, is agreed as a written scope, and ships in weekly working builds. The client owns the code. Enquiries are answered within 24 hours. The site is available in English (default) and Romanian (${SITE_URL}/ro).

## Products

${products
  .map(
    (p) =>
      `- [${p.name}](${absolute("en", p.path)}): ${p.category}. ${p.tagline}${
        p.url ? ` Live at ${p.url}.` : ""
      }${p.appStoreUrl ? ` On the App Store: ${p.appStoreUrl}.` : ""}`
  )
  .join("\n")}

## Services

${services
  .map((s) => `- [${s.name}](${absolute("en", s.path)}): ${s.tagline}`)
  .join("\n")}
- [All services](${SITE_URL}/services): Overview of the four services and how an engagement runs.

## Optional

- [Contact](${SITE_URL}/#contact): Project enquiry form; replies within 24 hours.
- [About](${SITE_URL}/#about): Studio background and founder.
- [Romanian version](${SITE_URL}/ro): The same pages in Romanian.
${getAllProducts("en")
  .filter((p) => p.hasLegal)
  .flatMap((p) => [
    `- [${p.name} privacy policy](${absolute("en", p.path)}/privacy)`,
    `- [${p.name} terms of use](${absolute("en", p.path)}/terms)`,
  ])
  .join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
