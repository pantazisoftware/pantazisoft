import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { absolute, href, pageMeta, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getService, getServices } from "@/lib/services";
import { organization, ORG_ID } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { Faq, faqSchema } from "@/components/faq";
import { TechList } from "@/components/tech-list";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { IllustratedSteps } from "@/components/illustrated-steps";
import { processArt, serviceArt } from "@/components/illustrations";
import { ServiceCards } from "@/components/service-cards";

/* ── /services ─────────────────────────────────────────────────────────── */

export function servicesMetadata(locale: Locale) {
  const t = getDictionary(locale).services;
  return pageMeta({
    locale,
    path: "/services",
    title: t.title,
    description: t.description,
    image: "/photos/startup.jpg",
  });
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.services;
  const services = getServices(locale);
  const crumbs = [
    { label: dict.service.home, path: "/" },
    { label: dict.service.services, path: "/services" },
  ];

  return (
    <>
      <JsonLd
        graph={[
          organization,
          breadcrumbSchema(locale, crumbs),
          {
            "@type": "ItemList",
            name: t.h1,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: absolute(locale, s.path),
            })),
          },
        ]}
      />

      <section className="wrap pt-10 pb-16 md:pt-14 md:pb-20">
        <Breadcrumb locale={locale} crumbs={crumbs} />
        <h1 className="mt-8 max-w-[20ch]">{t.h1}</h1>
        <p className="lead mt-6 max-w-2xl">{t.lead}</p>
      </section>

      {services.map((service, i) => {
        const Art = serviceArt[service.slug];
        return (
          <section key={service.slug} className="section">
            <div className="wrap grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Link
                href={href(locale, service.path)}
                aria-hidden="true"
                tabIndex={-1}
                className={`group relative block overflow-hidden rounded-2xl border border-line bg-soft ${
                  i % 2 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.photo}
                  alt=""
                  width={900}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="aspect-[3/2] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-6 bottom-6 rounded-2xl bg-paper/95 p-3 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur sm:inset-x-auto sm:left-6 sm:w-80">
                  <Art className="w-full" />
                </span>
              </Link>
              <div>
                <h2>
                  <Link href={href(locale, service.path)}>{service.name}</Link>
                </h2>
                <p className="mt-3">{service.tagline}</p>
                <ul className="mt-5 grid gap-2 text-[0.9375rem]">
                  {service.deliverables.slice(0, 4).map((d) => (
                    <li key={d.title} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-lime-ink">
                        —
                      </span>
                      {d.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href(locale, service.path)}
                  className="link mt-6 inline-flex items-center gap-1.5"
                  aria-label={`${t.learnMore}: ${service.name}`}
                >
                  {t.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section id="contact" className="section">
        <div className="wrap split">
          <div>
            <h2>{dict.home.contactTitle}</h2>
            <p className="mt-3 text-[0.9375rem]">{dict.home.contactLead}</p>
          </div>
          <div className="max-w-xl">
            <ContactForm t={dict.form} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── /services/[slug] ──────────────────────────────────────────────────── */

export function serviceMetadata(locale: Locale, slug: string) {
  const service = getService(locale, slug);
  if (!service) return {};
  return pageMeta({
    locale,
    path: service.path,
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    image: service.photo,
  });
}

export function ServicePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const service = getService(locale, slug);
  if (!service) return null;

  const dict = getDictionary(locale);
  const t = dict.service;
  const others = getServices(locale).filter((s) => s.slug !== service.slug);
  const HeroArt = serviceArt[service.slug];
  const crumbs = [
    { label: t.home, path: "/" },
    { label: t.services, path: "/services" },
    { label: service.name, path: service.path },
  ];

  return (
    <>
      <JsonLd
        graph={[
          organization,
          breadcrumbSchema(locale, crumbs),
          {
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.description,
            url: absolute(locale, service.path),
            inLanguage: locale,
            provider: { "@id": ORG_ID },
            areaServed: "Worldwide",
          },
          faqSchema(service.faqs),
        ]}
      />

      <section className="wrap pt-10 pb-16 md:pt-14 md:pb-20">
        <Breadcrumb locale={locale} crumbs={crumbs} />
        <h1 className="mt-8 max-w-[20ch]">{service.h1}</h1>
        <p className="lead mt-6 max-w-2xl">{service.lead}</p>
        <a href="#contact" className="btn btn-primary mt-9">
          {dict.nav.cta}
          <ArrowRight className="h-4 w-4" />
        </a>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 md:grid-cols-4">
          {service.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-12">
          <Image
            src={service.photo}
            alt=""
            width={1800}
            height={1200}
            priority
            sizes="(max-width: 1088px) 100vw, 1024px"
            className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[2/1]"
          />
          <div
            aria-hidden="true"
            className="float-card absolute bottom-6 left-6 hidden w-96 rounded-2xl bg-paper/95 p-4 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur md:block lg:bottom-8 lg:left-8"
          >
            <HeroArt className="w-full" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>{t.audience}</h2>
          <ul className="rows">
            {service.audience.map((item) => (
              <li key={item} className="py-3.5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>{t.deliverables}</h2>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="mt-1.5 text-[0.9375rem]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{t.process}</h2>
          <div className="mt-10">
            <IllustratedSteps steps={service.process} art={processArt} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>{t.stack}</h2>
          <TechList ids={service.stack} locale={locale} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>{t.faq}</h2>
          <Faq items={service.faqs} />
        </div>
      </section>

      {/* Tinted band with the form on a white card, so the one place we ask
          for something stands apart from the plain white page. */}
      <section id="contact" className="section bg-soft">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <div>
            <h2>{service.formHeading}</h2>
            <p className="mt-3 text-[0.9375rem]">{service.formBody}</p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04)] sm:p-8">
            <ContactForm
              t={dict.form}
              service={service.name}
              messagePlaceholder={service.messagePlaceholder}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{t.other}</h2>
          <div className="mt-10">
            <ServiceCards services={others} locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
