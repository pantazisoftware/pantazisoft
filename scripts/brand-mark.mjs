/**
 * The PantaziSoft mark — the wave — and every style it is drawn in.
 *
 * This is the single source of the mark's geometry. The kit generator
 * (brand-kit.mjs), the lockup and social assembly (finish-brand.mjs) and the
 * artboards (whose inline SVG is pasted from `markSvg`) all draw from here, so
 * no copy of the mark can drift from the others the way the old favicons once
 * did.
 *
 * Geometry. Two half-discs of radius 35 on one horizontal line: the first
 * rises from x 0–70, the second falls from x 30–100. In the mark's own box,
 * 100 × 70, the shared line sits at y = 35. The rising half carries the main
 * colour (ink on light, white on dark); the falling half is always the accent.
 */

export const INK = "#0b0b0c";
export const LIME = "#7ccf00";
export const PAPER = "#ffffff";

/** The mark's tight box. Everything below is drawn in these units. */
export const W = 100;
export const H = 70;

export const RISE = "M0 35A35 35 0 0 1 70 35Z";
export const FALL = "M30 35H100A35 35 0 0 1 30 35Z";

/** The master: flat, two colours, no effects. */
export const solid = (main = INK, accent = LIME) =>
  `<path fill="${main}" d="${RISE}"/><path fill="${accent}" d="${FALL}"/>`;

