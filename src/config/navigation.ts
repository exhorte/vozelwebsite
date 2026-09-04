/**
 * Navigation configuration.
 *
 * Used by the site header, mobile menu, and footer.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Privacy", href: "/#privacy" },
  { label: "FAQ", href: "/faq" },
];

export const footerNavigation: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
  { label: "Release notes", href: "/release-notes" },
  { label: "Legal notice", href: "/legal" },
];

export const downloadCta = {
  label: "Download",
  href: "/download",
} as const;
