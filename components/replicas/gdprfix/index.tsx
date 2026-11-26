import type { ReactNode } from "react";
import { d } from "../frames";
import { McpTerminal } from "./mcp-terminal";
import {
  CancelCircleIcon,
  CATEGORY_COLORS,
  CheckmarkCircle02Icon,
  CopyBtn,
  CountPill,
  HugeiconsIcon,
  LockIcon,
  Panel,
  REQUEST_CATEGORIES,
  StageChip,
  cn,
  sev,
} from "./ui";
import "./scope.css";

/*
 * GDPR Fix, one replica per feature in the order of `features` in the copy.
 *
 * Each is a part of GDPR Fix's own report, copied from its codebase with the
 * markup and classes unchanged: the landing page's feature close-ups
 * (components/marketing/feature-previews.tsx), the hero report
 * (hero-report.tsx), the MCP session (mcp-terminal.tsx) and the report page
 * itself (app/(protected)/scan/[id]/page.tsx, markdown-view.tsx). Data is
 * GDPR Fix's own example data (EXAMPLE_REPORT in home.tsx, the close-ups'
 * rows). Drawn inside `.gf` so it gets GDPR Fix's palette, radii and type
 * scale. The only additions are the rp-* motion classes, `sm:`/`md:`
 * variants fixed to their desktop form, and `dark:` variants dropped.
 *
 * Every scene's main surface is the report's own muted panel, set
 * concentric with the card by `.rp-fill`.
 */

/** A replica's root: the GDPR Fix scope, filling the stage. */
function Scene({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("gf absolute inset-0", className)}>{children}</div>;
}

/**
 * The main surface (`.rp-fill`, 416 × 296), its content laid out at
 * 1/k that size and scaled by k, so a panel keeps its real proportions.
 */
function Fit({ k = 1, className, children }: { k?: number; className?: string; children: ReactNode }) {
  return (
    <div className="rp-fill">
      <div
        className={cn("origin-top-left overflow-hidden", className)}
        style={{ width: 416 / k, height: 296 / k, scale: String(k) }}
      >
        {children}
      </div>
    </div>
  );
}

/** A floating card: breaks out past the colour card, with the shared lifted shadow. */
const FLOAT = "rp-lift";

// ─── Landing close-up fragments (feature-previews.tsx) ───────────────────────

function PanelHead({ title, count }: { title: string; count: ReactNode }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <p className="text-base font-medium tracking-[-0.01em] text-foreground">{title}</p>
      <span className="shrink-0 rounded-full bg-background px-2.5 py-0.5 text-xs text-muted-foreground tabular-nums">{count}</span>
    </div>
  );
}

/** The close-ups' CheckList, each check arriving in turn. */
function CheckList({ checks, at = 0.3, step = 0.4 }: { checks: { label: string; pass: boolean }[]; at?: number; step?: number }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-2xl bg-background">
      {checks.map((c, i) => (
        <li key={c.label} className="flex items-center gap-3 px-4 py-3 text-sm">
          <span className="rp-pop flex shrink-0" style={d(at + i * step)}>
            <HugeiconsIcon
              icon={c.pass ? CheckmarkCircle02Icon : CancelCircleIcon}
              size={17}
              className={cn("shrink-0", c.pass ? "text-green-600" : "text-red-600")}
            />
          </span>
          <span className="text-foreground">{c.label}</span>
          <span className={cn("rp-in ml-auto text-xs", c.pass ? "text-muted-foreground" : "text-red-600")} style={d(at + 0.15 + i * step)}>
            {c.pass ? "Pass" : "Fail"}
          </span>
        </li>
      ))}
    </ul>
  );
}

