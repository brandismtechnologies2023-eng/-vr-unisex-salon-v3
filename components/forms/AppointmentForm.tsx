"use client";

import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type ReCAPTCHAType from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CalendarDays,
  ChevronDown,
  Clock,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Scissors,
  User,
} from "lucide-react";
import {
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumber,
  type CountryCode,
} from "libphonenumber-js";
import examplePhoneNumbers from "libphonenumber-js/examples.mobile.json";
import Button from "@/components/shared/Button";
import { services, siteContent } from "@/lib/data";

const content = siteContent.appointmentForm;

// Countries most relevant to the salon's clientele — UAE first as the
// default. Digit limits aren't hardcoded here; libphonenumber-js's own
// metadata enforces the correct length per country as the user types.
const countryOptions: { code: CountryCode; name: string }[] = [
  { code: "AE", name: "United Arab Emirates" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "PH", name: "Philippines" },
  { code: "BD", name: "Bangladesh" },
  { code: "NP", name: "Nepal" },
  { code: "LK", name: "Sri Lanka" },
  { code: "EG", name: "Egypt" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "OM", name: "Oman" },
  { code: "QA", name: "Qatar" },
  { code: "BH", name: "Bahrain" },
  { code: "KW", name: "Kuwait" },
  { code: "JO", name: "Jordan" },
  { code: "LB", name: "Lebanon" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "RU", name: "Russia" },
];

// The exact digit count for a real mobile number in this country, read
// from libphonenumber-js's own example-number metadata rather than
// hardcoded (its generic length-validator only rejects absurdly long
// input, not "too long for a normal mobile number").
function expectedDigitCount(country: CountryCode): number {
  const example = (examplePhoneNumbers as Record<string, string>)[country];
  if (!example) return 15;
  try {
    return parsePhoneNumber(example, country).nationalNumber.length;
  } catch {
    return 15;
  }
}

function capToCountryLength(digits: string, country: CountryCode) {
  return digits.slice(0, expectedDigitCount(country));
}

const appointmentSchema = z
  .object({
    name: z.string().min(2, content.validation.name),
    country: z.string(),
    phone: z.string().min(1, content.validation.phone),
    email: z.string().email(content.validation.email),
    service: z.string().min(1, content.validation.service),
    date: z.string().min(1, content.validation.date),
    time: z.string().min(1, content.validation.time),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!isValidPhoneNumber(data.phone, data.country as CountryCode)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["phone"], message: content.validation.phone });
    }
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
  "w-full rounded-xl border border-transparent bg-primary/10 py-3 pl-11 pr-4 text-sm text-secondary transition-colors placeholder:text-zinc-400 hover:bg-primary/15 focus:border-third focus:bg-white focus:outline-none focus:ring-2 focus:ring-third/25";
// Selects need extra right padding so long option text clears the chevron.
const selectClass = `${inputClass} appearance-none pr-11`;
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-secondary/70";
const iconClass =
  "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-third";
const chevronClass =
  "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-third";

