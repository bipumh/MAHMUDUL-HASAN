import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "vegan" | "vegetarian" | "gluten-free" | "iced" | "hot" | "signature" | "new" | "spicy";

const badgeStyles: Record<BadgeVariant, string> = {
  vegan: "bg-moss/12 text-moss",
  vegetarian: "bg-moss/12 text-moss",
  "gluten-free": "bg-moss/12 text-moss",
  iced: "bg-sky-100 text-sky-800",
  hot: "bg-caramel/12 text-caramel-dark",
  signature: "bg-caramel/15 text-caramel-dark",
  new: "bg-espresso/10 text-espresso",
  spicy: "bg-red-100 text-red-800",
};

const badgeLabels: Record<BadgeVariant, string> = {
  vegan: "Vegan",
  vegetarian: "Veg",
  "gluten-free": "GF",
  iced: "Iced",
  hot: "Hot",
  signature: "Signature",
  new: "New",
  spicy: "Spicy",
};

export function Badge({
  variant,
  className,
  children,
}: {
  variant: BadgeVariant | string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide",
        badgeStyles[variant as BadgeVariant],
        className,
      )}
    >
      {children ?? badgeLabels[variant as BadgeVariant]}
    </span>
  );
}
