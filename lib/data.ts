import type {
  FaqItem,
  GalleryImage,
  InstagramPost,
  NavLink,
  PricingPackage,
  Service,
  Testimonial,
} from "@/types";

// Placeholder content. Will be replaced by Sanity-backed queries once the
// studio schemas are set up.

export const services: Service[] = [
  {
    id: "1",
    slug: "manicure-pedicure",
    title: "Manicure & Pedicure",
    description: "Relaxing hand and foot care with premium products.",
    startingPrice: 499,
  },
  {
    id: "2",
    slug: "korean-head-spa",
    title: "Korean Head Spa",
    description: "Deep scalp cleansing and relaxation therapy.",
    startingPrice: 899,
  },
  {
    id: "3",
    slug: "women-haircut",
    title: "Women Haircut",
    description: "Precision cuts styled to suit your face and lifestyle.",
    startingPrice: 399,
  },
  {
    id: "4",
    slug: "mens-haircut",
    title: "Mens Haircut",
    description: "Sharp, modern cuts from experienced stylists.",
    startingPrice: 249,
  },
  {
    id: "5",
    slug: "hair-treatment",
    title: "Hair Treatment",
    description: "Nourishing treatments for healthy, shiny hair.",
    startingPrice: 999,
  },
  {
    id: "6",
    slug: "hair-repair-therapy",
    title: "Hair Repair Therapy",
    description: "Restorative therapy for damaged, weak hair.",
    startingPrice: 1299,
  },
  {
    id: "7",
    slug: "nail-extensions",
    title: "Nail Extensions",
    description: "Durable, salon-perfect nail extensions and art.",
    startingPrice: 799,
  },
  {
    id: "8",
    slug: "hair-color",
    title: "Hair Color",
    description: "Global and highlight coloring with premium brands.",
    startingPrice: 1499,
  },
  {
    id: "9",
    slug: "waxing-threading",
    title: "Waxing / Threading",
    description: "Smooth, gentle hair removal for face and body.",
    startingPrice: 199,
  },
  {
    id: "10",
    slug: "couple-services",
    title: "Couple Services",
    description: "Pamper sessions designed for two.",
    startingPrice: 1999,
  },
  {
    id: "11",
    slug: "eyelash-extensions",
    title: "Eyelash Extensions",
    description: "Natural to dramatic lash extensions, done right.",
    startingPrice: 899,
  },
  {
    id: "12",
    slug: "makeup",
    title: "Makeup",
    description: "Party, bridal and everyday makeup by experts.",
    startingPrice: 1499,
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Contact Us", href: "/contact" },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "1",
    name: "Glow Package",
    price: 1999,
    features: ["Haircut", "Head Spa", "Manicure", "Threading"],
  },
  {
    id: "2",
    name: "Bridal Package",
    price: 7999,
    features: ["Makeup", "Hair Styling", "Nail Extensions", "Facial", "Draping"],
    popular: true,
  },
  {
    id: "3",
    name: "Gents Grooming Package",
    price: 999,
    features: ["Haircut", "Beard Styling", "Face Cleanup"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Shah",
    rating: 5,
    review: "Amazing experience! The staff is so professional and the salon is spotless.",
    source: "google",
  },
  {
    id: "2",
    name: "Rohan Mehta",
    rating: 5,
    review: "Best haircut I've had in years. Will definitely be coming back.",
    source: "google",
  },
  {
    id: "3",
    name: "Ananya Patel",
    rating: 4,
    review: "Loved the Korean head spa treatment, so relaxing!",
    source: "website",
  },
  {
    id: "4",
    name: "Karan Joshi",
    rating: 5,
    review: "Great value for money and very hygienic environment.",
    source: "google",
  },
];

export const galleryImages: GalleryImage[] = Array.from({ length: 12 }).map(
  (_, i) => ({
    id: String(i + 1),
    src: "",
    alt: `Salon gallery photo ${i + 1}`,
    category: i % 3 === 0 ? "hair" : i % 3 === 1 ? "nails" : "makeup",
  })
);

export const instagramPosts: InstagramPost[] = Array.from({ length: 6 }).map(
  (_, i) => ({
    id: String(i + 1),
    caption: "Fresh from the salon floor ✨",
    likes: 40 + i * 7,
    permalink: "https://instagram.com/",
  })
);

export const faqs: FaqItem[] = [
  {
    id: "1",
    question: "Do I need to book an appointment in advance?",
    answer:
      "Walk-ins are welcome, but we recommend booking in advance via WhatsApp or call to avoid waiting.",
  },
  {
    id: "2",
    question: "What safety and hygiene measures do you follow?",
    answer:
      "All tools are sanitized after every use and our stations are cleaned throughout the day.",
  },
  {
    id: "3",
    question: "Do you offer services for both men and women?",
    answer: "Yes, VR Unisex Salon offers a full range of services for everyone.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major cards, and UPI payments.",
  },
];
