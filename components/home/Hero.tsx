"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Star } from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt={`${siteConfig.name} — hairstyling in progress`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {siteConfig.rating} rating from {siteConfig.reviewCount}+ happy clients
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          Look Good, Feel Great at {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-zinc-100"
        >
          Expert stylists, premium products and a luxury unisex salon
          experience — hair, skin, nails and beauty, all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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
            variant="secondary"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            WhatsApp Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
