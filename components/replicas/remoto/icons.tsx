import type { CSSProperties, ReactNode } from "react";

/*
 * SF Symbols used by Remoto, redrawn as inline SVG on a 24-unit grid. `s` is
 * the symbol's point size, as in `.font(.system(size: s))`, so a glyph sits in
 * the same box the app gives it. Stroke weights follow the symbol weight the
 * Swift code asks for (.medium ≈ 1.8, .semibold ≈ 2.2, .bold ≈ 2.6).
 *
 * Filled symbols that have cut-outs (checkmark.seal.fill, lock.doc.fill …)
 * take `cut`, the colour behind them, since SF renders those as holes.
 */

type P = {
  s?: number;
  w?: number;
  cut?: string;
  className?: string;
  style?: CSSProperties;
};

function Svg({
  s = 17,
  className,
  style,
  children,
}: P & { children: ReactNode }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "block", flexShrink: 0, overflow: "visible", ...style }}
    >
      {children}
    </svg>
  );
}

const line = (w: number) => ({
  stroke: "currentColor",
  strokeWidth: w,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
});

/* ── Chevrons ─────────────────────────────────────────────────────────── */

export const ChevronUp = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M5.5 15.5 12 9l6.5 6.5" {...line(w)} /></Svg>
);
export const ChevronDown = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M5.5 9 12 15.5 18.5 9" {...line(w)} /></Svg>
);
export const ChevronLeft = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M15 5.5 8.5 12l6.5 6.5" {...line(w)} /></Svg>
);
export const ChevronRight = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M9 5.5 15.5 12 9 18.5" {...line(w)} /></Svg>
);
export const ChevronUpDown = ({ w = 2.2, ...p }: P) => (
  <Svg {...p}>
    <path d="M8 9.5 12 5.5l4 4M8 14.5l4 4 4-4" {...line(w)} />
  </Svg>
);

/* ── Toolbar ──────────────────────────────────────────────────────────── */

export const Gearshape = ({ w = 1.7, ...p }: P) => (
  <Svg {...p}>
    <path
      d="M10.3 2.8h3.4l.5 2.6a7.3 7.3 0 0 1 1.9 1.1l2.5-.9 1.7 2.9-2 1.7a7.4 7.4 0 0 1 0 2.2l2 1.7-1.7 2.9-2.5-.9a7.3 7.3 0 0 1-1.9 1.1l-.5 2.6h-3.4l-.5-2.6a7.3 7.3 0 0 1-1.9-1.1l-2.5.9-1.7-2.9 2-1.7a7.4 7.4 0 0 1 0-2.2l-2-1.7 1.7-2.9 2.5.9a7.3 7.3 0 0 1 1.9-1.1z"
      {...line(w)}
    />
    <circle cx="12" cy="12" r="3.2" {...line(w)} />
  </Svg>
);
export const ArrowClockwise = ({ w = 2, ...p }: P) => (
  <Svg {...p}>
    <path d="M19.2 12.6A7.3 7.3 0 1 1 15.6 6" {...line(w)} />
    <path d="M12.6 3.2l3.6 2.9-3 3.4" {...line(w)} />
  </Svg>
);
export const ArrowCounterclockwise = ({ w = 2.2, ...p }: P) => (
  <Svg {...p}>
    <path d="M4.8 12.6A7.3 7.3 0 1 0 8.4 6" {...line(w)} />
    <path d="M11.4 3.2 7.8 6.1l3 3.4" {...line(w)} />
  </Svg>
);

/* ── Remote ───────────────────────────────────────────────────────────── */

