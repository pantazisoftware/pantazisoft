# PantaziSoft brand assets

Everything here is generated, never hand-edited. The sources are
`scripts/brand-artboards.html` (layouts) and `scripts/finish-brand.mjs`
(assembly) — change those and re-run rather than retouching a PNG, or the set
drifts apart the way the favicons once did.

## Logo

| File | Use |
| --- | --- |
| `pantazisoft-mark.svg` | The mark alone, ink. Light backgrounds. |
| `pantazisoft-mark-white.svg` | The mark alone, white. Dark backgrounds. |
| `pantazisoft-lockup.svg` | Mark + wordmark, ink. **Live text — needs Outfit.** |
| `pantazisoft-lockup-white.svg` | Mark + wordmark, white. **Live text — needs Outfit.** |
| `pantazisoft-lockup.png` | Mark + wordmark, ink, transparent. 1337×229. |
| `pantazisoft-lockup-white.png` | Mark + wordmark, white, transparent. 1337×229. |
| `avatar-512.png` | Square profile picture. 512×512. |

The lockup **SVGs carry the wordmark as live text**, so they only render
correctly where Outfit is installed or loaded. That is fine on the site and in a
design tool with the font; anywhere else — a client's deck, a partner's page,
print — send the PNG, or open the SVG once with Outfit available and convert
the text to outlines.

The mark SVGs have no text and are safe everywhere.

## Social

| File | Platform | Size |
| --- | --- | --- |
| `x-header-1500x500.png` | X header | 1500×500 |
| `facebook-cover-1640x624.png` | Facebook page cover | 1640×624 |
| `linkedin-cover-1128x376.png` | LinkedIn page cover | 1128×376 |
| `post-landscape-1200x630.png` | Facebook / LinkedIn / X post | 1200×630 |
| `post-square-1080x1080.png` | Instagram / Facebook post | 1080×1080 |
| `story-1080x1920.png` | Instagram / Facebook story | 1080×1920 |

Safe areas the layouts already account for:

- **X header** — the avatar overlaps the lower left, so the content sits centred
  and high and nothing lands in that corner.
- **Facebook cover** — desktop shows the full width, mobile crops toward the
  centre, so nothing that has to be read sits near the left or right edge.
- **Story** — the top and bottom ~250px are where the platform puts its own
  chrome; the artwork keeps clear of both.

## Colour

| Token | Hex | Where |
| --- | --- | --- |
| Ink | `#0b0b0c` | Type and the mark on light |
| Lime | `#7ccf00` | The single accent — one per composition |
| Body | `#46464d` | Supporting copy on light |
| Line | `#e4e4e0` | Rules and cell dividers |

Lime is an accent, not a colour scheme: one lime element per layout, and never
as text on white — it fails contrast. Where lime has to carry words, use
`#45700c`.

## Regenerating

`scripts/brand-artboards.html` holds each layout at its true pixel size. Serve
it, open `?a=<name>&ox=&oy=&tw=&th=` to park one tile at the origin at 1:1,
capture each tile, then:

```
node scripts/finish-brand.mjs <tiles-dir>
```

Tiles are captured slightly larger than they finish, so every asset resamples
*down* into place and nothing is ever upscaled. This is a browser capture rather
than a build step because the layouts use live Outfit and Inter, and sharp's SVG
renderer goes through CoreText on macOS — it only sees fonts installed
system-wide. Install Outfit and Inter locally and this could move to sharp
entirely.
