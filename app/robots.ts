import type { MetadataRoute } from "next";
import { getSeoSettings } from "@/lib/content/seo-settings";
import { siteUrl } from "@/lib/seo";

// Reflects the admin panel's "Search engine visibility" toggle immediately.
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { allowIndexing } = await getSeoSettings();

  // Hidden: block everything, so a demo/preview URL never shows up in search
  // results or competes with the client's real domain.
  if (!allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/vddbinew/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
