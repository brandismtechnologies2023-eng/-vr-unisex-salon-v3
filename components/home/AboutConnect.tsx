import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/shared/Button";
import { siteContent } from "@/lib/data";

const content = siteContent.aboutConnect;
const { common } = siteContent;

export default function AboutConnect() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-2xl lg:order-2 lg:h-105">
          <Image
            src="/images/connect-with-us.webp"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-wider text-third">
            {content.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-zinc-600">{content.paragraph}</p>
          <ul className="mt-6 space-y-3">
            {content.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-zinc-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-secondary" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline" className="mt-8">
            {common.learnMoreAboutUsLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
