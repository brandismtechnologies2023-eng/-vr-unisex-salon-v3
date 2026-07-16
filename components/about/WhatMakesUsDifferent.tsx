import { Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const points = [
  {
    icon: Users,
    title: "An Exceptional Team of Experts",
    description:
      "Founded by brothers Vishal and Raju, our stylists and grooming experts bring over 8 years in the industry to every chair.",
  },
  {
    icon: Sparkles,
    title: "The Latest Treatments & Technology",
    description:
      "From keratin care to skin glow therapies, we offer the newest hair, skin and grooming treatments using advanced products and tools.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Our clients return because they see the difference — a fresh haircut, flawless colour or glowing skin that speaks for itself.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene, Every Time",
    description:
      "Sanitized tools and freshly cleaned stations for every single client, with no exceptions.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="What Sets Us Apart" title="What Makes Us Different" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/40">
              <point.icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-semibold text-secondary">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
