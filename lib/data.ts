import type {
  FaqItem,
  GalleryMedia,
  InstagramPost,
  NavLink,
  PricingPackage,
  Service,
  TeamMember,
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
    treatmentsSubtitle:
      "Pick the option that fits your time and how much pampering you're after.",
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
      {
        id: "french-manicure",
        category: "Manicure",
        name: "French Manicure",
        description:
          "A timeless, elegant look with a soft nude base and crisp white tips.",
        features: ["Soft nude base", "Crisp white tips", "Clean, classic finish"],
      },
      {
        id: "luxury-manicure",
        category: "Manicure",
        name: "Luxury Manicure",
        description:
          "An indulgent treatment with premium products, deep hydration and an extended massage.",
        features: ["Premium product range", "Deep hydration", "Extended hand massage"],
      },
      {
        id: "cuticle-care",
        category: "Manicure",
        name: "Cuticle Care",
        description:
          "Focused care for healthy, neat cuticles — the foundation of great-looking nails.",
        features: ["Gentle softening", "Precise trimming", "Nourishing oil finish"],
      },
      {
        id: "hand-massage",
        category: "Manicure",
        name: "Hand Massage",
        description:
          "A relaxing standalone or add-on massage to ease tension and improve circulation.",
        features: ["Tension relief", "Improved circulation", "Nourishing cream"],
      },
      {
        id: "hand-polishing",
        category: "Manicure",
        name: "Hand Polishing",
        description:
          "Removes dead skin and brightens hands for a visibly smoother, fresher look.",
        features: ["Dead skin removal", "Brighter skin tone", "Smooth, soft finish"],
      },
      {
        id: "paraffin-wax-manicure",
        category: "Manicure",
        name: "Paraffin Wax Manicure",
        description:
          "Warm paraffin wax therapy that deeply moisturizes and softens tired hands.",
        features: ["Intense moisture therapy", "Deep hydration", "Soft, rejuvenated skin"],
      },
      {
        id: "french-pedicure",
        category: "Pedicure",
        name: "French Pedicure",
        description:
          "A clean, elegant look with natural tones and crisp white tips, suited to any occasion.",
        features: ["Natural tone base", "Crisp white tips", "Timeless finish"],
      },
      {
        id: "luxury-pedicure",
        category: "Pedicure",
        name: "Luxury Pedicure",
        description:
          "A premium foot care experience with advanced exfoliation, hydration and an extended massage.",
        features: ["Advanced exfoliation", "Hydration therapy", "Extended foot massage"],
      },
      {
        id: "foot-spa",
        category: "Pedicure",
        name: "Foot Spa",
        description:
          "A soothing warm-water soak that relaxes tired muscles and eases daily stress.",
        features: ["Warm water therapy", "Muscle relaxation", "Improved circulation"],
      },
      {
        id: "callus-removal",
        category: "Pedicure",
        name: "Callus Removal",
        description:
          "Gently smooths hardened, rough skin for more comfortable, healthier-looking feet.",
        features: ["Smooths hardened skin", "Reduces roughness", "Improved comfort"],
      },
      {
        id: "heel-crack-treatment",
        category: "Pedicure",
        name: "Heel Crack Treatment",
        description: "Deep hydration and targeted care to soften dry, cracked heels.",
        features: ["Deep hydration", "Targeted heel care", "Softer, smoother skin"],
      },
      {
        id: "foot-polishing",
        category: "Pedicure",
        name: "Foot Polishing",
        description:
          "Removes dead skin and brightens feet for a smoother, refreshed finish.",
        features: ["Dead skin removal", "Brighter skin tone", "Smooth finish"],
      },
      {
        id: "paraffin-wax-pedicure",
        category: "Pedicure",
        name: "Paraffin Wax Pedicure",
        description:
          "Warm paraffin wax therapy that locks in moisture for soft, hydrated feet.",
        features: ["Intense moisture therapy", "Deep hydration", "Soft, soothed skin"],
      },
      {
        id: "mens-classic-mani-pedi",
        category: "For Men",
        name: "Classic Manicure & Pedicure",
        description:
          "Essential all-round grooming for hands and feet — nail shaping, cuticle care and hydration.",
        features: ["Nail shaping & cuticle care", "Hydrating scrub", "Neat, groomed finish"],
      },
      {
        id: "mens-spa-mani-pedi",
        category: "For Men",
        name: "Spa Manicure & Pedicure",
        description:
          "Extra relaxation and care with exfoliation, a hydrating scrub and massage for hands and feet.",
        features: ["Hand & foot exfoliation", "Hydrating scrub", "Relaxing massage"],
      },
      {
        id: "nail-cleaning-shaping",
        category: "For Men",
        name: "Nail Cleaning & Shaping",
        description: "A quick, effective grooming service for clean, well-shaped nails.",
        features: ["Nail cleaning", "Precise shaping", "Tidy, groomed finish"],
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
    tagline: "Scalp Ritual",
    heroBadge: "Premium Korean Ritual",
    heroSubtitle: "A Ritual of Scalp Renewal & Deep Relaxation",
    longDescription:
      "A calming, restorative treatment that combines deep scalp cleansing, soothing water therapy and therapeutic massage — designed to reset your scalp and relax your entire being, rooted in authentic Korean wellness traditions.",
    highlights: [
      "Certified head spa therapists",
      "Premium, scalp-safe products",
      "Warm water ritual therapy",
      "Deeply relaxing atmosphere",
    ],
    journeyIntro: {
      title: "More Than a Treatment — It's a Journey",
      description:
        "At VR Unisex Salon, our Korean Head Spa combines deep cleansing, gentle massage and nourishing care to help you feel lighter, calmer and refreshed from the roots up.",
    },
    benefits: [
      {
        icon: "Droplets",
        title: "Deep Scalp Cleansing",
        description: "Removes buildup, oil and impurities that regular shampooing can't reach.",
      },
      {
        icon: "Wind",
        title: "Stress Relief",
        description: "Gentle massage techniques calm the nervous system and ease tension.",
      },
      {
        icon: "HeartPulse",
        title: "Improved Circulation",
        description: "Stimulates blood flow to hair follicles, supporting healthier hair growth.",
      },
      {
        icon: "Leaf",
        title: "Balanced Scalp Health",
        description: "Nourishing products help restore natural balance and moisture.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Serene Environment",
        description: "Begin in a softly lit, calming space designed to help you unwind.",
      },
      {
        step: 2,
        title: "Gentle Cleansing",
        description: "Premium products gently cleanse and nourish your scalp.",
      },
      {
        step: 3,
        title: "Water Ritual Therapy",
        description: "Warm water flows soothe your senses and ease daily stress.",
      },
      {
        step: 4,
        title: "Therapeutic Massage",
        description: "Traditional massage techniques release tension and boost circulation.",
      },
      {
        step: 5,
        title: "Complete Renewal",
        description: "Leave with a refreshed scalp, softer hair and a calmer mind.",
      },
    ],
    processTitle: "Your Journey in 5 Steps",
    processSubtitle: "Each stage is designed to deepen relaxation and renewal.",
    faqs: [
      {
        id: "khs-1",
        question: "How long does a Korean Head Spa session take?",
        answer: "Most sessions take around 60–75 minutes for the full ritual.",
      },
      {
        id: "khs-2",
        question: "Is it suitable for all hair and scalp types?",
        answer: "Yes, the treatment is gentle enough for all hair types and scalp conditions.",
      },
      {
        id: "khs-3",
        question: "How often should I get a head spa treatment?",
        answer: "Once every 3–4 weeks is ideal for maintaining scalp health.",
      },
      {
        id: "khs-4",
        question: "Do I need to wash my hair before coming in?",
        answer: "No, just come as you are — cleansing is part of the ritual.",
      },
    ],
  },
  {
    id: "3",
    slug: "women-haircut",
    title: "Women Haircut",
    description: "Precision cuts styled to suit your face and lifestyle.",
    startingPrice: 399,
    tagline: "Hair Styling",
    heroBadge: "Cut, Shaped & Styled for You",
    heroSubtitle: "More Than Just a Change in Length",
    longDescription:
      "A haircut is a reflection of your personality, lifestyle and confidence. At VR Unisex Salon in Dubai we specialise in haircuts and styling for women — tailored to your face shape, hair texture and daily routine, so every cut feels fresh, flattering and easy to maintain.",
    highlights: [
      "Consultation before every cut",
      "Shaped to your face & hair texture",
      "Experienced women's stylists",
      "Finishes that are easy to maintain",
    ],
    treatmentsSubtitle:
      "Every cut starts with a consultation — here's what we can do for you.",
    treatmentColumns: 2,
    treatments: [
      {
        id: "womens-haircut-styling",
        category: "Haircut",
        name: "Women's Haircut & Styling",
        tagline: "Complete Transformation or Refreshed Look",
        description:
          "Designed for those who want a complete transformation or a refreshed everyday look. We begin with a detailed consultation, analysing your face shape, hair density and styling preferences before crafting a cut that complements you perfectly.",
        featuresLabel: "What you get",
        features: [
          "Personalised consultation based on face shape and hair texture",
          "Professional finishing that enhances movement and shape",
          "Ideal for exploring new trends or shorter styles",
        ],
        bestFor: "First-time clients, style makeovers, trend-led haircuts",
        result:
          "A personalised haircut with a salon-finished look that elevates your overall appearance",
      },
      {
        id: "hair-trim-shape-up",
        category: "Haircut",
        name: "Hair Trim & Shape-Up",
        tagline: "Maintain Your Style, Restore Your Balance",
        description:
          "Focuses on maintaining your current style while improving its structure. We carefully remove split ends and redefine the outline to restore balance and freshness without altering the length drastically.",
        featuresLabel: "Perfect for",
        features: [
          "Regular maintenance between major cuts",
          "Healthy hair upkeep and split end removal",
          "Keeping your existing style with improved structure",
        ],
        bestFor: "Regular maintenance, healthy hair upkeep",
        result: "Cleaner shape, healthier ends and improved manageability",
      },
      {
        id: "layered-haircut",
        category: "Haircut",
        name: "Layered Haircut",
        tagline: "Add Dimension, Volume & Natural Movement",
        description:
          "A layered haircut adds dimension, volume and natural movement to your hair. Our stylists customise the layering around your hair texture and face shape, so it enhances your features rather than overwhelming them.",
        featuresLabel: "Benefits",
        features: [
          "Adds volume and reduces bulk",
          "Enhances hair texture naturally",
          "Works beautifully for both casual and styled looks",
        ],
        bestFor: "Adding volume, reducing bulk, enhancing texture",
        result: "Flowy, dynamic hair with depth and effortless styling",
      },
      {
        id: "blow-dry-styling",
        category: "Haircut",
        name: "Blow Dry & Styling",
        tagline: "Polished, Salon-Perfect Finish",
        description:
          "Perfect for finishing your haircut or preparing for a special occasion. Using professional techniques and tools, we create smooth, voluminous or softly waved styles that last.",
        featuresLabel: "Styling options",
        features: [
          "Smooth and sleek finish",
          "Voluminous styling for body and bounce",
          "Soft waves for elegant occasions",
        ],
        bestFor: "Events, meetings, or post-haircut finishing",
        result: "Long-lasting shine, smoothness and beautifully styled hair",
      },
    ],
    faqs: [
      {
        id: "wh-1",
        question: "How long does a women's haircut take?",
        answer:
          "Most haircuts take 45 minutes to an hour, a little longer if you add blow dry and styling.",
      },
      {
        id: "wh-2",
        question: "Do you consult before cutting?",
        answer:
          "Yes — every cut starts with a consultation about your face shape, hair texture and daily routine.",
      },
      {
        id: "wh-3",
        question: "Can I bring a reference photo?",
        answer:
          "Please do. Reference photos help our stylists understand exactly the look you're after.",
      },
      {
        id: "wh-4",
        question: "Do you cut curly and textured hair?",
        answer: "Yes, our stylists cut and layer all hair types and textures.",
      },
    ],
  },
  {
    id: "4",
    slug: "mens-haircut",
    title: "Mens Haircut",
    description: "Sharp, modern cuts from experienced stylists.",
    startingPrice: 249,
    tagline: "Grooming",
    heroBadge: "Sharp Cuts, Clean Finishes",
    heroSubtitle: "Precision Grooming for Modern Men",
    longDescription:
      "Our haircut and wash services are built for men who value sharp style, clean grooming and a professional finish. From timeless cuts to modern trends, every service starts with understanding your face shape, hair texture and lifestyle — so you leave with precision, hygiene and confidence, every visit.",
    highlights: [
      "Consultation before every cut",
      "Precise scissor & clipper work",
      "Sanitized tools for every client",
      "Sharp, easy-to-maintain finishes",
    ],
    treatmentsSubtitle:
      "From timeless cuts to modern trends — pick the one that suits your style.",
    treatments: [
      {
        id: "classic-haircut",
        category: "Grooming",
        name: "Classic Haircut",
        description:
          "Perfect for men who prefer a clean, well-structured look that never goes out of style. Includes a detailed consultation, precise scissor or clipper work, neckline cleanup and a neat finish. Ideal for professionals, students, and anyone who wants a sharp everyday haircut that's easy to maintain.",
        resultLabel: "Finish",
        result: "Balanced, tidy and polished — perfect for daily wear and formal settings.",
      },
      {
        id: "fade-haircut",
        category: "Grooming",
        name: "Fade Haircut",
        description:
          "Focuses on seamless blending from skin or short lengths to fuller hair on top. Best for men who like a modern, stylish appearance with clean transitions. Our stylists ensure smooth gradients, sharp edges and symmetry for a premium finish.",
        resultLabel: "Finish",
        result: "Crisp, modern and photo-ready — one of the most requested men's styles today.",
      },
      {
        id: "taper-cut",
        category: "Grooming",
        name: "Taper Cut",
        description:
          "A subtle, refined transition around the sides and back without an extreme fade. Ideal for men who want a professional look with a modern touch — it maintains natural volume while keeping the edges clean and controlled.",
        resultLabel: "Finish",
        result:
          "Neat, sophisticated and low-maintenance — great for office and everyday grooming.",
      },
      {
        id: "modern-trendy-styles",
        category: "Grooming",
        name: "Modern & Trendy Styles",
        description:
          "For men who like to experiment with current grooming trends. Whether it's textured crops, undercuts, messy styles or fully customised looks, our stylists tailor the haircut to your personality, hair type and styling routine.",
        resultLabel: "Finish",
        result:
          "Fashion-forward, confident and customised — perfect for men looking to stand out.",
      },
      {
        id: "hair-wash-blow-dry",
        category: "Grooming",
        name: "Hair Wash & Blow Dry",
        description:
          "Complete your grooming with a professional wash and blow dry. Includes a relaxing scalp cleanse using quality products for freshness and scalp cleanliness, followed by a controlled blow dry for shape and volume. Ideal before meetings, events, or straight after a haircut.",
        resultLabel: "Finish",
        result: "Clean, refreshed and styled — enhancing the overall haircut result.",
      },
    ],
    faqs: [
      {
        id: "mh-1",
        question: "How long does a men's haircut take?",
        answer:
          "Most cuts take around 30–45 minutes, a little longer if you add a wash and blow dry.",
      },
      {
        id: "mh-2",
        question: "What's the difference between a fade and a taper?",
        answer:
          "A fade blends much shorter — often down to the skin — while a taper is a subtler, gradual transition that keeps more length around the sides and back.",
      },
      {
        id: "mh-3",
        question: "Can I bring a reference photo?",
        answer:
          "Please do. A photo is the easiest way for our stylists to match exactly the cut you have in mind.",
      },
      {
        id: "mh-4",
        question: "Do you clean up the neckline and edges?",
        answer:
          "Yes — every cut finishes with a neckline cleanup and clean, controlled edges.",
      },
    ],
  },
  {
    id: "5",
    slug: "hair-treatment",
    title: "Hair Treatment",
    description: "Nourishing treatments for healthy, shiny hair.",
    startingPrice: 999,
    tagline: "Hair Care",
    heroBadge: "Repair, Smooth & Strengthen",
    heroSubtitle: "Advanced Treatments for Smooth, Strong & Healthy Hair",
    longDescription:
      "We offer advanced hair treatments designed to repair damage, control frizz, improve hair texture and give you long-lasting, salon-perfect results. Our expert stylists use premium products and personalised techniques to treat every hair type safely and effectively.",
    highlights: [
      "Consultation before every treatment",
      "Premium treatment products",
      "Personalised to your hair type",
      "Safe for coloured & treated hair",
    ],
    treatmentsSubtitle:
      "Each treatment targets a different concern — we'll help you pick the right one.",
    treatments: [
      {
        id: "anti-frizz-treatment",
        category: "Treatment",
        name: "Anti-Frizz Treatment",
        tagline: "For Hair That Refuses to Behave",
        description:
          "If your hair looks dry, rough or puffy even after oiling and conditioning, an anti-frizz treatment smooths the hair surface and locks in moisture.",
        featuresLabel: "This treatment",
        features: [
          "Controls humidity-caused frizz",
          "Makes hair softer and easier to manage",
          "Reduces daily styling time",
        ],
        bestForLabel: "Best suited for",
        bestFor: "Mildly frizzy, wavy or dry hair that needs control, not straightening.",
      },
      {
        id: "keratin-treatment",
        category: "Treatment",
        name: "Keratin Treatment",
        tagline: "Smooth Hair Without Losing Natural Movement",
        description:
          "A keratin treatment restores lost keratin in the hair shaft, making hair smoother, shinier and stronger — without making it look flat or artificial.",
        featuresLabel: "What you'll notice",
        features: [
          "Reduced frizz and flyaways",
          "Softer, glossier texture",
          "Easier blow-dry and styling",
        ],
        resultLabel: "Results",
        result: "Typically last 3–6 months with proper after-care.",
        note: "Suitable for coloured and chemically treated hair after consultation.",
      },
      {
        id: "hair-smoothening",
        category: "Treatment",
        name: "Hair Smoothening",
        tagline: "For a Naturally Straight, Polished Look",
        description:
          "Ideal if you want straighter hair with a natural finish — not pin-straight, not puffy.",
        featuresLabel: "This treatment",
        features: [
          "Relaxes hair structure gently",
          "Reduces volume and frizz",
          "Gives a smooth, flowing look",
        ],
        bestForLabel: "Recommended for",
        bestFor: "People with wavy or frizzy hair who want long-lasting manageability.",
      },
      {
        id: "hair-perming-curling",
        category: "Treatment",
        name: "Hair Perming / Curling",
        tagline: "Permanent Curls That Actually Hold Shape",
        description:
          "If styling curls every day feels tiring, perming or curling gives you long-lasting waves or curls that stay defined.",
        featuresLabel: "We customise",
        features: [
          "Curl size (soft waves to tight curls)",
          "Volume and shape",
          "Hair health protection",
        ],
        bestForLabel: "Perfect for",
        bestFor: "Adding bounce, texture and personality to straight or flat hair.",
      },
      {
        id: "protein-hair-botox",
        category: "Treatment",
        name: "Protein Treatment / Hair Botox",
        tagline: "Repair First. Style Later.",
        description:
          "When hair feels weak, lifeless or damaged from heat styling or chemical treatments, a protein or hair botox treatment focuses on repair — not appearance alone.",
        featuresLabel: "This treatment",
        features: [
          "Strengthens hair internally",
          "Improves elasticity and smoothness",
          "Restores shine and softness",
        ],
        resultLabel: "Results",
        result:
          "Visible immediately, and ideal for hair that feels thin, dry or over-processed.",
      },
      {
        id: "hair-rebonding",
        category: "Treatment",
        name: "Hair Rebonding",
        tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "Rebonding restructures the hair bonds to give a permanently straight look.",
        featuresLabel: "Best for",
        features: [
          "Extremely curly or coarse hair",
          "People who want pin-straight hair",
          "Those ready to commit to after-care",
        ],
        noteLabel: "Important",
        note: "We only recommend rebonding after a detailed consultation, to ensure hair safety and long-term results.",
      },
    ],
    faqs: [
      {
        id: "ht-1",
        question: "How long does a keratin treatment last?",
        answer: "Typically 3–6 months, depending on your hair and how you care for it.",
      },
      {
        id: "ht-2",
        question: "What's the difference between smoothening and rebonding?",
        answer:
          "Smoothening gently relaxes the hair for a natural, softly straight finish. Rebonding restructures the hair bonds for a permanently pin-straight look, so it's a bigger commitment.",
      },
      {
        id: "ht-3",
        question: "Can I get a treatment on coloured hair?",
        answer:
          "Yes — keratin is suitable for coloured and chemically treated hair after a consultation.",
      },
      {
        id: "ht-4",
        question: "Which treatment is right for damaged hair?",
        answer:
          "A protein treatment or hair botox is usually the answer — it repairs hair internally rather than only improving how it looks.",
      },
    ],
  },
  {
    id: "6",
    slug: "hair-repair-therapy",
    title: "Hair Repair Therapy",
    description: "Restorative therapy for damaged, weak hair.",
    startingPrice: 1299,
    tagline: "Repair & Scalp Care",
    heroBadge: "Salon-Grade Repair",
    heroSubtitle: "Restore Strength, Softness & Scalp Comfort",
    longDescription:
      "Our Hair Repair Therapy restores damaged hair and improves overall scalp comfort using advanced, salon-grade techniques. Whether your hair is affected by heat styling, chemical treatments, dryness or scalp concerns, our expert care helps bring back strength, softness and shine.",
    highlights: [
      "Salon-grade repair techniques",
      "Scalp comfort, not just hair",
      "Consultation before every session",
      "Gentle on coloured hair",
    ],
    treatmentsSubtitle:
      "Repair for the hair, relief for the scalp — pick what your hair needs most.",
    treatments: [
      {
        id: "olaplex-treatment",
        category: "Repair",
        name: "Olaplex Treatment",
        tagline: "Rebuild Hair Strength from Within",
        description:
          "Works on the internal structure of the hair to reduce damage caused by colouring, bleaching and heat styling. It improves strength, manageability and smoothness while keeping a natural look and feel.",
        featuresLabel: "Key benefits",
        features: [
          "Reduces damage from chemical treatments and heat styling",
          "Improves hair strength and manageability",
          "Maintains natural look and feel",
          "Restores smoothness and shine",
        ],
        bestForLabel: "Perfect for",
        bestFor: "Hair damaged by colouring, bleaching or frequent heat styling.",
      },
      {
        id: "anti-dandruff-treatment",
        category: "Repair",
        name: "Anti-Dandruff Treatment",
        tagline: "Professional Scalp Cleansing & Care",
        description:
          "A salon-grade treatment that cleanses the scalp and reduces visible flakes while maintaining moisture balance — keeping the scalp fresh and clean without leaving hair dry or heavy.",
        featuresLabel: "What it does",
        features: [
          "Cleanses scalp and reduces visible flakes",
          "Maintains moisture balance",
          "Keeps scalp fresh and clean",
          "Prevents dryness and heaviness",
        ],
        bestForLabel: "Recommended for",
        bestFor: "Flaky or itchy scalps that need a deep but balanced cleanse.",
      },
      {
        id: "dry-scalp-therapy",
        category: "Repair",
        name: "Dry Scalp Therapy",
        tagline: "Targeted Hydration for Scalp Comfort",
        description:
          "Provides targeted hydration and nourishment to improve scalp comfort and support healthier-looking hair. Designed for clients experiencing dryness from weather, lifestyle or styling habits.",
        featuresLabel: "Benefits include",
        features: [
          "Targeted hydration for a dry scalp",
          "Nourishes and improves scalp comfort",
          "Supports healthier-looking hair",
          "Addresses dryness from weather and styling",
        ],
        bestFor: "Scalp dryness caused by weather, lifestyle or styling habits.",
      },
    ],
    faqs: [
      {
        id: "hrt-1",
        question: "What does Olaplex actually do?",
        answer:
          "It works on the internal structure of the hair, repairing damage from colouring, bleaching and heat styling rather than just coating the surface.",
      },
      {
        id: "hrt-2",
        question: "Will an anti-dandruff treatment dry out my hair?",
        answer:
          "No — it cleanses the scalp and reduces flakes while maintaining moisture balance, so your hair doesn't end up dry or heavy.",
      },
      {
        id: "hrt-3",
        question: "How do I know if I need dry scalp therapy?",
        answer:
          "If your scalp feels dry or uncomfortable because of the weather, your lifestyle or your styling habits, this is the one to ask about.",
      },
      {
        id: "hrt-4",
        question: "Can I have repair therapy if my hair is coloured?",
        answer:
          "Yes — Olaplex in particular is designed to reduce damage from colouring and bleaching. Mention your colour history during the consultation.",
      },
    ],
  },
  {
    id: "7",
    slug: "nail-extensions",
    title: "Nail Extensions",
    description: "Durable, salon-perfect nail extensions and art.",
    startingPrice: 799,
    tagline: "Nail Artistry",
    heroBadge: "Shaped, Sculpted & Designed",
    heroSubtitle: "Luxury Nail Extensions Designed to Elevate Your Style",
    longDescription:
      "Our nail extensions are crafted for those who love perfectly shaped, long-lasting and beautifully designed nails. Whether you prefer a clean, classic look or bold, artistic designs, our nail technicians deliver precision, hygiene and premium finishes every time — using high-quality products, advanced techniques and a personalised consultation.",
    highlights: [
      "Certified nail technicians",
      "Sanitized tools for every client",
      "High-quality products",
      "Personalised consultation",
    ],
    treatmentsSubtitle:
      "From a first set to refills, art and safe removal — the full nail menu.",
    treatments: [
      {
        id: "acrylic-nail-extensions",
        category: "Nails",
        name: "Acrylic Nail Extensions",
        tagline: "Strong, Durable & Flawlessly Shaped",
        description:
          "Ideal if you want strong, durable, long-lasting nails with a flawless shape. A protective acrylic layer adds length and structure, making it perfect for brittle or weak nails.",
        featuresLabel: "What you'll get",
        features: [
          "Bold lengths with defined shapes",
          "Extended wear with minimal breakage",
          "Sturdy nails with a smooth, polished finish",
        ],
        bestFor: "Bold lengths, defined shapes and extended wear with minimal breakage.",
      },
      {
        id: "gel-nail-extensions",
        category: "Nails",
        name: "Gel Nail Extensions",
        tagline: "Lightweight & Naturally Glossy",
        description:
          "A lighter, more natural-looking alternative with a glossy, flexible finish. Cured under a UV/LED lamp, so your nails feel lightweight yet strong.",
        featuresLabel: "Perfect for",
        features: [
          "Natural appearance with added length and shine",
          "Lightweight yet strong nails",
          "Everyday elegance and comfort",
        ],
        bestForLabel: "Ideal for",
        bestFor: "Anyone who prefers a natural appearance with added length and shine.",
      },
      {
        id: "nail-refilling",
        category: "Nails",
        name: "Nail Refilling",
        tagline: "Maintain Beauty & Longevity",
        description:
          "Essential for keeping your extensions looking their best. As your natural nails grow, refilling restores balance, strength and shape without removing the entire set.",
        featuresLabel: "This service",
        features: [
          "Refreshes your nails and restores balance",
          "Fixes minor lifting and maintains strength",
          "Keeps extensions neat and salon-fresh",
        ],
        bestFor:
          "Regular maintenance — refreshing your set, fixing minor lifting and keeping nails polished.",
      },
      {
        id: "nail-removal",
        category: "Nails",
        name: "Nail Removal",
        tagline: "Safe & Gentle Removal",
        description:
          "Professional removal that takes your extensions off without damaging your natural nails. We use gentle techniques that protect nail health and prepare them for your next set.",
        featuresLabel: "We ensure",
        features: [
          "Safe removal without damage",
          "Protection of natural nail health",
          "Clean, smooth and healthy nails",
        ],
        bestForLabel: "Ideal for",
        bestFor: "Switching styles or taking a break, while keeping nails healthy.",
      },
      {
        id: "nail-art",
        category: "Nails",
        name: "Nail Art (Basic / Advanced)",
        tagline: "Let Your Personality Shine",
        description:
          "From minimal accents to detailed creative designs. Basic nail art covers clean patterns, subtle designs and elegant finishes, while advanced art features intricate detailing, textures, stones and fully customised concepts.",
        featuresLabel: "Choose from",
        features: [
          "Basic: clean patterns and elegant finishes",
          "Advanced: intricate details with stones & textures",
          "Customised concepts for any occasion",
        ],
        bestForLabel: "Perfect for",
        bestFor: "Everyday wear, special occasions or statement looks.",
      },
      {
        id: "french-nail-extensions",
        category: "Nails",
        name: "French Nail Extensions",
        tagline: "Timeless, Elegant & Effortlessly Stylish",
        description:
          "A soft base with crisp white tips — perfect for professionals, brides and lovers of classic beauty.",
        featuresLabel: "Features",
        features: [
          "Neat, refined nails with a premium finish",
          "Perfect symmetry and durability",
          "A clean aesthetic that never goes out of style",
        ],
        bestFor: "Neat, refined nails with a premium, classic finish.",
      },
      {
        id: "ombre-nail-extensions",
        category: "Nails",
        name: "Ombre Nail Extensions",
        tagline: "Modern Gradient Perfection",
        description:
          "Blends two or more shades seamlessly, creating a soft gradient that looks modern and luxurious — adding depth, elegance and uniqueness to your nails.",
        featuresLabel: "What to expect",
        features: [
          "Smooth colour transitions",
          "Customised shades to match your style",
          "Flawless, trendy finish",
        ],
        bestForLabel: "Ideal for",
        bestFor: "Anyone who wants a trendy yet sophisticated look.",
      },
    ],
    faqs: [
      {
        id: "ne-1",
        question: "What's the difference between acrylic and gel extensions?",
        answer:
          "Acrylic is stronger and more structured, so it suits bold lengths and weak or brittle nails. Gel is lighter and more flexible with a naturally glossy finish.",
      },
      {
        id: "ne-2",
        question: "How often do I need a refill?",
        answer:
          "As your natural nails grow out, a refill restores the balance and shape without removing the whole set — most clients come back every few weeks.",
      },
      {
        id: "ne-3",
        question: "Will extensions damage my natural nails?",
        answer:
          "Not when they're removed properly. Our removal service uses gentle techniques that protect your natural nail health.",
      },
      {
        id: "ne-4",
        question: "Can I get nail art on my extensions?",
        answer:
          "Yes — anything from clean, minimal patterns to intricate detailing with stones and textures.",
      },
    ],
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

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Vishal",
    role: "Founder & Master Stylist",
    bio: "Vishal began his hairdressing journey at 18, turning passion into a global career across Singapore, Malaysia, and Australia. In 2018, he moved to Dubai, honing his craft with luxury brands like Sofitel, Queen Elizabeth 2, and DoubleTree by Hilton. With his brother and a close-knit team, he founded VR Unisex Salon — a space built on passion, professionalism, and creativity, where clients enjoy world-class expertise, personalized care, and confidence through great style.",
    image: "/images/our-team/team1.webp",
  },
  {
    id: "2",
    name: "Raju",
    role: "Co-Founder & Hair Stylist",
    bio: "Raju began his journey in sports and video analysis but soon discovered his passion for hairstyling, inspired by his brother Vishal. Starting as a junior hairdresser, his dedication and creativity led him to train with global brands, travel internationally, and master advanced styling and coloring techniques. Today, as co-founder of VR Unisex Salon with Vishal, Raju brings precision, artistry, and a personal touch to every client's experience.",
    image: "/images/our-team/team2.webp",
  },
  {
    id: "3",
    name: "Priyanka",
    role: "Founder & Beauty Expert",
    bio: "Priyanka is a passionate beauty professional who turned her childhood love for beauty into a successful career. After mastering advanced skincare and beauty techniques in Dubai with international brands, she founded VR Unisex Salon. Her mission is to help every client understand their skin, choose the right care, and feel confident inside and out.",
    image: "/images/our-team/team3.webp",
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
