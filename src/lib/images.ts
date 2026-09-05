/**
 * Central image helper.
 *
 * All photography on the site is served (and optimized) by Next.js from
 * Unsplash. Swapping these for CMS-hosted images later means changing the
 * `src` values in the data files only — the components stay the same.
 */
export function img(id: string, opts?: { w?: number; q?: number }): string {
  const w = opts?.w ?? 1200;
  const q = opts?.q ?? 80;
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export function blurId(id: string): string {
  return id;
}
