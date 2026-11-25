import { notFound } from "next/navigation";
import { productSlugs } from "@/lib/products";
import { ProductPage, productMetadata } from "@/views/product";

type Props = { params: Promise<{ slug: string }> };

const slugs = productSlugs("web");

export const dynamicParams = false;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  return productMetadata("ro", (await params).slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <ProductPage locale="ro" slug={slug} />;
}
