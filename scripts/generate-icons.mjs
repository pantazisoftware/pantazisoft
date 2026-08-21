/**
 * Rasterises the whole icon set from public/logo-icon.svg.
 *
 *   npm run icons
 *
 * The PNGs used to be the only copy of the icon artwork, which is how they came
 * to carry the seams of a logo that had since been redrawn. Everything here is
 * derived, so the SVG stays the single source of truth and the set can never
 * drift from it again.
 *
 * Uses sharp, which Next already depends on for image optimisation — nothing to
 * install.
 */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const source = join(publicDir, "logo-icon.svg");

/** Standalone PNGs, as referenced by app/layout.tsx, the manifest and browserconfig. */
const pngs = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "favicon-96x96.png", size: 96 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "mstile-150x150.png", size: 150 },
  { file: "android-chrome-192x192.png", size: 192 },
  { file: "android-chrome-512x512.png", size: 512 },
];

/** Sizes packed into favicon.ico, matching what the previous file carried. */
const icoSizes = [16, 32, 48];

/**
 * The SVG is rasterised once, large, and then downsampled per size. Letting
 * librsvg re-render at each tiny size gives noticeably rougher edges on
 * geometry this angular than one good Lanczos reduction does.
 */
const MASTER = 1024;

async function master(svg) {
  return sharp(svg, { density: 384 })
    .resize(MASTER, MASTER, { fit: "fill" })
    .png()
    .toBuffer();
}

function render(buf, size) {
  return sharp(buf).resize(size, size, { kernel: "lanczos3" });
}

/**
 * One BITMAPINFOHEADER + bottom-up BGRA bitmap + empty AND mask, which is the
 * classic ICO payload. PNG payloads would be smaller, but BMP is what the
 * previous favicon.ico used and it is the form every consumer understands —
 * including the ones that are not browsers.
 */
function bmpPayload(rgba, size) {
  const stride = size * 4;
  const xor = Buffer.alloc(size * stride);

  for (let y = 0; y < size; y++) {
    // ICO bitmaps are stored bottom-up.
    const srcRow = (size - 1 - y) * stride;
    const dstRow = y * stride;
    for (let x = 0; x < size; x++) {
      const s = srcRow + x * 4;
      const d = dstRow + x * 4;
      xor[d] = rgba[s + 2]; // B
      xor[d + 1] = rgba[s + 1]; // G
      xor[d + 2] = rgba[s]; // R
      xor[d + 3] = rgba[s + 3]; // A
    }
  }

  // The 1bpp AND mask is vestigial for 32-bit icons — the alpha channel already
  // carries transparency — but the header still has to account for its rows,
  // each padded to a 4-byte boundary.
  const maskStride = Math.ceil(size / 32) * 4;
  const and = Buffer.alloc(size * maskStride, 0);

  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); // header size
  header.writeInt32LE(size, 4); // width
  header.writeInt32LE(size * 2, 8); // height: XOR bitmap plus AND mask
  header.writeUInt16LE(1, 12); // colour planes
  header.writeUInt16LE(32, 14); // bits per pixel
  header.writeUInt32LE(0, 16); // BI_RGB, uncompressed
  header.writeUInt32LE(xor.length + and.length, 20); // image size

  return Buffer.concat([header, xor, and]);
}

function buildIco(payloads) {
  const dir = Buffer.alloc(6);
  dir.writeUInt16LE(0, 0); // reserved
  dir.writeUInt16LE(1, 2); // type: icon
  dir.writeUInt16LE(payloads.length, 4);

  const entries = [];
  let offset = 6 + payloads.length * 16;

  for (const { size, data } of payloads) {
    const entry = Buffer.alloc(16);
    entry[0] = size === 256 ? 0 : size; // 0 encodes 256
    entry[1] = size === 256 ? 0 : size;
    entry[2] = 0; // palette size
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([dir, ...entries, ...payloads.map((p) => p.data)]);
}

const svg = await readFile(source);
const base = await master(svg);

for (const { file, size } of pngs) {
  // Icons composite onto opaque backgrounds (iOS flattens onto white, Windows
  // onto the tile colour), and this artwork is opaque edge to edge anyway, so
  // the alpha channel is dropped rather than left to be resolved downstream.
  const out = await render(base, size).flatten({ background: "#0b0b0c" }).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(join(publicDir, file), out);
  console.log(`${file.padEnd(28)} ${size}x${size}  ${out.length} bytes`);
}

const payloads = [];
for (const size of icoSizes) {
  const rgba = await render(base, size).ensureAlpha().raw().toBuffer();
  payloads.push({ size, data: bmpPayload(rgba, size) });
}
const ico = buildIco(payloads);
await writeFile(join(publicDir, "favicon.ico"), ico);
console.log(`${"favicon.ico".padEnd(28)} ${icoSizes.join(", ")}  ${ico.length} bytes`);
