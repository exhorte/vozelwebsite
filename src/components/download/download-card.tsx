import { Button } from "@/src/components/ui/button";
import { Icon } from "@/src/components/ui/icon";
import { currentRelease, channelLabels } from "@/src/config/release";

/**
 * Main download card for the /download page.
 *
 * Handles all download states:
 * - Available: full download button + metadata
 * - ComingSoon: disabled button with explanation
 */
export function DownloadCard() {
  return (
    <div className="bg-vozel-surface-elevated border border-vozel-border-dark rounded-lg p-8 sm:p-10">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Channel badge */}
        {currentRelease.isAvailable ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-vozel-border-dark text-xs text-vozel-muted-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-vozel-success" />
            {channelLabels[currentRelease.channel]}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-vozel-border-dark text-xs text-vozel-muted-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-vozel-muted-dark" />
            Coming soon
          </span>
        )}

        {/* Version */}
        <div className="flex flex-col gap-1">
          <h2 className="font-[family-name:var(--font-the-seasons)] text-2xl sm:text-3xl text-vozel-white">
            {currentRelease.isAvailable
              ? `Vozel ${currentRelease.version}`
              : "Vozel"}
          </h2>
          {!currentRelease.isAvailable && (
            <p className="text-sm text-vozel-muted-dark">
              First release in the works
            </p>
          )}
        </div>

        {/* Download button */}
        {currentRelease.isAvailable ? (
          <Button
            href={currentRelease.downloadUrl}
            variant="primary"
            size="lg"
            className="w-full max-w-xs"
          >
            <Icon name="download" size={18} strokeWidth={2} />
            Download for Windows
          </Button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full max-w-xs"
              disabled
            >
              <Icon name="download" size={18} strokeWidth={2} />
              Coming soon
            </Button>
            <p className="text-sm text-vozel-muted-dark">
              The app isn&apos;t available for download yet. Check back
              soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
