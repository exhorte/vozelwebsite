import Image from "next/image";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Reveal } from "@/src/components/ui/reveal";
import { screenshots } from "@/src/config/assets";

/**
 * Product preview section.
 *
 * Displays a screenshot of the actual Fluent application.
 * Falls back to a placeholder layout if the screenshot
 * is deemed inappropriate for public display.
 */
export function ProductPreview() {
  return (
    <section className="bg-fluent-surface">
      <div className="mx-auto max-w-[var(--content-max)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Aperçu"
            title="Conçu pour disparaître."
            subtitle="Une interface discrète qui s'efface pour laisser place à votre pensée."
            scheme="dark"
            className="mb-12 sm:mb-16"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-4xl">
            {/* Screenshot frame */}
            <div className="rounded-lg border border-fluent-border-dark overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src={screenshots.main1}
                alt="Interface de l'application Fluent"
                width={1726}
                height={1080}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                priority={false}
              />
            </div>

            {/* Subtle glow behind the frame */}
            <div
              className="absolute -inset-4 -z-10 rounded-xl opacity-20 blur-2xl bg-fluent-white/5"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
