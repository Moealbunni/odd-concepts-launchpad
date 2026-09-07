import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/primitives/Container";
import { BrandButton } from "@/components/primitives/BrandButton";
import { useT } from "@/i18n/LanguageContext";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <Container className="py-16 pb-28 md:pb-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
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
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  <span dir="ltr">WhatsApp {siteConfig.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                  dir="ltr"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
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
                    className="transition-colors hover:text-foreground"
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
            <BrandButton asChild>
              <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
            </BrandButton>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {siteConfig.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. {t.footer.rightsReserved}</p>
          <p className="italic">{t.footer.portfolioDisclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
