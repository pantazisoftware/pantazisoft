import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { services, getService } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";
import { SectionHead, Index } from "@/components/band";
import { processGlyphs } from "@/components/process-glyphs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const description = `${service.tagline}. ${service.intro}`.slice(0, 300);

  return {
    title: service.name,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} — PantaziSoft`,
      description,
      url: `https://pantazisoft.com/services/${slug}`,
      images: [{ url: "/og-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} — PantaziSoft`,
      description,
      images: ["/og-image.png"],
      creator: "@eduard_pantazi",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://pantazisoft.com/services/${service.slug}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.tagline,
        url: `https://pantazisoft.com/services/${service.slug}`,
        provider: { "@id": "https://pantazisoft.com/#organization" },
        areaServed: "Worldwide",
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
      },
      {
        "@type": "FAQPage",
        "@id": `https://pantazisoft.com/services/${service.slug}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://pantazisoft.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://pantazisoft.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `https://pantazisoft.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <div className="band">
        <div className="pad py-3.5">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[0.8125rem] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All services
          </Link>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="band relative overflow-hidden">
        <div
          className="grid-backdrop grid-backdrop-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="pad relative py-14 md:py-20">
          <div className="load-in flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-ink bg-ink text-white">
              <Icon className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <span className="eyebrow eyebrow-lime">{service.eyebrow}</span>
          </div>

          <h1 className="load-in d1 mt-7 max-w-[20ch] text-[2.5rem] font-semibold leading-display tracking-display text-ink sm:text-[3.25rem] md:text-[4rem]">
            {service.headline}
          </h1>

          <p className="load-in d2 mt-7 max-w-2xl text-lg leading-body text-body md:text-xl">
            {service.intro}
          </p>

          <div className="load-in d3 mt-9 flex flex-col sm:flex-row">
            <a
              href="#contact"
              className="btn btn-primary group w-full sm:w-auto"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/#work"
              className="btn btn-secondary w-full border-t-0 sm:w-auto sm:border-t sm:border-l-0"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick facts ────────────────────────────────────────────────── */}
      <section className="band cells grid-cols-2 lg:grid-cols-4">
        {service.highlights.map((item, i) => (
          <div key={item.label} className={`cell reveal s${i + 1} px-6 py-6`}>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
              {item.label}
            </p>
            <p className="numeric mt-2.5 font-heading text-lg font-semibold tracking-title text-ink">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* ── Who it's for ───────────────────────────────────────────────── */}
      <section className="band">
        <SectionHead
          eyebrow="Who it's for"
          title="Is this the right fit?"
          body="If more than one of these sounds like you, this is probably the right place to start."
        />
      </section>

      <section className="band cells sm:grid-cols-2">
        {service.idealFor.map((item, i) => (
          <div
            key={item}
            className={`cell reveal s${(i % 4) + 1} flex items-start gap-3.5 px-6 py-6 sm:px-8`}
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-lime-ink"
              strokeWidth={2.75}
            />
            <p className="text-[0.9375rem] leading-body text-body">{item}</p>
          </div>
        ))}
      </section>

      {/* ── Deliverables ───────────────────────────────────────────────── */}
      <section className="band">
        <SectionHead
          eyebrow="What you get"
          lime
          title="Everything included, written down"
          body="No vague statements of work. This is the scope you get, and it is agreed before anyone writes code."
        />
      </section>

      <section className="band cells md:grid-cols-2 lg:grid-cols-3">
        {service.deliverables.map((item, i) => (
          <div
            key={item.title}
            className={`cell reveal s${(i % 3) + 1} p-7 transition-colors hover:bg-panel md:p-9`}
          >
            <Index n={i + 1} />
            <h3 className="mt-5 text-lg font-semibold tracking-title text-ink">
              {item.title}
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-body text-body">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      {/* ── Process ────────────────────────────────────────────────────── */}
      <section className="band">
        <SectionHead
          eyebrow="How it works"
          title="Four steps, no surprises"
          body="You always know what is happening, what it costs, and what comes next."
        />
      </section>

      <section className="band">
        <ol className="cells sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => {
            const Glyph = processGlyphs[i % processGlyphs.length];
            return (
              <li
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
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── Price + stack ──────────────────────────────────────────────── */}
      <section className="band">
        <div className="grid lg:grid-cols-12">
          {/* Price panel — the one inverted block on the page. */}
          <div className="reveal bg-inverse p-8 text-white md:p-12 lg:col-span-5">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-white/55">
              Investment
            </span>
            <div className="mt-6 flex items-baseline gap-2.5">
              <span className="text-sm font-medium text-white/55">from</span>
              <span className="numeric font-heading text-[3.5rem] font-semibold leading-none tracking-display">
                {service.price}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-body text-white/70">
              {service.priceNote}
            </p>

            <dl className="mt-9 border-t border-white/15">
              {[
                { k: "Timeline", v: service.timeline },
                { k: "Pricing model", v: "Fixed scope, fixed price" },
                { k: "Code ownership", v: "Yours" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5 text-sm"
                >
                  <dt className="text-white/55">{row.k}</dt>
                  <dd className="text-right font-medium text-white">{row.v}</dd>
                </div>
              ))}
            </dl>

            <a href="#contact" className="btn btn-lime group mt-9 w-full">
              Get a fixed quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Stack */}
          <div className="reveal s2 border-t border-line p-8 md:p-12 lg:col-span-7 lg:border-t-0 lg:border-l">
            <span className="eyebrow">Technology</span>
            <h2 className="mt-5 max-w-lg text-[1.75rem] font-semibold leading-title tracking-heading text-ink md:text-[2.25rem]">
              Built on tools that will still be here in five years
            </h2>
            <p className="mt-5 max-w-xl leading-body text-body">
              Mature, widely adopted technology — so any competent developer can
              pick the project up after us.
            </p>

            <div className="mt-9 border-t border-line">
              {service.stack.map((group) => (
                <div key={group.group} className="border-b border-line py-5">
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
                    {group.group}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-panel px-3 py-1.5 text-sm font-medium text-body transition-colors hover:border-ink hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-title tracking-heading text-ink md:text-[2.25rem]">
              Questions we get asked
            </h2>
            <p className="mt-5 leading-body text-body">
              Something else on your mind?{" "}
              <a
                href="#contact"
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
              >
                Ask us directly
              </a>
              .
            </p>
          </div>

          <div className="border-t border-line lg:col-span-8 lg:border-t-0 lg:border-l">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-line last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-panel sm:px-9">
                  <span className="font-heading text-[1.0625rem] font-semibold tracking-title text-ink">
                    {faq.q}
                  </span>
                  <Plus
                    className="mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45"
                    strokeWidth={1.75}
                  />
                </summary>
                <p className="max-w-2xl px-6 pb-6 text-[0.9375rem] leading-prose text-body sm:px-9">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section id="contact" className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-6">
            <span className="eyebrow eyebrow-lime">Get started</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.5rem]">
              {service.formHeading}
            </h2>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-body text-body">
              {service.formBody}
            </p>

            <ul className="mt-9 border border-line">
              {[
                "A reply within 24 hours, from the person who does the work",
                "A fixed price before anything starts",
                "An honest answer if we're not the right fit",
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
            <ContactForm
              service={service.name}
              messagePlaceholder={`Tell us about your ${service.name} project...`}
              submitLabel="Send enquiry"
            />
          </div>
        </div>
      </section>

      {/* ── Other services ─────────────────────────────────────────────── */}
      <section className="band">
        <div className="pad py-8">
          <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
            Other services
          </h2>
        </div>
        <div className="cells border-t border-line sm:grid-cols-2">
          {others.map((other, i) => {
            const OtherIcon = other.icon;
            return (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className={`cell group reveal s${i + 1} flex items-start gap-4 p-7 transition-colors hover:bg-panel md:p-9`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <OtherIcon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-title text-ink">
                    {other.name}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] leading-body text-body">
                    {other.tagline}
                  </p>
                  <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    <span className="underline-grow">Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
