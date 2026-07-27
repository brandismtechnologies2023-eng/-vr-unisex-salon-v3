import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Copy, Pencil, Plus, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import {
  duplicateItem,
  deleteItem,
  reorderItems,
} from "@/app/admin/(protected)/collections/actions";

export interface ListRow {
  id: string;
  primary: string;
  secondary?: string;
  thumb?: string;
}

export default function CollectionList({
  collectionKey,
  title,
  description,
  rows,
}: {
  collectionKey: string;
  title: string;
  description: string;
  rows: ListRow[];
}) {
  const base = `/admin/collections/${collectionKey}`;
  const ids = rows.map((r) => r.id);
  const swap = (i: number, j: number) => {
    const next = [...ids];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">{title}</h1>
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        </div>
        <Link
          href={`${base}/new`}
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/90"
        >
          <Plus className="h-4 w-4" />
          Add New
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {rows.length === 0 && <p className="p-6 text-sm text-zinc-500">Nothing here yet.</p>}
        {rows.map((row, i) => (
          <div
            key={row.id}
            className="flex items-center gap-4 border-b border-zinc-100 p-4 last:border-b-0"
          >
            {row.thumb ? (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                <Image src={row.thumb} alt="" fill sizes="48px" className="object-cover" />
              </div>
            ) : (
              <div className="h-12 w-12 shrink-0 rounded-lg bg-zinc-100" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-secondary">{row.primary}</p>
              {row.secondary && (
                <p className="truncate text-sm text-zinc-500">{row.secondary}</p>
              )}
            </div>

            <div className="flex items-center gap-1">
              <form action={reorderItems.bind(null, collectionKey, swap(i, i - 1))}>
                <button
                  type="submit"
                  disabled={i === 0}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </form>
              <form action={reorderItems.bind(null, collectionKey, swap(i, i + 1))}>
                <button
                  type="submit"
                  disabled={i === rows.length - 1}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </form>
              <Link
                href={`${base}/${row.id}`}
                className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                aria-label="Edit"
              >
                <Pencil className="h-4 w-4" />
              </Link>
              <form action={duplicateItem.bind(null, collectionKey, row.id)}>
                <button
                  type="submit"
                  className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                  aria-label="Duplicate"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </form>
              <form action={deleteItem.bind(null, collectionKey, row.id)}>
                <ConfirmButton
                  aria-label="Delete"
                  message={`Delete "${row.primary}"?`}
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
