import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { legalInfo, isLegalInfoComplete } from "@/src/config/legal";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Legal notice for the Vozel website.",
};

/**
 * Legal notice page.
 *
 * Fields without official information are omitted
 * rather than displayed as placeholders.
 */
export default function LegalPage() {
  const hasInfo = isLegalInfoComplete();

  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-vozel-ink pt-[var(--nav-height)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
            <Reveal>
              <h1 className="font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl tracking-tight text-vozel-white text-center leading-[1.08]">
                Legal notice
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="bg-vozel-ink pb-[var(--section-gap)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6">
            {hasInfo ? (
              <div className="flex flex-col gap-10">
                {legalInfo.publisherName && (
                  <LegalSection title="Publisher">
                    <LegalField label="Name" value={legalInfo.publisherName} />
                    {legalInfo.legalForm && (
                      <LegalField label="Legal form" value={legalInfo.legalForm} />
                    )}
                    {legalInfo.address && (
                      <LegalField label="Address" value={legalInfo.address} />
                    )}
                    {legalInfo.contactEmail && (
                      <LegalField label="Contact" value={legalInfo.contactEmail} />
                    )}
                  </LegalSection>
                )}

                {legalInfo.publicationDirector && (
                  <LegalSection title="Publication management">
                    <LegalField
                      label="Publication director"
                      value={legalInfo.publicationDirector}
                    />
                  </LegalSection>
                )}

                {legalInfo.hostingProvider && (
                  <LegalSection title="Hosting">
                    <LegalField label="Host" value={legalInfo.hostingProvider} />
                    {legalInfo.hostingAddress && (
                      <LegalField label="Address" value={legalInfo.hostingAddress} />
                    )}
                    {legalInfo.hostingWebsite && (
                      <LegalField label="Website" value={legalInfo.hostingWebsite} />
                    )}
                  </LegalSection>
                )}

                <LegalSection title="Intellectual property">
                  <p className="text-sm text-vozel-muted-dark leading-relaxed">
                    All content on this site (text, images, logo, visual
                    identity) is protected by copyright and trademark law.
                    Any reproduction without authorization is prohibited.
                  </p>
                </LegalSection>

                <LegalSection title="Limitation of liability">
                  <p className="text-sm text-vozel-muted-dark leading-relaxed">
                    The information on this site is provided for guidance
                    only. The publisher cannot guarantee the accuracy or
                    completeness of the information published.
                  </p>
                </LegalSection>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-vozel-muted-dark leading-relaxed max-w-md mx-auto">
                  Complete legal information will be published soon. In the
                  meantime, you can read our{" "}
                  <a
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-vozel-white transition-colors"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/* ---- Internal components ---- */

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-the-seasons)] text-xl text-vozel-white leading-snug">
          {title}
        </h2>
        {children}
      </section>
      <Divider scheme="dark" />
    </Reveal>
  );
}

function LegalField({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
      <dt className="text-xs text-vozel-muted-dark">{label}</dt>
      <dd className="text-sm text-vozel-white">{value}</dd>
    </div>
  );
}
