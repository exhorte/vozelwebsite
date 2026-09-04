import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/src/config/site";

/**
 * OG image (Priority 5 of the Fluent→Vozel rebranding pass, 2026-09-04).
 *
 * `/og-image.png` was referenced by `app/layout.tsx` but absent from the
 * repo. Rather than a hand-designed static file, this generates the image
 * from real brand assets at build time via `next/og`'s `ImageResponse` —
 * the icon (`ico-large/Vozel-white-1024x1024.png`, icon-only, no
 * duplicated wordmark) plus the site name and tagline, on the
 * `--vozel-ink` background. Simple composition on purpose, matching the
 * rest of the site rather than an elaborate one-off design.
 */
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconPath = join(
    process.cwd(),
    "public/assets/ico-large/Vozel-white-1024x1024.png"
  );
  const iconDataUrl = `data:image/png;base64,${readFileSync(iconPath).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101010",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og requires a plain <img>, not next/image */}
        <img src={iconDataUrl} width={140} height={140} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 100,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 32,
            color: "#8a8882",
            fontStyle: "italic",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
