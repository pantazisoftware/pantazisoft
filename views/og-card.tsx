/* eslint-disable @next/next/no-img-element -- rendered once into a PNG by
   scripts/og-images.mjs; next/image's lazy loading would only get in the way. */
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { coverOf, getAllProducts, getProduct } from "@/lib/products";
import { getService, getServices } from "@/lib/services";
import { serviceArt } from "@/components/illustrations";

/* ── Open Graph cards ──────────────────────────────────────────────────────
   One 1200×630 card per page, in the site's own language: a serif headline
   on paper beside a rounded plate. Served only by the dev server at
   /og/<locale>/<card>; scripts/og-images.mjs captures each one into
   public/og/<locale>/<card>.png. */

const INK = "#0b0b0c";
const LIME = "#7ccf00";
const RISE = "M0 35A35 35 0 0 1 70 35Z";
const FALL = "M30 35H100A35 35 0 0 1 30 35Z";

/** Every card id; keep in step with scripts/og-images.mjs. */
export const OG_CARDS = [
  "home",
  "services",
  "media-kit",
  ...getServices("en").map((s) => s.slug),
  ...getAllProducts("en").map((p) => p.slug),
];

export function OgCard({ locale, card }: { locale: Locale; card: string }) {
  const dict = getDictionary(locale);

  if (card === "home") {
    const t = dict.home;
    return (
      <Frame
        title={<Marked text={t.h1} mark={t.h1Mark} />}
        lead={t.lead}
        plate={<ProductMosaic locale={locale} />}
      />
    );
  }

  if (card === "services") {
    const t = dict.services;
    return (
      <Frame
        label={dict.footer.services}
        title={t.h1}
        lead={t.lead}
        path="/services"
        plate={
          <div className="grid h-full grid-cols-2 gap-3 rounded-[2.25rem] bg-soft p-3">
            {getServices(locale).map((s) => {
              const Art = serviceArt[s.slug];
              return (
                <div key={s.slug} className="grid place-items-center overflow-hidden rounded-[1.5rem] bg-paper">
                  <Art className="w-[125%] max-w-none" />
                </div>
              );
            })}
          </div>
        }
      />
    );
  }

  if (card === "media-kit") {
    const t = dict.mediaKit;
    return (
      <Frame
        label="PantaziSoft"
        title={t.h1}
        lead={t.description}
        path="/media-kit"
        plate={
          <div className="grid h-full place-items-center rounded-[2.25rem] bg-ink px-[16%]">
            <svg viewBox="0 0 100 70" className="w-full">
              <path fill="#fff" d={RISE} />
              <path fill={LIME} d={FALL} />
            </svg>
          </div>
        }
      />
    );
  }

  const service = getService(locale, card);
  if (service) {
    const Art = serviceArt[service.slug];
    return (
      <Frame
        label={dict.footer.services}
        title={service.name}
        lead={service.tagline}
        path={service.path}
        plate={
          <div className="grid h-full place-items-center overflow-hidden rounded-[2.25rem] bg-soft">
            <Art className="w-[108%] max-w-none" />
          </div>
        }
      />
    );
  }

  const product = getProduct(locale, card);
  if (product) {
    const ios = product.kind === "ios";
    const phones = product.screenshots.filter((s) => s.height > s.width).slice(0, 2);
    return (
      <Frame
        label={product.category}
        title={product.name}
        lead={product.tagline}
        path={product.path}
        plate={
          <div
            className="relative h-full overflow-hidden rounded-[2.25rem]"
            style={{ background: product.tint }}
          >
            {ios ? (
              phones.map((shot, i) => (
                <div
                  key={shot.src}
                  className="absolute w-[190px] rounded-[34px] bg-ink p-[7px] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)]"
                  style={{
                    left: i ? 236 : 70,
                    top: i ? 60 : 110,
                    rotate: i ? "4deg" : "-6deg",
                  }}
                >
                  <img src={shot.src} alt="" className="block w-full rounded-[27px]" />
                </div>
              ))
            ) : (
              <div className="absolute top-[64px] left-[56px] w-[620px] overflow-hidden rounded-[16px] bg-paper shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_24px_48px_-16px_rgb(0_0_0/0.35)]">
                <div className="flex h-8 items-center gap-1.5 border-b border-line bg-[#f3f3f1] px-3.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-[#d9d9d4]" />
                  <i className="h-2.5 w-2.5 rounded-full bg-[#d9d9d4]" />
                  <i className="h-2.5 w-2.5 rounded-full bg-[#d9d9d4]" />
                </div>
                <img src={coverOf(product).src} alt="" className="block w-full" />
              </div>
            )}
          </div>
        }
      />
    );
  }

  return null;
}

