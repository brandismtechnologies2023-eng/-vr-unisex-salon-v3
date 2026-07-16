"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";
import CoverflowSlider from "@/components/shared/CoverflowSlider";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { services } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";

const heroSlideSlugs = [
  "women-haircut",
  "hair-color",
  "korean-head-spa",
  "makeup",
  "nail-extensions",
];

const heroSlides = heroSlideSlugs.map((slug) => {
  const service = services.find((s) => s.slug === slug);
  return {
    src: `/images/services/${slug}.webp`,
    title: service?.title ?? slug,
  };
});

// Diagonal gradient: soft blush at the top-right and bottom-left corners
// with a faint navy wash through the middle — kept low-opacity so it reads
// as an airy tint rather than a solid fill.
const heroGradient =
  "linear-gradient(to bottom left, rgba(236,215,208,0.55) 0%, rgba(236,215,208,0.55) 10%, rgba(39,41,57,0.10) 50%, rgba(236,215,208,0.55) 90%, rgba(236,215,208,0.55) 100%)";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0" style={{ background: heroGradient }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left — content */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-third" />
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-third">
              <Sparkles className="h-4 w-4" />
              Unisex Salon · Burjuman, Dubai
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] text-secondary sm:text-6xl lg:text-7xl"
          >
            Look Good,
            <br />
            Feel Great at <span className="text-third">VR Salon</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-zinc-600"
          >
            Expert stylists, premium products and a luxury unisex salon
            experience — hair, skin, nails and beauty, all under one roof.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg" icon={<CalendarCheck className="h-5 w-5" />}>
              Book Appointment
            </Button>
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>

        {/* Right — coverflow slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CoverflowSlider slides={heroSlides} />
        </motion.div>
      </div>
    </section>
  );
}
