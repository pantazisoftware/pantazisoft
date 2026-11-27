import { statSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import { Download } from "lucide-react";
import { pageMeta, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { outfit } from "@/lib/fonts";
import { organization } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import "./media-kit.css";

/* ── /media-kit ────────────────────────────────────────────────────────────
   Every file offered here is generated (scripts/brand-kit.mjs,
   brand-motion.mjs, finish-brand.mjs) and zipped by `npm run brand:zip`. */

const INK = "#0b0b0c";
const LIME = "#7ccf00";
const PAPER = "#ffffff";
/* The mark's two halves, as in scripts/brand-mark.mjs. */
const RISE = "M0 35A35 35 0 0 1 70 35Z";
const FALL = "M30 35H100A35 35 0 0 1 30 35Z";

const ZIP = "/pantazisoft-media-kit.zip";
const STYLES = [
  "solid",
  "duotone",
  "outline",
  "fineline",
  "gradient",
  "doodle",
  "hashed",
  "dither",
] as const;
const MOTIONS = ["initials", "arrive", "wave", "unfold", "draw", "spin"] as const;

export function mediaKitMetadata(locale: Locale) {
  const t = getDictionary(locale).mediaKit;
  return pageMeta({
    locale,
    path: "/media-kit",
    title: t.title,
    description: t.description,
    image: `/og/${locale}/media-kit.png`,
  });
}

/** The zip's size, read when the page is built, so the label stays true. */
function zipSize(locale: Locale) {
  try {
    const mb = statSync(join(process.cwd(), "public", ZIP)).size / 1e6;
    return `${mb.toLocaleString(locale === "ro" ? "ro-RO" : "en-GB", {
      maximumFractionDigits: 1,
    })} MB`;
  } catch {
    return null;
  }
}

export function MediaKitPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.mediaKit;
  const crumbs = [
    { label: dict.service.home, path: "/" },
    { label: t.crumb, path: "/media-kit" },
  ];
  const size = zipSize(locale);

  return (
    <div className={outfit.variable}>
      <JsonLd graph={[organization, breadcrumbSchema(locale, crumbs)]} />

      <section className="wrap pt-10 pb-16 md:pt-14 md:pb-20">
        <Breadcrumb locale={locale} crumbs={crumbs} />
        <h1 className="mt-8">{t.h1}</h1>
        <p className="lead mt-6 max-w-2xl">{t.lead}</p>
        <a href={ZIP} download className="btn btn-primary mt-9">
          <Download aria-hidden="true" className="h-4 w-4" />
          {t.downloadAll}
          <span className="font-normal text-white/55">
            {t.zip}
            {size && ` · ${size}`}
          </span>
        </a>
      </section>

      {/* Logo: the symbol with the name */}
      <Block id="logo" title={t.logo.title} body={t.logo.body}>
        <ul className="grid gap-x-5 gap-y-10 md:grid-cols-2">
          <Tile
            plate={
              <Plate className="aspect-[16/9] bg-soft px-[14%]">
                <Lockup main={INK} />
              </Plate>
            }
            name={t.light}
            files={[
              ["SVG", "/brand/pantazisoft-lockup.svg"],
              ["PNG", "/brand/pantazisoft-lockup.png"],
            ]}
          />
          <Tile
            plate={
              <Plate className="aspect-[16/9] bg-ink px-[14%]">
                <Lockup main={PAPER} />
              </Plate>
            }
            name={t.dark}
            files={[
              ["SVG", "/brand/pantazisoft-lockup-white.svg"],
              ["PNG", "/brand/pantazisoft-lockup-white.png"],
            ]}
          />
        </ul>
        <p className="label mt-8 max-w-2xl">{t.logo.note}</p>
      </Block>

      {/* Symbol */}
      <Block id="symbol" title={t.symbol.title} body={t.symbol.body}>
        <ul className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <Tile
            plate={
              <Plate className="aspect-square bg-soft px-[24%]">
                <Mark main={INK} accent={LIME} />
              </Plate>
            }
            name={t.symbol.onLight}
            files={[
              ["SVG", "/brand/pantazisoft-mark.svg"],
              ["PNG", "/logo-transparent.png"],
            ]}
          />
          <Tile
            plate={
              <Plate className="aspect-square bg-ink px-[24%]">
                <Mark main={PAPER} accent={LIME} />
              </Plate>
            }
            name={t.symbol.onDark}
            files={[
              ["SVG", "/brand/pantazisoft-mark-white.svg"],
              ["PNG", "/brand/styles/wave-solid-dark.png"],
            ]}
          />
          <Tile
            plate={
              <Plate className="aspect-square bg-lime px-[24%]">
                <Mark main={INK} accent={PAPER} />
              </Plate>
            }
            name={t.symbol.onLime}
            files={[["SVG", "/logo-green-bg.svg"]]}
          />
          <Tile
            plate={
              <Plate className="aspect-square bg-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-icon.svg"
                  alt=""
                  width={512}
                  height={512}
                  className="w-[52%] rounded-[22%] shadow-[0_0_0_1px_rgb(0_0_0/0.04),0_2px_4px_rgb(0_0_0/0.06),0_18px_36px_-12px_rgb(0_0_0/0.35)]"
                />
              </Plate>
            }
            name={t.symbol.appIcon}
            files={[
              ["SVG", "/logo-icon.svg"],
              ["PNG", "/logo.png"],
            ]}
          />
        </ul>
      </Block>

      {/* Variations: each style, light half and dark half */}
      <Block id="variations" title={t.variations.title} body={t.variations.body}>
        <ul className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STYLES.map((style) => (
            <Tile
              key={style}
              plate={
                <span className="grid aspect-[2/1] grid-cols-2 overflow-hidden rounded-[1.5rem]">
                  <StyleHalf src={`/brand/styles/wave-${style}-light.svg`} className="bg-soft" />
                  <StyleHalf src={`/brand/styles/wave-${style}-dark.svg`} className="bg-ink" />
                </span>
              }
              name={t.variations.names[style]}
              files={[
                [`${t.light} SVG`, `/brand/styles/wave-${style}-light.svg`],
                ["PNG", `/brand/styles/wave-${style}-light.png`],
                [`${t.dark} SVG`, `/brand/styles/wave-${style}-dark.svg`],
                ["PNG", `/brand/styles/wave-${style}-dark.png`],
              ]}
              stacked
            />
          ))}
        </ul>
      </Block>

      {/* Animations: the logo reveal, then the symbol loops */}
      <Block id="animations" title={t.motion.title} body={t.motion.body}>
        <ul className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <Tile
            className="sm:col-span-2 lg:col-span-3"
            plate={
              <Plate className="aspect-[16/9] bg-ink px-[18%] sm:aspect-[21/8]">
                <Lockup main={PAPER} animated />
              </Plate>
            }
            name={t.motion.reveal.name}
            use={t.motion.reveal.use}
          />
          {MOTIONS.map((motion, i) => {
            const dark = i % 2 === 1;
            return (
              <Tile
                key={motion}
                plate={
                  <Plate className={`aspect-[4/3] ${dark ? "bg-ink" : "bg-soft"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/brand/animated/wave-${motion}-${dark ? "dark" : "light"}.svg`}
                      alt=""
                      width={480}
                      height={360}
                      className="h-full w-full"
                    />
                  </Plate>
                }
                name={t.motion.items[motion].name}
                use={t.motion.items[motion].use}
                files={[
                  [`${t.light} SVG`, `/brand/animated/wave-${motion}-light.svg`],
                  [`${t.dark} SVG`, `/brand/animated/wave-${motion}-dark.svg`],
                ]}
                stacked
              />
            );
          })}
        </ul>
      </Block>

      {/* Colour */}
      <Block id="colour" title={t.colour.title} body={t.colour.body}>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {(
            [
              ["ink", INK, "text-white"],
              ["lime", LIME, "text-ink"],
              ["limeInk", "#45700c", "text-white"],
              ["paper", PAPER, "text-ink"],
              ["soft", "#f6f6f3", "text-ink"],
            ] as const
          ).map(([key, hex, text]) => (
            <li key={key}>
              <span
                className={`flex aspect-[4/3] items-end rounded-[1.5rem] p-4 font-mono text-[0.8125rem] uppercase ${text} ${
                  key === "paper" ? "ring-1 ring-line ring-inset" : ""
                }`}
                style={{ background: hex }}
              >
                {hex}
              </span>
              <span className="mt-3 block font-display text-[1.375rem] leading-none text-ink">
                {t.colour.names[key]}
              </span>
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}

/* ── Parts ─────────────────────────────────────────────────────────────── */

function Block({
  id,
  title,
  body,
  children,
}: {
  id: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section scroll-mt-20">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2>{title}</h2>
          <p className="mt-4 text-body">{body}</p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/** A coloured plate with its picture centred, the home page's card shape. */
function Plate({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <span className={`grid place-items-center overflow-hidden rounded-[1.5rem] ${className}`}>
      {children}
    </span>
  );
}

function StyleHalf({ src, className }: { src: string; className: string }) {
  return (
    <span className={`grid place-items-center px-[16%] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={108} height={78} className="w-full" />
    </span>
  );
}

/** A plate, its name, and the files it comes as. */
function Tile({
  plate,
  name,
  use,
  files = [],
  stacked = false,
  className = "",
}: {
  plate: ReactNode;
  name: string;
  use?: string;
  files?: [label: string, path: string][];
  /** Put the downloads under the name instead of beside it. */
  stacked?: boolean;
  className?: string;
}) {
  return (
    <li className={className}>
      {plate}
      <div
        className={`mt-4 flex gap-3 ${
          stacked ? "flex-col" : "flex-wrap items-center justify-between"
        }`}
      >
        <div>
          <p className="font-display text-[1.375rem] leading-none text-ink">{name}</p>
          {use && <p className="mt-1.5 text-[0.875rem] text-muted">{use}</p>}
        </div>
        {files.length > 0 && (
          <p className="flex flex-wrap gap-1.5">
            {files.map(([label, path]) => (
              <a
                key={path}
                href={path}
                download
                className="inline-flex h-8 items-center gap-1.5 rounded-full bg-soft pr-3 pl-2.5 text-[0.8125rem] font-medium text-ink transition-colors hover:bg-line"
              >
                <Download aria-hidden="true" className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </p>
        )}
      </div>
    </li>
  );
}

function Mark({ main, accent }: { main: string; accent: string }) {
  return (
    <svg viewBox="0 0 100 70" className="w-full" aria-hidden="true">
      <path fill={main} d={RISE} />
      <path fill={accent} d={FALL} />
    </svg>
  );
}

/** The lockup drawn live, exactly as public/brand/pantazisoft-lockup.svg,
 *  with Outfit loaded by this page so the name renders in its own face. */
function Lockup({ main, animated = false }: { main: string; animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 1153 240"
      role="img"
      aria-label="PantaziSoft"
      className={`w-full ${animated ? "mk-reveal" : ""}`}
    >
      <g transform="translate(0 49.18) scale(1.572)">
        <path className="mk-r" fill={main} d={RISE} />
        <path className="mk-f" fill={LIME} d={FALL} />
      </g>
      <text
        className="mk-name"
        x="207.6"
        y="163"
        fill={main}
        fontSize="168"
        fontWeight="600"
        letterSpacing="-3.7"
        style={{ fontFamily: "var(--font-outfit), ui-sans-serif, system-ui, sans-serif" }}
      >
        PantaziSoft
      </text>
    </svg>
  );
}
