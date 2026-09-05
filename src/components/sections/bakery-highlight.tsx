import Image from "next/image";
import { ArrowRight, Croissant, CakeSlice, Clock3 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";

const stats = [
  { icon: Croissant, label: "Baked daily", value: "From 6 AM" },
  { icon: CakeSlice, label: "Custom cakes", value: "To order" },
  { icon: Clock3, label: "Advance notice", value: "48 hours" },
];

export function BakeryHighlight() {
  return (
    <section className="bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal direction="right" className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image
                src={img("1517433670267-08bbd4be890f", { w: 1100 })}
                alt="Brew & Crumb bakery counter filled with baguettes, sourdough loaves and pastries"
                width={1100}
                height={900}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-line bg-cream-light px-5 py-4 shadow-soft sm:block lg:-right-6">
              <p className="font-display text-lg font-semibold text-espresso">
                From the oven
              </p>
              <p className="text-xs text-muted">Artisan bread &amp; pastries</p>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Bakery & Celebration"
              title="Bread warm from the oven. Cakes made for the moment."
              description="Our bakery lamination begins at dawn — butter croissants, cinnamon cardamom buns and slow-fermented sourdough. And for the moments worth celebrating, our cake studio builds custom cakes exactly the way you imagine them."
            />

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.1} direction="up">
                  <div className="rounded-2xl border border-line/70 bg-cream-light p-4 text-center">
                    <s.icon aria-hidden className="mx-auto h-6 w-6 text-caramel" />
                    <p className="mt-2 font-display text-base font-semibold text-espresso">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25} direction="up">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/cakes" size="lg" variant="accent">
                  <CakeSlice aria-hidden className="h-4 w-4" />
                  Order a Cake
                </Button>
                <Button href="/menu#pastries" size="lg" variant="outline">
                  Explore the bakery
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
