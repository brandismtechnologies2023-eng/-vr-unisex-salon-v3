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
    // tagline: "Nail Care",
    // heroBadge: "Healthy Nails, Beautifully Finished",
    longDescription:
      "Healthy, well-maintained hands and feet are an important part of looking and feeling your best. Our professional manicure and pedicure services go beyond nail polishing — they're designed to improve nail health, nourish your skin, and provide a relaxing self-care experience. Whether you're booking your regular nail maintenance or treating yourself to some well-deserved pampering, our beauty specialists deliver every service with precision, hygiene, and exceptional care.",
    // highlights: [
    //   "Certified beauty specialists",
    //   "Sanitised tools for every client",
    //   "Premium salon products",
    //   "Calm, relaxing environment",
    // ],
    benefitsTitle: "Why Choose VR Salon for Your Nail Care",
    benefitsSubtitle:
      "Beautiful nails begin with healthy care. Every manicure and pedicure combines professional techniques, premium products, and meticulous attention to detail, ensuring your hands and feet receive the care they deserve.",
    benefits: [
      {
        icon: "Hand",
        title: "Professional Nail Care",
        description:
          "Every treatment is designed to maintain healthy nails, neat cuticles, and beautifully groomed hands and feet.",
      },
      {
        icon: "ShieldCheck",
        title: "Hygiene You Can Trust",
        description:
          "We follow strict hygiene standards by thoroughly sanitising our tools and workstations for every client.",
      },
      {
        icon: "Leaf",
        title: "Premium Salon Products",
        description:
          "We use trusted professional products that nourish your skin, strengthen your nails, and deliver long-lasting results.",
      },
      {
        icon: "Gem",
        title: "Personalised Attention",
        description:
          "Every treatment is tailored to your nail condition, lifestyle, and personal preferences for the best possible results.",
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
    // tagline: "Scalp Ritual",
    // heroBadge: "Premium Korean Ritual",
    // heroSubtitle: "A Ritual of Scalp Renewal & Deep Relaxation",
    longDescription:
      "Healthy hair begins with a healthy scalp. Experience our signature Korean Head Spa, where expert scalp care, therapeutic massage, and premium hair nourishment come together to refresh your hair, restore balance, and help you completely unwind.",
    // highlights: [
    //   "Certified head spa therapists",
    //   "Premium, scalp-safe products",
    //   "Warm water ritual therapy",
    //   "Deeply relaxing atmosphere",
    // ],
    // journeyIntro: {
    //   title: "More Than a Treatment — It's a Journey",
    //   description:
    //     "At VR Unisex Salon, our Korean Head Spa combines deep cleansing, gentle massage and nourishing care to help you feel lighter, calmer and refreshed from the roots up.",
    // },
    benefits: [
      {
        icon: "Droplets",
        title: "Deeply Cleanses the Scalp",
        description: "Helps remove excess oil, impurities, and product residue.",
      },
      {
        icon: "Wind",
        title: "Promotes Healthier Hair",
        description: "Supports softer, shinier, and more manageable hair.",
      },
      {
        icon: "HeartPulse",
        title: "Refreshes & Hydrates",
        description: "Restores comfort to dry or tired scalps.",
      },
      {
        icon: "Leaf",
        title: "Encourages Relaxation",
        description: "A calming experience that helps relieve everyday stress.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Scalp Assessment",
        description: "We begin by understanding your scalp condition, hair type, and concerns before recommending the most suitable treatment.",
      },
      {
        step: 2,
        title: "Deep Scalp Cleansing",
        description: "Professional cleansing removes oil, pollution, and product build-up that everyday shampooing often leaves behind.",
      },
      {
        step: 3,
        title: "Nourishment & Hydration",
        description: "Specialised products restore moisture and comfort while supporting a healthier scalp environment.",
      },
      {
        step: 4,
        title: "Therapeutic Head Massage",
        description: "Relaxing massage techniques help stimulate circulation while creating a calming spa experience.",
      },
      {
        step: 5,
        title: "Hair Conditioning",
        description: "Professional conditioning treatments leave your hair softer, shinier, and easier to manage.",
      },
      {
        step: 6,
        title: "Styling & Finish",
        description: "Your experience concludes with beautifully refreshed hair that's clean, healthy, and ready for the day ahead.",
      },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Raju",
      role: "Founder & Hair Expert",
      image: "/images/our-team/team2.webp",
      bio: [
        "Raju believes every great hairstyle begins with a healthy scalp. His personalised approach combines professional scalp analysis, premium haircare products, and therapeutic massage techniques to create a Korean Head Spa experience that's both restorative and deeply relaxing.",
      ],
      expertise: [
        "Korean Head Spa",
        "Scalp Wellness",
        "Hair Spa Treatments",
        "Hair Nourishment",
        "Luxury Hair Care",
        "Hair & Scalp Consultation",
      ],
    },
    processTitle: "Your Korean Head Spa Journey",
    processSubtitle: "Every appointment follows a carefully designed process that balances professional scalp care with complete relaxation.",
    faqs: [
      {
        id: "khs-1",
        question: "How long does a Korean Head Spa session take?",
        answer: "Most treatments take approximately 60–90 minutes, depending on your hair type and selected services.",
      },
      {
        id: "khs-2",
        question: "Is it suitable for coloured or chemically treated hair?",
        answer: "Yes. We personalise every treatment and select products suitable for your hair condition.",
      },
      {
        id: "khs-3",
        question: "How often should I book a Korean Head Spa?",
        answer: "For optimal scalp health, we recommend a session every 3–4 weeks.",
      },
      {
        id: "khs-4",
        question: "Can this help with dandruff or oily scalp?",
        answer: "Deep cleansing helps remove excess oil and impurities. During your consultation, we'll recommend the most suitable treatment based on your scalp's condition.",
      },
      {
        id: "khs-5",
        question: "Is the massage painful?",
        answer: "No. The massage is gentle, soothing, and designed to help you relax.",
      },
            {
        id: "khs-6",
        question: "Can I combine it with other hair services?",
        answer: "Absolutely. Many clients combine their Korean Head Spa with a haircut, hair colour, or hair treatment for a complete haircare experience.",
      },
    ],
        ctaTitle: "Restore Your Scalp. Refresh Your Mind.",
    ctaDescription:
      "Give yourself the time to pause, relax, and care for your hair from the roots up. Book your Korean Head Spa at VR Unisex Salon and enjoy a luxurious treatment designed to leave your scalp healthier, your hair beautifully refreshed, and your mind completely at ease.",
    metaTitle:
      "Korean Head Spa in Dubai | Luxury Scalp & Hair Spa | VR Unisex Salon",
    metaDescription:
      "Experience a luxury Korean Head Spa in Dubai at VR Unisex Salon. Enjoy professional scalp cleansing, therapeutic head massage, premium haircare products, and personalised scalp treatments for healthier hair and complete relaxation.",
  },
  {
    id: "3",
    slug: "women-haircut",
    title: "Women's Haircut in Dubai",
    description: "Precision cuts styled to suit your face and lifestyle.",
    startingPrice: 399,
    // tagline: "Hair Styling",
    // heroBadge: "Cut, Shaped & Styled for You",
    // heroSubtitle: "More Than Just a Change in Length",
    longDescription:
      "A great haircut is more than just a change in length, it's about expressing your personality, enhancing your natural features, and giving you confidence every day. At VR Unisex Salon, every haircut begins with understanding your face shape, hair texture, lifestyle, and styling preferences. Whether you're looking for a subtle refresh or a complete makeover, our experienced stylists create hairstyles that are elegant, practical, and uniquely yours.",
    // highlights: [
    //   "Consultation before every cut",
    //   "Shaped to your face & hair texture",
    //   "Experienced women's stylists",
    //   "Finishes that are easy to maintain",
    // ],
    // treatmentsSubtitle:
    //   "Every cut starts with a consultation — here's what we can do for you.",
    treatmentColumns: 2,
    treatments: [
      {
        id: "womens-haircut-styling",
        category: "Haircut",
        name: "Classic Haircuts ",
        // tagline: "Complete Transformation or Refreshed Look",
        description:
          "Elegant, timeless styles that remain versatile, sophisticated, and easy to maintain.",
      },
      {
        id: "hair-trim-shape-up",
        category: "Haircut",
        name: "Layered Haircuts",
        // tagline: "Maintain Your Style, Restore Your Balance",
        description:
          "Create natural movement, volume, and texture while maintaining softness and shape.",
      },
      {
        id: "layered-haircut",
        category: "Haircut",
        name: "Bob & Lob Styles",
        // tagline: "Add Dimension, Volume & Natural Movement",
        description:
          "Modern cuts that beautifully frame your face while offering effortless styling and versatility.",
      },
      {
        id: "blow-dry-styling",
        category: "Haircut",
        name: "Long Hair Shaping",
        // tagline: "Polished, Salon-Perfect Finish",
        description:
          "Maintain your length while improving structure, movement, and the overall health of your hair.",
      },
      {
        id: "blow-dry-styling",
        category: "Haircut",
        name: "Fringe & Face-Framing Styles",
        // tagline: "Polished, Salon-Perfect Finish",
        description:
          "Refresh your appearance with thoughtfully designed fringes and face-framing layers that highlight your best features.",
      },
      {
        id: "blow-dry-styling",
        category: "Haircut",
        name: "Hair Restyling & Complete Makeovers",
        // tagline: "Polished, Salon-Perfect Finish",
        description:
          "Looking for a complete transformation? Our personalized consultations help you confidently discover a hairstyle that reflects your personality and lifestyle.",
      },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Raju",
      role: "Founder & Hair Expert",
      image: "/images/our-team/team2.webp",
      bio: [
        "Raju believes every haircut should feel as unique as the person wearing it. Rather than simply following trends, he focuses on understanding your facial features, hair texture, lifestyle, and personal preferences before creating a hairstyle that complements your individuality.",
                "Whether you're looking for a subtle refresh, elegant layers, or a complete transformation, Raju combines creativity, technical precision, and personalized consultations to create hairstyles that continue looking beautiful long after your salon visit.",
      ],
      expertise: [
        "Women's Haircuts",
        "Hair Restyling & Makeovers",
        "Layered Haircuts",
        "Face-Framing Styles",
        "Long Hair Styling",
        "Personalized Hair Consultations",
      ],
    },
    faqs: [
      {
        id: "wh-1",
        question: "How do I know which haircut will suit me?",
        answer:
          "Every appointment begins with a personalized consultation where we assess your face shape, hair texture, lifestyle, and styling preferences before recommending the most suitable haircut.",
      },
      {
        id: "wh-2",
        question: "Can you help me choose a completely new hairstyle?",
        answer:
          "Absolutely. Whether you're looking for a subtle change or a complete makeover, we'll recommend styles that complement your features while matching your lifestyle.",
      },
      {
        id: "wh-3",
        question: "How often should I get a haircut?",
        answer:
          "Most clients benefit from a haircut every six to eight weeks to maintain healthy ends, shape, and overall style. Your stylist will recommend the ideal schedule based on your hairstyle and hair growth.",
      },
      {
        id: "wh-4",
        question: "Should I wash my hair before coming?",
        answer: "No. Simply arrive comfortably. Our team will prepare your hair appropriately before beginning your haircut.",
      },
      {
        id: "wh-5",
        question: "Can I combine my haircut with other services?",
        answer: "Yes. Many clients choose to add a Hair Wash & Blow Dry, Hair Styling, Hair Spa, or Hair Ironing service to complete their salon experience.",
      },
      {
        id: "wh-6",
        question: "Do you work with all hair types?",
        answer: "Yes. We work with straight, wavy, curly, and textured hair, tailoring every haircut to your natural hair type and styling preferences.",
      },
    ],
    
    ctaTitle: "Your Next Favorite Haircut Starts with a Conversation",
    ctaDescription:
      "Every beautiful haircut begins with understanding you. Whether you're maintaining your signature style or ready for a fresh new look, our experienced team is here to create a hairstyle that complements your personality, enhances your confidence, and fits seamlessly into your everyday life.",
    metaTitle:
      "Women's Haircut in Dubai | Ladies Hair Salon & Professional Hair Styling | VR Unisex Salon",
    metaDescription:
      "Looking for a woman’s haircut in Dubai? Visit VR Unisex Salon for personalized ladies’ haircuts, layered styles, bob cuts, long hair styling, blow dry, hair spa, and professional styling tailored to your face shape and lifestyle.",
  },
  {
    id: "4",
    slug: "mens-haircut",
    title: "Men's Grooming & Styling in Dubai",
    description: "Sharp, modern cuts from experienced stylists.",
    startingPrice: 249,
    // tagline: "Grooming",
    // heroBadge: "Sharp Cuts, Clean Finishes",
    // heroSubtitle: "Precision Grooming for Modern Men",
    longDescription:
      "Looking well-groomed isn't just about appearance—it's about confidence, professionalism, and feeling your best every day. At VR Unisex Salon, we offer a complete range of men's grooming and styling services under one roof, from precision haircuts and beard grooming to scalp treatments, hair colouring, manicures, pedicures, and body grooming. Whether you're preparing for an important meeting, a special occasion, or simply maintaining your signature look, our experienced team ensures every service is tailored to your style and comfort.",
    // highlights: [
    //   "Consultation before every cut",
    //   "Precise scissor & clipper work",
    //   "Sanitized tools for every client",
    //   "Sharp, easy-to-maintain finishes",
    // ],
    treatmentsSubtitle:
      "Whether you're maintaining your everyday style or preparing for an important occasion, our comprehensive men's grooming services are designed to help you look sharp, feel confident, and leave a lasting impression.",
    treatments: [
      {
        id: "classic-haircut",
        category: "Grooming",
        name: "Hair Styling",
        description:
          "A great hairstyle starts with a precise cut and professional styling. Whether you prefer a classic business look or a modern hairstyle, our stylists create clean, well-balanced cuts that are easy to maintain.",
      },
      {
        id: "fade-haircut",
        category: "Grooming",
        name: "Fade Haircut",
        description:
          "Focuses on seamless blending from skin or short lengths to fuller hair on top. Best for men who like a modern, stylish appearance with clean transitions. Our stylists ensure smooth gradients, sharp edges and symmetry for a premium finish.",
      },
      {
        id: "taper-cut",
        category: "Grooming",
        name: "Beard Grooming",
        description:
          "From perfectly shaped beards to clean shaves, we help define your facial features while maintaining a neat, well-groomed appearance.",
      },
      {
        id: "modern-trendy-styles",
        category: "Grooming",
        name: "Hair & Beard Colour",
        description:
          "Refresh your appearance with natural-looking colour that blends seamlessly while remaining gentle on your hair, beard, and skin.",
      },
      {
        id: "hair-wash-blow-dry",
        category: "Grooming",
        name: "Hair & Scalp Care",
        description:
          "Healthy hair starts with a healthy scalp. Our nourishing treatments help reduce dryness, improve scalp health, relieve tension, and leave you feeling refreshed.",
        },
        {
        id: "hand-foot-care",
        category: "Grooming",
        name: "Hand & Foot Care ",
        description:
          "Well-groomed hands and feet complete your overall appearance. Our treatments help maintain clean, healthy nails while providing a relaxing self-care experience.",
        },
        {
        id: "hand-foot-care",
        category: "Grooming",
        name: "Men's Waxing",
        description:
          "Professional waxing services designed for men who prefer a cleaner, more refined appearance with long-lasting results.",
        },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Raju",
      role: "Founder & Hair Expert",
      image: "/images/our-team/team2.webp",
      bio: [
        "Raju believes that great grooming goes beyond a haircut—it's about creating a look that reflects your personality and fits seamlessly into your lifestyle. Every consultation begins with understanding your preferences, hair type, beard style, and daily routine before recommending the most suitable grooming services.",
                "Whether you're visiting for a precision haircut, beard grooming, hair colour, or a complete grooming session, Raju combines technical expertise with a personalised approach to help you look your best with confidence.",
      ],
      expertise: [
        "Men's Hair Styling",
        "Precision Haircuts",
        "Beard Grooming",
        "Hair & Beard Colour",
        "Hair & Scalp Care",
        "Personalised Grooming Consultations",
      ],
    },
    faqs: [
      {
        id: "mh-1",
        question: "Do I need an appointment?",
        answer:
          "While walk-ins are welcome when possible, we recommend booking your appointment in advance to minimise waiting time and ensure your preferred stylist is available.",
      },
      {
        id: "mh-2",
        question: "Can I combine multiple grooming services in one visit?",
        answer:
          "Yes. Many clients choose to combine haircuts with beard grooming, hair spa, scalp treatments, or manicures and pedicures for a complete grooming experience.",
      },
      {
        id: "mh-3",
        question: "Do you offer ammonia-free hair and beard colouring?",
        answer:
          "Yes. We offer professional ammonia-free colour options that provide natural-looking results while being gentle on your hair and skin.",
      },
      {
        id: "mh-4",
        question: "How often should I get a haircut or beard trim?",
        answer:
          "Most clients visit every three to six weeks, depending on their hairstyle, beard growth, and personal grooming preferences.",
      },
            {
        id: "mh-5",
        question: "Are your waxing services suitable for men?",
        answer:
          "Absolutely. Our waxing services are specifically designed to provide a clean, hygienic, and comfortable grooming experience for men.",
      },
       {
        id: "mh-6",
        question: "Which grooming service is right for me?",
        answer:
          "Our team will guide you during your consultation and recommend services based on your hair, beard, skin, lifestyle, and grooming goals.",
      },
    ],
    ctaTitle: "Your Best Look Starts Here",
    ctaDescription:
      "Looking sharp isn't reserved for special occasions—it's part of feeling confident every day. Whether you're after a fresh haircut, expert beard grooming, relaxing scalp care, or a complete grooming session, our experienced team is here to help you look polished, professional, and effortlessly well-groomed.",
    metaTitle:
      "Men's Grooming & Styling in Dubai | Haircuts, Beard Grooming & Hair Spa | VR Unisex Salon",
    metaDescription:
      "Experience premium men's grooming in Dubai at VR Unisex Salon. From precision haircuts and beard grooming to hair spa, scalp treatments, hair colouring, manicures, pedicures, and waxing, enjoy complete grooming services under one roof.",
  },
  {
    id: "5",
    slug: "hair-treatment",
    title: "Hair Treatments in Dubai",
    description: "Nourishing treatments for healthy, shiny hair.",
    startingPrice: 999,
    // tagline: "Hair Care",
    // heroBadge: "Repair, Smooth & Strengthen",
    // heroSubtitle: "Advanced Treatments for Smooth, Strong & Healthy Hair",
    longDescription:
      "Healthy, beautiful hair starts with the right treatment—not a one-size-fits-all solution. At VR Unisex Salon, we offer professional hair treatments designed to repair damage, control frizz, restore moisture, strengthen weakened hair, and improve overall hair health. Whether you're looking for smoother, shinier, straighter, or healthier hair, our experts will recommend the treatment that's best suited to your hair type and goals.",
    // highlights: [
    //   "Consultation before every treatment",
    //   "Premium treatment products",
    //   "Personalised to your hair type",
    //   "Safe for coloured & treated hair",
    // ],
    treatmentsSubtitle:
      "Not every hair concern needs the same solution. Explore our professional treatments to discover what works best for your hair.",
    treatments: [
      {
        id: "anti-frizz-treatment",
        category: "Treatment",
        name: "Keratin Treatment",
        // tagline: "For Hair That Refuses to Behave",
        description:
          "Perfect for reducing frizz, improving manageability, and leaving your hair smoother, shinier, and easier to style without sacrificing natural movement.",
      },
      {
        id: "keratin-treatment",
        category: "Treatment",
        name: "GK Keratin",
        // tagline: "Smooth Hair Without Losing Natural Movement",
        description:
          "An advanced smoothing treatment designed to repair dry, damaged hair while improving softness, shine, and overall manageability.",
      },
      {
        id: "hair-smoothening",
        category: "Treatment",
        name: "Brazilian Blowout",
        // tagline: "For a Naturally Straight, Polished Look",
        description:
          "A premium smoothing treatment that controls frizz, enhances shine, and leaves your hair naturally smooth without making it feel flat.",
      },
      {
        id: "hair-perming-curling",
        category: "Treatment",
        name: "Ola plex Hair Therapy",
        // tagline: "Permanent Curls That Actually Hold Shape",
        description:
          "Ideal for chemically treated or colour-damaged hair, Olaplex helps rebuild broken hair bonds, strengthening hair from within while reducing breakage.",
      },
      {
        id: "protein-hair-botox",
        category: "Treatment",
        name: "Hair Spa",
        // tagline: "Repair First. Style Later.",
        description:
          "Deep-conditioning therapy that replenishes moisture, restores softness, improves shine, and revitalises dry, tired-looking hair.",
      },
      {
        id: "hair-rebonding",
        category: "Treatment",
        name: "Scalp Treatment",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "Healthy hair starts with a healthy scalp. Our scalp treatments help remove build-up, rebalance the scalp, and create an ideal foundation for stronger hair growth.",
      },
      {
        id: "hair-rebonding",
        category: "Treatment",
        name: "Japanese Straightening",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "For clients seeking permanently straighter, sleek hair with long-lasting smoothness and reduced daily styling time.",
      },
      {
        id: "hair-rebonding",
        category: "Treatment",
        name: "Xtenso Smoothing",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "Achieve soft, naturally straight, and manageable hair while maintaining movement and reducing unwanted frizz.",
      },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Raju",
      role: "Founder & Beauty Expert",
      image: "/images/our-team/team2.webp",
      bio: [
        "Healthy hair begins with understanding what it truly needs. Raju takes a personalised approach to every consultation, carefully assessing your hair's condition before recommending the most suitable treatment.",
                "Whether your goal is smoother hair, stronger strands, deep repair, or improved scalp health, Raju combines professional expertise with premium treatment solutions to help you achieve healthier, more manageable hair that looks as good as it feels.",
      ],
      expertise: [
        "Keratin Treatments",
        "Hair Repair  ",
        "Hair Smoothing  ",
        "Olaplex Therapy  ",
        "Scalp Care  ",
        "Personalised Hair Consultations  ",
      ],
    },
    faqs: [
      {
        id: "ht-1",
        question: "Which hair treatment is best for me? ",
        answer: "That depends on your hair type, current condition, and desired results. We'll assess your hair during your consultation before recommending the most suitable treatment. ",
      },
      {
        id: "ht-2",
        question: "What's the difference between Keratin and Brazilian Blowout? ",
        answer:
          "Both treatments reduce frizz and improve manageability. During your consultation, we'll explain the differences and recommend the option that's best suited to your hair and lifestyle. ",
      },
      {
        id: "ht-3",
        question: "Can I colour my hair after a treatment? ",
        answer:
          "In many cases, yes. The ideal timing depends on the treatment you choose. Our team will guide you on the best sequence for optimal results. ",
      },
      {
        id: "ht-4",
        question: "Is Olaplex a hair treatment? ",
        answer:
          "Yes. Olaplex is a professional bond-building treatment designed to repair damaged hair and strengthen it from within, especially after colouring or chemical services. ",
      },
      {
        id: "ht-5",
        question: "How long do professional hair treatments last? ",
        answer:
          "The longevity varies depending on the treatment, your hair type, and your aftercare routine. We'll provide personalised maintenance advice to help you enjoy longer-lasting results. ",
      },
      {
        id: "ht-6",
        question: "How often should I get a hair treatment? ",
        answer:
          "This depends on your hair's condition and goals. Some treatments are recommended monthly, while others provide results that last several months. ",
      },
    ],
    ctaTitle: "Healthy Hair Starts Here ",
    ctaDescription:
      "Beautiful hair begins with healthy hair. Whether you're looking to repair damage, reduce frizz, restore moisture, or completely transform your hair's texture, our experienced team is here to recommend the right treatment and deliver results you'll love. ",
    metaTitle:
      "Hair Treatments in Dubai | Keratin, Olaplex, Hair Spa & Hair Repair | VR Unisex Salon ",
    metaDescription:
      "Discover professional hair treatments in Dubai at VR Unisex Salon. From Keratin, Brazilian Blowout, Olaplex, Hair Spa, Scalp Treatments, Xtenso, and Japanese Straightening to personalised hair repair solutions, achieve healthier, smoother, and more manageable hair.",
  },
  // {
  //   id: "6",
  //   slug: "hair-repair-therapy",
  //   title: "Hair Repair Therapy",
  //   description: "Restorative therapy for damaged, weak hair.",
  //   startingPrice: 1299,
  //   // tagline: "Repair & Scalp Care",
  //   // heroBadge: "Salon-Grade Repair",
  //   // heroSubtitle: "Restore Strength, Softness & Scalp Comfort",
  //   longDescription:
  //     "Our Hair Repair Therapy restores damaged hair and improves overall scalp comfort using advanced, salon-grade techniques. Whether your hair is affected by heat styling, chemical treatments, dryness or scalp concerns, our expert care helps bring back strength, softness and shine.",
  //   // highlights: [
  //   //   "Salon-grade repair techniques",
  //   //   "Scalp comfort, not just hair",
  //   //   "Consultation before every session",
  //   //   "Gentle on coloured hair",
  //   // ],
  //   treatmentsSubtitle:
  //     "Repair for the hair, relief for the scalp — pick what your hair needs most.",
  //   treatments: [
  //     {
  //       id: "olaplex-treatment",
  //       category: "Repair",
  //       name: "Olaplex Treatment",
  //       tagline: "Rebuild Hair Strength from Within",
  //       description:
  //         "Works on the internal structure of the hair to reduce damage caused by colouring, bleaching and heat styling. It improves strength, manageability and smoothness while keeping a natural look and feel.",
  //       featuresLabel: "Key benefits",
  //       features: [
  //         "Reduces damage from chemical treatments and heat styling",
  //         "Improves hair strength and manageability",
  //         "Maintains natural look and feel",
  //         "Restores smoothness and shine",
  //       ],
  //       bestForLabel: "Perfect for",
  //       bestFor: "Hair damaged by colouring, bleaching or frequent heat styling.",
  //     },
  //     {
  //       id: "anti-dandruff-treatment",
  //       category: "Repair",
  //       name: "Anti-Dandruff Treatment",
  //       tagline: "Professional Scalp Cleansing & Care",
  //       description:
  //         "A salon-grade treatment that cleanses the scalp and reduces visible flakes while maintaining moisture balance — keeping the scalp fresh and clean without leaving hair dry or heavy.",
  //       featuresLabel: "What it does",
  //       features: [
  //         "Cleanses scalp and reduces visible flakes",
  //         "Maintains moisture balance",
  //         "Keeps scalp fresh and clean",
  //         "Prevents dryness and heaviness",
  //       ],
  //       bestForLabel: "Recommended for",
  //       bestFor: "Flaky or itchy scalps that need a deep but balanced cleanse.",
  //     },
  //     {
  //       id: "dry-scalp-therapy",
  //       category: "Repair",
  //       name: "Dry Scalp Therapy",
  //       tagline: "Targeted Hydration for Scalp Comfort",
  //       description:
  //         "Provides targeted hydration and nourishment to improve scalp comfort and support healthier-looking hair. Designed for clients experiencing dryness from weather, lifestyle or styling habits.",
  //       featuresLabel: "Benefits include",
  //       features: [
  //         "Targeted hydration for a dry scalp",
  //         "Nourishes and improves scalp comfort",
  //         "Supports healthier-looking hair",
  //         "Addresses dryness from weather and styling",
  //       ],
  //       bestFor: "Scalp dryness caused by weather, lifestyle or styling habits.",
  //     },
  //   ],
  //   faqs: [
  //     {
  //       id: "hrt-1",
  //       question: "What does Olaplex actually do?",
  //       answer:
  //         "It works on the internal structure of the hair, repairing damage from colouring, bleaching and heat styling rather than just coating the surface.",
  //     },
  //     {
  //       id: "hrt-2",
  //       question: "Will an anti-dandruff treatment dry out my hair?",
  //       answer:
  //         "No — it cleanses the scalp and reduces flakes while maintaining moisture balance, so your hair doesn't end up dry or heavy.",
  //     },
  //     {
  //       id: "hrt-3",
  //       question: "How do I know if I need dry scalp therapy?",
  //       answer:
  //         "If your scalp feels dry or uncomfortable because of the weather, your lifestyle or your styling habits, this is the one to ask about.",
  //     },
  //     {
  //       id: "hrt-4",
  //       question: "Can I have repair therapy if my hair is coloured?",
  //       answer:
  //         "Yes — Olaplex in particular is designed to reduce damage from colouring and bleaching. Mention your colour history during the consultation.",
  //     },
  //   ],
  // },
  {
    id: "7",
    slug: "nail-extensions",
    title: "Nail Extensions in Dubai",
    description: "Durable, salon-perfect nail extensions and art.",
    startingPrice: 799,
    // tagline: "Nail Artistry",
    // heroBadge: "Shaped, Sculpted & Designed",
    // heroSubtitle: "Luxury Nail Extensions Designed to Elevate Your Style",
    longDescription:
      "Your nails are an extension of your personality. Whether you prefer timeless elegance, bold statement nails, or trendy seasonal designs, professionally crafted nail extensions instantly elevate your overall look. At VR Unisex Salon, we specialise in creating beautiful, durable, and customised nail extensions using premium products and expert techniques. From natural-looking enhancements to artistic nail designs, our beauty specialists help you achieve nails that are as unique as you are.",
    // highlights: [
    //   "Certified nail technicians",
    //   "Sanitized tools for every client",
    //   "High-quality products",
    //   "Personalised consultation",
    // ],
    treatmentsSubtitle:
      "From classic elegance to bold fashion statements, we offer a variety of nail extension techniques and finishes to suit every occasion and personal preference.",
    treatments: [
      {
        id: "acrylic-nail-extensions",
        category: "Nails",
        name: "Acrylic Nail Extensions",
        // tagline: "Strong, Durable & Flawlessly Shaped",
        description:
          "Strong, durable, and versatile, acrylic extensions are ideal for clients looking for long-lasting nails with endless styling possibilities.",
          featuresLabel: "Available Services",
        features: [
          "Acrylic Full Set  ",
          "Acrylic Refills  ",
          "Natural Finish  ",
          "French Finish  ",
          "Ombre Finish  ",
        ],
      },
      {
        id: "gel-nail-extensions",
        category: "Nails",
        name: "Brisa Gel Extensions",
        // tagline: "Lightweight & Naturally Glossy",
        description:
          "Brisa Gel extensions provide a lightweight, natural-looking finish with exceptional flexibility and a beautiful glossy appearance.",
        featuresLabel: "Available Services ",
        features: [
          "Brisa Gel Full Set  ",
          "Brisa Gel Refills  ",
          "Natural Finish  ",
          "French Finish  ",
          "Ombre Finish  ",
        ],
      },
      {
        id: "nail-refilling",
        category: "Nails",
        name: "Press-On Nails ",
        // tagline: "Maintain Beauty & Longevity",
        description:
          "Perfect for special occasions or clients looking for temporary glamour, our premium press-on nails offer a stylish and convenient solution.",
      },
      {
        id: "nail-removal",
        category: "Nails",
        name: "Nail Art & Custom Designs",
        // tagline: "Safe & Gentle Removal",
        description:
          "Your nail extensions become truly unique with customised nail art. Whether you love subtle elegance or eye-catching creativity, our nail artists transform every set into a personalised work of art. ",
        featuresLabel: "Popular Nail Art Options ",
        features: [
          "Minimal Nail Art  ",
          "Premium Artistic Designs  ",
          "Nail Art with Stones  ",
          "Seasonal & Festive Designs  ",
          "Custom Colour Combinations  ",
        ],
      },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Priyanka",
      role: "Senior Beauty Therapist",
      image: "/images/our-team/team3.webp",
      bio: [
        "For Priyanka, creating beautiful nails is where technical precision meets artistic creativity. She carefully understands each client's style before recommending the ideal extension technique, nail shape, and finish.",
        "Whether you're looking for elegant everyday nails or a glamorous design for a special occasion, Priyanka ensures every set is beautifully crafted, comfortable to wear, and tailored to your personality.",
      ],
      expertise: [
        "Acrylic Nail Extensions  ",
        "Brisa Gel Extensions  ",
        "Nail Refills  ",
        "French & Ombre Extensions  ",
        "Nail Art  ",
        "Custom Nail Designs  ",
      ],
    },
    faqs: [
      {
        id: "ne-1",
        question: "How long do nail extensions last? ",
        answer:
          "Most nail extensions last between two and four weeks before a refill is recommended, depending on your lifestyle and nail growth. ",
      },
      {
        id: "ne-2",
        question: "What's the difference between Acrylic and Brisa Gel extensions? ",
        answer:
          "Acrylic extensions offer maximum strength and durability, while Brisa Gel extensions provide a lighter, more flexible, and natural-looking finish. ",
      },
      {
        id: "ne-3",
        question: "How often should I schedule a refill? ",
        answer:
          "We generally recommend a refill every two to three weeks to maintain the appearance and strength of your extensions. ",
      },
      {
        id: "ne-4",
        question: "Can I customise my nail design? ",
        answer:
          "Absolutely. You can choose from French finishes, ombré styles, minimalist nail art, premium artistic designs, stone embellishments, and custom colour combinations. ",
      },
      {
        id: "ne-5",
        question: "Will nail extensions damage my natural nails? ",
        answer:
          "When professionally applied, maintained, and removed, nail extensions can be worn safely. Our specialists follow proper techniques to help maintain the health of your natural nails.",
      },
      {
        id: "ne-6",
        question: "Can I get nail art with any extension? ",
        answer:
          "Yes. Nail art can be added to both Acrylic and Brisa Gel extensions, allowing you to create a look that's completely unique to you. ",
      },
    ],
    ctaTitle: "Create Nails That Reflect Your Style ",
    ctaDescription:
      "Whether you're dreaming of elegant French nails, trendy ombré designs, artistic nail creations, or beautifully natural extensions, our experienced beauty specialists are here to bring your vision to life with premium craftsmanship and personalised care. ",
    metaTitle:
      "Nail Extensions in Dubai | Acrylic, Brisa Gel & Nail Art | VR Unisex Salon ",
    metaDescription:
      "Get beautiful nail extensions in Dubai at VR Unisex Salon. Choose from Acrylic and Brisa Gel extensions, French and ombré finishes, custom nail art, stone embellishments, and professional refills for stunning, long-lasting results. ",
  },
  {
    id: "8",
    slug: "hair-color",
    title: "Professional Hair Colour in Dubai ",
    description: "Global and highlight coloring with premium brands.",
    startingPrice: 1499,
    // tagline: "Colour & Highlights",
    // heroBadge: "Precision, Protection & Premium Results",
    // heroSubtitle: "More Than a Shade Change — a Personalised Transformation",
    longDescription:
      "Your hair colour should do more than change your appearance it should reflect your personality, complement your features, and make you feel confident every time you look in the mirror. Whether you're refreshing your current shade, covering greys, or embracing a bold new transformation, every colour service at VR Unisex Salon begins with understanding your vision. Using advanced colouring techniques and internationally trusted salon products, we create beautiful, healthy-looking colour that's tailored exclusively to you.",
    // highlights: [
    //   "Consultation before every colour",
    //   "Premium colour products",
    //   "Matched to your skin tone",
    //   "Colour for women & men",
    // ],
    treatmentsSubtitle:
      "Whether you're looking for a subtle enhancement or a complete colour makeover, our personalised colour services are designed to suit every hair type, style, and occasion.",
    treatments: [
      {
        id: "global-hair-color",
        category: "For Women",
        name: "Global Hair Colour",
        description:
          "Achieve rich, even colour from roots to ends with customised shades that complement your skin tone and personal style. ",
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
        name: "Root Touch-Up ",
        description:
          "Keep your colour looking fresh with seamless root coverage that blends naturally with your existing shade.",
        },
      {
        id: "lowlights",
        category: "For Women",
        name: "Highlights ",
        description:
          "Add dimension, brightness, and movement with professionally placed highlights that create a naturally radiant finish. ",
      },
      {
        id: "balayage",
        category: "For Women",
        name: "Balayage",
        description:
          "Enjoy soft, hand-painted colour transitions that create a modern, effortless, sun-kissed look with minimal maintenance. ",
        },
      {
        id: "ombre-hair-color",
        category: "For Women",
        name: "Ombre",
        description:
          "Create a striking yet elegant colour gradient that blends darker roots into lighter ends for a contemporary finish. ",
      },
      {
        id: "fashion-hair-color",
        category: "For Women",
        name: "Fashion Hair Colours",
        description:
          "Express your individuality with creative shades including silver, ash, grey, and other fashion-inspired colour transformations. ",
      },
      {
        id: "grey-coverage",
        category: "For Women",
        name: "Grey Coverage ",
        description:
          "Restore youthful, natural-looking colour with personalised grey coverage that blends beautifully while maintaining a soft, authentic appearance.",
        },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Raju",
      role: "Founder & Beauty Expert ",
      image: "/images/our-team/team2.webp",
      bio: [
        "Raju believes exceptional hair colour begins with understanding the individual—not simply choosing a shade. Every consultation focuses on your skin tone, hair condition, lifestyle, and personal preferences before recommending colours and techniques that truly complement you. ",
        "Whether you're looking for a subtle refresh, elegant highlights, seamless grey coverage, or a complete colour transformation, Raju combines technical expertise with a personalised approach to create colour that feels naturally yours while maintaining the health and beauty of your hair. ",
      ],
      expertise: [
        "Global Hair Colour  ",
        "Root Touch-Ups  ",
        "Balayage & Highlights  ",
        "Fashion Hair Colours  ",
        "Grey Coverage  ",
        "Personalised Colour Consultations  ",
      ],
    },
    faqs: [
      {
        id: "hc-1",
        question: "Which hair colour is right for me? ",
        answer:
          "Every appointment begins with a personalised consultation where we recommend shades and colouring techniques based on your skin tone, hair type, lifestyle, and desired look. ",
      },
      {
        id: "hc-2",
        question: "Do you offer ammonia-free hair colour? ",
        answer:
          "Yes. We offer professional ammonia-free colour options that provide excellent coverage while being gentler on the hair and scalp.  ",
      },
      {
        id: "hc-3",
        question: "What's the difference between balayage and highlights? ",
        answer:
          "Highlights create defined sections of lighter hair using foils, while balayage is a hand-painted technique that creates a softer, more natural-looking transition. ",
      },
      {
        id: "hc-4",
        question: "Can I colour previously treated or damaged hair? ",
        answer:
          "In many cases, yes. We'll assess your hair's condition during your consultation and recommend the safest approach to achieve your desired results. ",
      },
      {
        id: "hc-5",
        question: "How long does a hair colouring appointment take? ",
        answer:
          "The duration depends on the service you choose. Root touch-ups generally take less time, while balayage, highlights, or complete colour transformations may require a longer appointment. ",
      },
      {
        id: "hc-6",
        question: "How can I maintain my hair colour for longer? ",
        answer:
          "Using salon-recommended products, protecting your hair from excessive heat, and following our aftercare guidance will help keep your colour vibrant between appointments. ",
      },
    ],
    
    ctaTitle: "Your Perfect Hair Colour Starts with a Conversation ",
    ctaDescription:
      "The best colour transformations begin with understanding your vision. Whether you're refreshing your signature shade or trying something completely new, our experienced team is here to create personalised hair colour that enhances your confidence while keeping your hair healthy, vibrant, and beautiful. ",
    metaTitle:
      "Professional Hair Colour in Dubai | Balayage, Highlights & Hair Colour | VR Unisex Salon ",
    metaDescription:
      "Looking for professional hair colour in Dubai? Visit VR Unisex Salon for global hair colour, balayage, highlights, root touch-ups, grey coverage, and ammonia-free colour services using premium salon brands for vibrant, healthy-looking results.  ",
  },
  {
    id: "9",
    slug: "waxing-threading",
    title: "Ladies Waxing, Threading & Bleach Services in Dubai ",
    description: "Smooth, gentle hair removal for face and body.",
    startingPrice: 199,
    // tagline: "Hair Removal",
    // heroBadge: "Gentle, Hygienic & Private",
    // heroSubtitle: "Smooth, Clean & Confident Skin — Done the Right Way",
    longDescription:
      "Feel confident with beautifully groomed, smooth, and radiant skin. At VR Unisex Salon, we offer professional waxing, threading, and bleach services exclusively for women, helping you maintain a polished appearance with comfort, hygiene, and personalised care. Whether it's your regular beauty routine or preparation for a special occasion, our experienced beauty specialists ensure every treatment is tailored to your skin and comfort. ",
    // highlights: [
    //   "Strict hygiene protocols",
    //   "Skin-friendly products",
    //   "Gentle on sensitive skin",
    //   "Calm, private setting",
    // ],
    treatmentsSubtitle:
      "Professional waxing removes unwanted hair from the root, leaving your skin smoother for longer while reducing the need for frequent shaving. ",
    treatments: [
      {
        id: "full-body-wax",
        category: "Waxing",
        name: "Facial Waxing ",
        description:
          "Gently removes unwanted facial hair while helping your skin feel smooth and refreshed. ",
      },
      {
        id: "half-leg-wax",
        category: "Waxing",
        name: "Arm Waxing ",
        description:
          "Professional waxing for beautifully smooth arms with longer-lasting results. ",
      },
      {
        id: "full-leg-wax",
        category: "Waxing",
        name: "Underarm Waxing ",
        description:
          "Enjoy cleaner, smoother underarms with professional hair removal that's quick, hygienic, and effective. ",
      },
      {
        id: "half-arm-wax",
        category: "Waxing",
        name: "Leg Waxing ",
        description:
          "Choose full leg waxing for beautifully smooth skin that's ready for every occasion. ",
      },
      {
        id: "full-arm-wax",
        category: "Waxing",
        name: "Back & Stomach Waxing ",
        description:
          "Professional waxing for women looking for clean, smooth skin across larger body areas. ",
      },
      {
        id: "underarm-wax",
        category: "Waxing",
        name: "Full Body Waxing ",
        description:
          "A complete hair removal solution for women who want beautifully smooth skin from head to toe. ",
      },
      {
        id: "eyebrow-threading",
        category: "Threading",
        name: "Ladies Threading Services ",
        description:
          "Threading is one of the most precise methods of facial hair removal, making it ideal for shaping eyebrows and removing fine facial hair while being gentle on sensitive skin. ",
      },
      {
        id: "upper-lip-threading",
        category: "Threading",
        name: "Ladies Bleach Services ",
        description:
          "Bleach treatments help reduce the visibility of facial and body hair while creating a brighter, more even complexion without removing the hair. ",
      },
      {
        id: "forehead-threading",
        category: "Threading",
        name: "Body Bleach ",
        description:
          "Perfect for women looking for a brighter, more even appearance across different body areas. ",
      },
    ],
    
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Priyanka",
      role: "Senior Beauty Therapist",
      image: "/images/our-team/team3.webp",
      bio: [
        "Priyanka believes every woman deserves beauty treatments that are both comfortable and effective. She carefully understands your skin type, sensitivity, and personal preferences before recommending the most suitable waxing, threading, or bleach treatment. ",
        "Her gentle approach, attention to detail, and commitment to hygiene ensure every appointment leaves you feeling refreshed, confident, and beautifully groomed. ",
      ],
      expertise: [
        "Ladies Waxing  ",
        "Ladies Threading  ",
        "Eyebrow Shaping  ",
        "Facial Hair Removal  ",
        "Ladies Bleach Services  ",
        "Personalised Beauty Consultations  ",
      ],
    },
    faqs: [
      {
        id: "wt-1",
        question: "Is threading better than waxing for facial hair? ",
        answer:
          "Threading offers exceptional precision and is ideal for eyebrow shaping and delicate facial areas, while waxing is often preferred for larger body areas. ",
      },
      {
        id: "wt-2",
        question: "How long do waxing results last? ",
        answer:
          "Most women enjoy smooth skin for approximately 3–4 weeks, depending on individual hair growth. ",
      },
      {
        id: "wt-3",
        question: "Does bleach remove hair? ",
        answer:
          "No. Bleach lightens the colour of facial and body hair, making it less visible while maintaining a natural appearance. ",
      },
      {
        id: "wt-4",
        question: "Is waxing suitable for sensitive skin? ",
        answer:
          "Our beauty specialists assess your skin before treatment and use professional techniques to make the experience as comfortable as possible. ",
      },
      {
        id: "wt-5",
        question: "Which treatment is best for eyebrow shaping? ",
        answer:
          "Eyebrow threading provides the cleanest, most precise shaping while maintaining a natural look. ",
      },
      {
        id: "wt-6",
        question: "Can I combine waxing, threading, and bleach in one appointment? ",
        answer:
          "Yes. Many of our clients combine multiple beauty services in a single visit for a complete grooming experience. ",
      },
    ],
    ctaTitle: "Beautifully Groomed Skin Starts Here ",
    ctaDescription:
      "Whether you're maintaining your regular beauty routine or preparing for a special occasion, our experienced beauty specialists are here to help you achieve beautifully smooth skin and a polished, confident look with professional ladies waxing, threading, and bleach services. ",
    metaTitle:
      "Ladies Waxing, Threading & Bleach Services in Dubai | VR Unisex Salon ",
    metaDescription:
      "Discover professional ladies waxing, threading, and bleach services in Dubai at VR Unisex Salon. Enjoy eyebrow threading, full body waxing, facial and body bleach treatments, and personalised beauty care in a hygienic, comfortable salon environment. ",
  },
  {
    id: "10",
    slug: "couple-services",
    title: "Couple Spa & Salon Experience in Dubai ",
    description: "Pamper sessions designed for two.",
    startingPrice: 1999,
    // tagline: "For Two",
    // heroBadge: "Shared Self-Care",
    // heroSubtitle: "Relax. Reconnect. Refresh — Together.",
    longDescription:
      "Because the best moments are even more special when shared. Whether you're celebrating a birthday, anniversary, honeymoon, or simply spending quality time together, our Couple Services are designed to help you relax, refresh, and reconnect in a calm and luxurious salon environment. Enjoy personalised beauty and wellness treatments side by side while our experienced team takes care of every detail, creating an experience that's as memorable as it is relaxing.",
    // journeyIntro: {
    //   title: "Couple Experiences We Offer",
    //   description:
    //     "Every couple is different, which is why our experiences can be customised according to your preferences. Whether you're looking for complete relaxation or a beauty makeover together, we'll help create an experience that's right for both of you.",
    // },
    benefits: [
      {
        icon: "Gem",
        title: "Hair Care Together ",
        description: "Refresh your look together with personalised hair services including haircuts, hair treatments, hair spa experiences, and professional styling. ",
      },
      {
        icon: "Hand",
        title: "Relaxing Head Spa Experience ",
        description: "Enjoy one of our signature Korean Head Spa treatments side by side while experiencing deep scalp care, therapeutic massage, and complete relaxation. ",
      },
      {
        icon: "ShieldCheck",
        title: "Beauty & Grooming ",
        description: "Couples can combine beauty and grooming services such as facials, hair care, nail care, and other personalised treatments during the same appointment. ",
      },
      {
        icon: "Clock",
        title: "Celebrate Special Moments ",
        description: "Planning a birthday surprise, anniversary, engagement, honeymoon, or pre-wedding pampering session? We'll help create a customised salon experience for your special occasion. ",
      },
    ],
    faqs: [
      {
        id: "cs-1",
        question: "Can we choose different treatments? ",
        answer:
          "Absolutely. Every guest can select treatments based on their own preferences while enjoying the experience together. ",
      },
      {
        id: "cs-2",
        question: "Do we need to book in advance? ",
        answer:
          "We highly recommend booking ahead, especially on weekends and during festive seasons, so we can prepare the best possible experience for both of you. ",
      },
      {
        id: "cs-3",
        question: "Can Couple Services be customised? ",
        answer:
          "Yes. We'll happily create a personalised package based on your preferred treatments and occasion. ",
      },
      {
        id: "cs-4",
        question: "Is this suitable for anniversaries and birthdays? ",
        answer:
          "Definitely. Many couples book our services to celebrate birthdays, anniversaries, engagements, and other memorable occasions.",
      },
      {
        id: "cs-5",
        question: "How long does the experience take?",
        answer:
          "The duration depends on the treatments you choose. During booking, we'll provide an estimated schedule for your visit. ",
      },
      {
        id: "cs-6",
        question: "Can we purchase this as a gift? ",
        answer:
          "Yes. Couple experiences make a thoughtful gift for anniversaries, birthdays, weddings, or simply to surprise someone special. ",
      },
    ],
        ctaTitle: "Relax. Refresh. Reconnect. ",
    ctaDescription:
      "Life gets busy, but spending meaningful time together should never be an afterthought. Whether you're celebrating a special milestone or simply treating yourselves to a well-deserved break, our Couple Services offer the perfect opportunity to relax, reconnect, and create lasting memories together. ",
    metaTitle:
      "Couple Spa & Salon Experience in Dubai | Premium Couple Beauty Services | VR Unisex Salon ",
    metaDescription:
      "Enjoy a relaxing couple spa and salon experience in Dubai at VR Unisex Salon. Celebrate anniversaries, birthdays, honeymoons, or simply unwind together with personalised beauty and wellness treatments in a luxurious setting. ",
  },
  {
    id: "11",
    slug: "eyelash-extensions",
    title: "Eyelash Extensions in Dubai ",
    description: "Natural to dramatic lash extensions, done right.",
    startingPrice: 899,
    // tagline: "Lash Artistry",
    // heroBadge: "Natural to Glam",
    // heroSubtitle: "Enhance Your Eyes with Professionally Crafted Lashes",
    longDescription:
      "Beautiful lashes have the power to transform your entire look. At VR Unisex Salon, our professional eyelash extension services are designed to enhance your natural beauty with lightweight, comfortable, and beautifully styled lashes. Whether you prefer a soft everyday look or fuller lashes for a glamorous occasion, our beauty specialists personalise every application to complement your unique features. ",
    // highlights: [
    //   "Certified lash artists",
    //   "Customised to your eye shape",
    //   "Lash health prioritised",
    //   "Strict hygiene protocols",
    // ],
    treatmentsSubtitle:
      "Whether you're looking for subtle elegance, glamorous volume, or temporary lashes for a special occasion, we offer eyelash extension services to suit every style. ",
    treatments: [
      {
        id: "classic-eyelash-extensions",
        category: "Lashes",
        name: "Classic Full Set Lashes ",
        description:
          "Classic lashes enhance your natural lashes by adding length and gentle fullness while maintaining an elegant, everyday appearance.",
        featuresLabel: "Perfect For ",
        features: ["First-time lash clients  ", "Natural enhancement  ", "Everyday beauty  ", "Office professionals  ",],
      },
      {
        id: "volume-eyelash-extensions",
        category: "Lashes",
        name: "Volume Full Set Lashes ",
        description:
          "Volume lashes create a fuller, fluffier appearance for clients who love beautifully defined eyes and a more glamorous finish. ",
        featuresLabel: "Perfect For ",
        features: [
          "Fuller lashes",
          "Evening events  ",
          "Weddings  ",
          "Glamorous everyday style  ",
        ],
        },
      {
        id: "hybrid-eyelash-extensions",
        category: "Lashes",
        name: "Lash Refills ",
        description:
          "Beautiful lashes require regular maintenance. Our refill services help replace naturally shed extensions, keeping your lashes looking full and perfectly balanced. ",
        featuresLabel: "Available Options ",
        features: [
          "Classic Lash Refill  ",
          "Volume Lash Refill  ",
        ],
      },
      {
        id: "eyelash-refill",
        category: "Lashes",
        name: "Weekly Lashes ",
        description:
          "Need stunning lashes for a wedding, celebration, holiday, or special event? Weekly lashes provide a temporary enhancement that's lightweight, comfortable, and easy to remove. ",
        },
      {
        id: "eyelash-removal",
        category: "Lashes",
        name: "Professional Eyelash Removal ",
        description:
          "When you're ready for a fresh start, our specialists safely remove existing lash extensions using professional techniques that help protect your natural lashes. ",
        },
    ],
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Priyanka",
      role: "Senior Beauty Therapist ",
      image: "/images/our-team/team3.webp",
      bio: [
        "Priyanka believes beautiful lashes should enhance your natural features rather than overpower them. Every appointment begins with understanding your eye shape, lifestyle, and personal preferences before recommending the most suitable lash style. ",
        "Using gentle application techniques and premium-quality lash products, she creates comfortable, elegant lash extensions that complement your individual beauty. ",
      ],
      expertise: [
        "Classic Full Set Lashes  ",
        "Volume Full Set Lashes  ",
        "Lash Refills  ",
        "Weekly Lashes  ",
        "Eyelash Removal  ",
        "Lash Styling Consultation  ",
      ],
    },
    faqs: [
      {
        id: "el-1",
        question: "How long do eyelash extensions last? ",
        answer:
          "Most eyelash extensions last between 3 and 5 weeks, depending on your natural lash growth cycle and how well you care for them. ",
      },
      {
        id: "el-2",
        question: "What's the difference between Classic and Volume lashes? ",
        answer:
          "Classic lashes create a natural, elegant enhancement, while Volume lashes provide a fuller, fluffier, and more dramatic appearance. ",
      },
      {
        id: "el-3",
        question: "How often should I book a lash refill? ",
        answer:
          "Most clients schedule refill appointments every 2 to 3 weeks to maintain a full, balanced look.",
      },
      {
        id: "el-4",
        question: "What are Weekly Lashes? ",
        answer:
          "Weekly lashes are temporary lash extensions designed for short-term wear, making them ideal for weddings, holidays, parties, and special occasions. ",
      },
      {
        id: "el-5",
        question: "Can you remove eyelash extensions applied at another salon? ",
        answer:
          "Yes. Our professional eyelash removal service safely removes existing extensions while helping protect your natural lashes. ",
      },
      {
        id: "el-6",
        question: "Will eyelash extensions damage my natural lashes? ",
        answer:
          "When professionally applied, maintained, and removed, eyelash extensions are safe and should not damage healthy natural lashes. ",
      },
    ],
            ctaTitle: "Let Your Eyes Do the Talking ",
    ctaDescription:
      "Whether you prefer subtle elegance or glamorous volume, our beauty specialists are here to create eyelash extensions that complement your natural beauty and leave you feeling confident every day. ",
    metaTitle:
      "Eyelash Extensions in Dubai | Classic & Volume Lashes | VR Unisex Salon ",
    metaDescription:
      "Enhance your natural beauty with professional eyelash extensions in Dubai at VR Unisex Salon. Choose from Classic Full Set, Volume Full Set, lash refills, weekly lashes, and professional eyelash removal for beautiful, long-lasting results. ",
  },
  {
    id: "12",
    slug: "makeup",
    title: "Professional Makeup Services in Dubai ",
    description: "Party, bridal and everyday makeup by experts.",
    startingPrice: 1499,
    // tagline: "Day & Evening",
    // heroBadge: "Precision, Balance & Elegance",
    // heroSubtitle: "Enhance Your Natural Beauty",
    longDescription:
      "Whether you're attending a party, celebrating your wedding, or preparing for a special occasion, the right makeup enhances your confidence and complements your personal style. At VR Unisex Salon, our professional makeup artists create elegant, natural, and glamorous looks tailored to your features, outfit, and occasion.  From subtle daytime makeup to luxurious bridal transformations, we ensure you look and feel your absolute best.",
    // highlights: [
    //   "Professional makeup artists",
    //   "Proper skin prep every time",
    //   "Premium-quality products",
    //   "Long-lasting, comfortable finish",
    // ],
    treatmentsSubtitle:
      "Every event calls for a different style. Explore our professional makeup services designed for every occasion. ",
    treatments: [
      {
        id: "day-makeup",
        category: "Makeup",
        name: "Day Light Expression Makeup ",
        description:
          "Perfect for daytime events, family gatherings, brunches, office functions, and casual celebrations. This look focuses on fresh, radiant skin with soft colours that enhance your natural beauty while maintaining an elegant appearance. ",
      },
      {
        id: "evening-party-makeup",
        category: "Makeup",
        name: "Evening Glam Makeup",
        description:
          "Create a sophisticated evening look with beautifully defined eyes, flawless skin, and elegant finishes designed for dinners, receptions, and evening celebrations. ",
      },
      {
        id: "hd-makeup",
        category: "Makeup",
        name: "Party Makeup ",
        description:
          "Whether you're attending a birthday, engagement, festive celebration, or special event, our party makeup helps you look glamorous while complementing your outfit and personal style. ",
      },
      {
        id: "airbrush-makeup",
        category: "Makeup",
        name: "Bridal Makeup (HD & Airbrush) ",
        description:
          "Your wedding day deserves nothing less than perfection. Our bridal makeup service includes personalised consultations to create a timeless bridal look that photographs beautifully and stays flawless throughout your special day.",
      },
      {
        id: "bridal-occasion-makeup",
        category: "Makeup",
        name: "Groom's Grooming Package ",
        description:
          "Our Groom Package combines Facial + Hair Spa to help you feel refreshed, confident, and camera-ready before your wedding celebrations. ",
      },
      {
        id: "bridal-occasion-makeup",
        category: "Makeup",
        name: "Couple Pre-Wedding Package ",
        description:
          "Prepare for your big day together. Our Couple Pre-Wedding Package includes Facial + Hair Spa for both partners, allowing you to relax, refresh, and enjoy quality time together before your wedding celebrations begin.",
      },
    ],
    
    expert: {
      title: "The Expert Behind Your Nail Care",
      name: "Priyanka",
      role: "Senior Beauty Therapist ",
      image: "/images/our-team/team3.webp",
      bio: [
        "Priyanka believes makeup should enhance your natural beauty rather than hide it. She works closely with every client to understand their style, occasion, and preferences before creating a personalised look that complements their personality. ",
        "Whether it's a subtle daytime glow or a glamorous bridal transformation, her attention to detail ensures every client leaves feeling confident and beautiful. ",
      ],
      expertise: [
        "Professional Makeup  ",
        "Bridal Makeup  ",
        "Party Makeup  ",
        "HD Makeup  ",
        "Airbrush Makeup  ",
        "Bridal Beauty Consultation  ",
      ],
    },
    faqs: [
      {
        id: "mk-1",
        question: "Which makeup service is suitable for weddings? ",
        answer:
          "Our HD and Airbrush Bridal Makeup services are specially designed for wedding ceremonies and long event hours. ",
      },
      {
        id: "mk-2",
        question: "What's the difference between HD and Airbrush makeup? ",
        answer:
          "HD Makeup provides a natural, flawless finish using professional products, while Airbrush Makeup uses spray technology for an ultra-light, long-lasting finish that's especially popular for weddings and photography. ",
      },
      {
        id: "mk-3",
        question: "How long does professional makeup last?",
        answer:
          "With proper preparation and professional products, your makeup can remain fresh throughout your event. ",
      },
      {
        id: "mk-4",
        question: "Should I book a bridal consultation before my wedding? ",
        answer:
          "Yes. We recommend scheduling a consultation to discuss your preferred look, outfit, and skincare requirements. ",
      },
      {
        id: "mk-5",
        question: "Can I book makeup along with hairstyling? ",
        answer:
          "Absolutely. Our team can help create a complete look for your special occasion.",
      },
      {
        id: "mk-6",
        question: "How early should I book my bridal makeup? ",
        answer:
          "We recommend booking several weeks in advance, especially during peak wedding seasons, to secure your preferred date and time. ",
      },
    ],
    ctaTitle: "Look Beautiful. Feel Confident. ",
    ctaDescription:
      "Whether it's your wedding day, an elegant evening event, or a memorable celebration, our professional makeup artists are here to create a look that reflects your personality and enhances your confidence. ",
    metaTitle:
      "Professional Makeup Services in Dubai | Bridal, Party & HD Makeup | VR Unisex Salon ",
    metaDescription:
      "Discover professional makeup services in Dubai at VR Unisex Salon. From bridal HD and airbrush makeup to party and evening glam looks, our expert makeup artists create flawless, long-lasting transformations for every special occasion. ",
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
    features: ["Summer offer to control a freeziness and damage hair with healthy hair", "Keratin", "Anti frizz treatment", "Protein", "Botox", "Smoothening", "straightening", "nanoplastria", "Any length any volume"],
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
