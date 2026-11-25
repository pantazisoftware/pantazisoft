import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { absolute, href, pageMeta, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { coverOf, getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";
import { resolveTech, type TechId } from "@/lib/tech";
import { IllustratedSteps } from "@/components/illustrated-steps";
import { processArt } from "@/components/illustrations";
import { ServiceCards } from "@/components/service-cards";
import { organization, ORG_ID } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";

/** What the studio builds with, taken from the services' own stacks. */
const stack: TechId[] = [
  "nextjs",
  "react",
  "typescript",
  "nodejs",
  "postgresql",
  "tailwind",
  "swift",
  "kotlin",
  "reactnative",
  "firebase",
  "claude",
  "stripe",
  "vercel",
  "docker",
];

export function homeMetadata(locale: Locale) {
  const t = getDictionary(locale).home;
  return pageMeta({
    locale,
    path: "/",
    title: t.title,
    description: t.description,
    absoluteTitle: true,
  });
}

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const products = getProducts(locale);
  const services = getServices(locale);
  const stats = [
    { value: "2020", label: t.stats.founded },
    // Counted from the data, so it cannot drift when a product is added.
    { value: String(products.length), label: t.stats.products },
    { value: "24h", label: t.stats.reply },
    { value: "100%", label: t.stats.code },
  ];
  const icon = (slug: string) =>
    products.find((p) => p.slug === slug)?.icon ?? "";

  return (
    <>
      <JsonLd
        graph={[
          organization,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "PantaziSoft",
            inLanguage: ["en", "ro"],
            publisher: { "@id": ORG_ID },
          },
          {
            "@type": "ItemList",
            name: t.productsTitle,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: absolute(locale, p.path),
            })),
          },
        ]}
      />

      {/* Hero */}
      {/* Copy on the page itself, headline left and the pitch right, then
          one wide photo with the studio's numbers fixed under it. */}
      <section className="pt-12 md:pt-20">
        <div className="wrap">
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[0.8125rem] font-medium text-body">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-lime"
            />
            {t.eyebrow}
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            <h1 className="max-w-[18ch] lg:max-w-none">
              <Marked text={t.h1} mark={t.h1Mark} />
            </h1>
            <div className="lg:pb-2">
              <p className="lead">{t.lead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={href(locale, "/#contact")}
                  className="btn btn-primary"
                >
                  {t.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={href(locale, "/#products")}
                  className="btn btn-secondary"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap mt-12 md:mt-16">
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="relative">
              <Image
                src="/photos/team.jpg"
                alt={t.heroAlt}
                width={1800}
                height={1013}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="aspect-[16/9] w-full object-cover object-[60%_center] md:aspect-[21/9]"
              />
              <HeroCards t={t.cards} icon={icon} />
            </div>
            <dl className="grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-paper px-5 py-6 sm:px-7">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-[2rem] leading-none font-semibold tracking-tight text-ink tabular-nums md:text-[2.5rem]">
                    {stat.value}
                  </dd>
                  <dd
                    className="mt-2 text-[0.875rem] leading-snug text-muted"
                    aria-hidden="true"
                  >
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mt-16 md:mt-20">
        <div className="wrap">
          <p className="label text-center">{t.builtWith}</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-6">
            {resolveTech(stack, locale).map((tech) => (
              <li
                key={tech.id}
                className="group flex items-center gap-2.5 text-[0.9375rem] font-medium text-muted"
                title={tech.label}
              >
                {tech.brand && (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0"
                    fill={`#${tech.brand.hex}`}
                  >
                    <path d={tech.brand.path} />
                  </svg>
                )}
                <span className="hidden sm:inline">{tech.label}</span>
                <span className="sr-only sm:hidden">{tech.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we build for */}
      <section className="section mt-16 md:mt-20">
        <div className="wrap">
          <SectionHead
            eyebrow={t.forEyebrow}
            title={t.forTitle}
            lead={t.forLead}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.sectors.map((sector) => (
              <li key={sector.href}>
                <Link
                  href={href(locale, sector.href)}
                  className="card group relative isolate block aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[3/4]"
                >
                  <Image
                    src={sector.photo}
                    alt={sector.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/25 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="card-title text-[1.1875rem] text-white">
                      {sector.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.8125rem] font-medium text-white backdrop-blur">
                      {sector.link}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products, as case studies */}
      <section id="products" className="section scroll-mt-16">
        <div className="wrap">
          <SectionHead
            eyebrow={t.productsEyebrow}
            title={t.productsTitle}
            lead={t.productsLead}
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product, i) => {
              const featured = i === 0;
              const cover = coverOf(product);
              return (
                <li
                  key={product.slug}
                  className={featured ? "md:col-span-2" : ""}
                >
                  <Link
                    href={href(locale, product.path)}
                    className={`card group grid h-full overflow-hidden rounded-2xl border border-line bg-paper transition-colors hover:border-ink/25 ${
                      featured
                        ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]"
                        : ""
                    }`}
                  >
                    <span
                      className={`relative block overflow-hidden bg-soft ${
                        featured
                          ? "aspect-[16/10] md:order-2 md:aspect-auto md:min-h-[22rem]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={cover.src}
                        alt=""
                        fill
                        sizes={
                          featured
                            ? "(min-width: 768px) 720px, 100vw"
                            : "(min-width: 768px) 600px, 100vw"
                        }
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </span>
                    <span
                      className={`flex flex-col p-6 sm:p-7 ${
                        featured ? "md:justify-center md:p-10" : ""
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Image
                          src={product.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 rounded-[22%] object-contain"
                        />
                        <span>
                          <span className="card-title block font-semibold text-ink">
                            {product.name}
                          </span>
                          <span className="label block">
                            {dict.product[product.kind]}
                          </span>
                        </span>
                      </span>
                      <span
                        className={`mt-4 block ${
                          featured
                            ? "text-[1.0625rem] md:text-[1.1875rem]"
                            : "text-[0.9375rem]"
                        }`}
                      >
                        {product.tagline}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.9375rem] font-medium text-ink">
                        {t.caseLink}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section scroll-mt-16">
        <div className="wrap">
          <SectionHead
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            lead={t.servicesLead}
            more={{
              href: href(locale, "/services"),
              label: dict.footer.allServices,
            }}
          />
          <div className="mt-10">
            <ServiceCards services={services} locale={locale} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={t.processEyebrow} title={t.processTitle} />
          <div className="mt-10">
            <IllustratedSteps
              steps={t.process.map((step) => ({
                title: step.title,
                body: step.short,
              }))}
              art={processArt}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section scroll-mt-16">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Image
              src="/photos/desk.jpg"
              alt={t.aboutAlt}
              width={1800}
              height={1198}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[5/6]"
            />
            <p className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-paper/95 py-2.5 pr-5 pl-2.5 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur">
              <Image
                src="/eduard-pantazi.webp"
                alt={t.founderAlt}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-top"
              />
              <span>
                <span className="block font-semibold text-ink">
                  Eduard Pantazi
                </span>
                <span className="label">{t.founderRole}</span>
              </span>
            </p>
          </div>
          <div>
            <SectionHead eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
            {t.about.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-soft">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <div>
            <h2>{t.contactTitle}</h2>
            <p className="mt-3 text-[0.9375rem]">{t.contactLead}</p>
            <ul className="mt-6 grid gap-2.5 text-[0.9375rem]">
              {t.contactPoints.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-lime-ink"
                    strokeWidth={2.5}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04)] sm:p-8">
            <ContactForm t={dict.form} />
          </div>
        </div>
      </section>
    </>
  );
}

/** Three small product cards floating over the hero photo: a WebScore
 *  result, a Bookify booking and a FeedFast status line. Decorative, so
 *  they are hidden from screen readers and from small screens. */
function HeroCards({
  t,
  icon,
}: {
  t: ReturnType<typeof getDictionary>["home"]["cards"];
  icon: (slug: string) => string;
}) {
  const score = 96;
  const c = 2 * Math.PI * 22;
  return (
    <div aria-hidden="true" className="pointer-events-none hidden md:block">
      <div className="float-card absolute top-6 left-6 w-64 rounded-2xl bg-paper/95 p-4 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur lg:top-8 lg:left-8">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="22"
              className="stroke-line"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="28"
              cy="28"
              r="22"
              className="stroke-lime"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(c * score) / 100} ${c}`}
            />
            <text
              x="28"
              y="28"
              transform="rotate(90 28 28)"
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-ink text-[15px] font-semibold"
            >
              {score}
            </text>
          </svg>
          <div>
            <p className="flex items-center gap-1.5 text-[0.75rem] font-medium text-muted">
              <Image
                src={icon("webscore")}
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 rounded"
              />
              WebScore
            </p>
            <p className="font-semibold text-ink">{t.score}</p>
          </div>
        </div>
        <ul className="mt-3 grid gap-2">
          {t.rows.map(([label, value]) => (
            <li
              key={label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 text-[0.75rem] text-body"
            >
              {label}
              <span className="font-semibold text-ink tabular-nums">
                {value}
              </span>
              <span className="col-span-2 mt-1 h-1.5 rounded-full bg-line">
                <span
                  className="block h-full rounded-full bg-lime"
                  style={{ width: `${value}%` }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="float-card absolute top-6 right-6 flex items-center gap-2 rounded-full bg-paper/95 py-2 pr-4 pl-2 text-[0.8125rem] font-medium text-ink shadow-[0_12px_30px_-10px_rgb(0_0_0/0.35)] backdrop-blur [animation-delay:-2s] lg:top-8 lg:right-8">
        <Image
          src={icon("feedfast")}
          alt=""
          width={22}
          height={22}
          className="h-5.5 w-5.5 rounded-md"
        />
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-lime opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-lime" />
        </span>
        {t.status}
      </div>

      <div className="float-card absolute right-6 bottom-6 flex w-72 items-center gap-3 rounded-2xl bg-paper/95 p-3.5 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur [animation-delay:-4s] lg:right-8 lg:bottom-8">
        <Image
          src={icon("bookify")}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-[22%]"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[0.75rem] font-medium text-muted">Bookify</p>
          <p className="truncate text-[0.9375rem] font-semibold text-ink">
            {t.booking}
          </p>
          <p className="truncate text-[0.8125rem] text-body">{t.bookingMeta}</p>
        </div>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime text-white">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      </div>
    </div>
  );
}

/** Small label, heading and lead over a section, with an optional link to
 *  the full list on the right. */
function SectionHead({
  eyebrow,
  title,
  lead,
  more,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  more?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div className="max-w-2xl">
        <p className="label flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-lime"
          />
          {eyebrow}
        </p>
        <h2 className="mt-3">{title}</h2>
        {lead && <p className="mt-3">{lead}</p>}
      </div>
      {more && (
        <Link
          href={more.href}
          className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink"
        >
          {more.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

/** Underlines `mark` inside `text` with a hand-drawn stroke that draws itself
 *  in on load. The phrase stays plain text, so search engines and screen
 *  readers read the heading unchanged. */
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
          className="doodle absolute -bottom-[0.22em] left-[-2%] h-[0.38em] w-[104%] text-lime"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            pathLength={1}
            strokeWidth={7}
            d="M4 15C42 9 97 6 151 7s103 3 145 0"
          />
          <path pathLength={1} strokeWidth={5} d="M38 21c55-6 124-8 214-4" />
        </svg>
      </span>
      {text.slice(i + mark.length)}
    </>
  );
}
