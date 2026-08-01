// Canonical origin used in robots.txt and the sitemap. Set SITE_URL to the
// real domain when the site launches. Whether search engines may index the
// site is a separate, admin-controlled toggle — see lib/content/seo-settings.
export const siteUrl =
  process.env.SITE_URL?.replace(/\/$/, "") ?? "https://www.vrunisexsalon.com";
