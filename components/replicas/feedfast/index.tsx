import { ShieldCheck, Sparkles, X } from "lucide-react";
import { d } from "../frames";
import { McpTranscript } from "./mcp-transcript";
import {
  BarStrip,
  Chip,
  Tag,
  VisualCard,
  Votes,
  cn,
  strip,
} from "./ui";

/*
 * FeedFast, one replica per feature in the order of `features` in the copy.
 *
 * Each is FeedFast's own illustration for that feature, copied from its
 * codebase (backfeed/src/components/marketing/*-illustrations.tsx and
 * feature-previews.tsx) with the markup and classes unchanged, and drawn
 * inside `.ff` so it gets FeedFast's palette, radii and faces. The only
 * additions are the rp-* motion classes, and `sm:` variants fixed to their
 * desktop form, since a replica's stage has one size at every viewport.
 */

/** A replica's root: the FeedFast scope, filling the stage. */
function Scene({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("ff absolute inset-0", className)}>{children}</div>;
}

/**
 * The concentric surface: the .rp-fill box (416 × 296 at 32px in, 32px
 * corners), with its content laid out at 1/k of that and scaled by k, so
 * FeedFast's real type sizes fit unchanged. Floating cards are siblings of
 * this, placed in stage coordinates across the surface's edge.
 */
function Fit({
  k = 1,
  className,
  children,
}: {
  k?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-[32px]">
      <div
        className={cn("origin-top-left overflow-hidden", className)}
        style={{ width: 416 / k, height: 296 / k, borderRadius: 32 / k, scale: String(k) }}
      >
        {children}
      </div>
    </div>
  );
}

/** A floating card: breaks out past the colour card, with the shared lifted shadow. */
const FLOAT = "rp-lift";

const CATEGORIES = [
  { name: "Feature request", color: "#6366F1", count: 5 },
  { name: "Bug", color: "#EF4444", count: 3 },
  { name: "Improvement", color: "#10B981", count: 3 },
];

const DOWN_TEXT = "text-[color-mix(in_oklab,var(--down),black_15%)]";

