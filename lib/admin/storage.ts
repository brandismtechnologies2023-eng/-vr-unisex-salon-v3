import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";

// The one image-storage seam. In production (Vercel) it uploads to Vercel
// Blob and returns a public CDN URL. Locally, when no blob token is set, it
// falls back to writing into public/images/uploads. Signature is stable.
export async function saveImage(file: File, folder: string): Promise<string> {
  const ext = (path.extname(file.name) || ".jpg").toLowerCase();
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

  // Cloud storage when configured (Vercel sets BLOB_READ_WRITE_TOKEN once a
  // Blob store is connected to the project).
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`${folder}/${name}`, file, {
      access: "public",
      addRandomSuffix: false,
    });
    return blob.url;
  }

  // Local dev fallback.
  const bytes = Buffer.from(await file.arrayBuffer());
  const dir = path.join(process.cwd(), "public", "images", "uploads", folder);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), bytes);
  return `/images/uploads/${folder}/${name}`;
}
