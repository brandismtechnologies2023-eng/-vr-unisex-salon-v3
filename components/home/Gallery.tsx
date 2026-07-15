"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Carousel from "@/components/shared/Carousel";
import Modal from "@/components/shared/Modal";
import { galleryMedia } from "@/lib/data";

// High enough that all current media fits in one dense grid; once more
// photos/videos are added this will automatically start paginating.
const MEDIA_PER_SLIDE = 16;

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
        arrowLabel="photos"
        slideClassName="columns-2 gap-3 *:mb-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6"
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
