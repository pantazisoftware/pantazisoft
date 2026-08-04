import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { services, getService } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";

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

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All services
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-action">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="eyebrow">{service.eyebrow}</span>
            </div>

            <h1 className="mt-7 text-[2.5rem] leading-display tracking-display font-bold text-primary sm:text-5xl md:text-6xl">
              {service.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-secondary leading-body">
              {service.intro}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn btn-primary group">
                Start a conversation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <Link href="/#projects" className="btn btn-secondary">
                See our work
              </Link>
            </div>
          </div>

          {/* Quick facts */}
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-card lg:grid-cols-4">
            {service.highlights.map((item) => (
              <div key={item.label} className="bg-surface px-6 py-6">
                <dt className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                  {item.label}
                </dt>
                <dd className="numeric mt-2 text-lg font-semibold tracking-title text-primary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
            <div>
              <span className="eyebrow">Who it&apos;s for</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
                Is this the right fit?
              </h2>
              <p className="mt-4 text-secondary leading-body">
                If more than one of these sounds like you, this is probably the
                right place to start.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <li key={item} className="card flex items-start gap-3.5 p-6">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <p className="text-[0.9375rem] font-medium text-secondary leading-body">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
              Everything included, written down
            </h2>
            <p className="mt-4 text-lg text-secondary leading-body">
              No vague statements of work. This is the scope you get, and it is
              agreed before anyone writes code.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, i) => (
              <div key={item.title} className="card card-interactive p-7">
                <span className="numeric text-sm font-semibold text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-title text-primary">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] text-secondary leading-body">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
              Four steps, no surprises
            </h2>
            <p className="mt-4 text-lg text-secondary leading-body">
              You always know what is happening, what it costs, and what comes
              next.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="card relative p-7">
                <span className="numeric flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-title text-primary">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] text-secondary leading-body">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing + stack */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
            {/* Price panel */}
            <div className="rounded-card bg-surface-inverse p-8 md:p-10 text-white shadow-panel">
              <span className="text-xs font-semibold uppercase tracking-eyebrow text-white/55">
                Investment
              </span>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm font-medium text-white/60">from</span>
                <span className="numeric text-5xl font-bold tracking-display">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-body text-white/70">
                {service.priceNote}
              </p>
              <div className="mt-8 h-px bg-white/12" />
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/60">Timeline</dt>
                  <dd className="font-medium text-white text-right">
                    {service.timeline}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/60">Pricing model</dt>
                  <dd className="font-medium text-white text-right">
                    Fixed scope, fixed price
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/60">Code ownership</dt>
                  <dd className="font-medium text-white text-right">Yours</dd>
                </div>
              </dl>
              <a
                href="#contact"
                className="btn group mt-9 w-full bg-white text-primary hover:bg-white/90"
              >
                Get a fixed quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Stack */}
            <div className="card p-8 md:p-10">
              <span className="eyebrow">Technology</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-heading text-primary">
                Built on tools that will still be here in five years
              </h2>
              <p className="mt-4 text-secondary leading-body">
                Mature, widely adopted technology — so any competent developer
                can pick the project up after us.
              </p>
              <div className="mt-8 space-y-6">
                {service.stack.map((group) => (
                  <div key={group.group}>
                    <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                      {group.group}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-surface-subtle px-3.5 py-1.5 text-sm font-medium text-secondary"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
                Questions we get asked
              </h2>
              <p className="mt-4 text-secondary leading-body">
                Something else on your mind?{" "}
                <a
                  href="#contact"
                  className="font-medium text-primary underline underline-offset-4 decoration-border-strong hover:decoration-primary transition-colors"
                >
                  Ask us directly
                </a>
                .
              </p>
            </div>

            <div className="divide-y divide-border rounded-card border border-border bg-surface shadow-card">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                    <span className="text-[1.0625rem] font-semibold tracking-title text-primary">
                      {faq.q}
                    </span>
                    <Plus
                      className="mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                      strokeWidth={2}
                    />
                  </summary>
                  <p className="mt-3 max-w-2xl text-[0.9375rem] text-secondary leading-prose">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div className="md:sticky md:top-24">
              <span className="eyebrow">Get started</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
                {service.formHeading}
              </h2>
              <p className="mt-4 text-lg text-secondary leading-body">
                {service.formBody}
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "A reply within 24 hours, from the person who does the work",
                  "A fixed price before anything starts",
                  "An honest answer if we're not the right fit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[0.9375rem] text-secondary leading-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm
              service={service.name}
              messagePlaceholder={`Tell us about your ${service.name} project...`}
              submitLabel="Send enquiry"
            />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold tracking-title text-primary">
            Other services
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="card card-interactive group flex items-start gap-4 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-subtle text-primary">
                    <OtherIcon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-title text-primary">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] text-secondary leading-body">
                      {other.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
