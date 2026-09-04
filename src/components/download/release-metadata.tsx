import {
  currentRelease,
  channelLabels,
  architectureLabels,
} from "@/src/config/release";
import { formatDate } from "@/src/lib/utils";

interface MetaRowProps {
  label: string;
  value: string;
}

function MetaRow({ label, value }: MetaRowProps) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 py-2">
      <dt className="text-xs text-vozel-muted-dark">{label}</dt>
      <dd className="text-sm text-vozel-white">{value}</dd>
    </div>
  );
}

/**
 * Release metadata display for the /download page.
 *
 * Shows all available metadata about the current release.
 * Empty values are not rendered.
 */
export function ReleaseMetadata() {
  if (!currentRelease.isAvailable) {
    return (
      <div className="text-center text-sm text-vozel-muted-dark py-4">
        Release metadata will be available once it&apos;s published.
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      <h3 className="text-xs tracking-[0.15em] uppercase text-vozel-muted-dark font-medium mb-4 text-center">
        Release information
      </h3>
      <dl className="flex flex-col">
        <MetaRow label="Version" value={currentRelease.version} />
        <MetaRow
          label="Channel"
          value={channelLabels[currentRelease.channel]}
        />
        {currentRelease.publishedAt && (
          <MetaRow
            label="Published on"
            value={formatDate(currentRelease.publishedAt)}
          />
        )}
        <MetaRow label="File name" value={currentRelease.fileName} />
        <MetaRow label="Size" value={currentRelease.fileSize} />
        <MetaRow
          label="Architecture"
          value={architectureLabels[currentRelease.architecture]}
        />
        <MetaRow
          label="Minimum Windows"
          value={currentRelease.minimumWindowsVersion}
        />
      </dl>
    </div>
  );
}
