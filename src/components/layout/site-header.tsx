"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/src/components/ui/logo";
import { Button } from "@/src/components/ui/button";
import { MobileNavigation } from "@/src/components/layout/mobile-navigation";
import { mainNavigation, downloadCta } from "@/src/config/navigation";

/**
 * Fixed site header with transparent-to-opaque scroll transition.
 *
 * - Sticky at top with subtle background transition on scroll
 * - Desktop: logo + nav links + download CTA
 * - Mobile: logo + hamburger menu
 * - Full keyboard accessibility
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        closeMobile();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] transition-colors duration-[var(--duration-normal)] ${
          scrolled
            ? "bg-vozel-ink/95 backdrop-blur-sm border-b border-vozel-border-dark"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-full max-w-[var(--content-max)] items-center justify-between px-6"
          aria-label="Main navigation"
        >
          {/* Logo + brand */}
          <Link
            href="/"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vozel-focus rounded-sm"
            aria-label="Vozel — Home"
          >
            <Logo scheme="dark" size="medium" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-vozel-muted-dark hover:text-vozel-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vozel-focus rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href={downloadCta.href} variant="primary" size="sm">
              {downloadCta.label}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-vozel-white focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18 M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile navigation overlay */}
      <MobileNavigation
        open={mobileOpen}
        onClose={closeMobile}
      />
    </>
  );
}
