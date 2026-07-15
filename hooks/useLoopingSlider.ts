"use client";

import { useEffect, useRef, useState } from "react";
import type { PanInfo } from "motion-dom";

interface UseLoopingSliderOptions {
  slideCount: number;
  autoPlayInterval?: number;
  slideGap?: number;
  swipeThreshold?: number;
  dragClickThreshold?: number;
  slideDuration?: number;
  pausedExternally?: boolean;
}

// Shared carousel mechanics: a real sliding track (not fade), seamless
// infinite loop via cloned boundary slides, drag/swipe with click
// suppression, and auto-play that pauses on hover or when told to.
export function useLoopingSlider({
  slideCount,
  autoPlayInterval = 0,
  slideGap = 16,
  swipeThreshold = 60,
  dragClickThreshold = 5,
  slideDuration = 0.45,
  pausedExternally = false,
}: UseLoopingSliderOptions) {
  const loop = slideCount > 1;

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [trackIndex, setTrackIndex] = useState(loop ? 1 : 0);
  const [withTransition, setWithTransition] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const justDraggedRef = useRef(false);

  const slideIndex = loop ? (trackIndex - 1 + slideCount) % slideCount : trackIndex;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setTrackWidth(el.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    setWithTransition(true);
    setTrackIndex(loop ? index + 1 : index);
  };

  const step = (delta: number) => {
    setWithTransition(true);
    setTrackIndex((i) => i + delta);
  };

  useEffect(() => {
    if (!loop || isHovering || pausedExternally || !autoPlayInterval) return;
    const timer = setInterval(() => step(1), autoPlayInterval);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loop, isHovering, pausedExternally, autoPlayInterval]);

  // Seamlessly reset from a cloned end slide back to the matching real
  // slide once the slide-in has had time to finish. This runs off our own
  // timer (not framer-motion's onAnimationComplete) because that event can
  // fire against a stale trackIndex when auto-play advances again before it
  // resolves, occasionally sliding the track out of view into blank space.
  useEffect(() => {
    if (!loop) return;
    if (trackIndex !== 0 && trackIndex !== slideCount + 1) return;
    const timeout = window.setTimeout(() => {
      setWithTransition(false);
      setTrackIndex(trackIndex === 0 ? slideCount : 1);
    }, slideDuration * 1000 + 30);
    return () => window.clearTimeout(timeout);
  }, [trackIndex, loop, slideCount, slideDuration]);

  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  const stepDistance = trackWidth + slideGap;
  const canDrag = loop && trackWidth > 0;

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > dragClickThreshold) {
      justDraggedRef.current = true;
      window.setTimeout(() => {
        justDraggedRef.current = false;
      }, 150);
    }
    if (info.offset.x < -swipeThreshold) step(1);
    else if (info.offset.x > swipeThreshold) step(-1);
  };

  return {
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
  };
}
