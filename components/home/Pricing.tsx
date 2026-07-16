import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import { pricingPackages } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function Pricing() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Popular Packages"
          subtitle="Bundled packages for the best value, or book individual services à la carte."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                pkg.popular
                  ? "border-secondary bg-white shadow-lg"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-secondary">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-bold text-secondary">
                {siteConfig.currency} {pkg.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600">
                    <Check className="h-4 w-4 shrink-0 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                Book This Package
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Looking for something specific?{" "}
          <Link href="/services" className="font-medium text-secondary">
            Browse individual services
          </Link>
        </p>
      </div>
    </section>
  );
}
