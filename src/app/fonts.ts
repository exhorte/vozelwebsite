// import localFont from "next/font/local";

/**
 * The Seasons — Vozel's editorial brand typeface.
 *
 * Used for: titles, large numbers, slogans, pull quotes,
 * and editorial elements throughout the site.
 *
 * STATUS: Font files are NOT currently available in the repository.
 * A fallback serif stack is used until licensed WOFF2 files are added.
 *
 * To activate The Seasons:
 * 1. Place the licensed .woff2 files in src/app/fonts/the-seasons/
 * 2. Uncomment the localFont configuration below
 * 3. Update the paths and weight/style declarations to match
 *    the actual files you have
 *
 * Expected files (example):
 *   src/app/fonts/the-seasons/TheSeasons-Regular.woff2
 *   src/app/fonts/the-seasons/TheSeasons-Italic.woff2
 *   src/app/fonts/the-seasons/TheSeasons-Bold.woff2
 */

/*
const theSeasons = localFont({
  src: [
    {
      path: "./fonts/the-seasons/TheSeasons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/the-seasons/TheSeasons-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/the-seasons/TheSeasons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-the-seasons",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
*/

/**
 * Fallback serif variable.
 *
 * When The Seasons files are available, replace this with the
 * variable export from the localFont config above and remove
 * the hardcoded CSS variable fallback from the layout.
 */
const theSeasonsVariable = "--font-the-seasons";

/**
 * CSS fallback for The Seasons.
 *
 * This is applied as the default `--font-the-seasons` value
 * so Tailwind's `font-serif` utility degrades gracefully.
 */
export const fontSerifFallback =
  "Georgia, 'Times New Roman', Times, serif";

export { theSeasonsVariable };