function StatTile({ value, label, tone, delay }: { value: number; label: string; tone?: "bad" | "warn"; delay: number }) {
  const color = value > 0 && tone === "bad" ? "text-red-600" : value > 0 && tone === "warn" ? "text-amber-600" : "text-foreground";
  return (
    <div className="rp-in rounded-3xl bg-background p-5" style={d(delay)}>
      <div className={cn("rp-count text-4xl font-normal leading-none tracking-[-0.05em] tabular-nums", color)} style={d(delay + 0.1, { "--to": value })} />
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

// ─── 1 · Cookie detection ────────────────────────────────────────────────────

const COOKIES = [
  { name: "_ga", service: "Google Analytics", category: "analytics", b: true, r: true, a: true },
  { name: "_fbp", service: "Meta Pixel", category: "marketing", b: true, r: false, a: true },
  { name: "cf_clearance", service: "Cloudflare", category: "necessary", b: true, r: true, a: true },
  { name: "_gcl_au", service: "Google Ads", category: "marketing", b: false, r: false, a: true },
  { name: "_hjSession", service: "Hotjar", category: "analytics", b: false, r: false, a: true },
];

/** CookiesCloseup's table in the report's "All cookies" panel; the cookies
 *  that fire before consent light up red. */
function Cookies() {
  return (
    <Scene>
      <Fit k={0.84}>
      <Panel
        className="h-full rounded-none p-5"
        title="All cookies"
        description={<>Stages: <span className="text-foreground">B</span> before consent · <span className="text-foreground">R</span> after reject · <span className="text-foreground">A</span> after accept</>}
        aside={<CountPill>17</CountPill>}
      >
        <div className="[mask-image:linear-gradient(to_bottom,black_82%,transparent)]">
          <div className="overflow-hidden rounded-2xl bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="px-4 py-3 font-normal">Name</th>
                  <th className="px-4 py-3 font-normal">Category</th>
                  <th className="px-4 py-3 font-normal">Stages</th>
                </tr>
              </thead>
              <tbody>
                {COOKIES.map((c, i) => (
                  <tr key={c.name} className="rp-in border-b border-border last:border-0" style={d(0.2 + i * 0.22)}>
                    <td className="px-4 py-2.5">
                      <span className="block font-mono text-xs text-foreground">{c.name}</span>
                      <span className="block text-[11px] text-muted-foreground">{c.service}</span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center gap-1.5 text-xs capitalize text-foreground">
                        <span className={cn("h-2 w-2 rounded-full", CATEGORY_COLORS[c.category])} />
                        {c.category}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-1">
                        {(
                          [
                            ["B", c.b, c.b && c.category !== "necessary"],
                            ["R", c.r, c.r && c.category !== "necessary"],
                            ["A", c.a, false],
                          ] as const
                        ).map(([label, on, danger], j) => (
                          <StageChip
                            key={label}
                            on={on}
                            danger={danger}
                            className={on ? "rp-pop" : undefined}
                            style={on ? d(1.5 + j * 0.45 + i * 0.08) : undefined}
                          >
                            {label}
                          </StageChip>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Panel>
      </Fit>
    </Scene>
  );
}

// ─── 2 · Consent banner audit ────────────────────────────────────────────────

/** ConsentCloseup: the banner's four checks, one after another. */
function Consent() {
  return (
    <Scene>
      <div className="rp-fill flex flex-col justify-center bg-muted px-7">
        <PanelHead title="Consent banner" count={<><span className="rp-count" style={d(1.6, { "--to": 2 })} />/4</>} />
        <CheckList
          at={0.3}
          step={0.45}
          checks={[
            { label: "Banner present", pass: true },
            { label: "Blocks cookies before consent", pass: false },
            { label: "Reject option on first layer", pass: true },
            { label: "Reject as easy as accept", pass: false },
          ]}
        />
      </div>
    </Scene>
  );
}

// ─── 3 · Cookie policy checklist ─────────────────────────────────────────────

/** The report's Policy checklist panel: all seven checks (labels from
 *  POLICY_CHECK_REQUIREMENTS), as a scan with no policy page shows them. */
function Policy() {
  const checks = [
    { label: "Lists all cookies", pass: false },
    { label: "Retention periods specified", pass: true },
    { label: "Third-party services disclosed", pass: true },
    { label: "DPO / contact information", pass: false },
    { label: "User rights explained", pass: false },
    { label: "Withdrawal instructions", pass: false },
    { label: "Last updated date", pass: true },
  ];
  return (
    <Scene>
      <Fit k={0.85}>
      <Panel
        className="flex h-full flex-col justify-center rounded-none px-5"
        title="Policy checklist"
        description="No cookie or privacy policy page was found."
        aside={
          <CountPill>
            <span className="rp-count" style={d(2.2, { "--to": 3 })} />/7
          </CountPill>
        }
      >
        <ul className="divide-y divide-border overflow-hidden rounded-md bg-background">
          {checks.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2.5 px-3 py-2 text-[13px]">
              <span className="rp-pop flex shrink-0" style={d(0.2 + i * 0.28)}>
                <HugeiconsIcon
                  icon={c.pass ? CheckmarkCircle02Icon : CancelCircleIcon}
                  size={15}
                  className={cn("shrink-0", c.pass ? "text-green-600" : "text-red-600")}
                />
              </span>
              <span className="text-foreground">{c.label}</span>
              <span className={cn("rp-in ml-auto text-[11px]", c.pass ? "text-muted-foreground" : "text-red-600")} style={d(0.3 + i * 0.28)}>
                {c.pass ? "Pass" : "Fail"}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
      </Fit>
    </Scene>
  );
}

// ─── 4 · Third-party scripts ─────────────────────────────────────────────────

/** ScriptsCloseup's tiles, under the report's third-party request legend. */
function Scripts() {
  const requests = [
    { key: "advertising", n: 4 },
    { key: "analytics", n: 3 },
    { key: "embed", n: 2 },
  ];
  return (
    <Scene>
      <div className="rp-fill flex flex-col justify-center bg-muted px-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {requests.map(({ key, n }, i) => {
            const c = REQUEST_CATEGORIES[key];
            return (
              <span key={key} className="rp-pop inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs text-foreground" style={d(0.1 + i * 0.15)}>
                <span className={cn("h-2 w-2 rounded-full", c.dot)} />
                {c.label} <span className="tabular-nums text-muted-foreground">{n}</span>
              </span>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <StatTile value={9} label="Third-party services" delay={0.5} />
          <StatTile value={4} label="Set before consent" tone="bad" delay={0.7} />
          <StatTile value={3} label="Not in your policy" tone="warn" delay={0.9} />
          <StatTile value={17} label="Cookies found" delay={1.1} />
        </div>
      </div>
    </Scene>
  );
}

// ─── 5 · Findings mapped to the law ──────────────────────────────────────────

const FINDINGS = [
  { severity: "critical", title: "Marketing cookies set before consent", service: "_fbp, _gcl_au, _ga", law: "ePrivacy Art. 5(3)" },
  { severity: "critical", title: "No “Reject all” button on the first layer", service: null, law: "GDPR Art. 7" },
  { severity: "warning", title: "Hotjar receives visitor data but isn't disclosed", service: "Hotjar", law: "GDPR Art. 28" },
];

/** The report's "What we found" panel: each finding with the law it breaks
 *  (LockedIssueCard, named; laws from ISSUE_LAW in lib/scan-view.ts). The
 *  law chips arrive after their findings. */
function Law() {
  return (
    <Scene>
      <Fit k={0.8}>
        <Panel
          className="flex h-full flex-col justify-center rounded-none"
          title="What we found"
          description="Each finding and the law it breaks. Why it fails and how to fix it are in the full report."
          aside={<CountPill>9</CountPill>}
        >
          <div className="space-y-2">
            {FINDINGS.map((issue, i) => {
              const s = sev(issue.severity);
              return (
                <div key={issue.title} className="rp-in rounded-md bg-background" style={d(0.2 + i * 0.3)}>
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <span className={cn("h-2 w-2 shrink-0 rounded-full", s.dot)} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-foreground">{issue.title}</span>
                      {issue.service && <span className="mt-0.5 block truncate font-mono text-xs text-muted-foreground">{issue.service}</span>}
                    </span>
                    <span className="rp-pop shrink-0 rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground" style={d(1.4 + i * 0.3)}>
                      {issue.law}
                    </span>
                    <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium", s.pill)}>{s.label}</span>
                    <HugeiconsIcon icon={LockIcon} size={15} className="shrink-0 text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </Fit>
    </Scene>
  );
}

// ─── 6 · A fix for every issue ───────────────────────────────────────────────

/** The hero report's issue view: the finding and its law on the surface,
 *  and a compact "How to fix" card (its code fix and the report's Copy AI
 *  prompt button, which gets pressed) lifted over the card's lower edge. */
function Fix() {
  return (
    <Scene>
      <section className="rp-fill flex min-w-0 flex-col bg-muted p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-medium", sev("critical").pill)}>{sev("critical").label}</span>
          <span className="rounded-full bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">ePrivacy Art. 5(3)</span>
        </div>
        <h4 className="mt-3 text-base font-medium leading-snug tracking-[-0.01em] text-foreground">Marketing cookies set before consent</h4>
        <p className="mt-1 truncate font-mono text-xs text-muted-foreground">_fbp, _gcl_au, _ga</p>
        <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          Meta Pixel and Google Ads set tracking cookies the moment the page loads, before the visitor has made any choice in the banner.
        </p>
      </section>

      <div
        className="rp-slide absolute bottom-[-18px] left-[40px] z-10 w-[268px]"
        style={d(0.3, { "--from-x": "0px", "--from-y": "18px" })}
      >
        <div className={cn("overflow-hidden rounded-2xl bg-background p-4", FLOAT)}>
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-foreground">How to fix</span>
            <CopyBtn label="Copy AI prompt" style={d(2.4)} />
          </div>
          <pre className="rp-in overflow-x-auto rounded-xl bg-zinc-950 p-3 font-mono text-[11px] leading-relaxed text-zinc-100" style={d(0.9)}>
            <code className="hljs hl-dark">
              <span className="hljs-title function_">gtag</span>(<span className="hljs-string">&#x27;consent&#x27;</span>, <span className="hljs-string">&#x27;default&#x27;</span>, {"{"}
              {"\n  "}<span className="hljs-attr">ad_storage</span>: <span className="hljs-string">&#x27;denied&#x27;</span>,
              {"\n  "}<span className="hljs-attr">analytics_storage</span>: <span className="hljs-string">&#x27;denied&#x27;</span>,
              {"\n"}{"});"}
            </code>
          </pre>
        </div>
      </div>
    </Scene>
  );
}

// ─── 7 · AI-generated cookie policy ──────────────────────────────────────────

/** The report's "Your new cookie policy" panel: MarkdownView in Preview,
 *  the policy being written in, then "Copy markdown". */
function GeneratedPolicy() {
  const rows = [
    { name: "cf_clearance", provider: "Cloudflare (third-party)", category: "Necessary", duration: "1 year" },
    { name: "_ga", provider: "Google Analytics (third-party)", category: "Analytics", duration: "2 years" },
    { name: "_fbp", provider: "Meta Platforms (third-party)", category: "Marketing", duration: "3 months" },
  ];
  return (
    <Scene>
      <Fit k={0.86}>
      <Panel
        className="h-full rounded-none p-5 pb-0"
        title="Your new cookie policy"
        description="Written for this site from the scan. Review it, then publish it."
      >
        <div className="overflow-hidden rounded-t-md bg-background">
          <div className="flex items-center justify-between gap-3 border-b border-border py-2 pl-2 pr-2">
            <div className="flex gap-0.5 rounded-full bg-muted p-0.5">
              <span className="rounded-full bg-background px-3 py-1 text-xs font-medium capitalize text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.08)]">preview</span>
              <span className="rounded-full px-3 py-1 text-xs font-medium capitalize text-muted-foreground">source</span>
            </div>
            <div className="flex items-center gap-2">
              <CopyBtn label="Copy markdown" style={d(3.3)} />
            </div>
          </div>
          <div className="px-4 py-3 text-[13px] text-muted-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            <h1 className="rp-in mb-2 mt-5 text-base font-medium tracking-[-0.01em] text-foreground" style={d(0.2)}>Cookie Policy</h1>
            <p className="rp-in my-2 leading-relaxed" style={d(0.45)}>
              <strong className="font-medium text-foreground">Last updated:</strong> June 2, 2026
            </p>
            <h2 className="rp-in mb-1.5 mt-4 text-sm font-semibold text-foreground" style={d(0.7)}>Cookies we use</h2>
            <div className="rp-in my-3 overflow-x-auto rounded-md ring-1 ring-border" style={d(0.9)}>
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    {["Cookie name", "Provider", "Category", "Duration"].map((h) => (
                      <th key={h} className="bg-muted px-3 py-2 text-left font-medium text-foreground">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.name} className="rp-in" style={d(1.2 + i * 0.3)}>
                      <td className="border-t border-border px-3 py-2 align-top">
                        <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">{r.name}</code>
                      </td>
                      <td className="border-t border-border px-3 py-2 align-top">{r.provider}</td>
                      <td className="border-t border-border px-3 py-2 align-top">{r.category}</td>
                      <td className="border-t border-border px-3 py-2 align-top">{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="rp-in mb-1.5 mt-4 text-sm font-semibold text-foreground" style={d(2.2)}>How to withdraw consent</h2>
            <p className="rp-in my-2 leading-relaxed" style={d(2.4)}>
              Click <strong className="font-medium text-foreground">Cookie Settings</strong> in the footer of any page at any time.
            </p>
          </div>
        </div>
      </Panel>
      </Fit>
    </Scene>
  );
}

// ─── 8 · MCP server for AI tools ─────────────────────────────────────────────

/** McpTerminal, GDPR Fix's own animated Claude Code session. */
function Mcp() {
  return (
    <Scene>
      <Fit k={0.635} className="bg-zinc-950">
        <McpTerminal url="https://gdprfix.eu" className="h-full rounded-none shadow-none" />
      </Fit>
    </Scene>
  );
}

export const gdprfixReplicas = [Cookies, Consent, Policy, Scripts, Law, Fix, GeneratedPolicy, Mcp];
