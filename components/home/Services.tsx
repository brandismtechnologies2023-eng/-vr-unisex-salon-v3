import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import { services } from "@/lib/data";

interface ServicesProps {
  // Omit to show every service — the home page trims to a teaser.
  limit?: number;
  showViewAll?: boolean;
  as?: "h1" | "h2";
}

export default function Services({ limit, showViewAll = false, as }: ServicesProps) {
  const shown = limit ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        as={as}
        eyebrow="Our Services"
        title="Everything You Need, In One Place"
        subtitle="From haircuts to bridal makeup, explore our full range of salon services."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      )}
    </section>
  );
}
