export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  startingPrice: number;
  image?: string;
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
}
