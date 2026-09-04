import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { DownloadCard } from "@/src/components/download/download-card";
import { ReleaseMetadata } from "@/src/components/download/release-metadata";
import { InstallationSteps } from "@/src/components/download/installation-steps";
import { ChecksumCopy } from "@/src/components/download/checksum-copy";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Vozel for Windows. Installation instructions, SHA-256 checksum, and release notes.",
};

export default function DownloadPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero area */}
        <section className="bg-vozel-ink pt-[var(--nav-height)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
            <Reveal>
              <h1 className="font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-vozel-white text-center leading-[1.08]">
                Download Vozel
              </h1>
              <p className="mt-4 text-base sm:text-lg text-vozel-muted-dark text-center max-w-md mx-auto">
                Download the latest version of Vozel for Windows and start
                turning your voice into text.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Download card + metadata */}
        <section className="bg-vozel-ink">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pb-12">
            <Reveal>
              <DownloadCard />
              <ReleaseMetadata />
              <ChecksumCopy />
            </Reveal>
          </div>
        </section>

        <Divider scheme="dark" />

        {/* Installation instructions */}
        <section className="bg-vozel-ink">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
            <Reveal>
              <h2 className="font-[family-name:var(--font-the-seasons)] text-2xl sm:text-3xl text-vozel-white text-center mb-12">
                Installation guide
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <InstallationSteps />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
