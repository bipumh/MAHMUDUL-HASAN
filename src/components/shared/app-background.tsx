import { cn } from "@/lib/cn";
import { InteractiveBackground } from "@/components/shared/interactive-background";

/**
 * Fixed ambient backdrop.
 *
 * A quiet, layered editorial ground: a 12-column architectural construct, a
 * faint structural grid, warm atmospheric pools of light, an interactive
 * particle network that breathes gently with the pointer, a soft top light, a
 * gentle corner vignette for depth, and a barely-present film grain. The light
 * drifts only very slowly so the composition stays calm and the content stays
 * the visual priority.
 */
export function AppBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background",
        className,
      )}
    >
      {/* 12-column architectural guides, constrained to the content width */}
      <div className="mx-auto h-full w-full max-w-7xl bg-columns opacity-60" />

      {/* faint architectural grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* subtle warm center glow — espresso heart that lifts the base */}
      <div className="absolute left-1/2 top-[46%] h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(42,33,26,0.6),rgba(42,33,26,0)_70%)]" />

      {/* warm atmospheric pools of light — slow, near-silent */}
      <div className="absolute left-[-14%] top-[14%] h-[52vh] w-[46vw] rounded-full bg-[radial-gradient(46%_46%_at_50%_50%,rgba(196,122,68,0.10),transparent)] blur-[130px] animate-drift" />
      <div className="absolute bottom-[-12%] right-[-10%] h-[44vh] w-[40vw] rounded-full bg-[radial-gradient(46%_46%_at_50%_50%,rgba(210,182,146,0.085),transparent)] blur-[140px] animate-float-slow" />

      {/* interactive particle network + cursor-following glow */}
      <InteractiveBackground />

      {/* single restrained top light */}
      <div className="absolute inset-x-0 top-0 h-[52vh] bg-[radial-gradient(62%_92%_at_50%_0%,rgba(224,210,188,0.085),transparent)]" />

      {/* gentle depth — soft corner vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_42%,transparent_66%,rgba(0,0,0,0.2)_100%)]" />

      {/* refined film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />

      {/* vignette to keep the nav legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
