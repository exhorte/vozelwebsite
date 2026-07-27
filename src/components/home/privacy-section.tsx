import Link from "next/link";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { Icon } from "@/src/components/ui/icon";

/**
 * Privacy & trust section — light "paper" background.
 *
 * Reassures users that their data stays local.
 * Each claim is precise and verifiable.
 */
export function PrivacySection() {
  return (
    <section id="privacy" className="bg-fluent-paper">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Confidentialité"
            title="Vos mots restent sous votre contrôle."
            subtitle="Fluent est conçu pour que vos données vocales ne quittent jamais votre machine, sauf si vous en décidez autrement."
            scheme="light"
            className="mb-16"
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          {claims.map((claim, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-5">
                <Icon
                  name="check"
                  size={20}
                  className="text-fluent-success mt-0.5 shrink-0"
                  strokeWidth={2.5}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-ink leading-snug">
                    {claim.title}
                  </h3>
                  <p className="text-sm text-fluent-muted-light leading-relaxed max-w-md">
                    {claim.description}
                  </p>
                </div>
              </div>
              {i < claims.length - 1 && (
                <Divider scheme="light" className="ml-9" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 text-sm text-fluent-muted-light text-center">
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-fluent-ink transition-colors focus-visible:outline-2 focus-visible:outline-fluent-focus rounded-sm"
            >
              Consultez notre politique de confidentialité
            </Link>{" "}
            pour plus de détails.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const claims = [
  {
    title: "La transcription fonctionne localement par défaut.",
    description:
      "Le moteur Whisper s'exécute directement sur votre machine. Votre voix est traitée sans jamais transiter par un serveur externe.",
  },
  {
    title: "Votre historique reste sur votre appareil.",
    description:
      "Les sessions de dictée et l'historique sont stockés localement. Vous pouvez les consulter, les exporter ou les supprimer à tout moment.",
  },
  {
    title: "Les fonctions Cloud sont optionnelles.",
    description:
      "Si des fonctionnalités Cloud sont disponibles, elles ne sont utilisées qu'après activation explicite dans les paramètres de l'application.",
  },
  {
    title: "Aucune collecte de données vocales.",
    description:
      "Fluent ne collecte, n'enregistre et ne transmet aucune donnée vocale à des tiers. Votre voix est votre voix.",
  },
];
