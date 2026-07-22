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

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  startingPrice: number;
  image?: string;
  tagline?: string;
  heroBadge?: string;
  heroSubtitle?: string;
  longDescription?: string;
  highlights?: string[];
  journeyIntro?: { title: string; description: string };
  benefits?: ServiceBenefit[];
  treatments?: ServiceTreatment[];
  treatmentsSubtitle?: string;
  // Wider cards suit treatments carrying a tagline/best-for/result; the
  // default 3 suits shorter ones.
  treatmentColumns?: 2 | 3;
  process?: ProcessStep[];
  processTitle?: string;
  processSubtitle?: string;
  faqs?: FaqItem[];
  // Wording for the shared closing CTA; its layout and colours live in the
  // ContactCta component so a restyle there applies site-wide.
  ctaTitle?: string;
  ctaDescription?: string;
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