export const Power = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}>
    <path d="M12 3v8.5" {...line(w)} />
    <path d="M7.4 6.4a7.6 7.6 0 1 0 9.2 0" {...line(w)} />
  </Svg>
);
export const UturnBackward = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}>
    <path d="M4.5 9.5h10a5 5 0 0 1 0 10H11" {...line(w)} />
    <path d="M8.5 5.5l-4 4 4 4" {...line(w)} />
  </Svg>
);
export const HouseFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M12.9 3.5a1.4 1.4 0 0 0-1.8 0L2.5 10.9a1 1 0 0 0 1.3 1.5l.9-.8V19.6A1.9 1.9 0 0 0 6.6 21.5H10v-5.4c0-.4.3-.7.7-.7h2.6c.4 0 .7.3.7.7v5.4h3.4a1.9 1.9 0 0 0 1.9-1.9v-8l.9.8a1 1 0 0 0 1.3-1.5z"
    />
  </Svg>
);
export const Line3 = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M4 6.5h16M4 12h16M4 17.5h16" {...line(w)} /></Svg>
);
export const Plus = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M12 4.5v15M4.5 12h15" {...line(w)} /></Svg>
);
export const Minus = ({ w = 2.4, ...p }: P) => (
  <Svg {...p}><path d="M4.5 12h15" {...line(w)} /></Svg>
);
export const BackwardFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      d="M11.2 6.6v10.8L2.6 12zM21 6.6v10.8L12.4 12z"
    />
  </Svg>
);
export const ForwardFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      d="M12.8 6.6v10.8L21.4 12zM3 6.6v10.8L11.6 12z"
    />
  </Svg>
);
export const PlayPauseFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      d="M2.2 6v12l9.6-6z"
    />
    <rect x="14" y="6" width="2.9" height="12" rx="0.9" fill="currentColor" />
    <rect x="19" y="6" width="2.9" height="12" rx="0.9" fill="currentColor" />
  </Svg>
);
export const StopFill = (p: P) => (
  <Svg {...p}><rect x="5" y="5" width="14" height="14" rx="2.6" fill="currentColor" /></Svg>
);

/** speaker.wave.{n}.fill */
export const Speaker = ({ n = 2, w = 2, ...p }: P & { n?: 1 | 2 | 3 }) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M2.6 9.1h2.9l4.4-3.8c.6-.5 1.5-.1 1.5.7v12c0 .8-.9 1.2-1.5.7l-4.4-3.8H2.6a1 1 0 0 1-1-1V10.1a1 1 0 0 1 1-1z"
    />
    {n >= 1 && <path d="M14.3 9.3a4 4 0 0 1 0 5.4" {...line(w)} />}
    {n >= 2 && <path d="M17 6.8a7.6 7.6 0 0 1 0 10.4" {...line(w)} />}
    {n >= 3 && <path d="M19.7 4.3a11.3 11.3 0 0 1 0 15.4" {...line(w)} />}
  </Svg>
);

export const ListBulletRectFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.4 4.2h13.2a3 3 0 0 1 3 3v9.6a3 3 0 0 1-3 3H5.4a3 3 0 0 1-3-3V7.2a3 3 0 0 1 3-3z
         M6.2 8.6a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0z
         M6.2 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0z
         M6.2 15.4a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0z
         M10.3 7.8h7.3a.8.8 0 0 1 0 1.6h-7.3a.8.8 0 0 1 0-1.6z
         M10.3 11.2h7.3a.8.8 0 0 1 0 1.6h-7.3a.8.8 0 0 1 0-1.6z
         M10.3 14.6h7.3a.8.8 0 0 1 0 1.6h-7.3a.8.8 0 0 1 0-1.6z"
    />
  </Svg>
);

/* ── Discovery ────────────────────────────────────────────────────────── */

/** dot.radiowaves.left.and.right; `live` runs the variable-colour effect. */
export const DotRadiowaves = ({ w = 1.9, live = false, ...p }: P & { live?: boolean }) => {
  const arc = (dir: string, i: number) => (
    <path
      d={dir}
      {...line(w)}
      className={live ? "rmt-wave" : undefined}
      style={live ? ({ "--w": `${i * 0.25}s` } as CSSProperties) : undefined}
    />
  );
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      {arc("M8.3 8.3a5.3 5.3 0 0 0 0 7.4M15.7 8.3a5.3 5.3 0 0 1 0 7.4", 0)}
      {arc("M5.4 5.4a9.4 9.4 0 0 0 0 13.2M18.6 5.4a9.4 9.4 0 0 1 0 13.2", 1)}
    </Svg>
  );
};
export const AntennaRadiowaves = ({ w = 1.9, ...p }: P) => (
  <Svg {...p}>
    <circle cx="12" cy="9" r="1.8" fill="currentColor" />
    <path d="M12 11v10" {...line(w)} />
    <path d="M8.8 5.8a4.5 4.5 0 0 0 0 6.4M15.2 5.8a4.5 4.5 0 0 1 0 6.4" {...line(w)} />
    <path d="M6 3a8.5 8.5 0 0 0 0 12M18 3a8.5 8.5 0 0 1 0 12" {...line(w)} />
  </Svg>
);

