import { Container } from "@/components/ui/container";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { executiveMetrics } from "@/data/achievements";

export function ExecutiveMetrics() {
  return (
    <section id="metrics" className="relative border-y border-line/60 bg-surface/30">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
            Proven · Measurable · Enterprise-wide
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {executiveMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05} direction="up">
              <div className="border-t border-line px-1 pt-5">
                <div className="font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-none tracking-tight text-gradient-steel">
                  {m.text ? (
                    <span>
                      {m.text}
                      {m.suffix}
                    </span>
                  ) : (
                    <Counter value={m.value ?? 0} suffix={m.suffix ?? ""} />
                  )}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-muted">
                  {m.label}
                </div>
                <div className="mt-1 hidden text-xs leading-snug text-faint lg:block">{m.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
