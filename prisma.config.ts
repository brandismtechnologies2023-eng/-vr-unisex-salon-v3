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
    url: process.env["DATABASE_URL"],
  },
});
