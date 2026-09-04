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
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-white mb-4">
          Installation
        </h3>
        <ol className="flex flex-col gap-3">
          {installSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-vozel-border-dark text-xs text-vozel-muted-dark mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-vozel-muted-dark leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <Divider scheme="dark" />

      {/* SmartScreen */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-white mb-3">
          SmartScreen warning
        </h3>
        <p className="text-sm text-vozel-muted-dark leading-relaxed">
          Windows SmartScreen may show a warning the first time you install
          Vozel, since the app is distributed outside the Microsoft Store.
          Click &laquo;&nbsp;Run anyway&nbsp;&raquo; to continue the
          installation.
        </p>
      </section>

      <Divider scheme="dark" />

      {/* Update */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-white mb-3">
          Updating
        </h3>
        <p className="text-sm text-vozel-muted-dark leading-relaxed">
          To update Vozel, download the new version and run the installer.
          Your settings and history are preserved.
        </p>
      </section>

      <Divider scheme="dark" />

      {/* Uninstall */}
      <section>
        <h3 className="font-[family-name:var(--font-the-seasons)] text-lg text-vozel-white mb-3">
          Uninstalling
        </h3>
        <p className="text-sm text-vozel-muted-dark leading-relaxed">
          Uninstall Vozel from Settings &gt; Apps &gt; Vozel &gt; Uninstall,
          or from the Control Panel. Uninstalling removes the app but keeps
          your local data&nbsp;; you can delete it manually if you&apos;d like.
        </p>
      </section>
    </div>
  );
}

const installSteps = [
  "Download the Vozel installer file.",
  "Double-click the downloaded file.",
  "Follow the on-screen instructions.",
  "Launch Vozel from the Start menu.",
  "Set your dictation language in the settings. The trigger (Ctrl+Win) is fixed, no configuration needed.",
];
