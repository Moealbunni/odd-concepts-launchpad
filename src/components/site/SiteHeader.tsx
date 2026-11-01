import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { BrandButton } from "@/components/primitives/BrandButton";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/LanguageContext";
import { Wordmark } from "./Wordmark";
import { LanguageSwitcher } from "./LanguageSwitcher";

const mainNav = siteConfig.nav.filter((n) => n.href !== "/free-growth-plan");

export function SiteHeader() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // ESC closes mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200 ease-out",
        "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid h-20 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 xl:flex xl:h-24 xl:justify-between">
        <Wordmark
          className="min-w-0 xl:shrink-0"
          markClassName="h-auto max-h-12 w-full max-w-[190px] xl:h-16 xl:max-h-16 xl:w-auto xl:max-w-none"
        />

        <nav
          aria-label="Primary"
          className="hidden shrink-0 items-center gap-6 xl:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={{ exact: item.href === "/" }}
              className="relative text-sm text-muted-foreground transition-colors duration-300 ease-out hover:text-foreground data-[status=active]:text-foreground after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-full after:origin-[left] after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:gradient-bg hover:after:scale-x-100 data-[status=active]:after:scale-x-100 rtl:after:origin-[right]"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:ms-8 xl:flex">
          <LanguageSwitcher />
          <BrandButton asChild variant="secondary" size="sm">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.site.whatsappCta}
            </a>
          </BrandButton>
          <BrandButton asChild size="sm">
            <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
          </BrandButton>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-lg"
            aria-label={open ? t.site.closeMenu : t.site.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          "xl:hidden border-border bg-background/95 backdrop-blur-md",
          open ? "max-h-[calc(100dvh-5rem)] overflow-y-auto border-b" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={{ exact: item.href === "/" }}
              className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground data-[status=active]:text-foreground"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <BrandButton asChild variant="secondary">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site.whatsappCta}
              </a>
            </BrandButton>
            <BrandButton asChild>
              <Link to={siteConfig.primaryCta.href}>{t.site.primaryCta}</Link>
            </BrandButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
