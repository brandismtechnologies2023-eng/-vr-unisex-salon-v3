import type { MetadataRoute } from "next";
import { indexingAllowed, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Demo/preview deployments: block everything, so the temporary URL never
  // shows up in search results or competes with the real domain.
  if (!indexingAllowed) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/vddbinew/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
