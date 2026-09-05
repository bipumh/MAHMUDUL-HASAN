import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { MenuCard } from "@/components/shared/menu-card";
import { getFeaturedMenuItems } from "@/data/menu";

export function FeaturedMenu() {
  const items = getFeaturedMenuItems(6);
  return (
    <section className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From the kitchen"
            title="Favourites our regulars can't resist."
            description="A taste of the menu — each one made in-house, every single day."
          />
          <Reveal direction="up" className="shrink-0">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 font-medium text-caramel underline-offset-4 hover:underline"
            >
              View the full menu
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.name} className="h-full">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
