/**
 * Builds the animated symbols for the media kit from the mark in
 * brand-mark.mjs:
 *
 *   node scripts/brand-motion.mjs
 *
 * Writes public/brand/animated/wave-<name>-<light|dark>.svg. Each file is a
 * self-contained SVG with its animation in a <style> block, so it plays in a
 * browser, an <img> tag or a design tool that renders CSS, and loops. Every
 * animated element rests in its finished pose, and reduced motion switches
 * the animation off, so a still frame is always the plain symbol.
 *
 * The wordmark is not animated here: SVG files can't carry the brand font
 * reliably, so the logo reveal lives on the media kit page only.
 */

import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { INK, LIME, PAPER, RISE, FALL } from "./brand-mark.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "brand", "animated");

/* The mark is 100 × 70; 10 units of room on every side lets the halves move
   without touching the edge, and anything further out is clipped by the
   viewport, which is how Arrive's halves enter unseen. */
const VIEWBOX = "-10 -10 120 90";
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const OUT = "cubic-bezier(0.22, 1, 0.36, 1)";
/* The circle the initials animation starts from: the mark's 70-unit disc,
   split down its vertical diameter instead of across it. */
const LEFT = "M35 0A35 35 0 0 0 35 70Z";
const RIGHT = "M35 0A35 35 0 0 1 35 70Z";

/** name → { css, attrs?, viewBox?, body? } — `r` is the rising half, `f`
 *  the falling one; `body` replaces the default mark for motions that start
 *  from another shape. */
const motions = {
  // The halves slide in from opposite sides, meet, hold, and leave again.
  arrive: {
    css: `
      .r { animation: arrive-r 3.6s ${EASE} infinite; }
      .f { animation: arrive-f 3.6s ${EASE} infinite; }
      @keyframes arrive-r { 0% { transform: translateX(-130px); } 22%, 78% { transform: none; } 100% { transform: translateX(-130px); } }
      @keyframes arrive-f { 0% { transform: translateX(130px); } 22%, 78% { transform: none; } 100% { transform: translateX(130px); } }`,
  },
  // A slow swell: the halves rise and fall a quarter-beat apart.
  wave: {
    css: `
      .r, .f { animation: wave 2.4s ease-in-out infinite; }
      .f { animation-delay: -0.6s; }
      @keyframes wave { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-6px); } 75% { transform: translateY(6px); } }`,
  },
  // Each half opens out of the shared line, the lime one a beat later.
  unfold: {
    css: `
      .r, .f { transform-box: fill-box; }
      .r { transform-origin: 50% 100%; animation: unfold 3.2s ${OUT} infinite; }
      .f { transform-origin: 50% 0%; animation: unfold-late 3.2s ${OUT} infinite; }
      @keyframes unfold { 0% { transform: scaleY(0); } 20%, 84% { transform: none; } 96%, 100% { transform: scaleY(0); } }
      @keyframes unfold-late { 0%, 6% { transform: scaleY(0); } 26%, 84% { transform: none; } 96%, 100% { transform: scaleY(0); } }`,
  },
  // The outlines draw themselves, then fill.
  draw: {
    attrs: ` pathLength="1" stroke-width="1.6" stroke-linejoin="round"`,
    css: `
      .r, .f { stroke-dasharray: 1; animation: draw 4s ${EASE} infinite; }
      .f { animation-delay: 0.15s; }
      @keyframes draw {
        0% { stroke-dashoffset: 1; fill-opacity: 0; }
        38% { stroke-dashoffset: 0; fill-opacity: 0; }
        52%, 86% { stroke-dashoffset: 0; fill-opacity: 1; }
        100% { stroke-dashoffset: 0; fill-opacity: 0; }
      }`,
  },
  // The initials. A full circle splits down its diameter and the left half
  // drops 30 units: the ink half is the bowl of a P, the shared flat edge its
  // stem (and this P is exactly the wave mark stood upright). It holds, flips
  // into its mirror image, an S, holds, then closes back into the circle,
  // which flips home with its colours swapping sides.
  initials: {
    viewBox: "-45 -25 160 120",
    body: (main, accent) =>
      `<g class="lift"><g class="m"><path class="r" fill="${main}" d="${RIGHT}"/><path class="f" fill="${accent}" d="${LEFT}"/></g></g>`,
    css: `
      .lift { animation: ps-lift 6s ${EASE} infinite; }
      .m { transform-origin: 35px 35px; animation: ps-flip 6s ${EASE} infinite; }
      .f { animation: ps-drop 6s ${EASE} infinite; }
      @keyframes ps-drop { 0%, 10% { transform: none; } 22%, 78% { transform: translateY(30px); } 88%, 100% { transform: none; } }
      @keyframes ps-lift { 0%, 10% { transform: none; } 22%, 78% { transform: translateY(-15px); } 88%, 100% { transform: none; } }
      @keyframes ps-flip { 0%, 44% { transform: none; } 56%, 88% { transform: scaleX(-1); } 100% { transform: none; } }`,
  },
  // Half a turn, a pause, the other half: the mark is point-symmetric, so
  // it lands on itself with the colours swapped, then home again.
  spin: {
    css: `
      .m { transform-origin: 50px 35px; animation: spin 2.8s ${EASE} infinite; }
      @keyframes spin { 0%, 12% { transform: rotate(0); } 42%, 58% { transform: rotate(180deg); } 88%, 100% { transform: rotate(360deg); } }`,
  },
};

const svg = (name, { css, attrs = "", viewBox = VIEWBOX, body }, main, accent) => {
  const stroke = (c) => (attrs ? ` stroke="${c}"` : "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="480" height="360" role="img" aria-label="PantaziSoft">
<!-- PantaziSoft symbol, "${name}" animation. Generated by scripts/brand-motion.mjs; edit that, not this file. -->
<style>${css}
  @media (prefers-reduced-motion: reduce) { .lift, .m, .r, .f { animation: none !important; } }
</style>
${body ? body(main, accent) : `<g class="m"><path class="r" fill="${main}"${stroke(main)}${attrs} d="${RISE}"/><path class="f" fill="${accent}"${stroke(accent)}${attrs} d="${FALL}"/></g>`}
</svg>
`;
};

await mkdir(out, { recursive: true });
for (const [name, motion] of Object.entries(motions)) {
  for (const [tone, main] of [["light", INK], ["dark", PAPER]]) {
    const file = `wave-${name}-${tone}.svg`;
    await writeFile(join(out, file), svg(name, motion, main, LIME));
    console.log(`brand/animated/${file}`);
  }
}
