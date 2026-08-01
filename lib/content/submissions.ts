import { prisma } from "@/lib/db";

// Form submissions captured from the public site. Kept deliberately generic:
// a submission records which form it came from plus that form's fields, so a
// new form on the site needs no schema or admin change — its entries (and its
// filter option) appear automatically.

export interface SubmissionRecord {
  id: string;
  formType: string;
  formLabel: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  data: Record<string, string>;
  createdAt: Date;
}

export interface SubmissionInput {
  formType: string;
  formLabel: string;
  name?: string;
  email?: string;
  phone?: string;
  data: Record<string, string>;
}

export async function createSubmission(input: SubmissionInput): Promise<void> {
  await prisma.submission.create({
    data: {
      formType: input.formType,
      formLabel: input.formLabel,
      name: input.name ?? null,
      email: input.email ?? null,
      phone: input.phone ?? null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: input.data as any,
    },
  });
}

export async function getSubmissions(formType?: string): Promise<SubmissionRecord[]> {
  try {
    const rows = await prisma.submission.findMany({
      where: formType ? { formType } : undefined,
      orderBy: { createdAt: "desc" },
      take: 500,
    });
    return rows.map((r) => ({
      ...r,
      data: (r.data ?? {}) as Record<string, string>,
    }));
  } catch {
    return [];
  }
}

// Distinct form types present, used to build the admin filter. The filter is
// only worth showing once there's more than one.
export async function getSubmissionFormTypes(): Promise<
  { formType: string; formLabel: string; count: number }[]
> {
  try {
    const grouped = await prisma.submission.groupBy({
      by: ["formType", "formLabel"],
      _count: { _all: true },
    });
    return grouped
      .map((g) => ({
        formType: g.formType,
        formLabel: g.formLabel,
        count: g._count._all,
      }))
      .sort((a, b) => a.formLabel.localeCompare(b.formLabel));
  } catch {
    return [];
  }
}

export async function deleteSubmission(id: string): Promise<void> {
  await prisma.submission.delete({ where: { id } });
}
