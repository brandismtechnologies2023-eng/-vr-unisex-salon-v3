import { teamContent } from "@/lib/content/team";
import { testimonialsContent } from "@/lib/content/testimonials";
import { galleryContent } from "@/lib/content/gallery";
import { faqsContent } from "@/lib/content/faqs";
import { pricingContent } from "@/lib/content/pricing";
import type { makeCollection } from "@/lib/content/collection";

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "image"
  | "select"
  | "stringlist"
  | "boolean";

export interface FieldSpec {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
  accept?: string;
  help?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyCollection = ReturnType<typeof makeCollection<any>>;

export interface CollectionConfig {
  key: string;
  label: string;
  singular: string;
  description: string;
  fields: FieldSpec[];
  content: AnyCollection;
  // Public paths to refresh after a change.
  revalidate: string[];
  // How each row is summarised in the list.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: (item: any) => { primary: string; secondary?: string; thumb?: string };
}

export const collections: Record<string, CollectionConfig> = {
  team: {
    key: "team",
    label: "Team",
    singular: "Team Member",
    description: "Stylists and staff shown on the homepage and About page.",
    content: teamContent,
    revalidate: ["/", "/about"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "role", label: "Role", type: "text", required: true },
      { name: "bio", label: "Bio", type: "textarea", required: true },
      { name: "image", label: "Photo", type: "image" },
    ],
    row: (m) => ({ primary: m.name, secondary: m.role, thumb: m.image }),
  },

  testimonials: {
    key: "testimonials",
    label: "Testimonials",
    singular: "Testimonial",
    description: "Customer reviews shown on the homepage.",
    content: testimonialsContent,
    revalidate: ["/"],
    fields: [
      { name: "name", label: "Customer Name", type: "text", required: true },
      { name: "rating", label: "Rating (1–5)", type: "number", required: true },
      { name: "review", label: "Review", type: "textarea", required: true },
      { name: "service", label: "Service", type: "text" },
      { name: "location", label: "Location", type: "text" },
      {
        name: "source",
        label: "Source",
        type: "select",
        options: [
          { value: "google", label: "Google" },
          { value: "website", label: "Website" },
        ],
      },
      { name: "image", label: "Photo", type: "image" },
    ],
    row: (t) => ({ primary: t.name, secondary: t.review, thumb: t.image }),
  },

  gallery: {
    key: "gallery",
    label: "Gallery",
    singular: "Gallery Item",
    description: "Photos and videos shown in the homepage gallery.",
    content: galleryContent,
    revalidate: ["/"],
    fields: [
      {
        name: "type",
        label: "Type",
        type: "select",
        required: true,
        options: [
          { value: "image", label: "Image" },
          { value: "video", label: "Video" },
        ],
      },
      { name: "src", label: "File", type: "image", accept: "image/*,video/*" },
      { name: "alt", label: "Description (alt text)", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "width", label: "Width (px)", type: "number" },
      { name: "height", label: "Height (px)", type: "number" },
    ],
    row: (g) => ({ primary: g.alt, secondary: g.type, thumb: g.type === "image" ? g.src : undefined }),
  },

  faqs: {
    key: "faqs",
    label: "FAQs",
    singular: "FAQ",
    description: "Frequently asked questions on the homepage.",
    content: faqsContent,
    revalidate: ["/"],
    fields: [
      { name: "question", label: "Question", type: "text", required: true },
      { name: "answer", label: "Answer", type: "textarea", required: true },
    ],
    row: (f) => ({ primary: f.question, secondary: f.answer }),
  },

  pricing: {
    key: "pricing",
    label: "Pricing",
    singular: "Package",
    description: "Pricing packages shown on the homepage.",
    content: pricingContent,
    revalidate: ["/"],
    fields: [
      { name: "name", label: "Package Name", type: "text", required: true },
      { name: "price", label: "Price (AED)", type: "number", required: true },
      {
        name: "features",
        label: "Features (one per line)",
        type: "stringlist",
        help: "Each line becomes a bullet point.",
      },
      { name: "popular", label: "Mark as popular", type: "boolean" },
    ],
    row: (p) => ({ primary: p.name, secondary: `AED ${p.price}` }),
  },
};

export function getCollection(key: string): CollectionConfig | undefined {
  return collections[key];
}
