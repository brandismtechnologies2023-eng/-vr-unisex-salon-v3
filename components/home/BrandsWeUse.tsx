import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { brandsWeUse, siteContent } from "@/lib/data";

const content = siteContent.brandsWeUse;

export default function BrandsWeUse() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title={content.title} />

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {brandsWeUse.map((brand) => (
          <div
            key={brand.name}
            className="flex h-28 items-center justify-center rounded-2xl border border-third/20 bg-white p-6"
          >
            <div className="relative h-12 w-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
