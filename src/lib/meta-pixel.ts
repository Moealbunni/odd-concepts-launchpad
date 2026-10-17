/**
 * Meta Pixel (browser) — base snippet, initialized only after advertising
 * consent is permitted. ID-only init: no advanced matching is configured.
 */

const PIXEL_ID = "1814302316271756";

type FbqCallable = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqCallable;
    _fbq?: FbqCallable;
  }
}

let inited = false;

/** Installs the base snippet once and fires the initial PageView. */
export function initMetaPixel(): void {
  if (inited || typeof window === "undefined") return;
  if (window.fbq) {
    // Snippet already present in this document — just initialize.
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
    inited = true;
    return;
  }
  const n: FbqCallable = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod.apply(n, args);
    } else {
      n.queue!.push(args);
    }
  };
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  n("init", PIXEL_ID);
  n("track", "PageView");
  inited = true;
}

export function isMetaPixelInitialized(): boolean {
  return inited;
}

/** Consent granted — resume queued/suspended reporting. */
export function grantMetaConsent(): void {
  if (inited) window.fbq?.("consent", "grant");
}

/** Consent withdrawn — stop hits immediately, without a reload. */
export function revokeMetaConsent(): void {
  if (inited) window.fbq?.("consent", "revoke");
}
