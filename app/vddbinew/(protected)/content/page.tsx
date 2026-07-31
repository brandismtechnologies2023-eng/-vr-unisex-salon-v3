import Link from "next/link";
import { Pencil } from "lucide-react";
import { contentSections } from "@/lib/admin/content-sections";

export default function ContentIndexPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary">Site Text</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Edit the headings and wording shown across the site.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {contentSections.map((s) => (
          <Link
            key={s.namespace}
            href={`/vddbinew/content/${s.namespace}`}
            className="flex items-center gap-4 border-b border-zinc-100 p-4 last:border-b-0 hover:bg-zinc-50"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-secondary">{s.label}</p>
              <p className="truncate text-sm text-zinc-500">{s.description}</p>
            </div>
            <Pencil className="h-4 w-4 shrink-0 text-zinc-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
