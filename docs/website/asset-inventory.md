# Vozel Website — Asset Inventory

Rebuilt 2026-09-04 from a real inspection of the files on disk (`sharp`
metadata + manual ICO directory/PNG-chunk parsing), not by re-labeling the
previous Fluent-era document with the new names.

## Summary

| Category | Count | Total Size |
|----------|-------|-----------|
| ICO files (black) | 5 | ~25.8 KB |
| ICO files (white) | 6 | ~54.9 KB |
| Large PNG/ICO | 8 | ~541.3 KB |
| Brand visuals (`example/`) | 2 | ~102.6 KB |
| Favicon set (`favicon/`, added 2026-09-04) | 6 | ~85.4 KB |
| **Total** | **27** | **~810.0 KB** |

---

## ICO Black (`public/assets/ico-black/`)

All icon-only (sound-wave glyph, no wordmark), transparent background,
black fill. Confirmed by extracting and viewing the embedded PNG of the
256×256 file.

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Vozel-16x16.ico | ICO | 16×16 | 0.5 KB | Yes | Favicon, small contexts |
| Vozel-32x32.ico | ICO | 32×32 | 1.2 KB | Yes | Favicon, taskbar |
| Vozel-64x64.ico | ICO | 64×64 | 2.8 KB | Yes | Desktop icon |
| Vozel-128x128.ico | ICO | 128×128 | 6.5 KB | Yes | Application icon |
| Vozel-256x256.ico | ICO | 256×256 | 14.2 KB | Yes | Large icon contexts |

**Recommended usage:** Black variant for light backgrounds.

---

## ICO White (`public/assets/ico-white/`)

Same icon-only glyph as the black set, white fill on transparent
background.

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Vozel-white.ico | ICO | multi-res: 16, 32, 64, 128, 256 | 26.3 KB | Yes | Bundled favicon — confirmed by parsing the ICO directory: it really does contain 5 embedded images (16×16 through 256×256), not a single 32×32 image as the previous version of this doc claimed. |
| Vozel-white-16x16.ico | ICO | 16×16 | 0.5 KB | Yes | Favicon small |
| Vozel-white-32x32.ico | ICO | 32×32 | 1.3 KB | Yes | **Current favicon** (`app/layout.tsx` icons.icon) |
| Vozel-white-64x64.ico | ICO | 64×64 | 3.0 KB | Yes | Icon medium |
| Vozel-white-128x128.ico | ICO | 128×128 | 6.8 KB | Yes | Icon large |
| Vozel-white-256x256.ico | ICO | 256×256 | 14.8 KB | Yes | Icon x-large |

**Recommended usage:** White variant for dark backgrounds — used as the
default favicon since the site's default surface is dark.

---

## ICO Large (`public/assets/ico-large/`)

Same icon-only glyph (no wordmark) at higher resolution. Confirmed
icon-only by opening the 1024px and 520px PNGs directly.

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Vozel-white-1024x1024.png | PNG | 1024×1024 | 100.1 KB | Yes | Hero background symbol (dark bg) |
| Vozel-white-520x520.png | PNG | 520×520 | 39.7 KB | Yes | Nav/footer logo, apple-touch-icon (dark bg) |
| Vozel-black-1024x1024.png | PNG | 1024×1024 | 97.5 KB | Yes | Logo (light bg) |
| Vozel-black-520x520.png | PNG | 520×520 | 38.8 KB | Yes | Logo (light bg) |
| Vozel-white-1024x1024.ico | ICO | 1024×1024 | 94.4 KB | Yes | Windows app icon — see note below |
| Vozel-white-520x520.ico | ICO | 520×520 | 34.1 KB | Yes | Medium icon |
| Vozel-black-1024x1024.ico | ICO | 1024×1024 | 91.9 KB | Yes | Black variant |
| Vozel-black-520x520.ico | ICO | 520×520 | 33.2 KB | Yes | Black variant |

