import type { MetadataRoute } from "next";
import { absolute, languageAlternates } from "@/lib/i18n";
import { getAllProducts } from "@/lib/products";
import { getServices } from "@/lib/services";

type Entry = MetadataRoute.Sitemap[number];

/** One entry per language for a translated page, each carrying the hreflang
 *  set, so search engines see the two versions as a pair. */
function translated(
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly"
): Entry[] {
  return (["en", "ro"] as const).map((locale) => ({
    url: absolute(locale, path),
    lastModified: new Date(),
    changeFrequency,
    priority: locale === "en" ? priority : Math.round((priority - 0.1) * 10) / 10,
    alternates: { languages: languageAlternates(path) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Unlisted products keep their pages, so they stay in the sitemap.
  const products = getAllProducts("en");

  return [
    ...translated("/", 1, "weekly"),
    ...translated("/services", 0.9),
    ...getServices("en").flatMap((s) => translated(s.path, 0.9)),
    ...products.flatMap((p) => translated(p.path, 0.8)),
    // Legal documents are English only.
    ...products
      .filter((p) => p.hasLegal)
      .flatMap((p) =>
        ["privacy", "terms"].map(
          (doc): Entry => ({
            url: absolute("en", `${p.path}/${doc}`),
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
          })
        )
      ),
  ];
}
