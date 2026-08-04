import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Layers, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/lib/projects";
import { apps } from "@/lib/apps";
import { services } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";
import { HeroAnimation } from "@/components/hero-animation";
import { AppCardSlider } from "@/components/app-card-slider";
import { SiteFavicon } from "@/components/site-favicon";

const clientProjects = [
  { name: "Max Automotive", url: "https://maxautomotive.ro" },
  { name: "Bonchoux", url: "https://bonchoux.ro" },
  { name: "Producator Peleti", url: "https://producator-peleti.ro" },
  { name: "Repora", url: "https://repora.ro" },
];

const stats = [
  { value: "2020", label: "Founded" },
  { value: "4+", label: "Products shipped" },
  { value: "24h", label: "Reply time" },
  { value: "100%", label: "Code you own" },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-secondary shadow-card">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-ink opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-ink" />
                </span>
                Available for new projects
              </span>

              <h1 className="mt-6 text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-display leading-display text-primary">
                We build web apps that businesses love
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl text-secondary leading-body">
                From MVP to production — we help businesses launch, grow, and
                integrate AI into modern web applications. Fixed scope, fixed
                price, and a codebase you own.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="btn btn-primary group">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a href="#projects" className="btn btn-secondary">
                  See our work
                </a>
              </div>

              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {["Fixed price up front", "Reply within 24h", "You own the code"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-secondary"
                    >
                      <Check
                        className="h-4 w-4 text-brand-ink"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="hidden lg:block">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 text-3xl md:text-[2.75rem] font-bold tracking-heading leading-title text-primary">
                Three services, one standard of work
              </h2>
              <p className="mt-4 text-lg text-secondary leading-body">
                We specialise in three areas that help businesses build and
                enhance their digital products.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Compare all services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card card-interactive group flex flex-col p-7 md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-action">
                  <service.icon className="h-[22px] w-[22px]" strokeWidth={2} />
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-title text-primary">
                  {service.name}
                </h3>
                <p className="mt-2 text-[0.9375rem] font-medium text-muted leading-body">
                  {service.tagline}
                </p>
                <p className="mt-4 flex-1 text-[0.9375rem] text-secondary leading-body">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                    Starting from
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <p className="numeric text-3xl font-bold tracking-display text-primary">
                      {service.price}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View service
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-y border-border bg-surface py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Built by us</span>
            <h2 className="mt-4 text-3xl md:text-[2.75rem] font-bold tracking-heading leading-title text-primary">
              Products we designed, built, and shipped
            </h2>
            <p className="mt-4 text-lg text-secondary leading-body">
              A selection of the work — our own products and applications built
              for clients.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`/app/${app.slug}`}
                style={
                  {
                    "--app-accent": app.accent.base,
                    "--app-accent-hover": app.accent.hover,
                  } as CSSProperties
                }
                className="group relative block overflow-hidden rounded-card bg-zinc-950 shadow-card ring-1 ring-zinc-900/60 transition-all duration-200 hover:shadow-card-lift hover:ring-app/50"
              >
                <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden bg-zinc-900">
                  {app.screenshots.length > 0 ? (
                    <AppCardSlider screenshots={app.screenshots.slice(0, 5)} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Image
                        src={app.logo}
                        alt={`${app.name} app icon`}
                        width={104}
                        height={104}
                        className="rounded-[22%] ring-1 ring-white/10"
                      />
                    </div>
                  )}
                </div>
                <div className="relative p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src={app.logo}
                      alt={`${app.name} app icon`}
                      width={28}
                      height={28}
                      className="rounded-[7px] ring-1 ring-white/10"
                    />
                    <h3 className="font-semibold tracking-title text-white">
                      {app.name}
                    </h3>
                    <span className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-white/70">
                      iOS app
                    </span>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-body text-zinc-400">
                    {app.homeTagline ?? app.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-app">
                    View app
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}

            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card card-interactive group block overflow-hidden p-0"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-surface-hover">
                  <Image
                    src={project.ogImage}
                    alt={
                      project.imageAlt ?? `${project.name} — ${project.tagline}`
                    }
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.favicon}
                      alt={`${project.name} icon`}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    <h3 className="font-semibold tracking-title text-primary">
                      {project.name}
                    </h3>
                    <span className="ml-auto rounded-full border border-border bg-surface-subtle px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
                      Web app
                    </span>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-body text-secondary">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors group-hover:text-primary">
                    View project
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Balances the grid and closes the section with an invitation */}
            <a
              href="#contact"
              className="group flex flex-col justify-center rounded-card border border-dashed border-border-strong bg-surface-subtle p-8 text-center transition-colors hover:border-primary hover:bg-surface md:p-10"
            >
              <h3 className="text-xl font-semibold tracking-title text-primary">
                Your project here
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-[0.9375rem] leading-body text-secondary">
                We take on a small number of projects at a time so each one gets
                real attention.
              </p>
              <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary">
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Client projects */}
          <div className="mt-12 rounded-card border border-border bg-surface-subtle p-6 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
              Client websites
            </h3>
            <div
              className="mt-4 flex flex-wrap gap-2.5"
              role="list"
              aria-label="Client projects"
            >
              {clientProjects.map((project) => {
                const domain = new URL(project.url).hostname;
                return (
                  <a
                    key={domain}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                    aria-label={`${project.name} — view project (opens in new tab)`}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary shadow-card transition-all hover:border-border-strong hover:text-primary"
                  >
                    <SiteFavicon domain={domain} />
                    <span aria-hidden="true">{project.name}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-muted transition-all duration-200 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About & Founder */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="mt-4 text-3xl md:text-[2.75rem] font-bold tracking-heading leading-title text-primary">
                A small studio, deliberately
              </h2>
              <p className="mt-5 text-lg text-secondary leading-body">
                Founded in 2020, PantaziSoft builds modern web applications. We
                partner with businesses of all sizes to bring their ideas to
                life — from early-stage MVPs to full-scale platforms with AI
                capabilities.
              </p>
              <p className="mt-4 text-secondary leading-prose">
                Staying small means the person you talk to is the person who
                writes the code. No account managers, no handoffs, no
                translation loss between what you asked for and what gets
                built.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-card sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-surface px-5 py-5">
                    <dd className="numeric text-2xl font-bold tracking-display text-primary">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Founder card */}
            <div className="card p-8 md:p-10">
              <div className="flex items-center gap-4">
                <Image
                  src="/eduard-pantazi.webp"
                  alt="Eduard Pantazi - Founder Pantazi Soft"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover ring-1 ring-border"
                />
                <div>
                  <p className="font-semibold tracking-title text-primary">
                    Eduard Pantazi
                  </p>
                  <p className="text-sm text-muted">Founder & engineer</p>
                </div>
              </div>
              <blockquote className="mt-7 text-[1.0625rem] text-secondary leading-prose">
                &ldquo;I started PantaziSoft with a simple belief: every
                business deserves a well-crafted web application. We focus on
                building products that are fast, reliable, and designed to grow
                with your business. If you have an idea, I&apos;d love to hear
                about it.&rdquo;
              </blockquote>
              <div className="mt-7 flex items-center gap-2.5">
                <a
                  href="https://x.com/eduard_pantazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-subtle text-secondary transition-colors hover:border-border-strong hover:text-primary"
                  aria-label="X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-subtle text-secondary transition-colors hover:border-border-strong hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-border bg-surface py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 text-3xl md:text-[2.75rem] font-bold tracking-heading leading-title text-primary">
                Let&apos;s build something together
              </h2>
              <p className="mt-4 text-lg text-secondary leading-body">
                Have a project in mind? We&apos;d love to hear about it. Tell us
                what you&apos;re building and we&apos;ll get back to you within
                24 hours.
              </p>

              <div className="mt-9 space-y-3">
                <div className="flex items-start gap-3.5 rounded-input border border-border bg-surface-subtle p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Rocket className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary text-[0.9375rem]">
                      Quick turnaround
                    </p>
                    <p className="mt-0.5 text-sm text-secondary leading-body">
                      We respond to every inquiry within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 rounded-input border border-border bg-surface-subtle p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Layers className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary text-[0.9375rem]">
                      No commitment
                    </p>
                    <p className="mt-0.5 text-sm text-secondary leading-body">
                      Let&apos;s start with a conversation — no strings
                      attached.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
