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
      <section className="pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All projects
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src={project.favicon}
              alt=""
              width={40}
              height={40}
              className="rounded-xl"
            />
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              {project.name}
            </h1>
          </div>

          <p className="mt-4 text-lg md:text-xl text-secondary max-w-2xl">
            {project.tagline}
          </p>

          <div className="mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              Visit {project.name}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-card overflow-hidden bg-zinc-100">
            <div className="aspect-video relative">
              <Image
                src={project.ogImage}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                About
              </h2>
              <p className="text-secondary leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-zinc-100 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-zinc-600" />
                    </div>
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-surface rounded-card p-8 md:p-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              Have a similar idea?
            </h2>
            <p className="mt-3 text-secondary max-w-md mx-auto">
              We&apos;d love to help you build it. Let&apos;s start a
              conversation about your project.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
