import type { CSSProperties, ReactNode } from "react";
import { cn } from "../feedfast/ui";

/*
 * FabricatorPro's brutalist kit in dark mode, sized in iOS points at the
 * default Dynamic Type size (Large): body 17, headline 17 semibold,
 * subheadline 15, footnote 13, caption 12, caption2 11, title 28, title3 20.
 * Sources: Shared/Theme/Brutal.swift, Shared/Components/{CalculatorScreen,
 * ResultCard,UnitToggle}.swift.
 */

export { cn };

/** The screen surface (.rp-fill, 416 × 296): the app screen `W` points wide, scaled to fit. */
export function Screen({ W, children, className }: { W: number; children: ReactNode; className?: string }) {
  return (
    <div className="rp-fill bg-black">
      <div
        className={cn("fp absolute top-0 left-0 bg-black", className)}
        style={{ width: W, height: (296 * W) / 416, transform: `scale(${416 / W})`, transformOrigin: "0 0" }}
      >
        {children}
      </div>
    </div>
  );
}

/** A piece of the app floating over the card: it overhangs the colour card's
 *  outer edge (by `right` / `top` / `bottom`, negative stage px) and overlaps the surface.
 *  The outer box is at stage size so `.rp-lift`'s shadow isn't scaled down with the content. */
export function Floating({
  W, scale, children, className, style, right, top, bottom,
}: {
  W: number; scale: number; children: ReactNode; className?: string; style?: CSSProperties;
  right: number; top?: number; bottom?: number;
}) {
  return (
    <div className={cn("absolute z-20", className)} style={{ right, top, bottom, width: W * scale, ...style }}>
      <div className="rp-lift">
        <div className="fp" style={{ width: W, zoom: scale }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** `.overlay(Rectangle().strokeBorder(Brutal.ink, lineWidth: 2))` */
export function InkBorder({ width = 2, color = "var(--fp-ink)" }: { width?: number; color?: string }) {
  return <span className="pointer-events-none absolute inset-0 z-10" style={{ border: `${width}px solid ${color}` }} />;
}

// MARK: - SF Symbols (drawn to match the glyphs at their point sizes)

export function RulerIcon() {
  // "ruler", 15 pt bold
  return (
    <svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="var(--fp-accent)" strokeWidth="1.7">
      <rect x="1" y="1" width="18" height="9" rx="1.6" />
      <path d="M4.5 1v3.3M7.5 1v2.2M10 1v3.3M12.5 1v2.2M15.5 1v3.3" strokeLinecap="round" />
    </svg>
  );
}

export function ExpandIcon() {
  // "arrow.up.left.and.arrow.down.right", body bold
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7V2h5M2 2l5 5M15 10v5h-5M15 15l-5-5" />
    </svg>
  );
}

export function SplitIcon() {
  // "rectangle.split.3x1", footnote bold
  return (
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="1" y="1" width="15" height="11" rx="2" />
      <path d="M6 1v11M11 1v11" />
    </svg>
  );
}

export function WrenchIcon() {
  // "wrench.adjustable", footnote bold
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M10.6 1.4a3.6 3.6 0 0 0-3.9 4.8L1.6 11.3a1.5 1.5 0 0 0 2.1 2.1l5.1-5.1a3.6 3.6 0 0 0 4.8-3.9l-2 2-2-.5-.5-2z" />
    </svg>
  );
}

export function CopyIcon() {
  // "doc.on.doc", footnote bold
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4.5" y="4.5" width="8.5" height="10.5" rx="1.6" />
      <path d="M9.5 2.5V2.4A1.4 1.4 0 0 0 8.1 1H2.4A1.4 1.4 0 0 0 1 2.4v8.2A1.4 1.4 0 0 0 2.4 12h.1" />
    </svg>
  );
}

// MARK: - Components

/** BrutalSegmentedControl: 2 pt ink frame, ink rules, selected solid accent with black text. */
export function Segmented({
  options, selected, minH = 44, className, pressIndex, pressDelay,
}: {
  options: string[]; selected: number; minH?: number; className?: string; pressIndex?: number; pressDelay?: number;
}) {
  return (
    <div className={cn("relative flex", className)}>
      {options.map((o, i) => (
        <div key={o} className="flex flex-1">
          {i > 0 && <span className="w-[2px] shrink-0 bg-[var(--fp-ink)]" />}
          <span
            className={cn(
              "fp-mono flex flex-1 items-center justify-center px-[10px] text-[15px] font-bold whitespace-nowrap",
              i === selected ? "bg-[var(--fp-accent)] text-black" : "bg-black text-[var(--fp-ink)]",
              pressIndex === i && "rp-press",
            )}
            style={{ minHeight: minH, ...(pressIndex === i ? ({ "--d": `${pressDelay ?? 0}s` } as CSSProperties) : {}) }}
          >
            {o.toUpperCase()}
          </span>
        </div>
      ))}
      <InkBorder />
    </div>
  );
}