/** tv.and.mediabox.fill, hierarchical: the TV is the secondary layer. */
export const TvMediabox = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <g opacity={0.5}>
      <rect x="1.2" y="3.4" width="18.6" height="12.6" rx="2.2" fill="currentColor" />
      <rect x="6.2" y="17.4" width="8.6" height="1.7" rx="0.85" fill="currentColor" />
    </g>
    <rect x="12.2" y="12.6" width="10.6" height="6.8" rx="1.7" fill="currentColor" stroke={cut} strokeWidth={1.4} />
    <circle cx="19.9" cy="16" r="0.95" fill={cut} />
  </Svg>
);
export const GameControllerFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M7.3 6.2h9.4c2.6 0 4.3 1.6 4.9 4.4l1 4.9c.4 2.1-.9 3.8-2.7 3.8-1.2 0-2-.7-2.8-1.8l-1.2-1.7H8.1l-1.2 1.7c-.8 1.1-1.6 1.8-2.8 1.8-1.8 0-3.1-1.7-2.7-3.8l1-4.9c.6-2.8 2.3-4.4 4.9-4.4z"
    />
    <path d="M7.5 9.4v3.6M5.7 11.2h3.6" stroke={cut} strokeWidth={1.4} strokeLinecap="round" />
    <circle cx="16.4" cy="10" r="0.95" fill={cut} />
    <circle cx="14.7" cy="12.1" r="0.95" fill={cut} />
  </Svg>
);
export const TvFill = (p: P) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="13" rx="2.2" fill="currentColor" />
    <rect x="7.2" y="18.6" width="9.6" height="1.7" rx="0.85" fill="currentColor" />
  </Svg>
);
export const CheckmarkSealFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <path d="m8.6 12.2 2.3 2.3 4.5-4.6" stroke={cut} strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

/* ── Settings ─────────────────────────────────────────────────────────── */

export const IphoneRadiowaves = ({ w = 1.8, ...p }: P) => (
  <Svg {...p}>
    <rect x="8.4" y="3" width="7.2" height="18" rx="1.8" {...line(w)} />
    <path d="M5.8 8.6a5 5 0 0 0 0 6.8M18.2 8.6a5 5 0 0 1 0 6.8" {...line(w)} />
    <path d="M3.2 6.4a8.6 8.6 0 0 0 0 11.2M20.8 6.4a8.6 8.6 0 0 1 0 11.2" {...line(w)} />
  </Svg>
);
export const SunMaxFill = ({ w = 2, ...p }: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4.3" fill="currentColor" />
    <path
      d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.35 5.35l1.55 1.55M17.1 17.1l1.55 1.55M5.35 18.65l1.55-1.55M17.1 6.9l1.55-1.55"
      {...line(w)}
    />
  </Svg>
);
export const Globe = ({ w = 1.6, ...p }: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" {...line(w)} />
    <ellipse cx="12" cy="12" rx="4" ry="9" {...line(w)} />
    <path d="M3 12h18M4.6 7.2h14.8M4.6 16.8h14.8" {...line(w)} />
  </Svg>
);
const docPath =
  "M6.6 2.4h6.6c.4 0 .8.2 1.1.5l4.8 4.8c.3.3.5.7.5 1.1v11.1a1.8 1.8 0 0 1-1.8 1.8H6.6a1.8 1.8 0 0 1-1.8-1.8V4.2a1.8 1.8 0 0 1 1.8-1.8z";
