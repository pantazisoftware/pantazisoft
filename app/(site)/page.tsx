import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { projects } from "@/lib/projects";
import { apps } from "@/lib/apps";
import { services } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";
import { HeroIllustration } from "@/components/hero-illustration";
import { AppCardSlider } from "@/components/app-card-slider";
import { ClientMarquee } from "@/components/client-marquee";
import { SectionHead, Index } from "@/components/band";
import { processGlyphs } from "@/components/process-glyphs";

const clientProjects = [
  { name: "Max Automotive", url: "https://maxautomotive.ro" },
  { name: "Bonchoux", url: "https://bonchoux.ro" },
  { name: "Producator Peleti", url: "https://producator-peleti.ro" },
  { name: "Repora", url: "https://repora.ro" },
];

const proof = [
  { title: "Fixed price up front", body: "Quoted in writing before a line is written." },
  { title: "Reply within 24 hours", body: "From the person who does the work, not a queue." },
  { title: "You own the code", body: "Full repository, no lock-in, no licence games." },
];

const stats = [
  { value: "2020", label: "Founded" },
  // Counted from the data, so it cannot drift when work is added.
  { value: `${apps.length + projects.length}`, label: "Products shipped" },
  { value: "24h", label: "Reply time" },
  { value: "100%", label: "Code you own" },
];

const process = [
  {
    title: "Scope",
    body: "A free call to work out what the thing actually is, followed by a written scope and a fixed price. If we are not the right fit, you get told that here.",
  },
  {
    title: "Design",
    body: "Screens and flows before code, so the shape of the product is agreed while it is still cheap to change. You see and sign off every screen.",
  },
  {
    title: "Build",
    body: "Weekly working builds on a real URL. Nothing is hidden until the end — you use the product as it grows and steer it as it does.",
  },
  {
    title: "Ship",
    body: "Deployment, domains, monitoring, and a handover of the whole repository. Then a support window while it settles into real use.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pantazisoft.com/#organization",
      name: "PantaziSoft",
      url: "https://pantazisoft.com",
      logo: "https://pantazisoft.com/android-chrome-512x512.png",
      image: "https://pantazisoft.com/og-image.png",
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Eduard Pantazi",
        url: "https://www.linkedin.com/in/eduardpantazi/",
        sameAs: [
          "https://x.com/eduard_pantazi",
          "https://www.linkedin.com/in/eduardpantazi/",
        ],
      },
      sameAs: [
        "https://x.com/eduard_pantazi",
        "https://www.linkedin.com/in/eduardpantazi/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pantazisoft.com/#website",
      url: "https://pantazisoft.com",
      name: "PantaziSoft",
      publisher: { "@id": "https://pantazisoft.com/#organization" },
    },
    ...services.map((service) => ({
      "@type": "Service" as const,
      name: service.name,
      url: `https://pantazisoft.com/services/${service.slug}`,
      provider: { "@id": "https://pantazisoft.com/#organization" },
      description: service.description,
      offers: {
        "@type": "Offer",
        price: service.priceNumeric,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: service.priceNumeric,
          priceCurrency: "USD",
          unitText: "project",
        },
      },
    })),
  ],
};

type WorkCard = {
  href: string;
  /** Small mark shown beside the name; decorative, the heading names the card. */
  icon: string;
  name: string;
  badge: string;
  tagline: string;
  cta: string;
  mediaRatio: string;
  media: ReactNode;
  accent?: CSSProperties;
};

