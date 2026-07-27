"use client";

import { useState } from "react";
import Image from "next/image";

// Preview-only client helper. The actual file is submitted as part of the
// surrounding server-action form (name={name}); the server action reads it,
// saves it via lib/admin/storage, and falls back to `currentValue` (carried
// in a hidden input) when no new file is chosen.
export default function ImageUploadField({
  name,
  label,
  currentValue,
  accept = "image/*",
}: {
  name: string;
  label: string;
  currentValue?: string;
  accept?: string;
}) {
  const [preview, setPreview] = useState<string | undefined>(currentValue);

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-secondary">{label}</label>
      <div className="flex items-center gap-4">
        {preview ? (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
            <Image src={preview} alt="" fill sizes="80px" className="object-cover" />
          </div>
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-dashed border-zinc-300 text-xs text-zinc-400">
            No image
          </div>
        )}
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className="text-sm text-zinc-600 file:mr-3 file:rounded-full file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-secondary/90"
        />
      </div>
      <input type="hidden" name={`${name}_current`} value={currentValue ?? ""} />
    </div>
  );
}
