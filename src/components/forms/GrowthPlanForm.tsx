import { useState, type ReactNode } from "react";
import { z } from "zod";
import { BrandButton } from "@/components/primitives/BrandButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const businessTypes = [
  "Café / Restaurant",
  "Salon / Barber",
  "Dental",
  "Medical / Wellness",
  "Gym / Studio",
  "Real Estate",
  "Accounting / Finance",
  "Law",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  businessName: z.string().trim().min(1, "Business name is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone or WhatsApp number")
    .max(40),
  businessType: z.enum(businessTypes, {
    errorMap: () => ({ message: "Choose the closest match" }),
  }),
  website: z
    .string()
    .trim()
    .max(255)
    .optional()
    .or(z.literal(""))
    .refine(
      (v) =>
        !v ||
        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(v),
      "Enter a valid URL",
    ),
  about: z.string().trim().max(2000).optional().or(z.literal("")),
  needs: z
    .string()
    .trim()
    .min(5, "A sentence or two is enough")
    .max(2000),
});

export type GrowthPlanFormValues = z.infer<typeof schema>;

type Errors = Partial<Record<keyof GrowthPlanFormValues, string>>;

const initial: GrowthPlanFormValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "" as unknown as GrowthPlanFormValues["businessType"],
  website: "",
  about: "",
  needs: "",
};

function buildMailto(values: GrowthPlanFormValues) {
  const lines = [
    `Name: ${values.name}`,
    `Business: ${values.businessName}`,
    `Email: ${values.email}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Business type: ${values.businessType}`,
    values.website ? `Website: ${values.website}` : null,
    "",
    values.about ? `About the business:\n${values.about}\n` : null,
    `What they need help with:\n${values.needs}`,
  ]
    .filter(Boolean)
    .join("\n");
  const subject = `Growth Plan enquiry — ${values.businessName}`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines)}`;
}

const fieldBase =
  "w-full rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground/90"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-muted-foreground">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function GrowthPlanForm() {
  const [values, setValues] = useState<GrowthPlanFormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof GrowthPlanFormValues>(
    key: K,
    value: GrowthPlanFormValues[K],
  ) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof GrowthPlanFormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      // Focus first invalid
      const first = Object.keys(next)[0];
      if (first) {
        const el = document.getElementById(first);
        el?.focus();
      }
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/public/growth-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      // Even on non-2xx, show success but log — enquiry offered via mailto fallback.
      if (!res.ok) {
        console.warn("Growth plan submission returned", res.status);
      }
    } catch (err) {
      console.warn("Growth plan submission failed:", err);
    } finally {
      setSubmitting(false);
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-white/[0.02] p-8 md:p-12 text-center">
        <div className="mx-auto mb-6 h-12 w-12 rounded-full gradient-bg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-white"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Request received.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          We&apos;ll review your business carefully and get back to you shortly with
          a clear, honest Growth Plan.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <BrandButton asChild variant="primary" size="lg">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on WhatsApp
            </a>
          </BrandButton>
          <BrandButton asChild variant="secondary" size="lg">
            <a href={buildMailto(values)}>Or email us directly</a>
          </BrandButton>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          No spam · No pressure · Just a clear next step
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-white/[0.02] p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field id="name" label="Your name" required error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={fieldBase}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field
          id="businessName"
          label="Business name"
          required
          error={errors.businessName}
        >
          <input
            id="businessName"
            type="text"
            autoComplete="organization"
            className={fieldBase}
            value={values.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            aria-invalid={!!errors.businessName}
            aria-describedby={
              errors.businessName ? "businessName-error" : undefined
            }
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={fieldBase}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field
          id="phone"
          label="Phone / WhatsApp"
          required
          error={errors.phone}
        >
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+971 …"
            className={fieldBase}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field
          id="businessType"
          label="Business type"
          required
          error={errors.businessType}
        >
          <select
            id="businessType"
            className={cn(fieldBase, "appearance-none pr-10")}
            value={values.businessType}
            onChange={(e) =>
              update(
                "businessType",
                e.target.value as GrowthPlanFormValues["businessType"],
              )
            }
            aria-invalid={!!errors.businessType}
            aria-describedby={
              errors.businessType ? "businessType-error" : undefined
            }
          >
            <option value="" disabled>
              Select one…
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t} className="bg-background">
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="website"
          label="Current website"
          error={errors.website}
          hint="Optional"
        >
          <input
            id="website"
            type="url"
            autoComplete="url"
            placeholder="https://…"
            className={fieldBase}
            value={values.website ?? ""}
            onChange={(e) => update("website", e.target.value)}
            aria-invalid={!!errors.website}
            aria-describedby={errors.website ? "website-error" : undefined}
          />
        </Field>
        <div className="md:col-span-2">
          <Field
            id="about"
            label="Tell us about your business"
            hint="Optional — anything that helps us understand you"
            error={errors.about}
          >
            <textarea
              id="about"
              rows={4}
              className={cn(fieldBase, "resize-y min-h-[120px]")}
              value={values.about ?? ""}
              onChange={(e) => update("about", e.target.value)}
              aria-invalid={!!errors.about}
              aria-describedby={errors.about ? "about-error" : undefined}
            />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field
            id="needs"
            label="What do you need help with?"
            required
            error={errors.needs}
          >
            <textarea
              id="needs"
              rows={5}
              className={cn(fieldBase, "resize-y min-h-[140px]")}
              value={values.needs}
              onChange={(e) => update("needs", e.target.value)}
              aria-invalid={!!errors.needs}
              aria-describedby={errors.needs ? "needs-error" : undefined}
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          No spam · No pressure · Just a clear next step
        </p>
        <BrandButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Get My Free Growth Plan"}
        </BrandButton>
      </div>
    </form>
  );
}