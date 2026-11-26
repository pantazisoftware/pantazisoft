import type { CSSProperties, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { d } from "../frames";

/*
 * WebScore's own UI pieces, copied from its codebase (analytica-alignui) so
 * the replicas draw with the same classes, sizes and colours as
 * webscore.now. They render inside `.ws` (scope.css), which supplies its
 * palette and face. Colour names WebScore registers in its own Tailwind
 * theme (mk-ink, success-base, text-strong-950…) are written here as
 * arbitrary values on the same variables. Keep them in step with the source.
 */

/** lib/utils.ts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** components/ui/score-mark.tsx */
export function scoreBand(score: number | null | undefined): "good" | "fair" | "poor" | "none" {
  if (score === null || score === undefined) return "none";
  if (score >= 90) return "good";
  if (score >= 50) return "fair";
  return "poor";
}

const TEXT = {
  good: "text-[var(--color-success-base)]",
  fair: "text-[var(--color-warning-base)]",
  poor: "text-[var(--color-error-base)]",
  none: "text-[var(--color-text-soft-400)]",
} as const;

/** components/ui/score-mark.tsx */
export function scoreTextClass(score: number | null | undefined) {
  return TEXT[scoreBand(score)];
}

/** components/ui/score-gauge.tsx */
export function getScoreLabel(score: number | null) {
  if (score === null) return "No data";
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 50) return "Needs work";
  return "Poor";
}

const BAND_STROKE = {
  good: "var(--color-success-base)",
  fair: "var(--color-warning-base)",
  poor: "var(--color-error-base)",
  none: "var(--color-stroke-soft-200)",
} as const;

const sizes = {
  sm: { width: 60, ticks: 22, tick: 2.8, number: "text-base", label: "text-[9px]" },
  md: { width: 88, ticks: 30, tick: 2.6, number: "text-2xl", label: "text-[10px]" },
  lg: { width: 168, ticks: 44, tick: 2.4, number: "text-[2.75rem]", label: "text-xs" },
  xl: { width: 200, ticks: 52, tick: 2.2, number: "text-[3.25rem]", label: "text-sm" },
};

// A 260° arc open at the bottom: it starts at 140° (lower left, measured
// clockwise from 3 o'clock) and ends at 40° (lower right).
const START = 140;
const SWEEP = 260;
const C = 50;
const R_OUT = 47;
const R_IN = 39.5;
/** The score's own tick reaches further in, as the marker. */
const R_MARK = 35;

function point(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  const round = (v: number) => Math.round(v * 100) / 100;
  return { x: round(C + r * Math.cos(rad)), y: round(C + r * Math.sin(rad)) };
}

/**
 * components/ui/score-gauge.tsx: a score as a ring of short ticks, the
 * filled ones in the score's colour, the one at the score drawn longer as a
 * marker, the number in the middle and the rating word in the opening.
 * The source lights the filled ticks in order once on mount (gauge-tick);
 * here they replay on the replica's cycle (`ws-tick`), starting at `at`,
 * and the number counts up with them.
 */
export function ScoreGauge({
  score,
  size = "md",
  label,
  at = 0,
  className,
}: {
  score: number;
  size?: keyof typeof sizes;
  label?: string;
  /** Seconds into the cycle the ticks start lighting. */
  at?: number;
  className?: string;
}) {
  const { width, ticks, tick, number, label: labelSize } = sizes[size];
  const value = Math.max(0, Math.min(100, Math.round(score)));
  const band = scoreBand(value);
  const filled = Math.round((value / 100) * (ticks - 1)) + (value > 0 ? 1 : 0);
  const word = label ?? getScoreLabel(value);

  return (
    <div className={cn("relative shrink-0", className)} style={{ width, height: width }}>
      <svg viewBox="0 0 100 100" width={width} height={width} aria-hidden="true" className="overflow-visible">
        {Array.from({ length: ticks }, (_, i) => {
          const angle = START + (SWEEP * i) / (ticks - 1);
          const on = i < filled;
          const mark = on && i === filled - 1;
          const a = point(angle, mark ? R_MARK : R_IN);
          const b = point(angle, R_OUT);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              strokeWidth={mark ? tick * 1.15 : tick}
              strokeLinecap="round"
              stroke={on ? BAND_STROKE[band] : "var(--color-bg-soft-200)"}
              className={on ? "ws-tick" : undefined}
              style={on ? d(at + i * 0.014) : undefined}
            />
          );
        })}
      </svg>

      <span
        className={cn(
          "mk-headline absolute inset-x-0 top-1/2 -translate-y-[56%] text-center leading-none tabular-nums",
          number,
          "text-[var(--color-text-strong-950)]",
        )}
      >
        <span className="rp-count" style={d(at, { "--to": value })} />
      </span>

      <span
        className={cn(
          "absolute inset-x-0 bottom-[3%] text-center font-medium leading-none",
          labelSize,
          label ? "text-[var(--color-text-sub-600)]" : scoreTextClass(value),
        )}
      >
        <span className="rp-in inline-block" style={d(at + 0.7)}>
          {word}
        </span>
      </span>
    </div>
  );
}

export type Status = "good" | "warn" | "bad" | "neutral";

const STATUS_SQUARE: Record<Status, string> = {
  good: "bg-[var(--color-success-base)]",
  warn: "bg-[var(--color-warning-base)]",
  bad: "bg-[var(--color-error-base)]",
  neutral: "bg-[var(--mk-faint)]",
};

/** components/marketing/replicas/parts.tsx: the square that stands in for a status badge. */
export function StatusSquare({
  status,
  className,
  style,
}: {
  status: Status;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={cn("size-2 shrink-0 rounded-[2px]", STATUS_SQUARE[status], className)}
      style={style}
    />
  );
}

/** components/marketing/replicas/parts.tsx: the site's mark where the app shows a favicon. */
export function SiteMark({ letter = "E", className }: { letter?: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#2570cc] text-sm font-semibold text-[#ffffff]",
        className,
      )}
    >
      {letter}
    </span>
  );
}

/**
 * components/marketing/replicas/parts.tsx: a card floating over the stage.
 * `lg:block` is fixed to shown, and the source's ring and shadow give way
 * to the replicas' shared floating shadow (rp-lift), since it now sits over
 * the colour card's edge.
 */
export function Floater({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rp-lift rounded-[16px] bg-white p-3.5 text-left",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** components/marketing/replicas/parts.tsx: a small label at the top of a floater. */
export function FloaterLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-[11px] font-medium text-[var(--mk-faint)]", className)}>{children}</p>;
}

export type Severity = "critical" | "high" | "medium" | "low";

const SEVERITY: Record<Severity, { label: string; square: string; text: string }> = {
  critical: { label: "Critical", square: "bg-[var(--color-error-base)]", text: "text-[var(--color-error-base)]" },
  high: {
    label: "High",
    square: "bg-[color-mix(in_oklab,var(--color-error-base)_70%,transparent)]",
    text: "text-[var(--color-error-base)]",
  },
  medium: { label: "Medium", square: "bg-[var(--color-warning-base)]", text: "text-[var(--color-warning-base)]" },
  low: { label: "Low", square: "bg-[var(--mk-faint)]", text: "text-[var(--mk-muted)]" },
};

/** components/marketing/replicas/parts.tsx: severity as a square and a coloured word. */
export function SeverityMark({ severity, className }: { severity: Severity; className?: string }) {
  const s = SEVERITY[severity];
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", s.text, className)}>
      <span className={cn("size-2 shrink-0 rounded-[2px]", s.square)} />
      {s.label}
    </span>
  );
}
