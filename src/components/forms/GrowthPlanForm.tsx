import { useMemo, useState, type ReactNode } from "react";
import { z } from "zod";
import { BrandButton } from "@/components/primitives/BrandButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/LanguageContext";
import type { Translations } from "@/i18n/translations";

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

function makeSchema(t: Translations) {
  const v = t.form.validation;
  return z.object({
    name: z.string().trim().min(1, v.nameRequired).max(100),
    businessName: z.string().trim().min(1, v.businessNameRequired).max(150),
    email: z.string().trim().email(v.emailInvalid).max(255),
    phone: z.string().trim().min(6, v.phoneInvalid).max(40),
    businessType: z.enum(businessTypes, {
      errorMap: () => ({ message: v.businessTypeInvalid }),
    }),
    website: z
      .string()
      .trim()
      .max(255)
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => !val || /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(val),
        v.urlInvalid,
      ),
    about: z.string().trim().max(2000).optional().or(z.literal("")),
    needs: z.string().trim().min(5, v.needsTooShort).max(2000),
  });
}

export type GrowthPlanFormValues = z.infer<ReturnType<typeof makeSchema>>;

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
          <span aria-hidden="true" className="ms-1 text-muted-foreground">
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
  const t = useT();
  const activeSchema = useMemo(() => makeSchema(t), [t]);
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
    const parsed = activeSchema.safeParse(values);
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
          {t.form.doneTitle}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
{t.form.doneBody}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <BrandButton asChild variant="primary" size="lg" className="w-full sm:w-auto">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.form.talkWhatsapp}
            </a>
          </BrandButton>
          <BrandButton asChild variant="secondary" size="lg" className="w-full sm:w-auto">
            <a href={buildMailto(values)}>{t.form.emailDirect}</a>
          </BrandButton>
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {t.form.formNote}
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
        <Field id="name" label={t.form.yourName} required error={errors.name}>
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
          label={t.form.businessName}
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
        <Field id="email" label={t.form.email} required error={errors.email}>
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
          label={t.form.phone}
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
          label={t.form.businessType}
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
              {t.form.selectPlaceholder}
            </option>
            {businessTypes.map((bt) => (
              <option key={bt} value={bt} className="bg-background">
                {t.form.businessTypes[bt] ?? bt}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="website"
          label={t.form.website}
          error={errors.website}
          hint={t.form.optional}
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
            label={t.form.about}
            hint={t.form.aboutHint}
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
            label={t.form.needs}
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

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {t.form.formNote}
        </p>
        <BrandButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? t.form.submitSending : t.form.submitIdle}
        </BrandButton>

      </div>
    </form>
  );
}