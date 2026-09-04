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
            label="Compatibility"
            title="Built for Windows."
            subtitle="Vozel integrates natively into the Windows environment for a smooth, frictionless experience."
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
    label: "Operating system",
    value: "Windows 10 (21H2+) and Windows 11",
    note: "x64 architecture",
  },
  {
    label: "Microphone",
    value: "Built-in or external microphone",
    note: "Standard quality is enough",
  },
  {
    label: "Disk space",
    value: "~2 GB",
    note: "Local transcription and cleanup models — estimate",
  },
  {
    label: "RAM",
    value: "8 GB recommended",
    note: "4 GB minimum — estimate",
  },
  {
    label: "Internet connection",
    value: "Not required",
    note: "Except for optional Cloud features",
  },
  {
    label: "Installation",
    value: "Per-user",
    note: "Administrator rights not required",
  },
];
