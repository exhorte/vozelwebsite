import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Vozel website and dictation app.",
};

/**
 * Privacy policy page.
 *
 * Structured with clear sections. Fields marked as
 * needing confirmation should be verified against
 * the actual product and legal requirements.
 */
export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-vozel-ink pt-[var(--nav-height)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
            <Reveal>
              <h1 className="font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl tracking-tight text-vozel-white text-center leading-[1.08]">
                Privacy Policy
              </h1>
              <p className="mt-4 text-sm text-vozel-muted-dark text-center">
                Last updated:{" "}
                <time dateTime="2026-09-04">September 4, 2026</time>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="bg-vozel-ink pb-[var(--section-gap)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6">
            <div className="prose-custom flex flex-col gap-10">
              <PrivacySection title="Introduction">
                <p>
                  This privacy policy describes how the {siteConfig.name}{" "}
                  website and the {siteConfig.name} application handle your
                  data. We are committed to respecting your privacy and being
                  transparent about our practices.
                </p>
                <p>
                  This policy covers two distinct contexts: the website you
                  are currently browsing, and the Vozel desktop application
                  for Windows.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Data processed by the website">
                <p>
                  The {siteConfig.name} website is a static site. It does not
                  collect any personal data, does not use any tracking
                  cookies, and does not integrate any third-party analytics
                  service.
                </p>
                <ul>
                  <li>No marketing or tracking cookies are set.</li>
                  <li>No browsing data is collected.</li>
                  <li>
                    Downloads are served via direct links with no information
                    collected.
                  </li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Data processed by the Vozel application">
                <p>
                  The Vozel application processes your voice locally on your
                  Windows machine. By default, no voice data or transcribed
                  text leaves your device.
                </p>
                <ul>
                  <li>
                    Transcription is performed locally via the Parakeet-TDT
                    engine.
                  </li>
                  <li>Dictation history is stored locally on your machine.</li>
                  <li>
                    Cloud features, if available, are optional and disabled
                    by default.
                  </li>
                  <li>
                    You can delete your local history at any time from the
                    app&apos;s settings.
                  </li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Data not collected">
                <p>Neither the website nor the Vozel application collect:</p>
                <ul>
                  <li>Your voice data or recordings.</li>
                  <li>The content of your dictations.</li>
                  <li>Your personal information.</li>
                  <li>
                    Your IP address (the site does no application-level
                    logging).
                  </li>
                  <li>Your browser fingerprint.</li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="External links">
                <p>
                  The site may contain links to external services (GitHub,
                  download pages). We are not responsible for the privacy
                  practices of those services.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Contact">
                <p>
                  For any question about this privacy policy, you can
                  contact us via the channels listed in the site&apos;s legal
                  notice.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Changes">
                <p>
                  This policy may be updated to reflect product changes or
                  legal requirements. The last-updated date is shown at the
                  top of this page.
                </p>
              </PrivacySection>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/** Reusable section wrapper for privacy content */
function PrivacySection({
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
        <div className="text-sm text-vozel-muted-dark leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:text-vozel-muted-dark">
          {children}
        </div>
      </section>
    </Reveal>
  );
}
