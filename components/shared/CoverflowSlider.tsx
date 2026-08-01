"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";

interface CoverflowSlide {
  src: string;
  title: string;
}

interface CoverflowSliderProps {
  slides: CoverflowSlide[];
  interval?: number;
}

// Horizontal distance (px) a drag must cover to flip a card.
const SWIPE_THRESHOLD = 50;
// Movement (px) past which a pointer gesture counts as a drag, not a click.
const DRAG_TOLERANCE = 8;
const MOBILE_BREAKPOINT = 640;

// Smaller cards and a tighter fan on phones so the splayed side cards
// stay inside the viewport instead of being clipped at the screen edge.
const LAYOUTS = {
  mobile: { cardW: 200, cardH: 280, boxH: 320, txStep: 15, tyStep: 5, rotStep: 6 },
  desktop: { cardW: 280, cardH: 380, boxH: 420, txStep: 32, tyStep: 6, rotStep: 9 },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// A fanned "coverflow" stack: the active card sits front and centre while
// the rest splay symmetrically behind it (odd ranks fan right, even ranks
// fan left), pivoting from their bottom edge like a bouquet of cards.
// Supports mouse-drag and touch-swipe to change the front card.
export default function CoverflowSlider({ slides, interval = 3200 }: CoverflowSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const isMobile = useIsMobile();
  const layout = isMobile ? LAYOUTS.mobile : LAYOUTS.desktop;

  const startXRef = useRef<number | null>(null);
  // Set once a gesture moves past the tolerance, so the card's onClick can
  // tell a drag from a real tap and skip selecting on drag-release.
  const draggedRef = useRef(false);

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, count, interval]);

  const goNext = () => setActive((a) => (a + 1) % count);
  const goPrev = () => setActive((a) => (a - 1 + count) % count);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
    draggedRef.current = false;
    setPaused(true);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;
    if (Math.abs(e.clientX - startXRef.current) > DRAG_TOLERANCE) {
      draggedRef.current = true;
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (startXRef.current !== null) {
      const delta = e.clientX - startXRef.current;
      if (delta <= -SWIPE_THRESHOLD) goNext();
      else if (delta >= SWIPE_THRESHOLD) goPrev();
    }
    startXRef.current = null;
    setPaused(false);
  };

  const onPointerCancel = () => {
    startXRef.current = null;
    setPaused(false);
  };

  return (
    <div
      className="perspective-distant relative mx-auto flex w-full max-w-sm cursor-grab touch-pan-y select-none items-center justify-center active:cursor-grabbing"
      style={{ height: layout.boxH }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
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
          rot = side * depth * layout.rotStep;
          tx = side * depth * layout.txStep;
          ty = depth * layout.tyStep;
          scale = 1 - depth * 0.08;
          z = count - depth;
        }

        const isFront = rank === 0;

        return (
          <button
            key={slide.src}
            type="button"
            onClick={() => {
              if (draggedRef.current) return;
              setActive(i);
            }}
            aria-label={`Show ${slide.title}`}
            className="absolute left-1/2 top-1/2 overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-out"
            style={{
              width: layout.cardW,
              height: layout.cardH,
              transformOrigin: "50% 100%",
              transform: `translate(-50%, -50%) translateX(${tx}px) translateY(${ty}px) rotate(${rot}deg) scale(${scale})`,
              zIndex: z,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              sizes={`${layout.cardW}px`}
              // The front card is the hero's LCP element — preload it so the
              // browser doesn't discover it only after hydration.
              priority={isFront}
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
