import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import { fontSerifFallback } from "@/src/app/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Vozel" }],
  generator: null, // Remove "Next.js" from meta generator tag
  keywords: [
    "dictée",
    "transcription vocale",
    "Windows",
    "local",
    "confidentialité",
    "français",
    "voice typing",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "fr_FR",
    // No `images` entry here on purpose: `/og-image.png` doesn't exist as a
    // static file. `app/opengraph-image.tsx` generates it via `next/og` and
    // Next.js merges it into this metadata automatically.
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    // Same note as openGraph.images above — handled by opengraph-image.tsx.
  },
  // Dedicated favicon set (public/assets/favicon/), not the brand ico-*/
  // ico-large files above — those are white-on-transparent, which nearly
  // disappears in a browser's (usually light) tab bar. This set is
  // black-on-opaque-white at each size a favicon actually needs, generated
  // for Vozel specifically (see public/assets/favicon/site.webmanifest).
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
          The Seasons font fallback.
          Set as a style tag so the CSS variable is available
          before next/font/local is configured with actual font files.
          When The Seasons WOFF2 files are added to src/app/fonts/the-seasons/,
          replace this with the variable export from fonts.ts.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --font-the-seasons: ${fontSerifFallback}; }`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-vozel-ink text-vozel-white antialiased">
        {children}
      </body>
    </html>
  );
}
