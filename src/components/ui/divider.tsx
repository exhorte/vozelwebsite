import { cx } from "@/src/lib/utils";

interface DividerProps {
  scheme?: "dark" | "light";
  className?: string;
}

/**
 * Thin, elegant divider following the Fluent brand guide.
 */
export function Divider({ scheme = "dark", className }: DividerProps) {
  return (
    <hr
      className={cx(
        "border-0 h-px w-full",
        scheme === "dark"
          ? "bg-fluent-border-dark"
          : "bg-fluent-border-light",
        className
      )}
    />
  );
}