/** 1 · Feedback board: CategoriesVisual, with a vote arriving. */
function Board() {
  return (
    <Scene>
      <Fit k={0.85}>
      <VisualCard aria-hidden className="flex h-full flex-col justify-center rounded-none p-7">
        <div className="flex flex-wrap gap-1.5">
          <Chip active className="rp-pop" style={d(0)}>
            All <span className="font-mono text-[10px] opacity-60">11</span>
          </Chip>
          {CATEGORIES.map((category, i) => (
            <Chip key={category.name} className="rp-pop" style={d(0.12 * (i + 1))}>
              <span className="size-2 rounded-full" style={{ background: category.color }} />
              {category.name}
              <span className="font-mono text-[10px] opacity-60">{category.count}</span>
            </Chip>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            { title: "Slack integration for alerts", category: CATEGORIES[0]!, votes: 48 },
            { title: "Login link expires too fast", category: CATEGORIES[1]!, votes: 27 },
            { title: "Faster CSV exports", category: CATEGORIES[2]!, votes: 19 },
          ].map((post, i) => (
            <div
              key={post.title}
              className="rp-in flex items-center gap-3 rounded-xl bg-muted/50 p-2.5"
              style={d(0.6 + i * 0.25)}
            >
              <Votes
                count={post.votes}
                className="bg-background"
                countClassName={i === 0 ? "rp-count" : undefined}
                countStyle={i === 0 ? d(1.4, { "--to": post.votes }) : undefined}
              />
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">{post.title}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: post.category.color }}
                  />
                  {post.category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </VisualCard>
      </Fit>
      {/* A guest's idea arriving, no account: the board's own post row, lifted. */}
      <div
        className={cn("rp-slide absolute right-[-24px] bottom-[20px] flex w-[236px] items-center gap-2.5 rounded-xl bg-background p-2.5", FLOAT)}
        style={d(2.4, { "--from-x": "0px", "--from-y": "12px" })}
      >
        <Votes count={1} className="w-9" />
        <div className="min-w-0">
          <p className="truncate text-[12px] font-medium">CSV export for reports</p>
          <p className="mt-0.5 text-[10.5px] text-muted-foreground">Guest · just now · no account</p>
        </div>
      </div>
    </Scene>
  );
}

/** 2 · Changelog: EditorVisual, markdown typing in on the left. */
function Editor() {
  const md = [
    { t: "# Dark mode is here", c: "text-foreground" },
    { t: " " },
    { t: "Switch it on in **Settings**," },
    { t: "or let it follow your system." },
    { t: " " },
    { t: "- Charts adapt too" },
    { t: "- Exports stay light" },
  ];
  return (
    <Scene>
      <Fit k={0.85}>
      <div aria-hidden className="grid h-full grid-cols-2 bg-background">
        <div className="border-r border-border p-5">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-muted px-2 py-1 font-mono text-[10px]">3.2.0</span>
            <div className="flex gap-1">
              <Tag tag="New" />
              <Tag tag="Improved" className="bg-muted text-muted-foreground opacity-60" />
              <Tag tag="Fixed" className="bg-muted text-muted-foreground opacity-60" />
            </div>
          </div>
          <div className="mt-3 space-y-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {md.map((line, i) => (
              <p
                key={i}
                className={cn("rp-type whitespace-pre", line.c)}
                style={d(0.15 + i * 0.32, { "--steps": 18 })}
              >
                {line.t}
              </p>
            ))}
          </div>
        </div>
        <div className="p-5">
          <p className="font-mono text-[10px] text-muted-foreground">Today · 3.2.0</p>
          <p className="rp-in mt-1.5 text-[15px] leading-tight font-semibold tracking-tight" style={d(0.4)}>
            Dark mode is here
          </p>
          <span className="rp-pop mt-2 inline-block" style={d(0.6)}>
            <Tag tag="New" />
          </span>
          <p className="rp-in mt-3 text-[11px] leading-relaxed text-muted-foreground" style={d(1.2)}>
            Switch it on in <strong className="text-foreground">Settings</strong>, or let it follow
            your system.
          </p>
          <ul className="mt-2 space-y-0.5 pl-4 text-[11px] text-muted-foreground">
            <li className="rp-in list-disc" style={d(2.0)}>Charts adapt too</li>
            <li className="rp-in list-disc" style={d(2.3)}>Exports stay light</li>
          </ul>
        </div>
      </div>
      </Fit>
    </Scene>
  );
}

/** 3 · Uptime: ConfirmVisual, the check and two retries, then the incident. */
function Confirm() {
  const attempts = [
    { at: "14:32:00", note: "Timeout after 10s" },
    { at: "14:32:05", note: "Timeout after 10s" },
    { at: "14:32:20", note: "Timeout after 10s" },
  ];
  return (
    <Scene>
      <Fit k={0.85}>
      <VisualCard aria-hidden className="flex h-full flex-col justify-center rounded-none p-7">
        <p className="font-mono text-[11px] text-muted-foreground">api.yourapp.com · GET /health</p>
        <ol className="mt-3 space-y-1.5">
          {attempts.map((attempt, index) => (
            <li
              key={attempt.at}
              className="rp-in flex items-center gap-3 rounded-xl bg-muted/50 px-3 py-2 text-[12px]"
              style={d(0.3 + index * 0.7)}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--down)]/12">
                <X className={cn("size-3", DOWN_TEXT)} />
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{attempt.at}</span>
              <span className="min-w-0 flex-1 truncate">{attempt.note}</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {index === 0 ? "check" : `retry ${index}`}
              </span>
            </li>
          ))}
        </ol>
        <p
          className={cn(
            "rp-pop mt-3 flex items-center gap-2 rounded-xl bg-[var(--down)]/8 px-3 py-2 text-[12px] font-medium",
            DOWN_TEXT,
          )}
          style={d(2.5)}
        >
          <span className="size-2 rounded-full bg-[var(--down)]" />
          Confirmed: incident opened, you&rsquo;re emailed
        </p>
      </VisualCard>
      </Fit>
    </Scene>
  );
}

/** 4 · Status page: StatusPageVisual, ninety days per monitor. */
function StatusPage() {
  const monitors = [
    { name: "API", pct: "99.94%", days: strip({ 28: "down", 61: "degraded" }, 90) },
    { name: "Dashboard", pct: "100%", days: strip({}, 90) },
    { name: "Webhooks", pct: "99.99%", days: strip({ 76: "maintenance", 77: "maintenance" }, 90) },
  ];
  return (
    <Scene>
      <Fit k={0.8}>
      <div aria-hidden className="flex h-full flex-col justify-center bg-background p-7">
        <p className="flex items-center gap-2.5 rounded-xl bg-[var(--up)]/10 px-4 py-3 text-[14px] font-medium">
          <span className="size-2.5 animate-[pulse-dot_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-[var(--up)]" />
          All systems operational
        </p>
        <ul className="mt-5 space-y-5">
          {monitors.map((monitor) => (
            <li key={monitor.name}>
              <div className="flex items-center justify-between text-[13px]">
                <span className="flex items-center gap-2 font-medium">
                  <span className="size-1.5 rounded-full bg-[var(--up)]" />
                  {monitor.name}
                </span>
                <span className="font-mono text-[12px] text-muted-foreground">{monitor.pct}</span>
              </div>
              <BarStrip days={monitor.days} size="md" className="mt-2" />
            </li>
          ))}
        </ul>
      </div>
      </Fit>
    </Scene>
  );
}

