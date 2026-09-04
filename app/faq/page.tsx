import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Divider } from "@/src/components/ui/divider";
import { Icon } from "@/src/components/ui/icon";
import { Reveal } from "@/src/components/ui/reveal";
import { faqItems } from "@/src/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vozel — how it works, privacy, installation, and compatibility.",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-vozel-ink pt-[var(--nav-height)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
            <Reveal>
              <h1 className="font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl tracking-tight text-vozel-white text-center leading-[1.08]">
                Frequently asked questions
              </h1>
              <p className="mt-4 text-base sm:text-lg text-vozel-muted-dark text-center max-w-md mx-auto">
                Everything you need to know about Vozel.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-vozel-ink pb-[var(--section-gap)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6">
            <div className="flex flex-col">
              {faqItems.map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <details className="group py-5">
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                      <h2 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-white leading-snug pr-6">
                        {item.question}
                      </h2>
                      <Icon
                        name="chevron-down"
                        size={18}
                        className="text-vozel-muted-dark mt-1.5 shrink-0 transition-transform duration-[var(--duration-fast)] group-open:rotate-180"
                        strokeWidth={1.5}
                      />
                    </summary>
                    <p className="mt-3 text-sm text-vozel-muted-dark leading-relaxed max-w-prose">
                      {item.answer}
                    </p>
                  </details>
                  {i < faqItems.length - 1 && <Divider scheme="dark" />}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
