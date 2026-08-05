import { notFound } from "next/navigation";
import JsonEditor from "@/components/admin/JsonEditor";
import { getContentSection, isPage } from "@/lib/admin/content-sections";
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
  const allLeaves = flattenLeaves(raw);

  // Search-engine fields get their own highlighted box at the top rather than
  // sitting among the page copy. The home page keeps its title/description at
  // the top level; other pages nest them under `meta`.
  const isSeoLeaf = (path: string) =>
    path.startsWith("meta.") ||
    (namespace === "siteMeta" && ["titleSuffix", "description"].includes(path));

  const seoLeaves = allLeaves.filter((l) => isSeoLeaf(l.path));
  const contentLeaves = allLeaves.filter((l) => !isSeoLeaf(l.path));

  const backHref = isPage(namespace) ? "/vddbinew/pages" : "/vddbinew/content";

  return (
    <div className="p-4 sm:p-8">
      <h1 className="mb-1 text-xl font-bold text-secondary sm:text-2xl">{section.label}</h1>
      <p className="mb-6 text-sm text-zinc-500">{section.description}</p>
      <JsonEditor
        namespace={namespace}
        seoLeaves={seoLeaves}
        leaves={contentLeaves}
        backHref={backHref}
      />
    </div>
  );
}