/** feature-previews.tsx: the mono label naming a widget. */
function WidgetTag({
  children,
  className,
  style,
}: {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={style}
      className={cn(
        "absolute z-10 inline-flex items-center gap-1 rounded-full bg-foreground px-1.5 py-[3px] font-mono text-[9px] leading-none text-background shadow-sm",
        className,
      )}
    >
      <span className="size-1 rounded-full bg-[var(--brand)] [filter:brightness(1.6)]" />
      {children}
    </span>
  );
}

/** feature-previews.tsx: one monitor's last thirty days. */
function Strip({ bad, warn }: { bad?: number; warn?: number }) {
  return (
    <span className="flex h-4 gap-[1.5px]">
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "rp-grow-y flex-1 rounded-[1px]",
            i === bad ? "bg-[var(--down)]" : i === warn ? "bg-[var(--degraded)]" : "bg-[var(--up)]",
          )}
          style={d(1.2 + i * 0.015)}
        />
      ))}
    </span>
  );
}

/** 5 · Widgets: WidgetPreview, the host site with every widget on it. */
function Widgets() {
  return (
    <Scene>
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none">
        <Fit k={0.85} className="bg-background">
          <div className="flex items-center gap-2.5 border-b border-border px-4 pt-6 pb-3">
            <span className="size-4 rounded-[5px] bg-foreground" />
            <span className="h-1.5 w-8 rounded-full bg-muted" />
            <span className="h-1.5 w-7 rounded-full bg-muted" />
            <span className="h-1.5 w-9 rounded-full bg-muted" />
            <span className="relative ml-auto">
              <WidgetTag className="rp-pop -top-5 right-0" style={d(0.9)}>feedback</WidgetTag>
              <span className="rp-pop inline-flex h-6 items-center rounded-full bg-[var(--brand)] px-2.5 text-[10px] font-medium text-[var(--brand-foreground)]" style={d(0.8)}>
                Send feedback
              </span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 p-3">
            <div className="relative min-w-0 rounded-[14px] bg-muted p-2.5">
              <WidgetTag className="rp-pop -top-2 left-2" style={d(1.1)}>changelog</WidgetTag>
              <p className="mt-1 flex items-center justify-between text-[10.5px] font-medium">
                What&rsquo;s new
                <span className="text-[8.5px] font-normal text-muted-foreground">All ↗</span>
              </p>
              {[
                { meta: "Today · 3.2.0", title: "Dark mode is here", tag: "New" },
                { meta: "Oct 28 · 3.1.4", title: "Faster CSV exports", tag: "Improved" },
              ].map((entry, i) => (
                <div key={entry.title} className="rp-in mt-1.5 rounded-[9px] bg-background px-2 py-1.5" style={d(1.3 + i * 0.2)}>
                  <p className="font-mono text-[8px] text-muted-foreground">{entry.meta}</p>
                  <p className="truncate text-[10px] font-medium">{entry.title}</p>
                  <span className="mt-1 inline-block rounded-full bg-muted px-1.5 text-[8px] text-muted-foreground">
                    {entry.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative min-w-0 rounded-[14px] bg-muted p-2.5">
              <WidgetTag className="rp-pop -top-2 left-2" style={d(1.2)}>uptime</WidgetTag>
              <p className="mt-1 flex items-center gap-1.5 text-[10.5px] font-medium">
                <span className="size-1.5 shrink-0 animate-[pulse-dot_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-[var(--up)]" />
                <span className="truncate">All systems normal</span>
              </p>
              {[
                { name: "App", pct: "100%", strip: {} },
                { name: "API", pct: "99.92%", strip: { bad: 21 } },
                { name: "Webhooks", pct: "99.98%", strip: { warn: 9 } },
              ].map((monitor) => (
                <div key={monitor.name} className="mt-2">
                  <p className="mb-1 flex justify-between text-[8.5px]">
                    <span className="truncate">{monitor.name}</span>
                    <span className="font-mono text-muted-foreground">{monitor.pct}</span>
                  </p>
                  <Strip {...monitor.strip} />
                </div>
              ))}
            </div>
          </div>
        </Fit>

        <div className="rp-slide absolute right-[-24px] bottom-[18px] z-10" style={d(2.0, { "--from-x": "0px", "--from-y": "14px" })}>
          <WidgetTag className="-top-3 right-3">badge</WidgetTag>
          <div className="flex items-center gap-2 rp-lift rounded-full bg-background py-1.5 pr-3.5 pl-1.5">
            <span className="relative flex size-7 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--brand-foreground)]">
              <span className="absolute inset-0 rounded-full ring-4 ring-[var(--brand)]/20" />
              <Sparkles className="size-3.5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[8.5px] font-semibold text-[var(--brand)]">
                New <span className="font-mono font-medium text-muted-foreground">3.2.0</span>
              </span>
              <span className="block text-[10.5px] font-medium">Dark mode is here</span>
            </span>
          </div>
        </div>

        <div className="rp-type rp-lift absolute bottom-[18px] left-[-24px] z-20 rounded-[12px] bg-[#161616] px-3 py-2 font-mono text-[10px] leading-[1.6]" style={d(0, { "--steps": 30 })}>
          <span className="text-white/45">&lt;</span>
          <span className="text-[#ff8f8f]">script</span> <span className="text-[#8ab4f8]">src</span>
          <span className="text-white/45">=</span>
          <span className="text-[#fdd663]">&quot;…/embed.js&quot;</span>{" "}
          <span className="text-[#8ab4f8]">data-project</span>
          <span className="text-white/45">=</span>
          <span className="text-[#fdd663]">&quot;acme&quot;</span>
          <span className="text-white/45">&gt;</span>
        </div>
      </div>
    </Scene>
  );
}

/** 6 · REST API and MCP: McpTranscript, FeedFast's own animated hero. The
 *  window is the surface; drawn at 1.25× the surface and scaled down so the
 *  whole transcript fits, with the published card landing below the last line. */
function Mcp() {
  return (
    <Scene>
      <div className="absolute inset-[32px]">
        <div className="h-[370px] w-[520px] origin-top-left scale-[0.8]">
          <McpTranscript fill />
        </div>
      </div>
    </Scene>
  );
}

/** 7 · Spam control and identity: IdentityVisual. The signed embed tag is
 *  the surface; the post it produces floats across its lower edge, verified. */
function Identity() {
  return (
    <Scene>
      <Fit className="bg-[#161616]">
        <div
          aria-hidden
          className="px-7 pt-8 font-mono text-[12.5px] leading-[1.8] whitespace-pre text-white/80"
        >
          <p className="text-white/35">{"// sign each user on your server"}</p>
          <p className="rp-type mt-2" style={d(0.2, { "--steps": 26 })}>
            <span className="text-white/45">&lt;script src=&quot;…/embed.js&quot;</span>
          </p>
          <p className="rp-type" style={d(0.7, { "--steps": 26 })}>
            {"  "}
            <span className="text-[#8ab4f8]">data-user-email</span>=
            <span className="text-[#fdd663]">{"{user.email}"}</span>
          </p>
          <p className="rp-type" style={d(1.2, { "--steps": 26 })}>
            {"  "}
            <span className="text-[#8ab4f8]">data-user-hash</span>=
            <span className="text-[#fdd663]">{"{user.hash}"}</span>
            <span className="text-white/45">&gt;</span>
          </p>
        </div>
      </Fit>
      <div
        className="rp-slide absolute right-[-24px] bottom-[20px] left-[96px]"
        style={d(1.8, { "--from-x": "0px", "--from-y": "14px" })}
      >
        <VisualCard className={cn("flex items-center gap-3 rounded-[16px] p-4", FLOAT)}>
          <Votes count={1} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium">Export dashboards as PDF</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
              Ana Popescu
              <span
                className="rp-pop inline-flex items-center gap-0.5 rounded-full bg-[var(--up)]/12 px-1.5 py-px text-[10px] font-medium text-[color-mix(in_oklab,var(--up),black_32%)]"
                style={d(2.5)}
              >
                <ShieldCheck className="size-2.5" />
                Verified
              </span>
            </p>
          </div>
        </VisualCard>
      </div>
    </Scene>
  );
}

export const feedfastReplicas = [Board, Editor, Confirm, StatusPage, Widgets, Mcp, Identity];
