"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Modal from "@/components/shared/Modal";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeImage = galleryImages.find((img) => img.id === activeId) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse Inside VR Salon"
        subtitle="Real transformations and moments from our salon floor."
      />

      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {galleryImages.map((image, i) => (
          <GalleryCard
            key={image.id}
            image={image}
            onClick={() => setActiveId(image.id)}
            className={i % 4 === 0 ? "h-72" : "h-48"}
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
