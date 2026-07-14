"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import Button from "@/components/shared/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-700">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send Message
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-600">
          Thanks! We&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
