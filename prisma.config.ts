import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// The app uses Next.js's .env.local as its single env source, so point the
// Prisma CLI at it too (it would otherwise only read .env).
loadEnv({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // `db push` runs schema DDL — prefer the direct (non-pooling) URL. Falls
    // back to DATABASE_URL / pooled so it works in any of those setups.
    url:
      process.env["DATABASE_URL"] ||
      process.env["POSTGRES_URL_NON_POOLING"] ||
      process.env["POSTGRES_URL"],
  },
});
