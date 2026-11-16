import Image from "next/image";
import { MapPin } from "lucide-react";
import Button from "@/components/shared/Button";
import { getSetting } from "@/lib/content/settings";
import { mapLink } from "@/lib/site-config";

const photoSizes = "(min-width: 1024px) 30vw, 50vw";

export default async function MainBranch() {
  const [{ mainBranch: content }, contact] = await Promise.all([
    getSetting("about"),
    getSetting("contactInfo"),
  ]);
  const photos = content.photos.filter((photo) => photo.src.trim() !== "");
  if (!content.title.trim() && photos.length === 0) return null;

  return (
    <section className="bg-primary/15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
        <div className="text-center lg:col-span-5 lg:text-left">
          {content.eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-wider text-third">
              {content.eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-3xl font-bold text-secondary sm:text-4xl">
            {content.title}
          </h2>
          {content.paragraph && <p className="mt-4 text-zinc-600">{content.paragraph}</p>}
          {/* Inline icon so it stays beside the text when the address wraps. */}
          <p className="mt-5 text-sm text-zinc-700">
            <MapPin className="mr-1.5 inline h-4 w-4 align-[-3px] text-third" strokeWidth={1.5} />
            {contact.address}
          </p>
          {content.directionsLabel && (
            <Button
              href={mapLink(contact.address)}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="mt-6"
            >
              {content.directionsLabel}
            </Button>
          )}
        </div>

        {/* First photo runs the full height; the rest stack beside it. */}
        {photos.length > 0 && (
          <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 lg:col-span-7">
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 && photos.length > 1 ? "row-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photoSizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
