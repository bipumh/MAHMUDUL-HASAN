import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/menu", priority: 0.9 },
  { path: "/cakes", priority: 0.9 },
  { path: "/gallery", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/reservations", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
