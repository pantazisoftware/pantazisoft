"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "./ui";

/* Copied from GDPR Fix (gdpr/src/components/marketing/mcp-terminal.tsx).
   Differences: the cn import, and a className on the figure so a replica
   can make it its surface. */

// Illustrative Claude Code session for the landing page, played back line by
// line while it is on screen. Tool names and flow match the real MCP server
// (src/mcp/server.ts). Reduced-motion users get the finished session.

type Line =
  | { kind: "cmd" | "user"; text: string }
  | { kind: "tool"; title: string; arg?: string; result: (live: boolean) => ReactNode }
  | { kind: "say"; text: string }
  | { kind: "prompt" };

type Playhead = { step: number; progress: number };

const DOT = "text-[#D97757]";

function buildLines(url: string): Line[] {
  return [
    { kind: "cmd", text: `$ claude mcp add --transport http gdprfix ${url}/api/mcp` },
    { kind: "user", text: "> Fix the GDPR issues on example.com" },
    { kind: "tool", title: "get_report", arg: "example.com", result: () => "Score 41/100 · 3 critical · 2 warnings" },
    { kind: "tool", title: "Edit app/layout.tsx", result: () => "load Google Analytics only after consent" },
    { kind: "tool", title: "Edit components/cookie-banner.tsx", result: () => <>add &ldquo;Reject all&rdquo; to the first layer</> },
    { kind: "say", text: "Deployed? I can re-scan example.com to check — you have 1 free scan left." },
    { kind: "user", text: "> yes" },
    { kind: "tool", title: "start_scan", arg: "example.com", result: () => "Scan queued" },
    {
      kind: "tool",
      title: "get_scan_status",
      arg: "example.com",
      result: (live) => (
        <span className="text-green-400">Score 41 → {live ? <CountUp from={41} to={89} /> : 89} · 0 critical</span>
      ),
    },
    { kind: "prompt" },
  ];
}

/** How long to stay on the current playhead, and where to go next. */
function advance(lines: Line[], { step, progress }: Playhead): [number, Playhead] {
  if (step === -1) return [700, { step: 0, progress: 0 }];
  // Finished: hold, fade out, start over.
  if (step >= lines.length) return progress === 0 ? [5000, { step, progress: 1 }] : [600, { step: -1, progress: 0 }];
  const line = lines[step];
  const nextLine: Playhead = { step: step + 1, progress: 0 };
  switch (line.kind) {
    case "cmd":
    case "user":
      if (progress < line.text.length) return [line.kind === "cmd" ? 14 : 45, { step, progress: progress + 1 }];
      return [450, nextLine];
    case "tool":
      return progress === 0 ? [1000, { step, progress: 1 }] : [450, nextLine];
    case "say":
      return [1100, nextLine];
    case "prompt":
      return [0, nextLine];
  }
}

function CountUp({ from, to, ms = 1000 }: { from: number; to: number; ms?: number }) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / ms);
      setValue(Math.round(from + (to - from) * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, ms]);
  return <span data-tabular>{value}</span>;
}

function Caret() {
  return <span aria-hidden className="ml-0.5 inline-block h-[1.15em] w-[0.5em] translate-y-[0.2em] animate-[caret-blink_1s_steps(1)_infinite] bg-zinc-300" />;
}

export function McpTerminal({ url, className }: { url: string; className?: string }) {
  const lines = useMemo(() => buildLines(url), [url]);
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const [head, setHead] = useState<Playhead>({ step: -1, progress: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([entry]) => {
      if (reduced) {
        if (entry.isIntersecting) setHead({ step: lines.length, progress: 0 });
        return;
      }
      setActive(entry.isIntersecting);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [lines.length]);

  useEffect(() => {
    if (!active) return;
    const [delay, next] = advance(lines, head);
    const t = setTimeout(() => setHead(next), delay);
    return () => clearTimeout(t);
  }, [active, head, lines]);

  const fading = head.step >= lines.length && head.progress === 1;

  return (
    <figure
      ref={ref}
      className={cn("overflow-hidden rounded-3xl bg-zinc-950 font-mono text-[12px] leading-relaxed text-zinc-300 shadow-[0_20px_60px_rgb(0_0_0/0.12)]", className)}
    >
      <figcaption className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-sans text-xs text-zinc-400">Example session</span>
      </figcaption>
      <div className={cn("space-y-2.5 p-5 transition-opacity duration-500", fading && "opacity-0")}>
        {lines.map((line, i) => {
          const hidden = head.step < i;
          const current = head.step === i;
          const row = cn("transition-all duration-300 ease-out", hidden ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100");

          if (line.kind === "cmd" || line.kind === "user") {
            const typed = current ? line.text.slice(0, head.progress) : line.text;
            return (
              <p key={i} className={cn(row, line.kind === "cmd" ? "truncate text-zinc-400" : "text-white")}>
                {typed}
                {current && <Caret />}
              </p>
            );
          }
          if (line.kind === "tool") {
            const running = current && head.progress === 0;
            return (
              <p key={i} className={row}>
                <span className={cn(DOT, running && "animate-pulse")}>⏺</span>{" "}
                {line.arg ? <>gdprfix · {line.title} <span className="text-zinc-400">{line.arg}</span></> : line.title}
                <br />
                <span className={cn("pl-4", running ? "animate-pulse text-zinc-400" : "text-zinc-400")}>
                  {running ? "Running…" : line.result(!hidden)}
                </span>
              </p>
            );
          }
          if (line.kind === "say") {
            return (
              <p key={i} className={row}>
                <span className={DOT}>⏺</span> {line.text}
              </p>
            );
          }
          return (
            <p key={i} className={cn(row, "text-white")}>
              &gt; <Caret />
            </p>
          );
        })}
      </div>
    </figure>
  );
}
