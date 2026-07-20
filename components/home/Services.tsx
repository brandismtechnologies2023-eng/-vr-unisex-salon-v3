"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import { services } from "@/lib/data";

interface ServicesProps {
  // Omit to show every service — the home page trims to a teaser that can
  // be expanded in place.
  limit?: number;
  showViewAll?: boolean;
  as?: "h1" | "h2";
}

export default function Services({ limit, showViewAll = false, as }: ServicesProps) {
  const [expanded, setExpanded] = useState(false);
  const isTrimmed = limit !== undefined && !expanded;
  const shown = isTrimmed ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        as={as}
        eyebrow="Our Services"
        title="Everything You Need, In One Place"
        subtitle="From haircuts to bridal makeup, explore our full range of salon services."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((service, i) => {
          // Only the newly revealed cards animate; the initial six are
          // already on screen and shouldn't re-run on expand.
          const isRevealed = limit !== undefined && i >= limit;

          return (
            <motion.div
              key={service.id}
              className="h-full"
              initial={isRevealed ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: isRevealed ? (i - limit) * 0.05 : 0,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          );
        })}
      </div>

      {showViewAll && !expanded && (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" onClick={() => setExpanded(true)}>
            View All Services
          </Button>
        </div>
      )}
    </section>
  );
}
