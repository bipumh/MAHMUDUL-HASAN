import { cn } from "@/lib/cn";

/**
 * Fixed ambient backdrop.
 *
 * A quiet, layered editorial ground: a 12-column architectural construct, a
 * faint structural grid, warm atmospheric pools of light, a soft top light, a
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

      {/* warm atmospheric pools of light — slow, near-silent */}
      <div className="absolute left-[-14%] top-[14%] h-[52vh] w-[46vw] rounded-full bg-[radial-gradient(46%_46%_at_50%_50%,rgba(150,144,134,0.05),transparent)] blur-[130px] animate-drift" />
      <div className="absolute bottom-[-12%] right-[-10%] h-[44vh] w-[40vw] rounded-full bg-[radial-gradient(46%_46%_at_50%_50%,rgba(126,118,108,0.045),transparent)] blur-[140px] animate-float-slow" />

      {/* single restrained top light */}
      <div className="absolute inset-x-0 top-0 h-[52vh] bg-[radial-gradient(62%_92%_at_50%_0%,rgba(188,180,169,0.045),transparent)]" />

      {/* gentle depth — soft corner vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_42%,transparent_66%,rgba(0,0,0,0.2)_100%)]" />

      {/* refined film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />

      {/* vignette to keep the nav legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
