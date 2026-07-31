import { notFound } from "next/navigation";
import CollectionList, { type ListRow } from "@/components/admin/CollectionList";
import { getCollection } from "@/lib/admin/collections";

export default async function CollectionListPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const config = getCollection(key);
  if (!config) notFound();

  const items = await config.content.getAll();
  const rows: ListRow[] = items.map((item: { id: string }) => ({
    id: item.id,
    ...config.row(item),
  }));

  return (
    <CollectionList
      collectionKey={key}
      title={config.label}
      description={config.description}
      rows={rows}
    />
  );
}
