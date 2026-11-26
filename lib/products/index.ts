import {
  Accessibility,
  Activity,
  AtSign,
  BadgeCheck,
  Ban,
  Blocks,
  BookOpen,
  Bot,
  Braces,
  CalendarCheck,
  CalendarDays,
  Camera,
  CircleCheck,
  Clapperboard,
  ClipboardCheck,
  Clock,
  Cone,
  Cookie,
  CreditCard,
  Cylinder,
  DraftingCompass,
  Drill,
  Fence,
  FileCode,
  FileText,
  Gauge,
  Gem,
  Images,
  LayoutList,
  Link,
  Link2,
  ListChecks,
  Lock,
  MailCheck,
  MessageSquarePlus,
  MessageSquareText,
  MessagesSquare,
  Mic,
  Minimize2,
  MousePointerClick,
  Palette,
  PanelBottom,
  PanelsTopLeft,
  Plug,
  Printer,
  QrCode,
  Radar,
  RefreshCw,
  Repeat,
  Scale,
  ScrollText,
  Search,
  Shapes,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TableProperties,
  Tags,
  Tv,
  Users,
  Vibrate,
  WandSparkles,
  Wrench,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Product, ProductBase, ProductCopy, ProductSlug } from "./types";
import { en } from "./en";
import { ro } from "./ro";

export type { Product, ProductSlug } from "./types";

/** iOS screenshots, all exported at the iPhone 6.5" size. */
const shots = (dir: string, names: string[]) =>
  names.map((name) => ({
    src: `/app/${dir}/${name}.png`,
    width: 1284,
    height: 2778,
  }));

