import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageContext";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  currentRegion,
  lookupRegion,
  readConsent,
  regionRequiresConsent,
  writeConsent,
  type ConsentDecision,
} from "@/lib/consent";
import {
  grantMetaConsent,
  initMetaPixel,
  isMetaPixelInitialized,
  revokeMetaConsent,
} from "@/lib/meta-pixel";

/**
 * Regional cookie banner (route 1): shown to visitors in consent-required
 * regions — and whenever the region is unknown — before any advertising
 * measurement. Accept and decline are equally easy and are remembered;
 * a later change applies immediately, without a reload.
 */
export function ConsentBanner() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);

    const stored = readConsent();
    if (stored) {
      if (stored.decision === "accepted") {
        initMetaPixel();
        grantMetaConsent();
      }
      // Refused: keep measurement off.
      return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    }

    // No decision yet — resolve the region, then banner or permitted tracking.
    lookupRegion()
      .then((loc) => {
        if (cancelled) return;
        if (regionRequiresConsent(loc)) {
          setOpen(true);
        } else {
          initMetaPixel();
          grantMetaConsent();
        }
      })
      .catch(() => {
        if (!cancelled) setOpen(true);
      });

    return () => {
      cancelled = true;
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    };
  }, []);

  const decide = useCallback((decision: ConsentDecision) => {
    writeConsent(decision, currentRegion());
    if (decision === "accepted") {
      initMetaPixel();
      grantMetaConsent();
    } else if (isMetaPixelInitialized()) {
      revokeMetaConsent();
    }
    setOpen(false);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:px-6 md:pb-6">
      <div
        role="dialog"
        aria-label={t.consent.title}
        className="studio-card mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border/80 bg-background/95 p-5 shadow-lg backdrop-blur md:flex-row md:items-center md:gap-6 md:p-6"
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{t.consent.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {t.consent.body}{" "}
            <Link
              to="/privacy"
              className="whitespace-nowrap text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {t.consent.privacyLink}
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("refused")}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-input bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent md:flex-none"
          >
            {t.consent.reject}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:flex-none"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
