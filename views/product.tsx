import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { absolute, href, pageMeta, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { coverOf, getProduct, getProducts } from "@/lib/products";
import { absoluteImage, organization, ORG_ID } from "@/lib/schema";
import { AppStoreBadge } from "@/components/app-store-badge";
import { JsonLd } from "@/components/json-ld";
import { Faq, faqSchema } from "@/components/faq";
import { TechList } from "@/components/tech-list";
import { ReplicaStage, replicas } from "@/components/replicas";
import { Breadcrumb, breadcrumbSchema } from "@/components/breadcrumb";
import { IllustratedSteps } from "@/components/illustrated-steps";
import { productStepArt } from "@/components/illustrations";

export function productMetadata(locale: Locale, slug: string): Metadata {
  const product = getProduct(locale, slug);
  if (!product) return {};

  return {
    ...pageMeta({
      locale,
      path: product.path,
      title: product.title,
      description: product.description,
      keywords: product.keywords,
      image: product.image,
      imageAlt: product.imageAlt,
      absoluteTitle: true,
    }),
    // Safari's Smart App Banner, for the iOS apps.
    itunes: product.appStoreId ? { appId: product.appStoreId } : undefined,
  };
}

export function ProductPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const product = getProduct(locale, slug);
  if (!product) return null;

  const dict = getDictionary(locale);
  const t = dict.product;
  const { name } = product;
  const others = getProducts(locale).filter((p) => p.slug !== product.slug);
  const crumbs = [
    { label: t.home, path: "/" },
    { label: t.products, path: "/#products" },
    { label: name, path: product.path },
  ];

  return (
    <>
      <JsonLd
        graph={[
          organization,
          breadcrumbSchema(locale, crumbs),
          {
            "@type":
              product.kind === "ios" ? "MobileApplication" : "WebApplication",
            name,
            description: product.description,
            url: absolute(locale, product.path),
            sameAs: [product.url, product.appStoreUrl].filter(Boolean),
            downloadUrl: product.appStoreUrl,
            applicationCategory: product.schemaCategory,
            operatingSystem: product.operatingSystem,
            inLanguage: locale,
            image: absoluteImage(product.image),
            screenshot: product.screenshots.map((s) => absoluteImage(s.src)),
            featureList: product.features.map((f) => f.title),
            keywords: product.keywords.join(", "),
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
          },
          faqSchema(product.faqs),
        ]}
      />

      {/* Hero */}
      <section className="wrap pt-10 pb-16 md:pt-14 md:pb-20">
        <Breadcrumb locale={locale} crumbs={crumbs} />

        <p className="mt-8 flex items-center gap-3">
          <Image
            src={product.icon}
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-[22%] object-contain"
          />
          <span className="label text-lime-ink">{product.category}</span>
        </p>
        <h1 className="mt-5 max-w-[22ch]">{product.h1}</h1>
        <p className="lead mt-6 max-w-2xl">{product.lead}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          {product.appStoreUrl && (
            <AppStoreBadge
              href={product.appStoreUrl}
              small={t.appStoreSmall}
              big={t.appStoreBig}
              label={`${t.appStoreLabel}: ${name}`}
            />
          )}
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.visit(new URL(product.url).hostname)}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <Link href={href(locale, "/#contact")} className="btn btn-secondary">
            {t.similar}
          </Link>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 md:grid-cols-4">
          {product.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {product.kind === "web" && (
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={1600}
            height={900}
            priority
            sizes="(max-width: 1088px) 100vw, 1024px"
            className="mt-12 aspect-video w-full rounded-2xl border border-line bg-soft object-cover object-top"
          />
        )}
      </section>

      {/* Overview */}
      <section className="section">
        <div className="wrap split">
          <h2>{t.overview(name)}</h2>
          <div className="max-w-2xl">
            {product.overview.map((paragraph) => (
              <p key={paragraph} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features: one large row each, a working replica of the product
          on its own colour beside the words, alternating sides. */}
      <section className="section">
        <div className="wrap">
          <h2 className="max-w-[18ch]">{t.features(name)}</h2>
          <ul className="mt-12 grid gap-16 md:mt-16 md:gap-24">
            {product.features.map((feature, i) => {
              const Icon = product.featureIcons[i];
              const Replica = replicas[product.slug][i];
              const flip = i % 2 === 1;
              return (
                <li
                  key={feature.title}
                  className={`grid items-center gap-7 md:gap-14 ${
                    flip
                      ? "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                      : "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  }`}
                >
                  <div className={flip ? "md:order-2" : ""}>
                    {Replica ? (
                      <ReplicaStage tint={product.tint}>
                        <Replica />
                      </ReplicaStage>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="grid aspect-[4/3] w-full place-items-center rounded-[1.75rem]"
                        style={{ background: product.tint }}
                      >
                        <Icon className="h-16 w-16 text-white/90" strokeWidth={1.25} />
                      </div>
                    )}
                  </div>
                  <div className={flip ? "md:order-1" : ""}>
                    <span className="text-[0.875rem] text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.05] font-normal">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-md">{feature.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Works with */}
      {product.worksWith && (
        <section className="section">
          <div className="wrap split">
            <h2>{t.worksWith(name)}</h2>
            <TechList ids={product.worksWith} locale={locale} />
          </div>
        </section>
      )}

      {/* Free tools */}
      {product.freeTools && product.freeToolIcons && product.url && (
        <section className="section">
          <div className="wrap split">
            <div>
              <h2>{t.freeTools(name)}</h2>
              <p className="mt-4 max-w-xs text-[0.9375rem]">
                {t.freeToolsLead(
                  new URL(product.url).hostname.replace(/^www\./, ""),
                )}
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {product.freeTools.map((tool, i) => {
                const Icon = product.freeToolIcons![i];
                return (
                  <li key={tool.href}>
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener"
                      className="card group flex items-start gap-3 py-3"
                    >
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-ink"
                        strokeWidth={1.5}
                      />
                      <span>
                        <span className="card-title inline-flex items-center gap-1 font-semibold text-ink">
                          {tool.name}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                        <span className="mt-0.5 block text-[0.9375rem]">
                          {tool.body}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Tool catalogue */}
      {product.catalogue && (
        <section className="section">
          <div className="wrap split">
            <div>
              <h2>{product.catalogue.title}</h2>
              <p className="mt-3 text-[0.9375rem]">{product.catalogue.intro}</p>
            </div>
            <div className="grid gap-10">
              {product.catalogue.groups.map((group) => (
                <div key={group.name}>
                  <h3>{group.name}</h3>
                  <p className="label mt-1">{group.summary}</p>
                  <dl className="rows mt-3 text-[0.9375rem]">
                    {group.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="grid gap-x-6 gap-y-1 py-3 sm:grid-cols-[14rem_1fr]"
                      >
                        <dt className="font-medium text-ink">
                          {tool.name}
                          <span
                            className={`label ml-2 ${tool.pro ? "text-lime-ink" : ""}`}
                          >
                            {tool.pro ? t.pro : t.free}
                          </span>
                        </dt>
                        <dd>{tool.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who it's for */}
      <section className="section">
        <div className="wrap split">
          <h2>{t.audience(name)}</h2>
          <ul className="rows">
            {product.audience.map((item) => (
              <li key={item} className="py-3.5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="wrap">
          <h2>{t.steps(name)}</h2>
          <div className="mt-10">
            <IllustratedSteps steps={product.steps} art={productStepArt} />
          </div>
        </div>
      </section>

      {/* Extra lists: compatibility, free vs Pro, privacy… */}
      {product.lists?.map((list) => (
        <section key={list.title} className="section">
          <div className="wrap split">
            <div>
              <h2>{list.title}</h2>
              {list.intro && (
                <p className="mt-3 text-[0.9375rem]">{list.intro}</p>
              )}
            </div>
            <div>
              <ul className="rows">
                {list.items.map((item) => (
                  <li key={item} className="py-3.5">
                    {item}
                  </li>
                ))}
              </ul>
              {list.note && (
                <p className="label mt-5 max-w-2xl border-t border-line pt-5">
                  {list.note}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section">
        <div className="wrap split">
          <h2>{t.faq(name)}</h2>
          <Faq items={product.faqs} />
        </div>
      </section>

      {/* Call to action */}
      <section className="section">
        <div className="wrap">
          <h2 className="max-w-[24ch]">{t.ctaTitle}</h2>
          <p className="mt-3 max-w-xl">{t.ctaBody}</p>
          <Link
            href={href(locale, "/#contact")}
            className="btn btn-primary mt-7"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* More products */}
      <section className="section">
        <div className="wrap">
          <h2>{t.more}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.slice(0, 4).map((other) => (
              <li key={other.slug}>
                <Link
                  href={href(locale, other.path)}
                  className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-colors hover:border-ink/25"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden bg-soft">
                    <Image
                      src={coverOf(other).src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="flex items-center gap-3">
                      <Image
                        src={other.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 shrink-0 rounded-[22%] object-contain"
                      />
                      <span className="card-title flex-1 font-semibold text-ink">
                        {other.name}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                    </span>
                    <span className="mt-3 line-clamp-3 block text-[0.9375rem]">
                      {other.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Small print */}
      <section className="wrap label grid gap-3 border-t border-line py-8">
        <p>{t.builtBy}</p>
        {product.hasLegal && (
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href={`${product.path}/privacy`} className="link font-normal">
              {t.privacy}
            </Link>
            <Link href={`${product.path}/terms`} className="link font-normal">
              {t.terms}
            </Link>
            <a
              href="mailto:support@pantazisoft.com"
              className="link font-normal"
            >
              {t.support}: support@pantazisoft.com
            </a>
          </p>
        )}
        {product.note && <p className="max-w-3xl">{product.note}</p>}
      </section>
    </>
  );
}
