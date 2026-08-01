import Link from "next/link";
import { FileSpreadsheet, FileText, Inbox, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { getSubmissions, getSubmissionFormTypes } from "@/lib/content/submissions";
import { deleteSubmissionAction } from "@/app/vddbinew/(protected)/submissions/actions";

// Always fresh — submissions arrive continuously.
export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ form?: string }>;
}) {
  const { form } = await searchParams;
  const [formTypes, submissions] = await Promise.all([
    getSubmissionFormTypes(),
    getSubmissions(form),
  ]);

  // The filter only earns its place once the site has more than one form —
  // with a single form it would just be noise. A new form on the site starts
  // storing its own formType, so this appears automatically.
  const showFilter = formTypes.length > 1;
  const total = formTypes.reduce((sum, f) => sum + f.count, 0);

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-secondary sm:text-2xl">Form Submissions</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Enquiries received from the website forms.
          </p>
        </div>

        {showFilter && (
          <div className="flex flex-wrap items-center gap-2">
            <FilterChip href="/vddbinew/submissions" label={`All (${total})`} active={!form} />
            {formTypes.map((f) => (
              <FilterChip
                key={f.formType}
                href={`/vddbinew/submissions?form=${encodeURIComponent(f.formType)}`}
                label={`${f.formLabel} (${f.count})`}
                active={form === f.formType}
              />
            ))}
          </div>
        )}
      </div>

      {submissions.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4">
          <div className="mr-auto min-w-0">
            <p className="font-medium text-secondary">Export</p>
            <p className="mt-0.5 text-sm text-zinc-500">
              Download {form ? "the filtered" : "all"} {submissions.length}{" "}
              {submissions.length === 1 ? "entry" : "entries"}.
            </p>
          </div>
          <ExportLink format="xlsx" form={form} label="Excel" icon="sheet" />
          <ExportLink format="pdf" form={form} label="PDF" icon="pdf" />
        </div>
      )}

      {submissions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <Inbox className="mx-auto h-8 w-8 text-zinc-300" />
          <p className="mt-3 font-medium text-secondary">No submissions yet</p>
          <p className="mt-1 text-sm text-zinc-500">
            Enquiries from the website contact form will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((s) => (
            <div key={s.id} className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-secondary">{s.name || "—"}</p>
                  <p className="mt-0.5 text-xs text-zinc-400">
                    {s.formLabel} · {formatDate(s.createdAt)}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {s.email && (
                    <a
                      href={`mailto:${s.email}`}
                      className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-secondary hover:bg-zinc-50"
                    >
                      Email
                    </a>
                  )}
                  {s.phone && (
                    <a
                      href={`https://wa.me/${s.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-secondary hover:bg-zinc-50"
                    >
                      WhatsApp
                    </a>
                  )}
                  <form action={deleteSubmissionAction.bind(null, s.id)}>
                    <ConfirmButton
                      aria-label="Delete"
                      message="Delete this submission?"
                      className="rounded-md p-2 text-zinc-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </ConfirmButton>
                  </form>
                </div>
              </div>

              {/* Every field the form submitted, so new forms display without
                  needing their own layout here. */}
              <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-zinc-100 pt-4 sm:grid-cols-2">
                {Object.entries(s.data).map(([label, value]) => (
                  <div key={label} className="min-w-0">
                    <dt className="text-xs uppercase tracking-wide text-zinc-400">{label}</dt>
                    <dd className="mt-0.5 text-sm break-words text-secondary">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ExportLink({
  format,
  form,
  label,
  icon,
}: {
  format: "xlsx" | "pdf";
  form?: string;
  label: string;
  icon: "sheet" | "pdf";
}) {
  const params = new URLSearchParams({ format });
  if (form) params.set("form", form);
  const Icon = icon === "sheet" ? FileSpreadsheet : FileText;

  return (
    <a
      href={`/vddbinew/submissions/export?${params.toString()}`}
      // A download, not a navigation — skip the client router.
      download
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-zinc-50"
    >
      <Icon className="h-4 w-4 text-third" />
      {label}
    </a>
  );
}

function FilterChip({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-secondary text-white"
          : "border border-zinc-200 text-zinc-600 hover:bg-zinc-50"
      }`}
    >
      {label}
    </Link>
  );
}
