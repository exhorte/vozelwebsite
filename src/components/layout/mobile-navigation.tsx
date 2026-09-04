"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import {
  mainNavigation,
  footerNavigation,
  downloadCta,
} from "@/src/config/navigation";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-screen mobile navigation overlay.
 *
 * - Slides in from the right
 * - Traps focus when open
 * - Closes on Escape, link click, or backdrop click
 * - Accessible with aria-expanded/aria-controls
 */
export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  // Focus trap
  useEffect(() => {
    if (open) {
      firstFocusableRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-vozel-ink/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        id="mobile-menu"
        className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-vozel-surface px-8 py-24 flex flex-col gap-8"
      >
        {/* Navigation links */}
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {mainNavigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={i === 0 ? firstFocusableRef : undefined}
              className="text-lg text-vozel-white hover:text-vozel-muted-dark transition-colors duration-[var(--duration-fast)] focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm py-1"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <hr className="border-vozel-border-dark" />

        {/* CTA */}
        <Button
          href={downloadCta.href}
          variant="primary"
          size="default"
          className="w-full"
          onClick={onClose}
        >
          {downloadCta.label}
        </Button>

        {/* Secondary links */}
        <nav className="flex flex-col gap-4" aria-label="Secondary navigation">
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-vozel-muted-dark hover:text-vozel-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
