import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/contact"]; // add more routes here
  const now = new Date();
  return pages.map((p) => ({
    url: `${SITE.url}${p === "/" ? "" : p}` || SITE.url,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}