import Image from "next/image";
import { getLogo, type LogoScheme } from "@/src/config/assets";
import { siteConfig } from "@/src/config/site";
import { cx } from "@/src/lib/utils";

interface LogoProps {
  scheme?: LogoScheme;
  size?: "medium" | "large";
  className?: string;
  showSymbol?: boolean;
  showName?: boolean;
}

/**
 * Fluent logo component.
 *
 * By default shows both the symbol and the name "Fluent".
 * On dark backgrounds use scheme="dark" (white logo).
 * On light backgrounds use scheme="light" (black logo).
 */
export function Logo({
  scheme = "dark",
  size = "medium",
  className,
  showSymbol = true,
  showName = true,
}: LogoProps) {
  const logoSrc = getLogo(scheme, size);
  const dimensions = size === "large" ? 48 : 36;

  return (
    <div className={cx("flex items-center gap-3 select-none", className)}>
      {showSymbol && (
        <Image
          src={logoSrc}
          alt=""
          width={dimensions}
          height={dimensions}
          priority
          aria-hidden="true"
          className="shrink-0"
        />
      )}
      {showName && (
        <span
          className={cx(
            "font-[family-name:var(--font-the-seasons)] text-xl tracking-wide",
            scheme === "dark" ? "text-fluent-white" : "text-fluent-ink"
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </div>
  );
}
