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
    "Vozel transforme votre voix en texte directement dans vos applications Windows, avec une transcription locale et une expérience conçue pour rester dans votre flux de travail.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vozelapp.cc",
  locale: "fr",
  titleTemplate: "%s — Vozel",
} as const;

export type SiteConfig = typeof siteConfig;
