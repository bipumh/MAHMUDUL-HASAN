import type { Metadata } from "next";
import { Phone, CakeSlice, Clock3, Palette, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CakeCard } from "@/components/shared/cake-card";
import { CakeOrderForm } from "@/components/forms/cake-order-form";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import {
  cakeGallery,
  cakeCategories,
  cakeFlavors,
  cakeSizes,
  cakeLeadTime,
} from "@/data/cakes";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cakes & Celebration Orders",
  description:
    "Order custom cakes in Dhaka from Brew & Crumb. Chocolate, classic, fresh fruit, celebration and designer cakes — flavours, sizes and custom cake orders for birthdays and events.",
};

const cookingSteps = [
  {
    icon: MessageSquare,
    title: "1 · Tell us your idea",
    body: "Share the occasion, theme, flavours and budget through the form or WhatsApp.",
  },
  {
    icon: Palette,
    title: "2 · We design & quote",
    body: "Our cake studio replies with a design suggestion and a clear price within hours.",
  },
  {
    icon: Clock3,
    title: "3 · We bake & you collect",
    body: "Cakes are made fresh for your date — collect in store or arrange delivery.",
  },
];

export default function CakesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cakes & Celebrations"
        title="The centrepiece of every celebration."
        description="From birthday drip cakes to bespoke wedding tiers, our cake studio bakes every order by hand in Gulshan. Choose a flavour, a size, or design something entirely your own."
      >
        <Reveal delay={0.18} direction="up" className="mt-8">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#cake-order" size="lg" variant="accent">
              <CakeSlice aria-hidden className="h-4 w-4" />
              Start a cake order
            </Button>
            <Button href={site.whatsappHref} size="lg" variant="outline" external>
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </PageHero>

      {/* Cake gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The collection"
            title="A taste of what we make."
            description="A few of our most-loved designs. Every one can be adapted in flavour, colour and size."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cakeGallery.map((cake, i) => (
              <Reveal key={cake.name} delay={(i % 3) * 0.08} direction="up" className="h-full">
                <CakeCard cake={cake} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Cake styles"
            title="Find the right cake for the occasion."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {cakeCategories.map((c, i) => (
              <Reveal key={c.label} delay={(i % 5) * 0.06} direction="up" className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-cream-light p-6 shadow-soft">
                  <h3 className="font-display text-lg font-semibold text-espresso">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flavours + sizes */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Flavours" title="Choose your layers." />
              <div className="mt-8 flex flex-wrap gap-3">
                {cakeFlavors.map((f, i) => (
                  <Reveal key={f.name} delay={(i % 6) * 0.04} direction="up">
                    <span className="inline-flex flex-col rounded-2xl border border-line/70 bg-cream-light px-4 py-3 shadow-soft transition-colors hover:border-caramel/50">
                      <span className="font-medium text-espresso">{f.name}</span>
                      <span className="text-xs text-muted">{f.hint}</span>
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Sizes" title="Right-sized for your table." />
              <div className="mt-8 overflow-hidden rounded-2xl border border-line/70">
                {cakeSizes.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.05} direction="up">
                    <div className="flex items-center justify-between gap-4 border-b border-line/60 bg-cream-light px-5 py-4 last:border-0 hover:bg-parchment/60">
                      <div>
                        <p className="font-medium text-espresso">{s.label}</p>
                        <p className="text-xs text-muted">{s.serves}</p>
                      </div>
                      <span className="shrink-0 font-display text-lg font-semibold text-caramel">
                        {s.priceFrom}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted">
                Prices are starting points; your final quote depends on design and decoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works + lead time */}
      <section className="bg-background-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="How ordering works"
                title="From idea to celebration cake."
              />
              <div className="mt-8 space-y-6">
                {cookingSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.1} direction="up">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-caramel text-cream-light">
                        <step.icon aria-hidden className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-espresso">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Lead time" title="Plan a little ahead." />
              <Reveal direction="up">
                <div className="mt-8 rounded-2xl border border-line/70 bg-cream-light p-7 shadow-soft">
                  <p className="text-sm leading-relaxed text-muted">{cakeLeadTime}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-medium text-cream-light transition-colors hover:bg-moss/90"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp us
                    </a>
                    <a
                      href={site.phoneHref}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-espresso/20 bg-cream-light px-5 py-3 text-sm font-medium text-espresso transition-colors hover:border-espresso"
                    >
                      <Phone aria-hidden className="h-4 w-4 text-caramel" />
                      {site.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="cake-order" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Order your cake"
                title="Tell us about your celebration."
                description="Fill in the details and we'll reply with a quote and confirmation. Standard cakes need 48 hours' notice; custom designs need 5–7 days."
              />
              <div className="mt-8 rounded-2xl border border-line/70 bg-cream-light p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso text-cream-light">
                    <CakeSlice aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-espresso">Need it sooner?</p>
                    <p className="text-xs text-muted">
                      Call us — we may be able to help.
                    </p>
                  </div>
                </div>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-caramel underline-offset-4 hover:underline"
                >
                  <Phone aria-hidden className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-line/70 bg-cream-light p-6 shadow-soft sm:p-9">
              <CakeOrderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
