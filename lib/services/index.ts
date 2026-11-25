import type { Locale } from "@/lib/i18n";
import type { TechId } from "@/lib/tech";
import { en } from "./en";
import { ro } from "./ro";

export type ServiceSlug =
  | "mvp-development"
  | "custom-applications"
  | "mobile-app-development"
  | "ai-integration";

export type ServiceCopy = {
  name: string;
  tagline: string;
  /** <title>, written for search. */
  title: string;
  /** Meta description. */
  description: string;
  keywords: string[];
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  audience: string[];
  deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  formHeading: string;
  formBody: string;
  messagePlaceholder: string;
};

export type Service = ServiceCopy & {
  slug: ServiceSlug;
  path: string;
  /** Photo shown on the service page and in lists. */
  photo: string;
  stack: TechId[];
};

const order: { slug: ServiceSlug; photo: string; stack: TechId[] }[] = [
  {
    slug: "mvp-development",
    photo: "/photos/startup.jpg",
    stack: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "postgresql",
      "supabase",
      "prisma",
      "authjs",
      "vercel",
      "stripe",
      "resend",
      "sentry",
    ],
  },
  {
    slug: "custom-applications",
    photo: "/photos/retail.jpg",
    stack: [
      "nextjs",
      "react",
      "typescript",
      "nodejs",
      "postgresql",
      "prisma",
      "redis",
      "s3",
      "vercel",
      "docker",
      "githubactions",
      "sentry",
    ],
  },
  {
    slug: "mobile-app-development",
    photo: "/photos/mobile.jpg",
    stack: [
      "ios",
      "android",
      "swift",
      "swiftui",
      "kotlin",
      "jetpackcompose",
      "reactnative",
      "expo",
      "typescript",
      "firebase",
      "fastlane",
      "appstore",
      "googleplay",
    ],
  },
  {
    slug: "ai-integration",
    photo: "/photos/desk.jpg",
    stack: [
      "claude",
      "openai",
      "opensource",
      "embeddings",
      "pgvector",
      "postgresql",
      "extraction",
      "rerankers",
      "nextjs",
      "streaming",
      "queues",
      "analytics",
    ],
  },
];

const copy: Record<Locale, Record<ServiceSlug, ServiceCopy>> = { en, ro };

export const serviceSlugs: string[] = order.map((o) => o.slug);

export function getServices(locale: Locale): Service[] {
  return order.map(({ slug, photo, stack }) => ({
    slug,
    photo,
    stack,
    path: `/services/${slug}`,
    ...copy[locale][slug],
  }));
}

export function getService(locale: Locale, slug: string): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}
