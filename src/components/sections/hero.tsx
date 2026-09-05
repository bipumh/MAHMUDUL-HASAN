import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Coffee, Croissant } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { img } from "@/lib/images";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="relative z-10">
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-light px-4 py-1.5 text-xs font-medium text-muted">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-caramel" />
                {site.neighborhood}, {site.city} · Since {site.foundedYear}
              </span>
            </Reveal>

            <Reveal delay={0.08} direction="up">
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-espresso sm:text-6xl lg:text-[4.5rem] xl:text-7xl">
                Coffee, freshly baked,{" "}
                <span className="italic text-caramel">beautifully made.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} direction="up">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                A small-batch roastery and artisan bakery in the heart of
                Gulshan. Slow-brewed coffee, bread baked while you sleep, and
                celebration cakes made by hand — all under one warm roof.
              </p>
            </Reveal>

            <Reveal delay={0.24} direction="up">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/reservations" size="lg">
                  Reserve a Table
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
                <Button href="/cakes" size="lg" variant="outline">
                  <Croissant aria-hidden className="h-4 w-4" />
                  Order a Cake
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32} direction="up">
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line/70 pt-6">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-caramel" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-caramel" />
                    ))}
                  </span>
                  <span className="text-sm font-medium text-espresso">4.9 · 2,300 reviews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Coffee aria-hidden className="h-4 w-4 text-caramel" />
                  Home-roasted beans
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Croissant aria-hidden className="h-4 w-4 text-caramel" />
                  Baked fresh daily
                </div>
              </div>
            </Reveal>
          </div>

          {/* Imagery */}
          <Reveal direction="left" className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src={img("1509042239860-f550ce710b93", { w: 1200 })}
                  alt="Heart-shaped latte art in a white cup beside potted plants at Brew & Crumb"
                  width={1200}
                  height={1000}
                  priority
                  className="aspect-[6/5] w-full object-cover"
                />
              </div>

              {/* Overlapping secondary image */}
              <div className="absolute -bottom-8 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:block lg:-bottom-10 lg:left-6 lg:w-52">
                <Image
                  src={img("1555507036-ab1f4038808a", { w: 600 })}
                  alt="Freshly baked butter croissants"
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 top-6 rounded-2xl border border-line bg-cream-light/95 px-4 py-3 shadow-soft backdrop-blur sm:-right-6">
                <p className="font-display text-2xl font-semibold text-espresso">
                  6AM
                </p>
                <p className="text-xs text-muted">Bakery opens fresh</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex justify-center lg:mt-10">
          <Link
            href="#introduction"
            aria-label="Scroll to explore"
            className="group flex flex-col items-center gap-1 text-muted transition-colors hover:text-espresso"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
            <span aria-hidden className="block h-8 w-px bg-line transition-colors group-hover:bg-caramel" />
          </Link>
        </div>
      </div>
    </section>
  );
}
