import { notFound } from "next/navigation";
import CollectionForm from "@/components/admin/CollectionForm";
import { getCollection } from "@/lib/admin/collections";

export default async function NewCollectionItemPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const config = getCollection(key);
  if (!config) notFound();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-secondary">Add {config.singular}</h1>
      <CollectionForm
        collectionKey={key}
        fields={config.fields}
        backHref={`/admin/collections/${key}`}
      />
    </div>
  );
}
