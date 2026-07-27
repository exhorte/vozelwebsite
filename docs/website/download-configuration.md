# Fluent Website — Download Configuration

## Centralized release config

All download information is in a single file:

**`src/config/release.ts`**

```typescript
export const currentRelease: ReleaseInfo = {
  version: "",
  channel: "preview",
  publishedAt: "",
  downloadUrl: "",
  fileName: "",
  fileSize: "",
  architecture: "x64",
  minimumWindowsVersion: "Windows 10 (version 21H2 ou ultérieure)",
  sha256: "",
  releaseNotesUrl: "/release-notes",
  isAvailable: false,
};
```

## Download button states

| State | Condition | Button behavior |
|-------|-----------|----------------|
| **Coming Soon** | `isAvailable: false` | Disabled, "Bientôt disponible" |
| **Available** | `isAvailable: true` + valid `downloadUrl` | Active download link |
| **Deprecated** | Future use | Warning with link to new version |

## How to activate downloads

1. Open `src/config/release.ts`
2. Set `isAvailable: true`
3. Fill in all fields: `version`, `downloadUrl`, `fileName`, `fileSize`, `publishedAt`, `sha256` (optional)
4. Rebuild the site

The site automatically updates everywhere:
- Hero CTA button
- Download CTA section on homepage
- `/download` page (card, metadata, checksum)
- Structured data (Schema.org `SoftwareApplication`)

## Where the download URL is consumed

| Location | File |
|----------|------|
| Hero primary button | `src/components/home/hero-section.tsx` |
| Homepage download CTA | `src/components/home/download-cta.tsx` |
| Download page card | `src/components/download/download-card.tsx` |
| Download page metadata | `src/components/download/release-metadata.tsx` |
| Checksum display | `src/components/download/checksum-copy.tsx` |

## URL validation

The download URL is used directly as the `href` of a link/button:
- Only `https://` URLs should be used
- No `javascript:` URLs
- Links to external release hosting (GitHub Releases, CDN, etc.)

## File hosting recommendations

| Option | Cost | Suitable for |
|--------|------|-------------|
| GitHub Releases | Free | Open-source distribution |
| Vercel Blob | Pay-as-you-go | Vercel-deployed sites |
| Custom CDN | Variable | Production distribution |

The `.exe` installer should NOT be committed to the Git repository.
