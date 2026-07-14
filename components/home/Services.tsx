import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Services"
        title="Everything You Need, In One Place"
        subtitle="From haircuts to bridal makeup, explore our full range of salon services."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="outline">
          View All Services
        </Button>
      </div>
    </section>
  );
}
