import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-bright disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-bright shadow-glow",
        outline:
          "border border-line-strong bg-surface/40 text-foreground hover:border-primary hover:text-primary hover:bg-primary-soft",
        ghost:
          "bg-transparent text-muted hover:text-foreground hover:bg-surface-2",
        soft:
          "bg-primary-soft text-primary-bright hover:bg-primary/20",
        "outline-dark":
          "border border-white/15 bg-transparent text-white hover:border-white hover:bg-white/10",
        white:
          "bg-foreground text-background hover:bg-white",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  download?: boolean;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: () => void;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit";
  onClick?: () => void;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ariaLabel, download } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    const { href, external, onClick } = props;
    if (external || download) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          {...(download ? { download: true } : {})}
          {...(!download ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
