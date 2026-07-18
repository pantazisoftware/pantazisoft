import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { LegalDocView } from "@/components/legal-doc";

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
    title: `Terms of Use — ${app.name}`,
    description: `Terms of Use for ${app.name}.`,
    alternates: { canonical: `/app/${slug}/terms` },
  };
}

export default async function TermsPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <LegalDocView app={app} docTitle="Terms of Use" doc={app.legal.terms} />;
}
