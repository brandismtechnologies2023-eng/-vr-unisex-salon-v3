import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

// Node-only (uses node:crypto scrypt). Imported solely by the login server
// action and the hash-generator script — never by middleware, which runs on
// the Edge runtime. Stored format: "<saltHex>:<hashHex>".

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `${salt.toString("hex")}:${hash.toString("hex")}`;
}

export function verifyPassword(password: string, stored: string | undefined): boolean {
  if (!stored) return false;
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;
  const hash = Buffer.from(hashHex, "hex");
  const candidate = scryptSync(password, Buffer.from(saltHex, "hex"), 64);
  return hash.length === candidate.length && timingSafeEqual(hash, candidate);
}
