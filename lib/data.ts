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
    name: "Fatima H.",
    rating: 5,
    service: "Balayage",
    location: "Deira",
    review:
      "My balayage came out absolutely stunning. The colorist really understood what I wanted and matched it perfectly to my skin tone. Will be back every few months!",
    source: "google",
  },
  {
    id: "2",
    name: "Meera P.",
    rating: 5,
    service: "Hydra Facial",
    location: "Mankhool",
    review:
      "The hydra facial was so relaxing and my skin glowed for a week after. Perfect for Dubai's dry AC weather. The therapists are so professional and caring.",
    source: "google",
  },
  {
    id: "3",
    name: "Noor A.",
    rating: 5,
    service: "Eyelash Extensions",
    location: "Downtown Dubai",
    review:
      "Classic lash extensions done perfectly — natural looking and lasted 4 weeks. The lash artist was incredibly precise and hygienic. My go-to salon now!",
    source: "google",
  },
  {
    id: "4",
    name: "Priya S.",
    rating: 5,
    service: "Korean Head Spa",
    location: "Al Barsha",
    review:
      "Amazing experience! The head spa was so relaxing and the staff is so professional. The salon is spotless — you can really tell hygiene is a priority.",
    source: "google",
  },
  {
    id: "5",
    name: "Rohan M.",
    rating: 5,
    service: "Mens Haircut",
    location: "Karama",
    review:
      "Best haircut I've had in years. The barber actually listened to what I wanted instead of just doing his own thing. Will definitely be coming back.",
    source: "google",
  },
  {
    id: "6",
    name: "Aisha K.",
    rating: 5,
    service: "Bridal Makeup",
    location: "Jumeirah",
    review:
      "Booked them for my wedding and it was the best decision. The makeup lasted through the entire event and photographed beautifully. So many compliments!",
    source: "google",
  },
  {
    id: "7",
    name: "Sara T.",
    rating: 4,
    service: "Manicure & Pedicure",
    location: "Business Bay",
    review:
      "Loved the manicure, super neat finish and the nail art was exactly what I showed them. Only wish there was a bit more parking nearby!",
    source: "google",
  },
  {
    id: "8",
    name: "Omar R.",
    rating: 5,
    service: "Hair Repair Therapy",
    location: "Al Quoz",
    review:
      "My hair was so damaged from bleaching and the repair therapy genuinely brought it back to life. Noticeably softer after just one session.",
    source: "google",
  },
  {
    id: "9",
    name: "Layla F.",
    rating: 5,
    service: "Waxing / Threading",
    location: "Satwa",
    review:
      "Quick, gentle and precise every single time. I've tried a few salons around Bur Dubai and Satwa and this is by far the least painful and most consistent.",
    source: "google",
  },
  {
    id: "10",
    name: "Zainab Q.",
    rating: 5,
    service: "Nail Extensions",
    location: "Al Rigga",
    review:
      "The nail extensions are so durable, mine lasted almost a month with zero lifting. The salon is bright, clean, and the staff are genuinely lovely.",
    source: "google",
  },
  {
    id: "11",
    name: "Ahmed J.",
    rating: 5,
    service: "Couple Services",
    location: "JLT",
    review:
      "Came in with my wife for a couple's spa day and it was the perfect way to unwind. Great atmosphere and the staff made sure we were both taken care of.",
    source: "google",
  },
  {
    id: "12",
    name: "Huda S.",
    rating: 5,
    service: "Hair Color",
    location: "Oud Metha",
    review:
      "Went from dark brown to a full ash blonde in one visit and my hair still feels healthy. The colorist clearly knew what she was doing. Highly recommend.",
    source: "google",
  },
  {
    id: "13",
    name: "Yusuf B.",
    rating: 5,
    service: "Mens Haircut",
    location: "Al Barsha",
    review:
      "Sharp fade every time, no matter which barber I get. Booking through WhatsApp is so convenient and they're never running late.",
    source: "google",
  },
  {
    id: "14",
    name: "Reem N.",
    rating: 4,
    service: "Makeup",
    location: "Bur Dubai",
    review:
      "Got my makeup done for a family event and it looked flawless in photos. Would've loved a slightly longer appointment slot, but the result was great.",
    source: "google",
  },
  {
    id: "15",
    name: "Khalid M.",
    rating: 5,
    service: "Hair Treatment",
    location: "Marina",
    review:
      "The keratin treatment cut my styling time in half and my hair has never been this manageable. Staff explained the whole process before starting, appreciated that.",
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

export const instagramPosts: InstagramPost[] = Array.from({ length: 30 }).map(
  (_, i) => ({
    id: String(i + 1),
    caption: "Fresh from the salon floor ✨ #vrunisexsalon #dubaisalon",
    likes: 40 + i * 7,
    comments: 3 + (i % 5),
    timestamp: new Date(Date.now() - i * 86400000).toISOString(),
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
