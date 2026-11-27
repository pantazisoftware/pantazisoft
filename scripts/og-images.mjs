/**
 * Captures the Open Graph cards (views/og-card.tsx) into PNGs with headless
 * Chrome. The cards are served by the dev server only, so start it first:
 *
 *   npx next dev -p 3002
 *   npm run og                 # every card, both languages
 *   npm run og -- memo home    # just these
 *
 * Writes public/og/<locale>/<card>.png at 1200×630, and copies the English
 * home card to public/og-image.png, the default for pages without their own.
 */

import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ORIGIN = process.env.OG_ORIGIN ?? "http://localhost:3002";

// Keep in step with OG_CARDS in views/og-card.tsx.
const CARDS = [
  "home",
  "services",
  "media-kit",
  "mvp-development",
  "custom-applications",
  "mobile-app-development",
  "ai-integration",
  "fabricator-pro",
  "remoto",
  "feedfast",
  "bookify",
  "webscore",
  "gdprfix",
  "memo",
];

const only = process.argv.slice(2);

for (const locale of ["en", "ro"]) {
  const dir = join(root, "public", "og", locale);
  mkdirSync(dir, { recursive: true });
  for (const card of CARDS) {
    if (only.length && !only.includes(card)) continue;
    const file = join(dir, `${card}.png`);
    execFileSync(CHROME, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--virtual-time-budget=15000",
      "--window-size=1200,630",
      `--screenshot=${file}`,
      `${ORIGIN}/og/${locale}/${card}`,
    ], { stdio: "ignore" });
    console.log(`og/${locale}/${card}.png`);
  }
}

if (!only.length || only.includes("home")) {
  copyFileSync(join(root, "public/og/en/home.png"), join(root, "public/og-image.png"));
  console.log("og-image.png (from og/en/home.png)");
}
