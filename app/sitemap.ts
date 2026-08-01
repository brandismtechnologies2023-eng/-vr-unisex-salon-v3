import type { MetadataRoute } from "next";
import { getServices } from "@/lib/content/services";
import { getSeoSettings } from "@/lib/content/seo-settings";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Nothing to advertise while the site is hidden from search engines.
  const { allowIndexing } = await getSeoSettings();
  if (!allowIndexing) return [];

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
