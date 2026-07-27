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
  { label: "Fonctionnalités", href: "/#features" },
  { label: "Comment ça marche", href: "/#how-it-works" },
  { label: "Confidentialité", href: "/#privacy" },
  { label: "FAQ", href: "/faq" },
];

export const footerNavigation: NavItem[] = [
  { label: "Confidentialité", href: "/privacy" },
  { label: "FAQ", href: "/faq" },
  { label: "Notes de version", href: "/release-notes" },
  { label: "Mentions légales", href: "/legal" },
];

export const downloadCta = {
  label: "Télécharger",
  href: "/download",
} as const;
