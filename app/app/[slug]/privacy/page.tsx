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
    title: `Privacy Policy — ${app.name}`,
    description: `Privacy Policy for ${app.name}.`,
    alternates: { canonical: `/app/${slug}/privacy` },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <LegalDocView app={app} docTitle="Privacy Policy" doc={app.legal.privacy} />;
}
