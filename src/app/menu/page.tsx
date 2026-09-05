import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading, Eyebrow } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { MenuCategoryNav } from "@/components/sections/menu-category-nav";
import { MenuItemRow } from "@/components/shared/menu-item-row";
import { CTASection } from "@/components/shared/cta-section";
import { menuCategories, getMenuByCategory } from "@/data/menu";
import { site } from "@/data/site";
import { img } from "@/lib/images";
import { WhatsAppIcon } from "@/components/shared/social-icons";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Brew & Crumb menu — specialty coffee, loose-leaf teas, all-day breakfast, freshly baked pastries, cakes, desserts and seasonal specials in Gulshan, Dhaka.",
};

const dietaryNotes = [
  { key: "V", label: "Vegetarian" },
  { key: "VG", label: "Vegan" },
  { key: "GF", label: "Gluten-friendly" },
  { key: "S", label: "Signature" },
  { key: "N", label: "New" },
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Made fresh, poured with care."
        description="Everything is prepared in-house — from single-origin cups to bread that never sits. Browse by category, or ask our team for today's bake."
      >
        <Reveal delay={0.18} direction="up" className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/20 bg-cream-light px-5 py-2.5 text-sm font-medium text-espresso transition-colors hover:border-espresso"
            >
              <WhatsAppIcon className="h-4 w-4 text-moss" />
              Order for pickup on WhatsApp
            </a>
          </div>
        </Reveal>
      </PageHero>

      <MenuCategoryNav />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {menuCategories.map((cat, idx) => {
          const items = getMenuByCategory(cat.id);
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-36 border-t border-line/60 py-14 first:border-t-0 sm:py-16"
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <SectionHeading
                    eyebrow={cat.label}
                    title={cat.label}
                    description={cat.blurb}
                  />
                  <div className="mt-6 hidden flex-wrap gap-5 lg:flex">
                    {idx === 0 &&
                      dietaryNotes.map((d) => (
                        <div key={d.key} className="flex items-center gap-2 text-xs text-muted">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-line bg-cream-light text-[10px] font-bold text-espresso">
                            {d.key}
                          </span>
                          {d.label}
                        </div>
                      ))}
                  </div>
                </div>

                <div className="divide-y divide-line/60">
                  {items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Dietary key for mobile */}
        <section className="border-t border-line/60 py-10">
          <EntourageKeyMobile />
        </section>
      </div>

      <CTASection
        className="mt-2 px-5 pb-24 sm:px-8 lg:px-12"
        variant="dark"
        eyebrow="All-day café"
        title="Great food deserves a great seat."
        description="Come taste it fresh from the kitchen. Reserve a table, or simply drop by — there's a warm welcome and a good coffee waiting."
        primary={{ label: "Reserve a Table", href: "/reservations" }}
        secondary={{ label: "Order a Cake", href: "/cakes" }}
        image={img("1521017432531-fbd92d768814", { w: 1400 })}
      />
    </>
  );
}

function EntourageKeyMobile() {
  return (
    <div className="flex flex-col items-center text-center">
      <Eyebrow>Good to know</Eyebrow>
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        {dietaryNotes.map((d) => (
          <div key={d.key} className="flex items-center gap-2 text-xs text-muted">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-line bg-cream-light text-[10px] font-bold text-espresso">
              {d.key}
            </span>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
