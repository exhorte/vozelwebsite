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
    <section className="bg-vozel-paper">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Why Vozel"
            title="Your thoughts, without interruption."
            subtitle="Go from idea to text without ever leaving your flow."
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
                  className="shrink-0 font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl text-vozel-ink/20 leading-none mt-1"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-xl sm:text-2xl text-vozel-ink leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-vozel-muted-light leading-relaxed max-w-md">
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
    title: "Speak naturally.",
    description:
      "Start dictation and say your thoughts out loud, as if you were talking to a colleague. Vozel captures your voice without interrupting you.",
  },
  {
    title: "Vozel transcribes and prepares your text.",
    description:
      "Your voice is transcribed locally into text. Optional AI cleanup can fix punctuation and grammar, if you enable it.",
  },
  {
    title: "The result appears in your input field.",
    description:
      "The final text is inserted directly where your cursor is. You stay in your app, in your flow.",
  },
];
