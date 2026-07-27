"use client";

import { useState, useCallback } from "react";
import { Icon } from "@/src/components/ui/icon";
import { currentRelease } from "@/src/config/release";
import { cx } from "@/src/lib/utils";

/**
 * Checksum display with copy-to-clipboard functionality.
 *
 * Only renders when a checksum is available.
 * Shows a brief "Copié !" feedback on click.
 */
export function ChecksumCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!currentRelease.sha256) return;
    try {
      await navigator.clipboard.writeText(currentRelease.sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — silently ignore
    }
  }, []);

  if (!currentRelease.sha256 || !currentRelease.isAvailable) return null;

  return (
    <div className="w-full max-w-sm mx-auto mt-6">
      <h4 className="text-xs tracking-[0.15em] uppercase text-fluent-muted-dark font-medium mb-2 text-center">
        Checksum SHA-256
      </h4>
      <div className="flex items-center gap-2 bg-fluent-surface border border-fluent-border-dark rounded-md p-3">
        <code className="flex-1 text-xs text-fluent-muted-dark/80 font-mono break-all">
          {currentRelease.sha256}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className={cx(
            "shrink-0 flex items-center gap-1.5 text-xs transition-colors rounded-sm px-2 py-1 focus-visible:outline-2 focus-visible:outline-fluent-focus",
            copied
              ? "text-fluent-success"
              : "text-fluent-muted-dark hover:text-fluent-white"
          )}
          aria-label={copied ? "Checksum copié" : "Copier le checksum"}
        >
          <Icon
            name={copied ? "check" : "copy"}
            size={14}
            strokeWidth={1.5}
          />
          {copied ? "Copié !" : "Copier"}
        </button>
      </div>
    </div>
  );
}
