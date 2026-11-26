import type { CSSProperties, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { d } from "../frames";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ListBulletRectFill,
  Minus,
  Plus,
  Speaker,
} from "./icons";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/* ── Type: iOS text styles at their point sizes and tracking ──────────── */

export const T = {
  largeTitle: "text-[34px] leading-[41px] font-bold tracking-[0.011em]",
  body: "text-[17px] leading-[22px] tracking-[-0.025em]",
  headline: "text-[17px] leading-[22px] font-semibold tracking-[-0.025em]",
  subheadline: "text-[15px] leading-[20px] tracking-[-0.016em]",
  footnote: "text-[13px] leading-[18px] tracking-[-0.006em]",
  caption: "text-[12px] leading-[16px] tracking-normal",
  caption2: "text-[11px] leading-[13px] tracking-[0.005em]",
};

/* ── The screen surface ───────────────────────────────────────────────── */

/** The `.rp-fill` surface (416 × 296 in the stage). */
export const SURFACE_W = 416;
export const SURFACE_H = 296;

/**
 * A crop of a real iOS screen as the card's inset surface. The screen is laid
 * out in points at width 416 / `s`, `height` points tall, and shown from
 * `top` down at scale `s`. `bg` is the screen's own background.
 */
export function Screen({
  s,
  top,
  height = 956,
  bg = "#000",
  children,
}: {
  s: number;
  top: number;
  height?: number;
  bg?: string;
  children: ReactNode;
}) {
  return (
    <div className="rp-fill" style={{ background: "#000" }}>
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: SURFACE_W / s,
          height,
          transform: `scale(${s}) translateY(${-top}px)`,
          background: bg,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * A floating piece of the app's UI, lifted (`.rp-lift`) and overhanging the
 * colour card's outer edge while overlapping the surface on its other side.
 * `x`, `y` are stage px; the content is drawn in points (`w` × `h`) at scale
 * `s`. Motion classes go on this outer box, which has no transform of its own.
 */
export function Float({
  x,
  y,
  w,
  h,
  s,
  radius,
  bg,
  className,
  style,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  s: number;
  radius: number;
  bg?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rp-lift absolute",
        className,
      )}
      style={{
        left: x,
        top: y,
        width: w * s,
        height: h * s,
        borderRadius: radius * s,
        background: bg,
        ...style,
      }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left overflow-hidden"
        style={{ width: w, height: h, transform: `scale(${s})`, borderRadius: radius }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Inset grouped list (dark) ────────────────────────────────────────── */

/** A section header, iOS 26 style: 17pt semibold, secondary label. */
export function Header({ children, trailing }: { children: ReactNode; trailing?: ReactNode }) {
  return (
    <div className={cn(T.headline, "mt-[27px] mb-[10px] flex items-center pr-[41px] pl-[41px] text-[var(--rmt-label2)]")}>
      <span>{children}</span>
      {trailing && <span className="ml-auto">{trailing}</span>}
    </div>
  );
}

export function Footer({ children }: { children: ReactNode }) {
  return (
    <div className={cn(T.footnote, "px-[41px] pt-[6px] text-[var(--rmt-label2)]")}>{children}</div>
  );
}

/** The rounded card a section's rows sit in. */
export function Group({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={cn("mx-[20px] overflow-hidden rounded-[26px] bg-[var(--rmt-cell)]", className)} style={style}>
      {children}
    </div>
  );
}

/** SettingsIcon: 28pt rounded square in a role colour, white symbol. */
export function SettingsIcon({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span
      className="flex size-[28px] shrink-0 items-center justify-center rounded-[6px] text-white"
      style={{ background: color }}
    >
      {children}
    </span>
  );
}

/** SettingsRow inside a List cell: icon, title (+ subtitle), trailing. */
export function SettingsRow({
  icon,
  title,
  subtitle,
  titleClass,
  trailing,
  sep = true,
  h = 58.4,
  className,
  style,
}: {
  icon: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  titleClass?: string;
  trailing?: ReactNode;
  sep?: boolean;
  h?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn("relative flex items-center gap-[12px] pr-[20px] pl-[21px]", className)}
      style={{ minHeight: h, ...style }}
    >
      {icon}
      <div className="flex min-w-0 flex-col gap-[2px]">
        <span className={cn(T.body, titleClass)}>{title}</span>
        {subtitle && <span className={cn(T.caption, "text-[var(--rmt-label2)]")}>{subtitle}</span>}
      </div>
      {trailing && <div className="ml-auto flex shrink-0 items-center pl-[8px]">{trailing}</div>}
      {sep && <span className="absolute right-[20px] bottom-0 left-[61px] h-[0.5px] bg-[var(--rmt-sep)]" />}
    </div>
  );
}

/**
 * SwiftUI Toggle as iOS 26 draws it with On/Off labels on: 64 × 28 track, a
 * 39 × 24 capsule knob. With `d`, it switches on at that time in the cycle.
 */
export function Toggle({ at }: { at?: number }) {
  const anim = at !== undefined;
  return (
    <span
      className={cn("relative block h-[28px] w-[64px] rounded-full bg-[var(--rmt-green)]", anim && "rmt-track")}
      style={anim ? d(at) : undefined}
    >
      <span className="absolute top-[9px] left-[14px] h-[10px] w-[1.5px] rounded-full bg-white" />
      {anim && (
        <span
          className="rmt-off-mark absolute top-[9px] right-[11px] size-[10px] rounded-full border-[1.5px] border-[#8e8e93]"
          style={d(at)}
        />
      )}
      <span
        className={cn(
          "absolute top-[2px] right-[2px] h-[24px] w-[39px] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]",
          anim && "rmt-knob",
        )}
        style={anim ? d(at) : undefined}
      />
    </span>
  );
}

/* ── Remote controls (Features/Remote/Components) ─────────────────────── */

/** Press feedback: PressFeedback.tint at `alpha`, flashing at `at`. */
function PressFlash({ at, alpha, className }: { at?: number; alpha: number; className?: string }) {
  if (at === undefined) return null;
  return (
    <span
      className={cn("rmt-flash absolute inset-0", className)}
      style={d(at, { background: `rgba(77, 158, 255, ${alpha})` })}
    />
  );
}

/** Wraps content in an rp-press dip when `at` is set. */
function Dip({ at, children, className }: { at?: number; children: ReactNode; className?: string }) {
  return (
    <span className={cn("flex items-center justify-center", at !== undefined && "rp-press", className)} style={at !== undefined ? d(at) : undefined}>
      {children}
    </span>
  );
}

export type BarButton = {
  icon: ReactNode;
  label: string;
  tint?: string;
  /** Time in the cycle this button is pressed. */
  at?: number;
};

/** GroupedButtonBar: one rounded container, hairline dividers, icon + label. */
export function GroupedBar({ buttons, className }: { buttons: BarButton[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[26px] overflow-hidden rounded-[11px] shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_0_0_0.5px_var(--rmt-stroke)]",
        className,
      )}
      style={{ background: "var(--rmt-button)" }}
    >
      {buttons.map((b, i) => (
        <div key={b.label} className="contents">
          {i > 0 && <span className="w-[0.5px] shrink-0 bg-[var(--rmt-divider)]" />}
          <div className="relative flex flex-1 items-center justify-center">
            <PressFlash at={b.at} alpha={0.28} />
            <Dip at={b.at} className="gap-[5px] px-[6px]">
              <span style={{ color: b.tint ?? "var(--rmt-icon)" }}>{b.icon}</span>
              <span className={cn(T.caption2, "font-semibold")} style={{ color: b.tint ?? "var(--rmt-icon)" }}>
                {b.label}
              </span>
            </Dip>
          </div>
        </div>
      ))}
    </div>
  );
}

/** One third of a rocker capsule. */
function RockerCell({ children, at }: { children: ReactNode; at?: number }) {
  return (
    <div className="relative flex flex-1 items-center justify-center text-[var(--rmt-icon)]">
      <PressFlash at={at} alpha={0.24} />
      <Dip at={at}>{children}</Dip>
    </div>
  );
}

function RockerDivider({ inset }: { inset: number }) {
  return <span className="h-[0.5px] shrink-0 bg-[var(--rmt-divider)]" style={{ marginInline: inset }} />;
}

const capsule =
  "relative overflow-hidden rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.5),inset_0_0_0_0.5px_var(--rmt-stroke)]";

/** ChannelRocker: 56 × 240, CH up / guide / CH down, "CH" on top. */
export function ChannelRocker({ up, guide, down }: { up?: number; guide?: number; down?: number }) {
  return (
    <div className={cn(capsule, "flex h-[240px] w-[56px] flex-col")} style={{ background: "var(--rmt-button)" }}>
      <RockerCell at={up}><ChevronUp s={18} w={2.6} /></RockerCell>
      <RockerDivider inset={10} />
      <RockerCell at={guide}><ListBulletRectFill s={18} /></RockerCell>
      <RockerDivider inset={10} />
      <RockerCell at={down}><ChevronDown s={18} w={2.6} /></RockerCell>
      <span className="rmt-rounded absolute top-[8px] left-0 w-full text-center text-[9px] leading-[11px] font-bold tracking-normal text-[var(--rmt-subtle)]">
        CH
      </span>
    </div>
  );
}

/** VolumeRocker: 68 × 240 with the TV's live level filled from the bottom. */
export function VolumeRocker({
  level = 12,
  max = 30,
  up,
  mute,
  down,
}: {
  level?: number;
  max?: number;
  up?: number;
  mute?: number;
  down?: number;
}) {
  const h = Math.max(4, 240 * (level / max));
  return (
    <div className={cn(capsule, "h-[240px] w-[68px]")} style={{ background: "var(--rmt-button)" }}>
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: h,
          background:
            "linear-gradient(rgba(77,158,255,0.20), rgba(77,158,255,0.50), rgba(77,158,255,0.75), rgba(77,158,255,0.88))",
        }}
      >
        <span
          className="absolute inset-x-0 top-0 h-[10px] blur-[2px]"
          style={{ background: "linear-gradient(rgba(153,204,255,0.85), rgba(153,204,255,0))" }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col">
        <RockerCell at={up}><Plus s={20} w={2.6} /></RockerCell>
        <RockerDivider inset={14} />
        <RockerCell at={mute}><Speaker n={2} s={20} w={2.2} /></RockerCell>
        <RockerDivider inset={14} />
        <RockerCell at={down}><Minus s={20} w={2.6} /></RockerCell>
      </div>
    </div>
  );
}

