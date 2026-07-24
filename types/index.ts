export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ServiceTreatment {
  id: string;
  category: string;
  name: string;
  description: string;
  // Optional: some treatments are described by prose and an outcome alone,
  // with no bullet list.
  features?: string[];
  // Heading above the feature list — varies per treatment ("What you get",
  // "Benefits", "Styling options"). Defaults to "Features".
  featuresLabel?: string;
  tagline?: string;
  bestFor?: string;
  // Label for the suitability line — "Best for" by default, but the copy
  // also uses "Best suited for", "Recommended for", "Perfect for".
  bestForLabel?: string;
  result?: string;
  // Label for the outcome line — "Result" by default, "Finish" for cuts.
  resultLabel?: string;
  // Caveat or aftercare advice shown under the summary.
  note?: string;
  noteLabel?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

// A "which option suits you" table pairing a goal with a recommendation.
export interface ServiceComparison {
  title: string;
  description?: string;
  goalLabel?: string;
  recommendedLabel?: string;
  rows: { goal: string; recommended: string }[];
}

// A plain titled group of points — for sections that read as reasons or
// outcomes rather than the icon-led benefits grid.
export interface ServiceHighlightGroup {
  title: string;
  description?: string;
  items: { title: string; description: string }[];
}

export interface ServiceCareTips {
  title: string;
  description?: string;
  tips: string[];
  note?: string;
}

// A second icon-led reasons block, distinct from `benefits` — some services
// (e.g. Korean Head Spa) need both a "Why Choose Us" block and a separate
// "Benefits of X" block.
export interface ServiceWhyChooseUs {
  title: string;
  subtitle?: string;
  items: ServiceBenefit[];
}

// A "who this is for" checklist — a short list of qualifying situations,
// each rendered with a checkmark.
export interface ServiceIdealFor {
  title: string;
  description?: string;
  items: string[];
}

// The professional product brands used during treatment, shown as a plain
// text/name plaque strip rather than real brand logos (we don't hold
// licensed logo assets for third-party brands).
export interface ServiceBrandsTrust {
  title: string;
  description?: string;
  // `logo` renders the brand's real logo image in place of the plain text
  // name when set; falls back to text if a brand has no logo asset yet.
  brands: { name: string; logo?: string; description: string }[];
  note?: string;
}

// A compact "see the real results" showcase — links out to the gallery and
// Instagram rather than curating per-service photos we don't have tagged.
export interface ServicePortfolio {
  title: string;
  description?: string;
}

// A short prose block (no bullets) — for a closing statement of intent
// that sits later in the page than `journeyIntro`, e.g. right before the
// portfolio/gallery section.
export interface ServiceNote {
  title: string;
  description: string;
}

export interface ServiceExpert {
  name: string;
  role: string;
  image: string;
  bio: string[];
  expertiseLabel?: string;
  expertise: string[];
  // Heading for the section; defaults to "Meet Your Expert".
  title?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  // Shorter name for CTAs/WhatsApp messages where the full SEO title
  // ("Manicure & Pedicure in Dubai") would read awkwardly. Falls back to
  // `title` when omitted.
  shortTitle?: string;
  description: string;
  startingPrice: number;
  image?: string;
  tagline?: string;
  heroBadge?: string;
  heroSubtitle?: string;
  longDescription?: string;
  highlights?: string[];
  journeyIntro?: { title: string; description: string };
  whyChooseUs?: ServiceWhyChooseUs;
  benefits?: ServiceBenefit[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  comparison?: ServiceComparison;
  highlightGroup?: ServiceHighlightGroup;
  // A second numbered list, for pages needing two (rendered right after
  // the first).
  secondaryHighlightGroup?: ServiceHighlightGroup;
  idealFor?: ServiceIdealFor;
  brandsTrust?: ServiceBrandsTrust;
  portfolio?: ServicePortfolio;
  closingNote?: ServiceNote;
  // Real reviews specific to this service, shown in place of the site-wide
  // homepage set inside ServiceDetail's reviews section.
  reviews?: Testimonial[];
  careTips?: ServiceCareTips;
  expert?: ServiceExpert;
  treatments?: ServiceTreatment[];
  treatmentsTitle?: string;
  treatmentsSubtitle?: string;
  // Wider cards suit treatments carrying a tagline/best-for/result; the
  // default 3 suits shorter ones.
  treatmentColumns?: 2 | 3;
  // A second, separately-headed treatment-card grid — for a distinct
  // sub-topic within the page (e.g. hair extension methods on the Hair
  // Treatments page) that doesn't belong under the main tab set.
  secondaryTreatments?: {
    title: string;
    subtitle?: string;
    columns?: 2 | 3;
    items: ServiceTreatment[];
  };
  process?: ProcessStep[];
  processTitle?: string;
  processSubtitle?: string;
  // Most services want their process/journey steps near the top, right
  // after the hero — but some want it later, after benefits and brand
  // trust. Defaults to early.
  processPosition?: "early" | "late";
  faqs?: FaqItem[];
  faqTitle?: string;
  // Wording for the shared closing CTA; its layout and colours live in the
  // ContactCta component so a restyle there applies site-wide.
  ctaTitle?: string;
  ctaDescription?: string;
  // Overrides the generic "Book Appointment" wording on this page's hero
  // and closing CTA buttons (e.g. "Book Your Facial"). Falls back to the
  // shared common.bookAppointmentLabel when unset.
  bookLabel?: string;
  // Search-result copy; falls back to the title and description.
  metaTitle?: string;
  metaDescription?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  service?: string;
  location?: string;
  image?: string;
  source?: "google" | "website";
}

export interface GalleryMedia {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  category?: string;
  // Intrinsic pixel size, used so images/videos render at their own
  // natural aspect ratio in the masonry grid instead of a forced crop.
  width?: number;
  height?: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface InstagramPost {
  id: string;
  image?: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp?: string;
  permalink: string;
  isVideo?: boolean;
}

export interface InstagramProfile {
  followersCount: number;
  mediaCount: number;
}