/** A standalone SVG of the master mark in its tight 100 × 70 box. */
export const markSvg = (main = INK, accent = LIME, extra = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"${extra}>${solid(main, accent)}</svg>`;

/* ── Styles ─────────────────────────────────────────────────────────────
   Each takes the main colour (ink or white) and returns markup in the same
   100 × 70 box. Strokes are kept inside the box; the doodle filter and the
   gradient sheen may reach a unit or two past it, so style files are written
   with a small margin (see STYLE_VIEWBOX). */

let uid = 0;
const id = (p) => `${p}${++uid}`;

const softOf = (main) => (main === INK ? "rgb(11 11 12 / 0.22)" : "rgb(255 255 255 / 0.3)");

export const styles = {
  solid: (main) => solid(main),

  /** Two strengths per half: a core of radius 15, concentric with its half,
   *  so the two cores meet exactly at x = 50; around each, a soft ring that
   *  starts where the core ends. */
  duotone: (main) =>
    `<path fill="${softOf(main)}" d="M0 35A35 35 0 0 1 70 35H50A15 15 0 0 0 20 35Z"/>` +
    `<path fill="${main}" d="M20 35A15 15 0 0 1 50 35Z"/>` +
    `<path fill="${LIME}" fill-opacity=".38" d="M30 35H50A15 15 0 0 0 80 35H100A35 35 0 0 1 30 35Z"/>` +
    `<path fill="${LIME}" d="M50 35H80A15 15 0 0 1 50 35Z"/>`,

  /** One heavy stroke per half, inset so it stays inside the box. */
  outline: (main) =>
    `<g fill="none" stroke-width="6.5" stroke-linejoin="round">` +
    `<path stroke="${main}" d="M3.25 35A31.75 31.75 0 0 1 66.75 35Z"/>` +
    `<path stroke="${LIME}" d="M33.25 35H96.75A31.75 31.75 0 0 1 33.25 35Z"/></g>`,

  /** The outline alone, as a hairline. Nothing inside. */
  fineline: (main) =>
    `<g fill="none" stroke-width="1.6" stroke-linejoin="round">` +
    `<path stroke="${main}" d="M0.8 35A34.2 34.2 0 0 1 69.2 35Z"/>` +
    `<path stroke="${LIME}" d="M30.8 35H99.2A34.2 34.2 0 0 1 30.8 35Z"/></g>`,

  /** Each half with its own diagonal gradient: a neutral sheen on the main
   *  half, lime into yellow-lime on the accent. */
  gradient: (main) => {
    const g1 = id("g"), g2 = id("g");
    const [n0, n1] = main === INK ? ["#4a4a52", INK] : [PAPER, "#b9b9c1"];
    return `<defs>` +
      `<linearGradient id="${g1}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${n0}"/><stop offset="1" stop-color="${n1}"/></linearGradient>` +
      `<linearGradient id="${g2}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${LIME}"/><stop offset="1" stop-color="#d6ff4a"/></linearGradient>` +
      `</defs><path fill="url(#${g1})" d="${RISE}"/><path fill="url(#${g2})" d="${FALL}"/>`;
  },

  /** Drawn by hand: a pencil-sketched main half with loose shading, and a
   *  marker-filled accent half laid slightly off its outline. */
  doodle: (main) => {
    const f = id("rough"), c = id("clip");
    let shade = "";
    for (let k = 0; k < 6; k++) shade += `M${8 + k * 9} 34L${24 + k * 9} 7`;
    return `<defs>` +
      `<filter id="${f}" x="-10%" y="-15%" width="120%" height="130%">` +
      `<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="7"/>` +
      `<feDisplacementMap in="SourceGraphic" scale="3.2"/></filter>` +
      `<clipPath id="${c}"><path d="${RISE}"/></clipPath></defs>` +
      `<g filter="url(#${f})" stroke-linecap="round" stroke-linejoin="round">` +
      `<path fill="${LIME}" transform="translate(2.2 1.8)" d="M31 35H99A34.5 34.5 0 0 1 31 35Z"/>` +
      `<path fill="none" stroke="${main}" stroke-width="2.2" d="M30.5 35H99.5A34.5 34.5 0 0 1 30.5 35Z"/>` +
      `<path fill="none" stroke="${main}" stroke-width="2" stroke-opacity=".55" clip-path="url(#${c})" d="${shade}"/>` +
      `<path fill="none" stroke="${main}" stroke-width="3" d="M1 35A34.5 34.5 0 0 1 69 35Z"/>` +
      `<path fill="none" stroke="${main}" stroke-width="1.6" transform="translate(1.4 -1.3) rotate(-1.2 35 20)" d="M2.5 35.5A33 33 0 0 1 68 34"/>` +
      `</g>`;
  },

  /** Cross-hatched in an X mesh inside a thin outline. */
  hashed: (main) => {
    const stripes = (deg, c) => {
      const p = id("h");
      return [p, `<pattern id="${p}" patternUnits="userSpaceOnUse" width="6.5" height="6.5" patternTransform="rotate(${deg})"><rect width="1.7" height="6.5" fill="${c}"/></pattern>`];
    };
    const [a1, d1] = stripes(45, main), [a2, d2] = stripes(-45, main);
    const [l1, d3] = stripes(45, LIME), [l2, d4] = stripes(-45, LIME);
    const T = "M1 35A34 34 0 0 1 69 35Z", B = "M31 35H99A34 34 0 0 1 31 35Z";
    return `<defs>${d1}${d2}${d3}${d4}</defs>` +
      `<path fill="url(#${a1})" d="${T}"/><path fill="url(#${a2})" d="${T}"/>` +
      `<path fill="none" stroke="${main}" stroke-width="2" stroke-linejoin="round" d="${T}"/>` +
      `<path fill="url(#${l1})" d="${B}"/><path fill="url(#${l2})" d="${B}"/>` +
      `<path fill="none" stroke="${LIME}" stroke-width="2" stroke-linejoin="round" d="${B}"/>`;
  },

  /** Ordered 4 × 4 Bayer dither on a 30-column grid: solid along the wave
   *  line, thinning towards each curve. */
  dither: (main) => {
    const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    const s = 100 / 30;
    let out = "";
    for (let j = 0; j < 21; j++)
      for (let i = 0; i < 30; i++) {
        const x = (i + 0.5) * s, y = (j + 0.5) * s;
        const rise = y <= 35 && (x - 35) ** 2 + (y - 35) ** 2 <= 35 ** 2;
        const fall = y >= 35 && (x - 65) ** 2 + (y - 35) ** 2 <= 35 ** 2;
        if (!rise && !fall) continue;
        const level = 1 - 0.78 * (Math.abs(y - 35) / 35);
        if (level <= (BAYER[(j % 4) * 4 + (i % 4)] + 0.5) / 16) continue;
        out += `<rect x="${(i * s).toFixed(2)}" y="${(j * s).toFixed(2)}" width="${(s * 0.94).toFixed(2)}" height="${(s * 0.94).toFixed(2)}" fill="${rise ? main : LIME}"/>`;
      }
    return out;
  },
};

/** Style files carry a 4-unit margin so strokes, filters and sheens never clip. */
export const STYLE_VIEWBOX = `-4 -4 ${W + 8} ${H + 8}`;

/* ── Pattern ────────────────────────────────────────────────────────────
   The wave repeats as rows of half-discs alternating above and below one
   line, each row shifted by a cell, so every row reads as a running wave.
   Every half-disc sits wholly inside its own cell, so any even-sized block of
   cells tiles without a seam. */

export const halfUp = (c) => `<path fill="${c}" d="M0 50A50 50 0 0 1 100 50Z"/>`;
export const halfDown = (c) => `<path fill="${c}" d="M0 50H100A50 50 0 0 1 0 50Z"/>`;

export function rng(seed) {
  return () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/**
 * Pattern markup for a `cols` × `rows` field of `size`-unit cells. `accentRate`
 * of the falling halves take the accent colour; the rest take `main`.
 */
export function pattern({ cols, rows, size, main, accent = LIME, accentRate = 0.1, seed = 7 }) {
  const r = rng(seed);
  let out = "";
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      const up = (i + j) % 2 === 0;
      const shape = up ? halfUp(main) : halfDown(r() < accentRate ? accent : main);
      out += `<g transform="translate(${i * size} ${j * size}) scale(${size / 100})">${shape}</g>`;
    }
  return out;
}
