import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { absolute, href, pageMeta, SITE_URL, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { coverOf, getProducts } from "@/lib/products";
import { getServices } from "@/lib/services";
import { resolveTech, type TechId } from "@/lib/tech";
import { IllustratedSteps } from "@/components/illustrated-steps";
import { processArt, serviceArt } from "@/components/illustrations";
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
    image: `/og/${locale}/home.png`,
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
      {/* One large picture, nearly the height of the screen, with the
          headline set big over its lower edge and a single line beside it. */}
      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative isolate flex min-h-[34rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-ink sm:min-h-[38rem] lg:h-[calc(100svh-6rem)] lg:max-h-[56rem]">
          <Image
            src="/photos/team.jpg"
            alt={t.heroAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[60%_center]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/35 to-black/10"
          />
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:p-14">
            <h1 className="max-w-[14ch] text-white lg:max-w-none">
              <Marked text={t.h1} mark={t.h1Mark} />
            </h1>
            <div className="lg:pb-3">
              <p className="lead max-w-md text-white/85">{t.lead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={href(locale, "/#contact")} className="btn btn-lime">
                  {t.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={href(locale, "/#products")}
                  className="btn btn-ghost-light"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack, as a slow strip of marks */}
      <section className="py-14 md:py-20">
        <p className="label text-center">{t.builtWith}</p>
        <div className="marquee mt-8">
          <div className="marquee-track">
            {[false, true].map((copy) => (
              <ul
                key={String(copy)}
                aria-hidden={copy || undefined}
                className="flex shrink-0 items-center gap-x-14 pr-14"
              >
                {resolveTech(stack, locale).map((tech) => (
                  <li
                    key={tech.id}
                    className="flex items-center gap-2.5 text-[1.0625rem] font-medium whitespace-nowrap text-ink/70"
                  >
                    {tech.brand && (
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-7 w-7 shrink-0 fill-current"
                      >
                        <path d={tech.brand.path} />
                      </svg>
                    )}
                    {tech.label}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Services: one big picture and a name each */}
      <section id="services" className="scroll-mt-16 pb-24 md:pb-32">
        <div className="frame">
          <SectionHead
            title={t.servicesTitle}
            more={{
              href: href(locale, "/services"),
              label: dict.footer.allServices,
            }}
          />
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Art = serviceArt[service.slug];
              return (
                <li key={service.slug}>
                  <Link
                    href={href(locale, service.path)}
                    className="card group block"
                  >
                    <span className="grid aspect-square place-items-center rounded-[1.5rem] bg-soft p-6 transition-colors duration-500 group-hover:bg-lime/15">
                      <Art className="w-full transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03]" />
                    </span>
                    <span className="mt-5 flex items-center justify-between gap-4">
                      <span className="card-title font-display text-[1.875rem] leading-[1.05] text-ink">
                        {service.name}
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 -translate-x-1 text-ink opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Products: large colour plates, name and kind underneath */}
      <section id="products" className="scroll-mt-16 pb-24 md:pb-32">
        <div className="frame">
          <SectionHead title={t.productsTitle} />
          <ul className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
            {products.map((product, i) => {
              const wide = i === 0;
              const cover = coverOf(product);
              return (
                <li key={product.slug} className={wide ? "md:col-span-2" : ""}>
                  <Link
                    href={href(locale, product.path)}
                    className="card group block"
                  >
                    <span
                      className={`relative block overflow-hidden rounded-[1.5rem] ${
                        wide ? "aspect-[4/3] md:aspect-[2/1]" : "aspect-[4/3]"
                      }`}
                      style={{ background: product.tint }}
                    >
                      <Image
                        src={cover.src}
                        alt=""
                        width={cover.width}
                        height={cover.height}
                        sizes={
                          wide
                            ? "(min-width: 768px) 1000px, 90vw"
                            : "(min-width: 768px) 560px, 90vw"
                        }
                        className={`absolute top-[11%] left-1/2 h-auto -translate-x-1/2 rounded-xl shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)] transition-transform duration-700 group-hover:-translate-y-2 ${
                          wide ? "w-[86%] md:w-[72%]" : "w-[84%]"
                        }`}
                      />
                    </span>
                    <span className="mt-5 flex items-start gap-3">
                      <Image
                        src={product.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 shrink-0 rounded-[22%] object-contain"
                      />
                      <span>
                        <span className="card-title block text-[1.25rem] font-medium text-ink">
                          {product.name}
                        </span>
                        <span className="block text-[0.9375rem] text-muted">
                          {dict.product[product.kind]} · {product.category}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Who we build for */}
      <section className="pb-24 md:pb-32">
        <div className="frame">
          <SectionHead title={t.forTitle} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.sectors.map((sector) => (
              <li key={sector.href}>
                <Link
                  href={href(locale, sector.href)}
                  className="card group relative isolate block aspect-[4/5] overflow-hidden rounded-[1.5rem]"
                >
                  <Image
                    src={sector.photo}
                    alt={sector.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="card-title font-display text-[2rem] leading-[1.02] font-normal text-white">
                      {sector.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.8125rem] font-medium text-white backdrop-blur">
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

      {/* Process */}
      <section className="pb-24 md:pb-32">
        <div className="frame">
          <SectionHead title={t.processTitle} />
          <div className="mt-12">
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

      {/* About: a big photo, a short paragraph, four numbers */}
      <section id="about" className="scroll-mt-16 pb-24 md:pb-32">
        <div className="frame grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Image
              src="/photos/desk.jpg"
              alt={t.aboutAlt}
              width={1800}
              height={1198}
              sizes="(max-width: 1024px) 100vw, 680px"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover lg:aspect-[5/6]"
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
            <SectionHead title={t.aboutTitle} />
            <p className="lead mt-6 max-w-xl">{t.about[1]}</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-[3.25rem] leading-none text-ink tabular-nums">
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

      {/* Contact: the dark band the footer continues */}
      <section id="contact" className="scroll-mt-16 bg-ink pt-24 pb-20 text-white/75 md:pt-32">
        <div className="frame grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="text-white">{t.contactTitle}</h2>
            <p className="lead mt-5 max-w-md text-white/70">{t.contactLead}</p>
            <ul className="mt-8 grid gap-3 text-[0.9375rem]">
              {t.contactPoints.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-lime"
                    strokeWidth={2.5}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-paper p-5 text-body sm:p-8">
            <ContactForm t={dict.form} />
          </div>
        </div>
      </section>
    </>
  );
}

/** A colour plate behind each product's screenshot, taken from its brand. */
/** A large heading over a section, with an optional link to the full list on
 *  the right. */
function SectionHead({
  title,
  more,
}: {
  title: string;
  more?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div className="max-w-3xl">
        <h2>{title}</h2>
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
