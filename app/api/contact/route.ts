import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

// Mirrors the appointment form. Service/date/time are optional so a plain
// enquiry (name, email, phone, message) still validates.
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const { name, email, phone, service, date, time, message } = parsed.data;
  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    service && `Service: ${service}`,
    date && `Preferred date: ${date}`,
    time && `Preferred time: ${time}`,
    message && `\n${message}`,
  ].filter(Boolean);

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to: toEmail,
    replyTo: email,
    subject: service
      ? `Appointment request: ${service} — ${name}`
      : `New enquiry from ${name}`,
    text: lines.join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
