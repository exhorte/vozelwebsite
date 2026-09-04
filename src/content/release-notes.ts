/**
 * Release notes content.
 *
 * Structure ready for future releases.
 * Each entry describes a published version.
 */

export interface ReleaseNote {
  version: string;
  date: string;
  channel: "stable" | "beta" | "preview";
  summary: string;
  highlights: string[];
  fixes: string[];
  knownIssues: string[];
  downloadUrl: string;
  sha256: string;
}

/**
 * Release notes are currently empty — awaiting the first
 * public release of Vozel.
 *
 * Add entries chronologically (most recent first).
 */
export const releaseNotes: ReleaseNote[] = [];

/**
 * Placeholder data for the release notes page when no
 * releases have been published yet.
 */
export const noReleasesMessage =
  "No version published yet. Release notes will appear here as soon as the first release is out.";
