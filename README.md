# Vozel Website

Site officiel de Vozel — application de dictée Windows avec transcription locale (Parakeet-TDT).

**Thought, in Motion.**

## Démarrage

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Lint & TypeCheck

```bash
npm run lint
```

Le build inclut automatiquement le type-check TypeScript.

## Structure

```
app/                         # Pages Next.js (App Router)
src/
├── components/              # Composants React
│   ├── layout/              # Header, Footer, MobileNav
│   ├── home/                # Sections de la page d'accueil
│   ├── download/            # Composants page téléchargement
│   └── ui/                  # UI primitives (Button, Logo, Icon…)
├── config/                  # Configuration centralisée
├── content/                 # Données de contenu (FAQ, features…)
└── lib/                     # Utilitaires partagés
public/assets/               # Ressources de marque Vozel
docs/website/                # Documentation du site
```

## Configuration de la release

Toutes les informations de téléchargement sont centralisées dans `src/config/release.ts`.

Pour activer le téléchargement :
1. Ouvrir `src/config/release.ts`
2. Passer `isAvailable` à `true`
3. Renseigner `downloadUrl`, `version`, `fileName`, etc.
4. Rebuilder le site

Voir [docs/website/download-configuration.md](docs/website/download-configuration.md).

## Police The Seasons

La police éditoriale "The Seasons" n'est pas encore incluse dans le dépôt. Un fallback élégant (Georgia, Times New Roman) est actif.

Pour l'activer :
1. Placer les fichiers `.woff2` licenciés dans `src/app/fonts/the-seasons/`
2. Décommenter la configuration `localFont` dans `src/app/fonts.ts`
3. Remplacer le fallback CSS dans `app/layout.tsx`

## Déploiement

Le projet est prêt pour un déploiement Vercel ou tout hébergeur compatible Next.js.

Configurer la variable publique :
- `NEXT_PUBLIC_SITE_URL` : URL canonique du site (défaut : `https://vozelapp.cc`)

```bash
npm run build
```

## Documentation

- [Architecture](docs/website/architecture.md)
- [Design System](docs/website/design-system.md)
- [Asset Inventory](docs/website/asset-inventory.md)
- [Content Map](docs/website/content-map.md)
- [Download Configuration](docs/website/download-configuration.md)