/* ── Parts ─────────────────────────────────────────────────────────────── */

function Frame({
  label,
  title,
  lead,
  path,
  plate,
}: {
  label?: string;
  title: ReactNode;
  lead: string;
  path?: string;
  plate: ReactNode;
}) {
  return (
    <div className="relative flex h-[630px] w-[1200px] overflow-hidden bg-paper">
      <div className="flex w-[640px] flex-none flex-col py-14 pr-12 pl-14">
        <Lockup />
        <div className="mt-auto">
          {label && <p className="mb-5 text-[20px] font-medium text-muted">{label}</p>}
          <h1 className="!text-[72px] !leading-[0.95] text-balance">{title}</h1>
          <p className="mt-6 line-clamp-4 text-[22px] leading-[1.45] text-body">{lead}</p>
        </div>
        <p className="mt-9 text-[18px] font-medium text-muted">
          pantazisoft.com{path && <span className="text-ink/35">{path}</span>}
        </p>
      </div>
      <div className="min-w-0 flex-1 py-6 pr-6">{plate}</div>
    </div>
  );
}

function Lockup() {
  return (
    <span className="inline-flex items-center gap-3 text-ink">
      <svg viewBox="0 0 100 70" className="w-[40px]">
        <path fill={INK} d={RISE} />
        <path fill={LIME} d={FALL} />
      </svg>
      <span
        className="text-[27px] leading-none font-semibold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        PantaziSoft
      </span>
    </span>
  );
}

/** The home page's lime underline, drawn in place (no animation). */
function Marked({ text, mark }: { text: string; mark: string }) {
  const i = text.indexOf(mark);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="relative inline-block whitespace-nowrap">
        {mark}
        <svg
          aria-hidden="true"
          viewBox="0 0 300 24"
          preserveAspectRatio="none"
          className="absolute -bottom-[0.22em] left-[-2%] h-[0.38em] w-[104%] text-lime"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path strokeWidth={7} vectorEffect="non-scaling-stroke" d="M4 15C42 9 97 6 151 7s103 3 145 0" />
          <path strokeWidth={5} vectorEffect="non-scaling-stroke" d="M38 21c55-6 124-8 214-4" />
        </svg>
      </span>
      {text.slice(i + mark.length)}
    </>
  );
}

/** Four listed products, each on its colour with its screenshot rising out
 *  of the bottom: the header menu's plates, tiled. */
function ProductMosaic({ locale }: { locale: Locale }) {
  const products = getAllProducts(locale)
    .filter((p) => p.listed)
    .slice(0, 4);
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {products.map((p, i) => (
        <div
          key={p.slug}
          className={`relative overflow-hidden ${
            ["rounded-tl-[2.25rem]", "rounded-tr-[2.25rem]", "rounded-bl-[2.25rem]", "rounded-br-[2.25rem]"][i]
          } rounded-[1.25rem]`}
          style={{ background: p.tint }}
        >
          <img
            src={coverOf(p).src}
            alt=""
            className="absolute top-[22%] left-[12%] w-[100%] rounded-[8px] shadow-[0_16px_32px_-12px_rgb(0_0_0/0.4)]"
          />
        </div>
      ))}
    </div>
  );
}
