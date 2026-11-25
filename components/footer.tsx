import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";

const socials = [
  { href: "https://x.com/eduard_pantazi", label: "X" },
  { href: "https://www.linkedin.com/in/eduardpantazi/", label: "LinkedIn" },
];

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.footer;

  const columns: {
    heading: string;
    links: { href: string; label: string; icon?: string }[];
  }[] = [
    {
      heading: t.products,
      links: getProducts(locale).map((p) => ({
        href: p.path,
        label: p.name,
        icon: p.icon,
      })),
    },
    {
      heading: t.services,
      links: [
        ...getServices(locale).map((s) => ({ href: s.path, label: s.name })),
        { href: "/services", label: t.allServices },
      ],
    },
    {
      heading: t.studio,
      links: [
        { href: "/#about", label: dict.nav.about },
        { href: "/#contact", label: dict.nav.contact },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link
            href={href(locale, "/")}
            className="inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-tight text-ink"
          >
            <Image src="/logo-transparent.svg" alt="" width={15} height={20} />
            PantaziSoft
          </Link>
          <p className="mt-3 max-w-xs text-[0.9375rem]">{t.blurb}</p>
          <a
            href="https://webscore.now/trust/pantazisoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://webscore.now/api/badge/cmm59joqj000wkvl8ec5yjred?theme=light&style=score"
              alt="WebScore Trust Badge"
              width="200"
              height="48"
              loading="lazy"
              decoding="async"
            />
          </a>
          {/* Mounted by the FeedFast embed (components/feedfast.tsx) into a
              shadow root. Stays an empty box if the script is blocked. */}
          <div
            className="mt-4"
            data-feedfast="uptime"
            data-slim="true"
            data-days="30"
          />
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h2 className="label">{column.heading}</h2>
            <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={href(locale, link.href)}
                    className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    {link.icon && (
                      <Image
                        src={link.icon}
                        alt=""
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] shrink-0 rounded-[22%] object-contain"
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
              {column.heading === t.studio && (
                <>
                  {socials.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ink"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    {/* The embed attaches the click handler; if the script
                        never arrives the click is inert, and the contact form
                        remains the path that always works. */}
                    <button
                      type="button"
                      data-feedfast="feedback"
                      className="cursor-pointer transition-colors hover:text-ink"
                    >
                      {t.feedback}
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap label flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} PantaziSoft. {t.rights}
        </p>
        <p className="flex items-center gap-1.5">
          {t.madeIn.before}
          <Heart
            aria-label={t.madeIn.love}
            role="img"
            className="h-3.5 w-3.5 fill-red-500 text-red-500"
          />
          {t.madeIn.after}
        </p>
      </div>
    </footer>
  );
}
