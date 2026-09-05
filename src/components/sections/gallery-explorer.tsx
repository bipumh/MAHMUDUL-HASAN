"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageGallery } from "@/components/shared/image-gallery";
import { galleryPhotos, type GalleryPhoto } from "@/data/gallery";
import { cn } from "@/lib/cn";

const categories = ["All", ...Array.from(new Set(galleryPhotos.map((p) => p.category)))];

export function GalleryExplorer() {
  const [active, setActive] = useState("All");

  const photos: GalleryPhoto[] = useMemo(
    () => (active === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              active === cat
                ? "bg-espresso text-cream-light"
                : "border border-line bg-cream-light text-muted hover:border-espresso hover:text-espresso",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <ImageGallery photos={photos} className="mt-12" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
