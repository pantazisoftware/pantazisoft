"use client";

import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n";

/** Path of the current page in another language. Legal documents exist in
 *  English only, so from there the Romanian link goes to the product page. */
function translate(pathname: string, to: Locale): string {
  const bare = pathname.replace(/^\/ro(?=\/|$)/, "") || "/";
  if (to === "en") return bare;
  const product = bare.replace(/\/(privacy|terms)$/, "");
  return product === "/" ? "/ro" : `/ro${product}`;
}

/* Flags as inline SVG rather than emoji: Windows renders flag emoji as plain
   letters ("GB", "RO"), so an SVG is the only way every visitor sees a flag. */
const flags: Record<Locale, React.ReactNode> = {
  en: (
    // The Union Jack is 2:1 and the slot is 3:2, so it is cropped to fill
    // (slice) rather than shrunk to fit, which left it smaller than the RO flag.
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <clipPath id="flag-uk-clip">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0 0l60 30m0-30L0 30"
        clipPath="url(#flag-uk-clip)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  ro: (
    <svg viewBox="0 0 3 2" aria-hidden="true">
      <path d="M0 0h1v2H0z" fill="#002B7F" />
      <path d="M1 0h1v2H1z" fill="#FCD116" />
      <path d="M2 0h1v2H2z" fill="#CE1126" />
    </svg>
  ),
};

const flagClass =
  "block h-4 w-6 overflow-hidden rounded-[3px] ring-1 ring-black/10 [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover";

export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex items-center gap-1.5">
      {locales.map((l) =>
        l === locale ? (
          <span
            key={l}
            aria-current="true"
            title={localeNames[l]}
            className="rounded-md p-1 ring-1 ring-line"
          >
            <span className={flagClass}>{flags[l]}</span>
            <span className="sr-only">{localeNames[l]}</span>
          </span>
        ) : (
          // A plain anchor on purpose: each language has its own root layout
          // (<html lang>), so switching is a full document load either way.
          <a
            key={l}
            href={translate(pathname, l)}
            hrefLang={l}
            lang={l}
            title={localeNames[l]}
            className="rounded-md p-1 opacity-60 transition-opacity hover:opacity-100"
          >
            <span className={flagClass}>{flags[l]}</span>
            <span className="sr-only">{localeNames[l]}</span>
          </a>
        )
      )}
    </nav>
  );
}
