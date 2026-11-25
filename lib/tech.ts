import type { SimpleIcon } from "simple-icons";
import {
  siAndroid,
  siAndroidstudio,
  siApple,
  siAppstore,
  siClaude,
  siCursor,
  siDocker,
  siExpo,
  siFastlane,
  siFirebase,
  siGithubactions,
  siGooglecalendar,
  siGooglecast,
  siGooglegemini,
  siGoogleplay,
  siGooglesearchconsole,
  siGoogletv,
  siIos,
  siJetpackcompose,
  siKotlin,
  siMarkdown,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siNvidia,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siResend,
  siRss,
  siSentry,
  siShopify,
  siStripe,
  siSupabase,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWebflow,
  siWindsurf,
  siWix,
  siWoocommerce,
  siWordpress,
  siXiaomi,
} from "simple-icons";
import {
  Archive,
  ArrowDownUp,
  Boxes,
  ChartColumn,
  Database,
  KeyRound,
  ListOrdered,
  MessageSquare,
  Radio,
  ScanText,
  SquareCode,
  Sparkles,
  Terminal,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

/**
 * Every technology the site names, with its mark.
 *
 * Brand marks come from Simple Icons. Where a brand is not in that set (it
 * removes marks at the owner's request — OpenAI, Amazon S3, VS Code, Auth.js)
 * or the item is a concept rather than a product, a neutral Lucide icon stands
 * in, so no logo is ever redrawn by hand.
 */
type Tech = {
  label: string | Record<Locale, string>;
} & ({ brand: SimpleIcon } | { icon: LucideIcon });

const tech = {
  // Product stack
  nextjs: { label: "Next.js", brand: siNextdotjs },
  react: { label: "React", brand: siReact },
  typescript: { label: "TypeScript", brand: siTypescript },
  tailwind: { label: "Tailwind CSS", brand: siTailwindcss },
  nodejs: { label: "Node.js", brand: siNodedotjs },
  postgresql: { label: "PostgreSQL", brand: siPostgresql },
  supabase: { label: "Supabase", brand: siSupabase },
  prisma: { label: "Prisma", brand: siPrisma },
  redis: { label: "Redis", brand: siRedis },
  authjs: { label: "Auth.js", icon: KeyRound },
  s3: { label: { en: "S3 storage", ro: "Stocare S3" }, icon: Archive },
  vercel: { label: "Vercel", brand: siVercel },
  docker: { label: "Docker", brand: siDocker },
  githubactions: { label: "GitHub Actions", brand: siGithubactions },
  stripe: { label: "Stripe", brand: siStripe },
  resend: { label: "Resend", brand: siResend },
  sentry: { label: "Sentry", brand: siSentry },

  // Mobile
  android: { label: "Android", brand: siAndroid },
  swift: { label: "Swift", brand: siSwift },
  swiftui: { label: "SwiftUI", brand: siSwift },
  kotlin: { label: "Kotlin", brand: siKotlin },
  jetpackcompose: { label: "Jetpack Compose", brand: siJetpackcompose },
  reactnative: { label: "React Native", brand: siReact },
  expo: { label: "Expo", brand: siExpo },
  firebase: { label: "Firebase", brand: siFirebase },
  fastlane: { label: "fastlane", brand: siFastlane },
  appstore: { label: "App Store", brand: siAppstore },
  googleplay: { label: "Google Play", brand: siGoogleplay },
  xcode: { label: "Xcode", brand: siApple },
  androidstudio: { label: "Android Studio", brand: siAndroidstudio },

  // AI
  claude: { label: "Claude", brand: siClaude },
  openai: { label: "OpenAI", icon: Sparkles },
  opensource: {
    label: { en: "Open-source models", ro: "Modele open source" },
    icon: Boxes,
  },
  embeddings: { label: "Embeddings", icon: Waypoints },
  pgvector: { label: "pgvector", icon: Database },
  extraction: {
    label: { en: "Structured extraction", ro: "Extragere structurată" },
    icon: ScanText,
  },
  rerankers: { label: { en: "Rerankers", ro: "Rerankere" }, icon: ArrowDownUp },
  streaming: {
    label: { en: "Streaming APIs", ro: "API-uri de streaming" },
    icon: Radio,
  },
  queues: { label: { en: "Queues", ro: "Cozi de mesaje" }, icon: ListOrdered },
  analytics: {
    label: { en: "Usage analytics", ro: "Statistici de utilizare" },
    icon: ChartColumn,
  },
  mcp: { label: "MCP", brand: siModelcontextprotocol },

  // AI coding tools
  claudecode: { label: "Claude Code", brand: siClaude },
  claudedesktop: { label: "Claude Desktop", brand: siClaude },
  cursor: { label: "Cursor", brand: siCursor },
  windsurf: { label: "Windsurf", brand: siWindsurf },
  vscode: { label: "VS Code", icon: SquareCode },
  codex: { label: "Codex", icon: Terminal },
  geminicli: { label: "Gemini CLI", brand: siGooglegemini },

  // Platforms and integrations
  wordpress: { label: "WordPress", brand: siWordpress },
  woocommerce: { label: "WooCommerce", brand: siWoocommerce },
  shopify: { label: "Shopify", brand: siShopify },
  wix: { label: "Wix", brand: siWix },
  webflow: { label: "Webflow", brand: siWebflow },
  npm: { label: "npm", brand: siNpm },
  rss: { label: "RSS", brand: siRss },
  markdown: { label: "Markdown", brand: siMarkdown },
  googlecalendar: { label: "Google Calendar", brand: siGooglecalendar },
  applecalendar: { label: "Apple Calendar / CalDAV", brand: siApple },
  googlesearchconsole: {
    label: "Google Search Console",
    brand: siGooglesearchconsole,
  },
  sms: { label: "SMS", icon: MessageSquare },

  // TV and devices
  ios: { label: "iOS", brand: siIos },
  androidtv: { label: "Android TV", brand: siAndroid },
  googletv: { label: "Google TV", brand: siGoogletv },
  chromecast: { label: "Chromecast", brand: siGooglecast },
  nvidiashield: { label: "Nvidia Shield", brand: siNvidia },
  mibox: { label: "Xiaomi Mi Box", brand: siXiaomi },
} satisfies Record<string, Tech>;

export type TechId = keyof typeof tech;

export type ResolvedTech = {
  id: TechId;
  label: string;
  /** SVG path and brand colour, for brand marks. */
  brand?: { path: string; hex: string };
  icon?: LucideIcon;
};

export function resolveTech(ids: TechId[], locale: Locale): ResolvedTech[] {
  return ids.map((id) => {
    const t: Tech = tech[id];
    const label = typeof t.label === "string" ? t.label : t.label[locale];
    return "brand" in t
      ? { id, label, brand: { path: t.brand.path, hex: t.brand.hex } }
      : { id, label, icon: t.icon };
  });
}
