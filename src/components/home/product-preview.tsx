import Image from "next/image";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Reveal } from "@/src/components/ui/reveal";
import { brandVisuals } from "@/src/config/assets";

/**
 * Brand identity section (formerly "product preview").
 *
 * IMPORTANT: no real screenshot of the Vozel application exists in this
 * repository. `public/assets/example/*.png` are brand lockup compositions
 * (icon + "Vozel." wordmark), not app captures — see `assets.ts`. This
 * section is deliberately framed as an identity visual, not an interface
 * preview, so it never claims to show the app. Replace with a real
 * screenshot (and restore an "Aperçu" framing) once one is available.
 */
export function ProductPreview() {
  return (
    <section className="bg-vozel-surface">
      <div className="mx-auto max-w-[var(--content-max)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Identité"
            title="Conçu pour disparaître."
            subtitle="Une véritable capture d'écran de l'application arrivera avec la première version publique — en attendant, voici l'identité visuelle de Vozel."
            scheme="dark"
            className="mb-12 sm:mb-16"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-md">
            {/* Brand lockup frame (icon + wordmark), not a screenshot */}
            <div className="rounded-lg border border-vozel-border-dark overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src={brandVisuals.lockupOnDark}
                alt="Symbole et mot-symbole Vozel"
                width={2000}
                height={2000}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 448px"
                priority={false}
              />
            </div>

            {/* Subtle glow behind the frame */}
            <div
              className="absolute -inset-4 -z-10 rounded-xl opacity-20 blur-2xl bg-vozel-white/5"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
