import Link from "next/link";
import { absolute, href, type Locale } from "@/lib/i18n";

type Crumb = { label: string; path: string };

/** The last crumb is the current page and is not a link. */
export function Breadcrumb({ locale, crumbs }: { locale: Locale; crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label">
      <ol className="flex flex-wrap gap-x-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.path} className="flex gap-x-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < crumbs.length - 1 ? (
              <Link
                href={href(locale, crumb.path)}
                className="transition-colors hover:text-ink"
              >
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Anchors within a page are not separate documents, so they are left out. */
export function breadcrumbSchema(locale: Locale, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs
      .filter((c) => !c.path.includes("#"))
      .map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: absolute(locale, c.path),
      })),
  };
}
