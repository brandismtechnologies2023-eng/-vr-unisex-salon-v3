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
    slug: "manicure-pedicure-in-dubai",
    title: "Manicure & Pedicure in Dubai",
    shortTitle: "Manicure & Pedicure",
    description: "Relaxing hand and foot care with premium products.",
    startingPrice: 499,
    image: "/images/services/manicure-pedicure.webp",
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
    reviews: [
      {
        id: "mp-r1",
        name: "Archana Rengasayee",
        rating: 5,
        service: "Salon Services",
        review:
          "VR Salon is located very near Exit 4, Burjuman, and has some of the finest services in Mankhool and around. I highly recommend this salon if you're keen to refresh your hair colour and styling, or simply want to give your hair some good pampering. Raju and Vishal's team have talented people for almost all salon services — from the highly recommended Korean hair spa and frizz-free hair treatments to hair colouring and regular services like mani-pedi and waxing. I've always felt Raju is one of the best hair stylists around, and I'm happy to say it again. Visit VR Salon soon for the real transformation you're yearning for.",
        source: "google",
      },
      {
        id: "mp-r2",
        name: "Vetri Velan",
        rating: 5,
        service: "Manicure & Pedicure",
        review:
          "Huge love to the VR Salon team! My manicure & pedicure came out absolutely stunning — clean, elegant, and so well done, thank you Ms. Jaja and Ms. Priyanka. The whole vibe was relaxing and the team was super professional. 10/10 recommend! Will be back soon.",
        source: "google",
      },
    ],
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
    portfolio: {
      title: "Beautifully Cared-For Hands & Feet",
      description:
        "Every manicure and pedicure reflects our commitment to healthy nail care, precision, and attention to detail. Explore real client results showcasing beautifully maintained hands and feet, elegant finishes, and relaxing salon experiences.",
    },
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
    slug: "korean-head-spa-in-dubai",
    title: "Korean Head Spa",
    shortTitle: "Korean Head Spa",
    description: "Deep scalp cleansing and relaxation therapy.",
    startingPrice: 899,
    image: "/images/services/korean-head-spa.webp",
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
    whyChooseUs: {
      title: "Why Choose VR Salon for Korean Head Spa",
      subtitle:
        "At VR Unisex Salon, we believe scalp care is the foundation of beautiful hair. Our Korean Head Spa combines professional techniques, premium haircare products, and a calming spa environment to deliver an experience that benefits both your hair and your wellbeing.",
      items: [
        {
          icon: "Leaf",
          title: "Authentic Korean-Inspired Care",
          description:
            "Inspired by Korean scalp wellness rituals that focus on cleansing, hydration, nourishment, and relaxation.",
        },
        {
          icon: "ClipboardList",
          title: "Personalised Scalp Analysis",
          description:
            "Every treatment begins with understanding your scalp condition so we can recommend the most suitable care.",
        },
        {
          icon: "Hand",
          title: "Relaxing Head Massage",
          description:
            "Gentle massage techniques help improve circulation while relieving stress and tension.",
        },
        {
          icon: "ShieldCheck",
          title: "Professional Haircare Products",
          description: "We use salon-grade products selected according to your scalp and hair needs.",
        },
        {
          icon: "Gem",
          title: "Luxury Wellness Experience",
          description: "More than a salon service, it's dedicated time to relax, recharge, and care for yourself.",
        },
      ],
    },
    benefitsTitle: "Why Your Scalp Deserves Professional Care",
    benefitsSubtitle:
      "Healthy hair doesn't start with styling—it starts with a healthy scalp. Regular scalp care helps maintain the natural balance of your scalp while improving the condition and appearance of your hair.",
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
      {
        icon: "ShieldCheck",
        title: "Supports Your Haircare Routine",
        description: "A healthier scalp allows your everyday products to perform more effectively.",
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
    reviews: [
      {
        id: "khs-r1",
        name: "Archana Rengasayee",
        rating: 5,
        service: "Korean Head Spa",
        review:
          "VR Salon is located very near Exit 4, Burjuman, and has some of the finest services in Mankhool and around. I highly recommend this salon if you're keen to refresh your hair colour and styling, or simply want to give your hair some good pampering. Raju and Vishal's team have talented people for almost all salon services — from the highly recommended Korean hair spa and frizz-free hair treatments to hair colouring and regular services like mani-pedi and waxing. I've always felt Raju is one of the best hair stylists around, and I'm happy to say it again. Visit VR Salon soon for the real transformation you're yearning for.",
        source: "google",
      },
      {
        id: "khs-r2",
        name: "Vidhi Mehta",
        rating: 5,
        service: "Korean Head Spa",
        review:
          "I had the most amazing experience with Priyanka at VR Salon! She did my hair spa, and honestly, it was one of the best I've ever had. From start to finish, she was so gentle, professional, and attentive. The hair spa itself was super relaxing — my hair feels soft, smooth, and full of life now. But what really made it special was the extra care Priyanka put in: her head massage was heavenly, and she even gave a relaxing back and hand massage that made the whole experience feel like a mini spa day. If you're planning a pamper session, I'd highly recommend booking with Priyanka — she truly has magic hands! 💆‍♀️✨",
        source: "google",
      },
    ],
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
        brandsTrust: {
      title: "Premium Haircare Products We Trust",
      description:
        "Exceptional treatments deserve exceptional products. During your Korean Head Spa, we use carefully selected salon-grade brands trusted by professional stylists worldwide. Every product is chosen based on your scalp condition, hair texture, and treatment goals.",
      brands: [
        { name: "Olaplex", logo: "/images/products-uses/olaplex.webp", description: "Strengthens weakened hair while improving softness, shine, and resilience." },
        { name: "GK Hair", logo: "/images/products-uses/gk-hair-professional.webp", description: "Helps restore moisture, smoothness, and manageability." },
        { name: "Brazilian Blowout", logo: "/images/products-uses/brazilian-blowout.webp", description: "Professional nourishing formulas that leave hair silky, smooth, and healthy-looking." },
        { name: "L'Oréal Professionnel", logo: "/images/products-uses/loreal-professionnel.webp", description: "Advanced professional haircare for a wide variety of scalp and hair concerns." },
        { name: "Matrix", logo: "/images/products-uses/matrix.webp", description: "Trusted salon-quality products for cleansing, hydration, and nourishment." },
        { name: "Goldwell", logo: "/images/products-uses/goldwell.webp", description: "Professional formulas that enhance hair condition and overall scalp health." },
      ],
      note: "Products used during your treatment may vary depending on your hair and scalp assessment.",
    },
    idealFor: {
      title: "Is a Korean Head Spa Right for You?",
      description: "This treatment is ideal if you:",
      items: [
        "Have an oily scalp",
        "Experience dryness or itchiness",
        "Regularly use styling products",
        "Colour or chemically treat your hair",
        "Spend long hours in Dubai's climate",
        "Want healthier-looking hair",
        "Need a relaxing self-care experience",
        "Simply love premium wellness treatments",
      ],
    },
    portfolio: {
      title: "Our Recent Korean Head Spa Experiences",
      description:
        "Discover why our Korean Head Spa has become one of VR Unisex Salon's most loved signature treatments. Explore real client experiences, treatment videos, and beautiful hair transformations shared by our team.",
    },
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
    slug: "womens-haircut-in-dubai",
    title: "Women's Haircut in Dubai",
    shortTitle: "Women's Haircut",
    description: "Precision cuts styled to suit your face and lifestyle.",
    startingPrice: 399,
    image: "/images/services/women-haircut.webp",
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
    benefitsTitle: "Why Choose VR Salon for Your Women's Haircut",
    benefitsSubtitle:
      "The perfect haircut isn't about following trends—it's about creating a style that works beautifully for you. Every appointment at VR Unisex Salon is personalized to ensure your haircut complements your individuality while remaining easy to maintain long after you leave the salon.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalized Consultation",
        description:
          "Every haircut begins with understanding your face shape, hair texture, lifestyle, and personal style before recommending a look that enhances your natural beauty.",
      },
      {
        icon: "Scissors",
        title: "Precision Styling",
        description:
          "Our experienced stylists focus on balance, movement, and attention to detail, creating haircuts that look beautiful from every angle and grow out gracefully.",
      },
      {
        icon: "Gem",
        title: "International Expertise",
        description:
          "Inspired by global salon techniques and modern beauty trends, we create hairstyles that are stylish, timeless, and tailored to your personality.",
      },
      {
        icon: "HeartPulse",
        title: "Healthy Hair First",
        description:
          "Beautiful hair starts with healthy hair. Every haircut is designed to preserve your hair's natural strength while improving movement and manageability.",
      },
      {
        icon: "Sparkles",
        title: "Designed for Everyday Life",
        description:
          "Whether you prefer effortless styling or enjoy experimenting with different looks, your haircut is created to suit your daily routine and lifestyle.",
      },
    ],
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
        id: "long-hair-shaping",
        category: "Haircut",
        name: "Long Hair Shaping",
        // tagline: "Polished, Salon-Perfect Finish",
        description:
          "Maintain your length while improving structure, movement, and the overall health of your hair.",
      },
      {
        id: "fringe-face-framing-styles",
        category: "Haircut",
        name: "Fringe & Face-Framing Styles",
        // tagline: "Polished, Salon-Perfect Finish",
        description:
          "Refresh your appearance with thoughtfully designed fringes and face-framing layers that highlight your best features.",
      },
      {
        id: "hair-restyling-complete-makeovers",
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
    highlightGroup: {
      title: "Complete Your Hair Experience",
      description:
        "A beautiful haircut is only the beginning. Complete your salon visit with professional styling and haircare services that help your hair look polished, healthy, and ready for any occasion.",
      items: [
        {
          title: "Hair Wash & Blow Dry",
          description:
            "Enjoy a refreshing hair wash followed by a professional blow dry that leaves your hair soft, smooth, and beautifully finished.",
        },
        {
          title: "Hair Styling",
          description:
            "Whether it's a party, celebration, business event, or special occasion, our styling services help you achieve a polished and elegant look that complements your haircut.",
        },
        {
          title: "Blow Dry Styling",
          description:
            "From sleek finishes to soft waves and glamorous volume, our professional blow-dry styling creates salon-perfect hair with lasting results.",
        },
        {
          title: "Hair Ironing",
          description:
            "Achieve silky straight hair or beautifully defined curls using professional styling techniques that deliver a smooth, polished finish while protecting your hair.",
        },
        {
          title: "Hair Spa",
          description:
            "Deep-conditioning treatments designed to nourish your hair, restore moisture, reduce frizz, and improve overall hair health and shine.",
        },
      ],
    },
    portfolio: {
      title: "Beautiful Hair, Beautiful Stories",
      description:
        "Every haircut tells a different story. Explore real transformations created for our clients—from timeless everyday styles to complete makeovers—each designed to celebrate individual beauty and confidence.",
    },
    reviews: [
      {
        id: "wh-r1",
        name: "Sumayya Tafeez",
        rating: 5,
        service: "Women's Haircut",
        review:
          "I had an amazing experience at the salon on my first visit. The staff was incredibly welcoming, friendly, and professional. A special mention to Mr. Raju for the excellent haircut service — he did an amazing job! Overall, it was a wonderful experience with such warm and friendly staff. Highly recommended!",
        source: "google",
      },
      {
        id: "wh-r2",
        name: "Nivedya B.K.",
        rating: 5,
        service: "Haircut & Colour",
        review:
          "Vishal and Raju are truly among the most artistic and talented hairdressers in Dubai! I've been trusting them with my hair since 2018, and I can honestly say I trust them blindly. I've donated my hair twice with them, done hair colouring and various treatments — and not once has my hair been damaged (touch wood 😉). Vishal is incredibly patient, gentle, and caring; he treats your hair like silk, with so much attention to detail. Even after relocating to Europe, I still make it a point to travel all the way to Dubai just to get my hair done by them! Now that they've opened their own venture, you can get your hair done, enjoy manicures and pedicures, and truly pamper yourself. I've brought many friends here and every single one has loved it — this is absolutely my go-to place.",
        source: "google",
      },
    ],
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
    slug: "mens-grooming-and-styling-dubai",
    title: "Men's Grooming & Styling in Dubai",
    shortTitle: "Men's Grooming & Styling",
    description: "Sharp, modern cuts from experienced stylists.",
    startingPrice: 249,
    image: "/images/services/mens-haircut.webp",
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
    benefitsTitle: "Why Choose VR Salon for Men's Grooming",
    benefitsSubtitle:
      "Every man has a different grooming routine and personal style. At VR Unisex Salon, we take the time to understand your preferences before recommending services that help you look polished, confident, and effortlessly well-groomed.",
    benefits: [
      {
        icon: "Scissors",
        title: "Precision Grooming",
        description:
          "Every haircut, beard trim, and styling service is performed with attention to detail, ensuring a clean, sharp, and well-balanced finish.",
      },
      {
        icon: "ClipboardList",
        title: "Personalised Styling",
        description:
          "We recommend hairstyles and grooming solutions based on your face shape, hair type, beard growth, and lifestyle, helping you maintain a look that suits you best.",
      },
      {
        icon: "ShieldCheck",
        title: "Premium Products",
        description:
          "From professional haircare to ammonia-free colouring products, we use trusted salon brands that deliver excellent results while protecting your hair and skin.",
      },
      {
        icon: "HeartPulse",
        title: "Relaxing Experience",
        description:
          "Grooming should be enjoyable. Our welcoming salon environment and attentive service ensure every visit is both comfortable and refreshing.",
      },
      {
        icon: "Gem",
        title: "Complete Grooming Under One Roof",
        description:
          "From haircuts and beard care to scalp treatments, manicures, pedicures, and waxing, everything you need to maintain a polished appearance is available in one place.",
      },
    ],
    treatmentsTitle: "Complete Men's Grooming Under One Roof",
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
        id: "mens-waxing",
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
    reviews: [
      {
        id: "mg-r1",
        name: "Amey Dhure",
        rating: 5,
        service: "Haircut & Beard Trim",
        review:
          "This is a newly opened unisex salon near Burjuman. My haircut and beard were exactly as I expected — these guys know client expectations and just deliver. Thanks to Pramod for the best haircut. It was a great experience having my six-month-long hair trimmed off and getting a stunning look by Pramod — the entire staff was kind and friendly, took care of everything, and Pramod didn't miss a single detail with my hair and beard.",
        source: "google",
      },
      {
        id: "mg-r2",
        name: "Sanchit Dokhale",
        rating: 5,
        service: "Haircut & Beard",
        review:
          "Amazing experience! I had a haircut and beard done, and now I'm looking like Virat Kohli 😀 Thanks to all.",
        source: "google",
      },
      {
        id: "mg-r3",
        name: "Imthiaz Ahmed",
        rating: 5,
        service: "Family Grooming",
        review:
          "We had a wonderful experience at this salon! The team was professional, friendly, and made us feel welcome from the moment we walked in. I got a haircut and beard trim, both done with great attention to detail. My daughter's haircut turned out exactly as we wanted, and the stylist was patient and gentle with her. My wife had her hair coloured, cut, and styled, and the results were absolutely beautiful — she couldn't be happier! The salon was clean, comfortable, and the service was outstanding. We'll definitely be coming back!",
        source: "google",
      },
    ],
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
    portfolio: {
      title: "Confidence in Every Look",
      description:
        "Every grooming session is tailored to the individual. Explore real client transformations showcasing precision haircuts, beard grooming, professional styling, and complete grooming experiences created to help men look and feel their best.",
    },
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
    slug: "hair-treatments-in-dubai",
    title: "Hair Treatments in Dubai",
    shortTitle: "Hair Treatments",
    description: "Nourishing treatments for healthy, shiny hair.",
    startingPrice: 999,
    image: "/images/services/hair-treatment.webp",
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
    benefitsTitle: "Why Choose VR Salon for Hair Treatments",
    benefitsSubtitle:
      "Every head of hair is different, which is why every treatment begins with understanding your hair's unique condition. Our personalized approach ensures you receive the right treatment for long-lasting, healthy-looking results.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalized Hair Assessment",
        description:
          "Before recommending any treatment, we carefully evaluate your hair texture, scalp condition, previous chemical treatments, and styling routine to create a personalized treatment plan.",
      },
      {
        icon: "Wind",
        title: "Professional Treatment Solutions",
        description:
          "From frizz control and deep nourishment to smoothing and repair, we offer a carefully selected range of professional treatments tailored to different hair concerns.",
      },
      {
        icon: "Gem",
        title: "Premium Salon Products",
        description:
          "We use internationally recognized salon brands and advanced formulations that deliver visible results while maintaining the health and integrity of your hair.",
      },
      {
        icon: "HeartPulse",
        title: "Healthy Hair First",
        description:
          "Our focus isn't simply making your hair look better for a day—it's about improving its condition so it stays healthier, stronger, and easier to manage over time.",
      },
      {
        icon: "ShieldCheck",
        title: "Experienced Professionals",
        description:
          "Our team combines technical expertise with personalized consultations to ensure every treatment delivers the best possible outcome for your hair.",
      },
    ],
    treatmentsTitle: "Find the Right Treatment for Your Hair",
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
        id: "scalp-treatment",
        category: "Treatment",
        name: "Scalp Treatment",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "Healthy hair starts with a healthy scalp. Our scalp treatments help remove build-up, rebalance the scalp, and create an ideal foundation for stronger hair growth.",
      },
      {
        id: "japanese-straightening",
        category: "Treatment",
        name: "Japanese Straightening",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "For clients seeking permanently straighter, sleek hair with long-lasting smoothness and reduced daily styling time.",
      },
      {
        id: "xtenso-smoothing",
        category: "Treatment",
        name: "Xtenso Smoothing",
        // tagline: "Permanent Straight Hair With a Sleek Finish",
        description:
          "Achieve soft, naturally straight, and manageable hair while maintaining movement and reducing unwanted frizz.",
      },
    ],
    secondaryTreatments: {
      title: "Explore Our Hair Extension Methods",
      subtitle:
        "Every client has different hair goals. Whether you're looking for temporary glamour, everyday volume, or long-lasting length, we'll recommend the extension technique that's best suited to your hair type and lifestyle.",
      columns: 2,
      items: [
        {
          id: "clip-in-hair-extensions",
          category: "Extensions",
          name: "Clip-in Hair Extensions",
          description:
            "Clip-in extensions offer an instant transformation without long-term commitment. They're perfect for clients who love changing their hairstyle for parties, weddings, photoshoots, vacations, or special occasions.",
          featuresLabel: "Ideal For",
          features: ["Temporary hair length", "Added hair volume", "Weddings & parties", "Easy application and removal"],
        },
        {
          id: "tape-hair-extensions",
          category: "Extensions",
          name: "Tape Hair Extensions",
          description:
            "Tape Hair Extensions are lightweight, discreet, and designed for comfortable everyday wear. They blend naturally with your existing hair while providing beautiful length and fullness.",
          featuresLabel: "Ideal For",
          features: ["Fine to medium hair", "Natural everyday volume", "Longer hairstyles", "Lightweight comfort"],
        },
        {
          id: "keratin-hair-extensions",
          category: "Extensions",
          name: "Keratin Hair Extensions",
          description:
            "Keratin Hair Extensions are one of the most popular premium extension methods, offering durable, natural-looking results with excellent movement and long-lasting performance.",
          featuresLabel: "Ideal For",
          features: ["Long-term hair enhancement", "Natural movement", "Fuller hairstyles", "Premium transformations"],
        },
        {
          id: "microlink-hair-extensions",
          category: "Extensions",
          name: "Microlink Hair Extensions",
          description:
            "Microlink Hair Extensions are applied without glue or heat, making them a flexible option for clients who want natural-looking extensions with easy maintenance.",
          featuresLabel: "Ideal For",
          features: ["Natural appearance", "Hair length & volume", "Flexible styling", "Reusable extension systems"],
        },
      ],
    },
    comparison: {
      title: "Which Hair Treatment Is Right for You?",
      description:
        "Choosing the right treatment depends on your hair's condition and your desired results. During your consultation, our experts will recommend the most suitable option for your needs.",
      goalLabel: "Your Hair Concern",
      recommendedLabel: "Recommended Treatment",
      rows: [
        { goal: "Frizzy & Unmanageable Hair", recommended: "Keratin Treatment or Brazilian Blowout" },
        { goal: "Dry & Dehydrated Hair", recommended: "Hair Spa" },
        { goal: "Chemically Damaged Hair", recommended: "Olaplex Hair Therapy" },
        { goal: "Coloured Hair", recommended: "Olaplex Hair Therapy" },
        { goal: "Oily or Unhealthy Scalp", recommended: "Scalp Treatment" },
        { goal: "Permanent Hair Straightening", recommended: "Japanese Straightening" },
        { goal: "Smooth, Naturally Straight Hair", recommended: "Xtenso Smoothing" },
      ],
    },
    brandsTrust: {
      title: "Professional Haircare Brands We Trust",
      description:
        "Great treatments require great products. That's why we use globally trusted professional brands known for delivering reliable, long-lasting results while protecting your hair.",
      brands: [
        { name: "Olaplex", logo: "/images/products-uses/olaplex.webp", description: "Strengthens weakened hair while improving softness, shine, and resilience." },
        { name: "GK Hair", logo: "/images/products-uses/gk-hair-professional.webp", description: "Helps restore moisture, smoothness, and manageability." },
        { name: "L'Oréal Professionnel", logo: "/images/products-uses/loreal-professionnel.webp", description: "Advanced professional haircare for a wide variety of scalp and hair concerns." },
        { name: "Brazilian Blowout", logo: "/images/products-uses/brazilian-blowout.webp", description: "Professional nourishing formulas that leave hair silky, smooth, and healthy-looking." },
        { name: "Matrix", logo: "/images/products-uses/matrix.webp", description: "Trusted salon-quality products for cleansing, hydration, and nourishment." },
        { name: "Goldwell", logo: "/images/products-uses/goldwell.webp", description: "Professional formulas that enhance hair condition and overall scalp health." },
      ],
    },
    highlightGroup: {
      title: "Why Clients Love Hair Extensions",
      description:
        "Professional hair extensions offer far more than additional length—they open up endless styling possibilities while boosting confidence and enhancing your overall appearance.",
      items: [
        {
          title: "Instant Hair Length",
          description: "Achieve long, flowing hair in just one appointment.",
        },
        {
          title: "Fuller, Thicker Hair",
          description: "Hair extensions add natural-looking body and volume, especially for fine or thin hair.",
        },
        {
          title: "Endless Styling Possibilities",
          description: "Enjoy beautiful braids, curls, ponytails, waves, and elegant updos with greater confidence.",
        },
        {
          title: "Confidence Boost",
          description: "Many clients choose extensions because fuller, healthier-looking hair helps them feel more confident every day.",
        },
        {
          title: "Natural Appearance",
          description: "Professionally applied extensions blend beautifully with your natural hair, creating seamless and elegant results.",
        },
      ],
    },
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
    careTips: {
      title: "Hair Extension Care Tips",
      description: "Proper aftercare helps your extensions remain beautiful while protecting your natural hair.",
      tips: [
        "Using salon-recommended haircare products",
        "Brushing gently using suitable extension brushes",
        "Avoiding excessive pulling or tension",
        "Following your stylist's maintenance schedule",
        "Returning for professional maintenance appointments",
      ],
      note: "Our specialists will provide personalised aftercare instructions before you leave the salon.",
    },
    reviews: [
      {
        id: "ht-r1",
        name: "Malar Kodi",
        rating: 5,
        service: "Keratin & Hair Colour",
        review:
          "I had a lovely experience at VR Salon near Burjuman Metro. I went for keratin treatment, highlights, and hair colouring, and I'm extremely happy with how my hair turned out. Big thanks to Vishal and Raju, who have 8+ years of experience and truly know what they're doing. The whole process was smooth and comfortable, and the salon has a clean, relaxing environment.",
        source: "google",
      },
      {
        id: "ht-r2",
        name: "Kajal Jod",
        rating: 5,
        service: "Nails & Keratin Treatment",
        review:
          "Best salon in Dubai — nice staff, nice work. I had my nails and a keratin treatment done, and it turned out with amazing results. Thank you VR Salon, highly recommended! 😀",
        source: "google",
      },
      {
        id: "ht-r3",
        name: "Tara Gahatraj",
        rating: 5,
        service: "Keratin, Nails & Lashes",
        review:
          "I visited VR Unisex Salon and the service was absolutely amazing. I got my keratin treatment, nail extensions, and eyelashes done, and all I can say is wow! The staff is professional, the atmosphere is lovely, and the results exceeded my expectations. Highly recommended for anyone looking to feel confident and pampered ✨💅✨",
        source: "google",
      },
    ],
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
    portfolio: {
      title: "Real Hair Transformations",
      description:
        "Every treatment delivers a different kind of transformation. Explore real client results showcasing healthier, shinier, smoother, and more manageable hair after personalised treatment plans at VR Unisex Salon.",
    },
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
    slug: "nail-extensions-in-dubai",
    title: "Nail Extensions in Dubai",
    shortTitle: "Nail Extensions",
    description: "Durable, salon-perfect nail extensions and art.",
    startingPrice: 799,
    image: "/images/services/nail-extensions.webp",
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
    benefitsTitle: "Why Choose VR Salon for Nail Extensions",
    benefitsSubtitle:
      "Beautiful nail extensions require the perfect combination of creativity, technical expertise, and premium products. Our specialists take the time to understand your style and create extensions that not only look stunning but also feel comfortable and last longer.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalised Nail Styling",
        description: "Every set of nail extensions is customised to match your personality, lifestyle, and desired look.",
      },
      {
        icon: "Hand",
        title: "Precision Application",
        description: "Proper nail preparation, shaping, and application ensure beautiful extensions with a comfortable, natural feel.",
      },
      {
        icon: "Gem",
        title: "Premium Professional Products",
        description: "We use high-quality products to deliver durable extensions with excellent strength, shine, and finish.",
      },
      {
        icon: "Sparkles",
        title: "Creative Nail Artists",
        description: "Whether you love elegant simplicity or detailed nail art, our team creates designs that reflect your individual style.",
      },
      {
        icon: "ShieldCheck",
        title: "Long-Lasting Results",
        description: "Our application techniques are designed to maximise durability while maintaining the beauty of your extensions between appointments.",
      },
    ],
    treatmentsTitle: "Find Your Perfect Nail Extension Style",
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
    comparison: {
      title: "Which Nail Extension Is Right for You?",
      description:
        "Choosing the right nail extension depends on your lifestyle, maintenance preferences, and the look you want to achieve. Our specialists are always happy to guide you toward the best option.",
      goalLabel: "Your Preference",
      recommendedLabel: "Recommended Option",
      rows: [
        { goal: "Strong & Durable Nails", recommended: "Acrylic Extensions" },
        { goal: "Lightweight & Natural Feel", recommended: "Brisa Gel Extensions" },
        { goal: "Elegant Everyday Look", recommended: "French Finish" },
        { goal: "Modern Fashion Look", recommended: "Ombre Finish" },
        { goal: "Creative & Glamorous Style", recommended: "Nail Art & Stones" },
        { goal: "Temporary Special Occasion Look", recommended: "Press-On Nails" },
      ],
    },
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
    reviews: [
      {
        id: "ne-r1",
        name: "Mia",
        rating: 5,
        service: "Nail Art",
        review:
          "I am so in love with my nails — Jaja was my technician, what a beautiful lady, and the experience at the salon was amazing. Customer service 10/10; if I could put more than 5 stars I would. Will definitely be back ❤️❤️",
        source: "google",
      },
      {
        id: "ne-r2",
        name: "Muskan Thapa Magar",
        rating: 5,
        service: "Acrylic Nails",
        review:
          "I got my acrylic done and my nails look amazing — they really did a good job. I love the ambience of the place. Highly recommend this salon, 10/10.",
        source: "google",
      },
      {
        id: "ne-r3",
        name: "Jahjah Galaraga",
        rating: 5,
        service: "Pedicure & Acrylic Nails",
        review:
          "I recently got my pedicure and acrylic nails done at VR Salon, and I'm absolutely in love with the results — my nails look gorgeous and the entire experience was amazing. The salon has such a beautiful, premium space: super clean, stylish, and relaxing. I love the location, the vibe, and most importantly, the service. Truly one of the best salon experiences I've had. Highly recommended!",
        source: "google",
      },
    ],
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
    portfolio: {
      title: "Our Recent Nail Extension Transformations",
      description:
        "Every nail set tells a different story. Browse our latest work featuring acrylic extensions, Brisa Gel nails, elegant French styles, trendy ombré finishes, and creative nail art designed for real clients at VR Unisex Salon.",
    },
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
    slug: "professional-hair-colour-in-dubai",
    title: "Professional Hair Colour in Dubai ",
    shortTitle: "Professional Hair Colour",
    description: "Global and highlight coloring with premium brands.",
    startingPrice: 1499,
    image: "/images/services/hair-color.webp",
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
    benefitsTitle: "Why Choose VR Salon for Your Hair Colour",
    benefitsSubtitle:
      "Beautiful hair colour isn't created by simply applying colour—it's achieved through expert consultation, precision techniques, and choosing the right products for your unique hair. At VR Unisex Salon, every colour appointment is thoughtfully personalised to deliver vibrant, long-lasting results while protecting the health of your hair.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalised Colour Consultation",
        description:
          "Every colour journey begins with understanding your skin tone, hair history, lifestyle, and desired outcome before recommending the most suitable shades and colouring techniques.",
      },
      {
        icon: "Wind",
        title: "Advanced Colour Techniques",
        description:
          "Whether you prefer a natural refresh or a dramatic transformation, we combine modern colouring methods with meticulous attention to detail to create seamless, beautifully blended results.",
      },
      {
        icon: "HeartPulse",
        title: "Healthy Hair First",
        description:
          "We believe beautiful colour starts with healthy hair. Every colouring service is performed using professional products and techniques that help minimise damage while preserving softness, strength, and shine.",
      },
      {
        icon: "Gem",
        title: "International Salon Standards",
        description:
          "Inspired by international beauty trends and professional colouring practices, we deliver elegant, sophisticated results that suit your individual style rather than simply following trends.",
      },
      {
        icon: "ShieldCheck",
        title: "Long-Lasting Results",
        description:
          "From professional application to personalised aftercare guidance, everything we do is designed to help your colour remain vibrant, fresh, and beautiful between salon visits.",
      },
    ],
    treatmentsTitle: "Explore Our Hair Colour Services",
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
    brandsTrust: {
      title: "Professional Haircare Brands We Trust",
      description:
        "Exceptional colour begins with exceptional products. That's why we work with globally recognised professional brands trusted by leading salons around the world. Every product is selected to enhance colour performance while protecting your hair's health and integrity.",
      brands: [
        { name: "Olaplex", logo: "/images/products-uses/olaplex.webp", description: "Strengthens and repairs hair bonds during colouring, helping reduce breakage while improving overall hair health." },
        { name: "L'Oréal Professionnel", logo: "/images/products-uses/loreal-professionnel.webp", description: "Advanced salon colour technology delivering vibrant shades, brilliant shine, and long-lasting performance." },
        { name: "GK Hair", logo: "/images/products-uses/gk-hair-professional.webp", description: "Professional formulations that help maintain smoothness, softness, and colour longevity." },
        { name: "Matrix", logo: "/images/products-uses/matrix.webp", description: "Trusted professional colour systems designed for consistent, vibrant, and beautiful results." },
        { name: "Goldwell", logo: "/images/products-uses/goldwell.webp", description: "Premium colour technology known for exceptional precision, richness, and brilliant shine." },
        { name: "Brazilian Blowout", logo: "/images/products-uses/brazilian-blowout.webp", description: "A professional smoothing treatment that pairs beautifully with colour services to create silky, glossy, and more manageable hair." },
      ],
    },
    process: [
      {
        step: 1,
        title: "Personal Consultation",
        description: "We discuss your expectations, lifestyle, previous colour history, and assess your hair condition before recommending suitable options.",
      },
      {
        step: 2,
        title: "Colour Planning",
        description: "Our experts help you choose shades and techniques that complement your skin tone, facial features, and maintenance preferences.",
      },
      {
        step: 3,
        title: "Professional Colour Application",
        description: "Using premium salon products and advanced techniques, we carefully create beautiful, even, and healthy-looking colour.",
      },
      {
        step: 4,
        title: "Styling & Aftercare",
        description: "Before you leave, we'll style your hair and share personalised aftercare advice to help maintain vibrant colour and healthy hair for longer.",
      },
    ],
    processPosition: "late",
    processTitle: "Your Hair Colour Journey",
    processSubtitle: "Every great transformation starts with understanding you.",
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
    reviews: [
      {
        id: "hc-r1",
        name: "Malar Kodi",
        rating: 5,
        service: "Hair Colour & Highlights",
        review:
          "I had a lovely experience at VR Salon near Burjuman Metro. I went for keratin treatment, highlights, and hair colouring, and I'm extremely happy with how my hair turned out. Big thanks to Vishal and Raju, who have 8+ years of experience and truly know what they're doing. The whole process was smooth and comfortable, and the salon has a clean, relaxing environment.",
        source: "google",
      },
      {
        id: "hc-r2",
        name: "Priyanca Hemnani",
        rating: 5,
        service: "Hair Colour & Haircut",
        review:
          "Visited this salon for the first time for hair colour and a haircut, and I'm really happy with the results! The staff was friendly and professional, and they took the time to understand exactly what I wanted. The colour turned out beautiful and the cut suits me perfectly. The place was clean and welcoming too. Definitely coming back! Thank you so much 😊❤️",
        source: "google",
      },
      {
        id: "hc-r3",
        name: "Shahithya Chandradas",
        rating: 5,
        service: "Hair Colour",
        review:
          "I recently got my hair coloured at VR Salon with stylist Raju, and I'm really happy with the results! He understood exactly what I wanted, was very professional, and paid great attention to detail throughout the process. My hair looks beautiful and healthy, and the colour came out perfectly. Highly recommend Raju if you're looking for someone skilled and patient with hair colouring. Thank you for the amazing service!",
        source: "google",
      },
    ],
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
    
    portfolio: {
      title: "Colour That Speaks for Itself",
      description:
        "Every colour transformation tells a unique story. Explore real client results showcasing subtle enhancements, bold makeovers, balayage, highlights, and beautifully personalised colour designed to complement every individual.",
    },
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
    slug: "ladies-waxing-threading-and-bleach-services-in-dubai",
    title: "Ladies Waxing, Threading & Bleach Services in Dubai ",
    shortTitle: "Ladies Waxing, Threading & Bleach",
    description: "Smooth, gentle hair removal for face and body.",
    startingPrice: 199,
    image: "/images/services/waxing-threading.webp",
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
    benefitsTitle: "Why Choose VR Salon for Women's Beauty Services",
    benefitsSubtitle:
      "Every woman's skin is unique, which is why every treatment at VR Unisex Salon is delivered with personalised attention, gentle techniques, and professional care. From precise eyebrow threading to full body waxing and skin-brightening bleach treatments, we focus on delivering beautiful results while ensuring a comfortable salon experience.",
    benefits: [
      {
        icon: "Sparkles",
        title: "Designed for Women's Beauty Needs",
        description: "Our treatments are carefully performed to suit different skin types, hair textures, and personal grooming preferences.",
      },
      {
        icon: "ShieldCheck",
        title: "Hygiene You Can Trust",
        description: "We maintain strict hygiene standards by using clean equipment, quality products, and safe treatment practices throughout every appointment.",
      },
      {
        icon: "Hand",
        title: "Gentle & Comfortable Techniques",
        description: "Our experienced beauty therapists use professional techniques designed to minimise discomfort while achieving effective results.",
      },
      {
        icon: "ClipboardList",
        title: "Personalised Recommendations",
        description: "Whether you're visiting for eyebrow threading or full body waxing, we recommend the most suitable treatment based on your skin type and beauty goals.",
      },
      {
        icon: "HeartPulse",
        title: "Relaxing Salon Experience",
        description: "Enjoy a welcoming environment where every treatment is performed with care, professionalism, and attention to detail.",
      },
    ],
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
    comparison: {
      title: "Which Beauty Treatment Is Right for You?",
      description:
        "Not sure which service best suits your needs? Our beauty specialists will guide you based on your skin type, hair growth, and desired results.",
      goalLabel: "Your Beauty Goal",
      recommendedLabel: "Recommended Service",
      rows: [
        { goal: "Perfectly Shaped Eyebrows", recommended: "Eyebrow Threading" },
        { goal: "Smooth Facial Skin", recommended: "Full Face Threading" },
        { goal: "Long-Lasting Hair Removal", recommended: "Waxing" },
        { goal: "Smooth Skin for Weeks", recommended: "Full Body Waxing" },
        { goal: "Reduce Visibility of Facial Hair", recommended: "Face Bleach" },
        { goal: "Brighter Overall Appearance", recommended: "Full Body Bleach" },
      ],
    },
    highlightGroup: {
      title: "Why Women Choose Professional Beauty Treatments",
      description: "Professional beauty maintenance isn't just about appearance—it's about feeling confident every day.",
      items: [
        {
          title: "Longer-Lasting Smoothness",
          description: "Waxing removes hair from the root, helping your skin stay smoother for longer.",
        },
        {
          title: "Precise Facial Grooming",
          description: "Threading creates beautifully shaped eyebrows while gently removing fine facial hair.",
        },
        {
          title: "Naturally Radiant Skin",
          description: "Bleach treatments reduce the visibility of facial and body hair while enhancing your natural complexion.",
        },
        {
          title: "Gentle Professional Care",
          description: "Every treatment is customised according to your skin sensitivity and comfort.",
        },
        {
          title: "Feel Beautiful Every Day",
          description: "Beautifully maintained skin helps you feel confident whether you're heading to work, attending an event, or enjoying everyday life.",
        },
      ],
    },
    portfolio: {
      title: "Our Recent Beauty Transformations",
      description:
        "See how professional beauty treatments help women achieve beautifully groomed skin and naturally polished results.",
    },
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
    reviews: [
      {
        id: "wx-r1",
        name: "Vaishnavi Mishra",
        rating: 5,
        service: "Hair & Beauty Services",
        review:
          "I've done your hair extensions — it was really amazing. You guys have done an amazing job and the salon is so neat and clean. Highly recommended for hair, beauty, and nail services. This will be my salon while I'm in Dubai. Special thanks to the owner, Vishal.",
        source: "google",
      },
      {
        id: "wx-r2",
        name: "Imthiaz Ahmed",
        rating: 5,
        service: "Family Grooming",
        review:
          "We had a wonderful experience at this salon! The team was professional, friendly, and made us feel welcome from the moment we walked in. I got a haircut and beard trim, both done with great attention to detail. My daughter's haircut turned out exactly as we wanted, and the stylist was patient and gentle with her. My wife had her hair coloured, cut, and styled, and the results were absolutely beautiful — she couldn't be happier! The salon was clean, comfortable, and the service was outstanding. We'll definitely be coming back!",
        source: "google",
      },
    ],
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
    slug: "couple-spa-and-salon-experience-in-dubai",
    title: "Couple Spa & Salon Experience in Dubai ",
    shortTitle: "Couple Spa & Salon",
    description: "Pamper sessions designed for two.",
    startingPrice: 1999,
    image: "/images/services/couple-services.webp",
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
    whyChooseUs: {
      title: "Why Choose a Couple Experience at VR Salon",
      subtitle:
        "Sometimes, self-care is even more meaningful when it's shared. At VR Unisex Salon, our couple experiences are thoughtfully designed to help you unwind together while enjoying professional beauty and wellness treatments in a welcoming, premium setting.",
      items: [
        {
          icon: "Clock",
          title: "Spend Quality Time Together",
          description:
            "Turn your salon visit into a memorable experience that lets you relax and enjoy uninterrupted time with someone special.",
        },
        {
          icon: "ClipboardList",
          title: "Personalised Treatments",
          description:
            "Each guest receives treatments tailored to their individual needs while enjoying the experience together.",
        },
        {
          icon: "Leaf",
          title: "Calm & Comfortable Ambience",
          description:
            "A peaceful environment helps both of you disconnect from busy schedules and simply enjoy the moment.",
        },
        {
          icon: "ShieldCheck",
          title: "Experienced Professionals",
          description:
            "Our beauty specialists ensure both guests receive personalised attention and exceptional service throughout the visit.",
        },
        {
          icon: "Gem",
          title: "Perfect for Every Occasion",
          description:
            "Whether it's a celebration or an ordinary day you want to make extraordinary, our couple experiences are designed to create lasting memories.",
        },
      ],
    },
    highlightGroup: {
      title: "Perfect For Every Occasion",
      description: "Our Couple Services are a wonderful way to celebrate life's special moments together.",
      items: [
        {
          title: "Anniversary Celebrations",
          description: "Create beautiful memories while enjoying quality time together.",
        },
        {
          title: "Birthdays",
          description: "Celebrate differently with a relaxing salon experience instead of the usual dinner plans.",
        },
        {
          title: "Pre-Wedding Pampering",
          description: "Prepare for your special day with professional beauty and grooming services before your wedding celebrations begin.",
        },
        {
          title: "Honeymoon Preparation",
          description: "Start your journey together feeling refreshed, confident, and looking your best.",
        },
        {
          title: "Weekend Self-Care",
          description: "Sometimes you don't need a special occasion—just quality time together.",
        },
      ],
    },
    secondaryHighlightGroup: {
      title: "Why Couples Love This Experience",
      description:
        "Our Couple Services are about much more than beauty treatments. They're about slowing down, reconnecting, and creating memories together.",
      items: [
        {
          title: "Relax Together",
          description: "Escape busy schedules and enjoy uninterrupted quality time.",
        },
        {
          title: "Feel Refreshed Together",
          description: "Professional treatments leave both of you looking and feeling your best.",
        },
        {
          title: "Celebrate Meaningful Moments",
          description: "Turn birthdays, anniversaries, and milestones into unforgettable experiences.",
        },
        {
          title: "Personalised for Both Guests",
          description: "Every experience is customised according to individual preferences while still being enjoyed together.",
        },
        {
          title: "Create Lasting Memories",
          description: "The experience doesn't end when you leave—it becomes something you'll remember together.",
        },
      ],
    },
    closingNote: {
      title: "Why Choose VR Salon for Your Couple Experience",
      description:
        "At VR Unisex Salon, we don't simply schedule two appointments side by side—we create an experience designed around comfort, care, and togetherness. From the moment you arrive, our team focuses on making your visit seamless and enjoyable, allowing you to relax while we take care of everything else.",
    },
    portfolio: {
      title: "Our Couple Experience Gallery",
      description:
        "Every shared experience tells a story. Explore moments captured at VR Unisex Salon and see how couples enjoy quality time together while celebrating special occasions and everyday self-care.",
    },
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
    reviews: [
      {
        id: "cs-r1",
        name: "Chinmai Madhu",
        rating: 5,
        service: "Haircut",
        review:
          "I had a wonderful experience at VR Salon! I'm extremely happy with my haircut. The staff were very friendly, professional, and made me feel comfortable from the moment I walked in.",
        source: "google",
      },
      {
        id: "cs-r2",
        name: "Carmel Nursery",
        rating: 5,
        service: "Hair Styling",
        review:
          "I had an amazing experience at VR Unisex Salon. A special thanks to Pramod, who did an outstanding job — he is very professional, patient, and really understands what the customer wants. The attention to detail and friendly service made it memorable.",
        source: "google",
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
    slug: "eyelash-extensions-in-dubai",
    title: "Eyelash Extensions in Dubai ",
    shortTitle: "Eyelash Extensions",
    description: "Natural to dramatic lash extensions, done right.",
    startingPrice: 899,
    image: "/images/services/eyelash-extensions.webp",
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
    benefitsTitle: "Why Choose VR Salon for Eyelash Extensions",
    benefitsSubtitle:
      "Every pair of eyes is unique, and your lashes should be too. At VR Unisex Salon, we focus on creating lash extensions that look elegant, feel comfortable, and suit your lifestyle.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalised Lash Styling",
        description: "We carefully select the ideal lash length, curl, and volume based on your eye shape and the look you want to achieve.",
      },
      {
        icon: "Wind",
        title: "Lightweight & Comfortable",
        description: "Our premium lash extensions are designed to feel natural while providing beautiful, long-lasting results.",
      },
      {
        icon: "Scissors",
        title: "Precision Application",
        description: "Each extension is applied with meticulous attention to detail, ensuring a clean, balanced, and seamless finish.",
      },
      {
        icon: "Gem",
        title: "Long-Lasting Beauty",
        description: "With proper aftercare and regular maintenance, your lash extensions continue looking beautiful for weeks.",
      },
      {
        icon: "HeartPulse",
        title: "Relaxing Salon Experience",
        description: "Enjoy a comfortable, relaxing appointment while our beauty specialists create your perfect lash look.",
      },
    ],
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
    comparison: {
      title: "Which Lash Service Is Right for You?",
      description:
        "Not sure which service best suits your needs? Our beauty specialists will recommend the ideal option based on your lifestyle, occasion, and desired appearance.",
      goalLabel: "If You're Looking For...",
      recommendedLabel: "Recommended Service",
      rows: [
        { goal: "Natural Everyday Beauty", recommended: "Classic Full Set" },
        { goal: "Fuller & More Defined Lashes", recommended: "Volume Full Set" },
        { goal: "Maintain Existing Extensions", recommended: "Classic or Volume Refill" },
        { goal: "Temporary Lashes for an Event", recommended: "Weekly Lashes" },
        { goal: "Remove Existing Lash Extensions", recommended: "Professional Eyelash Removal" },
      ],
    },
    highlightGroup: {
      title: "Why Clients Love Eyelash Extensions",
      description:
        "Professional eyelash extensions do more than enhance your appearance—they simplify your daily beauty routine while helping you feel confident every day.",
      items: [
        {
          title: "Wake Up Looking Ready",
          description: "Enjoy beautifully defined lashes from the moment you wake up.",
        },
        {
          title: "Spend Less Time Getting Ready",
          description: "Reduce your everyday makeup routine while still enjoying naturally beautiful eyes.",
        },
        {
          title: "Enhance Your Natural Beauty",
          description: "Professionally applied lash extensions highlight your eyes without looking overdone.",
        },
        {
          title: "Long-Lasting Results",
          description: "With regular maintenance appointments, your lashes remain beautiful week after week.",
        },
        {
          title: "Feel Confident Every Day",
          description: "Whether you're heading to work, travelling, or attending a special occasion, beautiful lashes complete your look effortlessly.",
        },
      ],
    },
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
    reviews: [
      {
        id: "el-r1",
        name: "Vaishnavi Mishra",
        rating: 5,
        service: "Eyelash Extensions",
        review:
          "I've done your hair extensions — it was really amazing. You guys have done an amazing job and the salon is so neat and clean. Highly recommended for hair, beauty, and nail services. This will be my salon while I'm in Dubai. Special thanks to the owner, Vishal.",
        source: "google",
      },
      {
        id: "el-r2",
        name: "Tara Gahatraj",
        rating: 5,
        service: "Lashes, Keratin & Nails",
        review:
          "I visited VR Unisex Salon and the service was absolutely amazing. I got my keratin treatment, nail extensions, and eyelashes done, and all I can say is wow! The staff is professional, the atmosphere is lovely, and the results exceeded my expectations. Highly recommended for anyone looking to feel confident and pampered ✨💅✨",
        source: "google",
      },
    ],
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
    slug: "professional-makeup-services-in-dubai",
    title: "Professional Makeup Services in Dubai ",
    shortTitle: "Makeup",
    description: "Party, bridal and everyday makeup by experts.",
    startingPrice: 1499,
    image: "/images/services/makeup.webp",
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
    benefitsTitle: "Why Choose VR Salon for Professional Makeup",
    benefitsSubtitle:
      "Every occasion deserves a unique look. Our makeup artists combine professional techniques, premium products, and personalised consultations to create a flawless finish that lasts throughout your event.",
    benefits: [
      {
        icon: "ClipboardList",
        title: "Personalised Makeup Consultation",
        description: "Every makeup session begins with understanding your outfit, skin tone, event, and preferred style.",
      },
      {
        icon: "Sparkles",
        title: "Professional Makeup Artists",
        description: "Our experienced team creates looks that enhance your natural beauty while ensuring you feel comfortable and confident.",
      },
      {
        icon: "Gem",
        title: "Premium Makeup Products",
        description: "We use high-quality professional makeup products to achieve beautiful, long-lasting results suitable for every skin type.",
      },
      {
        icon: "Wind",
        title: "Natural to Glamorous Looks",
        description: "Whether you prefer soft elegance or bold glamour, we customise every look according to your vision.",
      },
      {
        icon: "ShieldCheck",
        title: "Attention to Every Detail",
        description: "From skin preparation to the final touch, every step is carefully performed for a polished, camera-ready finish.",
      },
    ],
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
        id: "couple-pre-wedding-package",
        category: "Makeup",
        name: "Couple Pre-Wedding Package ",
        description:
          "Prepare for your big day together. Our Couple Pre-Wedding Package includes Facial + Hair Spa for both partners, allowing you to relax, refresh, and enjoy quality time together before your wedding celebrations begin.",
      },
    ],
    comparison: {
      title: "Which Makeup Service Is Right for You?",
      goalLabel: "Occasion",
      recommendedLabel: "Recommended Service",
      rows: [
        { goal: "Office Events", recommended: "Day Light Expression Makeup" },
        { goal: "Family Functions", recommended: "Day Light Expression Makeup" },
        { goal: "Evening Parties", recommended: "Evening Glam Makeup" },
        { goal: "Birthday & Festive Events", recommended: "Party Makeup" },
        { goal: "Wedding Day", recommended: "HD or Airbrush Bridal Makeup" },
        { goal: "Groom Preparation", recommended: "Groom Package" },
        { goal: "Pre-Wedding Pampering", recommended: "Couple Pre-Wedding Package" },
      ],
    },
    highlightGroup: {
      title: "Why Clients Choose Professional Makeup",
      description:
        "Professional makeup is more than applying cosmetics—it's about enhancing your confidence while ensuring your look stays flawless throughout your event.",
      items: [
        {
          title: "Long-Lasting Finish",
          description: "Professional techniques help your makeup remain fresh for hours.",
        },
        {
          title: "Camera-Ready Look",
          description: "Look naturally beautiful in both real life and professional photography.",
        },
        {
          title: "Customised to Your Features",
          description: "Every face is unique, which is why every makeup application is tailored specifically to you.",
        },
        {
          title: "Stress-Free Preparation",
          description: "Relax while our professionals take care of every detail before your event.",
        },
        {
          title: "Confidence for Every Occasion",
          description: "Feel your absolute best knowing your makeup has been professionally created.",
        },
      ],
    },
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
    reviews: [
      {
        id: "mk-r1",
        name: "Alina Lobo",
        rating: 5,
        service: "Hair Colour",
        review:
          "Absolutely loved my experience at VR Salon! I got my hair transformed from red to a beautiful caramel blonde, and the results were beyond amazing. The staff was incredibly patient throughout the whole process and put so much effort and care into achieving the perfect shade for me.",
        source: "google",
      },
      {
        id: "mk-r2",
        name: "Nischal Lamichhane",
        rating: 5,
        service: "Haircut & Styling",
        review:
          "I got my haircut at VR Salon and the experience was absolutely amazing. My stylist Pramod is incredibly skilled and very professional — he understood exactly what I wanted and delivered it perfectly. The salon itself is super luxurious, from the ambience to the way they pamper you with premium service. One of the best salons in the Burjuman area!",
        source: "google",
      },
    ],
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
    portfolio: {
      title: "Our Recent Makeup Transformations",
      description:
        "Every makeover tells a unique story. Browse our latest makeup transformations, bridal looks, party makeovers, and behind-the-scenes moments from VR Unisex Salon.",
    },
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
  reviews: [
    {
      id: "he-r1",
      name: "Vaishnavi Mishra",
      rating: 5,
      service: "Hair Extensions",
      review:
        "I've done your hair extensions — it was really amazing. You guys have done an amazing job and the salon is so neat and clean. Highly recommended for hair, beauty, and nail services. This will be my salon while I'm in Dubai. Special thanks to the owner, Vishal.",
      source: "google",
    },
    {
      id: "he-r2",
      name: "Uthra",
      rating: 5,
      service: "Hair Care",
      review:
        "Had a great experience at VR Unisex Salon. Raju was very professional and took good care of my hair. He also shared helpful tips about proper shampoo and conditioner usage, which I really appreciated. The salon has a relaxing atmosphere, and the entire team is friendly and professional.",
      source: "google",
    },
    {
      id: "he-r3",
      name: "Maryam Nokhodchi",
      rating: 5,
      service: "Reception & Service",
      review:
        "I'd like to thank the lady named Deeb and the gentleman at reception for the excellent service. They were both very professional, friendly, and attentive throughout my visit, and made sure I was completely satisfied before leaving. Thank you for such a great experience — I'll definitely come back again.",
      source: "google",
    },
    {
      id: "he-r4",
      name: "Reshma Jibin",
      rating: 5,
      service: "Haircut",
      review:
        "Had a really great experience at VR Salon. The staff were super friendly and made me feel comfortable right away — they took the time to understand what I wanted instead of rushing through it. I'm really happy with the haircut; it turned out exactly how I imagined. The whole place is clean with a nice, relaxed vibe too.",
      source: "google",
    },
    {
      id: "he-r5",
      name: "Ashok Raj",
      rating: 5,
      service: "Hydro Facial",
      review:
        "Wow — what an incredibly luxurious and refreshing experience! 🌟 My visit to VR Salon was truly exceptional. Priyanka performed a hydro facial with outstanding professionalism, precision, and care. Her gentle touch and attention to detail made the entire session feel indulgent and relaxing. 💆‍♀️🌸 The results are simply amazing — my skin feels deeply hydrated, radiant, and rejuvenated. I'm beyond satisfied and would highly recommend Priyanka for a premium skincare experience. 💖",
      source: "google",
    },
  ],
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

