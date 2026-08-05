// Editable copy, split into the two things an owner actually thinks about:
// whole pages (with their Google listing) and the reusable blocks that make
// up the home page. Only namespaces wired to a public read are listed, so an
// edit here always shows up on the site.

export interface ContentEntry {
  namespace: string;
  label: string;
  description: string;
  /** Public URL this entry affects, shown as a "View" link. */
  path?: string;
}

// Full pages. Each of these namespaces carries a `meta` block, which the
// editor lifts into a highlighted SEO box at the top.
export const contentPages: ContentEntry[] = [
  {
    namespace: "siteMeta",
    label: "Home",
    description: "The homepage title and description shown in Google.",
    path: "/",
  },
  {
    namespace: "about",
    label: "About Us",
    description: "The About page — intro, photos and what makes us different.",
    path: "/about",
  },
  {
    namespace: "servicesPage",
    label: "Services",
    description: "The services listing page heading and intro.",
    path: "/services",
  },
  {
    namespace: "contactPage",
    label: "Contact Us",
    description: "The Contact page heading and intro.",
    path: "/contact",
  },
];

// Reusable blocks on the home page.
export const contentSections: ContentEntry[] = [
  { namespace: "hero", label: "Homepage Hero", description: "Headline and intro at the top of the homepage.", path: "/" },
  { namespace: "whyChooseUs", label: "Why Choose Us", description: "The four reasons block on the homepage.", path: "/" },
  { namespace: "meetTeam", label: "Meet the Team", description: "Heading for the team section.", path: "/" },
  { namespace: "servicesSection", label: "Services Section", description: "Heading above the services grid.", path: "/" },
  { namespace: "brandsWeUse", label: "Brands We Use", description: "Heading for the brand logos block.", path: "/" },
  { namespace: "pricing", label: "Pricing Section", description: "Heading above the pricing packages.", path: "/" },
  { namespace: "gallery", label: "Gallery Section", description: "Heading above the photo gallery.", path: "/" },
  { namespace: "testimonials", label: "Testimonials Section", description: "Heading above customer reviews.", path: "/" },
  { namespace: "faqSection", label: "FAQ Section", description: "Heading above the FAQ list.", path: "/" },
  { namespace: "contactSection", label: "Contact Section", description: "Text beside the appointment form.", path: "/contact" },
  { namespace: "footer", label: "Footer", description: "Footer tagline and column headings.", path: "/" },
];

const all = [...contentPages, ...contentSections];

export function getContentSection(namespace: string) {
  return all.find((s) => s.namespace === namespace);
}

export function isPage(namespace: string) {
  return contentPages.some((p) => p.namespace === namespace);
}
