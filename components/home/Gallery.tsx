"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Modal from "@/components/shared/Modal";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { galleryImages } from "@/lib/data";

const midpoint = Math.ceil(galleryImages.length / 2);
const slides = [galleryImages.slice(0, midpoint), galleryImages.slice(midpoint)];

export default function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeImage = galleryImages.find((img) => img.id === activeId) ?? null;

  const goTo = (index: number) => {
    setDirection(index > slideIndex ? 1 : -1);
    setSlideIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse Inside VR Salon"
        subtitle="Real transformations and moments from our salon floor."
      />

      <div className="relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slideIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.35 }}
              className="columns-2 gap-4 *:mb-4"
            >
              {slides[slideIndex].map((image, i) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  onClick={() => setActiveId(image.id)}
                  className={i % 3 === 0 ? "h-72" : "h-48"}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => goTo(slideIndex - 1)}
          aria-label="Previous photos"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(slideIndex + 1)}
          aria-label="Next photos"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to grid ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === slideIndex ? "w-6 bg-secondary" : "w-2.5 bg-third/30"
            }`}
          />
        ))}
      </div>

      <Modal isOpen={!!activeImage} onClose={() => setActiveId(null)}>
        {activeImage && (
          <ImagePlaceholder className="h-[70vh] w-[80vw] max-w-2xl rounded-xl" />
        )}
      </Modal>
    </section>
  );
}
