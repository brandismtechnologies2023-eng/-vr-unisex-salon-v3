import ExcelJS from "exceljs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { isAdmin } from "@/lib/admin/guard";
import { getSubmissions } from "@/lib/content/submissions";
import { siteConfig } from "@/lib/site-config";

// Downloads the submissions list as a spreadsheet or a PDF. Honours the
// ?form= filter so what you export matches what's on screen.
export const dynamic = "force-dynamic";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export async function GET(request: Request) {
  // Route handlers aren't covered by the page-level guard, so check here too.
  if (!(await isAdmin())) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") === "pdf" ? "pdf" : "xlsx";
  const formType = searchParams.get("form") || undefined;

  const submissions = await getSubmissions(formType);
  const stamp = new Date().toISOString().slice(0, 10);
  const filename = `submissions-${formType ?? "all"}-${stamp}`;

  // Forms can carry different fields, so build the columns from the data
  // actually present rather than a fixed list.
  const extraKeys: string[] = [];
  for (const s of submissions) {
    for (const key of Object.keys(s.data)) {
      if (!["Name", "Email", "Phone"].includes(key) && !extraKeys.includes(key)) {
        extraKeys.push(key);
      }
    }
  }
  const headers = ["Date", "Form", "Name", "Email", "Phone", ...extraKeys];
  const rows = submissions.map((s) => [
    formatDate(s.createdAt),
    s.formLabel,
    s.name ?? "",
    s.email ?? "",
    s.phone ?? "",
    ...extraKeys.map((k) => s.data[k] ?? ""),
  ]);

  if (format === "xlsx") {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = siteConfig.name;
    const sheet = workbook.addWorksheet("Submissions");

    sheet.addRow(headers);
    sheet.getRow(1).font = { bold: true };
    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFECD7D0" },
    };
    rows.forEach((r) => sheet.addRow(r));

    sheet.columns.forEach((col, i) => {
      const longest = Math.max(
        headers[i].length,
        ...rows.map((r) => String(r[i] ?? "").length)
      );
      col.width = Math.min(Math.max(longest + 2, 12), 50);
    });
    sheet.views = [{ state: "frozen", ySplit: 1 }];

    const buffer = await workbook.xlsx.writeBuffer();
    return new Response(buffer as ArrayBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}.xlsx"`,
      },
    });
  }

  // PDF: one block per submission rather than a wide table, so long values
  // (messages especially) stay readable on the page.
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const A4: [number, number] = [595.28, 841.89];
  const margin = 48;
  const ink = rgb(0.15, 0.16, 0.22);
  const muted = rgb(0.45, 0.45, 0.5);

  let page = pdf.addPage(A4);
  let y = A4[1] - margin;

  const newPage = () => {
    page = pdf.addPage(A4);
    y = A4[1] - margin;
  };
  const need = (space: number) => {
    if (y - space < margin) newPage();
  };
  // pdf-lib's standard fonts can't encode characters outside WinAnsi.
  const clean = (v: string) => v.replace(/[^\x20-\x7E]/g, " ");

  const write = (
    text: string,
    size: number,
    useBold = false,
    color = ink,
    indent = 0
  ) => {
    const f = useBold ? bold : font;
    const maxWidth = A4[0] - margin * 2 - indent;
    // Simple greedy wrap.
    const words = clean(text).split(/\s+/);
    let line = "";
    const lines: string[] = [];
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (f.widthOfTextAtSize(candidate, size) > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) lines.push(line);

    for (const l of lines) {
      need(size + 6);
      page.drawText(l, { x: margin + indent, y, size, font: f, color });
      y -= size + 4;
    }
  };

  // Separators are plain ASCII — pdf-lib's standard fonts drop anything the
  // WinAnsi encoding can't represent.
  write(`${siteConfig.name} - Form Submissions`, 18, true);
  write(
    `${formType ? submissions[0]?.formLabel ?? formType : "All forms"} | ${submissions.length} ${
      submissions.length === 1 ? "entry" : "entries"
    } | Exported ${formatDate(new Date())}`,
    9,
    false,
    muted
  );
  y -= 10;

  if (submissions.length === 0) {
    write("No submissions yet.", 11, false, muted);
  }

  submissions.forEach((s, i) => {
    need(90);
    y -= 8;
    page.drawLine({
      start: { x: margin, y },
      end: { x: A4[0] - margin, y },
      thickness: 0.5,
      color: rgb(0.85, 0.85, 0.88),
    });
    y -= 16;

    write(`${i + 1}. ${s.name || "—"}`, 12, true);
    write(`${s.formLabel} | ${formatDate(s.createdAt)}`, 8.5, false, muted);
    y -= 4;
    for (const [label, value] of Object.entries(s.data)) {
      write(`${label}: ${value}`, 10, false, ink, 10);
    }
  });

  const bytes = await pdf.save();
  return new Response(bytes as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}.pdf"`,
    },
  });
}
