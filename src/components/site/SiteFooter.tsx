import { Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/primitives/Container";
import { BrandButton } from "@/components/primitives/BrandButton";
import { useT } from "@/i18n/LanguageContext";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";
import { Wordmark } from "./Wordmark";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6H223c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <Container className="py-16 pb-28 md:pb-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <Wordmark className="text-base" markClassName="h-12" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.site.positioning}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={siteConfig.phoneUrl} className="transition-colors hover:text-foreground">
                  {t.footer.call} <span dir="ltr">{siteConfig.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-foreground"
                  dir="ltr"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <BrandButton asChild variant="secondary" size="md" className="h-auto min-h-11 w-full whitespace-normal py-2.5 text-center">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppGlyph className="size-4 shrink-0" />
                  {t.footer.whatsappButton}
                </a>
              </BrandButton>
              <BrandButton asChild variant="secondary" size="md" className="h-auto min-h-11 w-full whitespace-normal py-2.5 text-center">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="size-4 shrink-0" aria-hidden="true" />
                  {t.footer.instagramButton}
                </a>
              </BrandButton>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex min-h-8 items-center transition-colors hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {t.footer.readyToGrow}
            </h3>
            <BrandButton asChild className="h-auto min-h-11 w-full whitespace-normal py-2.5 text-center">
              <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
            </BrandButton>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {siteConfig.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex min-h-8 items-center transition-colors hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
                  }
                  className="inline-flex min-h-8 items-center text-start transition-colors hover:text-foreground"
                >
                  {t.consent.settings}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {t.footer.rightsReserved}
          </p>
        </div>
      </Container>
    </footer>
  );
}
