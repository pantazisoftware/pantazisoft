import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { coverOf, getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";
import { serviceIcons } from "@/lib/service-icons";
import { serviceArt } from "@/components/illustrations";
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
      // Each product as a small copy of its home-page card: the product's
      // own colour with its real screen on it.
      items: getProducts(locale).map((p) => {
        const cover = coverOf(p);
        return {
          href: href(locale, p.path),
          label: p.name,
          description: p.category,
          // Keys: these elements ride in an array from a server component
          // into client ones, so React asks for them.
          icon: (
            <span
              key={p.slug}
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{ background: p.tint }}
            >
              <Image
                src={p.icon}
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] rounded-[22%] object-contain shadow-[0_2px_6px_-2px_rgb(0_0_0/0.35)]"
              />
            </span>
          ),
          mark: (
            <Image
              key={p.slug}
              src={p.icon}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] shrink-0 rounded-[22%] object-contain"
            />
          ),
          plate: (
            <span
              key={p.slug}
              className="relative block aspect-[4/3] overflow-hidden rounded-2xl"
              style={{ background: p.tint }}
            >
              <Image
                src={cover.src}
                alt=""
                width={cover.width}
                height={cover.height}
                sizes="200px"
                className="absolute top-[18%] left-1/2 h-auto w-[82%] -translate-x-1/2 rounded-[6px] shadow-[0_14px_28px_-12px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
              />
            </span>
          ),
        };
      }),
      all: { href: href(locale, "/#products"), label: t.allProducts },
    },
    {
      label: t.services,
      intro: t.servicesIntro,
      // The home page's service plates, small: the illustration on the soft
      // plate that turns lime on hover.
      items: getServices(locale).map((s) => {
        const Icon = serviceIcons[s.slug];
        const Art = serviceArt[s.slug];
        return {
          href: href(locale, s.path),
          label: s.name,
          description: s.tagline,
          icon: (
            <span key={s.slug} className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-ink">
              <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </span>
          ),
          plate: (
            <span key={s.slug} className="grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-soft px-[14%] transition-colors duration-500 group-hover:bg-lime/15">
              <Art className="w-full transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03]" />
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
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      {/* Navigation left, the name centred, language and the one button on
          the right. Below lg the name moves left and the menu takes over. */}
      <div className="frame flex h-[4.5rem] items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label={t.label} className="order-1 hidden lg:block">
          <NavMenu groups={groups} links={links} />
        </nav>

        <Link
          href={href(locale, "/")}
          className="order-0 flex items-center gap-2.5 text-[1.125rem] font-semibold tracking-tight text-ink lg:order-2"
        >
          <Image src="/logo-transparent.svg" alt="" width={24} height={17} />
          PantaziSoft
        </Link>

        <div className="order-3 ml-auto flex items-center gap-3">
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
