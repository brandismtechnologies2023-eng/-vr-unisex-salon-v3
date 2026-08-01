// Search-engine indexing is opt-in. While the site lives on a temporary
// preview/demo URL it must stay out of Google, otherwise it competes with the
// client's real domain once that launches. Set ALLOW_INDEXING=true (and
// SITE_URL) in the environment of the real domain to turn indexing on.
export const indexingAllowed = process.env.ALLOW_INDEXING === "true";

export const siteUrl =
  process.env.SITE_URL?.replace(/\/$/, "") ?? "https://www.vrunisexsalon.com";
