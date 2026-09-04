import Link from "next/link";
import { Logo } from "@/src/components/ui/logo";
import { Divider } from "@/src/components/ui/divider";
import { footerNavigation, mainNavigation } from "@/src/config/navigation";
import { siteConfig } from "@/src/config/site";
import { currentYear } from "@/src/lib/utils";

/**
 * Minimal dark footer.
 *
 * Inspired by the Vozel brand guide: logo, tagline,
 * navigation, and copyright — nothing extraneous.
 */
export function SiteFooter() {
  return (
    <footer className="bg-vozel-ink border-t border-vozel-border-dark">
      <div className="mx-auto max-w-[var(--content-max)] px-6 py-16 sm:py-20">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Logo scheme="dark" size="medium" showSymbol={false} />
            <p className="text-sm text-vozel-muted-dark font-[family-name:var(--font-the-seasons)] italic">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <nav
              className="flex flex-col gap-2"
              aria-label="Navigation pied de page"
            >
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-vozel-muted-dark hover:text-vozel-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav
              className="flex flex-col gap-2"
              aria-label="Pages légales et informations"
            >
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-vozel-muted-dark hover:text-vozel-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-2 focus-visible:outline-vozel-focus rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Divider scheme="dark" className="my-8 sm:my-10" />

        {/* Bottom section */}
        <p className="text-xs text-vozel-muted-dark">
          &copy; {currentYear()} {siteConfig.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