/** Both kinds of work, flattened into one shape so they render identically. */
const workCards: WorkCard[] = [
  ...apps.map(
    (app): WorkCard => ({
      href: `/app/${app.slug}`,
      icon: app.logo,
      name: app.name,
      badge: "iOS app",
      tagline: app.homeTagline ?? app.tagline,
      cta: "View app",
      mediaRatio: "aspect-4/3",
      // The slider's page dots are the last place a per-app accent shows on the
      // home page, so the card still carries the colour vars they resolve.
      accent: {
        "--app-accent": app.accent.base,
        "--app-accent-hover": app.accent.hover,
      } as CSSProperties,
      media:
        app.screenshots.length > 0 ? (
          <AppCardSlider screenshots={app.screenshots.slice(0, 5)} />
        ) : (
          // An app can ship before its screenshots exist; the icon holds the
          // plate until they do.
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={app.logo}
              alt={`${app.name} app icon`}
              width={96}
              height={96}
            />
          </div>
        ),
    })
  ),
  ...projects.map(
    (project): WorkCard => ({
      href: `/projects/${project.slug}`,
      icon: project.favicon,
      name: project.name,
      badge: "Web app",
      tagline: project.tagline,
      cta: "View project",
      mediaRatio: "aspect-video",
      media: (
        <Image
          src={project.ogImage}
          alt={project.imageAlt ?? `${project.name} — ${project.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ),
    })
  ),
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad relative overflow-hidden py-14 md:py-20 lg:col-span-7 lg:py-24">
            <div
              className="grid-backdrop grid-backdrop-fade pointer-events-none absolute inset-0"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="load-in eyebrow eyebrow-lime">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-lime-ink opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-lime-ink" />
                </span>
                Available for new projects
              </span>

              <h1 className="load-in d1 mt-7 max-w-[16ch] text-[3rem] font-semibold leading-display tracking-display text-ink sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                We build web apps businesses run on
              </h1>

              <p className="load-in d2 mt-7 max-w-xl text-lg leading-body text-body md:text-xl">
                From MVP to production. We design, build, and ship modern web
                applications — fixed scope, fixed price, and a codebase you own
                outright at the end.
              </p>

              <div className="load-in d3 mt-9 flex flex-col sm:flex-row">
                <a href="#contact" className="btn btn-primary group w-full sm:w-auto">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#work"
                  className="btn btn-secondary w-full border-t-0 sm:w-auto sm:border-t sm:border-l-0"
                >
                  See our work
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center border-t border-line bg-panel px-4 py-10 sm:px-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:py-0">
            <div
              className="grid-backdrop pointer-events-none absolute inset-0 opacity-60"
              aria-hidden="true"
            />
            <div className="relative w-full load-in d4">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof strip ────────────────────────────────────────────────── */}
      <section className="band cells sm:grid-cols-3">
        {proof.map((item, i) => (
          <div
            key={item.title}
            className={`cell reveal s${i + 1} px-6 py-7 sm:px-8`}
          >
            <div className="flex items-center gap-2.5">
              <Check className="h-4 w-4 text-lime-ink" strokeWidth={2.75} />
              <p className="font-heading text-[0.9375rem] font-semibold tracking-title text-ink">
                {item.title}
              </p>
            </div>
            <p className="mt-2 text-sm leading-body text-muted">{item.body}</p>
          </div>
        ))}
      </section>

      {/* ── Client marquee ─────────────────────────────────────────────── */}
      <section className="band bg-panel">
        <div className="grid items-center md:grid-cols-[auto_1fr]">
          <p className="border-b border-line px-6 py-4 text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted sm:px-10 md:border-r md:border-b-0 md:py-6">
            Also shipped for
          </p>
          <ClientMarquee clients={clientProjects} />
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────── */}
      <section id="services" className="band">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              Three services,
              <br className="hidden sm:block" /> one standard of work
            </>
          }
          body="We specialise in three areas, and turn down work that falls outside them. Every engagement runs the same way, at the same level of care."
          action={{ href: "/services", label: "Compare all services" }}
        />
      </section>

      <section className="band cells md:grid-cols-3">
        {services.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={`cell group reveal s${i + 1} flex flex-col p-7 transition-colors hover:bg-panel md:p-9`}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center border border-ink bg-ink text-white transition-colors group-hover:bg-lime group-hover:text-ink">
                <service.icon className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <Index n={i + 1} />
            </div>

            <h3 className="mt-7 text-[1.375rem] font-semibold tracking-title text-ink">
              {service.name}
            </h3>
            <p className="mt-1.5 text-[0.9375rem] font-medium leading-body text-lime-ink">
              {service.tagline}
            </p>
            <p className="mt-4 flex-1 text-[0.9375rem] leading-body text-body">
              {service.description}
            </p>

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-6">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
                  Starting from
                </p>
                <p className="numeric mt-1.5 font-heading text-[2rem] font-semibold leading-none tracking-display text-ink">
                  {service.price}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                <span className="underline-grow">View service</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── Work ───────────────────────────────────────────────────────── */}
      <section id="work" className="band">
        <SectionHead
          eyebrow="Built by us"
          lime
          title={
            <>
              Products we designed,
              <br className="hidden sm:block" /> built, and shipped
            </>
          }
          body="Our own products and applications built for clients — each one live, in use, and maintained."
        />
      </section>

      <section className="band cells md:grid-cols-2">
        {/* iOS apps and web apps run through one card body, so the two kinds
            cannot drift apart: same white cell, same hairline, same hover, same
            typography. Only the media ratio differs — portrait phone shots need
            the height that a 16:9 plate would crop away — and because the apps
            come first, every row of the grid stays homogeneous. */}
        {workCards.map((card, i) => (
          <Link
            key={card.href}
            href={card.href}
            style={card.accent}
            className={`cell group reveal s${(i % 3) + 1} block overflow-hidden transition-colors hover:bg-panel`}
          >
            <div
              className={`relative overflow-hidden border-b border-line bg-panel ${card.mediaRatio}`}
            >
              {card.media}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Image
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
                <h3 className="font-heading font-semibold tracking-title text-ink">
                  {card.name}
                </h3>
                <span className="ml-auto border border-line px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-eyebrow text-muted">
                  {card.badge}
                </span>
              </div>
              <p className="mt-3.5 text-[0.9375rem] leading-body text-body">
                {card.tagline}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                <span className="underline-grow">{card.cta}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}

        {/* Closes the grid with an invitation rather than an empty cell, and
            spans the full width when the card count would otherwise leave a
            hole in the last row. */}
        <a
          href="#contact"
          className={`cell cell-panel group hatch reveal s3 flex flex-col justify-center p-8 text-center transition-colors hover:bg-surface md:p-10${
            workCards.length % 2 === 0 ? " md:col-span-2" : ""
          }`}
        >
          <span className="mx-auto flex h-11 w-11 items-center justify-center border border-line-strong bg-surface text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <Plus className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <h3 className="mt-6 text-xl font-semibold tracking-title text-ink">
            Your project here
          </h3>
          <p className="mx-auto mt-2.5 max-w-xs bg-surface/70 text-[0.9375rem] leading-body text-body">
            We take on a small number of projects at a time so each one gets
            real attention.
          </p>
          <span className="mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-ink">
            <span className="underline-grow">Start a conversation</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </a>
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section id="process" className="band">
        <SectionHead
          eyebrow="How it runs"
          title="Four steps, no surprises"
          body="The same sequence on every engagement, whether it is a two-week integration or a three-month build."
        />
      </section>

      <section className="band cells sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => {
          const Glyph = processGlyphs[i];
          return (
            <div
              key={step.title}
              className={`cell reveal s${i + 1} flex flex-col p-7 md:p-9`}
            >
              <div className="flex items-start justify-between">
                <Glyph />
                <Index n={i + 1} />
              </div>
              <h3 className="mt-7 text-lg font-semibold tracking-title text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-body text-body">
                {step.body}
              </p>
            </div>
          );
        })}
      </section>

      {/* ── Studio ─────────────────────────────────────────────────────── */}
      <section id="studio" className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-7">
            <span className="eyebrow">The studio</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.5rem] md:text-[3rem]">
              A small studio, deliberately
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-body text-body">
              Founded in 2020, PantaziSoft builds modern web applications. We
              partner with businesses of every size to take an idea from a
              sketch to something people use every day — early-stage MVPs,
              full-scale platforms, and the AI layers on top of them.
            </p>
            <p className="mt-4 max-w-xl leading-prose text-body">
              Staying small means the person you talk to is the person who
              writes the code. No account managers, no handoffs, no translation
              loss between what you asked for and what gets built.
            </p>

            <dl className="cells mt-10 grid-cols-2 border border-line sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="cell px-5 py-5">
                  <dd className="numeric font-heading text-[1.75rem] font-semibold leading-none tracking-display text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 text-[0.8125rem] text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Founder cell — flush to the rail, no card, no float. */}
          <div className="reveal s2 border-t border-line bg-panel p-7 sm:p-10 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-12">
            <div className="flex items-center gap-4">
              <Image
                src="/eduard-pantazi.webp"
                alt="Eduard Pantazi, founder of PantaziSoft"
                width={64}
                height={64}
                className="h-16 w-16 border border-line-strong object-cover"
              />
              <div>
                <p className="font-heading font-semibold tracking-title text-ink">
                  Eduard Pantazi
                </p>
                <p className="text-sm text-muted">Founder &amp; engineer</p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-2 border-lime pl-5 text-[1.0625rem] leading-prose text-body">
              I started PantaziSoft on a simple belief: every business deserves
              a well-crafted web application. We build products that are fast,
              reliable, and designed to grow with the business behind them. If
              you have an idea, I&apos;d like to hear about it.
            </blockquote>

            <div className="mt-8 flex">
              <a
                href="https://x.com/eduard_pantazi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-line bg-surface text-body transition-colors hover:bg-ink hover:text-white"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardpantazi/"
                target="_blank"
                rel="noopener noreferrer"
                className="-ml-px flex h-10 w-10 items-center justify-center border border-line bg-surface text-body transition-colors hover:bg-ink hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section id="contact" className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-6">
            <span className="eyebrow eyebrow-lime">Contact</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.5rem] md:text-[3rem]">
              Let&apos;s build something together
            </h2>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-body text-body">
              Tell us what you&apos;re building. You&apos;ll get a straight
              answer on whether we can help, what it would take, and what it
              would cost — within 24 hours.
            </p>

            <ul className="mt-9 border border-line">
              {[
                "A reply from the person who does the work",
                "A fixed price before anything starts",
                "An honest answer if we're not the right fit",
                "No newsletters, no sales sequences",
              ].map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 px-5 py-3.5 text-[0.9375rem] text-body${
                    i > 0 ? " border-t border-line" : ""
                  }`}
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-lime-ink"
                    strokeWidth={2.75}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal s2 border-t border-line bg-panel p-6 sm:p-10 lg:col-span-6 lg:border-t-0 lg:border-l lg:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Closing call to action ─────────────────────────────────────── */}
      <section className="band bg-inverse">
        <div className="pad flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <p className="reveal font-heading text-xl font-semibold tracking-title text-white sm:text-2xl">
            Have something in mind? Let&apos;s scope it.
          </p>
          <div className="reveal s2 flex w-full flex-col sm:w-auto sm:flex-row">
            <a href="#contact" className="btn btn-lime group w-full sm:w-auto">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/services"
              className="btn w-full border border-t-0 border-white/20 text-white transition-colors hover:bg-white/10 sm:w-auto sm:border-t sm:border-l-0"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
