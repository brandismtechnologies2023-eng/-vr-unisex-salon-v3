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

const coreServices: Service[] = [
  {
    id: "1",
    slug: "manicure-pedicure",
    title: "Manicure & Pedicure in Dubai",
    description: "Relaxing hand and foot care with premium products.",
    startingPrice: 499,
    tagline: "Nail Care",
    heroBadge: "Healthy Nails, Beautifully Finished",
    longDescription:
      "Healthy, well-maintained hands and feet are an important part of looking and feeling your best. Our professional manicure and pedicure services go beyond nail polishing — they're designed to improve nail health, nourish your skin, and provide a relaxing self-care experience. Whether you're booking your regular nail maintenance or treating yourself to some well-deserved pampering, our beauty specialists deliver every service with precision, hygiene, and exceptional care.",
    highlights: [
      "Certified beauty specialists",
      "Sanitised tools for every client",
      "Premium salon products",
      "Calm, relaxing environment",
    ],
    benefitsTitle: "Why Choose VR Salon for Your Nail Care",
    benefitsSubtitle:
      "Beautiful nails begin with healthy care. Every manicure and pedicure combines professional techniques, premium products, and meticulous attention to detail, ensuring your hands and feet receive the care they deserve.",
    benefits: [
      {
        icon: "Hand",
        title: "Professional Nail Care",
        description:
          "Every treatment focuses on maintaining healthy nails, neat cuticles, and beautifully groomed hands and feet that look naturally elegant.",
      },
      {
        icon: "ShieldCheck",
        title: "Hygiene You Can Trust",
        description:
          "We maintain strict hygiene standards by thoroughly sanitising our tools and workstations, providing a clean, safe, and comfortable experience for every client.",
      },
      {
        icon: "Leaf",
        title: "Relaxing Self-Care Experience",
        description:
          "Enjoy a peaceful break from your busy schedule while our specialists refresh, nourish, and care for your hands and feet in a calming salon environment.",
      },
      {
        icon: "Gem",
        title: "Premium Salon Products",
        description:
          "We use trusted professional products that help nourish your skin, strengthen your nails, and deliver long-lasting, beautiful results.",
      },
      {
        icon: "ClipboardList",
        title: "Personalised Attention",
        description:
          "Every client has different nail care needs. Our team recommends treatments based on your lifestyle, nail condition, and personal preferences.",
      },
    ],
    treatmentsTitle: "Our Professional Nail Care Services",
    treatmentsSubtitle:
      "Whether you prefer classic elegance or long-lasting finishes, we offer a complete range of manicure and pedicure services to help keep your hands and feet healthy, polished, and beautifully maintained.",
    treatmentColumns: 2,
    treatments: [
      {
        id: "classic-nail-care",
        category: "Nail Care",
        name: "Classic Nail Care",
        description:
          "Ideal for routine nail maintenance, healthy cuticle care, nail shaping, and an elegant everyday finish.",
        featuresLabel: "Includes",
        features: [
          "Classic Manicure",
          "Classic Pedicure",
          "Classic Manicure & Pedicure",
        ],
      },
      {
        id: "french-finish",
        category: "Nail Care",
        name: "French Finish",
        description:
          "A timeless choice featuring clean white tips and a sophisticated finish that's suitable for both everyday wear and special occasions.",
        featuresLabel: "Includes",
        features: [
          "French Manicure",
          "French Pedicure",
          "French Manicure & Pedicure",
        ],
      },
      {
        id: "gelish-nail-care",
        category: "Nail Care",
        name: "Gelish Nail Care",
        description:
          "Perfect if you're looking for a glossy, chip-resistant finish that stays beautiful for longer than traditional nail polish.",
        featuresLabel: "Includes",
        features: [
          "Gelish Manicure",
          "Gelish Pedicure",
          "Gelish Manicure & Pedicure",
          "Gelish French Manicure",
          "Gelish French Pedicure",
          "Gelish French Manicure & Pedicure",
        ],
      },
      {
        id: "nail-maintenance",
        category: "Nail Care",
        name: "Nail Maintenance Services",
        description:
          "Quick maintenance services designed to keep your nails neat, healthy, and polished between regular manicure appointments.",
        featuresLabel: "Includes",
        features: [
          "Classic Polish Change",
          "Gelish Polish Change",
          "Gelish Removal",
          "Cut, Buff & Shine",
        ],
      },
      {
        id: "advanced-hand-foot-care",
        category: "Nail Care",
        name: "Advanced Hand & Foot Care",
        description:
          "Targeted treatments that deeply nourish dry skin, soften rough areas, improve comfort, and leave your hands and feet feeling refreshed and rejuvenated.",
        featuresLabel: "Includes",
        features: [
          "Paraffin Manicure",
          "Paraffin Pedicure",
          "Heel Peel Pedicure",
          "Callus Treatment",
        ],
      },
    ],
    highlightGroup: {
      title: "More Than Just Beautiful Nails",
      description:
        "Regular manicure and pedicure appointments don't just improve your appearance — they also help maintain healthier nails and provide an opportunity to relax and recharge.",
      items: [
        {
          title: "Healthier Nails",
          description:
            "Routine professional nail care supports stronger nails, healthier cuticles, and improved nail growth while reducing common concerns like dryness and brittleness.",
        },
        {
          title: "Softer, Smoother Skin",
          description:
            "Deep cleansing, exfoliation, and nourishing treatments leave your hands and feet feeling soft, refreshed, and beautifully cared for.",
        },
        {
          title: "Relaxation & Wellbeing",
          description:
            "Take time out for yourself and enjoy a calming experience that helps relieve everyday stress while giving your hands and feet the attention they deserve.",
        },
        {
          title: "A Well-Groomed Appearance",
          description:
            "Beautifully maintained nails complete your overall look, helping you feel polished and confident in every professional, social, or special occasion.",
        },
      ],
    },
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Priyanka",
      role: "Senior Beauty Therapist",
      image: "/images/our-team/team3.webp",
      bio: [
        "Priyanka believes beautiful nails start with healthy nail care. Her gentle approach, attention to detail, and commitment to hygiene ensure every manicure and pedicure is both relaxing and beautifully finished.",
        "Whether you're visiting for regular nail maintenance or preparing for a special occasion, Priyanka focuses on delivering treatments that leave your hands and feet healthy, refreshed, and beautifully groomed.",
      ],
      expertise: [
        "Professional Manicures",
        "Professional Pedicures",
        "French Nail Care",
        "Gelish Nail Care",
        "Hand & Foot Treatments",
        "Nail Care Consultations",
      ],
    },
    faqTitle: "Before Your Appointment",
    faqs: [
      {
        id: "mp-1",
        question: "How often should I get a manicure or pedicure?",
        answer:
          "For healthy nails and well-maintained hands and feet, we recommend scheduling a manicure or pedicure every two to four weeks, depending on your lifestyle and nail growth.",
      },
      {
        id: "mp-2",
        question: "What's the difference between Classic and Gelish?",
        answer:
          "Classic manicures and pedicures use traditional nail polish, while Gelish provides a longer-lasting, chip-resistant finish with superior shine and durability.",
      },
      {
        id: "mp-3",
        question: "What is a French Manicure?",
        answer:
          "A French Manicure features a natural-looking base with elegant white tips, creating a timeless style that's suitable for both everyday wear and formal occasions.",
      },
      {
        id: "mp-4",
        question: "Do you follow proper hygiene standards?",
        answer:
          "Absolutely. Every tool is thoroughly cleaned and sanitised before each treatment to ensure a safe and hygienic experience.",
      },
      {
        id: "mp-5",
        question: "Can I combine my manicure and pedicure in one appointment?",
        answer:
          "Yes. Many clients choose to enjoy both services together for a complete hand and foot care experience.",
      },
      {
        id: "mp-6",
        question: "Which manicure or pedicure is right for me?",
        answer:
          "Our beauty specialists will assess your nail condition, lifestyle, and preferences before recommending the most suitable treatment for your needs.",
      },
    ],
    ctaTitle: "Healthy Nails Start with Professional Care",
    ctaDescription:
      "Whether you're maintaining your regular nail care routine or simply taking time to relax and recharge, our experienced beauty specialists are here to provide professional manicure and pedicure services that leave your hands and feet healthy, refreshed, and beautifully cared for.",
    metaTitle:
      "Manicure & Pedicure in Dubai | Classic, French & Gelish Nail Care | VR Unisex Salon",
    metaDescription:
      "Enjoy professional manicure and pedicure services in Dubai at VR Unisex Salon. Choose from Classic, French, and Gelish manicures and pedicures, nail maintenance, paraffin treatments, heel peel pedicures, and expert hand & foot care in a hygienic, relaxing salon.",
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
    tagline: "Colour & Highlights",
    heroBadge: "Precision, Protection & Premium Results",
    heroSubtitle: "More Than a Shade Change — a Personalised Transformation",
    longDescription:
      "Our colourists combine premium products, advanced techniques and a deep consultation to deliver safe, precise and long-lasting results. Whether you're after subtle dimension or a bold trend, every service is designed around your hair type, skin tone and lifestyle.",
    highlights: [
      "Consultation before every colour",
      "Premium colour products",
      "Matched to your skin tone",
      "Colour for women & men",
    ],
    treatmentsSubtitle:
      "From natural enhancements to bold fashion statements — for women and men.",
    treatments: [
      {
        id: "global-hair-color",
        category: "For Women",
        name: "Global Hair Color",
        description:
          "A uniform, rich shade from roots to ends. Ideal for a complete refresh or a dramatic change, delivering even coverage, vibrant depth and a polished finish.",
        bestFor: "A complete colour refresh or dramatic change.",
        result: "Even coverage with a vibrant, glossy finish.",
      },
      {
        id: "root-touch-up",
        category: "For Women",
        name: "Root Touch-Up",
        description:
          "Perfect for maintaining your existing colour and keeping regrowth seamless. Best for visible roots or grey regrowth, blending new growth with your current shade for a clean, fresh look.",
        bestFor: "Maintaining colour and covering grey regrowth.",
        result: "Seamless blending with a salon-fresh appearance.",
      },
      {
        id: "highlights",
        category: "For Women",
        name: "Highlights",
        description:
          "Adds brightness and dimension by lightening selected strands. Ideal for a sun-kissed glow or face-framing definition, enhancing movement and texture without overpowering your base colour.",
        bestFor: "A sun-kissed glow and added dimension.",
        result: "Natural brightness with enhanced texture.",
      },
      {
        id: "lowlights",
        category: "For Women",
        name: "Lowlights",
        description:
          "Deepens and enriches your hair by adding darker tones for contrast and balance. Often paired with highlights — perfect for restoring depth or softening overly light hair.",
        bestFor: "Adding depth and balancing highlights.",
        result: "A multi-dimensional, natural finish.",
      },
      {
        id: "balayage",
        category: "For Women",
        name: "Balayage",
        description:
          "A hand-painted technique that creates soft, natural gradients with minimal maintenance — lighter ends, subtle roots and a beautifully blended finish.",
        bestFor: "Low-maintenance, natural elegance.",
        result: "Soft gradients with a lived-in look.",
      },
      {
        id: "ombre-hair-color",
        category: "For Women",
        name: "Ombre",
        description:
          "A striking transition from darker roots to lighter lengths — bold yet balanced, and carefully blended for smooth transitions. Best if you want noticeable contrast without frequent touch-ups.",
        bestFor: "Bold contrast with minimal maintenance.",
        result: "A striking gradient with smooth transitions.",
      },
      {
        id: "fashion-hair-color",
        category: "For Women",
        name: "Fashion Hair Color",
        description:
          "For those who love to stand out. From vibrant reds and cool blues to soft pastels, we tailor bold shades to your personality and hair condition using advanced techniques and premium pigments.",
        bestFor: "Bold self-expression and unique styles.",
        result: "Vibrant, glossy fashion colours.",
      },
      {
        id: "grey-coverage",
        category: "For Women",
        name: "Grey Coverage",
        description:
          "Natural-looking, long-lasting results for both partial and full greys. We carefully match tones to your natural hair for seamless blending and reliable coverage.",
        bestFor: "Natural grey coverage and a youthful look.",
        result: "Seamless blending without harsh lines.",
      },
      {
        id: "full-hair-color-men",
        category: "For Men",
        name: "Full Hair Color",
        description:
          "Ideal for changing or refreshing your overall hair tone with a clean, uniform finish. We start with a consultation to choose a shade that complements your skin tone and style, then apply with careful sectioning and precise processing for even coverage.",
        bestFor: "A complete colour change or consistent tone.",
        result: "An even, natural finish with a polished look.",
      },
      {
        id: "hair-highlights-men",
        category: "For Men",
        name: "Hair Highlights",
        description:
          "Designed for subtle enhancement, not bold contrast. Soft, well-placed highlights create dimension, texture and movement, customised around your haircut, hair density and desired intensity — easy to maintain for both corporate and casual lifestyles.",
        bestFor: "Depth, texture and a modern edge.",
        result: "Natural highlights with low maintenance.",
      },
      {
        id: "grey-coverage-men",
        category: "For Men",
        name: "Grey Coverage",
        description:
          "Blends and covers greys while keeping a natural, age-appropriate appearance. We select shades matching your original colour so the result never looks dyed, applied for longevity, scalp comfort and an even finish.",
        bestFor: "Visible greys that need a subtle refresh.",
        result: "Natural coverage with a youthful finish.",
      },
    ],
    faqs: [
      {
        id: "hc-1",
        question: "What's the difference between balayage and ombre?",
        answer:
          "Balayage is hand-painted for soft, natural gradients that grow out gently. Ombre is a more defined transition from darker roots to lighter lengths — bolder contrast, but still low maintenance.",
      },
      {
        id: "hc-2",
        question: "How often do I need a root touch-up?",
        answer:
          "It depends on how fast your roots show, but most clients come in every few weeks to keep the blend seamless.",
      },
      {
        id: "hc-3",
        question: "Do you colour men's hair too?",
        answer:
          "Yes — full colour, subtle highlights and grey coverage, all designed to look natural rather than obviously dyed.",
      },
      {
        id: "hc-4",
        question: "Will colouring damage my hair?",
        answer:
          "We use premium products and always consult first. If your hair is fragile or you're bleaching, ask about our Olaplex treatment — it's designed to reduce damage from colouring and bleaching.",
      },
    ],
  },
  {
    id: "9",
    slug: "waxing-threading",
    title: "Waxing / Threading",
    description: "Smooth, gentle hair removal for face and body.",
    startingPrice: 199,
    tagline: "Hair Removal",
    heroBadge: "Gentle, Hygienic & Private",
    heroSubtitle: "Smooth, Clean & Confident Skin — Done the Right Way",
    longDescription:
      "Waxing and threading are personal services that require trust, comfort and expert care. Ours are designed to deliver clean, smooth results while staying gentle on the skin — even for first-time clients. We follow strict hygiene protocols, use skin-friendly products and customise every service around your skin type and sensitivity.",
    highlights: [
      "Strict hygiene protocols",
      "Skin-friendly products",
      "Gentle on sensitive skin",
      "Calm, private setting",
    ],
    treatmentsSubtitle:
      "Waxing and threading — every service customised to your skin type and sensitivity.",
    treatments: [
      {
        id: "full-body-wax",
        category: "Waxing",
        name: "Full Body Wax",
        description:
          "Removes unwanted hair from arms, legs, underarms, back, stomach and face (optional) in one complete session. Ideal if you prefer long-lasting smoothness and even skin texture — perfect before vacations, special occasions, or for overall grooming. Expect soft, clean skin with reduced regrowth over time, in a hygienic and private setting.",
      },
      {
        id: "half-leg-wax",
        category: "Waxing",
        name: "Half Leg Wax",
        description:
          "Hair removal from knees to ankles — ideal if you like wearing skirts, dresses or cropped outfits. Leaves your lower legs smooth and polished without irritation, making it a quick, comfortable option for regular maintenance.",
      },
      {
        id: "full-leg-wax",
        category: "Waxing",
        name: "Full Leg Wax",
        description:
          "Removes hair from thighs to ankles for a completely smooth finish. Best if you want longer-lasting results than shaving — it improves how your skin feels and looks, with comfort and care throughout.",
      },
      {
        id: "half-arm-wax",
        category: "Waxing",
        name: "Half Arm Wax",
        description:
          "Focuses on hair removal from elbow to wrist. Suitable if you want neat, clean arms while keeping the experience quick and gentle — ideal for everyday grooming and professional settings.",
      },
      {
        id: "full-arm-wax",
        category: "Waxing",
        name: "Full Arm Wax",
        description:
          "Removes hair from shoulders to wrists, leaving arms smooth and evenly toned. Perfect for sleeveless outfits and special events, using skin-friendly wax to minimise discomfort and redness.",
      },
      {
        id: "underarm-wax",
        category: "Waxing",
        name: "Underarm Wax",
        description:
          "Clean, smooth underarms with longer-lasting results than shaving. Helps reduce hair thickness over time and keeps the area fresh and neat — ideal for sensitive skin, performed to strict hygiene standards.",
      },
      {
        id: "bikini-wax",
        category: "Waxing",
        name: "Bikini Wax",
        description:
          "Removes unwanted hair along the bikini line while always respecting your comfort level, in a private setting. Suitable for first-time clients and regular maintenance, leaving skin smooth without harsh irritation.",
      },
      {
        id: "face-wax",
        category: "Waxing",
        name: "Face Wax",
        description:
          "Removes unwanted hair from the upper lip, chin, cheeks and sides of the face. Ideal for quick, effective hair removal — it improves makeup finish and leaves skin looking clean and fresh, using gentle wax suitable for facial skin.",
      },
      {
        id: "eyebrow-threading",
        category: "Threading",
        name: "Eyebrow Threading",
        description:
          "Shapes and defines your brows with precision. Ideal if you want clean, natural-looking brows without chemicals — threading gives sharp definition while staying gentle on sensitive skin.",
      },
      {
        id: "upper-lip-threading",
        category: "Threading",
        name: "Upper Lip Threading",
        description:
          "Removes fine facial hair safely and effectively without irritation. Best for sensitive skin, giving a smooth finish while keeping the skin comfortable.",
      },
      {
        id: "forehead-threading",
        category: "Threading",
        name: "Forehead Threading",
        description:
          "Removes unwanted hair along the hairline for a cleaner, more balanced look. Enhances facial symmetry and is ideal if you prefer precise hair removal without waxing.",
      },
      {
        id: "chin-threading",
        category: "Threading",
        name: "Chin Threading",
        description:
          "Targets unwanted hair with accuracy, making it suitable for sensitive or acne-prone skin. The result is a clean, smooth chin area without harsh products.",
      },
      {
        id: "full-face-threading",
        category: "Threading",
        name: "Full Face Threading",
        description:
          "Removes hair from eyebrows, upper lip, chin, forehead and the sides of the face. Ideal if you want a complete, natural-looking finish — it improves skin texture and enhances overall facial clarity.",
      },
    ],
    faqs: [
      {
        id: "wt-1",
        question: "Does waxing hurt?",
        answer:
          "We use skin-friendly wax and adjust to your sensitivity to minimise discomfort and redness. Do tell your therapist if it's your first time — we'll take it gently.",
      },
      {
        id: "wt-2",
        question: "How is threading different from waxing?",
        answer:
          "Threading uses no chemicals and gives sharper definition, so it's often the better choice for brows and for sensitive or acne-prone skin.",
      },
      {
        id: "wt-3",
        question: "I'm a first-time client — is bikini waxing comfortable?",
        answer:
          "Yes. It's done in a private setting and always at your comfort level. Our therapists work with first-time clients regularly.",
      },
      {
        id: "wt-4",
        question: "How long do the results last?",
        answer:
          "Waxing lasts noticeably longer than shaving, and regular sessions can reduce hair thickness over time.",
      },
    ],
  },
  {
    id: "10",
    slug: "couple-services",
    title: "Couple Services",
    description: "Pamper sessions designed for two.",
    startingPrice: 1999,
    tagline: "For Two",
    heroBadge: "Shared Self-Care",
    heroSubtitle: "Relax. Reconnect. Refresh — Together.",
    longDescription:
      "Experience the joy of shared self-care. Our couple services are designed to help you unwind side by side in a calm, hygienic environment while enjoying premium treatments tailored to both partners.",
    highlights: [
      "Treated side by side",
      "Coordinated care for both",
      "Sanitized tools, fresh products",
      "Never rushed",
    ],
    journeyIntro: {
      title: "Couples Manicure & Pedicure",
      description:
        "Designed for partners who want to unwind side by side, this service combines professional nail and foot care with a peaceful, hygienic environment. Both partners receive coordinated care — nail shaping, cuticle care, gentle exfoliation, and a relaxing hand and foot massage — without rushing. Perfect for date days, special occasions, or simple quality time.",
    },
    benefits: [
      {
        icon: "Gem",
        title: "Professional Nail Care",
        description: "Expert shaping, cuticle care and polish application for both partners.",
      },
      {
        icon: "Hand",
        title: "Relaxing Massage",
        description: "Soothing hand and foot massage to relieve tension and promote relaxation.",
      },
      {
        icon: "ShieldCheck",
        title: "Strict Hygiene Standards",
        description: "Sanitized tools, fresh products and a clean environment, guaranteed.",
      },
      {
        icon: "Clock",
        title: "Unhurried Experience",
        description: "Take your time and enjoy quality moments together, without rushing.",
      },
    ],
    faqs: [
      {
        id: "cs-1",
        question: "What's included in a couples manicure & pedicure?",
        answer:
          "Both partners receive coordinated care: nail shaping, cuticle care, gentle exfoliation, and a relaxing hand and foot massage.",
      },
      {
        id: "cs-2",
        question: "Do we sit together during the treatment?",
        answer:
          "Yes — that's the whole idea. You're treated side by side so you can relax and enjoy the time together.",
      },
      {
        id: "cs-3",
        question: "Should we book in advance?",
        answer:
          "We'd recommend it. Booking ahead lets us seat you together and have the team ready for both of you.",
      },
      {
        id: "cs-4",
        question: "Is it suitable for a special occasion?",
        answer:
          "Absolutely — it's a favourite for date days, anniversaries, birthdays, or simply quality time together.",
      },
    ],
  },
  {
    id: "11",
    slug: "eyelash-extensions",
    title: "Eyelash Extensions",
    description: "Natural to dramatic lash extensions, done right.",
    startingPrice: 899,
    tagline: "Lash Artistry",
    heroBadge: "Natural to Glam",
    heroSubtitle: "Enhance Your Eyes with Professionally Crafted Lashes",
    longDescription:
      "Our eyelash services elevate your natural beauty with precision, comfort and care. Whether you prefer soft, natural extensions or bold, dramatic volume, our certified lash artists customise every set to suit your eye shape, lifestyle and desired look. We follow strict hygiene protocols, use premium products and prioritise lash health — so you enjoy stunning results with complete peace of mind.",
    highlights: [
      "Certified lash artists",
      "Customised to your eye shape",
      "Lash health prioritised",
      "Strict hygiene protocols",
    ],
    treatmentsSubtitle:
      "From a soft everyday look to high-impact glam — plus refills, removal and lifts.",
    treatments: [
      {
        id: "classic-eyelash-extensions",
        category: "Lashes",
        name: "Classic Eyelash Extensions",
        description:
          "One extension applied to one natural lash, creating a clean, elegant and natural-looking enhancement. Ideal if you want subtle definition without heaviness.",
        featuresLabel: "Best for",
        features: ["First-time lash clients", "Anyone who prefers a soft, everyday look"],
        resultLabel: "Results",
        result:
          "Naturally longer, darker lashes that enhance your eyes while staying lightweight and comfortable — a polished, effortless look.",
      },
      {
        id: "volume-eyelash-extensions",
        category: "Lashes",
        name: "Volume Eyelash Extensions",
        description:
          "Ultra-fine extensions applied in handcrafted fans to each natural lash, creating fullness and drama without weighing your lashes down.",
        featuresLabel: "Best for",
        features: [
          "Anyone who loves bold, glamorous eyes",
          "Sparse natural lashes that need more density",
        ],
        resultLabel: "Results",
        result:
          "A fuller, fluffier lash line with customisable intensity — from soft volume to high-impact glam.",
      },
      {
        id: "hybrid-eyelash-extensions",
        category: "Lashes",
        name: "Hybrid Eyelash Extensions",
        description:
          "Combines classic and volume techniques for a balanced, textured look — the best of both worlds: definition and fullness.",
        featuresLabel: "Best for",
        features: [
          "More volume than classic lashes",
          "A softer finish than full volume",
        ],
        resultLabel: "Results",
        result:
          "A layered, wispy effect that enhances your natural beauty while adding noticeable depth.",
      },
      {
        id: "eyelash-refill",
        category: "Lashes",
        name: "Eyelash Refill",
        description:
          "Maintains the beauty of your extensions by replacing lashes that have naturally shed over time. We assess lash health before every refill to ensure safe application.",
        featuresLabel: "Best for",
        features: [
          "Existing lash extension clients",
          "Keeping your look fresh and well-defined",
        ],
        resultLabel: "Results",
        result:
          "Restored fullness and symmetry, extending the life of your extensions while keeping them neat and refined.",
      },
      {
        id: "eyelash-removal",
        category: "Lashes",
        name: "Eyelash Removal",
        description:
          "Professional removal that safely dissolves lash adhesive without pulling or damaging your natural lashes. A gentle process that protects eye comfort and lash integrity.",
        featuresLabel: "Best for",
        features: [
          "Switching styles",
          "Taking a break from extensions",
          "Correcting a previous application",
        ],
        resultLabel: "Results",
        result: "Clean, healthy natural lashes — ready for a new set or a natural reset.",
      },
      {
        id: "lash-lifting",
        category: "Lashes",
        name: "Lash Lifting",
        description:
          "Enhances your natural lashes by lifting and curling them from the root, creating the illusion of longer, more open eyes — without extensions.",
        featuresLabel: "Best for",
        features: [
          "A low-maintenance, natural enhancement",
          "Lifting your lashes effortlessly",
        ],
        resultLabel: "Results",
        result:
          "Beautifully curled lashes with a wide-eyed effect that lasts for weeks — minimal yet polished.",
      },
    ],
    faqs: [
      {
        id: "el-1",
        question: "Which lash style should I choose?",
        answer:
          "Classic suits a soft, everyday look, volume gives bold glam or adds density to sparse lashes, and hybrid sits in between. Your lash artist will help you decide.",
      },
      {
        id: "el-2",
        question: "How often do I need a refill?",
        answer:
          "Lashes shed naturally over time, so most clients book a refill every few weeks to restore fullness and symmetry.",
      },
      {
        id: "el-3",
        question: "Will extensions damage my natural lashes?",
        answer:
          "Not when applied and removed properly. We assess lash health before every refill and our removal dissolves the adhesive rather than pulling.",
      },
      {
        id: "el-4",
        question: "What's the difference between a lash lift and extensions?",
        answer:
          "A lift curls your own lashes from the root for a natural, low-maintenance look. Extensions add length and volume with lashes applied to your natural ones.",
      },
    ],
  },
  {
    id: "12",
    slug: "makeup",
    title: "Makeup",
    description: "Party, bridal and everyday makeup by experts.",
    startingPrice: 1499,
    tagline: "Day & Evening",
    heroBadge: "Precision, Balance & Elegance",
    heroSubtitle: "Enhance Your Natural Beauty",
    longDescription:
      "Makeup isn't about heavy layers — it's about enhancing your natural features with precision, balance and elegance. Whether you need subtle day makeup, glamorous party makeup, or flawless bridal and occasion makeup, our artists customise every look to your skin tone, outfit, occasion and personal style. We focus on proper skin prep, premium products, strict hygiene and techniques that deliver a long-lasting, comfortable finish.",
    highlights: [
      "Professional makeup artists",
      "Proper skin prep every time",
      "Premium-quality products",
      "Long-lasting, comfortable finish",
    ],
    treatmentsSubtitle:
      "From a fresh daytime look to bridal — matched to your occasion and lighting.",
    treatments: [
      {
        id: "day-makeup",
        category: "Makeup",
        name: "Day Makeup",
        description:
          "A fresh, natural, polished look — perfect for office wear, daytime events, casual outings or photoshoots. Kept light, breathable and skin-friendly, enhancing your features without looking overdone. Includes skin prep, lightweight base, soft eye definition, natural brows and subtle lip shades.",
        bestFor: "Office wear, daytime events and casual outings.",
        result: "A fresh, natural and polished look, all day.",
      },
      {
        id: "evening-party-makeup",
        category: "Makeup",
        name: "Evening / Party Makeup",
        description:
          "Perfect for parties, celebrations, dinners and special nights out. More defined and glamorous while staying refined and balanced. Includes detailed skin prep, a smooth base, enhanced eye makeup, contouring and statement lips to your preference.",
        bestFor: "Parties, celebrations and special nights out.",
        result: "A glamorous, photogenic finish.",
      },
      {
        id: "hd-makeup",
        category: "Makeup",
        name: "HD Makeup",
        description:
          "Ideal for high-definition cameras, events and close-up photography. Finely milled, premium products create a seamless, skin-like finish that won't settle into fine lines — a smooth, natural appearance even under bright lights.",
        bestFor: "Weddings, photography and special events.",
        result: "A flawless finish under any lighting.",
      },
      {
        id: "airbrush-makeup",
        category: "Makeup",
        name: "Airbrush Makeup",
        description:
          "A lightweight, long-lasting, ultra-smooth finish using advanced airbrush technology. Applied evenly as a fine mist for flawless yet natural-looking skin — ideal for long events, humid conditions, and anyone who prefers minimal product feel.",
        bestFor: "Long events, weddings and humid conditions.",
        result: "An ultra-smooth, transfer-resistant finish.",
      },
      {
        id: "bridal-occasion-makeup",
        category: "Makeup",
        name: "Bridal & Occasion Makeup",
        description:
          "Fully customised for weddings, engagements, receptions, festive events and milestone celebrations. We take time to understand your outfit, jewellery, skin type and preferences to create a timeless, confident look — with detailed skin prep, high-quality products and precise finishing.",
        bestFor: "Weddings, engagements and milestone events.",
        result: "Radiant, timeless and long-lasting beauty.",
      },
    ],
    faqs: [
      {
        id: "mk-1",
        question: "What's the difference between HD and airbrush makeup?",
        answer:
          "HD uses finely milled products for a seamless finish that photographs beautifully up close. Airbrush is applied as a fine mist for an ultra-smooth, transfer-resistant finish that holds up through long events and humidity.",
      },
      {
        id: "mk-2",
        question: "Which makeup is best for my wedding?",
        answer:
          "HD and airbrush are both popular for weddings — HD for photography, airbrush for long wear in humid conditions. Our bridal service is fully customised around your outfit, jewellery and skin type.",
      },
      {
        id: "mk-3",
        question: "Do you do makeup for photoshoots?",
        answer:
          "Yes. Day makeup suits natural, everyday shoots, while HD makeup is designed for close-up and high-definition photography.",
      },
      {
        id: "mk-4",
        question: "Will the makeup last all day?",
        answer:
          "Yes — we focus on proper skin prep and long-lasting techniques. For very long events or humid weather, airbrush holds up best.",
      },
    ],
  },
];

