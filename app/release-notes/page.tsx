import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { releaseNotes, noReleasesMessage } from "@/src/content/release-notes";
import { formatDate } from "@/src/lib/utils";
import { channelLabels } from "@/src/config/release";

export const metadata: Metadata = {
  title: "Notes de version",
  description: "Historique des versions et notes de release de Vozel.",
};

export default function ReleaseNotesPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-vozel-ink pt-[var(--nav-height)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
            <Reveal>
              <h1 className="font-[family-name:var(--font-the-seasons)] text-4xl sm:text-5xl tracking-tight text-vozel-white text-center leading-[1.08]">
                Notes de version
              </h1>
              <p className="mt-4 text-base sm:text-lg text-vozel-muted-dark text-center max-w-md mx-auto">
                Suivez l&apos;évolution de Vozel, version par version.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-vozel-ink pb-[var(--section-gap)]">
          <div className="mx-auto max-w-[var(--content-narrow)] px-6">
            {releaseNotes.length > 0 ? (
              <div className="flex flex-col gap-12">
                {releaseNotes.map((release, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <ReleaseCard release={release} />
                    {i < releaseNotes.length - 1 && <Divider scheme="dark" className="mt-12" />}
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="text-center py-12">
                  <p className="text-sm text-vozel-muted-dark leading-relaxed">
                    {noReleasesMessage}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function ReleaseCard({ release }: { release: (typeof releaseNotes)[number] }) {
  return (
    <article>
      <header className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-3">
          <h2 className="font-[family-name:var(--font-the-seasons)] text-2xl text-vozel-white">
            Version {release.version}
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full border border-vozel-border-dark text-vozel-muted-dark">
            {channelLabels[release.channel]}
          </span>
        </div>
        <time dateTime={release.date} className="text-xs text-vozel-muted-dark">
          {formatDate(release.date)}
        </time>
      </header>

      <p className="text-sm text-vozel-muted-dark mb-6">{release.summary}</p>

      {release.highlights.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium mb-2">
            Nouveautés
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {release.highlights.map((h, i) => (
              <li key={i} className="text-sm text-vozel-white/80">
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {release.fixes.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium mb-2">
            Corrections
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {release.fixes.map((f, i) => (
              <li key={i} className="text-sm text-vozel-white/80">
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      {release.knownIssues.length > 0 && (
        <div>
          <h3 className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium mb-2">
            Problèmes connus
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {release.knownIssues.map((issue, i) => (
              <li key={i} className="text-sm text-vozel-muted-dark">
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
