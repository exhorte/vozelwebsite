/**
 * Site-wide configuration.
 *
 * Centralizing these values avoids duplication across layouts,
 * metadata, footer, and structured data.
 */

export const siteConfig = {
  name: "Vozel",
  tagline: "Thought, in Motion.",
  description:
    "Vozel turns your voice into text directly inside your Windows apps, with local transcription and an experience designed to keep you in your flow.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vozelapp.cc",
  locale: "en",
  titleTemplate: "%s — Vozel",
} as const;

export type SiteConfig = typeof siteConfig;
