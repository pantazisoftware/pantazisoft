import type { CSSProperties } from "react";

/**
 * Four small plates, one per step of the engagement.
 *
 * Each is the same 80×80 boxy vocabulary as the hero — 1px strokes, square
 * corners, flat fills — with one element carrying the idea of the step in
 * motion: a scanning crosshair, cells filling in, blocks assembling, a payload
 * leaving the frame. They are decorative, so they carry no accessible name; the
 * step's own heading does that work.
 */

const v = (vars: Record<string, string>) => vars as CSSProperties;

const frame = (
  <>
    <rect x="1" y="1" width="78" height="78" fill="#fbfbfa" stroke="#e4e4e0" />
    <g stroke="#0b0b0c" strokeWidth="1.5">
      <path d="M1 11 L1 1 L11 1" />
      <path d="M69 1 L79 1 L79 11" />
      <path d="M79 69 L79 79 L69 79" />
      <path d="M11 79 L1 79 L1 69" />
    </g>
  </>
);

function Plate({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      aria-hidden="true"
    >
      {frame}
      {children}
    </svg>
  );
}

/** Scope — a crosshair sweeps the plate looking for the shape of the problem. */
export function GlyphScope() {
  return (
    <Plate>
      <rect x="18" y="18" width="44" height="44" stroke="#d0d0ca" strokeDasharray="4 4" />
      <g style={{ animation: "drift 5s ease-in-out infinite", ...v({ "--dx": "16px", "--dy": "14px" }) }}>
        <path d="M24 32 L24 24 L32 24" stroke="#0b0b0c" strokeWidth="1.75" />
        <path d="M24 32 L24 24 L32 24" stroke="#0b0b0c" strokeWidth="1.75" transform="rotate(180 28 28)" />
        <rect x="26" y="26" width="5" height="5" fill="#7ccf00" />
      </g>
      <rect x="18" y="18" width="44" height="3" fill="#7ccf00" opacity="0.6" style={{ animation: "scan 4s linear infinite" }} />
    </Plate>
  );
}

/** Design — the grid resolves cell by cell. */
export function GlyphDesign() {
  const cells = [
    [20, 20],
    [42, 20],
    [20, 42],
    [42, 42],
  ];
  return (
    <Plate>
      {cells.map(([x, y], i) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="18"
          height="18"
          fill={i === 1 ? "#7ccf00" : "#0b0b0c"}
          style={{
            transformOrigin: `${x + 9}px ${y + 9}px`,
            animation: `bar-rise 3.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.22}s infinite`,
          }}
        />
      ))}
      <line x1="40" y1="14" x2="40" y2="66" stroke="#e4e4e0" />
      <line x1="14" y1="40" x2="66" y2="40" stroke="#e4e4e0" />
    </Plate>
  );
}

/** Build — blocks stack up from the baseline, one after another. */
export function GlyphBuild() {
  const bars = [
    { x: 18, h: 16 },
    { x: 33, h: 28 },
    { x: 48, h: 40 },
  ];
  return (
    <Plate>
      <line x1="14" y1="62" x2="66" y2="62" stroke="#0b0b0c" strokeWidth="1.5" />
      {bars.map((bar, i) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={62 - bar.h}
          width="14"
          height={bar.h}
          fill={i === 2 ? "#7ccf00" : "#0b0b0c"}
          style={{
            transformOrigin: `${bar.x + 7}px 62px`,
            animation: `bar-rise 3.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.24}s infinite`,
          }}
        />
      ))}
    </Plate>
  );
}

/** Ship — a payload clears the frame and the dashes keep running. */
export function GlyphShip() {
  return (
    <Plate>
      <path
        d="M14 40 L66 40"
        stroke="#d0d0ca"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        style={{ animation: "dash-run 1.4s linear infinite" }}
      />
      <rect x="16" y="30" width="20" height="20" stroke="#e4e4e0" fill="#f2f2f0" />
      <g style={{ animation: "drift 3.4s ease-in-out infinite", ...v({ "--dx": "22px", "--dy": "-6px" }) }}>
        <rect x="30" y="30" width="20" height="20" fill="#0b0b0c" />
        <rect x="35" y="35" width="10" height="10" fill="#7ccf00" />
      </g>
      <path d="M62 34 L68 40 L62 46" stroke="#0b0b0c" strokeWidth="1.75" fill="none" />
    </Plate>
  );
}

export const processGlyphs = [GlyphScope, GlyphDesign, GlyphBuild, GlyphShip];
