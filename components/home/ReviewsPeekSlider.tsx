"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "@/components/shared/ReviewCard";
import { useLoopingSlider } from "@/hooks/useLoopingSlider";
import type { Testimonial } from "@/types";

// Shows 3 reviews at once on desktop (1 on mobile) but steps one review
// at a time instead of jumping a full page, so enough clones are needed
// on each end to keep the visible window filled through the loop wrap.
const CLONE_COUNT = 3;
const AUTO_PLAY_INTERVAL = 4000;

interface ReviewsPeekSliderProps {
  reviews: Testimonial[];
}

export default function ReviewsPeekSlider({ reviews }: ReviewsPeekSliderProps) {
  const {
    loop,
    trackRef,
    trackIndex,
    slideIndex,
    withTransition,
    slideGap,
    slideDuration,
    stepDistance,
    canDrag,
    goTo,
    step,
    onDragEnd,
    setIsHovering,
  } = useLoopingSlider({
    slideCount: reviews.length,
    cloneCount: CLONE_COUNT,
    autoPlayInterval: AUTO_PLAY_INTERVAL,
  });

  if (reviews.length === 0) return null;

  const trackItems = loop
    ? [
        ...reviews.slice(-CLONE_COUNT),
        ...reviews,
        ...reviews.slice(0, CLONE_COUNT),
      ]
    : reviews;

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="relative sm:px-12 lg:px-14">
        <div className="overflow-hidden">
          <motion.div
            className="flex touch-pan-y pb-3"
            style={{ gap: slideGap }}
            drag={canDrag ? "x" : false}
            dragConstraints={{ left: -(trackItems.length - 1) * stepDistance, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -trackIndex * stepDistance }}
            transition={
              withTransition ? { ease: "easeInOut", duration: slideDuration } : { duration: 0 }
            }
            onDragEnd={onDragEnd}
          >
            {trackItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                ref={idx === 0 ? trackRef : undefined}
                className="w-full shrink-0 sm:w-1/2 lg:w-1/3"
              >
                <ReviewCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

        {reviews.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous review"
              className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next review"
              className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {reviews.length > 1 && (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === slideIndex ? "w-6 bg-secondary" : "w-2.5 bg-third/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
