import { notFound } from "next/navigation";
import CollectionForm from "@/components/admin/CollectionForm";
import { getCollection } from "@/lib/admin/collections";

export default async function EditCollectionItemPage({
  params,
}: {
  params: Promise<{ key: string; id: string }>;
}) {
  const { key, id } = await params;
  const config = getCollection(key);
  if (!config) notFound();

  const item = await config.content.getOne(id);
  if (!item) notFound();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-secondary">Edit {config.singular}</h1>
      <CollectionForm
        collectionKey={key}
        fields={config.fields}
        item={item}
        backHref={`/admin/collections/${key}`}
      />
    </div>
  );
}