**Note on the `.ico` files in this folder:** the classic ICO directory
header can only store an 8-bit width/height per image (0 meaning 256), so
it structurally cannot declare "1024". Parsing the directory entry for
`Vozel-white-1024x1024.ico` reports "256×256" — but decoding the PNG chunk
embedded inside confirms the actual pixel data is genuinely 1024×1024.
Modern OSes read the embedded PNG's real dimensions and ignore the legacy
header field, so this is not a bug, just a quirk of the container format.

**Key assets for the website:**
- `Vozel-white-520x520.png` → Navigation and footer logo on dark backgrounds, Apple touch icon
- `Vozel-white-1024x1024.png` → Hero background symbol
- `Vozel-black-520x520.png` → Logo on light (paper) sections

---

## Brand visuals (`public/assets/example/`)

**These are NOT application screenshots.** Opened and visually confirmed:
both are square brand lockup compositions — the icon plus the "Vozel."
wordmark, stacked vertically, generous margin — not a capture of any app
interface. There is no real screenshot of the Vozel application anywhere
in this repository.

| File | Format | Dimensions | Size | Usage |
|------|--------|-----------|------|-------|
| 1.png | PNG | 2000×2000 | 52.8 KB | Black icon + wordmark on white — brand lockup |
| 2.png | PNG | 2000×2000 | 47.4 KB | White icon + wordmark on black — used by `product-preview.tsx` as an honest "brand identity" visual (dark section) |

**Corrections from the previous version of this document:** the old
filenames (`Screenshot 2026-07-27 174908.png` / `174921.png`) no longer
exist — they were replaced by `1.png`/`2.png` as part of the Fluent→Vozel
asset swap. The old doc also listed these as 1726×1080 "likely app
screenshots"; the real, measured dimensions are 2000×2000, and they are
confirmed brand compositions, not screenshots.

---

## Missing Assets

| Asset | Status | Action |
|-------|--------|--------|
| Real app screenshot | ❌ Not found | No capture of the actual Vozel interface exists in this repo. `product-preview.tsx` uses a brand visual instead and is worded to not claim otherwise. **This is the most visible content gap on the site.** |
| The Seasons font (.woff2) | ❌ Not found | Fallback serif stack (Georgia/Times) active |
| OG image (1200×630) | ❌ Not found | Generated via `app/opengraph-image.tsx` (`next/og` `ImageResponse`) from the brand assets — see Priority 5 of the rebranding pass, 2026-09-04 |
| Favicon.ico (root `app/`) | ✅ Resolved 2026-09-04 | Replaced with the real Vozel favicon (see below). |

## Favicon set (`public/assets/favicon/`)

Added 2026-09-04, generated specifically for Vozel (confirms via
`site.webmanifest`'s `"name": "Vozel"` inside the folder). Black on
**opaque** white — deliberately not reusing the `ico-*`/`ico-large` files
above, which are white-on-*transparent* and nearly disappear in a
browser's usually-light tab bar or an Android launcher.

| File | Usage |
|------|-------|
| `favicon.ico` | Copied to `app/favicon.ico` (Next.js's auto-served root favicon) **and** referenced from `metadata.icons.icon` in `app/layout.tsx` |
| `favicon-16x16.png` / `favicon-32x32.png` | `metadata.icons.icon` |
| `apple-touch-icon.png` (180×180) | `metadata.icons.apple` |
| `android-chrome-192x192.png` / `-512x512.png` | `metadata.icons.icon` and `public/manifest.webmanifest`'s `icons` (replacing the oversized 520/1024 brand PNGs previously used there) |
| `site.webmanifest` | **Not used** — redundant with the existing, richer `public/manifest.webmanifest` (has a real description, dark theme/background color matching `--vozel-ink`, matching the site rather than the generator's default `#f3f2f2`). Left on disk, unreferenced. |
| `head-snippet.html` | Reference only (generator output); the actual wiring lives in `app/layout.tsx`'s `metadata.icons`, not a literal `<link>` tag. |
