import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MVP development, custom web applications, and AI integration — fixed scope, fixed price, and code you own. See what each engagement includes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — PantaziSoft",
    description:
      "MVP development, custom web applications, and AI integration — fixed scope, fixed price, and code you own.",
    url: "https://pantazisoft.com/services",
    images: [{ url: "/og-image.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PantaziSoft services",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.name,
    url: `https://pantazisoft.com/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 max-w-3xl text-[2.5rem] leading-display tracking-display font-bold text-primary sm:text-5xl md:text-6xl">
            Three ways we help businesses ship software
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-secondary leading-body">
            Every engagement runs the same way: a scoping call, a fixed price in
            writing, weekly working builds, and a codebase you own outright at
            the end.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card card-interactive group flex flex-col p-7 md:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-action">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold tracking-title text-primary">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-[0.9375rem] font-medium text-muted leading-body">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-[0.9375rem] text-secondary leading-body flex-1">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm text-secondary">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                        From
                      </p>
                      <p className="numeric mt-1 text-3xl font-bold tracking-display text-primary">
                        {service.price}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-heading text-primary">
                Not sure which one you need?
              </h2>
              <p className="mt-4 text-lg text-secondary leading-body">
                Describe the problem and we&apos;ll tell you which of these
                fits — or that none of them do. We reply to every enquiry
                within 24 hours.
              </p>

              <ul className="mt-9 space-y-3">
                {[
                  "A reply within 24 hours, from the person who does the work",
                  "A fixed price before anything starts",
                  "An honest answer if we're not the right fit",
                  "No newsletters, no sales sequences",
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
            <ContactForm messagePlaceholder="Tell us what you're trying to build..." />
          </div>
        </div>
      </section>
    </>
  );
}
