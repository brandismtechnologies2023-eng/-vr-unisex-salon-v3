"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import Button from "@/components/shared/Button";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { services } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";

// The marquee track renders this list twice; keeping it here (not inline)
// makes the two copies identical for a seamless -50% loop.
const marqueeItems = services.map((s) => s.title);

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt={`${siteConfig.name} — hairstyling in progress`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-secondary/90 via-secondary/60 to-secondary/20" />
      <div className="absolute inset-0 bg-linear-to-t from-secondary/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-primary/70" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Unisex Salon · Burjuman, Dubai
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Look Good,
            <br />
            Feel Great at{" "}
            <span className="text-primary">VR Salon</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-zinc-200"
          >
            Expert stylists, premium products and a luxury unisex salon
            experience — hair, skin, nails and beauty, all under one roof.
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
      </div>

      {/* Service marquee */}
      <div className="relative border-t border-white/15 bg-secondary/40 py-5 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex shrink-0 items-center gap-8">
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-third" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
