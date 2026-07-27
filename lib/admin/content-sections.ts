// Curated site-copy sections exposed in the admin "Site Text" area. Only
// namespaces that are actually wired to a public read live here, so an edit
// always shows up on the site. Expand as more sections get wired.
export const contentSections: {
  namespace: string;
  label: string;
  description: string;
}[] = [
  { namespace: "hero", label: "Homepage Hero", description: "Headline and intro at the top of the homepage." },
  { namespace: "whyChooseUs", label: "Why Choose Us", description: "The four reasons block on the homepage." },
  { namespace: "meetTeam", label: "Meet the Team", description: "Heading for the team section." },
  { namespace: "servicesSection", label: "Services Section", description: "Heading above the services grid." },
  { namespace: "brandsWeUse", label: "Brands We Use", description: "Heading for the brand logos block." },
  { namespace: "pricing", label: "Pricing Section", description: "Heading above the pricing packages." },
  { namespace: "gallery", label: "Gallery Section", description: "Heading above the photo gallery." },
  { namespace: "testimonials", label: "Testimonials Section", description: "Heading above customer reviews." },
  { namespace: "faqSection", label: "FAQ Section", description: "Heading above the FAQ list." },
  { namespace: "contactSection", label: "Contact Section", description: "Text beside the appointment form." },
  { namespace: "footer", label: "Footer", description: "Footer tagline and column headings." },
];

export function getContentSection(namespace: string) {
  return contentSections.find((s) => s.namespace === namespace);
}
