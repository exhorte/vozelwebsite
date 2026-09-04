import Link from "next/link";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { Icon } from "@/src/components/ui/icon";
import { faqItems } from "@/src/content/faq";

/**
 * FAQ preview section — light "paper" background.
 *
 * Shows the first few FAQ items with a link to
 * the full FAQ page.
 */
export function FaqPreview() {
  const previewItems = faqItems.slice(0, 4);

  return (
    <section className="bg-vozel-paper">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Frequently asked questions."
            scheme="light"
            className="mb-12"
          />
        </Reveal>

        <div className="flex flex-col">
          {previewItems.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <details className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-ink leading-snug pr-6">
                    {item.question}
                  </h3>
                  <Icon
                    name="chevron-down"
                    size={18}
                    className="text-vozel-muted-light mt-1.5 shrink-0 transition-transform duration-[var(--duration-fast)] group-open:rotate-180"
                    strokeWidth={1.5}
                  />
                </summary>
                <p className="mt-3 text-sm text-vozel-muted-light leading-relaxed max-w-prose">
                  {item.answer}
                </p>
              </details>
              {i < previewItems.length - 1 && <Divider scheme="light" />}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-vozel-muted-light hover:text-vozel-ink transition-colors underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
            >
              See all questions
              <Icon name="arrow-right" size={14} strokeWidth={1.5} />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
