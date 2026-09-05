import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";
import type { MenuItem, DietTag } from "@/data/menu";

export function MenuItemRow({
  item,
  className,
}: {
  item: MenuItem;
  className?: string;
}) {
  return (
    <Reveal direction="up" className="h-full">
      <div className={cn("flex h-full flex-col gap-2 py-5", className)}>
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-xl font-semibold text-espresso">
            {item.name}
          </h3>
          <span
            aria-hidden
            className="flex-1 border-b border-dotted border-line"
          />
          <span className="shrink-0 font-display text-lg font-semibold text-caramel">
            {item.price}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{item.description}</p>

        {item.tags && item.tags.length > 0 ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant={tag as DietTag}>
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
