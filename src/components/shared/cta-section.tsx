import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  variant = "dark",
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <section className={cn("px-5 sm:px-8 lg:px-12", className)}>
      <div
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-3xl",
          dark ? "bg-espresso text-cream-light" : "bg-parchment text-espresso",
        )}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        ) : null}
        <div
          className={cn(
            "absolute inset-0",
            dark
              ? "bg-gradient-to-r from-espresso/95 via-espresso/85 to-espresso/40"
              : "bg-gradient-to-r from-parchment/95 via-parchment/85 to-parchment/40",
          )}
        />

        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <Reveal direction="up">
            <span
              className={cn(
                "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
                dark ? "text-caramel" : "text-caramel-dark",
              )}
            >
              <span aria-hidden className="h-px w-6 bg-current" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06} direction="up">
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.12} direction="up">
            <p
              className={cn(
                "mt-4 max-w-xl text-base leading-relaxed sm:text-lg",
                dark ? "text-cream/75" : "text-espresso/75",
              )}
            >
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.18} direction="up">
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={primary.href}
                size="lg"
                variant={dark ? "light" : "accent"}
              >
                {primary.label}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  size="lg"
                  variant={dark ? "outline-light" : "outline"}
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
