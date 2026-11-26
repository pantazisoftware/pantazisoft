import { createElement, type CSSProperties, type ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * GDPR Fix's own UI pieces, copied from its codebase (gdpr/src) so the
 * replicas draw with the same markup, classes and colours as gdprfix.eu.
 * They render inside `.gf` (scope.css), which supplies GDPR Fix's palette,
 * radii, type scale and faces. Keep them in step with the source rather
 * than restyling. `dark:` variants are dropped (the replicas are light).
 */

/** lib/utils.ts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Icons ───────────────────────────────────────────────────────────────────
// @hugeicons/core-free-icons data for the icons the report uses, drawn the
// way @hugeicons/react's HugeiconsIcon draws them.

type IconNode = [string, Record<string, string>][];

const stroke = { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" };

export const CheckmarkCircle02Icon: IconNode = [
  ["path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z", stroke: "currentColor", strokeWidth: "1.5" }],
  ["path", { d: "M8 12.5L10.5 15L16 9", ...stroke }],
];
export const CancelCircleIcon: IconNode = [
  ["path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z", ...stroke }],
  ["path", { d: "M14.9994 15L9 9M9.00064 15L15 9", ...stroke }],
];
export const Tick02Icon: IconNode = [["path", { d: "M5 14L8.5 17.5L19 6.5", ...stroke }]];
export const ArrowDown01Icon: IconNode = [
  ["path", { d: "M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9", ...stroke }],
];
export const Copy01Icon: IconNode = [
  ["path", { d: "M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z", ...stroke }],
  ["path", { d: "M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999", ...stroke }],
];
export const LockIcon: IconNode = [
  ["path", { d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", stroke: "currentColor", strokeWidth: "1.5" }],
  ["path", { d: "M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 13L12 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5" }],
];

/** components/shared/icon.tsx over @hugeicons/react */
export function HugeiconsIcon({
  icon,
  size = 24,
  strokeWidth,
  className,
  style,
}: {
  icon: IconNode;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const strokeProps = strokeWidth !== undefined ? { strokeWidth, stroke: "currentColor" } : {};
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      className={className}
      style={style}
      {...strokeProps}
    >
      {icon.map(([tag, attrs], i) => createElement(tag, { ...attrs, ...strokeProps, key: i }))}
    </svg>
  );
}

// ─── Report palette (scan/[id]/page.tsx) ──────────────────────────────────────

export const SEVERITY: Record<string, { label: string; plural: string; dot: string; pill: string }> = {
  critical: { label: "Critical", plural: "Critical", dot: "bg-red-500", pill: "bg-red-100 text-red-700" },
  warning: { label: "Warning", plural: "Warnings", dot: "bg-amber-500", pill: "bg-amber-100 text-amber-700" },
  info: { label: "Info", plural: "Info", dot: "bg-sky-500", pill: "bg-sky-100 text-sky-700" },
};
export const sev = (s: string) => SEVERITY[s] ?? SEVERITY.info;

export const CATEGORY_COLORS: Record<string, string> = {
  necessary: "bg-green-500",
  functional: "bg-sky-500",
  analytics: "bg-amber-500",
  marketing: "bg-red-500",
  unknown: "bg-zinc-400",
};

export const REQUEST_CATEGORIES: Record<string, { label: string; dot: string }> = {
  advertising: { label: "Advertising", dot: CATEGORY_COLORS.marketing },
  analytics: { label: "Analytics", dot: CATEGORY_COLORS.analytics },
  embed: { label: "Embed", dot: "bg-violet-500" },
  fonts: { label: "Fonts", dot: "bg-pink-500" },
  functional: { label: "Functional", dot: CATEGORY_COLORS.functional },
  cdn: { label: "CDN", dot: "bg-teal-500" },
  unknown: { label: "Unidentified", dot: CATEGORY_COLORS.unknown },
};

// ─── Report building blocks (scan/[id]/page.tsx) ──────────────────────────────

export function Panel({
  title,
  aside,
  description,
  className,
  children,
}: {
  title?: ReactNode;
  aside?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("rounded-lg bg-muted p-4", className)}>
      {(title || aside) && (
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            {title && <h2 className="text-sm font-medium text-foreground">{title}</h2>}
            {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
          </div>
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}

export function CountPill({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full bg-background px-2 py-px text-[11px] text-muted-foreground tabular-nums">
      {children}
    </span>
  );
}

export function StageChip({ on, danger, children, className, style }: { on: boolean; danger?: boolean; children: string; className?: string; style?: CSSProperties }) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-semibold",
        !on ? "bg-muted text-muted-foreground/40" : danger ? "bg-red-100 text-red-700" : "bg-foreground/10 text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * CopyBtn, with its "Copied" state laid over it. The two swap on the
 * replica's cycle (gf-copied in scope.css), after a press at --d.
 */
export function CopyBtn({ label = "Copy", style }: { label?: string; style?: CSSProperties }) {
  return (
    <span className="rp-press relative inline-flex shrink-0" style={style}>
      <span className="gf-copy-label flex shrink-0 items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition" style={style}>
        <HugeiconsIcon icon={Copy01Icon} size={13} />
        {label}
      </span>
      <span className="gf-copied absolute inset-0 flex items-center justify-end" style={style}>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1.5 text-xs font-medium text-green-600">
          <HugeiconsIcon icon={Tick02Icon} size={13} />
          Copied
        </span>
      </span>
    </span>
  );
}
