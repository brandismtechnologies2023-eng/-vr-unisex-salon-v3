import Image from "next/image";
import { Car, MapPin, TrainFront } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const perks = [
  { icon: TrainFront, label: "2 minutes' walk from Burjuman Metro Station" },
  { icon: MapPin, label: "Inside the 5-star Crown Park Hotel" },
  { icon: Car, label: "Free valet parking available" },
];

const photos = [
  { src: "/images/gallery/02.jpg", alt: "Precision haircut in progress at VR Unisex Salon" },
  { src: "/images/connect-with-us.webp", alt: "Stylist working on a client's hair at VR Unisex Salon" },
  { src: "/images/gallery/03.jpg", alt: "Manicure and pedicure at VR Unisex Salon" },
];

export default function AboutHero() {
  return (
    <section className="bg-primary/15">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        {/* Centered editorial intro rather than a text/image split. */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-third">
            About the Salon
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-secondary sm:text-5xl">
            More Than a Salon — A Beauty Experience
          </h1>
          <span className="mx-auto mt-6 block h-px w-16 bg-third/50" />
          <p className="mt-6 text-lg text-zinc-600">
            At {siteConfig.name}, beauty meets experience. Founded by brothers
            Vishal and Raju, with over 8 years in the industry, our team of
            passionate stylists and grooming experts focus on one thing —
            making you look and feel your best.
          </p>
          <p className="mt-4 text-zinc-600">
            Whether you walk in for a quick trim or settle in for a full colour
            and treatment appointment, every visit starts with a proper
            consultation — so the result suits your hair, your face shape and
            the way you actually live.
          </p>
        </div>

        {/* Staggered photo row: the centre image drops lower than its
            neighbours so the strip doesn't read as a plain grid. */}
        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5">
          {photos.map((photo, i) => (
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

      {/* Perks sit on their own band so the location facts read as facts,
          not bullet points buried under the copy. */}
      <div className="mt-16 border-t border-third/20 bg-white/50 sm:mt-24">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3 sm:divide-x sm:divide-third/20 sm:px-6 lg:px-8">
          {perks.map((perk) => (
            <li
              key={perk.label}
              className="flex items-center justify-center gap-3 text-center text-sm text-zinc-700"
            >
              <perk.icon className="h-5 w-5 shrink-0 text-third" strokeWidth={1.5} />
              {perk.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
