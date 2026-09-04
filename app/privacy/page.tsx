import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Divider } from "@/src/components/ui/divider";
import { Reveal } from "@/src/components/ui/reveal";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Vozel et de l'application de dictée.",
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
                Politique de confidentialité
              </h1>
              <p className="mt-4 text-sm text-vozel-muted-dark text-center">
                Dernière mise à jour :{" "}
                <time dateTime="2026-09-04">4 septembre 2026</time>
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
                  Cette politique de confidentialité décrit comment le site web
                  de {siteConfig.name} et l&apos;application {siteConfig.name}{" "}
                  traitent vos données. Nous nous engageons à respecter votre
                  vie privée et à être transparents sur nos pratiques.
                </p>
                <p>
                  Cette politique concerne deux contextes distincts : le site web
                  que vous consultez actuellement, et l&apos;application de bureau
                  Vozel pour Windows.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Données traitées par le site web">
                <p>
                  Le site web de {siteConfig.name} est un site statique. Il ne
                  collecte aucune donnée personnelle, n&apos;utilise aucun cookie
                  de tracking, et n&apos;intègre aucun service d&apos;analyse
                  tiers.
                </p>
                <ul>
                  <li>
                    Aucun cookie marketing ou de tracking n&apos;est déposé.
                  </li>
                  <li>
                    Aucune donnée de navigation n&apos;est collectée.
                  </li>
                  <li>
                    Les téléchargements sont servis via des liens directs sans
                    collecte d&apos;information.
                  </li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Données traitées par l'application Vozel">
                <p>
                  L&apos;application Vozel traite votre voix localement sur
                  votre machine Windows. Par défaut, aucune donnée vocale ou
                  texte transcrit ne quitte votre appareil.
                </p>
                <ul>
                  <li>
                    La transcription est effectuée localement via le moteur
                    Parakeet-TDT.
                  </li>
                  <li>
                    L&apos;historique de dictée est stocké localement sur votre
                    machine.
                  </li>
                  <li>
                    Les fonctions Cloud, si disponibles, sont optionnelles et
                    désactivées par défaut.
                  </li>
                  <li>
                    Vous pouvez supprimer votre historique local à tout moment
                    depuis les paramètres de l&apos;application.
                  </li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Données non collectées">
                <p>
                  Ni le site web ni l&apos;application Vozel ne collectent :
                </p>
                <ul>
                  <li>Vos données vocales ou enregistrements.</li>
                  <li>Le contenu de vos dictées.</li>
                  <li>Vos informations personnelles.</li>
                  <li>
                    Votre adresse IP (le site ne fait aucun logging applicatif).
                  </li>
                  <li>Votre empreinte numérique de navigateur.</li>
                </ul>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Liens externes">
                <p>
                  Le site peut contenir des liens vers des services externes
                  (GitHub, pages de téléchargement). Nous ne sommes pas
                  responsables des pratiques de confidentialité de ces services.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Contact">
                <p>
                  Pour toute question relative à cette politique de
                  confidentialité, vous pouvez nous contacter via les canaux
                  indiqués dans les mentions légales du site.
                </p>
              </PrivacySection>

              <Divider scheme="dark" />

              <PrivacySection title="Modifications">
                <p>
                  Cette politique est susceptible d&apos;être mise à jour pour
                  refléter les évolutions du produit ou les exigences légales.
                  La date de dernière mise à jour est indiquée en haut de cette
                  page.
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
