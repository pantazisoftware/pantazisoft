import { notFound } from "next/navigation";
import { serviceSlugs } from "@/lib/services";
import { ServicePage, serviceMetadata } from "@/views/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  return serviceMetadata("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!serviceSlugs.includes(slug)) notFound();
  return <ServicePage locale="en" slug={slug} />;
}