/** Display order. */
const base: ProductBase[] = [
  {
    slug: "fabricator-pro",
    tint: "#ff9f1c",
    kind: "ios",
    path: "/app/fabricator-pro",
    appStoreUrl: "https://apps.apple.com/us/app/fabricatorpro/id6762883398",
    appStoreId: "6762883398",
    icon: "/app/fabricator-pro/fabricator-pro-logo.png",
    image: "/app/fabricator-pro/fabricator-pro-logo.png",
    screenshots: shots("fabricator-pro", [
      "categories",
      "round_on_round",
      "truncated_cone",
      "cutting_optimizer",
      "drill_tap_chart",
      "truncated_pyramid",
      "auger_screw",
      "bar_spacing",
      "gate_counterweight",
      "gear_train_rpm",
      "weight_calculator",
      "stair_calculator",
      "unit_converter",
      "history",
    ]),
    listed: false,
    hasLegal: true,
    schemaCategory: "UtilitiesApplication",
    featureIcons: [
      DraftingCompass,
      Cylinder,
      Cone,
      Fence,
      Drill,
      TableProperties,
    ],
    operatingSystem: "iOS",
  },
  {
    slug: "remoto",
    tint: "#2a7fff",
    kind: "ios",
    path: "/app/remoto",
    appStoreUrl: "https://apps.apple.com/us/app/remoto-tv-remote/id6792331266",
    appStoreId: "6792331266",
    icon: "/app/remoto/remoto-icon.png",
    image: "/app/remoto/remoto-icon.png",
    screenshots: shots("remoto", [
      "pairing",
      "touchpad",
      "shortcuts",
      "keyboard",
      "lockscreen",
      "home-widget",
      "settings",
    ]),
    listed: false,
    hasLegal: true,
    schemaCategory: "UtilitiesApplication",
    featureIcons: [Ban, Radar, Tv, Clapperboard, Vibrate, ShieldCheck],
    worksWith: [
      "ios",
      "androidtv",
      "googletv",
      "chromecast",
      "nvidiashield",
      "mibox",
    ],
    operatingSystem: "iOS 16 or later",
  },
  {
    slug: "feedfast",
    tint: "#6f5cf6",
    kind: "web",
    path: "/projects/feedfast",
    url: "https://feedfa.st",
    icon: "https://feedfa.st/android-chrome-192x192.png",
    image: "/projects/feedfast/og.png",
    screenshots: [
      {
        src: "/projects/feedfast/public-feedback.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/feedfast/public-changelog.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/feedfast/public-status.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/feedfast/widget-playground.webp",
        width: 1800,
        height: 1125,
      },
      { src: "/projects/feedfast/mcp-server.webp", width: 1800, height: 1125 },
      {
        src: "/projects/feedfast/feature-uptime.webp",
        width: 1800,
        height: 1125,
      },
    ],
    listed: true,
    hasLegal: false,
    schemaCategory: "BusinessApplication",
    freeToolIcons: [
      Blocks,
      MousePointerClick,
      MessageSquarePlus,
      Activity,
      ScrollText,
    ],
    featureIcons: [
      MessagesSquare,
      ScrollText,
      Activity,
      CircleCheck,
      PanelsTopLeft,
      Plug,
      ShieldCheck,
    ],
    worksWith: [
      "markdown",
      "rss",
      "mcp",
      "npm",
      "wordpress",
      "claudecode",
      "claudedesktop",
      "cursor",
      "windsurf",
      "vscode",
      "codex",
      "geminicli",
    ],
    operatingSystem: "Web",
  },
  {
    slug: "bookify",
    tint: "#ff8f66",
    kind: "web",
    path: "/projects/bookify",
    url: "https://bookify.one",
    icon: "https://bookify.one/favicon.ico",
    image: "/projects/bookify.png",
    screenshots: [
      { src: "/projects/bookify/booking-page.webp", width: 860, height: 1718 },
      {
        src: "/projects/bookify/booking-demo-confirmed.webp",
        width: 860,
        height: 1057,
      },
      {
        src: "/projects/bookify/calendar-week.webp",
        width: 1800,
        height: 1174,
      },
    ],
    listed: true,
    hasLegal: false,
    schemaCategory: "BusinessApplication",
    featureIcons: [
      Link,
      Palette,
      CalendarDays,
      CalendarCheck,
      RefreshCw,
      MessageSquareText,
      CreditCard,
      Users,
    ],
    worksWith: ["googlecalendar", "applecalendar", "stripe", "sms"],
    operatingSystem: "Web",
  },
  {
    slug: "webscore",
    tint: "#123d2e",
    kind: "web",
    path: "/projects/webscore",
    url: "https://webscore.now",
    icon: "https://webscore.now/favicon.svg",
    image: "/projects/webscore/overview.webp",
    screenshots: [
      { src: "/projects/webscore/overview.webp", width: 1800, height: 1013 },
      {
        src: "/projects/webscore/fix-this-first.webp",
        width: 1800,
        height: 1013,
      },
      { src: "/projects/webscore/performance.webp", width: 1800, height: 1013 },
      { src: "/projects/webscore/seo.webp", width: 1800, height: 1013 },
      {
        src: "/projects/webscore/ai-visibility.webp",
        width: 1800,
        height: 1013,
      },
      { src: "/projects/webscore/security.webp", width: 1800, height: 1013 },
    ],
    listed: true,
    hasLegal: false,
    schemaCategory: "DeveloperApplication",
    freeToolIcons: [
      Tags,
      Braces,
      Bot,
      FileText,
      BadgeCheck,
      Link2,
      BookOpen,
      ShieldCheck,
      MailCheck,
      AtSign,
      Shapes,
      Share2,
      Repeat,
      Minimize2,
      Link,
      QrCode,
    ],
    featureIcons: [Gauge, Search, Accessibility, Lock, Sparkles, ListChecks],
    worksWith: [
      "googlesearchconsole",
      "mcp",
      "claudecode",
      "claudedesktop",
      "cursor",
      "codex",
    ],
    operatingSystem: "Web",
  },
  {
    slug: "gdprfix",
    tint: "#f4c542",
    kind: "web",
    path: "/projects/gdprfix",
    url: "https://gdprfix.eu",
    icon: "/projects/gdprfix-icon.png",
    image: "/projects/gdprfix.png",
    screenshots: [
      {
        src: "/projects/gdprfix/report-overview.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/gdprfix/report-issues.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/gdprfix/report-cookies.webp",
        width: 1800,
        height: 1125,
      },
      {
        src: "/projects/gdprfix/report-policy.webp",
        width: 1800,
        height: 1125,
      },
      { src: "/projects/gdprfix/connect-ai.webp", width: 1800, height: 1125 },
      {
        src: "/projects/gdprfix/consent-mode-generator.webp",
        width: 1800,
        height: 1125,
      },
    ],
    listed: true,
    hasLegal: false,
    schemaCategory: "SecurityApplication",
    freeToolIcons: [SlidersHorizontal, Ban, PanelBottom],
    featureIcons: [
      Cookie,
      PanelBottom,
      ClipboardCheck,
      FileCode,
      Scale,
      Wrench,
      WandSparkles,
      Bot,
    ],
    worksWith: [
      "wordpress",
      "woocommerce",
      "shopify",
      "wix",
      "webflow",
      "nextjs",
      "mcp",
      "claudecode",
      "claudedesktop",
      "cursor",
      "vscode",
    ],
    operatingSystem: "Web",
  },
  {
    slug: "memo",
    tint: "#f1d6de",
    kind: "web",
    path: "/projects/memo",
    url: "https://me-mo.ro",
    icon: "https://www.me-mo.ro/logo.png",
    image: "/projects/me-mo.webp",
    screenshots: [
      { src: "/projects/memo/guest-landing.webp", width: 860, height: 1861 },
      { src: "/projects/memo/photos.webp", width: 1800, height: 875 },
      { src: "/projects/memo/qr.webp", width: 1800, height: 1213 },
      { src: "/projects/memo/print-editor.webp", width: 1800, height: 1338 },
      { src: "/projects/memo/guest-gallery.webp", width: 860, height: 1861 },
      { src: "/projects/memo/slideshow.webp", width: 1800, height: 1125 },
    ],
    listed: true,
    hasLegal: false,
    schemaCategory: "MultimediaApplication",
    freeToolIcons: [Camera, ListChecks, Clock],
    featureIcons: [QrCode, Printer, Images, LayoutList, ShieldCheck, Gem, Mic],
    operatingSystem: "Web",
  },
];

