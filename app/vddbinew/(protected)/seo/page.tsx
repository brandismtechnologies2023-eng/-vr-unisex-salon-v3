import IndexingToggle from "@/components/admin/IndexingToggle";
import { getSeoSettings } from "@/lib/content/seo-settings";

export const dynamic = "force-dynamic";

export default async function SeoPage() {
  const { allowIndexing } = await getSeoSettings();

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-secondary sm:text-2xl">Search Engines</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Control whether Google is allowed to list this website.
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        <IndexingToggle initial={allowIndexing} />

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Turn this on only when the site is final.</p>
          <p className="mt-1">
            While it is off, the website stays out of Google — which is what you want for a
            demo. Once the real domain is live, switch it on so customers can find the salon
            in search.
          </p>
        </div>

        <p className="text-xs text-zinc-400">
          The admin panel itself is always hidden from search engines, whichever way this
          is set.
        </p>
      </div>
    </div>
  );
}
