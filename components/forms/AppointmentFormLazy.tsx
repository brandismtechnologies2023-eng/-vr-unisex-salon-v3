"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// The booking form pulls in react-hook-form, zod and libphonenumber's country
// metadata — the single largest JS chunk on the site. It sits below the fold
// on the home page, so it's loaded only once the visitor scrolls near it
// rather than being parsed and hydrated on every page load.
const AppointmentForm = dynamic(() => import("@/components/forms/AppointmentForm"), {
  ssr: false,
});

export default function AppointmentFormLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      // Start loading before it's actually on screen so it's ready in time.
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Height is reserved so swapping the placeholder for the real form doesn't
  // shift the page.
  return (
    <div ref={ref} className="min-h-[36rem]">
      {show ? <AppointmentForm /> : <FormSkeleton />}
    </div>
  );
}

function FormSkeleton() {
  return (
    <div className="animate-pulse space-y-5" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="space-y-2">
          <div className="h-3 w-28 rounded bg-primary/20" />
          <div className="h-12 rounded-xl bg-primary/10" />
        </div>
      ))}
      <div className="h-12 rounded-full bg-primary/20" />
    </div>
  );
}
