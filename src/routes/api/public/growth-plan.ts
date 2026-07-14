import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

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
  name: z.string().trim().min(1).max(100),
  businessName: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40),
  businessType: z.enum(businessTypes),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  about: z.string().trim().max(2000).optional().or(z.literal("")),
  needs: z.string().trim().min(5).max(2000),
});

const OWNER_EMAIL = "oddconcepts.ae@gmail.com";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(data: z.infer<typeof schema>) {
  const rows: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Business", data.businessName],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone],
    ["Business type", data.businessType],
    ["Website", data.website || "—"],
  ];
  const rowHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;font-size:13px;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;font-size:14px;color:#111;">${escapeHtml(
          v ?? "",
        )}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f7f7f8;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;padding:28px;border:1px solid #eee;">
      <h2 style="margin:0 0 4px;font-size:20px;color:#111;">New Growth Plan enquiry</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px;">${escapeHtml(data.businessName)}</p>
      <table style="border-collapse:collapse;width:100%;">${rowHtml}</table>
      ${
        data.about
          ? `<h3 style="margin:24px 0 6px;font-size:14px;color:#111;">About the business</h3>
             <p style="white-space:pre-wrap;color:#333;font-size:14px;line-height:1.5;margin:0;">${escapeHtml(data.about)}</p>`
          : ""
      }
      <h3 style="margin:24px 0 6px;font-size:14px;color:#111;">What they need help with</h3>
      <p style="white-space:pre-wrap;color:#333;font-size:14px;line-height:1.5;margin:0;">${escapeHtml(data.needs)}</p>
    </div>
  </body></html>`;
}

function renderText(data: z.infer<typeof schema>) {
  return [
    `New Growth Plan enquiry`,
    ``,
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Business type: ${data.businessType}`,
    `Website: ${data.website || "—"}`,
    ``,
    data.about ? `About:\n${data.about}\n` : ``,
    `Needs:\n${data.needs}`,
  ].join("\n");
}

export const Route = createFileRoute("/api/public/growth-plan")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json(
            { ok: false, error: "invalid_json" },
            { status: 400 },
          );
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "invalid_input" },
            { status: 400 },
          );
        }
        const data = parsed.data;

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json(
            { ok: false, error: "email_not_configured" },
            { status: 500 },
          );
        }

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              from: "Odd Concepts Growth Plan <onboarding@resend.dev>",
              to: [OWNER_EMAIL],
              reply_to: data.email,
              subject: `Growth Plan enquiry — ${data.businessName}`,
              html: renderHtml(data),
              text: renderText(data),
            }),
          });

          if (!res.ok) {
            const errBody = await res.text();
            console.error(
              `Resend send failed [${res.status}]: ${errBody}`,
            );
            return Response.json(
              { ok: false, error: "email_failed" },
              { status: 502 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("Growth plan email error:", err);
          return Response.json(
            { ok: false, error: "email_failed" },
            { status: 502 },
          );
        }
      },
    },
  },
});