export const LockDocFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path fill="currentColor" d={docPath} />
    <rect x="9" y="13" width="6" height="4.6" rx="0.9" fill={cut} />
    <path d="M10.3 13v-1.4a1.7 1.7 0 0 1 3.4 0V13" stroke={cut} strokeWidth={1.3} />
  </Svg>
);
export const DocTextFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path fill="currentColor" d={docPath} />
    <path d="M8.6 11.4h6.8M8.6 14.4h6.8M8.6 17.4h4.4" stroke={cut} strokeWidth={1.3} strokeLinecap="round" />
  </Svg>
);
export const HandRaisedFill = (p: P) => (
  <Svg {...p}>
    <g fill="currentColor">
      <rect x="9.6" y="2" width="2.9" height="11" rx="1.45" />
      <rect x="12.9" y="2.8" width="2.9" height="10.4" rx="1.45" />
      <rect x="16.2" y="5.2" width="2.8" height="8.8" rx="1.4" />
      <rect x="6.3" y="4.4" width="2.9" height="10.6" rx="1.45" />
      <path d="M6.3 11.5h12.7v3.2c0 4.3-2.9 7.3-6.7 7.3-2.3 0-3.8-.9-5.1-2.4l-3.7-4.3c-.7-.8-.6-2 .2-2.6.8-.6 1.9-.5 2.6.3l1.5 1.7z" />
    </g>
  </Svg>
);

/* ── Paywall ──────────────────────────────────────────────────────────── */

export const LockShieldFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path fill="currentColor" d="M12 2.2 19.6 5v6.3c0 4.9-3.2 8.8-7.6 10.5-4.4-1.7-7.6-5.6-7.6-10.5V5z" />
    <rect x="9" y="11" width="6" height="4.8" rx="0.9" fill={cut} />
    <path d="M10.3 11V9.7a1.7 1.7 0 0 1 3.4 0V11" stroke={cut} strokeWidth={1.3} />
  </Svg>
);
export const EyeSlashFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <path fill="currentColor" d="M12 5.2c4.6 0 8 3.4 9.6 6.8-1.6 3.4-5 6.8-9.6 6.8S4 15.4 2.4 12C4 8.6 7.4 5.2 12 5.2z" />
    <circle cx="12" cy="12" r="3" fill={cut} />
    <path d="M4 3.6 20 20.4" stroke={cut} strokeWidth={3.4} strokeLinecap="round" />
    <path d="M4 3.6 20 20.4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);
export const Wifi = ({ w = 2.2, ...p }: P) => (
  <Svg {...p}>
    <path d="M2.6 9.2a13.6 13.6 0 0 1 18.8 0M5.8 12.6a9 9 0 0 1 12.4 0M9 16a4.4 4.4 0 0 1 6 0" {...line(w)} />
    <circle cx="12" cy="19.2" r="1.5" fill="currentColor" />
  </Svg>
);
export const HandPointFill = (p: P) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M8.3 2.2c1 0 1.8.8 1.8 1.8v6.2l.6-.1c.8-.1 1.6.4 1.9 1.1.5-.3 1.1-.4 1.7-.2.6.2 1 .6 1.2 1.2.6-.3 1.3-.3 1.9 0 .7.4 1.1 1.1 1.1 1.9v2.7c0 3.4-2.7 6.2-6.1 6.2h-1c-1.8 0-3.4-.8-4.5-2.2l-3.4-4.4c-.5-.7-.4-1.7.3-2.2.7-.5 1.6-.5 2.2.1l1.6 1.6V4c0-1 .8-1.8 1.8-1.8z"
    />
  </Svg>
);
export const KeyboardFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <rect x="1.6" y="5.4" width="20.8" height="13.2" rx="2.4" fill="currentColor" />
    <g fill={cut}>
      {[5, 8.3, 11.6, 14.9, 18.2].map((x) => (
        <rect key={x} x={x - 0.9} y="8.2" width="1.8" height="1.8" rx="0.4" />
      ))}
      {[6.6, 9.9, 13.2, 16.5].map((x) => (
        <rect key={x} x={x - 0.9} y="11.3" width="1.8" height="1.8" rx="0.4" />
      ))}
      <rect x="7.4" y="14.6" width="9.2" height="1.8" rx="0.6" />
    </g>
  </Svg>
);
export const Grid2x2Fill = (p: P) => (
  <Svg {...p}>
    <g fill="currentColor">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </g>
  </Svg>
);
export const StackPlayFill = ({ cut = "#000", ...p }: P) => (
  <Svg {...p}>
    <rect x="5.2" y="2.6" width="13.6" height="1.6" rx="0.8" fill="currentColor" opacity={0.7} />
    <rect x="2.4" y="5.6" width="19.2" height="15" rx="2.6" fill="currentColor" />
    <path d="M10 9.6v7l5.6-3.5z" fill={cut} />
  </Svg>
);
