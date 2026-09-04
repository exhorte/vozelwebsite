import { SectionHeading } from "@/src/components/ui/section-heading";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";

/**
 * "How it works" workflow section.
 *
 * Alternating light surface with dark,
 * large step numbers, and concise descriptions.
 */
export function WorkflowSection() {
  return (
    <section id="how-it-works" className="bg-vozel-surface">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Comment ça marche"
            title="De la voix au texte, en quatre étapes."
            scheme="dark"
            className="mb-16"
          />
        </Reveal>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex items-start gap-6 py-8 sm:py-10">
                {/* Step number */}
                <span
                  className="shrink-0 font-[family-name:var(--font-the-seasons)] text-5xl sm:text-6xl text-vozel-white/8 leading-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-xl sm:text-2xl text-vozel-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-vozel-muted-dark leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && <Divider scheme="dark" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Placez le curseur.",
    description:
      "Positionnez votre curseur dans la zone de texte où vous souhaitez que le résultat apparaisse — champ de formulaire, document, email, ou tout autre champ de saisie Windows.",
  },
  {
    title: "Maintenez Ctrl+Win.",
    description:
      "Gardez les deux touches enfoncées (ou cliquez sur le widget flottant) pour démarrer l'écoute. Un signal visuel discret confirme que Vozel vous écoute.",
  },
  {
    title: "Parlez naturellement.",
    description:
      "Exprimez votre pensée à voix haute pendant que vous maintenez la combinaison. La transcription s'effectue localement sur votre machine, sans connexion Internet requise.",
  },
  {
    title: "Relâchez pour insérer.",
    description:
      "Relâchez Ctrl+Win : Vozel transcrit ce que vous avez dit et l'insère directement dans votre zone de saisie active. Vous restez dans votre flux de travail, sans interruption.",
  },
];
