/**
 * Cookie consent for advertising measurement (Meta Pixel).
 *
 * Regional banner route: visitors in consent-required regions (EU/EEA, UK,
 * Switzerland) — plus unknown or failed lookups — see a banner and are only
 * measured after an explicit choice. Elsewhere the pixel runs without a
 * banner; a refusal there still blocks it.
 *
 * The stored record preserves the decision, the visitor's region at decision
 * time, the notice version shown, and the timestamp — consent evidence.
 */

export const CONSENT_STORAGE_KEY = "ocd-cookie-consent";
export const CONSENT_NOTICE_VERSION = "2026-10";

export type ConsentDecision = "accepted" | "refused";

export type ConsentRecord = {
  decision: ConsentDecision;
  /** ISO 3166-1 alpha-2 country from the edge trace, "XX" when unknown. */
  region: string;
  at: string;
  notice: string;
};

/** Regions where consent is required before advertising measurement. */
const CONSENT_REQUIRED_REGIONS = new Set([
  // EU-27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE",
  // EEA others, UK, Switzerland
  "IS", "NO", "LI", "GB", "CH",
]);

let cachedRegion: string | null | undefined;

/** Country code from the same-origin edge trace, or null when unavailable. */
export async function lookupRegion(): Promise<string | null> {
  if (cachedRegion !== undefined) return cachedRegion;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) {
      cachedRegion = null;
      return null;
    }
    const text = await res.text();
    const loc = /^loc=(.*)$/m.exec(text)?.[1]?.trim() ?? "";
    cachedRegion = /^[A-Z]{2}$/.test(loc) ? loc : null;
    return cachedRegion;
  } catch {
    cachedRegion = null;
    return null;
  }
}

/** Region known so far this visit (without a lookup). */
export function currentRegion(): string | null {
  return cachedRegion ?? null;
}

/**
 * True when the banner must be shown before the pixel may load.
 * Failure, unknown (XX) and Tor exit (T1) all require consent.
 */
export function regionRequiresConsent(loc: string | null): boolean {
  if (!loc) return true;
  if (loc === "T1") return true; // Tor exit node
  if (loc === "XX") return true;
  return CONSENT_REQUIRED_REGIONS.has(loc);
}

export function readConsent(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (parsed.decision !== "accepted" && parsed.decision !== "refused") return null;
    return {
      decision: parsed.decision,
      region: typeof parsed.region === "string" ? parsed.region : "XX",
      at: typeof parsed.at === "string" ? parsed.at : new Date().toISOString(),
      notice: typeof parsed.notice === "string" ? parsed.notice : CONSENT_NOTICE_VERSION,
    };
  } catch {
    return null;
  }
}

export function writeConsent(decision: ConsentDecision, region: string | null): void {
  const record: ConsentRecord = {
    decision,
    region: region ?? "XX",
    at: new Date().toISOString(),
    notice: CONSENT_NOTICE_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable — decision still applies for this visit */
  }
}

/** Fired by the footer "Cookie settings" link to reopen the banner. */
export const OPEN_COOKIE_SETTINGS_EVENT = "ocd:open-cookie-settings";
