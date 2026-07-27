import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { logos } from "@/src/config/assets";
import { siteConfig } from "@/src/config/site";
import { downloadCta } from "@/src/config/navigation";
import { currentRelease } from "@/src/config/release";

/**
 * Hero section — strongly inspired by the Fluent brand guide PDF.
 *
 * Centered composition with:
 * - Subtle background logo symbol
 * - Application label
 * - Large product name
 * - Tagline
 * - Value proposition
 * - Primary + secondary CTAs
 * - Version and compatibility info
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-fluent-ink">
      {/* Subtle background symbol */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]"
        aria-hidden="true"
      >
        <Image
          src={logos.white.large}
          alt=""
          width={600}
          height={600}
          priority
          className="object-contain animate-[hero-symbol_8s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative mx-auto max-w-[var(--content-narrow)] px-6 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-48">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Small label */}
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-fluent-muted-dark">
            Application de dictée pour Windows
          </span>

          {/* Logo symbol */}
          <Image
            src={logos.white.medium}
            alt=""
            width={72}
            height={72}
            priority
            className="opacity-90"
            aria-hidden="true"
          />

          {/* Product name */}
          <h1 className="font-[family-name:var(--font-the-seasons)] text-5xl sm:text-6xl lg:text-7xl tracking-tight text-fluent-white leading-[1.05]">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-the-seasons)] text-xl sm:text-2xl text-fluent-muted-dark italic">
            {siteConfig.tagline}
          </p>

          {/* Value proposition */}
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-fluent-muted-dark">
            Transformez votre voix en texte fluide, directement dans les
            applications que vous utilisez déjà.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              href={currentRelease.isAvailable ? downloadCta.href : downloadCta.href}
              variant="primary"
              size="lg"
              disabled={!currentRelease.isAvailable}
            >
              {currentRelease.isAvailable
                ? "Télécharger pour Windows"
                : "Téléchargement bientôt disponible"}
            </Button>
            <Button href="/#how-it-works" variant="ghost" size="default">
              Découvrir Fluent
            </Button>
          </div>

          {/* Version & compatibility */}
          <div className="flex flex-col items-center gap-1 mt-4">
            {currentRelease.isAvailable && currentRelease.version && (
              <span className="text-xs text-fluent-muted-dark">
                Version {currentRelease.version}
              </span>
            )}
            <span className="text-xs text-fluent-muted-dark/70">
              Compatible Windows 10 et 11 &middot; Transcription locale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Keyframes for the subtle background symbol animation.
 * Inject via the global CSS.
 */
export const heroStyles = `
@keyframes hero-symbol {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.03) rotate(1deg); }
  75% { transform: scale(0.97) rotate(-1deg); }
}
`;
