import { Clock, MapPin } from "lucide-react";
import Button from "@/components/shared/Button";
import { siteConfig } from "@/lib/site-config";

export default function FindUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-third">
            Find Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Find Us in Burjuman
          </h2>
          <p className="mt-4 text-zinc-600">
            We&apos;re inside the 5-star Crown Park Hotel, two minutes&apos; walk
            from Burjuman Metro Station, with free valet parking. Walk-ins are
            welcome — booking ahead is recommended.
          </p>

          <ul className="mt-6 space-y-4 text-sm text-zinc-700">
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
            variant="outline"
            className="mt-8"
            icon={<MapPin className="h-4 w-4" />}
          >
            Open in Google Maps
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-100 shadow-sm">
          <iframe
            title={`${siteConfig.name} location`}
            src={siteConfig.mapEmbedUrl}
            className="h-96 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
