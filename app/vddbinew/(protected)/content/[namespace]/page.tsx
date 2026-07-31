import { notFound } from "next/navigation";
import JsonEditor from "@/components/admin/JsonEditor";
import { getContentSection } from "@/lib/admin/content-sections";
import { getSettingRaw } from "@/lib/content/settings";
import { flattenLeaves } from "@/lib/admin/paths";

export default async function ContentEditPage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  const { namespace } = await params;
  const section = getContentSection(namespace);
  if (!section) notFound();

  const raw = await getSettingRaw(namespace);
  const leaves = flattenLeaves(raw);

  return (
    <div className="p-8">
      <h1 className="mb-1 text-2xl font-bold text-secondary">{section.label}</h1>
      <p className="mb-6 text-sm text-zinc-500">{section.description}</p>
      <JsonEditor namespace={namespace} leaves={leaves} backHref="/vddbinew/content" />
    </div>
  );
}
