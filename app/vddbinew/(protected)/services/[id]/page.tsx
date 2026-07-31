import { notFound } from "next/navigation";
import ServiceForm from "@/components/admin/ServiceForm";
import { getServiceById } from "@/lib/content/services";
import { flattenLeaves } from "@/lib/admin/paths";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) notFound();

  // Flatten the section bag (everything except the flat columns/id) into
  // editable leaves.
  const {
    id: _id,
    slug: _s,
    title: _t,
    shortTitle: _st,
    description: _d,
    startingPrice: _p,
    image: _i,
    ...sections
  } = service;
  void _id, void _s, void _t, void _st, void _d, void _p, void _i;

  const sectionLeaves = flattenLeaves(sections);

  return (
    <div className="p-8">
      <h1 className="mb-1 text-2xl font-bold text-secondary">Edit Service</h1>
      <p className="mb-6 text-sm text-zinc-500">{service.title}</p>
      <ServiceForm service={service} sectionLeaves={sectionLeaves} />
    </div>
  );
}
