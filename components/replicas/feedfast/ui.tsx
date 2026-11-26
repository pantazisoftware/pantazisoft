import { ChevronUp } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * FeedFast's own UI pieces, copied from the FeedFast codebase (backfeed/src)
 * so the replicas draw with the same classes, sizes and colours as feedfa.st.
 * They render inside `.ff` (globals.css), which supplies FeedFast's palette,
 * radii and faces. Keep them in step with the source rather than restyling.
 */

/** lib/utils.ts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** components/marketing/feature-page.tsx */
export function VisualCard({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[20px] bg-background p-5 shadow-[0_0_0_1px_rgb(0_0_0/0.04),0_12px_32px_-16px_rgb(0_0_0/0.18)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** components/marketing/feedback-illustrations.tsx */
export function Chip({
  children,
  active = false,
  className,
  style,
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-full px-3 text-[12px]",
        active ? "bg-foreground text-background" : "bg-muted text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** components/marketing/feedback-illustrations.tsx */
export function Votes({
  count,
  className,
  countClassName,
  countStyle,
}: {
  count: number;
  className?: string;
  /** Replica motion on the figure (rp-count). */
  countClassName?: string;
  countStyle?: React.CSSProperties;
}) {
  return (
    <span
      className={cn(
        "flex w-10 shrink-0 flex-col items-center rounded-xl bg-muted py-1 text-foreground",
        className,
      )}
    >
      <ChevronUp className="size-3.5 text-muted-foreground" />
      <span className={cn("font-mono text-[11px] font-semibold", countClassName)} style={countStyle}>
        {countClassName ? null : count}
      </span>
    </span>
  );
}

/** lib/tags.ts */
const TAG_STYLES: Record<string, string> = {
  new: "border-transparent bg-[var(--brand)]/10 text-[var(--brand)]",
  improved: "border-transparent bg-[var(--up)]/10 text-[color-mix(in_oklab,var(--up),black_32%)]",
  fixed:
    "border-transparent bg-[var(--degraded)]/12 text-[color-mix(in_oklab,var(--degraded),black_25%)]",
};

export function tagClass(tag: string): string {
  return TAG_STYLES[tag.toLowerCase()] ?? "border-transparent bg-muted text-muted-foreground";
}

/** components/marketing/changelog-illustrations.tsx */
export function Tag({ tag, className }: { tag: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center rounded-full px-2 text-[10px] font-medium",
        tagClass(tag),
        className,
      )}
    >
      {tag}
    </span>
  );
}

/** components/uptime/bar-strip.tsx, the static form public pages use. */
export type DayBarState = "up" | "down" | "degraded" | "maintenance" | "none";

const STATE_CLASS: Record<DayBarState, string> = {
  up: "bg-up",
  down: "bg-down",
  degraded: "bg-degraded",
  maintenance:
    "bg-[repeating-linear-gradient(45deg,var(--maintenance),var(--maintenance)_3px,color-mix(in_oklab,var(--maintenance),white_40%)_3px,color-mix(in_oklab,var(--maintenance),white_40%)_6px)]",
  none: "bg-foreground/[0.08]",
};

const SIZE = {
  sm: { strip: "h-6 gap-[2px]", bar: "rounded-full" },
  md: { strip: "h-8 gap-[3px]", bar: "rounded-[3px]" },
  lg: { strip: "h-14 gap-[3px]", bar: "rounded-[4px]" },
} as const;

export function BarStrip({
  days,
  size = "md",
  className,
}: {
  days: DayBarState[];
  size?: keyof typeof SIZE;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className={cn("bar-strip flex w-full items-stretch", SIZE[size].strip)}>
        {days.map((state, i) => (
          <div
            key={i}
            style={{ "--bar-index": i } as React.CSSProperties}
            className={cn("min-w-0 flex-1", SIZE[size].bar, STATE_CLASS[state])}
          />
        ))}
      </div>
    </div>
  );
}

/** components/marketing/uptime-illustrations.tsx: a day strip from a sparse
 *  pattern, index → state, everything else up. */
export function strip(pattern: Record<number, DayBarState>, count = 40): DayBarState[] {
  return Array.from({ length: count }, (_, i) => pattern[i] ?? "up");
}
