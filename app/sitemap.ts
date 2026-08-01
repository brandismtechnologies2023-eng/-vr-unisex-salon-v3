import type { MetadataRoute } from "next";
import { getServices } from "@/lib/content/services";
import { indexingAllowed, siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Nothing to advertise while the site is hidden from search engines.
  if (!indexingAllowed) return [];

  const services = await getServices();
  const now = new Date();

  const staticPages = ["", "/about", "/services", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
