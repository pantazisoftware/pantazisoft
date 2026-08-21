import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Index } from "@/components/band";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.name} — Built by PantaziSoft`,
      description: project.description,
      url: `https://pantazisoft.com/projects/${slug}`,
      images: [{ url: project.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Built by PantaziSoft`,
      description: project.description,
      images: [project.ogImage],
      creator: "@eduard_pantazi",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);
  const domain = new URL(project.url).hostname;

  return (
    <>
      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <div className="band">
        <div className="pad py-3.5">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[0.8125rem] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All projects
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
          <div className="load-in flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center border border-line bg-panel p-2">
              <Image
                src={project.favicon}
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
            </span>
            <h1 className="text-[2.5rem] font-semibold leading-display tracking-display text-ink sm:text-[3.25rem] md:text-[4rem]">
              {project.name}
            </h1>
          </div>

          <p className="load-in d1 mt-7 max-w-2xl text-lg leading-body text-body md:text-xl">
            {project.tagline}
          </p>

          <div className="load-in d2 mt-9 flex flex-col sm:flex-row">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group w-full sm:w-auto"
            >
              Visit {domain}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/#contact"
              className="btn btn-secondary w-full border-t-0 sm:w-auto sm:border-t sm:border-l-0"
            >
              Build something similar
            </Link>
          </div>
        </div>
      </section>

      {/* ── Screenshot ─────────────────────────────────────────────────── */}
      <section className="band bg-panel p-4 sm:p-10 lg:p-14">
        <div className="reveal reveal-focus relative aspect-video border border-line bg-surface">
          <Image
            src={project.ogImage}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── About + features ───────────────────────────────────────────── */}
      <section className="band">
        <div className="grid lg:grid-cols-12">
          <div className="pad reveal py-12 md:py-16 lg:col-span-5">
            <span className="eyebrow">About</span>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-title tracking-heading text-ink md:text-[2.25rem]">
              What it does
            </h2>
            <p className="mt-6 leading-prose text-body">
              {project.longDescription}
            </p>
          </div>

          <div className="reveal s2 border-t border-line lg:col-span-7 lg:border-t-0 lg:border-l">
            <div className="border-b border-line px-6 py-6 sm:px-10">
              <span className="eyebrow eyebrow-lime">Inside the product</span>
            </div>
            <ul>
              {project.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 border-b border-line px-6 py-4 transition-colors last:border-b-0 hover:bg-panel sm:px-10"
                >
                  <Index n={i + 1} />
                  <span className="flex-1 leading-body text-body">
                    {feature}
                  </span>
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-lime-ink"
                    strokeWidth={2.75}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Other projects ─────────────────────────────────────────────── */}
      {others.length > 0 && (
        <section className="band">
          <div className="pad py-8">
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
              Other projects
            </h2>
          </div>
          <div className="cells border-t border-line sm:grid-cols-2">
            {others.map((other, i) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className={`cell group reveal s${i + 1} flex items-start gap-4 p-7 transition-colors hover:bg-panel md:p-9`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel p-2 transition-colors group-hover:border-ink">
                  <Image
                    src={other.favicon}
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-title text-ink">
                    {other.name}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] leading-body text-body">
                    {other.tagline}
                  </p>
                  <span className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    <span className="underline-grow">View project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Closing call to action ─────────────────────────────────────── */}
      <section className="band bg-inverse">
        <div className="pad flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-14">
          <div>
            <h2 className="reveal font-heading text-[1.75rem] font-semibold tracking-heading text-white md:text-[2.25rem]">
              Have a similar idea?
            </h2>
            <p className="reveal s1 mt-3 max-w-md leading-body text-white/70">
              Start with a scoping call — a fixed price, and an honest answer on
              feasibility.
            </p>
          </div>
          <div className="reveal s2 flex w-full shrink-0 flex-col sm:w-auto sm:flex-row">
            <Link href="/#contact" className="btn btn-lime group w-full sm:w-auto">
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
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
