import type {
  FaqItem,
  GalleryMedia,
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
    tagline: "Nail Care",
    longDescription:
      "From a quick tidy-up to a full spa-style treatment, our manicure and pedicure menu is built around clean, careful technique and premium products — so your hands and feet leave looking (and feeling) their best.",
    highlights: [
      "Certified nail technicians",
      "Sanitized tools for every client",
      "Premium products",
      "Relaxing salon ambience",
    ],
    treatments: [
      {
        id: "classic-manicure",
        category: "Manicure",
        name: "Classic Manicure",
        description:
          "Nail shaping, cuticle care and polish for clean, healthy-looking hands.",
        features: [
          "Nail shaping & buffing",
          "Cuticle care",
          "Hand massage",
          "Polish of your choice",
        ],
      },
      {
        id: "spa-manicure",
        category: "Manicure",
        name: "Spa Manicure",
        description:
          "A deeper hand treatment with exfoliation and an extended massage for softer skin.",
        features: [
          "Exfoliating scrub",
          "Extended hand massage",
          "Hydrating mask",
          "Nail shaping & polish",
        ],
      },
      {
        id: "gel-manicure",
        category: "Manicure",
        name: "Gel Manicure",
        description:
          "Chip-resistant gel polish for a glossy, long-lasting finish.",
        features: [
          "Nail prep & shaping",
          "Long-lasting gel polish",
          "UV/LED cure finish",
          "Cuticle care",
        ],
      },
      {
        id: "classic-pedicure",
        category: "Pedicure",
        name: "Classic Pedicure",
        description: "Nail care and grooming for clean, comfortable feet.",
        features: [
          "Nail shaping & buffing",
          "Cuticle care",
          "Foot massage",
          "Polish of your choice",
        ],
      },
      {
        id: "spa-pedicure",
        category: "Pedicure",
        name: "Spa Pedicure",
        description:
          "A relaxing foot soak with exfoliation and massage to soften and refresh.",
        features: [
          "Warm foot soak",
          "Exfoliating scrub",
          "Extended foot massage",
          "Hydrating mask",
        ],
      },
      {
        id: "gel-pedicure",
        category: "Pedicure",
        name: "Gel Pedicure",
        description:
          "Glossy, chip-resistant gel polish that stays fresh for weeks.",
        features: [
          "Nail prep & shaping",
          "Long-lasting gel polish",
          "UV/LED cure finish",
          "Foot massage",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Book Your Slot",
        description: "Reach out on WhatsApp, call, or online and pick your treatment.",
      },
      {
        step: 2,
        title: "Quick Consultation",
        description: "Tell us what you're after — shape, polish, or anything to watch for.",
      },
      {
        step: 3,
        title: "Relax & Enjoy",
        description: "Sit back while our technicians take care of the rest.",
      },
      {
        step: 4,
        title: "Aftercare Tips",
        description: "Leave with polish that lasts and tips to keep it looking fresh.",
      },
    ],
    faqs: [
      {
        id: "mp-1",
        question: "How long does a manicure & pedicure session take?",
        answer:
          "Most sessions take between 45 minutes to 1.5 hours depending on the treatment you choose.",
      },
      {
        id: "mp-2",
        question: "Can I get gel polish removed and reapplied?",
        answer:
          "Yes, gel removal is included when you book a new gel manicure or pedicure with us.",
      },
      {
        id: "mp-3",
        question: "Are your tools sanitized between clients?",
        answer: "Yes, all tools are sanitized after every single client.",
      },
      {
        id: "mp-4",
        question: "Can I book a manicure and pedicure together?",
        answer: "Absolutely — most clients combine both in a single visit to save time.",
      },
    ],
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

// Real reviews, manually curated from the salon's Google Business Profile
// (minor typo cleanup only, wording otherwise unchanged).
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mia",
    rating: 5,
    service: "Nail Art",
    review:
      "I am so in love with my nails, Jaja was my technician, what a beautiful lady and the experience at the salon was amazing. Customer service 10/10, if I could put more than 5 stars I would. Will definitely be back ❤️❤️",
    source: "google",
  },
  {
    id: "2",
    name: "Chinmai Madhu",
    rating: 5,
    service: "Haircut",
    review:
      "I had a wonderful experience at VR Salon! I am extremely happy with my haircut. The staff were very friendly, professional, and made me feel comfortable from the moment I walked in.",
    source: "google",
  },
  {
    id: "3",
    name: "Carmel Nursery",
    rating: 5,
    service: "Hair Styling",
    review:
      "I had an amazing experience at VR Unisex Salon. A special thanks to Pramod, who did an outstanding job. He is very professional, patient, and really understands what the customer wants. The attention to detail and the friendly service made it memorable.",
    source: "google",
  },
  {
    id: "4",
    name: "Maryam Nokhodchi",
    rating: 5,
    service: "Hair Threading",
    review:
      "I would like to thank the lady named Deeb and a guy at the reception for the excellent service. They were both very professional, friendly, and attentive throughout my visit. They made sure I was completely satisfied before leaving the salon, which I truly appreciated. Thank you for such a great experience — I will definitely come back again.",
    source: "google",
  },
  {
    id: "5",
    name: "Vaishnavi Mishra",
    rating: 5,
    service: "Hair Extensions",
    review:
      "I've done your hair extensions. It was really amazing. You guys have done an amazing job on my head and the salon is so good. Neat and clean. Highly recommended for hair services, beauty and nail. This will be my salon. Still I am in Dubai. Highly recommended. Special thanks to the owner, Vishal.",
    source: "google",
  },
  {
    id: "6",
    name: "Malar Kodi",
    rating: 5,
    service: "Hairstyling, Balayage",
    review:
      "I had a lovely experience at VR Salon near Burjuman Metro. I went for keratin treatment, highlights, and hair colouring, and I'm extremely happy with how my hair turned out. Big thanks to Vishal and Raju, who have 8+ years of experience and truly know what they're doing. The whole process was smooth and comfortable. The salon is clean and has a nice, relaxing environment.",
    source: "google",
  },
  {
    id: "7",
    name: "Vetri Velan",
    rating: 5,
    service: "Pedicure, Manicure",
    review:
      "Huge love to the VR Salon team! My manicure & pedicure came out absolutely stunning — clean, elegant, and so well done, thank you Ms. Jha Jha and Ms. Priyanka. The whole vibe was relaxing and the team was super professional. 10/10 recommend! Will be back soon.",
    source: "google",
  },
  {
    id: "8",
    name: "Lakshmi Lachu",
    rating: 5,
    service: "Shampoo & Conditioning, Hair Threading",
    review:
      "I went to this salon when I saw the Facebook page and Instagram. I am so glad I did. Vishal and the entire team are very kind, soft spoken and good with customer service, and very gentle while fixing your hair. I got a keratin and hair colouring — it was amazing. I travelled from Al Nahda 1 to Burjuman for this and it was totally worth it. Highly recommended.",
    source: "google",
  },
  {
    id: "9",
    name: "Uthra",
    rating: 5,
    service: "Hair Care",
    review:
      "Had a great experience at VR Unisex Salon. Raju was very professional and took good care of my hair. He also shared helpful tips about proper shampoo and conditioner usage, which I really appreciated. The salon has a relaxing atmosphere, and the entire team is friendly and professional.",
    source: "google",
  },
  {
    id: "10",
    name: "Reshma Jibin",
    rating: 5,
    service: "Haircut",
    review:
      "Had a really great experience at VR Salon. The staff were super friendly and made me feel comfortable right away. They actually took the time to understand what I wanted instead of rushing through it. I'm really happy with the haircut — it turned out exactly how I imagined. The whole place is clean and has a nice, relaxed vibe too.",
    source: "google",
  },
  {
    id: "11",
    name: "Alina Lobo",
    rating: 5,
    service: "Hair Color",
    review:
      "Absolutely loved my experience at VR Salon! I got my hair transformed from red to a beautiful caramel blonde, and the results were beyond amazing. The staff was incredibly patient throughout the whole process and put so much effort and care into achieving the perfect shade for me.",
    source: "google",
  },
  {
    id: "12",
    name: "Nischal Lamichhane",
    rating: 5,
    service: "Shampoo & Conditioning, Hairstyling, Manicure",
    review:
      "I got my haircut at VR Salon and the experience was absolutely amazing. My stylist Pramod is incredibly skilled and very professional, he understood exactly what I wanted and delivered it perfectly. The salon itself is super luxurious, from the ambience to the way they pamper you with premium service. One of the best salons in the Burjuman area!",
    source: "google",
  },
];

