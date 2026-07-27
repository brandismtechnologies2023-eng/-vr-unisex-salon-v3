import { randomBytes } from "node:crypto";
import { hashPassword } from "../lib/admin/password";

// Usage: npx tsx scripts/generate-admin-hash.ts "your-password"
// Prints the two env lines to paste into .env.local. Also emits a fresh
// ADMIN_SESSION_SECRET (a session secret only needs to be generated once).

const password = process.argv[2];
if (!password) {
  console.error('Usage: npx tsx scripts/generate-admin-hash.ts "your-password"');
  process.exit(1);
}

console.log(`ADMIN_PASSWORD_HASH=${hashPassword(password)}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(32).toString("hex")}`);
