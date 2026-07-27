# Fluent Website — Asset Inventory

## Summary

| Category | Count | Total Size |
|----------|-------|-----------|
| ICO files (black) | 5 | ~13.7 KB |
| ICO files (white) | 6 | ~28.5 KB |
| Large PNG/ICO | 8 | ~247.7 KB |
| Screenshots | 2 | ~173.4 KB |
| **Total** | **21** | **~463 KB** |

---

## ICO Black (`public/assets/ico-black/`)

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Fluent-16x16.ico | ICO | 16×16 | 0.3 KB | Yes | Favicon, small contexts |
| Fluent-32x32.ico | ICO | 32×32 | 0.7 KB | Yes | Favicon, taskbar |
| Fluent-64x64.ico | ICO | 64×64 | 1.5 KB | Yes | Desktop icon |
| Fluent-128x128.ico | ICO | 128×128 | 3.4 KB | Yes | Application icon |
| Fluent-256x256.ico | ICO | 256×256 | 7.8 KB | Yes | Large icon contexts |

**Recommended usage:** Black variant for light backgrounds. Favicon for light theme OS.

---

## ICO White (`public/assets/ico-white/`)

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Fluent-white.ico | ICO | 32×32 (multi-res) | 14.2 KB | Yes | Bundled favicon |
| Fluent-white-16x16.ico | ICO | 16×16 | 0.3 KB | Yes | Favicon small |
| Fluent-white-32x32.ico | ICO | 32×32 | 0.7 KB | Yes | **Current favicon** |
| Fluent-white-64x64.ico | ICO | 64×64 | 1.6 KB | Yes | Icon medium |
| Fluent-white-128x128.ico | ICO | 128×128 | 3.6 KB | Yes | Icon large |
| Fluent-white-256x256.ico | ICO | 256×256 | 8.1 KB | Yes | Icon x-large |

**Recommended usage:** White variant for dark backgrounds. Default favicon for dark theme.

---

## ICO Large (`public/assets/ico-large/`)

| File | Format | Dimensions | Size | Transparency | Usage |
|------|--------|-----------|------|-------------|-------|
| Fluent-white-1024x1024.png | PNG | 1024×1024 | 47.8 KB | Yes | **Hero logo** (dark bg) |
| Fluent-white-520x520.png | PNG | 520×520 | 19.8 KB | Yes | **Nav logo** (dark bg) |
| Fluent-black-1024x1024.png | PNG | 1024×1024 | 46.8 KB | Yes | Logo (light bg) |
| Fluent-black-520x520.png | PNG | 520×520 | 19.3 KB | Yes | Logo (light bg) |
| Fluent-white-1024x1024.ico | ICO | 1024×1024 | 47.8 KB | Yes | Windows app icon |
| Fluent-white-520x520.ico | ICO | 520×520 | 19.8 KB | Yes | Medium icon |
| Fluent-black-1024x1024.ico | ICO | 1024×1024 | 46.8 KB | Yes | Black variant |
| Fluent-black-520x520.ico | ICO | 520×520 | 19.3 KB | Yes | Black variant |

**Key assets for the website:**
- `Fluent-white-520x520.png` → Navigation and footer logo on dark backgrounds
- `Fluent-white-1024x1024.png` → Hero background symbol
- `Fluent-black-520x520.png` → Logo on light (paper) sections
- `Fluent-white-520x520.png` → Apple touch icon, PWA manifest

---

## Screenshots (`public/assets/example/`)

| File | Format | Dimensions | Size | Usage |
|------|--------|-----------|------|-------|
| Screenshot 2026-07-27 174908.png | PNG | 1726×1080 | 108.6 KB | **Product preview** (main interface) |
| Screenshot 2026-07-27 174921.png | PNG | 1726×1080 | 64.8 KB | Alternative screenshot |

**Notes:**
- Both are 1726×1080px — likely app screenshots.
- `174908` is larger (108 KB) → likely a richer UI view.
- `174921` is smaller (65 KB) → likely a simpler view (settings?).
- Currently using `174908` for the product preview section.
- Verify these are actual app screenshots, not brand-guide compositions.

---

## Missing Assets

| Asset | Status | Action |
|-------|--------|--------|
| The Seasons font (.woff2) | ❌ Not found | Fallback serif stack active |
| OG image (1200×630) | ❌ Not found | To generate from logo + composition |
| Favicon.ico (root app/) | ⚠️ Exists but default | Replace with Fluent white ICO |
