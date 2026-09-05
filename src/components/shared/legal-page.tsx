import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro} />
      <Container className="pb-24">
        <div className="mx-auto max-w-3xl">
          {sections.map((section) => (
            <div key={section.heading} className="border-t border-line/70 py-8">
              <h2 className="font-display text-xl font-semibold text-espresso">
                {section.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
          <p className="border-t border-line/70 pt-8 text-xs text-muted">
            Last updated: September 2026. This is a fictional demonstration site.
          </p>
        </div>
      </Container>
    </>
  );
}

export type LegalPageData = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function legalMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return { title, description };
}
