import { Check } from "lucide-react";
import Button from "@/components/shared/Button";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

const features = [
  "Certified & experienced stylists",
  "Premium, cruelty-free products",
  "Hygienic, sanitized tools & stations",
  "Personalized consultations",
];

export default function AboutConnect() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ImagePlaceholder className="h-80 rounded-2xl lg:h-[420px]" />

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-rose-600">
            Connect With Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
            More Than a Salon — A Complete Beauty Experience
          </h2>
          <p className="mt-4 text-zinc-600">
            For years, VR Unisex Salon has been dedicated to helping clients
            look and feel their best, combining skilled craftsmanship with a
            warm, welcoming atmosphere.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100">
                  <Check className="h-3 w-3 text-rose-600" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline" className="mt-8">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
