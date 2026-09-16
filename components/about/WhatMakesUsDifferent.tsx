import SectionHeading from "@/components/shared/SectionHeading";
import { getSetting } from "@/lib/content/settings";

export default async function WhatMakesUsDifferent() {
  const content = await getSetting("about");
  const { whatMakesUsDifferent } = content;
  const points = whatMakesUsDifferent.points.filter((p) => p.title.trim() !== "");

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title={whatMakesUsDifferent.title} subtitle={whatMakesUsDifferent.subtitle} />

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
