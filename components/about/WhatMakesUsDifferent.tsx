import SectionHeading from "@/components/shared/SectionHeading";

const points = [
  {
    title: "An Exceptional Team of Experts",
    description:
      "Founded by brothers Vishal and Raju, our stylists and grooming experts bring over 8 years in the industry to every chair.",
  },
  {
    title: "The Latest Treatments & Technology",
    description:
      "From keratin care to skin glow therapies, we offer the newest hair, skin and grooming treatments using advanced products and tools.",
  },
  {
    title: "Proven Results",
    description:
      "Our clients return because they see the difference — a fresh haircut, flawless colour or glowing skin that speaks for itself.",
  },
  {
    title: "Hygiene, Every Time",
    description:
      "Sanitized tools and freshly cleaned stations for every single client, with no exceptions.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="What Sets Us Apart" title="What Makes Us Different" />

      {/* Oversized numerals instead of icon cards — echoes the salon's own
          numbered "what sets us apart" list. */}
      <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
        {points.map((point, i) => (
          <li
            key={point.title}
            className="flex gap-5 border-t border-third/20 pt-8"
          >
            <span className="text-4xl font-bold leading-none text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold text-secondary">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {point.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