/** DiagramCard: header strip (ruler, DIAGRAM, square expand button), 2 pt rule, drawing. */
export function DiagramCard({ height, children }: { height: number; children: ReactNode }) {
  return (
    <div className="relative bg-black">
      <div className="flex min-h-[44px] items-stretch pl-[12px]">
        <span className="flex items-center gap-[10px]">
          <RulerIcon />
          <span className="fp-mono text-[13px] font-bold tracking-[1px]">DIAGRAM</span>
        </span>
        <span className="flex-1" />
        <span className="flex w-[52px] items-center justify-center border-l-2 border-[var(--fp-ink)]">
          <ExpandIcon />
        </span>
      </div>
      <div className="h-[2px] bg-[var(--fp-ink)]" />
      <div className="relative overflow-hidden" style={{ height }}>
        {children}
      </div>
      <InkBorder />
    </div>
  );
}

/** DiagramTabs: segmented switch (max 260 pt) in its own strip, hairline rule, the flat drawing. */
export function DiagramTabs({ flatTitle, children }: { flatTitle: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-[10px] py-[8px]">
        <Segmented options={[flatTitle, "3D"]} selected={0} className="max-w-[260px]" pressIndex={0} pressDelay={0.15} />
      </div>
      <div className="h-px bg-[var(--fp-rule)]" />
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export type HeroItem = { label: string; value: string; unit?: string; hint?: string; countTo?: number };

/** ResultHero: accent edge, ink label band, big monospaced readout, 2 pt ink frame. */
export function ResultHero({ items, width, delay = 0 }: { items: HeroItem[]; width: number; delay?: number }) {
  const two = items.length > 1;
  const heroSize = two ? 28 : 34;
  // Label: lineLimit(1) + minimumScaleFactor(0.7) inside the cell's 12 pt padding.
  const cell = (width - 8 - 2 * (items.length - 1)) / items.length - 24;
  const labelSize = (t: string) => {
    const n = t.length;
    const w = n * (13 * 0.62 + 0.5);
    return w > cell ? Math.max(13 * 0.7, (cell - 4 - n * 0.5) / (n * 0.62)) : 13;
  };
  return (
    <div className="relative flex bg-black">
      <span className="w-[8px] shrink-0 bg-[var(--fp-accent)]" />
      {items.map((it, i) => (
        <div key={it.label} className="flex min-w-0 flex-1">
          {i > 0 && <span className="w-[2px] shrink-0 bg-[var(--fp-ink)]" />}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex min-h-[30px] items-center bg-[var(--fp-ink)] px-[12px]">
              <span className="fp-mono truncate font-bold tracking-[0.5px] text-black" style={{ fontSize: labelSize(it.label) }}>
                {it.label.toUpperCase()}
              </span>
            </div>
            <div className="px-[12px] pt-[8px] pb-[10px]">
              <div className="rp-in flex items-baseline gap-[4px]" style={{ "--d": `${delay + i * 0.15}s` } as CSSProperties}>
                <span
                  className={cn("fp-mono font-bold tabular-nums", it.countTo !== undefined && "rp-count")}
                  style={{ fontSize: heroSize, ...(it.countTo !== undefined ? ({ "--to": it.countTo, "--d": `${delay + 0.1}s` } as CSSProperties) : {}) }}
                >
                  {it.countTo === undefined && it.value}
                </span>
                {it.unit && (
                  <span
                    className="fp-mono text-[var(--fp-ink2)]"
                    style={it.unit === "°" ? { fontSize: heroSize, fontWeight: 700 } : { fontSize: 17, fontWeight: 600 }}
                  >
                    {it.unit}
                  </span>
                )}
              </div>
              {it.hint && <p className="mt-[2px] line-clamp-2 text-[12px] text-[var(--fp-ink2)]">{it.hint}</p>}
            </div>
          </div>
        </div>
      ))}
      <InkBorder />
    </div>
  );
}

/** SectionTitle: small uppercase monospaced title with an SF Symbol. */
export function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="fp-mono flex items-center gap-[6px] text-[13px] font-bold tracking-[1px] text-[var(--fp-ink2)]">
      {icon}
      <span>{children}</span>
    </div>
  );
}
