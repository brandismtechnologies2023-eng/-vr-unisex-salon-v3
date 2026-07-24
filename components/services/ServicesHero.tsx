import Image from "next/image";
import { siteContent } from "@/lib/data";

const content = siteContent.servicesPage.hero;

export default function ServicesHero() {
  return (
    <section className="bg-primary/15">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-8xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-third">
            {content.eyebrow}
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-secondary sm:text-5xl">
            {content.title}
          </h1>
          <span className="mx-auto mt-6 block h-px w-16 bg-third/50" />
          <p className="mt-6 text-lg text-zinc-600">{content.description}</p>
        </div>

        {/* Staggered photo row: the centre image drops lower than its
            neighbours so the strip doesn't read as a plain grid. */}
        <div className="mt-14 grid grid-cols-3 gap-3 pb-16 sm:gap-5 lg:pb-24">
          {content.photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative aspect-3/4 overflow-hidden rounded-2xl sm:aspect-square ${
                i === 1 ? "translate-y-6 sm:translate-y-10" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 33vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