export const facialTreatmentsService: Service = {
  id: "15",
  slug: "professional-facial-treatments-in-dubai",
  title: "Professional Facial Treatments in Dubai",
  shortTitle: "Professional Facial",
  description: "Personalised facial treatments for radiant, healthy skin.",
  startingPrice: 399,
  image: "/images/services/professional-facial-treatments.webp",
  longDescription:
    "Healthy, radiant skin begins with the right care. At VR Unisex Salon, our professional facial treatments are tailored to your skin type, concerns, and beauty goals. Whether you're looking to brighten your complexion, deeply cleanse your skin, reduce signs of ageing, or simply enjoy a relaxing self-care experience, we'll recommend the facial that's right for you.",
  bookLabel: "Book Your Facial",
  benefitsTitle: "Why Choose VR Salon for Your Facial Treatments",
  benefitsSubtitle:
    "Every facial at VR Unisex Salon is designed around your skin's unique needs. Combining professional skincare techniques, premium products, and personalised care, we help you achieve healthier, brighter, and naturally glowing skin.",
  benefits: [
    {
      icon: "ClipboardList",
      title: "Personalised Skin Analysis",
      description: "Every treatment begins with understanding your skin type and recommending the most suitable facial for your concerns.",
    },
    {
      icon: "ShieldCheck",
      title: "Professional Skincare Products",
      description: "We use trusted skincare brands that nourish, protect, and rejuvenate your skin with every treatment.",
    },
    {
      icon: "Sparkles",
      title: "Treatments for Every Skin Concern",
      description: "From hydration and brightening to acne care and anti-ageing, our facial treatments are tailored to your individual needs.",
    },
    {
      icon: "HeartPulse",
      title: "Relaxing Beauty Experience",
      description: "Enjoy a calming facial experience that refreshes both your skin and your mind.",
    },
  ],
  treatmentsTitle: "Explore Our Facial Treatments",
  treatmentsSubtitle:
    "Whether your goal is glowing skin, deep cleansing, hydration, or age-defying skincare, our facial treatments are carefully selected to deliver visible results while providing a relaxing salon experience.",
  treatmentColumns: 2,
  treatments: [
    {
      id: "glow-brightening-facials",
      category: "Facials",
      name: "Glow & Brightening Facials",
      description:
        "Restore your skin's natural radiance and improve dull or uneven skin tone with treatments designed to brighten and refresh.",
      featuresLabel: "Treatments",
      features: ["Fruit Facial", "Gold Facial", "Diamond Facial", "Platinum Facial", "Clean Up Facial"],
    },
    {
      id: "tan-removal-skin-brightening",
      category: "Facials",
      name: "Tan Removal & Skin Brightening",
      description: "Reduce tanning, revive tired-looking skin, and reveal a brighter, healthier complexion.",
      featuresLabel: "Treatments",
      features: ["D-Tan", "D-Tan Facial"],
    },
    {
      id: "deep-cleansing-hydration",
      category: "Facials",
      name: "Deep Cleansing & Hydration",
      description: "Perfect for congested, dehydrated, or tired skin that needs intensive cleansing and nourishment.",
      featuresLabel: "Treatments",
      features: ["Deep Cleansing Facial", "HydraFacial", "O3 Facial", "O3 Double Mask Facial"],
    },
    {
      id: "anti-ageing-skin-rejuvenation",
      category: "Facials",
      name: "Anti-Ageing & Skin Rejuvenation",
      description: "Designed to improve skin texture, restore firmness, and reduce visible signs of ageing while promoting healthier-looking skin.",
      featuresLabel: "Treatments",
      features: ["Dr. Renaud Facial", "Anti-ageing Facial"],
    },
    {
      id: "acne-care-treatments",
      category: "Facials",
      name: "Acne Care Treatments",
      description: "Professional treatments that help cleanse pores, calm irritated skin, and improve the appearance of acne-prone skin.",
      featuresLabel: "Treatment",
      features: ["Acne Treatment Facial"],
    },
    {
      id: "korean-japanese-facial-experiences",
      category: "Facials",
      name: "Korean & Japanese Facial Experiences",
      description: "Experience advanced skincare inspired by Korean and Japanese beauty rituals, combining professional skincare with deep relaxation.",
      featuresLabel: "Treatments",
      features: ["Korean Facial", "Korean Facial with Spa", "Japanese Spa Facial"],
    },
  ],
  comparison: {
    title: "Which Facial Is Right for You?",
    description:
      "Not sure which facial is best for your skin? Our beauty specialists will assess your skin and recommend the most suitable treatment based on your concerns and desired results.",
    goalLabel: "Your Skin Concern",
    recommendedLabel: "Recommended Treatment",
    rows: [
      { goal: "Dull Skin", recommended: "Fruit, Gold or Diamond Facial" },
      { goal: "Tanned Skin", recommended: "D-Tan Facial" },
      { goal: "Deep Cleansing", recommended: "HydraFacial or O3 Facial" },
      { goal: "Dry & Dehydrated Skin", recommended: "HydraFacial or O3 Double Mask Facial" },
      { goal: "Fine Lines & Ageing", recommended: "Dr. Renaud or Anti-ageing Facial" },
      { goal: "Acne-Prone Skin", recommended: "Acne Treatment Facial" },
      { goal: "Luxury Relaxation", recommended: "Korean or Japanese Facial" },
    ],
  },
  brandsTrust: {
    title: "Professional Skincare Brands We Trust",
    description:
      "We use internationally trusted skincare brands selected to deliver safe, effective, and visible results for every skin type.",
    brands: [
      {
        name: "O3+",
        logo: "/images/products-uses/03-plus.webp",
        description: "Professional skincare formulations designed to cleanse, brighten, and rejuvenate every skin type.",
      },
      {
        name: "Casmara",
        logo: "/images/products-uses/casmara.webp",
        description: "Premium facial treatment systems trusted by skincare professionals for visible, lasting results.",
      },
    ],
  },
  highlightGroup: {
    title: "Why Clients Choose Professional Facials",
    description:
      "Professional facial treatments do more than improve your skin's appearance—they help maintain healthier skin while giving you time to relax and recharge.",
    items: [
      {
        title: "Deeply Cleanses Your Skin",
        description: "Removes impurities, excess oil, and everyday buildup for fresher, healthier-looking skin.",
      },
      {
        title: "Improves Skin Texture",
        description: "Leaves your skin feeling smoother, softer, and more refined.",
      },
      {
        title: "Restores Your Natural Glow",
        description: "Revives tired-looking skin to reveal a brighter, more radiant complexion.",
      },
      {
        title: "Supports Long-Term Skin Health",
        description: "Regular facials help maintain hydration, balance, and overall skin wellness.",
      },
      {
        title: "Relax & Rejuvenate",
        description: "Enjoy a peaceful beauty experience that benefits both your skin and your wellbeing.",
      },
    ],
  },
  expert: {
    title: "Meet Your Beauty Expert",
    name: "Priyanka",
    role: "Senior Beauty Therapist",
    image: "/images/our-team/team3.webp",
    bio: [
      "Priyanka combines professional skincare expertise with personalised recommendations to help every client achieve healthier, more radiant skin. Whether you're visiting for hydration, brightening, acne care, or anti-ageing treatments, she carefully selects the facial that best suits your skin's needs.",
    ],
    expertiseLabel: "Areas of Expertise",
    expertise: [
      "Professional Facials",
      "HydraFacial",
      "O3 Facial",
      "Korean Facial",
      "Japanese Spa Facial",
      "Acne Treatments",
      "Skin Consultation",
    ],
  },
  portfolio: {
    title: "Our Recent Skin Transformations",
    description:
      "Discover real client results from our facial treatments. Browse glowing skin transformations, skincare journeys, and behind-the-scenes moments from VR Unisex Salon.",
  },
  reviews: [
    {
      id: "ft-r1",
      name: "Ashok Raj",
      rating: 5,
      service: "Hydro Facial",
      review:
        "Wow — what an incredibly luxurious and refreshing experience! 🌟 My visit to VR Salon was truly exceptional. Priyanka performed a hydro facial with outstanding professionalism, precision, and care. Her gentle touch and attention to detail made the entire session feel indulgent and relaxing. 💆‍♀️🌸 The results are simply amazing — my skin feels deeply hydrated, radiant, and rejuvenated. I'm beyond satisfied and would highly recommend Priyanka for a premium skincare experience. 💖",
      source: "google",
    },
    {
      id: "ft-r2",
      name: "Maryam Nokhodchi",
      rating: 5,
      service: "Reception & Service",
      review:
        "I'd like to thank the lady named Deeb and the gentleman at reception for the excellent service. They were both very professional, friendly, and attentive throughout my visit, and made sure I was completely satisfied before leaving. Thank you for such a great experience — I'll definitely come back again.",
      source: "google",
    },
  ],
  faqs: [
    {
      id: "ft-1",
      question: "Which facial is best for my skin?",
      answer: "Our beauty specialists assess your skin and recommend the most suitable facial based on your skin type and concerns.",
    },
    {
      id: "ft-2",
      question: "How often should I get a facial?",
      answer: "For healthy skin maintenance, we generally recommend a professional facial every 4–6 weeks, depending on your skin's needs.",
    },
    {
      id: "ft-3",
      question: "Are facials suitable for sensitive skin?",
      answer: "Yes. Every treatment is personalised according to your skin condition using professional products suitable for different skin types.",
    },
    {
      id: "ft-4",
      question: "What's the difference between a HydraFacial and an O3 Facial?",
      answer: "HydraFacial focuses on deep cleansing, exfoliation, and hydration, while O3 Facial is designed to brighten, nourish, and rejuvenate the skin.",
    },
    {
      id: "ft-5",
      question: "Can facials help with acne?",
      answer: "Yes. Our acne care treatments help cleanse pores, reduce congestion, and improve the appearance of acne-prone skin.",
    },
    {
      id: "ft-6",
      question: "Do I need a consultation before my facial?",
      answer: "Yes. Every appointment begins with a skin consultation to ensure the most suitable facial is recommended for your skin.",
    },
  ],
  ctaTitle: "Reveal Your Natural Glow",
  ctaDescription:
    "Whether you're looking to brighten your complexion, deeply hydrate your skin, or simply enjoy a relaxing skincare experience, our professional facial treatments are designed to help you achieve healthy, radiant skin with personalised care.",
  metaTitle: "Professional Facial Treatments in Dubai | HydraFacial, O3 & Korean Facials | VR Unisex Salon",
  metaDescription:
    "Experience professional facial treatments in Dubai at VR Unisex Salon. From HydraFacial and O3 to Korean, Japanese, anti-ageing, and acne facials, enjoy personalised skincare for healthy, radiant skin.",
};

