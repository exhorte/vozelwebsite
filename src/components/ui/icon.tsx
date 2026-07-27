import { cx } from "@/src/lib/utils";

export type IconName =
  | "shield"
  | "globe"
  | "edit"
  | "book"
  | "cursor"
  | "lock"
  | "wifi-off"
  | "clock"
  | "keyboard"
  | "download"
  | "check"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-up"
  | "chevron-right"
  | "x"
  | "menu"
  | "external-link"
  | "copy"
  | "info"
  | "alert"
  | "file";

/**
 * Minimal inline SVG icon set.
 *
 * All icons are 24×24, stroke-based, and inherit
 * currentColor for theme compatibility.
 */
function iconPath(name: IconName): string {
  switch (name) {
    case "shield":
      return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z";
    case "globe":
      return "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z";
    case "edit":
      return "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z";
    case "book":
      return "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z";
    case "cursor":
      return "M5 3l14 9-7 2-3 7-4-18z";
    case "lock":
      return "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4";
    case "wifi-off":
      return "M1 1l22 22 M16.72 11.06A10.94 10.94 0 0 1 19 12.55 M5 12.55a10.94 10.94 0 0 1 5.17-2.39 M10.71 5.05A16 16 0 0 1 22.58 9 M1.42 9a15.91 15.91 0 0 1 4.7-2.88 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01";
    case "clock":
      return "M12 6v6l4 2 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z";
    case "keyboard":
      return "M6 8h2M10 8h4M16 8h2M6 12h2M10 12h4M16 12h2M6 16h12 M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z";
    case "download":
      return "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3";
    case "check":
      return "M20 6L9 17l-5-5";
    case "arrow-right":
      return "M5 12h14 M12 5l7 7-7 7";
    case "arrow-left":
      return "M19 12H5 M12 19l-7-7 7-7";
    case "chevron-down":
      return "M6 9l6 6 6-6";
    case "chevron-up":
      return "M18 15l-6-6-6 6";
    case "chevron-right":
      return "M9 18l6-6-6-6";
    case "x":
      return "M18 6L6 18 M6 6l12 12";
    case "menu":
      return "M4 6h16M4 12h16M4 18h16";
    case "external-link":
      return "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3";
    case "copy":
      return "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M8 2h8v4H8z";
    case "info":
      return "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 16v-4 M12 8h.01";
    case "alert":
      return "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01";
    case "file":
      return "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7";
    default:
      return "";
  }
}

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Minimal inline SVG icon component.
 *
 * All icons are 24×24 viewBox, stroke-based, and
 * inherit currentColor from the parent element.
 */
export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 2,
}: IconProps) {
  const pathD = iconPath(name);
  if (!pathD) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("shrink-0", className)}
      aria-hidden="true"
    >
      <path d={pathD} />
    </svg>
  );
}
