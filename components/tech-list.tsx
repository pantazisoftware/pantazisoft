import type { Locale } from "@/lib/i18n";
import { resolveTech, type TechId } from "@/lib/tech";

/** A row of technologies, each with its mark. Server-rendered, so the icon
 *  set never reaches the browser bundle; only the paths used are in the HTML. */
export function TechList({ ids, locale }: { ids: TechId[]; locale: Locale }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {resolveTech(ids, locale).map((t) => (
        <li
          key={t.id}
          className="inline-flex items-center gap-2 rounded-full border border-line py-1.5 pr-3.5 pl-3 text-[0.9375rem] text-ink"
        >
          {t.brand ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
              fill={`#${t.brand.hex}`}
            >
              <path d={t.brand.path} />
            </svg>
          ) : (
            t.icon && (
              <t.icon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted"
                strokeWidth={1.75}
              />
            )
          )}
          {t.label}
        </li>
      ))}
    </ul>
  );
}