export const services: Service[] = [...coreServices, hairExtensionsService, facialTreatmentsService];

export const brandsWeUse: { name: string; logo: string }[] = [
  { name: "Olaplex", logo: "/images/products-uses/olaplex.webp" },
  { name: "GK Hair", logo: "/images/products-uses/gk-hair-professional.webp" },
  { name: "Brazilian Blowout", logo: "/images/products-uses/brazilian-blowout.webp" },
  { name: "L'Oréal Professionnel", logo: "/images/products-uses/loreal-professionnel.webp" },
  { name: "Matrix", logo: "/images/products-uses/matrix.webp" },
  { name: "Goldwell", logo: "/images/products-uses/goldwell.webp" },
  { name: "O3+", logo: "/images/products-uses/03-plus.webp" },
  { name: "Casmara", logo: "/images/products-uses/casmara.webp" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.shortTitle ?? s.title,
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

// ---------------------------------------------------------------------------
// Every other piece of site copy — section eyebrows/titles/subtitles,
// paragraphs, button labels, form labels/placeholders/validation messages,
// and page metadata descriptions — lives here so editing any text on the
// site only ever means editing this one file. Business facts (phone,
// address, hours) stay in lib/site-config.ts; components combine the two
// (e.g. calling a `*Message` template function with `siteConfig.shortName`).
// ---------------------------------------------------------------------------
export const siteContent = {
  common: {
    bookAppointmentLabel: "Book Appointment",
    whatsappUsLabel: "WhatsApp Us",
    learnMoreAboutUsLabel: "Learn More About Us",
    // Shared by ServiceCard and TreatmentCard — identical wording either way.
    serviceWhatsappMessage: (shortName: string, serviceName: string) =>
      `Hi ${shortName}! I saw the ${serviceName} service on your website and would like to book it. Could you please share your available slots?`,
  },

  hero: {
    eyebrow: "Unisex Salon · Burjuman, Dubai",
    titleLine1: "Luxury Hair & ",
    titleLine2: "Beauty Salon.",
    subtitle:
      "At VR Unisex Salon, every appointment begins with understanding you. Through expert consultation, personalised care, and skilled craftsmanship, we create beautiful transformations that reflect your unique style.",
  },

  whyChooseUs: {
    title: "Why Choose VR Unisex Salon",
    subtitle:
      "Every visit to VR Unisex Salon is built around one promise-to deliver an experience that's as exceptional as the results.",
    imageAlt: "Nail art and a relaxing facial treatment at VR Unisex Salon",
    features: [
      {
        icon: "Globe2",
        title: "International Expertise",
        description: "Years of international experience inspire every cut, colour, and beauty transformation.",
      },
      {
        icon: "Heart",
        title: "Personalised Care",
        description: "Every service is tailored to your style, preferences, and individual beauty goals.",
      },
      {
        icon: "Sparkles",
        title: "Premium Products",
        description: "We use trusted professional salon brands for healthy, long-lasting results.",
      },
      {
        icon: "Wand2",
        title: "Modern Techniques",
        description: "Our team stays updated with the latest beauty trends and advanced salon techniques.",
      },
      {
        icon: "ShieldCheck",
        title: "Hygiene First",
        description: "Strict hygiene standards ensure a clean, safe, and comfortable salon experience.",
      },
      {
        icon: "MapPin",
        title: "Prime Location",
        description: "Conveniently located inside Crown Park Hotel, near BurJuman Metro with complimentary valet parking.",
      },
    ],
  },

  meetTeam: {
    title: "Meet the Experts Behind VR Salon",
    subtitle:
      "Behind every beautiful experience is a passionate team committed to helping every client look and feel their absolute best.",
    chatWithPrefix: "Chat with",
    whatsappMessage: (shortName: string, memberName: string) =>
      `Hi ${shortName}! I'd like to book an appointment with ${memberName}.`,
  },

  servicesSection: {
    eyebrow: "Our Services",
    title: "Everything You Need, In One Place",
    subtitle: "From haircuts to bridal makeup, explore our full range of salon services.",
    viewAllLabel: "View All Services",
  },

  brandsWeUse: {
    title: "Brands We Use",
    subtitle: "We trust globally recognised, salon-grade brands across every treatment we offer.",
  },

  pricing: {
    title: "Curated Beauty Experiences",
    subtitle:
      "Whether you're preparing for a special occasion, planning a day of self-care, or simply treating yourself, our thoughtfully curated beauty experiences are designed to help you relax, refresh, and leave feeling your absolute best.",
    popularBadge: "Most Popular",
    bookLabel: "Book This Package",
    browseIntro: "Looking for something specific?",
    browseLinkLabel: "Browse individual services",
  },

  gallery: {
    title: "Beautiful Results. Genuine Experiences.",
    subtitle:
      "Every visit to VR Unisex Salon is more than a beauty appointment it's a story of confidence, care, and transformation. Here's a glimpse of the moments we've been privileged to create for our clients.",
    arrowLabel: "photos",
  },

  instagramFeed: {
    statLabels: { followers: "Followers", google: "Google", reviews: "Reviews" },
    bio: "Beauty is constantly evolving, and so are we. Follow us for the latest transformations, styling inspiration, beauty tips, and behind-the-scenes moments from everyday life at VR Unisex Salon.",
    followLabel: (handle: string) => `Follow @${handle}`,
    bookSimilarLookLabel: "Book a Similar Look",
    reelsLabel: "Our Instagram Reels",
  },

  instagramPost: {
    viewProfileLabel: "View profile",
    reelAlt: "Instagram reel",
    avatarFallbackInitials: "VR",
    likesCommentsLabel: (likes: number, comments: number) => `${likes} likes · ${comments} comments`,
    viewOnInstagramLabel: "View on Instagram",
  },

  testimonials: {
    badgeLabel: "Google Reviews",
    eyebrow: "Reviews",
    title: "What our Burjuman clients say",
    readAllText: "Read all our verified reviews on Google",
    seeAllLabel: "See All Google Reviews",
  },

  faqSection: {
    eyebrow: "FAQ",
    title: "FAQs",
    // Was previously a stray copy-paste of the Gallery section's subtitle
    // (talked about "photos"/"moments" — nothing to do with FAQs).
    subtitle:
      "Quick answers to the questions we hear most often. If yours isn't covered here, just reach out — we're happy to help.",
    stillHaveQuestions: "Still have questions?",
    chatLabel: "Chat with us on WhatsApp",
    whatsappMessage: "Hi, I have a question about your services.",
  },

  contactCta: {
    title: "Ready to Experience Beauty, Redefined?",
    descriptionLines: [
      "Whether it is your regular self-care ritual or a special occasion, we are here to make every visit feel effortless, relaxing, and uniquely yours.",
      "Visit us, unwind, and discover why so many clients across Dubai trust VR Unisex Salon for exceptional hair and beauty experiences.",
    ],
    whatsappLabel: "WhatsApp",
    callPrefix: "Call",
  },

  contactSection: {
    points: [
      "Personalised Consultation",
      "International Expertise",
      "Premium Products",
      "Luxury Experience",
      "Prime Location",
    ],
    title: "Your Next Beauty Experience Starts Here",
    paragraph:
      "Whether you're planning your next appointment or visiting us for the first time, we're here to make the process simple and stress-free. Complete the form, and our team will contact you shortly to confirm your appointment and help you plan your visit.",
    formEyebrow: "Schedule Appointment",
    formTitle: "Book Your Appointment",
  },

  // Currently unused (AboutConnect is commented out on the homepage), kept
  // centralised so re-enabling it needs no content work.
  aboutConnect: {
    eyebrow: "Connect With Us",
    title: "More Than a Salon - A Complete Beauty Experience",
    paragraph:
      "For years, VR Unisex Salon has been dedicated to helping clients look and feel their best, combining skilled craftsmanship with a warm, welcoming atmosphere.",
    imageAlt: "Stylist working on a client's hair at VR Unisex Salon",
    features: [
      "Certified & experienced stylists",
      "Premium, cruelty-free products",
      "Hygienic, sanitized tools & stations",
      "Personalized consultations",
    ],
  },

  footer: {
    quickLinksHeading: "Quick Links",
    servicesHeading: "Services",
    getInTouchHeading: "Get In Touch",
    rightsReservedSuffix: "All rights reserved.",
  },

  breadcrumb: {
    homeLabel: "Home",
  },

  // The generic per-service page renderer (ServiceDetail.tsx): section
  // eyebrows that aren't configurable per-service, and the fallback copy
  // shown when a service doesn't set its own title/subtitle for a section.
  serviceDetail: {
    eyebrows: {
      howItWorks: "How It Works",
      whyItWorks: "Why It Works",
      findYourMatch: "Find Your Match",
      productsWeTrust: "Products We Trust",
      theDifference: "The Difference",
      // Was hardcoded as "Why Couples Choose Us" — this slot is generic and
      // used by any service, not just Couple Spa.
      secondHighlightGroup: "Even More Reasons",
      isThisForYou: "Is This For You?",
      yourSpecialist: "Your Specialist",
      aftercare: "Aftercare",
      realResults: "Real Results",
      faq: "FAQ",
    },
    processTitleFallback: "Your Visit, Step by Step",
    benefitsTitleFallback: (serviceTitle: string) => `Benefits of ${serviceTitle}`,
    treatmentsTitleFallback: (serviceTitle: string) => `Choose Your ${serviceTitle} Treatment`,
    // Was hardcoded around "haircut" wording, which showed incorrectly on
    // any non-haircut service that didn't set its own treatmentsSubtitle.
    treatmentsSubtitleFallback:
      "Explore our range of options below and find the treatment that's right for you.",
    comparisonGoalLabelFallback: "Your Goal",
    comparisonRecommendedLabelFallback: "Recommended",
    expertTitleFallback: "Meet Your Expert",
    expertiseLabelFallback: "Areas of Expertise",
    faqTitleFallback: (serviceTitle: string) => `${serviceTitle} — Common Questions`,
    ctaTitleFallback: (serviceTitle: string) => `Ready to Book Your ${serviceTitle}?`,
    ctaDescriptionFallback:
      "Reach out on WhatsApp, give us a call, or book online — whichever is easiest for you.",
    whatsappKnowMoreMessage: (serviceName: string) => `Hi, I'd like to know more about ${serviceName}.`,
    ratingBadge: (rating: number, reviewCount: number) => `${rating} rating from ${reviewCount}+ clients`,
    consultationMessage: (shortName: string, serviceName: string) =>
      `Hi ${shortName}! I'd like to book a ${serviceName} consultation.`,
    bookConsultationLabel: "Book Your Consultation",
    followOnInstagramLabel: (shortName: string) => `Follow ${shortName} on Instagram`,
  },

  treatmentCard: {
    featuresLabelFallback: "Features",
    bestForLabelFallback: "Best for",
    resultLabelFallback: "Result",
    noteLabelFallback: "Note",
    bookLabel: "Book This Treatment",
  },

  serviceCard: {
    bookNowLabel: "Book Now",
  },

  reviewCard: {
    verifiedOnGoogleLabel: "Verified on Google",
  },

  carousel: {
    defaultArrowLabel: "items",
  },

  about: {
    hero: {
      perks: [
        { icon: "TrainFront", label: "2 minutes' walk from Burjuman Metro Station" },
        { icon: "MapPin", label: "Inside the 5-star Crown Park Hotel" },
        { icon: "Car", label: "Free valet parking available" },
      ],
      photos: [
        { src: "/images/gallery/salon-01.jpg", alt: "Entrance and styling area at VR Unisex Salon" },
        { src: "/images/gallery/salon-04.jpg", alt: "Pedicure and spa treatment area at VR Unisex Salon" },
        { src: "/images/gallery/salon-05.jpg", alt: "Reception desk at VR Unisex Salon" },
      ],
      eyebrow: "Where Passion, Expertise & Beauty Come Together",
      title: "ABOUT VR UNISEX SALON",
      paragraph1: (name: string) =>
        `${name} was founded with a simple belief—that every client deserves more than a beauty service; they deserve a premium salon experience built on trust, expertise, and genuine care.`,
      paragraph2:
        "Inspired by years of international experience across Singapore, Malaysia, Australia, and Dubai, founders Vishal and Raju created a luxury hair & beauty salon in Dubai where personalised attention, modern techniques, and exceptional hospitality come together to create experiences clients trust, recommend, and look forward to returning to.",
    },
    services: {
      eyebrow: "Our Services",
      title: "Specialist Treatments We Offer",
      subtitle: "In-depth guides for every service we provide — open any one to see what's included, the options and FAQs.",
    },
    whatMakesUsDifferent: {
      title: "The VR Promise",
      subtitle:
        "Luxury isn't defined by the services we offer—it's reflected in how we make every client feel. These values guide every consultation, every recommendation, and every experience we create.",
      points: [
        {
          title: "We Listen First",
          description: "Every appointment begins with understanding your needs, preferences, and expectations before making recommendations.",
        },
        {
          title: "We Create Thoughtfully",
          description: "Every haircut, beauty treatment, and transformation is approached with creativity, precision, and attention to detail.",
        },
        {
          title: "We Care Beyond the Appointment",
          description: "Our goal isn't simply to deliver great results today-it's to become the salon you'll confidently return to for years to come.",
        },
        {
          title: "We Use Trusted Products",
          description: "Every treatment is performed using carefully selected professional products to ensure healthy hair, beautiful skin, and long-lasting results.",
        },
      ],
    },
    meta: {
      titlePrefix: "About Us",
      description:
        "Founded by brothers Vishal and Raju, VR Unisex Salon brings over 8 years of hair, skin and beauty expertise to Burjuman, Dubai — inside the 5-star Crown Park Hotel.",
    },
  },

  contactPage: {
    meta: {
      titlePrefix: "Contact Us",
      description:
        "Book an appointment at VR Unisex Salon — inside Crown Park Hotel, Burjuman, Dubai. Call, WhatsApp, or send us a booking request.",
    },
    eyebrow: "Contact Us",
    title: "Get in Touch with VR Unisex Salon",
    subtitle: "Book your appointment, ask a question, or connect with our team. We're here to help you enjoy a premium salon experience in Dubai.",
  },

  appointmentForm: {
    validation: {
      name: "Please enter your full name",
      phone: "Please enter a valid mobile number for the selected country",
      email: "Please enter a valid email address",
      service: "Please choose a service",
      date: "Please choose a date",
      time: "Please choose a time",
      recaptcha: "Please verify that you're not a robot.",
    },
    labels: {
      name: "Full Name",
      phone: "Mobile Number",
      email: "Email Address",
      service: "Preferred Service",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Message (Optional)",
    },
    placeholders: {
      name: "Enter your full name",
      phone: "Enter your mobile number",
      email: "Enter your email address",
      message: "Tell us anything else we should know...",
    },
    serviceSelectPlaceholder: "Select a service",
    timeSelectPlaceholder: "Select time",
    submitLabel: "Schedule Appointment",
    submittingLabel: "Sending...",
    disclaimer: "Your information is secure and will only be used to confirm your appointment.",
    successMessage: "Thank you! We'll be in touch shortly to confirm your appointment.",
    errorMessage: "Something went wrong. Please try again or reach us on WhatsApp.",
  },

  servicesPage: {
    meta: {
      titlePrefix: "Services",
      description:
        "Explore the full range of services at VR Unisex Salon — haircuts, colour, treatments, nails, lashes, waxing, makeup and more, in Burjuman, Dubai.",
    },
    hero: {
      eyebrow: "Our Services",
      title: "Luxury Hair & Beauty Services in Dubai",
      description:
        "From everyday self-care to special occasion transformations, discover a complete range of premium hair, beauty, wellness, and nail services at VR Unisex Salon. Every experience is personalised, thoughtfully delivered, and designed to help you look and feel your absolute best.",
      photos: [
        { src: "/images/gallery/salon-03.jpg", alt: "Styling stations at VR Unisex Salon" },
        { src: "/images/services/hair-color.webp", alt: "Hair colour service at VR Unisex Salon" },
        { src: "/images/services/makeup.webp", alt: "Makeup service at VR Unisex Salon" },
      ],
    },
  },

  siteMeta: {
    titleSuffix: "Premium Unisex Salon",
  },
};
