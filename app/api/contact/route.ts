import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
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

  const { name, email, phone, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to: toEmail,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
