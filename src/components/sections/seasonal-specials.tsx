import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { getMenuByCategory } from "@/data/menu";

export function SeasonalSpecials() {
  const items = getMenuByCategory("seasonal").slice(0, 4);
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={
                <span className="inline-flex items-center gap-2">
                  <Sparkles aria-hidden className="h-4 w-4" /> Seasonal Specials
                </span>
              }
              title="Made for the moment, gone in a month."
              description="Short-lived recipes shaped by the Dhaka season — ripe mangoes in summer, warming spices in the winter months, and always something worth trying before it disappears."
            />
            <Reveal delay={0.2} direction="up">
              <Link
                href="/menu#seasonal"
                className="group mt-8 inline-flex items-center gap-2 font-medium text-caramel underline-offset-4 hover:underline"
              >
                See what&apos;s seasonal now
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08} direction="up" className="h-full">
                <Link href="/menu#seasonal" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/70 bg-cream-light shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                    <div className="absolute left-3 top-3">
                      <Badge variant="new">Limited</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-espresso">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-display text-base font-semibold text-caramel">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
