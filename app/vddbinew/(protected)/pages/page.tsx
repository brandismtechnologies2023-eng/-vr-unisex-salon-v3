import Link from "next/link";
import { ExternalLink, Pencil } from "lucide-react";
import { contentPages } from "@/lib/admin/content-sections";

export default function PagesIndexPage() {
  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-secondary sm:text-2xl">Pages</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Edit each page&apos;s wording and how it appears in Google.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {contentPages.map((p) => (
          <div
            key={p.namespace}
            className="flex flex-wrap items-center gap-3 border-b border-zinc-100 p-4 last:border-b-0"
          >
            <div className="min-w-0 flex-1 basis-48">
              <p className="font-medium text-secondary">{p.label}</p>
              <p className="truncate text-sm text-zinc-500">{p.description}</p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {p.path && (
                <a
                  href={p.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50"
                >
                  View
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <Link
                href={`/vddbinew/content/${p.namespace}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-white hover:bg-secondary/90"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
