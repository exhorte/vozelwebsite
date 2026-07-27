/**
 * Centralized asset mapping for Fluent brand resources.
 *
 * Every image reference in the application should go through
 * this file. Never hardcode image paths in components.
 */

const ASSETS = "/assets";

/* ---- Logos — ICO large (PNG preferred for web) ---- */
const ICO_LARGE = `${ASSETS}/ico-large`;

export const logos = {
  /** White Fluent symbol on dark backgrounds */
  white: {
    /** 1024×1024 PNG — primary web logo */
    large: `${ICO_LARGE}/Fluent-white-1024x1024.png`,
    /** 520×520 PNG — reduced size */
    medium: `${ICO_LARGE}/Fluent-white-520x520.png`,
  },
  /** Black Fluent symbol on light backgrounds */
  black: {
    /** 1024×1024 PNG — primary web logo */
    large: `${ICO_LARGE}/Fluent-black-1024x1024.png`,
    /** 520×520 PNG — reduced size */
    medium: `${ICO_LARGE}/Fluent-black-520x520.png`,
  },
} as const;

/* ---- ICO files (multi-size, for favicon and Windows) ---- */
const ICO_BLACK = `${ASSETS}/ico-black`;
const ICO_WHITE = `${ASSETS}/ico-white`;

export const icoFiles = {
  black: {
    "16": `${ICO_BLACK}/Fluent-16x16.ico`,
    "32": `${ICO_BLACK}/Fluent-32x32.ico`,
    "64": `${ICO_BLACK}/Fluent-64x64.ico`,
    "128": `${ICO_BLACK}/Fluent-128x128.ico`,
    "256": `${ICO_BLACK}/Fluent-256x256.ico`,
  },
  white: {
    "16": `${ICO_WHITE}/Fluent-white-16x16.ico`,
    "32": `${ICO_WHITE}/Fluent-white-32x32.ico`,
    "64": `${ICO_WHITE}/Fluent-white-64x64.ico`,
    "128": `${ICO_WHITE}/Fluent-white-128x128.ico`,
    "256": `${ICO_WHITE}/Fluent-white-256x256.ico`,
    bundled: `${ICO_WHITE}/Fluent-white.ico`,
  },
} as const;

/* ---- Application screenshots ---- */
const EXAMPLE = `${ASSETS}/example`;

export const screenshots = {
  /** Screenshot 1 — likely main dictation interface, 1726×1080 */
  main1: `${EXAMPLE}/Screenshot 2026-07-27 174908.png`,
  /** Screenshot 2 — likely settings or alternate view, 1726×1080 */
  main2: `${EXAMPLE}/Screenshot 2026-07-27 174921.png`,
} as const;

/* ---- Favicon (use white ICO) ---- */
export const favicon = `${ICO_WHITE}/Fluent-white-32x32.ico`;

/* ---- Context-aware logo helper ---- */

export type LogoScheme = "dark" | "light";

export function getLogo(scheme: LogoScheme, size: "medium" | "large" = "medium") {
  return scheme === "dark" ? logos.white[size] : logos.black[size];
}
