import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute top-24 -left-24 w-[480px] h-[480px] rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute -top-10 right-0 w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-[22%] bg-orange-500/30 blur-xl" />
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
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
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

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-7 py-4 rounded-button text-base font-semibold hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Download now
                </a>
                <AppStoreBadge href={app.appStoreUrl} />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="relative w-[260px] sm:w-[300px] aspect-[9/16] rounded-[2.5rem] bg-zinc-900 ring-1 ring-white/10 shadow-2xl shadow-orange-500/20 overflow-hidden">
                  <Image
                    src={app.screenshots[0].src}
                    alt={app.screenshots[0].alt}
                    fill
                    sizes="300px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="py-12 md:py-16 border-t border-white/5 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {app.capabilities.map((cap) => (
              <div key={cap.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white">
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              Features
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Every calculation, one tap away
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
              {app.longDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-7 hover:ring-orange-500/40 hover:bg-zinc-900 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
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

      {/* Tools by category */}
      <section id="tools" className="py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              Complete toolbox
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              30 tools across 7 categories
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
              Every calculator is built around real fabrication workflows.
              Free tools are free forever — Pro unlocks everything.
            </p>
          </div>

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
                    <li
                      key={tool.name}
                      className="py-3 flex items-start gap-3"
                    >
                      <span
                        className={`shrink-0 mt-0.5 inline-flex items-center justify-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ring-1 ${
                          tool.access === "pro"
                            ? "text-orange-400 bg-orange-500/10 ring-orange-500/30"
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

          <div className="mt-10 rounded-card bg-zinc-900/60 ring-1 ring-white/5 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
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
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              Gallery
            </p>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              See it in action
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-[1.65]">
              A quick look at the tools you&apos;ll reach for every day.
            </p>
          </div>

          <AppGallery screenshots={app.screenshots} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative rounded-card bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent ring-1 ring-orange-500/20 p-10 md:p-14 text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
            />
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Ready to ship cleaner cuts?
            </h2>
            <p className="mt-4 text-zinc-300 max-w-lg mx-auto leading-[1.65]">
              Download {app.name} and keep precision math on the shop floor,
              in your pocket.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-button text-base font-semibold hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/30"
              >
                Download now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
