import { notFound } from "next/navigation";
import { productSlugs } from "@/lib/products";
import { LegalPage, legalMetadata } from "@/views/legal";

type Props = { params: Promise<{ slug: string }> };

const slugs = productSlugs("ios");

export const dynamicParams = false;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  return legalMetadata((await params).slug, "privacy");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <LegalPage slug={slug} kind="privacy" />;
}
