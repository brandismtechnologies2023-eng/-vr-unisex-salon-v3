import Image from "next/image";
import { Globe2, Heart, MapPin, ShieldCheck, Sparkles, Wand2, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { siteContent } from "@/lib/data";
import { getSetting } from "@/lib/content/settings";

const { common } = siteContent;

const featureIcons: Record<string, LucideIcon> = {
  Globe2,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wand2,
};

export default async function WhyChooseUs() {
  const content = await getSetting("whyChooseUs");
  return (
    <section className="bg-primary/25 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={content.title} subtitle={content.subtitle} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-full">
            <Image
              src="/images/why-choose-us.webp"
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {content.features.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? Sparkles;
              return (
                <Card key={feature.title}>
                  <Icon className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                  <h3 className="mt-4 font-semibold text-secondary">{feature.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/about" variant="outline">
            {common.learnMoreAboutUsLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
