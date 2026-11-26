/**
 * Assembles public/brand/ from the tiles captured off scripts/brand-artboards.html.
 *
 *   node scripts/finish-brand.mjs <tiles-dir>
 *
 * Tiles are named <asset>-<index>.png and are captured at 1:1 with the final
 * asset, slightly supersampled. Each one is resampled down to its exact tile
 * size and composited into the full canvas, so every asset lands at its true
 * dimensions without a single pixel of upscaling.
 *
 * The lockups are the interesting part. A browser screenshot is always
 * composited against something, so it cannot hand back a transparent
 * background — which is precisely what a logo asset needs. Instead the wordmark
 * is captured as white on black and used as an alpha mask: solid text on a
 * solid ground means luminance is exactly the coverage value, so it recolours
 * to any ink while keeping its antialiasing intact. The mark beside it is
 * rasterised straight from the SVG, so it stays vector-sharp.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { markSvg as wave, solid, W as MARK_W, H as MARK_H } from "./brand-mark.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "brand");
const tilesDir = process.argv[2];
if (!tilesDir) {
  console.error("usage: node scripts/finish-brand.mjs <tiles-dir>");
  process.exit(1);
}

const LIME = "#7ccf00";
const INK = "#0b0b0c";

/** asset -> { w, h, tiles: [{ ox, oy, tw, th }] } */
const ASSETS = {
  "x-header-1500x500": {
    w: 1500, h: 500, src: "x-header",
    tiles: [{ ox: 0, oy: 0, tw: 750, th: 500 }, { ox: 750, oy: 0, tw: 750, th: 500 }],
  },
  "facebook-cover-1640x624": {
    w: 1640, h: 624, src: "facebook-cover",
    tiles: [{ ox: 0, oy: 0, tw: 820, th: 624 }, { ox: 820, oy: 0, tw: 820, th: 624 }],
  },
  "linkedin-cover-1128x376": {
    w: 1128, h: 376, src: "linkedin-cover",
    tiles: [{ ox: 0, oy: 0, tw: 1128, th: 376 }],
  },
  "post-landscape-1200x630": {
    w: 1200, h: 630, src: "post-landscape",
    tiles: [{ ox: 0, oy: 0, tw: 1200, th: 630 }],
  },
  "post-square-1080x1080": {
    w: 1080, h: 1080, src: "post-square",
    tiles: [{ ox: 0, oy: 0, tw: 1080, th: 540 }, { ox: 0, oy: 540, tw: 1080, th: 540 }],
  },
  "story-1080x1920": {
    w: 1080, h: 1920, src: "story",
    tiles: [
      { ox: 0, oy: 0, tw: 1080, th: 640 },
      { ox: 0, oy: 640, tw: 1080, th: 640 },
      { ox: 0, oy: 1280, tw: 1080, th: 640 },
    ],
  },
};

/** The mark, as vector, in whichever ink the surface needs. Drawn from
 *  brand-mark.mjs, the mark's one source. */
const markSvg = (fill) => wave(fill, LIME);

/* The lockup's proportions, as fractions of the wordmark's font size. The
   wave is wide, not tall, so it is sized to the wordmark's cap height rather
   than its full height: 0.655 of the font size tall, centred on the caps, with
   a 0.3 gap. The artboards use the same ratios, so every lockup matches. */
const MARK_HEIGHT = 0.655;
const GAP = 0.3;

/** Horizontal lockup as live text — for design tools that have Outfit. */
const lockupSvg = (fill) => {
  const font = 168, mh = font * MARK_HEIGHT, mw = mh * (MARK_W / MARK_H);
  const baseline = 163, capTop = baseline - font * 0.7;
  const y = (capTop + baseline) / 2 - mh / 2, textX = mw + font * GAP;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.ceil(textX + 945)} 240" width="${Math.ceil(textX + 945)}" height="240">
  <!-- Wordmark is live text: it needs Outfit present to render correctly. Use
       the PNG, or convert this to outlines, anywhere that cannot guarantee it. -->
  <g transform="translate(0 ${y.toFixed(2)}) scale(${(mh / MARK_H).toFixed(4)})">${solid(fill, LIME)}</g>
  <text x="${textX.toFixed(1)}" y="${baseline}" fill="${fill}" font-family="Outfit, ui-sans-serif, system-ui, sans-serif"
        font-size="${font}" font-weight="600" letter-spacing="-3.7">PantaziSoft</text>
