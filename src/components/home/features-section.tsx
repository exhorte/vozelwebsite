import { SectionHeading } from "@/src/components/ui/section-heading";
import { Icon, type IconName } from "@/src/components/ui/icon";
import { Reveal } from "@/src/components/ui/reveal";
import { features } from "@/src/content/features";
import { cx } from "@/src/lib/utils";

/**
 * Features section — editorial layout rather than a grid.
 *
 * Each feature is presented as a row with icon, title,
 * and description, in an alternating layout on desktop.
 */
export function FeaturesSection() {
  return (
    <section id="features" className="bg-fluent-ink">
      <div className="mx-auto max-w-[var(--content-max)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="Fonctionnalités"
            title="Tout ce dont vous avez besoin pour écrire avec votre voix."
            scheme="dark"
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="flex flex-col gap-3">
                <Icon
                  name={feature.icon as IconName}
                  size={22}
                  className="text-fluent-muted-dark"
                  strokeWidth={1.5}
                />
                <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-white leading-snug">
                  {feature.title}
                </h3>
                <p
                  className={cx(
                    "text-sm leading-relaxed",
                    feature.needsVerification
                      ? "text-fluent-muted-dark"
                      : "text-fluent-muted-dark"
                  )}
                >
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
