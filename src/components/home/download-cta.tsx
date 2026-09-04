import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Reveal } from "@/src/components/ui/reveal";
import { logos } from "@/src/config/assets";
import {
  currentRelease,
  channelLabels,
  architectureLabels,
} from "@/src/config/release";
import { formatDate } from "@/src/lib/utils";

/**
 * Download CTA section — dark background.
 *
 * Serves as the final call-to-action on the homepage.
 * When no download URL is configured, shows a graceful
 * "coming soon" state.
 */
export function DownloadCTA() {
  return (
    <section id="download" className="bg-vozel-surface">
      <div className="mx-auto max-w-[var(--content-narrow)] px-6 py-[var(--section-gap)]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            {/* Logo */}
            <Image
              src={logos.white.medium}
              alt=""
              width={64}
              height={64}
              aria-hidden="true"
              className="mb-8 opacity-90"
            />

            <SectionHeading
              title="Ready to try Vozel?"
              subtitle="Download the latest version and start turning your voice into text."
              scheme="dark"
              className="mb-10"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="w-full max-w-sm mx-auto bg-vozel-surface-elevated border border-vozel-border-dark rounded-lg p-8">
              {/* Release info */}
              <div className="flex flex-col items-center gap-6">
                {currentRelease.isAvailable ? (
                  <>
                    {/* Available state */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium">
                        {channelLabels[currentRelease.channel]}
                      </span>
                      <span className="font-[family-name:var(--font-the-seasons)] text-2xl text-vozel-white">
                        Version {currentRelease.version}
                      </span>
                    </div>

                    <Button
                      href={currentRelease.downloadUrl}
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Download Vozel for Windows
                    </Button>

                    <div className="flex flex-col items-center gap-1 text-xs text-vozel-muted-dark">
                      {currentRelease.fileName && (
                        <span>{currentRelease.fileName}</span>
                      )}
                      <span>
                        {architectureLabels[currentRelease.architecture]}
                        {currentRelease.fileSize &&
                          ` · ${currentRelease.fileSize}`}
                      </span>
                      {currentRelease.publishedAt && (
                        <span>
                          Published on {formatDate(currentRelease.publishedAt)}
                        </span>
                      )}
                    </div>

                    <Link
                      href={currentRelease.releaseNotesUrl}
                      className="text-xs text-vozel-muted-dark hover:text-vozel-white underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
                    >
                      View release notes
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Coming soon state */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium">
                        Coming soon
                      </span>
                      <span className="font-[family-name:var(--font-the-seasons)] text-2xl text-vozel-white">
                        Available soon
                      </span>
                    </div>

                    <Button variant="primary" size="lg" className="w-full" disabled>
                      Download coming soon
                    </Button>

                    <p className="text-sm text-vozel-muted-dark">
                      Vozel&apos;s first public release is in the works. Check
                      back soon to download the app.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Reveal>

          {currentRelease.isAvailable && currentRelease.sha256 && (
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col items-center gap-2">
                <span className="text-xs text-vozel-muted-dark">
                  Checksum SHA-256
                </span>
                <code className="text-xs text-vozel-muted-dark/80 font-mono break-all max-w-sm">
                  {currentRelease.sha256}
                </code>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
