"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import { services, siteContent } from "@/lib/data";

const defaultContent = siteContent.servicesSection;

interface ServicesProps {
  // Omit to show every service — the home page trims to a teaser that can
  // be expanded in place.
  limit?: number;
  showViewAll?: boolean;
  as?: "h1" | "h2";
  // Set when a page already renders its own hero heading (e.g. the full
  // services page) so this section doesn't repeat it.
  hideHeading?: boolean;
  heading?: typeof defaultContent;
}

export default function Services({
  limit,
  showViewAll = false,
  as,
  hideHeading = false,
  heading: content = defaultContent,
}: ServicesProps) {
  const [expanded, setExpanded] = useState(false);
  const isTrimmed = limit !== undefined && !expanded;
  const shown = isTrimmed ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {!hideHeading && (
        <SectionHeading
          as={as}
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
        />
      )}

      {/* Flex-wrap rather than grid so a trailing partial row centres
          instead of hugging the left edge. */}
      <div className="flex flex-wrap justify-center gap-6">
        {shown.map((service, i) => {
          // Only the newly revealed cards animate; the initial six are
          // already on screen and shouldn't re-run on expand.
          const isRevealed = limit !== undefined && i >= limit;

          return (
            <motion.div
              key={service.id}
              className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
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
            {content.viewAllLabel}
          </Button>
        </div>
      )}
    </section>
  );
}
