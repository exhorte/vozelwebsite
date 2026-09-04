/**
 * Centralized asset mapping for Vozel brand resources.
 *
 * Every image reference in the application should go through
 * this file. Never hardcode image paths in components.
 */

const ASSETS = "/assets";

/* ---- Logos — ICO large (PNG preferred for web) ---- */
const ICO_LARGE = `${ASSETS}/ico-large`;

export const logos = {
  /** White Vozel symbol on dark backgrounds */
  white: {
    /** 1024×1024 PNG — primary web logo */
    large: `${ICO_LARGE}/Vozel-white-1024x1024.png`,
    /** 520×520 PNG — reduced size */
    medium: `${ICO_LARGE}/Vozel-white-520x520.png`,
  },
  /** Black Vozel symbol on light backgrounds */
  black: {
    /** 1024×1024 PNG — primary web logo */
    large: `${ICO_LARGE}/Vozel-black-1024x1024.png`,
    /** 520×520 PNG — reduced size */
    medium: `${ICO_LARGE}/Vozel-black-520x520.png`,
  },
} as const;

/* ---- ICO files (multi-size, for favicon and Windows) ---- */
const ICO_BLACK = `${ASSETS}/ico-black`;
const ICO_WHITE = `${ASSETS}/ico-white`;

export const icoFiles = {
  black: {
    "16": `${ICO_BLACK}/Vozel-16x16.ico`,
    "32": `${ICO_BLACK}/Vozel-32x32.ico`,
    "64": `${ICO_BLACK}/Vozel-64x64.ico`,
    "128": `${ICO_BLACK}/Vozel-128x128.ico`,
    "256": `${ICO_BLACK}/Vozel-256x256.ico`,
  },
  white: {
    "16": `${ICO_WHITE}/Vozel-white-16x16.ico`,
    "32": `${ICO_WHITE}/Vozel-white-32x32.ico`,
    "64": `${ICO_WHITE}/Vozel-white-64x64.ico`,
    "128": `${ICO_WHITE}/Vozel-white-128x128.ico`,
    "256": `${ICO_WHITE}/Vozel-white-256x256.ico`,
    bundled: `${ICO_WHITE}/Vozel-white.ico`,
  },
} as const;

/* ---- Brand visuals (NOT application screenshots) ----
 * `public/assets/example/1.png` and `2.png` are 2000×2000 brand lockup
 * compositions — the icon + the "Vozel." wordmark, on white and on black
 * respectively. They are not captures of the app interface; no real
 * screenshot of the app exists in this repository yet. See
 * `product-preview.tsx`, which uses these only as an editorial brand
 * visual, never captioned as "the interface". */
const EXAMPLE = `${ASSETS}/example`;

export const brandVisuals = {
  /** Icon + "Vozel." wordmark, black on white, 2000×2000 */
  lockupOnLight: `${EXAMPLE}/1.png`,
  /** Icon + "Vozel." wordmark, white on black, 2000×2000 */
  lockupOnDark: `${EXAMPLE}/2.png`,
} as const;

/* ---- Favicon set (public/assets/favicon/) ----
 * Dedicated, purpose-generated favicon files — black on opaque white,
 * unlike the brand ico-black/ico-white/ico-large files above (white on
 * transparent, which nearly disappears in a browser's usually-light tab
 * bar). This is what `app/layout.tsx`'s `metadata.icons` and
 * `public/manifest.webmanifest` actually reference; `app/favicon.ico`
 * (Next.js's auto-served root file) is a byte-for-byte copy of
 * `favicon.ico` below. */
const FAVICON = `${ASSETS}/favicon`;

export const favicon = {
  ico: `${FAVICON}/favicon.ico`,
  png16: `${FAVICON}/favicon-16x16.png`,
  png32: `${FAVICON}/favicon-32x32.png`,
  appleTouchIcon: `${FAVICON}/apple-touch-icon.png`,
  androidChrome192: `${FAVICON}/android-chrome-192x192.png`,
  androidChrome512: `${FAVICON}/android-chrome-512x512.png`,
} as const;

/* ---- Context-aware logo helper ---- */

export type LogoScheme = "dark" | "light";

export function getLogo(scheme: LogoScheme, size: "medium" | "large" = "medium") {
  return scheme === "dark" ? logos.white[size] : logos.black[size];
}
