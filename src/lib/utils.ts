import { siteConfig } from "@/src/config/site";

/**
 * Shared utility: get the full canonical URL for a path.
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Format a date string for display (French locale).
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get the current year for copyright footers.
 */
export function currentYear(): number {
  return new Date().getFullYear();
}

/**
 * CSS class helper — concatenates truthy class values.
 * (Lightweight alternative when not using clsx/cn.)
 */
export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
