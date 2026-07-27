"use client";

import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewsPeekSlider from "@/components/home/ReviewsPeekSlider";
import { GoogleIcon } from "@/components/shared/SocialIcons";
import { siteContent, testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import type { Testimonial } from "@/types";

const defaultContent = siteContent.testimonials;

interface TestimonialsProps {
  // Defaults to the site-wide homepage set; service pages pass their own
  // curated reviews instead.
  reviews?: Testimonial[];
  heading?: typeof defaultContent;
}

export default function Testimonials({
  reviews = testimonials,
  heading: content = defaultContent,
}: TestimonialsProps) {
  return (
    <section className="bg-primary/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
            <GoogleIcon className="h-4 w-4" />
            <span className="text-sm font-semibold text-secondary">{content.badgeLabel}</span>
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-secondary">{siteConfig.rating}</span>
            <span className="text-sm text-zinc-500">({siteConfig.reviewCount}+)</span>
          </div>
        </div>

        <SectionHeading eyebrow={content.eyebrow} title={content.title} />

        <ReviewsPeekSlider reviews={reviews} />

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">{content.readAllText}</p>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-third/40 bg-white px-5 py-2.5 text-sm font-medium text-secondary hover:bg-primary/40"
          >
            <GoogleIcon className="h-4 w-4" />
            {content.seeAllLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
