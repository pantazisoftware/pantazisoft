import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

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

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-14">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All projects
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={project.favicon}
              alt={`${project.name} icon`}
              width={44}
              height={44}
              className="rounded-xl border border-border bg-surface p-1 shadow-card"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-display leading-display text-primary">
              {project.name}
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-lg md:text-xl text-secondary leading-body">
            {project.tagline}
          </p>

          <div className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group"
            >
              Visit {project.name}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-card border border-border bg-surface shadow-panel">
            <div className="aspect-video relative">
              <Image
                src={project.ogImage}
                alt={project.imageAlt ?? `${project.name} screenshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="mt-4 mb-4 text-2xl md:text-3xl font-bold tracking-heading text-primary">
                What it does
              </h2>
              <p className="text-secondary leading-prose">
                {project.longDescription}
              </p>
            </div>
            <div>
              <span className="eyebrow">Features</span>
              <h2 className="mt-4 mb-5 text-2xl md:text-3xl font-bold tracking-heading text-primary">
                Inside the product
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-secondary leading-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-card bg-surface-inverse p-10 md:p-16 text-center shadow-panel">
            <h2 className="text-3xl md:text-4xl font-bold tracking-heading leading-title text-white">
              Have a similar idea?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/70 leading-body">
              We&apos;d love to help you build it. Start with a scoping call —
              fixed price, and an honest answer on feasibility.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="btn bg-white text-primary hover:bg-white/90"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
