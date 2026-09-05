import Image from "next/image";
import type { GalleryPhoto } from "@/data/gallery";
import { cn } from "@/lib/cn";

const ratioClass: Record<GalleryPhoto["ratio"], string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[3/5]",
};

export function ImageGallery({
  photos,
  className,
}: {
  photos: GalleryPhoto[];
  className?: string;
}) {
  return (
    <div className={cn("columns-2 gap-4 sm:columns-2 lg:columns-3 lg:gap-5", className)}>
      {photos.map((photo, i) => (
        <figure
          key={photo.src + i}
          className={cn(
            "group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl lg:mb-5",
            ratioClass[photo.ratio],
          )}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-espresso">
              {photo.category}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
