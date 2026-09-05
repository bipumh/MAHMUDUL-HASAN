import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryExplorer } from "@/components/sections/gallery-explorer";
import { CTASection } from "@/components/shared/cta-section";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Step inside Brew & Crumb — a photo gallery of our Gulshan café interior, specialty coffee, fresh pastries, custom cakes and the relaxed atmosphere that keeps Dhaka coming back.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside the room."
        description="Warm light, honest materials and good company. Browse our café interior, coffee, bakery and cakes — and come see it in person."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <GalleryExplorer />
        </div>
      </section>

      <CTASection
        className="pb-24"
        variant="dark"
        eyebrow="Come visit"
        title="The photos are nice. The room is better."
        description="Find your new favourite corner in Gulshan — reserve a table and see it for yourself."
        primary={{ label: "Reserve a Table", href: "/reservations" }}
        secondary={{ label: "Plan a cake order", href: "/cakes" }}
        image={img("1543007630-9710e4a00a20", { w: 1400 })}
      />
    </>
  );
}
