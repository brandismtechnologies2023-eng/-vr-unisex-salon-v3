"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CalendarDays,
  Clock,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Scissors,
  User,
} from "lucide-react";
import Button from "@/components/shared/Button";
import { services } from "@/lib/data";

const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  // Digits only — the input also strips anything else as you type.
  phone: z
    .string()
    .min(7, "Please enter a valid mobile number")
    .regex(/^\d+$/, "Mobile number can only contain digits"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please choose a service"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  message: z.string().optional(),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

// The salon opens at 10:00 and takes its last booking at 21:30.
function buildTimeSlots() {
  const slots: string[] = [];
  for (let minutes = 10 * 60; minutes <= 21 * 60 + 30; minutes += 30) {
    const h24 = Math.floor(minutes / 60);
    const m = minutes % 60;
    const suffix = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    slots.push(`${h12}:${String(m).padStart(2, "0")} ${suffix}`);
  }
  return slots;
}

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-secondary placeholder:text-zinc-400 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";
const labelClass = "mb-1.5 block text-sm font-medium text-secondary";
const iconClass = "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400";

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const timeSlots = useMemo(buildTimeSlots, []);
  // Blocks past dates in the picker; the value is also re-checked on submit.
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({ resolver: zodResolver(appointmentSchema) });

  const onSubmit = async (values: AppointmentValues) => {
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

  const error = (field: keyof AppointmentValues) =>
    errors[field] && (
      <p className="mt-1 text-xs text-red-600">{errors[field]?.message}</p>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className={iconClass} />
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              className={inputClass}
            />
          </div>
          {error("name")}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className={iconClass} />
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Enter your mobile number"
              {...register("phone")}
              // Strip anything non-numeric as the user types, so letters
              // simply can't be entered rather than only failing on submit.
              onInput={(e) => {
                const el = e.currentTarget;
                const digits = el.value.replace(/\D/g, "");
                if (el.value !== digits) {
                  setValue("phone", digits, { shouldValidate: false });
                }
              }}
              className={inputClass}
            />
          </div>
          {error("phone")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className={iconClass} />
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className={inputClass}
          />
        </div>
        {error("email")}
      </div>

      <div className="mt-5">
        <label htmlFor="service" className={labelClass}>
          Preferred Service <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Scissors className={iconClass} />
          <select
            id="service"
            defaultValue=""
            {...register("service")}
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        {error("service")}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <CalendarDays className={iconClass} />
            <input
              id="date"
              type="date"
              min={today}
              {...register("date")}
              className={inputClass}
            />
          </div>
          {error("date")}
        </div>

        <div>
          <label htmlFor="time" className={labelClass}>
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock className={iconClass} />
            <select
              id="time"
              defaultValue=""
              {...register("time")}
              className={`${inputClass} appearance-none`}
            >
              <option value="" disabled>
                Select time
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          {error("time")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us anything else we should know..."
            {...register("message")}
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="mt-6 w-full">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Sending..." : "Schedule Appointment"}
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
        <Lock className="h-3.5 w-3.5" />
        Your information is secure and will only be used to confirm your appointment.
      </p>

      {status === "success" && (
        <p className="mt-4 text-center text-sm text-green-600">
          Thank you! We&apos;ll be in touch shortly to confirm your appointment.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-sm text-red-600">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
