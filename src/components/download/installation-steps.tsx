import { Divider } from "@/src/components/ui/divider";

/**
 * Installation instructions for the /download page.
 *
 * Covers: install, SmartScreen warning, update, uninstall.
 */
export function InstallationSteps() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-10">
      {/* Installation */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-white mb-4">
          Installation
        </h3>
        <ol className="flex flex-col gap-3">
          {installSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-fluent-border-dark text-xs text-fluent-muted-dark mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-fluent-muted-dark leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <Divider scheme="dark" />

      {/* SmartScreen */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-white mb-3">
          Avertissement SmartScreen
        </h3>
        <p className="text-sm text-fluent-muted-dark leading-relaxed">
          Windows SmartScreen peut afficher un avertissement lors de la première
          installation de Fluent, car l&apos;application est distribuée en dehors du
          Microsoft Store. Cliquez sur &laquo;&nbsp;Exécuter quand même&nbsp;&raquo;
          pour poursuivre l&apos;installation.
        </p>
      </section>

      <Divider scheme="dark" />

      {/* Update */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-white mb-3">
          Mise à jour
        </h3>
        <p className="text-sm text-fluent-muted-dark leading-relaxed">
          Pour mettre à jour Fluent, téléchargez la nouvelle version et exécutez
          l&apos;installateur. Vos paramètres et votre historique sont conservés.
        </p>
      </section>

      <Divider scheme="dark" />

      {/* Uninstall */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-fluent-white mb-3">
          Désinstallation
        </h3>
        <p className="text-sm text-fluent-muted-dark leading-relaxed">
          Désinstallez Fluent depuis Paramètres &gt; Applications &gt; Fluent &gt;
          Désinstaller, ou depuis le Panneau de configuration. La désinstallation
          supprime l&apos;application mais conserve vos données locales&nbsp;; vous
          pouvez les supprimer manuellement si vous le souhaitez.
        </p>
      </section>
    </div>
  );
}

const installSteps = [
  "Téléchargez le fichier d'installation Fluent.",
  "Double-cliquez sur le fichier téléchargé.",
  "Suivez les instructions à l'écran.",
  "Lancez Fluent depuis le menu Démarrer.",
  "Configurez votre raccourci clavier et votre langue de dictée.",
];
