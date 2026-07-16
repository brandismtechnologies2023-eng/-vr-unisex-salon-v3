"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CoverflowSlide {
  src: string;
  title: string;
}

interface CoverflowSliderProps {
  slides: CoverflowSlide[];
  interval?: number;
}

// A fanned "coverflow" stack: the active card sits front and centre while
// the rest splay symmetrically behind it (odd ranks fan right, even ranks
// fan left), pivoting from their bottom edge like a bouquet of cards.
export default function CoverflowSlider({ slides, interval = 3200 }: CoverflowSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, count, interval]);

  return (
    <div
      className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center [perspective:1200px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const rank = (i - active + count) % count;

        let tx = 0;
        let ty = 0;
        let rot = 0;
        let scale = 1;
        let z = count;

        if (rank !== 0) {
          const side = rank % 2 === 1 ? 1 : -1;
          const depth = Math.ceil(rank / 2);
          rot = side * depth * 9;
          tx = side * depth * 32;
          ty = depth * 6;
          scale = 1 - depth * 0.08;
          z = count - depth;
        }

        const isFront = rank === 0;

        return (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${slide.title}`}
            className="absolute left-1/2 top-1/2 h-[380px] w-[280px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-out"
            style={{
              transformOrigin: "50% 100%",
              transform: `translate(-50%, -50%) translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
              zIndex: z,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              sizes="280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/10 to-transparent" />
            <span
              className={`absolute inset-x-0 bottom-0 p-5 text-left text-lg font-semibold text-white transition-opacity duration-300 ${
                isFront ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
