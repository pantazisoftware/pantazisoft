"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "./ui";

/* Copied from FeedFast (backfeed/src/components/marketing/mcp-transcript.tsx);
   only the two imports differ. */

/** lib/client-state.ts */
const noopSubscribe = () => () => {};
function useHydratedValue<T>(getSnapshot: () => T, serverValue: T): T {
  const getServerSnapshot = useCallback(() => serverValue, [serverValue]);
  return useSyncExternalStore(noopSubscribe, getSnapshot, getServerSnapshot);
}

/**
 * The MCP page's hero: one sentence to your agent, played out.
 *
 * The request is typed, each tool call runs in turn, the agent stops to ask
 * before anything goes public, and the published entry slides out of the
 * window as the thing your users actually see. Then it rests and starts over.
 *
 * The server renders the request already typed, so the window is never empty
 * before the script runs, and the first loop picks up from there. Reduced
 * motion skips straight to the finished transcript. Runs only while on screen.
 *
 * Decorative: the copy beside it says the same thing in words.
 */

const PROMPT = "ship the Safari CSV fix and tell the people who asked";

type Line =
  | { kind: "call"; name: string; arg?: string }
  | { kind: "result"; text: React.ReactNode }
  | { kind: "ask" }
  | { kind: "done" };

const LINES: Line[] = [
  { kind: "call", name: "list_feedback", arg: 'search:"csv safari"' },
  {
    kind: "result",
    text: (
      <>
        <span className="text-white/90">CSV export breaks on Safari</span> · 41 votes
      </>
    ),
  },
  { kind: "call", name: "resolve_feedback", arg: 'status:"DONE"' },
  {
    kind: "result",
    text: (
      <>
        reply posted with the <span className="text-white/90">Owner</span> badge
      </>
    ),
  },
  { kind: "call", name: "publish_changelog", arg: 'tags:["Fixed"]' },
  { kind: "ask" },
  { kind: "done" },
];

/** One tick is 50ms; everything below is counted in ticks. */
const TICK = 50;
const TYPE_PER_TICK = 2;
const TYPED = Math.ceil(PROMPT.length / TYPE_PER_TICK);
const LINE_GAP = 16;
/** The approval waits a little longer: that pause is the point. */
const ASK_HOLD = 22;
const lineAt = (i: number) => TYPED + 8 + i * LINE_GAP + (i > 5 ? ASK_HOLD : 0);
const CARD_AT = lineAt(LINES.length - 1) + 10;
const END = CARD_AT + 90;

/** `fill` (replica only): the window fills its parent, and the published card
 *  lands over the window's bottom-right corner instead of below it. */
