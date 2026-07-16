import Image from "next/image";
import { Car, MapPin, TrainFront } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const perks = [
  { icon: TrainFront, label: "2 minutes' walk from Burjuman Metro Station" },
  { icon: MapPin, label: "Inside the 5-star Crown Park Hotel" },
  { icon: Car, label: "Free valet parking available" },
];

export default function AboutHero() {
  return (
    <section className="bg-primary/15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-third">
            About the Salon
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-secondary sm:text-5xl">
            More Than a Salon — A Beauty Experience
          </h1>

          <p className="mt-6 text-zinc-600">
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

          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li key={perk.label} className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                  <perk.icon className="h-4 w-4 text-secondary" strokeWidth={1.5} />
                </span>
                {perk.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Collage: two stacked on top, one wide beneath. */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/02.jpg"
              alt="Precision haircut in progress at VR Unisex Salon"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/03.jpg"
              alt="Manicure and pedicure at VR Unisex Salon"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="relative col-span-2 aspect-16/9 overflow-hidden rounded-2xl">
            <Image
              src="/images/connect-with-us.webp"
              alt="Stylist working on a client's hair at VR Unisex Salon"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