// Google's reCAPTCHA script is ~1MB, so it's code-split rather than bundled
// into the page. The form itself is already deferred until it scrolls into
// view (see AppointmentFormLazy), so loading it with the form means the
// checkbox is visible whenever the form is — without costing a page load.
// Cast back to the real component type so the imperative ref (used to reset
// the widget after submit) keeps working through the dynamic wrapper.
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
}) as unknown as typeof import("react-google-recaptcha").default;

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [country, setCountry] = useState<CountryCode>("AE");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHAType>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const timeSlots = useMemo(buildTimeSlots, []);
  // Blocks past dates in the picker; the value is also re-checked on submit.
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { country: "AE" },
  });

  const onSubmit = async (values: AppointmentValues) => {
    setStatus("idle");
    // Only gate on a token when the widget is actually configured — lets
    // the form keep working before the site key/secret are both set up.
    if (recaptchaSiteKey && !recaptchaToken) {
      setRecaptchaError(true);
      return;
    }
    setRecaptchaError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          // Send the full international number so it's usable as-is.
          phone: `+${getCountryCallingCode(values.country as CountryCode)}${values.phone}`,
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      setCountry("AE");
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
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
            {content.labels.name} <span className="text-third">*</span>
          </label>
          <div className="relative">
            <User className={iconClass} />
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder={content.placeholders.name}
              {...register("name")}
              className={inputClass}
            />
          </div>
          {error("name")}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            {content.labels.phone} <span className="text-third">*</span>
          </label>
          <div className="flex items-center rounded-xl border border-transparent bg-primary/10 pl-4 transition-colors hover:bg-primary/15 focus-within:border-third focus-within:bg-white focus-within:ring-2 focus-within:ring-third/25">
            <Phone className="h-4 w-4 shrink-0 text-third" />
            <div className="relative shrink-0">
              <select
                id="country"
                value={country}
                autoComplete="tel-country-code"
                onChange={(e) => {
                  const nextCountry = e.target.value as CountryCode;
                  setCountry(nextCountry);
                  setValue("country", nextCountry, { shouldValidate: false });
                  // Re-cap the existing digits to the newly selected
                  // country's length so a stale, too-long number isn't left
                  // behind after switching countries.
                  const trimmed = capToCountryLength(getValues("phone") ?? "", nextCountry);
                  setValue("phone", trimmed, { shouldValidate: true });
                }}
                className="appearance-none bg-transparent py-3 pl-2 pr-6 text-sm text-secondary focus:outline-none"
              >
                {countryOptions.map((c) => (
                  <option key={c.code} value={c.code}>
                    +{getCountryCallingCode(c.code)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-third" />
            </div>
            <span className="h-5 w-px shrink-0 bg-third/30" />
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder={content.placeholders.phone}
              {...register("phone")}
              // Strip anything non-numeric as the user types, and cap the
              // length to whatever the selected country's numbers allow.
              onInput={(e) => {
                const el = e.currentTarget;
                const digits = capToCountryLength(el.value.replace(/\D/g, ""), country);
                if (el.value !== digits) {
                  setValue("phone", digits, { shouldValidate: false });
                }
              }}
              className="w-full min-w-0 bg-transparent py-3 pl-2 pr-4 text-sm text-secondary placeholder:text-zinc-400 focus:outline-none"
            />
          </div>
          {error("phone")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          {content.labels.email} <span className="text-third">*</span>
        </label>
        <div className="relative">
          <Mail className={iconClass} />
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={content.placeholders.email}
            {...register("email")}
            className={inputClass}
          />
        </div>
        {error("email")}
      </div>

      <div className="mt-5">
        <label htmlFor="service" className={labelClass}>
          {content.labels.service} <span className="text-third">*</span>
        </label>
        <div className="relative">
          <Scissors className={iconClass} />
          <select
            id="service"
            defaultValue=""
            {...register("service")}
            className={selectClass}
          >
            <option value="" disabled>
              {content.serviceSelectPlaceholder}
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <ChevronDown className={chevronClass} />
        </div>
        {error("service")}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            {content.labels.date} <span className="text-third">*</span>
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
            {content.labels.time} <span className="text-third">*</span>
          </label>
          <div className="relative">
            <Clock className={iconClass} />
            <select
              id="time"
              defaultValue=""
              {...register("time")}
              className={selectClass}
            >
              <option value="" disabled>
                {content.timeSelectPlaceholder}
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <ChevronDown className={chevronClass} />
          </div>
          {error("time")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {content.labels.message}
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-third" />
          <textarea
            id="message"
            rows={4}
            placeholder={content.placeholders.message}
            {...register("message")}
            className={`${inputClass} resize-y py-3.5`}
          />
        </div>
      </div>

      {recaptchaSiteKey && (
        // Height is reserved up front so the widget appearing doesn't shift
        // the submit button.
        <div className="mt-5 flex min-h-[78px] flex-col items-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={(token) => {
              setRecaptchaToken(token);
              if (token) setRecaptchaError(false);
            }}
            onExpired={() => setRecaptchaToken(null)}
          />
          {recaptchaError && (
            <p className="mt-2 text-xs text-red-600">{content.validation.recaptcha}</p>
          )}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="mt-7 w-full tracking-wider"
        icon={isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
      >
        {isSubmitting ? content.submittingLabel : content.submitLabel}
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
        <Lock className="h-3.5 w-3.5 shrink-0" />
        {content.disclaimer}
      </p>

      {status === "success" && (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-center text-sm text-green-700">
          {content.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          {content.errorMessage}
        </p>
      )}
    </form>
  );
}
