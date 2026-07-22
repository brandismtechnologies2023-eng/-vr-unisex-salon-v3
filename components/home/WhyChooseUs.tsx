import Image from "next/image";
import { Globe2, Heart, MapPin, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";

const features = [
  {
    icon: Globe2,
    title: "International Expertise",
    description:
      "Years of international experience inspire every cut, colour, and beauty transformation.",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description:
      "Every service is tailored to your style, preferences, and individual beauty goals.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use trusted professional salon brands for healthy, long-lasting results.",
  },
  {
    icon: Wand2,
    title: "Modern Techniques",
    description:
      "Our team stays updated with the latest beauty trends and advanced salon techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description:
      "Strict hygiene standards ensure a clean, safe, and comfortable salon experience.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Conveniently located inside Crown Park Hotel, near BurJuman Metro with complimentary valet parking.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-primary/25 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose VR Unisex Salon"
          subtitle="Every visit to VR Unisex Salon is built around one promise-to deliver an experience that's as exceptional as the results."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-full">
            <Image
              src="/images/why-choose-us.webp"
              alt="Nail art and a relaxing facial treatment at VR Unisex Salon"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

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

        <div className="mt-12 flex justify-center">
          <Button href="/about" variant="outline">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