export const hairExtensionsService: Service = {
  id: "13",
  slug: "hair-extensions",
  title: "Hair Extensions",
  description: "Add instant length, volume and confidence with premium extensions.",
  startingPrice: 1499,
  // TODO: replace with public/images/services/hair-extensions.webp once the
  // real photo is supplied — this is a stand-in showing long hair.
  image: "/images/services/women-haircut.webp",
  tagline: "Length & Volume",
  heroBadge: "Premium Extension Techniques",
  heroSubtitle: "Fuller, Longer, Naturally Beautiful Hair",
  longDescription:
    "Transform your look with fuller, longer and naturally beautiful hair. Our professional hair extension services add instant length, volume and confidence while blending seamlessly with your natural hair. Whether you're looking for a subtle enhancement or a complete transformation, our specialists help you achieve a look that feels effortlessly beautiful.",
  highlights: [
    "Personalised hair consultation",
    "Colour & texture matched",
    "Premium extension products",
    "Aftercare guidance included",
  ],
  benefitsTitle: "Why Choose VR Salon for Hair Extensions",
  benefitsSubtitle:
    "Beautiful extensions require more than length — they need expert consultation, precise application and a personalised approach, so the result looks natural and suits your lifestyle.",
  benefits: [
    {
      icon: "ClipboardList",
      title: "Personalised Hair Consultation",
      description:
        "Every appointment begins with understanding your natural hair, lifestyle and the look you want to achieve.",
    },
    {
      icon: "Sparkles",
      title: "Natural-Looking Results",
      description:
        "We match the colour, texture and placement of your extensions for a seamless finish that blends with your own hair.",
    },
    {
      icon: "Gem",
      title: "Premium Hair Quality",
      description:
        "We work with high-quality extension products that provide natural movement, long-lasting wear and exceptional comfort.",
    },
    {
      icon: "Scissors",
      title: "Expert Application",
      description:
        "Our specialists apply every technique carefully to protect your natural hair while achieving stunning results.",
    },
    {
      icon: "BookOpen",
      title: "Styling & Aftercare Guidance",
      description:
        "We'll show you how to maintain your extensions so they keep looking beautiful between salon visits.",
    },
  ],
  treatmentsSubtitle:
    "Every client has different hair goals — we'll recommend the technique best suited to your hair type and lifestyle.",
  treatmentColumns: 2,
  treatments: [
    {
      id: "clip-in-hair-extensions",
      category: "Extensions",
      name: "Clip-in Hair Extensions",
      tagline: "Instant Transformation, No Commitment",
      description:
        "Perfect if you love changing your hairstyle for parties, weddings, photoshoots, vacations or special occasions — on and off whenever you like.",
      featuresLabel: "Ideal for",
      features: [
        "Temporary hair length",
        "Added hair volume",
        "Weddings & parties",
        "Easy application and removal",
      ],
    },
    {
      id: "tape-hair-extensions",
      category: "Extensions",
      name: "Tape Hair Extensions",
      tagline: "Lightweight & Discreet for Everyday Wear",
      description:
        "Designed for comfortable daily wear, they blend naturally with your existing hair while adding beautiful length and fullness.",
      featuresLabel: "Ideal for",
      features: [
        "Fine to medium hair",
        "Natural everyday volume",
        "Longer hairstyles",
        "Lightweight comfort",
      ],
    },
    {
      id: "keratin-hair-extensions",
      category: "Extensions",
      name: "Keratin Hair Extensions",
      tagline: "Premium, Durable & Natural Movement",
      description:
        "One of the most popular premium methods, offering durable, natural-looking results with excellent movement and long-lasting performance.",
      featuresLabel: "Ideal for",
      features: [
        "Long-term hair enhancement",
        "Natural movement",
        "Fuller hairstyles",
        "Premium transformations",
      ],
    },
    {
      id: "microlink-hair-extensions",
      category: "Extensions",
      name: "Microlink Hair Extensions",
      tagline: "No Glue, No Heat, Fully Flexible",
      description:
        "Applied without glue or heat, making them a flexible option if you want natural-looking extensions with easy maintenance.",
      featuresLabel: "Ideal for",
      features: [
        "Natural appearance",
        "Hair length & volume",
        "Flexible styling",
        "Reusable extension systems",
      ],
    },
  ],
  comparison: {
    title: "Which Hair Extension Is Right for You?",
    description:
      "Not sure which method suits your hair? During your consultation we assess your hair type, lifestyle and styling preferences before recommending the most suitable solution.",
    goalLabel: "Your Hair Goal",
    recommendedLabel: "Recommended Extension",
    rows: [
      { goal: "Temporary hair transformation", recommended: "Clip-in Hair Extensions" },
      { goal: "Everyday length & volume", recommended: "Tape Hair Extensions" },
      { goal: "Premium long-term results", recommended: "Keratin Hair Extensions" },
      { goal: "Flexible & reusable solution", recommended: "Microlink Hair Extensions" },
    ],
  },
  highlightGroup: {
    title: "Why Clients Love Hair Extensions",
    description:
      "Professional extensions offer far more than added length — they open up styling possibilities while boosting confidence and enhancing your overall appearance.",
    items: [
      {
        title: "Instant Hair Length",
        description: "Achieve long, flowing hair in just one appointment.",
      },
      {
        title: "Fuller, Thicker Hair",
        description:
          "Extensions add natural-looking body and volume, especially for fine or thin hair.",
      },
      {
        title: "Endless Styling Possibilities",
        description:
          "Enjoy braids, curls, ponytails, waves and elegant updos with greater confidence.",
      },
      {
        title: "Confidence Boost",
        description:
          "Many clients choose extensions because fuller, healthier-looking hair helps them feel more confident every day.",
      },
      {
        title: "Natural Appearance",
        description:
          "Professionally applied extensions blend beautifully with your natural hair for seamless, elegant results.",
      },
    ],
  },
  expert: {
    name: "Raju",
    role: "Founder & Hair Expert",
    image: "/images/our-team/team2.webp",
    bio: [
      "Raju believes hair extensions should enhance your natural beauty rather than overpower it. Every consultation begins with understanding your hair type, lifestyle and desired look before recommending the most suitable method.",
      "His focus is always on creating beautiful, natural-looking transformations while maintaining the health of your natural hair.",
    ],
    expertise: [
      "Clip-in Hair Extensions",
      "Tape Hair Extensions",
      "Keratin Hair Extensions",
      "Microlink Hair Extensions",
      "Hair Volume Enhancement",
      "Hair Length Transformations",
      "Hair Styling Consultation",
    ],
  },
  careTips: {
    title: "Hair Extension Care Tips",
    description:
      "Proper aftercare keeps your extensions beautiful while protecting your natural hair. We recommend:",
    tips: [
      "Using salon-recommended haircare products",
      "Brushing gently with a suitable extension brush",
      "Avoiding excessive pulling or tension",
      "Following your stylist's maintenance schedule",
      "Returning for professional maintenance appointments",
    ],
    note: "Our specialists will provide personalised aftercare instructions before you leave the salon.",
  },
  faqs: [
    {
      id: "he-1",
      question: "Which type of hair extension is best for me?",
      answer:
        "It depends on your hair type, lifestyle and desired result. During your consultation we'll recommend whether clip-in, tape, keratin or microlink extensions suit you best.",
    },
    {
      id: "he-2",
      question: "Will hair extensions damage my natural hair?",
      answer:
        "When professionally applied and maintained correctly, extensions can be worn safely. Our specialists use techniques designed to protect the health of your natural hair.",
    },
    {
      id: "he-3",
      question: "How long do hair extensions last?",
      answer:
        "The lifespan depends on the method you choose and how well they're maintained. We'll explain the expected longevity during your consultation.",
    },
    {
      id: "he-4",
      question: "Can I style my hair with extensions?",
      answer:
        "Absolutely. Extensions let you enjoy curls, waves, braids, ponytails and many other styles with greater length and volume.",
    },
    {
      id: "he-5",
      question: "Will the extensions match my natural hair?",
      answer:
        "Yes. We carefully match the colour, texture and placement so your extensions blend naturally with your own hair.",
    },
    {
      id: "he-6",
      question: "How do I care for my hair extensions?",
      answer:
        "We provide personalised aftercare instructions, product recommendations and maintenance guidance to keep your extensions looking beautiful.",
    },
    {
      id: "he-7",
      question: "Do I need a consultation before getting hair extensions?",
      answer:
        "Yes. Every appointment begins with a consultation so we can understand your goals and recommend the most suitable method.",
    },
  ],
  ctaTitle: "Love Your Hair Even More",
  ctaDescription:
    "Whether you're dreaming of longer hair, more volume or a complete transformation, our specialists are here to create beautiful, natural-looking results tailored to your hair type and personal style.",
};

