"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Carousel from "@/components/shared/Carousel";
import Modal from "@/components/shared/Modal";
import { galleryMedia } from "@/lib/data";

// Kept low enough to always produce at least 2 slides so the slider
// (arrows, dots, auto-play loop) stays active even with few items.
const MEDIA_PER_SLIDE = 5;
const AUTO_PLAY_INTERVAL = 4000;

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export default function Gallery() {
  const slides = chunk(galleryMedia, MEDIA_PER_SLIDE);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeMedia = galleryMedia.find((m) => m.id === activeId) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse Inside VR Salon"
        subtitle="Real transformations and moments from our salon floor."
      />

      <Carousel
        slides={slides}
        autoPlayInterval={AUTO_PLAY_INTERVAL}
        arrowLabel="photos"
        slideClassName="columns-2 gap-3 *:mb-3 sm:columns-3 lg:columns-4"
        renderSlide={(slideMedia) => (
          <>
            {slideMedia.map((media) => (
              <GalleryCard
                key={media.id}
                media={media}
                onClick={() => setActiveId(media.id)}
              />
            ))}
          </>
        )}
      />

      <Modal isOpen={!!activeMedia} onClose={() => setActiveId(null)}>
        {activeMedia && (
          <div className="max-h-[85vh] w-[90vw] max-w-2xl overflow-hidden rounded-xl bg-black">
            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                className="max-h-[85vh] w-full"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                width={activeMedia.width ?? 1200}
                height={activeMedia.height ?? 1200}
                className="max-h-[85vh] w-full object-contain"
              />
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
