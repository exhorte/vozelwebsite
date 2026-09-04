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
            label="How it works"
            title="From voice to text, in four steps."
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
    title: "Place your cursor.",
    description:
      "Position your cursor in the text field where you want the result to appear — a form field, document, email, or any other Windows input field.",
  },
  {
    title: "Hold Ctrl+Win.",
    description:
      "Keep both keys held down (or click the floating widget) to start listening. A subtle visual cue confirms Vozel is listening.",
  },
  {
    title: "Speak naturally.",
    description:
      "Say your thoughts out loud while holding the combination. Transcription happens locally on your machine, no Internet connection required.",
  },
  {
    title: "Release to insert.",
    description:
      "Release Ctrl+Win: Vozel transcribes what you said and inserts it directly into your active input field. You stay in your flow, without interruption.",
  },
];
