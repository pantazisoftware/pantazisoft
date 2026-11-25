import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";
import { serviceIcons } from "@/lib/service-icons";
import { LangSwitch } from "@/components/lang-switch";
import { MobileMenu } from "@/components/mobile-menu";
import { NavMenu } from "@/components/nav-menu";
import type { NavGroup, NavLink } from "@/components/nav-types";

export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.nav;

  const groups: NavGroup[] = [
    {
      label: t.products,
      intro: t.productsIntro,
      // Four products fill the panel's 2×2 grid; Memo stays reachable
      // through "All products" and the home page.
      items: getProducts(locale)
        .filter((p) => p.slug !== "memo")
        .map((p) => ({
          href: href(locale, p.path),
          label: p.name,
          description: p.tagline,
          icon: (
            <Image
              src={p.icon}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-[22%] object-contain"
            />
          ),
        })),
      all: { href: href(locale, "/#products"), label: t.allProducts },
    },
    {
      label: t.services,
      intro: t.servicesIntro,
      items: getServices(locale).map((s) => {
        const Icon = serviceIcons[s.slug];
        return {
          href: href(locale, s.path),
          label: s.name,
          description: s.tagline,
          icon: (
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-soft text-ink">
              <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </span>
          ),
        };
      }),
      all: { href: href(locale, "/services"), label: dict.footer.allServices },
    },
  ];

  const links: NavLink[] = [
    { href: href(locale, "/#about"), label: t.about },
    { href: href(locale, "/#contact"), label: t.contact },
  ];
  const cta: NavLink = { href: href(locale, "/#contact"), label: t.cta };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="wrap flex h-16 items-center gap-6">
        <Link
          href={href(locale, "/")}
          className="flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-tight text-ink"
        >
          <Image src="/logo-transparent.svg" alt="" width={15} height={20} />
          PantaziSoft
        </Link>

        <nav aria-label={t.label} className="ml-4 hidden lg:block">
          <NavMenu groups={groups} links={links} />
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LangSwitch locale={locale} label={t.language} />
          <span
            aria-hidden="true"
            className="hidden h-6 w-px bg-line lg:block"
          />
          <Link
            href={cta.href}
            className="btn btn-primary hidden h-10 px-4 text-sm lg:inline-flex"
          >
            {cta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <MobileMenu
            groups={groups}
            links={links}
            cta={cta}
            labels={{ open: t.openMenu, close: t.closeMenu }}
          />
        </div>
      </div>
    </header>
  );
}
