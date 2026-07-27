import { SectionHeading } from "@/src/components/ui/section-heading";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";

/**
 * Value proposition section on the "paper" surface.
 *
 * Inverted color scheme (light background, dark text)
 * to create visual rhythm against dark sections.
 */
export function ValueSection() {
  return (
    <section className="bg-fluent-paper">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Pourquoi Fluent"
            title="Votre pensée, sans interruption."
            subtitle="Passez de l'idée au texte sans jamais quitter votre flux de travail."
            scheme="light"
            className="mb-16"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex items-start gap-6">
                {/* Step number */}
                <span
                  className="shrink-0 font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl text-fluent-ink/20 leading-none mt-1"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-xl sm:text-2xl text-fluent-ink leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-fluent-muted-light leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <Divider scheme="light" className="my-2" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Parlez naturellement.",
    description:
      "Activez la dictée et exprimez votre pensée à voix haute, comme si vous parliez à un collègue. Fluent capte votre voix sans vous interrompre.",
  },
  {
    title: "Fluent transcrit et prépare votre texte.",
    description:
      "Votre voix est transcrite localement en texte. Les profils de réécriture ajustent le style selon vos préférences.",
  },
  {
    title: "Le résultat apparaît dans votre zone de saisie.",
    description:
      "Le texte final s'insère directement là où se trouve votre curseur. Vous restez dans votre application, dans votre flux.",
  },
];
