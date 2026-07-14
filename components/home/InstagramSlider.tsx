"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InstagramPostCard from "@/components/shared/InstagramPostCard";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

interface InstagramSliderProps {
  posts: InstagramPost[];
  isLive: boolean;
}

export default function InstagramSlider({ posts, isLive }: InstagramSliderProps) {
  const midpoint = Math.ceil(posts.length / 2);
  const slides = [posts.slice(0, midpoint), posts.slice(midpoint)];

  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > slideIndex ? 1 : -1);
    setSlideIndex((index + slides.length) % slides.length);
  };

  return (
    <div>
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
              {slides[slideIndex].map((post, i) => (
                <InstagramPostCard
                  key={post.id}
                  post={post}
                  href={isLive ? post.permalink : siteConfig.instagramUrl}
                  className={i % 3 === 0 ? "h-72" : "h-48"}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => goTo(slideIndex - 1)}
          aria-label="Previous posts"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-rose-50 hover:text-rose-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(slideIndex + 1)}
          aria-label="Next posts"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-rose-50 hover:text-rose-600"
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
              i === slideIndex ? "w-6 bg-rose-600" : "w-2.5 bg-zinc-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
