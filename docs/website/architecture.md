# Fluent Website — Architecture

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.12 |
| UI Library | React | 19.2.4 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| Linting | ESLint 9 | ^9 |
| Font (sans) | Geist (next/font/google) | — |
| Font (serif) | The Seasons fallback | — |

## Route Map

```
/
  ├── Page d'accueil
  │   ├── Hero
  │   ├── Product Preview
  │   ├── Value Proposition (light surface)
  │   ├── Features
  │   ├── Workflow
  │   ├── Privacy & Trust (light surface)
  │   ├── Compatibility
  │   ├── Download CTA
  │   └── FAQ Preview (light surface)

/download       Page de téléchargement détaillée
/faq            Questions fréquentes (toutes)
/privacy        Politique de confidentialité
/legal          Mentions légales
/release-notes  Notes de version
/not-found      Page 404 personnalisée
```

## Directory Structure

```
app/                         # Next.js App Router (pages + layouts)
├── layout.tsx               # Root layout (metadata, fonts, HTML shell)
├── page.tsx                 # Homepage (assembles all home sections)
├── not-found.tsx            # Custom 404 page
├── globals.css              # Design tokens + Tailwind v4 theme + base styles
├── download/page.tsx        # Download page
├── faq/page.tsx             # FAQ page
├── privacy/page.tsx         # Privacy policy page
├── legal/page.tsx           # Legal notices page
└── release-notes/page.tsx   # Release notes page

src/
├── app/
│   └── fonts.ts             # The Seasons font configuration (fallback)
├── components/
│   ├── layout/
│   │   ├── site-header.tsx      # Fixed nav header
│   │   ├── mobile-navigation.tsx # Full-screen mobile menu
│   │   └── site-footer.tsx      # Minimal dark footer
│   ├── home/
│   │   ├── hero-section.tsx         # Hero (logo, tagline, CTAs)
│   │   ├── product-preview.tsx      # Screenshot showcase
│   │   ├── value-section.tsx        # 3-step value prop (light)
│   │   ├── features-section.tsx     # Feature grid
│   │   ├── workflow-section.tsx      # 4-step how-it-works
│   │   ├── privacy-section.tsx      # Privacy claims (light)
│   │   ├── compatibility-section.tsx # System requirements
│   │   ├── download-cta.tsx         # Final CTA section
│   │   └── faq-preview.tsx          # FAQ preview (light)
│   ├── download/
│   │   ├── download-card.tsx        # Download button + states
│   │   ├── release-metadata.tsx     # Version metadata table
│   │   ├── installation-steps.tsx   # Install/update/uninstall guide
│   │   └── checksum-copy.tsx        # SHA-256 with copy button
│   └── ui/
│       ├── button.tsx           # Link/button with variants
│       ├── logo.tsx             # Context-aware Fluent logo
│       ├── icon.tsx             # Inline SVG icon library
│       ├── section-heading.tsx  # Editorial heading (label/title/subtitle)
│       ├── divider.tsx          # Thin section divider
│       └── reveal.tsx           # Scroll-triggered fade-up
├── config/
│   ├── site.ts              # Site name, tagline, URL, locale
│   ├── navigation.ts        # Nav items, footer links, CTA
│   ├── release.ts           # Current release info (version, URL, checksum)
│   ├── assets.ts            # Asset path mapping + logo helper
│   └── legal.ts             # Legal entity information
├── content/
│   ├── features.ts          # Feature list content
│   ├── faq.ts               # FAQ items (questions + answers)
│   └── release-notes.ts     # Release notes data
└── lib/
    └── utils.ts             # cx(), canonicalUrl(), formatDate(), currentYear()

public/
├── assets/                  # Fluent brand assets
│   ├── ico-black/           # Black ICO variants (16–256px)
│   ├── ico-white/           # White ICO variants (16–256px)
│   ├── ico-large/           # High-res PNG + ICO (520, 1024px)
│   └── example/             # App screenshots
└── manifest.webmanifest     # PWA manifest
```

## Design Decisions

- **Server Components by default:** All pages are Server Components. Only interactive UI (header scroll, mobile menu, reveal animations, copy button) uses `"use client"`.
- **No external animation library:** Scroll reveals use IntersectionObserver + CSS transitions. Zero dependencies added.
- **Centralized configuration:** Release info, navigation, assets, and site metadata are in single config files.
- **No analytics/tracking:** No third-party scripts, no cookies.
