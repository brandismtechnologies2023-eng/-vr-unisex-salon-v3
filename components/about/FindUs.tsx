import { Clock, MapPin } from "lucide-react";
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export default function FindUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Find Us"
        title="Find Us in Burjuman"
        subtitle="Minutes from Burjuman Metro, inside the 5-star Crown Park Hotel. Walk-ins are welcome — booking ahead is recommended."
      />

      {/* Wide map with the details floating over it on desktop, stacking
          underneath on smaller screens. */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-zinc-100 shadow-sm">
          <iframe
            title={`${siteConfig.name} location`}
            src={siteConfig.mapEmbedUrl}
            className="h-80 w-full border-0 lg:h-120"
            loading="lazy"
          />
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg max-lg:mt-4 max-lg:border max-lg:border-zinc-100 lg:absolute lg:bottom-8 lg:left-8 lg:max-w-sm lg:p-8">
          <ul className="space-y-4 text-sm text-zinc-700">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-third" />
              {siteConfig.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-third" />
              <div className="space-y-0.5">
                {siteConfig.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>

          <Button
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="mt-6 w-full"
            icon={<MapPin className="h-4 w-4" />}
          >
            Open in Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
}
