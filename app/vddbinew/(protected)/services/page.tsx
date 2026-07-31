import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Copy, Pencil, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { getServices } from "@/lib/content/services";
import {
  duplicateServiceAction,
  deleteServiceAction,
  reorderServicesAction,
} from "@/app/vddbinew/(protected)/services/actions";

export default async function ServicesAdminPage() {
  const services = await getServices();
  const ids = services.map((s) => s.id);
  const swap = (i: number, j: number) => {
    const next = [...ids];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-secondary">Services</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Edit any service page. Use Duplicate to clone a service, then edit the copy.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="flex items-center gap-4 border-b border-zinc-100 p-4 last:border-b-0"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
              {s.image && <Image src={s.image} alt="" fill sizes="48px" className="object-cover" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-secondary">{s.title}</p>
              <p className="truncate text-sm text-zinc-500">
                /services/{s.slug} · from AED {s.startingPrice}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <form action={reorderServicesAction.bind(null, swap(i, i - 1))}>
                <button
                  type="submit"
                  disabled={i === 0}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </form>
              <form action={reorderServicesAction.bind(null, swap(i, i + 1))}>
                <button
                  type="submit"
                  disabled={i === services.length - 1}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </form>
              <Link
                href={`/vddbinew/services/${s.id}`}
                className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                aria-label="Edit"
              >
                <Pencil className="h-4 w-4" />
              </Link>
              <form action={duplicateServiceAction.bind(null, s.id)}>
                <button
                  type="submit"
                  className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                  aria-label="Duplicate"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </form>
              <form action={deleteServiceAction.bind(null, s.id)}>
                <ConfirmButton
                  aria-label="Delete"
                  message={`Delete "${s.title}"?`}
                  className="rounded-md p-2 text-zinc-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </ConfirmButton>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
