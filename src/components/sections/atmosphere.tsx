import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ImageGallery } from "@/components/shared/image-gallery";
import { galleryPhotos } from "@/data/gallery";

export function Atmosphere() {
  const preview = galleryPhotos.filter((p) => p.featured).slice(0, 5);
  // Pad with a couple more for a balanced masonry block.
  const photos =
    preview.length >= 4
      ? preview
      : [...preview, ...galleryPhotos.slice(0, 4 - preview.length)];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="The atmosphere"
            title="Come for the coffee, stay for the room."
            description="Soft light, honest materials and a warm welcome. A glimpse of the space and the moments that happen inside it."
          />
          <Reveal direction="up" className="shrink-0">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 font-medium text-caramel underline-offset-4 hover:underline"
            >
              View the gallery
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} direction="up" className="mt-12">
          <ImageGallery photos={photos} />
        </Reveal>
      </div>
    </section>
  );
}
