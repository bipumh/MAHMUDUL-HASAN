import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { img } from "@/lib/images";
import { site } from "@/data/site";

const features = [
  {
    title: "Homemade, from scratch",
    body: "Bread, pastries, cakes and sauces — everything is made in our own kitchen each day.",
  },
  {
    title: "Slow, considered coffee",
    body: "Beans roasted in small batches and brewed to order, never sitting under a heat lamp.",
  },
];

export function Intro() {
  return (
    <section id="introduction" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="Welcome to Brew & Crumb"
              title="A neighbourhood café, built on craft and warmth."
              description={`Since ${site.foundedYear}, we've been pouring considered cups and pulling golden pastries out of the oven in ${site.neighborhood}, ${site.city}. We kept it simple — honest ingredients, honest hospitality, and space to linger.`}
            />

            <div className="mt-8 space-y-6">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.1} direction="up">
                  <div className="flex gap-4">
                    <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-caramel" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-espresso">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25} direction="up">
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 font-medium text-caramel underline-offset-4 hover:underline"
              >
                Read our story
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Imagery */}
          <Reveal direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-10">
                <div className="overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={img("1493857671505-72967e2e2760", { w: 800 })}
                    alt="Minimal café interior with pendant lights and a menu board"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src={img("1541167760496-1628856ab772", { w: 800 })}
                  alt="A barista pouring steamed milk into a flat white"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
