"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Scissors, Sparkles, Star } from "lucide-react";
import Button from "@/components/shared/Button";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const stats = [
  { value: `${siteConfig.rating}★`, label: "Google rating" },
  { value: `${siteConfig.reviewCount}+`, label: "Happy clients" },
  { value: "12+", label: "Signature services" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary/25">
      {/* Soft decorative accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-third/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left — content */}
        <div>
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-third/30 bg-white/70 px-4 py-1.5 text-sm font-medium text-secondary backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-third" />
            Premium Unisex Salon in Burjuman, Dubai
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl"
          >
            Look Good,
            <br />
            Feel Great at{" "}
            <span className="relative whitespace-nowrap text-third">
              VR Salon
              <svg
                className="absolute -bottom-2 left-0 w-full text-third/40"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9c40-6 156-6 196 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg text-zinc-600"
          >
            Expert stylists, premium products and a luxury unisex salon
            experience — hair, skin, nails and beauty, all under one roof.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
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

          <motion.dl
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-third/20 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-secondary sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — framed image with floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-2xl">
            <Image
              src="/images/hero.webp"
              alt={`${siteConfig.name} — hairstyling in progress`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary/30 to-transparent" />
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-secondary">{siteConfig.rating} Rating</p>
              <p className="text-xs text-zinc-500">{siteConfig.reviewCount}+ happy clients</p>
            </div>
          </div>

          {/* Floating service pill */}
          <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-full bg-secondary px-4 py-2 shadow-lg sm:-right-4">
            <Scissors className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white">Hair · Skin · Nails</span>
          </div>

          {/* Floating location chip */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-secondary shadow-md backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-third" />
            Crown Park Hotel, Burjuman
          </div>
        </motion.div>
      </div>
    </section>
  );
}
