import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { getSetting } from "@/lib/content/settings";
import { getBrands } from "@/lib/content/brands";

export default async function BrandsWeUse() {
  const [content, brands] = await Promise.all([
    getSetting("brandsWeUse"),
    getBrands(),
  ]);
  if (brands.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title={content.title} />

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
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
