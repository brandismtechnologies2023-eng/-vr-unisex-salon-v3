import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";

export default function AboutServices() {
  return (
    <section className="bg-primary/15 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialist Treatments We Offer"
          subtitle="In-depth guides for every service we provide — tap any one to see what's included, the options and FAQs."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-third">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {service.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-secondary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
