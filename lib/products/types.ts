import type { LucideIcon } from "lucide-react";
import type { TechId } from "@/lib/tech";

export type Shot = { src: string; width: number; height: number };

export type ProductSlug =
  | "fabricator-pro"
  | "remoto"
  | "feedfast"
  | "bookify"
  | "webscore"
  | "gdprfix"
  | "memo";

export type ProductKind = "ios" | "web";

/** Facts that do not change with the language. */
export type ProductBase = {
  slug: ProductSlug;
  kind: ProductKind;
  /** Canonical English path on this site. */
  path: string;
  /** Live product website, when it has one. */
  url?: string;
  /** App Store listing; iOS only. */
  appStoreUrl?: string;
  appStoreId?: string;
  /** Small square mark shown beside the name. */
  icon: string;
  /** Social / hero image. */
  image: string;
  /** Screenshot files, in display order. Copy for each lives in the locale. */
  /** Real screenshots, phone or desktop; the size sets the shape on the page. */
  screenshots: Shot[];
  /** False keeps the page live (App Store links to it and its legal pages)
   *  but leaves it out of every list on the site. */
  listed: boolean;
  /** True when /privacy and /terms exist for this product. */
  hasLegal: boolean;
  /** schema.org applicationCategory. */
  schemaCategory: string;
  /** Platforms and tools the product works with, shown with their marks.
   *  Only what the product's own site states. */
  worksWith?: TechId[];
  /** One icon per feature, in the same order as `features` in the copy.
   *  Kept here because an icon is the same in every language. */
  featureIcons: LucideIcon[];
  /** One icon per entry in the copy's `freeTools`, same order. */
  freeToolIcons?: LucideIcon[];
  operatingSystem: string;
};

export type ProductTool = { name: string; body: string; pro?: boolean };

export type ProductCopy = {
  name: string;
  /** Short noun phrase: what kind of thing this is. */
  category: string;
  /** One line for lists and cards. */
  tagline: string;
  /** <title>, written for search; kept near 60 characters. */
  title: string;
  /** Meta description, kept near 155 characters. */
  description: string;
  keywords: string[];
  /** Page <h1>. */
  h1: string;
  lead: string;
  /** Quick facts shown under the hero. */
  facts: { label: string; value: string }[];
  /** "What is X?" — plain paragraphs. */
  overview: string[];
  features: { title: string; body: string }[];
  audience: string[];
  steps: { title: string; body: string }[];
  /** Catalogue of tools grouped by category (FabricatorPro). */
  catalogue?: {
    title: string;
    intro: string;
    groups: { name: string; summary: string; tools: ProductTool[] }[];
  };
  /** Extra plain list sections: compatibility, free vs Pro, privacy… */
  lists?: { title: string; intro?: string; items: string[]; note?: string }[];
  /** Free standalone tools on the product's own site, linked from its page. */
  freeTools?: { name: string; body: string; href: string }[];
  faqs: { q: string; a: string }[];
  /** Alt text for the hero image. */
  imageAlt: string;
  /** One entry per file in ProductBase.screenshots. */
  screenshots: { alt: string; caption: string }[];
  /** Small print, e.g. a trademark notice. */
  note?: string;
};

export type Product = ProductBase &
  Omit<ProductCopy, "screenshots"> & {
    /** Alt text and caption for each file in `screenshots`, same order. */
    screenshotCopy: ProductCopy["screenshots"];
  };
