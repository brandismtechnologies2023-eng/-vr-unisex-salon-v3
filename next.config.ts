import type { NextConfig } from "next";

// Service slugs were renamed for SEO; redirect the old URLs (which may
// already be indexed or bookmarked) permanently to the new ones.
const renamedServiceSlugs: [string, string][] = [
  ["manicure-pedicure", "manicure-pedicure-in-dubai"],
  ["korean-head-spa", "korean-head-spa-in-dubai"],
  ["women-haircut", "womens-haircut-in-dubai"],
  ["mens-haircut", "mens-grooming-and-styling-dubai"],
  ["hair-treatment", "hair-treatments-in-dubai"],
  ["nail-extensions", "nail-extensions-in-dubai"],
  ["hair-color", "professional-hair-colour-in-dubai"],
  ["waxing-threading", "ladies-waxing-threading-and-bleach-services-in-dubai"],
  ["couple-services", "couple-spa-and-salon-experience-in-dubai"],
  ["eyelash-extensions", "eyelash-extensions-in-dubai"],
  ["makeup", "professional-makeup-services-in-dubai"],
];

const nextConfig: NextConfig = {
  // The contact API route embeds the logo in the thank-you email via
  // fs.readFileSync — explicitly trace it so Vercel's serverless bundle
  // includes it (public/ assets aren't traced automatically).
  outputFileTracingIncludes: {
    "/api/contact": ["./public/images/logo.webp"],
  },
  async redirects() {
    return renamedServiceSlugs.map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
