import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { MenuItem, DietTag } from "@/data/menu";
import { img } from "@/lib/images";

export function MenuCard({ item }: { item: MenuItem }) {
  const safeImg = item.image ?? img("1498804103079-a6351b050096", { w: 800 });
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-cream-light shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-parchment">
        <Image
          src={safeImg}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-espresso">
            {item.name}
          </h3>
          <span className="shrink-0 font-display text-lg font-semibold text-caramel">
            {item.price}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant={tag as DietTag}>
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
