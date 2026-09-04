import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Button } from "@/src/components/ui/button";

export const metadata: Metadata = {
  title: "Page introuvable",
};

/**
 * 404 page — minimal, on-brand, and helpful.
 */
export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center bg-vozel-ink">
        <div className="flex flex-col items-center text-center gap-6 px-6 py-32">
          {/* Large 404 */}
          <p
            className="font-[family-name:var(--font-the-seasons)] text-8xl sm:text-9xl text-vozel-white/8 leading-none select-none"
            aria-hidden="true"
          >
            404
          </p>

          {/* Message */}
          <div className="flex flex-col gap-3">
            <h1 className="font-[family-name:var(--font-the-seasons)] text-2xl sm:text-3xl text-vozel-white leading-snug">
              Cette page n&apos;existe pas.
            </h1>
            <p className="text-sm text-vozel-muted-dark max-w-sm leading-relaxed">
              La page que vous cherchez a peut-être été déplacée ou n&apos;existe
              plus.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-4">
            <Button href="/" variant="primary" size="default">
              Retour à l&apos;accueil
            </Button>
            <Button href="/faq" variant="ghost" size="default">
              Consulter la FAQ
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
