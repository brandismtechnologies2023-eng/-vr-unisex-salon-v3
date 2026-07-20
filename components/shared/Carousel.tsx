"use client";

import type { MutableRefObject, ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLoopingSlider } from "@/hooks/useLoopingSlider";

interface SlideMeta {
  isActive: boolean;
  justDraggedRef: MutableRefObject<boolean>;
}

interface CarouselProps<T> {
  slides: T[][];
  renderSlide: (items: T[], meta: SlideMeta) => ReactNode;
  autoPlayInterval?: number;
  pausedExternally?: boolean;
  slideClassName?: string;
  arrowLabel?: string;
  // Flip the pagination dots to light colours for placement on a dark
  // background (the arrows are already white pills, so they stay).
  onDark?: boolean;
}

export default function Carousel<T>({
  slides,
  renderSlide,
  autoPlayInterval,
  pausedExternally,
  slideClassName = "",
  arrowLabel = "items",
  onDark = false,
}: CarouselProps<T>) {
  const {
    loop,
    trackRef,
    trackWidth,
    trackIndex,
    slideIndex,
    withTransition,
    slideGap,
    slideDuration,
    stepDistance,
    canDrag,
    justDraggedRef,
    goTo,
    step,
    onDragEnd,
    setIsHovering,
  } = useLoopingSlider({
    slideCount: slides.length,
    autoPlayInterval,
    pausedExternally,
  });

  if (slides.length === 0) return null;

  const trackSlides = loop ? [slides[slides.length - 1], ...slides, slides[0]] : slides;

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="relative sm:px-12 lg:px-14">
        <div ref={trackRef} className="overflow-hidden">
          <motion.div
            className="flex touch-pan-y pb-3"
            style={{ gap: slideGap }}
            drag={canDrag ? "x" : false}
            dragConstraints={{ left: -(trackSlides.length - 1) * stepDistance, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -trackIndex * stepDistance }}
            transition={
              withTransition ? { ease: "easeInOut", duration: slideDuration } : { duration: 0 }
            }
            onDragEnd={onDragEnd}
          >
            {trackSlides.map((items, idx) => (
              <div
                key={idx}
                className={`w-full shrink-0 ${slideClassName}`}
                style={{ width: trackWidth || "100%" }}
              >
                {renderSlide(items, { isActive: idx === trackIndex, justDraggedRef })}
              </div>
            ))}
          </motion.div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={`Previous ${arrowLabel}`}
              className="absolute left-0 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={`Next ${arrowLabel}`}
              className="absolute right-0 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-primary/40 hover:text-secondary sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${arrowLabel} group ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === slideIndex
                  ? onDark
                    ? "w-6 bg-primary"
                    : "w-6 bg-secondary"
                  : onDark
                    ? "w-2.5 bg-white/30"
                    : "w-2.5 bg-third/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
