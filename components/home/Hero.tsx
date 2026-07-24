"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";
import CoverflowSlider from "@/components/shared/CoverflowSlider";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { services, siteContent } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";

const { hero: heroContent, common } = siteContent;

const heroSlideSlugs = [
  "womens-haircut-in-dubai",
  "professional-hair-colour-in-dubai",
  "korean-head-spa-in-dubai",
  "professional-makeup-services-in-dubai",
  "nail-extensions-in-dubai",
];

const heroSlides = heroSlideSlugs.map((slug) => {
  const service = services.find((s) => s.slug === slug);
  return {
    // `image` overrides keep pointing at the original filenames — renaming
    // the slug doesn't rename the file on disk.
    src: service?.image ?? `/images/services/${slug}.webp`,
    title: service?.title ?? slug,
  };
});

// Dark diagonal gradient over the navy base: a soft blush glow at the
// top-right corner and a muted mauve glow at the bottom-left, fading into
// deep navy through the middle for a rich, low-key backdrop.
const heroGradient =
  "linear-gradient(to bottom left, rgba(236,215,208,0.22) 0%, rgba(236,215,208,0.10) 14%, rgba(39,41,57,0) 45%, rgba(39,41,57,0) 55%, rgba(178,157,160,0.18) 100%)";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0" style={{ background: heroGradient }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left — content */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary/70" />
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {heroContent.titleLine1}
            <br />
            <span className="text-primary">{heroContent.titleLine2}</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-white"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<CalendarCheck className="h-5 w-5" />}
            >
              {common.bookAppointmentLabel}
            </Button>
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              {common.whatsappUsLabel}
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
