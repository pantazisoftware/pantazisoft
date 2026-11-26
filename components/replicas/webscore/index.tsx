import type { ComponentType } from "react";
import { Google_Sans } from "next/font/google";
import { d } from "../frames";
import { Bot, Gauge, Lightbulb, Lock, Search, ShieldCheck } from "./icons";
import {
  Floater,
  FloaterLabel,
  ScoreGauge,
  SeverityMark,
  SiteMark,
  StatusSquare,
  cn,
  type Severity,
  type Status,
} from "./ui";
import "./scope.css";

/*
 * WebScore, one replica per feature in the order of `features` in the copy.
 *
 * Each is WebScore's own illustration of that module's report, the
 * ModuleShowcase it draws on its service pages
 * (analytica-alignui/components/marketing/replicas/module-showcase.tsx),
 * with the markup and classes unchanged and fed the same `example` data as
 * app/(marketing)/services/<module>/page.tsx. It is drawn inside `.ws`, so
 * it gets WebScore's palette and face. The changes: the white report card is
 * the replica's inset surface (rp-fill) instead of a card centred on a
 * stage, `md:` variants are fixed to their desktop form, and rp-* motion
 * classes are added. Of the two floaters it sets over the card's edges, the
 * finding is kept (title and severity) and the fix is left out: the 4:3
 * card has no room around the report for both.
 */

/** app/layout.tsx: Google Sans, the face of WebScore's `.mk` canvas. */
const googleSans = Google_Sans({
  adjustFontFallback: false,
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
  variable: "--font-ws-google-sans",
});

/** module-showcase.tsx: MODULE_ICONS */
const MODULE_ICONS = {
  performance: Gauge,
  seo: Search,
  accessibility: ShieldCheck,
  security: Lock,
  "best-practices": Lightbulb,
  "ai-visibility": Bot,
} as const;

type Example = {
  scoreLabel: string;
  score: number;
  rows: { label: string; value: string; status: Status }[];
};

/** The `example` on each module's service page, verbatim. */
const EXAMPLES: Record<keyof typeof MODULE_ICONS, { module: string; example: Example }> = {
  performance: {
    module: "Performance",
    example: {
      scoreLabel: "Performance score",
      score: 94,
      rows: [
        { label: "Largest Contentful Paint", value: "2.1 s", status: "good" },
        { label: "Cumulative Layout Shift", value: "0.08", status: "good" },
        { label: "Total Blocking Time", value: "120 ms", status: "good" },
        { label: "Time to First Byte", value: "380 ms", status: "good" },
        { label: "Speed Index", value: "2.4 s", status: "good" },
        { label: "Render-blocking requests", value: "−430 ms", status: "warn" },
      ],
    },
  },
  seo: {
    module: "SEO",
    example: {
      scoreLabel: "SEO score",
      score: 80,
      rows: [
        { label: "Title tag", value: "52 characters", status: "good" },
        { label: "Meta description", value: "Missing", status: "bad" },
        { label: "H1 headings", value: "1", status: "good" },
        { label: "Canonical URL", value: "Self-referencing", status: "good" },
        { label: "Structured data", value: "Organization, WebSite", status: "good" },
        { label: "XML sitemap", value: "No lastmod dates", status: "warn" },
      ],
    },
  },
  accessibility: {
    module: "Accessibility",
    example: {
      scoreLabel: "Accessibility score",
      score: 81,
      rows: [
        { label: "WCAG level met", value: "A", status: "warn" },
        { label: "Color contrast", value: "6 elements fail", status: "warn" },
        { label: "Image alt text", value: "24 of 24", status: "good" },
        { label: "Form labels", value: "All labelled", status: "good" },
        { label: "Keyboard access", value: "No blockers", status: "good" },
        { label: "Focus indicator", value: "Hidden", status: "bad" },
      ],
    },
  },
  security: {
    module: "Security",
    example: {
      scoreLabel: "Security score",
      score: 89,
      rows: [
        { label: "HTTPS redirect", value: "Enforced", status: "good" },
        { label: "Certificate expiry", value: "74 days left", status: "good" },
        { label: "TLS version", value: "1.3", status: "good" },
        { label: "Key security headers", value: "3 of 4", status: "warn" },
        { label: "SPF and DKIM", value: "Both found", status: "good" },
        { label: "DMARC policy", value: "p=none", status: "warn" },
      ],
    },
  },
  "ai-visibility": {
    module: "AI visibility",
    example: {
      scoreLabel: "AI Visibility score",
      score: 68,
      rows: [
        { label: "AI crawlers allowed for this page", value: "16 of 16", status: "good" },
        { label: "Content readable without JavaScript", value: "92%", status: "good" },
        { label: "llms.txt present and well-formed", value: "Not found", status: "warn" },
        { label: "Question-style headings", value: "0 of 9", status: "bad" },
        { label: "Organization or Person schema", value: "Found", status: "good" },
        { label: "About and Contact pages linked", value: "Contact only", status: "warn" },
      ],
    },
  },
  "best-practices": {
    module: "Best practices",
    example: {
      scoreLabel: "Best practices score",
      score: 96,
      rows: [
        { label: "Served over HTTPS", value: "Yes", status: "good" },
        { label: "Console errors", value: "2 errors", status: "bad" },
        { label: "Deprecated APIs", value: "None", status: "good" },
        { label: "Image aspect ratio", value: "Correct", status: "good" },
        { label: "Render-blocking scripts", value: "1 in head", status: "warn" },
        { label: "Off-screen images lazy-loaded", value: "9 of 12", status: "warn" },
      ],
    },
  },
};