export const galleryMedia: GalleryMedia[] = [
  {
    id: "img-1",
    type: "image",
    src: "/images/gallery/01.jpg",
    alt: "Hair color transformation at VR Salon",
    category: "hair",
    width: 1440,
    height: 1799,
  },
  {
    id: "img-2",
    type: "image",
    src: "/images/gallery/02.jpg",
    alt: "Precision haircut at VR Salon",
    category: "hair",
    width: 1440,
    height: 1920,
  },
  {
    id: "vid-1",
    type: "video",
    src: "/images/gallery/01.mp4",
    alt: "Salon service reel",
    width: 1080,
    height: 1920,
  },
  {
    id: "vid-2",
    type: "video",
    src: "/images/gallery/02.mp4",
    alt: "Salon service reel",
    width: 720,
    height: 1280,
  },
  {
    id: "vid-3",
    type: "video",
    src: "/images/gallery/03.mp4",
    alt: "Salon service reel",
    width: 720,
    height: 1280,
  },
  {
    id: "img-3",
    type: "image",
    src: "/images/gallery/03.jpg",
    alt: "Manicure and pedicure at VR Salon",
    category: "nails",
    width: 1440,
    height: 1479,
  },
  {
    id: "img-4",
    type: "image",
    src: "/images/gallery/04.jpg",
    alt: "Hair color transformation at VR Salon",
    category: "hair",
    width: 1440,
    height: 1799,
  },
  {
    id: "vid-4",
    type: "video",
    src: "/images/gallery/04.mp4",
    alt: "Salon service reel",
    width: 720,
    height: 1280,
  },
  {
    id: "vid-5",
    type: "video",
    src: "/images/gallery/05.mp4",
    alt: "Salon service reel",
    width: 1080,
    height: 1920,
  },
  {
    id: "vid-6",
    type: "video",
    src: "/images/gallery/06.mp4",
    alt: "Salon service reel",
    width: 720,
    height: 1280,
  },
];

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
