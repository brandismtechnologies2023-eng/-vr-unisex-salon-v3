import SectionHeading from "@/components/shared/SectionHeading";

const points = [
  {
    title: "We Listen First",
    description:
      "Every appointment begins with understanding your needs, preferences, and expectations before making recommendations.",
  },
  {
    title: "We Create Thoughtfully",
    description:
      "Every haircut, beauty treatment, and transformation is approached with creativity, precision, and attention to detail.",
  },
  {
    title: "We Care Beyond the Appointment",
    description:
      "Our goal isn't simply to deliver great results today-it's to become the salon you'll confidently return to for years to come.",
  },
  {
    title: "We Use Trusted Products",
    description:
      "Every treatment is performed using carefully selected professional products to ensure healthy hair, beautiful skin, and long-lasting results.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title="The VR Promise" subtitle="Luxury isn't defined by the services we offer—it's reflected in how we make every client feel. These values guide every consultation, every recommendation, and every experience we create." />

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
