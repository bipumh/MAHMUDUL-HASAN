import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";
import { achievementStories } from "@/data/achievements";

export function AchievementStories() {
  return (
    <Section id="stories" className="bg-surface/20">
      <SectionHeading
        eyebrow="Significant work"
        title="ACHIEVEMENT STORIES"
        description="Defining initiatives delivered across the career — each rooted in a real outcome and a domain of enterprise technology leadership."
      />

      <div className="mt-16 border-t border-line">
        {achievementStories.map((story, i) => (
          <Reveal key={story.id} delay={Math.min(i * 0.04, 0.32)} direction="up">
            <article className="group relative grid gap-5 border-b border-line py-8 transition-colors duration-300 sm:grid-cols-12 sm:gap-8">
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-0 h-full w-px bg-primary/60 transition-opacity duration-300",
                  story.featured ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                )}
              />

              {/* index + domain */}
              <div className="flex items-start gap-4 sm:col-span-3 sm:flex-col sm:gap-3">
                <span
                  className={cn(
                    "font-mono text-sm font-semibold transition-colors duration-300",
                    story.featured ? "text-primary-bright" : "text-faint",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  {story.domain}
                </span>
              </div>

              {/* title + body */}
              <div className="sm:col-span-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {story.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{story.body}</p>
              </div>

              {/* tags */}
              <div className="sm:col-span-3 sm:text-right">
                <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                  {story.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
