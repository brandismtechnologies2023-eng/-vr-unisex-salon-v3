"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "@/components/shared/ReviewCard";
import { testimonials } from "@/lib/data";

const PAGE_SIZE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from real clients, straight from Google."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((testimonial) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-zinc-500">
              {page + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
