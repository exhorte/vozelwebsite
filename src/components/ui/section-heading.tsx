import { cx } from "@/src/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  as?: HeadingLevel;
  align?: "center" | "left";
  scheme?: "dark" | "light";
  className?: string;
}

/**
 * Editorial section heading.
 *
 * Used across all sections for a consistent, premium
 * typographic rhythm (label → title → subtitle).
 */
export function SectionHeading({
  label,
  title,
  subtitle,
  as: Tag = "h2",
  align = "center",
  scheme = "dark",
  className,
}: SectionHeadingProps) {
  const labelColor =
    scheme === "dark" ? "text-fluent-muted-dark" : "text-fluent-muted-light";
  const titleColor =
    scheme === "dark" ? "text-fluent-white" : "text-fluent-ink";
  const subtitleColor =
    scheme === "dark" ? "text-fluent-muted-dark" : "text-fluent-muted-light";

  return (
    <div
      className={cx(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <span
          className={cx(
            "text-xs tracking-[0.2em] uppercase font-medium",
            labelColor
          )}
        >
          {label}
        </span>
      )}
      <Tag
        className={cx(
          "font-[family-name:var(--font-the-seasons)]",
          Tag === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08]"
            : Tag === "h2"
              ? "text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]"
              : "text-2xl sm:text-3xl tracking-tight leading-[1.15]",
          titleColor
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cx(
            "max-w-lg text-base sm:text-lg leading-relaxed",
            subtitleColor
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
