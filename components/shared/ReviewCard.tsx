import { ExternalLink, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { GoogleIcon } from "./SocialIcons";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const subtitle = [testimonial.service, testimonial.location].filter(Boolean).join(" · ");

  return (
    <div className="flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-secondary">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
            {subtitle && <p className="text-xs text-zinc-500">{subtitle}</p>}
          </div>
        </div>
        <GoogleIcon className="h-5 w-5 shrink-0" />
      </div>

      <div className="mt-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-zinc-200 text-zinc-200"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm text-zinc-600">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <a
        href={siteConfig.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline"
      >
        Verified on Google
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
