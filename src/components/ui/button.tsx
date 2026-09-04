import { cx } from "@/src/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-vozel-white text-vozel-ink hover:bg-vozel-paper focus-visible:bg-vozel-paper disabled:bg-vozel-disabled disabled:text-vozel-muted-dark",
  secondary:
    "border border-vozel-border-dark text-vozel-white hover:border-vozel-white/20 hover:bg-vozel-surface focus-visible:border-vozel-white/20 focus-visible:bg-vozel-surface disabled:border-vozel-disabled disabled:text-vozel-disabled",
  ghost:
    "text-vozel-muted-dark hover:text-vozel-white focus-visible:text-vozel-white disabled:text-vozel-disabled",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  default: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-[var(--duration-fast)] ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vozel-focus disabled:cursor-not-allowed select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, disabled, ...anchorProps } = props;
    if (disabled) {
      return (
        <span className={cx(classes, "pointer-events-none")}>
          {anchorProps.children as React.ReactNode}
        </span>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
