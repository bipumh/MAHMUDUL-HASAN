import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-espresso text-cream-light hover:bg-coffee active:bg-charcoal shadow-soft hover:shadow-lift",
        accent:
          "bg-caramel text-cream-light hover:bg-caramel-dark active:bg-caramel-dark shadow-soft hover:shadow-lift",
        outline:
          "border border-espresso/30 bg-transparent text-espresso hover:border-espresso hover:bg-espresso hover:text-cream-light",
        "outline-light":
          "border border-cream/30 bg-transparent text-cream-light hover:border-cream-light hover:bg-cream-light hover:text-espresso",
        ghost:
          "bg-transparent text-espresso hover:bg-espresso/5",
        light:
          "bg-cream-light text-espresso hover:bg-white active:bg-parchment shadow-soft",
        link: "text-espresso underline-offset-4 hover:text-caramel hover:underline",
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
  const { variant, size, className, children, ariaLabel } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    const { href, external, onClick } = props;
    if (external) {
      return (
        <a
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
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
