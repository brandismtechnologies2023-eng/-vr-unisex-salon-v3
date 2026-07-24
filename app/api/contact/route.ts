import path from "node:path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const thankYouContent = siteContent.customerThankYouEmail;

function thankYouEmailHtml(name: string, service?: string) {
  const body = service
    ? thankYouContent.bodyWithService(service)
    : thankYouContent.bodyGeneric;

  return `
    <div style="background-color:#f4f4f4;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:520px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;">
        <div style="background-color:#ecd7d0;padding:28px 24px;text-align:center;">
          <img src="cid:vr-salon-logo" alt="${siteConfig.name}" width="64" height="64" style="border-radius:8px;" />
        </div>
        <div style="padding:32px 28px;">
          <h1 style="margin:0 0 20px;font-size:22px;color:#272939;text-align:center;">
            ${thankYouContent.heading}
          </h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#272939;">
            ${thankYouContent.greeting(name)}
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3f3f46;">
            ${body}
          </p>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#3f3f46;">
            ${thankYouContent.closing}
          </p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#272939;">
            ${thankYouContent.signature}
          </p>
        </div>
        <div style="background-color:#272939;padding:20px 24px;text-align:center;">
          <p style="margin:0;font-size:13px;color:#ecd7d0;">${siteConfig.name}</p>
          <p style="margin:4px 0 0;font-size:12px;color:#b29da0;">${siteConfig.address}</p>
          <p style="margin:4px 0 0;font-size:12px;color:#b29da0;">${siteConfig.phone} · ${siteConfig.email}</p>
        </div>
      </div>
    </div>
  `;
}

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
  recaptchaToken: z.string().optional(),
});

async function isRecaptchaValid(token: string | undefined, secretKey: string) {
  if (!token) return false;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Only enforced once RECAPTCHA_SECRET_KEY is actually configured, so the
  // form keeps working during setup and isn't silently broken by a missing key.
  const { RECAPTCHA_SECRET_KEY } = process.env;
  if (RECAPTCHA_SECRET_KEY) {
    const verified = await isRecaptchaValid(parsed.data.recaptchaToken, RECAPTCHA_SECRET_KEY);
    if (!verified) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP environment variables are not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const { name, email, phone, service, date, time, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    service && `Service: ${service}`,
    date && `Preferred date: ${date}`,
    time && `Preferred time: ${time}`,
    message && `\n${message}`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `${siteConfig.name} Website <${SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: service
        ? `Appointment request: ${service} — ${name}`
        : `New enquiry from ${name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("SMTP send error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  // Best-effort: the salon already has the lead above, so a failure here
  // shouldn't turn the whole submission into an error for the customer.
  try {
    await transporter.sendMail({
      from: `${siteConfig.name} <${SMTP_USER}>`,
      to: email,
      subject: service
        ? thankYouContent.subjectWithService(service)
        : thankYouContent.subjectGeneric,
      html: thankYouEmailHtml(name, service),
      attachments: [
        {
          filename: "logo.webp",
          path: path.join(process.cwd(), "public/images/logo.webp"),
          cid: "vr-salon-logo",
        },
      ],
    });
  } catch (error) {
    console.error("Customer thank-you email failed:", error);
  }

  return NextResponse.json({ success: true });
}
