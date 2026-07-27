import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Copy, Pencil, Plus, Trash2 } from "lucide-react";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { getTeam } from "@/lib/content/team";
import {
  duplicateTeamMemberAction,
  deleteTeamMemberAction,
  reorderTeamAction,
} from "./actions";

export default async function AdminTeamPage() {
  const team = await getTeam();
  const ids = team.map((m) => m.id);

  // Precompute the reordered id arrays for each row's move up/down so the
  // buttons are plain bound server actions (no client JS needed).
  const swap = (i: number, j: number) => {
    const next = [...ids];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Team</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Members shown in the &quot;Meet the Team&quot; section.
          </p>
        </div>
        <Link
          href="/admin/team/new"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/90"
        >
          <Plus className="h-4 w-4" />
          Add Member
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {team.length === 0 && (
          <p className="p-6 text-sm text-zinc-500">No team members yet.</p>
        )}
        {team.map((member, i) => (
          <div
            key={member.id}
            className="flex items-center gap-4 border-b border-zinc-100 p-4 last:border-b-0"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
              {member.image && (
                <Image src={member.image} alt="" fill sizes="48px" className="object-cover" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-secondary">{member.name}</p>
              <p className="truncate text-sm text-zinc-500">{member.role}</p>
            </div>

            <div className="flex items-center gap-1">
              {/* Move up / down */}
              <form action={reorderTeamAction.bind(null, swap(i, i - 1))}>
                <button
                  type="submit"
                  disabled={i === 0}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </form>
              <form action={reorderTeamAction.bind(null, swap(i, i + 1))}>
                <button
                  type="submit"
                  disabled={i === team.length - 1}
                  className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-secondary disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </form>

              <Link
                href={`/admin/team/${member.id}`}
                className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                aria-label="Edit"
              >
                <Pencil className="h-4 w-4" />
              </Link>

              <form action={duplicateTeamMemberAction.bind(null, member.id)}>
                <button
                  type="submit"
                  className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-secondary"
                  aria-label="Duplicate"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </form>

              <form action={deleteTeamMemberAction.bind(null, member.id)}>
                <ConfirmButton
                  aria-label="Delete"
                  message={`Delete ${member.name}?`}
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
