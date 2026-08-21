import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { ContactForm } from "@/components/contact-form";
import { Index } from "@/components/band";

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

const promises = [
  "A reply within 24 hours, from the person who does the work",
  "A fixed price before anything starts",
  "An honest answer if we're not the right fit",
  "No newsletters, no sales sequences",
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="band relative overflow-hidden">
        <div
          className="grid-backdrop grid-backdrop-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="pad relative py-14 md:py-20">
          <span className="load-in eyebrow eyebrow-lime">Services</span>
          <h1 className="load-in d1 mt-6 max-w-[18ch] text-[2.75rem] font-semibold leading-display tracking-display text-ink sm:text-[3.5rem] md:text-[4.25rem]">
            Three ways we help businesses ship software
          </h1>
          <p className="load-in d2 mt-7 max-w-2xl text-lg leading-body text-body md:text-xl">
            Every engagement runs the same way: a scoping call, a fixed price in
            writing, weekly working builds, and a codebase you own outright at
            the end.
          </p>
        </div>
      </section>

      {/* ── The three services ─────────────────────────────────────────── */}
      <section className="band cells md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`cell group reveal s${i + 1} flex flex-col p-7 transition-colors hover:bg-panel md:p-9`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center border border-ink bg-ink text-white transition-colors group-hover:bg-lime group-hover:text-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <Index n={i + 1} />
              </div>

              <h2 className="mt-7 text-[1.375rem] font-semibold tracking-title text-ink">
                {service.name}
              </h2>
              <p className="mt-1.5 text-[0.9375rem] font-medium leading-body text-lime-ink">
                {service.tagline}
              </p>
              <p className="mt-4 text-[0.9375rem] leading-body text-body">
                {service.description}
              </p>

              <ul className="mt-7 flex-1 border-t border-line pt-6">
                {service.deliverables.slice(0, 3).map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-2.5 py-1.5"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-lime-ink"
                      strokeWidth={2.75}
                    />
                    <span className="text-sm leading-body text-body">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-end justify-between gap-4 border-t border-line pt-6">
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
                    From
                  </p>
                  <p className="numeric mt-1.5 font-heading text-[2rem] font-semibold leading-none tracking-display text-ink">
                    {service.price}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  <span className="underline-grow">Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      {/* ── Comparison table ───────────────────────────────────────────── */}
      <section className="band">
        <div className="pad py-12 md:py-14">
          <span className="eyebrow">Side by side</span>
          <h2 className="reveal mt-5 text-[1.75rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.25rem]">
            What each engagement costs and takes
          </h2>
        </div>

        <div className="overflow-x-auto border-t border-line">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              Price and timeline for each PantaziSoft service
            </caption>
            <thead>
              <tr className="bg-panel">
                {["Service", "Starting from", "Timeline", "Best for"].map(
                  (heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-r border-line px-6 py-4 text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted last:border-r-0"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.slug} className="border-t border-line">
                  <th
                    scope="row"
                    className="border-r border-line px-6 py-5 align-top"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group font-heading text-[1.0625rem] font-semibold tracking-title text-ink"
                    >
                      <span className="underline-grow">{service.name}</span>
                    </Link>
                    <p className="mt-1 text-sm font-normal leading-body text-muted">
                      {service.tagline}
                    </p>
                  </th>
                  <td className="numeric border-r border-line px-6 py-5 align-top font-heading text-xl font-semibold tracking-title text-ink">
                    {service.price}
                  </td>
                  <td className="border-r border-line px-6 py-5 align-top text-sm text-body">
                    {service.timeline}
                  </td>
                  <td className="px-6 py-5 align-top text-sm text-body">
                    {service.idealFor[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section id="contact" className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-6">
            <span className="eyebrow eyebrow-lime">Get in touch</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.5rem] md:text-[3rem]">
              Not sure which one you need?
            </h2>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-body text-body">
              Describe the problem and we&apos;ll tell you which of these fits —
              or that none of them do. We reply to every enquiry within 24
              hours.
            </p>

            <ul className="mt-9 border border-line">
              {promises.map((item, i) => (
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
            <ContactForm messagePlaceholder="Tell us what you're trying to build..." />
          </div>
        </div>
      </section>
    </>
  );
}
