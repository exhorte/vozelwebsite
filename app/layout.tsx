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
  authors: [{ name: "Fluent" }],
  generator: null, // Remove "Next.js" from meta generator tag
  keywords: [
    "dictée",
    "transcription vocale",
    "Windows",
    "Whisper",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/ico-white/Fluent-white-32x32.ico",
        sizes: "32x32",
      },
      {
        url: "/assets/ico-white/Fluent-white-16x16.ico",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/assets/ico-large/Fluent-white-520x520.png",
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
      <body className="min-h-full flex flex-col bg-fluent-ink text-fluent-white antialiased">
        {children}
      </body>
    </html>
  );
}
