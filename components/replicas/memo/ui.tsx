import type { CSSProperties, ReactNode } from "react";
import { DM_Sans, Fraunces } from "next/font/google";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * Memo's own UI pieces, copied from its codebase (memo/components/ui/*,
 * memo/lib/album/themes.ts) so the replicas draw with the same classes,
 * sizes and colours as me-mo.ro. They render inside `.mm` (scope.css), which
 * supplies Memo's cream / terracotta / ink palette, radii and faces.
 */

/** app/layout.tsx: Fraunces for titles, DM Sans for everything else. */
const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mm-serif",
  display: "swap",
  preload: false,
});

const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mm-sans",
  display: "swap",
  preload: false,
});

/** lib/utils.ts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** A replica's root: the Memo scope with its faces, filling the stage. */
export function Scene({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mm absolute inset-0", serif.variable, sans.variable, className)}>
      {children}
    </div>
  );
}

/**
 * Lays out a page at its own size (w × h) and scales it to fit a surface,
 * the way a screenshot of the real page is a scaled crop of it.
 */
export function Viewport({
  w,
  scale,
  children,
  className,
  style,
}: {
  w: number;
  scale: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn("absolute top-0 left-0 origin-top-left", className)}
      style={{ width: w, height: `calc(100% / ${scale})`, scale: String(scale), ...style }}
    >
      {children}
    </div>
  );
}

/* ---------------------------- album theme ----------------------------- */

/**
 * getAlbumTheme("terracotta"): the default album theme after readable()
 * adjusts it for contrast (lib/album/themes.ts), as the guest pages use it.
 */
export const THEME = {
  bg: "#FDFBF7",
  surface: "#F8F3EC",
  ink: "#2A2520",
  inkSoft: "#776c5f",
  accent: "#9b6a4c",
  accentHover: "#875e44",
  accentFg: "#FFFFFF",
  accentText: "#8e6247",
};

/**
 * The guest layout's wrapper (app/a/[slug]/layout.tsx): themeCssVars and
 * themeBrandVars for the terracotta theme, so the app's palette classes
 * resolve to the album's colours on guest pages.
 */
const mix = (a: string, b: string, pct: number) => `color-mix(in oklab, ${a}, ${b} ${pct}%)`;
const cream200 = mix(THEME.surface, THEME.ink, 7);
export const GUEST_VARS = {
  "--theme-bg": THEME.bg,
  "--theme-surface": THEME.surface,
  "--theme-ink": THEME.ink,
  "--theme-ink-soft": THEME.inkSoft,
  "--theme-accent": THEME.accent,
  "--color-terracotta-300": mix(THEME.accent, THEME.bg, 45),
  "--color-terracotta-400": mix(THEME.accent, THEME.bg, 20),
  "--color-terracotta-500": THEME.accent,
  "--color-terracotta-600": THEME.accentText,
  "--color-terracotta-700": THEME.accentText,
  "--color-cream-50": THEME.bg,
  "--color-cream-100": THEME.surface,
  "--color-cream-200": cream200,
  "--color-cream-300": mix(THEME.surface, THEME.ink, 14),
  "--color-ink-900": THEME.ink,
  "--color-ink-700": mix(THEME.ink, THEME.inkSoft, 45),
  "--color-ink-500": THEME.inkSoft,
  "--color-ink-300": mix(THEME.inkSoft, THEME.bg, 45),
  "--border": cream200,
  "--input": cream200,
  background: THEME.bg,
  color: THEME.ink,
} as CSSProperties;

/* ------------------------------ samples ------------------------------- */

/** The demo album (app/demo/page.tsx, components/demo/DemoAlbum.tsx). */
export const ALBUM = {
  title: "Anna & Mike",
  dateLine: "September 12, 2026 · Villa Rosa",
  description: "Add the photos you took tonight. We'd love to see the evening through your eyes.",
  url: "https://me-mo.ro/a/anna-and-mike",
};

/** The event photos Memo ships for its marketing pages (public/usecases/strip). */
const P = (name: string) => `/replicas/memo/${name}.webp`;
export const PHOTO = {
  couple: P("couple"),
  friends: P("friends"),
  sparklers: P("sparklers"),
  table: P("table"),
  cake: P("cake"),
  dinner: P("dinner"),
  aisle: P("aisle"),
  rings: P("rings"),
  hands: P("hands"),
  cover: P("cover"),
};

export const qr = (id: string) => `/replicas/memo/qr-${id}.svg`;

/* ---------------------------- components ------------------------------ */

/** components/ui/button.tsx (cva variants, flattened). */
const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors";
const BUTTON_VARIANT = {
  primary: "bg-terracotta-500 text-white shadow-warm",
  secondary: "bg-cream-100 text-ink-900 border border-cream-200",
  outline: "border border-ink-300 text-ink-900",
  ghost: "text-ink-900",
  destructive: "bg-destructive text-white",
};
const BUTTON_SIZE = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "h-10 w-10 p-0",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  style,
  disabled,
  children,
}: {
  variant?: keyof typeof BUTTON_VARIANT;
  size?: keyof typeof BUTTON_SIZE;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        BUTTON_BASE,
        BUTTON_VARIANT[variant],
        BUTTON_SIZE[size],
        disabled && "opacity-50",
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}

/** components/ui/card.tsx */
export function Card({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card text-card-foreground border border-border shadow-warm",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}

/** components/ui/badge.tsx */
export function Badge({
  className,
  variant = "default",
  children,
}: {
  className?: string;
  variant?: "default" | "popular" | "soft";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-cream-100 text-ink-700",
        variant === "popular" && "bg-terracotta-500 text-white",
        variant === "soft" && "bg-blush-300/40 text-terracotta-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
