# Vozel Website — Design System

## Direction Artistique

Inspirée du guide de marque Vozel :
- Fond noir ou presque noir (`#101010`)
- Surfaces blanc cassé / papier (`#f4f1ec`)
- Palette majoritairement monochrome
- Logo blanc sur fond sombre, noir sur fond clair
- Grandes zones vides, rythme vertical généreux
- Typographie éditoriale élégante
- Compositions centrées, cartes sobres
- Esthétique premium, calme et précise

## Color Tokens

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--vozel-ink` | `#101010` | Fond principal sombre |
| `--vozel-surface` | `#1b1b1b` | Surface secondaire sombre |
| `--vozel-surface-elevated` | `#222222` | Cartes, conteneurs surélevés |
| `--vozel-paper` | `#f4f1ec` | Fond clair (sections alternées) |
| `--vozel-paper-dim` | `#e8e5df` | Fond clair atténué |
| `--vozel-white` | `#ffffff` | Texte principal sur fond sombre |

### Muted & Borders

| Token | Hex | Usage |
|-------|-----|-------|
| `--vozel-muted-dark` | `#8a8882` | Texte secondaire sur fond sombre |
| `--vozel-muted-light` | `#6b6862` | Texte secondaire sur fond clair |
| `--vozel-border-dark` | `rgba(255,255,255,0.08)` | Séparateurs fond sombre |
| `--vozel-border-light` | `rgba(16,16,16,0.10)` | Séparateurs fond clair |

### Functional

| Token | Hex | Usage |
|-------|-----|-------|
| `--vozel-focus` | `#4a90d9` | Anneau de focus clavier |
| `--vozel-error` | `#d94a4a` | États d'erreur |
| `--vozel-success` | `#4a9d5b` | Confirmations |
| `--vozel-disabled` | `rgba(255,255,255,0.25)` | Éléments désactivés |

## Typography

### The Seasons (serif) — `--font-the-seasons`

**Statut :** ❌ Fichiers de police non disponibles. Fallback actif.

**Usage prévu :** Titres, grands chiffres, slogans, citations, éléments éditoriaux.

**Fallback CSS :** `Georgia, 'Times New Roman', Times, serif`

**Pour activer :** Placer les fichiers `.woff2` dans `src/app/fonts/the-seasons/` et décommenter la configuration dans `src/app/fonts.ts`.

### Geist Sans — `--font-geist-sans`

**Usage :** Navigation, boutons, paragraphes, labels, formulaires, texte technique.

### Geist Mono — `--font-geist-mono`

**Usage :** Checksums, code, données techniques.

## Typography Scale

| Token | Size |
|-------|------|
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.8125rem` |
| `--text-base` | `0.9375rem` |
| `--text-lg` | `1.0625rem` |
| `--text-xl` | `1.25rem` |
| `--text-2xl` | `1.5rem` |
| `--text-3xl` | `2rem` |
| `--text-4xl` | `2.75rem` |
| `--text-5xl` | `3.75rem` |
| `--text-6xl` | `5rem` |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--section-gap` | `clamp(4rem, 10vw, 8rem)` | Espacement inter-sections |
| `--content-max` | `72rem` (1152px) | Largeur max contenu large |
| `--content-narrow` | `48rem` (768px) | Largeur max contenu étroit |
| `--nav-height` | `3.5rem` (56px) | Hauteur de navigation |

## Radii

| Token | Value |
|-------|-------|
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-full` | `9999px` |

## Transitions

| Token | Value |
|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.19, 1, 0.22, 1)` |
| `--duration-fast` | `150ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `600ms` |