</svg>`;
};

const hex = (h) => ({
  r: parseInt(h.slice(1, 3), 16),
  g: parseInt(h.slice(3, 5), 16),
  b: parseInt(h.slice(5, 7), 16),
});

/** Stitch an asset's tiles into one exact-size image buffer. */
async function stitch({ w, h, src, tiles }) {
  const layers = [];
  for (const [i, t] of tiles.entries()) {
    const buf = await sharp(join(tilesDir, `${src}-${i}.png`))
      .resize(t.tw, t.th, { fit: "fill", kernel: "lanczos3" })
      .toBuffer();
    layers.push({ input: buf, left: t.ox, top: t.oy });
  }
  return sharp({ create: { width: w, height: h, channels: 3, background: "#ffffff" } })
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Tight bounding box of everything brighter than `cut` in a greyscale buffer. */
function bbox(data, width, height, cut = 8) {
  let x0 = width, y0 = height, x1 = -1, y1 = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[y * width + x] > cut) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

async function buildLockups() {
  // Rebuild the wordmark plate, then read its luminance as coverage.
  const plate = await stitch({ w: 1200, h: 300, src: "wordmark", tiles: [
    { ox: 0, oy: 0, tw: 1200, th: 300 },
  ]});
  const grey = sharp(plate).greyscale();
  const { data, info } = await grey.raw().toBuffer({ resolveWithObject: true });
  const box = bbox(data, info.width, info.height);
  const maskRaw = await sharp(plate).greyscale().extract(box).raw().toBuffer();

  // Same ratios as lockupSvg and the artboards (MARK_HEIGHT, GAP).
  const FONT = 220;
  const markH = Math.round(FONT * MARK_HEIGHT);
  const markW = Math.round(markH * (MARK_W / MARK_H));
  const gap = Math.round(FONT * GAP);
  const H = Math.max(markH, box.height);
  const W = markW + gap + box.width;

  for (const [name, fill] of [["", INK], ["-white", "#ffffff"]]) {
    const { r, g, b } = hex(fill);
    const solid = await sharp({
      create: { width: box.width, height: box.height, channels: 3, background: { r, g, b } },
    }).raw().toBuffer();
    const word = await sharp(solid, { raw: { width: box.width, height: box.height, channels: 3 } })
      .joinChannel(maskRaw, { raw: { width: box.width, height: box.height, channels: 1 } })
      .png().toBuffer();
    const mark = await sharp(Buffer.from(markSvg(fill)))
      .resize(markW, markH).png().toBuffer();

    await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([
        { input: mark, left: 0, top: Math.round((H - markH) / 2) },
        { input: word, left: markW + gap, top: Math.round((H - box.height) / 2) },
      ])
      .png({ compressionLevel: 9 })
      .toFile(join(outDir, `pantazisoft-lockup${name}.png`));
    console.log(`pantazisoft-lockup${name}.png`.padEnd(34), `${W}x${H}`);
  }
}

await mkdir(outDir, { recursive: true });

// Vector marks and lockups.
for (const [file, body] of [
  ["pantazisoft-mark.svg", markSvg(INK)],
  ["pantazisoft-mark-white.svg", markSvg("#ffffff")],
  ["pantazisoft-lockup.svg", lockupSvg(INK)],
  ["pantazisoft-lockup-white.svg", lockupSvg("#ffffff")],
]) {
  await writeFile(join(outDir, file), body + "\n");
  console.log(file.padEnd(34), "vector");
}

// Square avatar, straight off the icon artwork.
await sharp(await readFile(join(root, "public", "logo-icon.svg")))
  .resize(512, 512).flatten({ background: INK }).png({ compressionLevel: 9 })
  .toFile(join(outDir, "avatar-512.png"));
console.log("avatar-512.png".padEnd(34), "512x512");

await buildLockups();

for (const [name, spec] of Object.entries(ASSETS)) {
  await writeFile(join(outDir, `${name}.png`), await stitch(spec));
  console.log(`${name}.png`.padEnd(34), `${spec.w}x${spec.h}`);
}
