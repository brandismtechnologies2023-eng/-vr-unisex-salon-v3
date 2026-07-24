import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, siteContent } from "@/lib/data";

const content = siteContent.about.services;

export default function AboutServices() {
  const midpoint = Math.ceil(services.length / 2);
  const columns = [services.slice(0, midpoint), services.slice(midpoint)];

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Written inline rather than via SectionHeading: this band is dark,
            so the type needs inverted colours. */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-third">
            {content.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-zinc-400">{content.subtitle}</p>
        </div>

        {/* Reads as a salon menu — divided rows rather than a card grid. */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-14 md:grid-cols-2">
          {columns.map((column, i) => (
            <ul key={i} className="divide-y divide-white/10 border-t border-white/10">
              {column.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <span>
                      <span className="block font-semibold text-white transition-colors group-hover:text-primary">
                        {service.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-zinc-400">
                        {service.description}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-third transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
