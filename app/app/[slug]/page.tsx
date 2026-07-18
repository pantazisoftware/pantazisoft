import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { apps, getApp } from "@/lib/apps";
import { AppGallery } from "@/components/app-gallery";
import { AppStoreBadge } from "@/components/app-store-badge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    alternates: { canonical: `/app/${slug}` },
    openGraph: {
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      url: `https://pantazisoft.com/app/${slug}`,
      images: [{ url: app.logo }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      images: [app.logo],
      creator: "@eduard_pantazi",
    },
  };
}

export default async function AppLandingPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const heroShot = app.screenshots[0];
  // A short stat strip (≤4 items) is laid out wider and kept to a single line
  // that scales down on narrow screens instead of wrapping.
  const compactStats = app.capabilities.length <= 4;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute top-24 -left-24 w-[480px] h-[480px] rounded-full bg-app/15 blur-3xl" />
          <div className="absolute -top-10 right-0 w-[420px] h-[420px] rounded-full bg-app/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-[22%] bg-app/30 blur-xl" />
                  <Image
                    src={app.logo}
                    alt={`${app.name} app icon`}
                    width={72}
                    height={72}
                    className="relative rounded-[22%] ring-1 ring-white/10"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                    iOS App
                  </p>
                  <p className="text-zinc-400 text-sm mt-1">
                    Available on the App Store
                  </p>
                </div>
              </div>

              <h1 className="mt-8 font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
                {app.name}
              </h1>
              <p className="mt-5 text-xl md:text-2xl text-zinc-300 font-medium leading-snug">
                {app.tagline}
              </p>
              <p className="mt-5 text-zinc-400 leading-[1.7] max-w-xl">
                {app.description}
              </p>

              <div className="mt-10">
                <AppStoreBadge href={app.appStoreUrl} />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-app/10 blur-3xl rounded-full" />
                {heroShot ? (
                  <div className="relative w-[260px] sm:w-[300px] aspect-[9/16] rounded-[2.5rem] bg-zinc-900 ring-1 ring-white/10 shadow-2xl shadow-app/20 overflow-hidden">
                    <Image
                      src={heroShot.src}
                      alt={heroShot.alt}
                      fill
                      sizes="300px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center w-[260px] sm:w-[300px] aspect-square">
                    <Image
                      src={app.logo}
                      alt={`${app.name} app icon`}
                      width={220}
                      height={220}
                      className="relative rounded-[22%] ring-1 ring-white/10 shadow-2xl shadow-app/20"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="py-12 md:py-16 border-t border-white/5 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className={
              compactStats
                ? "grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
            }
          >
            {app.capabilities.map((cap) => (
              <div key={cap.label} className="min-w-0">
                <p
                  className={`font-heading font-bold tracking-tight text-white ${
                    compactStats
                      ? "whitespace-nowrap text-[clamp(1rem,4.2vw,1.875rem)]"
                      : "text-2xl md:text-3xl"
                  }`}
                >
                  {cap.label}
                </p>
                <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
              {app.featuresHeading.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              {app.featuresHeading.title}
            </h2>
            {app.featuresHeading.body && (
              <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                {app.featuresHeading.body}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-7 hover:ring-app/40 hover:bg-zinc-900 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-app/10 ring-1 ring-app/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-app" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-[1.65]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools by category (FabricatorPro) */}
      {app.toolCategories && (
        <section id="tools" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            {app.toolsHeading && (
              <div className="max-w-2xl mb-14">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                  {app.toolsHeading.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  {app.toolsHeading.title}
                </h2>
                {app.toolsHeading.body && (
                  <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                    {app.toolsHeading.body}
                  </p>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              {app.toolCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-6 md:p-7"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-zinc-500 shrink-0">
                      {cat.tools.length} tool{cat.tools.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{cat.summary}</p>
                  <ul className="mt-5 divide-y divide-white/5">
                    {cat.tools.map((tool) => (
                      <li key={tool.name} className="py-3 flex items-start gap-3">
                        <span
                          className={`shrink-0 mt-0.5 inline-flex items-center justify-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ring-1 ${
                            tool.access === "pro"
                              ? "text-app-hover bg-app/10 ring-app/30"
                              : "text-zinc-400 bg-white/5 ring-white/10"
                          }`}
                        >
                          {tool.access === "pro" ? "Pro" : "Free"}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">
                            {tool.name}
                          </p>
                          <p className="text-xs text-zinc-500 leading-[1.55] mt-0.5">
                            {tool.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {app.pricing && (
              <div className="mt-10 rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                  Pricing
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  {app.pricing.model} — free to start, Pro when you need it
                </h3>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-zinc-400 leading-[1.65]">
                  <p>{app.pricing.freeTierNote}</p>
                  <p>{app.pricing.proNote}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Plans — Free vs Pro (Remoto) */}
      {app.plans && (
        <section id="plans" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                {app.plans.heading.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                {app.plans.heading.title}
              </h2>
              {app.plans.heading.body && (
                <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                  {app.plans.heading.body}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {app.plans.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-card p-7 md:p-8 ${
                    tier.highlight
                      ? "bg-gradient-to-br from-app/15 via-app/5 to-transparent ring-1 ring-app/30"
                      : "bg-zinc-900/60 ring-1 ring-white/5"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-app text-white">
                      One-time
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-extrabold tracking-tight text-white">
                      {tier.price}
                    </span>
                    <span className="text-sm text-zinc-500">{tier.priceNote}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.highlight ? "text-app" : "text-zinc-500"
                          }`}
                        />
                        <span className="text-sm text-zinc-300 leading-[1.6]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Supported devices (Remoto) */}
      {app.devices && (
        <section id="devices" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                  {app.devices.heading.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  {app.devices.heading.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                  {app.devices.intro}
                </p>
                <div className="mt-6 rounded-card bg-app/5 ring-1 ring-app/20 p-5 text-sm text-zinc-300 leading-[1.6]">
                  {app.devices.requirement}
                </div>
              </div>

              <ul className="rounded-card bg-zinc-900/60 ring-1 ring-white/5 divide-y divide-white/5">
                {app.devices.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-5">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-app" />
                    <span className="text-sm text-zinc-300 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* How it works (Remoto) */}
      {app.howItWorks && (
        <section id="how" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                {app.howItWorks.heading.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                {app.howItWorks.heading.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {app.howItWorks.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-7"
                >
                  <div className="w-10 h-10 rounded-xl bg-app/10 ring-1 ring-app/30 flex items-center justify-center font-heading font-bold text-app">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-[1.65]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Voice control (Remoto) */}
      {app.voice && (
        <section id="voice" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative rounded-card bg-gradient-to-br from-app/15 via-app/5 to-transparent ring-1 ring-app/20 p-8 md:p-12 overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-app/20 blur-3xl"
              />
              <div className="relative max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                  {app.voice.heading.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  {app.voice.heading.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-300 leading-[1.65]">
                  {app.voice.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {app.voice.examples.map((ex) => (
                    <span
                      key={ex}
                      className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-zinc-200"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                {app.voice.note && (
                  <p className="mt-6 text-sm text-zinc-400 leading-[1.65]">
                    {app.voice.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {app.screenshots.length > 0 && (
        <section id="gallery" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-12 text-center mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                Gallery
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                See it in action
              </h2>
              <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                A quick look at what you&apos;ll reach for every day.
              </p>
            </div>

            <AppGallery screenshots={app.screenshots} />
          </div>
        </section>
      )}

      {/* Privacy pledge (Remoto) */}
      {app.pledge && (
        <section id="pledge" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                {app.pledge.heading.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                {app.pledge.heading.title}
              </h2>
              {app.pledge.heading.body && (
                <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
                  {app.pledge.heading.body}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {app.pledge.points.map((point) => (
                <div
                  key={point.label}
                  className="rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-6"
                >
                  <div className="w-9 h-9 rounded-lg bg-app/10 ring-1 ring-app/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-app" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {point.label}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-[1.6]">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-zinc-500">
              Read the full{" "}
              <a
                href={`/app/${slug}/privacy`}
                className="text-app hover:text-app-hover transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      )}

      {/* FAQ (Remoto) */}
      {app.faqs && (
        <section id="faq" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-app">
                {app.faqs.heading.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
                {app.faqs.heading.title}
              </h2>
            </div>

            <div className="divide-y divide-white/5 rounded-card bg-zinc-900/60 ring-1 ring-white/5">
              {app.faqs.items.map((faq) => (
                <details key={faq.q} className="group px-6">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 -mt-1 text-sm text-zinc-400 leading-[1.7]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-card bg-gradient-to-br from-app/20 via-app/5 to-transparent ring-1 ring-app/20 p-10 md:p-14 text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-app/20 blur-3xl"
            />
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              {app.cta.title}
            </h2>
            <p className="mt-4 text-zinc-300 max-w-lg mx-auto leading-[1.65]">
              {app.cta.body}
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadge href={app.appStoreUrl} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