const copy: Record<Locale, Record<ProductSlug, ProductCopy>> = { en, ro };

/** Every product, listed or not — for page lookups and the sitemap. */
export function getAllProducts(locale: Locale): Product[] {
  return base.map((b) => {
    const { screenshots: screenshotCopy, ...rest } = copy[locale][b.slug];
    if ((b.freeToolIcons?.length ?? 0) !== (rest.freeTools?.length ?? 0)) {
      throw new Error(
        `${b.slug} (${locale}): ${rest.freeTools?.length ?? 0} free tools but ${b.freeToolIcons?.length ?? 0} freeToolIcons`,
      );
    }
    if (b.featureIcons.length !== rest.features.length) {
      throw new Error(
        `${b.slug} (${locale}): ${rest.features.length} features but ${b.featureIcons.length} featureIcons`,
      );
    }
    return { ...b, ...rest, screenshotCopy };
  });
}

/** The products shown in lists on the site. */
export function getProducts(locale: Locale): Product[] {
  return getAllProducts(locale).filter((p) => p.listed);
}

export function getProduct(locale: Locale, slug: string): Product | undefined {
  return getAllProducts(locale).find((p) => p.slug === slug);
}

/** Slugs for one kind — used by generateStaticParams. */
export function productSlugs(kind: ProductBase["kind"]): string[] {
  return base.filter((b) => b.kind === kind).map((b) => b.slug);
}

/** The picture on a product card: its first landscape screenshot, which
 *  shows the real interface, or the social image when it has none. */
export function coverOf(product: Product) {
  return (
    product.screenshots.find((s) => s.width > s.height) ?? {
      src: product.image,
      width: 1200,
      height: 630,
    }
  );
}
