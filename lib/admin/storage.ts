import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// The one image-storage seam. Locally it writes into public/images/uploads
// and returns a web path. When this is ever deployed, swap the body for
// Vercel Blob / S3 / Cloudinary — the signature stays the same.
export async function saveImage(file: File, folder: string): Promise<string> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = (path.extname(file.name) || ".jpg").toLowerCase();
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  const dir = path.join(process.cwd(), "public", "images", "uploads", folder);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), bytes);
  return `/images/uploads/${folder}/${name}`;
}
