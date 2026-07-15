import { CalendarClock, Gem, ShieldCheck, Sparkles, Users } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

const features = [
  {
    icon: Gem,
    title: "Premium Products",
    description: "We use only trusted, high-quality brands on every client.",
  },
  {
    icon: Users,
    title: "Expert Stylists",
    description: "Our team brings years of training and hands-on experience.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    description: "Sanitized tools and clean stations for every appointment.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description: "Relax in a calm, comfortable space designed around you.",
  },
  {
    icon: CalendarClock,
    title: "Easy Booking",
    description: "Book in seconds via WhatsApp, call, or our website.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-primary/25 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Makes VR Salon Different"
          subtitle="A better salon experience, from the moment you walk in to the moment you leave."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ImagePlaceholder className="h-80 rounded-2xl lg:h-full" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title}>
                <feature.icon className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-secondary">{feature.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