/** The `sampleFinding` on each module's service page: its title and severity. */
const FINDINGS: Record<keyof typeof MODULE_ICONS, { title: string; severity: Severity }> = {
  performance: { title: "Render-blocking requests", severity: "high" },
  seo: { title: "Missing meta description", severity: "high" },
  accessibility: { title: "Form inputs missing labels", severity: "critical" },
  security: { title: "No DMARC record found", severity: "high" },
  "ai-visibility": { title: "Only 18% of the content is in the initial HTML", severity: "critical" },
  "best-practices": { title: "Browser errors were logged to the console", severity: "high" },
};

/**
 * ModuleShowcase: one module's report as the app shows it, the score gauge
 * beside the module's measurements, with the page's sample finding floating
 * over the card's edge. The gauge lights and counts up, the measurements
 * arrive one by one with the ones that need work flagged last, then the
 * finding drops in.
 *
 * The report is drawn at its own size (452 × 322) and scaled to the 416 × 296
 * surface, so its type and spacing keep the source's proportions.
 */
function ModuleShowcase({ slug }: { slug: keyof typeof MODULE_ICONS }) {
  const Icon = MODULE_ICONS[slug];
  const { module, example } = EXAMPLES[slug];
  const finding = FINDINGS[slug];

  return (
    <div className={cn("ws absolute inset-0", googleSans.variable)}>
      {/* ReplicaCard: bg-white p-0 ring-1 ring-black/[0.06] */}
      <div className="rp-fill bg-white ring-1 ring-black/[0.06]">
        <div className="flex h-[322px] w-[452px] origin-top-left scale-[0.92] flex-col">
          <div className="flex items-center gap-2.5 px-4 py-3.5">
            <SiteMark />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[var(--mk-ink)]">example.com</p>
              <p className="flex items-center gap-1.5 truncate text-xs text-[var(--mk-muted)]">
                <Icon className="size-3.5" />
                {module}
              </p>
            </div>
            <span className="text-xs text-[var(--mk-faint)]">Scanned today</span>
          </div>

          <div className="flex min-h-0 flex-1 flex-row border-t border-[var(--mk-line)]">
            <div className="flex w-48 shrink-0 flex-col items-center justify-center border-r border-[var(--mk-line)] p-5">
              <ScoreGauge score={example.score} size="lg" at={0.2} />
              <p className="mt-2 text-xs text-[var(--mk-muted)]">{example.scoreLabel}</p>
            </div>
            <dl className="flex min-w-0 flex-1 flex-col justify-center divide-y divide-[var(--mk-line)] px-4 py-1">
              {example.rows.map((row, i) => (
                <div
                  key={row.label}
                  className="rp-in flex items-center justify-between gap-4 py-2.5"
                  style={d(0.5 + i * 0.16)}
                >
                  <dt className="min-w-0 truncate text-[13px] text-[var(--mk-muted)]">{row.label}</dt>
                  <dd className="flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-[var(--mk-ink)] tabular-nums">
                    <StatusSquare
                      status={row.status}
                      className={row.status === "good" ? undefined : "rp-pop"}
                      style={row.status === "good" ? undefined : d(1.7 + i * 0.12)}
                    />
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* The sample finding, over the colour card's top right corner */}
      <div
        className="rp-slide absolute top-[-20px] right-[-24px] z-10 w-[236px]"
        style={d(2.5, { "--from-x": "0px", "--from-y": "-12px" })}
      >
        <Floater>
          <div className="flex items-center justify-between gap-2">
            <FloaterLabel>Finding</FloaterLabel>
            <SeverityMark severity={finding.severity} />
          </div>
          <p className="mt-2 text-[13px] leading-snug font-medium text-[var(--mk-ink)]">{finding.title}</p>
        </Floater>
      </div>
    </div>
  );
}

const Performance = () => <ModuleShowcase slug="performance" />;
const Seo = () => <ModuleShowcase slug="seo" />;
const Accessibility = () => <ModuleShowcase slug="accessibility" />;
const Security = () => <ModuleShowcase slug="security" />;
const AiVisibility = () => <ModuleShowcase slug="ai-visibility" />;
const BestPractices = () => <ModuleShowcase slug="best-practices" />;

export const webscoreReplicas: ComponentType[] = [
  Performance,
  Seo,
  Accessibility,
  Security,
  AiVisibility,
  BestPractices,
];
