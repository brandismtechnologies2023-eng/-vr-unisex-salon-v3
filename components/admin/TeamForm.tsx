"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { saveTeamMember } from "@/app/admin/(protected)/team/actions";
import type { TeamMember } from "@/types";

// Client component so the server action dispatches over fetch (the reliable
// path for forms on dynamic [id] routes).
export default function TeamForm({ member }: { member?: TeamMember }) {
  return (
    <form action={saveTeamMember} className="max-w-xl space-y-5">
      <input type="hidden" name="id" value={member?.id ?? ""} />
      <Field label="Name" name="name" defaultValue={member?.name} required />
      <Field label="Role" name="role" defaultValue={member?.role} required />

      <div>
        <label htmlFor="bio" className="mb-1.5 block text-sm font-medium text-secondary">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={5}
          defaultValue={member?.bio}
          className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary"
        />
      </div>

      <ImageUploadField name="image" label="Photo" currentValue={member?.image} />

      <SubmitRow />
    </form>
  );
}

function SubmitRow() {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center gap-3 pt-2">
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-white hover:bg-secondary/90 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save"}
      </button>
      <Link
        href="/admin/team"
        className="rounded-full px-6 py-2.5 text-sm font-medium text-zinc-500 hover:bg-zinc-100"
      >
        Cancel
      </Link>
    </div>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-secondary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary"
      />
    </div>
  );
}
