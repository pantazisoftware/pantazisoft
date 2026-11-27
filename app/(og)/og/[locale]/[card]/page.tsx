import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { OG_CARDS, OgCard } from "@/views/og-card";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; card: string }>;
}) {
  if (process.env.NODE_ENV === "production") notFound();
  const { locale, card } = await params;
  if (!locales.includes(locale as Locale) || !OG_CARDS.includes(card)) notFound();
  return <OgCard locale={locale as Locale} card={card} />;
}
