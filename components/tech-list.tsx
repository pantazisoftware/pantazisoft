import type { Locale } from "@/lib/i18n";
import { resolveTech, type TechId } from "@/lib/tech";

/** A row of technologies, each with its mark. Server-rendered, so the icon
 *  set never reaches the browser bundle; only the paths used are in the HTML. */
export function TechList({ ids, locale }: { ids: TechId[]; locale: Locale }) {
  return (
    // self-start: in a two-column `split` row the list would otherwise
    // stretch to the heading's height, and a single line of pills with it.
    <ul className="flex flex-wrap content-start items-center gap-2 self-start">
      {resolveTech(ids, locale).map((t) => (
        <li
          key={t.id}
          className="inline-flex h-11 items-center gap-2.5 rounded-full bg-soft pr-4 pl-1.5 text-[0.9375rem] text-ink"
        >
          {/* The mark in a white disc, concentric with the pill: 16px in
              from the pill's 22px curve at 6px in. */}
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper shadow-[0_0_0_1px_rgb(0_0_0/0.04),0_1px_3px_rgb(0_0_0/0.08)]">
            {t.brand ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill={`#${t.brand.hex}`}
              >
                <path d={t.brand.path} />
              </svg>
            ) : (
              t.icon && (
                <t.icon
                  aria-hidden="true"
                  className="h-4 w-4 text-ink"
                  strokeWidth={1.75}
                />
              )
            )}
          </span>
          {t.label}
        </li>
      ))}
    </ul>
  );
}
