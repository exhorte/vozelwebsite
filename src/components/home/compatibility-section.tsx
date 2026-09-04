import { SectionHeading } from "@/src/components/ui/section-heading";
import { Reveal } from "@/src/components/ui/reveal";

/**
 * Compatibility section — dark background.
 *
 * Presents system requirements clearly and concisely.
 * All values should be verified against the actual product.
 */
export function CompatibilitySection() {
  return (
    <section className="bg-vozel-ink">
      <div className="mx-auto max-w-[var(--content-max)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Compatibilité"
            title="Conçu pour Windows."
            subtitle="Vozel s'intègre nativement dans l'environnement Windows pour une expérience fluide et sans friction."
            scheme="dark"
            className="mb-12 sm:mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {specs.map((spec, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="flex flex-col gap-2 p-6 rounded-lg border border-vozel-border-dark bg-vozel-surface/50">
                <h3 className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium">
                  {spec.label}
                </h3>
                <p className="text-sm text-vozel-white leading-relaxed">
                  {spec.value}
                </p>
                {spec.note && (
                  <p className="text-xs text-vozel-muted-dark mt-1">
                    {spec.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const specs = [
  {
    label: "Système d'exploitation",
    value: "Windows 10 (21H2+) et Windows 11",
    note: "Architecture x64",
  },
  {
    label: "Microphone",
    value: "Microphone intégré ou externe",
    note: "Qualité standard suffisante",
  },
  {
    label: "Espace disque",
    value: "~2 Go",
    note: "Modèles de transcription et de nettoyage locaux — estimation",
  },
  {
    label: "Mémoire vive",
    value: "8 Go recommandés",
    note: "4 Go minimum — estimation",
  },
  {
    label: "Connexion Internet",
    value: "Non requise",
    note: "Sauf fonctions Cloud optionnelles",
  },
  {
    label: "Installation",
    value: "Par utilisateur",
    note: "Droits administrateur non requis",
  },
];
