/**
 * Centralized release configuration.
 *
 * Update this single file to activate the download button
 * and propagate release metadata across the entire site.
 *
 * When downloadUrl is an empty string, the download button
 * renders in a "coming soon" disabled state.
 */

export interface ReleaseInfo {
  version: string;
  channel: "stable" | "beta" | "preview";
  publishedAt: string;
  downloadUrl: string;
  fileName: string;
  fileSize: string;
  architecture: "x64" | "arm64" | "x64-arm64";
  minimumWindowsVersion: string;
  sha256: string;
  releaseNotesUrl: string;
  isAvailable: boolean;
}

export const currentRelease: ReleaseInfo = {
  version: "",
  channel: "preview",
  publishedAt: "",
  downloadUrl: "",
  fileName: "",
  fileSize: "",
  architecture: "x64",
  minimumWindowsVersion: "Windows 10 (version 21H2 or later)",
  sha256: "",
  releaseNotesUrl: "/release-notes",
  isAvailable: false,
} as const;

/**
 * Human-readable labels for release channels.
 */
export const channelLabels: Record<ReleaseInfo["channel"], string> = {
  stable: "Stable release",
  beta: "Beta release",
  preview: "Preview",
};

/**
 * Human-readable labels for architectures.
 */
export const architectureLabels: Record<ReleaseInfo["architecture"], string> =
  {
    x64: "64-bit (x64)",
    arm64: "ARM64",
    "x64-arm64": "x64 and ARM64",
  };
