import Image from "next/image";
import type { CakeGalleryItem } from "@/data/cakes";

export function CakeCard({ cake }: { cake: CakeGalleryItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 bg-cream-light shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-parchment">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream-light/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-espresso">
          {cake.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-espresso">
            {cake.name}
          </h3>
          {cake.priceFrom ? (
            <span className="shrink-0 text-sm font-semibold text-caramel">
              {cake.priceFrom}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {cake.description}
        </p>
      </div>
    </article>
  );
}