export function McpTranscript({ className, fill = false }: { className?: string; fill?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  // Starts with the request typed, matching the server render.
  const [running, setTick] = useState(TYPED);
  const reduced = useHydratedValue(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    false,
  );
  const tick = reduced ? END : running;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reduced) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && timer === undefined) {
          timer = window.setInterval(() => setTick((t) => (t >= END ? 0 : t + 1)), TICK);
        } else if (!entry?.isIntersecting && timer !== undefined) {
          window.clearInterval(timer);
          timer = undefined;
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timer !== undefined) window.clearInterval(timer);
    };
  }, [reduced]);

  const typed = PROMPT.slice(0, Math.min(PROMPT.length, tick * TYPE_PER_TICK));
  const typing = tick < TYPED;
  const shown = LINES.filter((_, i) => tick >= lineAt(i)).length;
  // The approval is answered one beat before "Published" lands.
  const approved = tick >= lineAt(6) - 6;
  const card = tick >= CARD_AT;
  // The last loop's state fades out just before it restarts.
  const fading = tick > END - 8;

  return (
    <div ref={ref} aria-hidden className={cn("relative", fill ? "h-full" : "pb-24", className)}>
      <div
        className={cn(
          "overflow-hidden bg-[#161616] text-left font-mono text-[12px] leading-[1.65] text-white sm:text-[13px]",
          fill ? "h-full rounded-[40px]" /* 32 stage px at the replica's 0.8 scale */ : "rounded-[22px] shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_2px_4px_rgb(0_0_0/0.06),0_24px_48px_-16px_rgb(0_0_0/0.35),0_60px_100px_-40px_rgb(0_0_0/0.35)]",
        )}
      >
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="flex gap-1.5">
            {["#f87171", "#fbbf24", "#34d399"].map((c) => (
              <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
            ))}
          </span>
          <span className="mx-auto text-[11px] text-white/45">your agent · feedfast mcp</span>
          <span className="w-[42px]" />
        </div>

        <div
          className={cn(
            "min-h-[300px] px-5 pt-2 pb-6 transition-opacity duration-300 sm:min-h-[316px]",
            fading && "opacity-0",
          )}
        >
          <p className="flex gap-2.5 text-white/80">
            <span className="text-white/35">›</span>
            <span className="italic">
              {typed}
              {typing && (
                <span className="ml-px inline-block h-[1.1em] w-[7px] translate-y-[3px] bg-white/70" />
              )}
            </span>
          </p>

          {LINES.slice(0, shown).map((line, i) => (
            <TranscriptLine
              key={i}
              line={line}
              running={line.kind === "call" && i === shown - 1}
              approved={approved}
            />
          ))}
        </div>
      </div>

      {/* The result, as your users see it: it leaves the window and lands
          on the page. Overlaps only the window's empty bottom padding. */}
      <div
        className={cn(
          "absolute w-[84%] rounded-[20px] bg-background p-4 text-left shadow-[0_0_0_1px_rgb(0_0_0/0.05),0_24px_48px_-20px_rgb(0_0_0/0.35)] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-80",
          // In the replica the card breaks out past the colour card's corner:
          // at the 0.8 scale, -70/-60px here is 24/16 stage px past its edge.
          fill ? "rp-lift right-[-70px] bottom-[-60px] w-80" : "right-4 bottom-0 sm:right-[-24px]",
          card && !fading ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] text-muted-foreground">Just now · 2.4.1</p>
          <span className="rounded-full bg-[#FBBC05]/20 px-2 py-0.5 text-[10px] font-medium text-[#8a6100]">
            Fixed
          </span>
        </div>
        <p className="mt-1.5 text-sm font-medium">CSV exports work in Safari again</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Your changelog · RSS · What&rsquo;s new in your app
        </p>
      </div>
    </div>
  );
}

function TranscriptLine({
  line,
  running,
  approved,
}: {
  line: Line;
  running: boolean;
  approved: boolean;
}) {
  const enter = "animate-[showcase-rise_0.4s_ease-out]";

  if (line.kind === "call") {
    return (
      <p className={cn("mt-3 flex flex-wrap items-center gap-x-2", enter)}>
        <span className={cn("text-[#8ab4f8]", running && "animate-pulse")}>⏵</span>
        <span className="text-white/95">{line.name}</span>
        {line.arg && <span className="text-white/45">{line.arg}</span>}
      </p>
    );
  }

  if (line.kind === "result") {
    return (
      <p className={cn("mt-1 pl-5 text-white/50", enter)}>
        <span className="text-white/30">→ </span>
        {line.text}
      </p>
    );
  }

  if (line.kind === "ask") {
    return (
      <div
        className={cn(
          "mt-3 flex items-center gap-3 rounded-xl bg-[#FBBC05]/10 px-3 py-2 text-white/90",
          enter,
        )}
      >
        <span className="text-[#FBBC05]">?</span>
        <span className="flex-1">Publish to your public changelog?</span>
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-[11px] transition-colors duration-300",
            approved ? "bg-[#FBBC05] text-[#161616]" : "bg-white/10 text-white/70",
          )}
        >
          Yes
        </span>
      </div>
    );
  }

  return (
    <p className={cn("mt-3 flex items-center gap-2.5 text-white/95", enter)}>
      <span className="text-[#34A853]">✓</span>
      Published · 41 voters notified
    </p>
  );
}
