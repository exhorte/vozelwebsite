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
    <section id="privacy" className="bg-vozel-paper">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Privacy"
            title="Your words stay under your control."
            subtitle="Vozel is designed so your voice data never leaves your machine, unless you decide otherwise."
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
                  className="text-vozel-success mt-0.5 shrink-0"
                  strokeWidth={2.5}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-ink leading-snug">
                    {claim.title}
                  </h3>
                  <p className="text-sm text-vozel-muted-light leading-relaxed max-w-md">
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
          <p className="mt-12 text-sm text-vozel-muted-light text-center">
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-vozel-ink transition-colors focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
            >
              Read our privacy policy
            </Link>{" "}
            for more details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const claims = [
  {
    title: "Transcription works locally by default.",
    description:
      "The local transcription engine (Parakeet-TDT) runs directly on your machine. Your voice is processed without ever going through an external server.",
  },
  {
    title: "Your history stays on your device.",
    description:
      "Dictation sessions and history are stored locally. You can view or delete them at any time.",
  },
  {
    title: "Cloud features are optional.",
    description:
      "If Cloud features are available, they're only used after explicit activation in the app's settings.",
  },
  {
    title: "No voice data collection.",
    description:
      "Vozel does not collect, record, or transmit any voice data to third parties. Your voice is your voice.",
  },
];