export const services: Service[] = [...coreServices, hairExtensionsService];

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
    name: "Couple's Mani-Pedi + Foot Spa",
    price: 299,
    features: ["Couple's Mani-Pedi", "Foot Spa"],
  },
  {
    id: "2",
    name: "Anti-Frizz package details",
    price: 7999,
    features: ["Summer offer to control a freeziness and damage hair with healthy hair", "Keratin", "Anti frizz treatment", "Protein", "Botox", "Smoothening", "straightening", "nanoplastria", "Botox", "Any length any volume"],
    popular: true,
  },
  {
    id: "3",
    name: "Men's 4-step Grooming Ritual",
    price: 79,
    features: ["Get the ultimate 4-step grooming experience that feels like a luxury ritual, priced for the smart gentleman.", "Bespoke Haircut & Professional Styling", "Deep Cleansing Hairwash", "Crisp Shave & Beard Line-up", "Soothing Hot Towel Finish"],
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Vishal",
    role: "Founder & Hair Expert",
    bio: "Starting his journey in hairdressing at just 18, Vishal transformed his passion into an international career spanning Singapore, Malaysia, Australia, and Dubai. With 8+ years of industry experience, he combines creativity, precision, and personalised consultations to create timeless looks while leading VR Unisex Salon with a vision of delivering world-class beauty experiences.",
    image: "/images/our-team/team1.webp",
  },
  {
    id: "2",
    name: "Raju",
    role: "Founder & Beauty Expert",
    bio: "Inspired by his brother Vishal, Raju discovered his passion for hairstyling and dedicated himself to mastering modern techniques through international learning and hands-on experience. His commitment to innovation, quality, and personalised care continues to shape the welcoming experience that defines VR Unisex Salon.",
    image: "/images/our-team/team2.webp",
  },
  {
    id: "3",
    name: "Priyanka",
    role: "Senior Beauty Therapist",
    bio: "Driven by her passion for beauty and wellness, Priyanka refined her expertise through professional training with internationally recognised beauty brands in Dubai. Known for her warm personality and personalised approach, she creates relaxing beauty experiences that leave every client feeling confident and beautifully cared for.",
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
    question: "Do I need to book an appointment?",
    answer:
      "Appointments are recommended to secure your preferred stylist and time. Walk-ins are always welcome based on availability. ",
  },
  {
    id: "2",
    question: "Do you offer services for both men and women?",
    answer:
      "Yes. VR Unisex Salon is a premium unisex salon offering professional hair, beauty, nail, and grooming experiences for both men and women. ",
  },
  {
    id: "3",
    question: "Which salon products do you use?",
    answer: "We use carefully selected professional salon brands trusted by beauty experts worldwide to ensure healthy, beautiful, and long-lasting results.",
  },
  {
    id: "4",
    question: "Is valet parking available?",
    answer: "Yes. Complimentary valet parking is available for all our guests. ",
  },
  {
    id: "5",
    question: "Where is VR Unisex Salon located?",
    answer: "We're conveniently located inside Crown Park Hotel, just a short walk from BurJuman Metro Station, making us easily accessible from across Dubai.",
  },
  {
    id: "6",
    question: "How can I book an appointment?",
    answer: "You can book your appointment online, through WhatsApp, or by calling our team directly. We'll be happy to assist you.",
  },
];
