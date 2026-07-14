import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "text-zinc-200"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm text-zinc-600">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-600">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{testimonial.name}</p>
          {testimonial.source === "google" && (
            <p className="text-xs text-zinc-400">Google Review</p>
          )}
        </div>
      </div>
    </div>
  );
}
