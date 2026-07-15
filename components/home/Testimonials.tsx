"use client";

import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "@/components/shared/ReviewCard";
import Carousel from "@/components/shared/Carousel";
import { GoogleIcon } from "@/components/shared/SocialIcons";
import { testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const REVIEWS_PER_SLIDE = 3;
const AUTO_PLAY_INTERVAL = 5000;

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export default function Testimonials() {
  const slides = chunk(testimonials, REVIEWS_PER_SLIDE);

  return (
    <section className="bg-primary/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
            <GoogleIcon className="h-4 w-4" />
            <span className="text-sm font-semibold text-secondary">Google Reviews</span>
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-secondary">{siteConfig.rating}</span>
            <span className="text-sm text-zinc-500">({siteConfig.reviewCount}+)</span>
          </div>
        </div>

        <SectionHeading eyebrow="Reviews" title="What our Burjuman clients say" />

        <Carousel
          slides={slides}
          autoPlayInterval={AUTO_PLAY_INTERVAL}
          arrowLabel="reviews"
          slideClassName="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          renderSlide={(slideReviews) => (
            <>
              {slideReviews.map((testimonial) => (
                <ReviewCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </>
          )}
        />

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">Read all our verified reviews on Google</p>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-third/40 bg-white px-5 py-2.5 text-sm font-medium text-secondary hover:bg-primary/40"
          >
            <GoogleIcon className="h-4 w-4" />
            See All Google Reviews
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