type Dir = "up" | "right" | "down" | "left";
const ANGLE: Record<Dir, number> = { right: 0, down: 90, left: 180, up: 270 };

/** RingSector from DPadView.swift, as an SVG path in a 260 box. */
function sector(dir: Dir) {
  const c = 130;
  const ro = 130 * 0.94;
  const ri = 130 * 0.42;
  const rad = (deg: number) => (deg * Math.PI) / 180;
  const a0 = rad(ANGLE[dir] - 44);
  const a1 = rad(ANGLE[dir] + 44);
  const p = (r: number, a: number) => `${(c + r * Math.cos(a)).toFixed(2)} ${(c + r * Math.sin(a)).toFixed(2)}`;
  return `M${p(ro, a0)} A${ro} ${ro} 0 0 1 ${p(ro, a1)} L${p(ri, a1)} A${ri} ${ri} 0 0 0 ${p(ri, a0)} Z`;
}

/**
 * DPadView: 260pt ring, four 88° arc buttons, raised blue OK. `press` lists
 * when each part is pressed in the cycle; a press lights the arc with the
 * radial blue beam and dips the chevron, as the app does.
 */
export function DPad({ press = {} }: { press?: Partial<Record<Dir | "ok", number>> }) {
  const radial = 130 * ((0.42 + 0.94) / 2);
  const Chev = { up: ChevronUp, right: ChevronRight, down: ChevronDown, left: ChevronLeft };
  return (
    <div className="relative size-[260px] shrink-0">
      <div
        className="absolute inset-0 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.55),inset_0_0_0_1px_var(--rmt-stroke)]"
        style={{ background: "var(--rmt-ring)" }}
      />
      <div className="absolute top-1/2 left-1/2 size-[223.6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.03)]" />
      <svg width={260} height={260} viewBox="0 0 260 260" className="absolute inset-0">
        <defs>
          <radialGradient id="rmt-beam" gradientUnits="userSpaceOnUse" cx="130" cy="130" r="130">
            <stop offset="0.4" stopColor="#4d9eff" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#4d9eff" stopOpacity="0.3" />
            <stop offset="1" stopColor="#4d9eff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {(Object.keys(ANGLE) as Dir[]).map((dir) => (
          <g key={dir}>
            {press[dir] !== undefined && (
              <path d={sector(dir)} fill="url(#rmt-beam)" className="rmt-flash" style={d(press[dir]!)} />
            )}
            <path d={sector(dir)} stroke="rgba(255,255,255,0.10)" strokeWidth={0.75} />
          </g>
        ))}
      </svg>
      {(Object.keys(ANGLE) as Dir[]).map((dir) => {
        const a = (ANGLE[dir] * Math.PI) / 180;
        const C = Chev[dir];
        return (
          <span
            key={dir}
            className="absolute flex size-[24px] items-center justify-center text-[var(--rmt-icon)]"
            style={{ left: 130 + radial * Math.cos(a) - 12, top: 130 + radial * Math.sin(a) - 12 }}
          >
            <Dip at={press[dir]}>
              <C s={22} w={2.5} />
            </Dip>
          </span>
        );
      })}
      <div className="absolute top-[82px] left-[82px] size-[96px]">
        <span
          className={cn("relative block size-full", press.ok !== undefined && "rp-press")}
          style={press.ok !== undefined ? d(press.ok) : undefined}
        >
          <span
            className="absolute inset-0 overflow-hidden rounded-full shadow-[0_6px_22px_rgba(38,89,217,0.55),inset_0_0_0_1px_rgba(255,255,255,0.16)]"
            style={{ background: "var(--rmt-accent)" }}
          >
            {press.ok !== undefined && (
              <span className="rmt-flash absolute inset-0 bg-white/20" style={d(press.ok)} />
            )}
          </span>
          <span className="rmt-rounded absolute inset-0 flex items-center justify-center pl-[1.5px] text-[22px] font-bold tracking-[1.5px] text-white">
            OK
          </span>
        </span>
      </div>
    </div>
  );
}
