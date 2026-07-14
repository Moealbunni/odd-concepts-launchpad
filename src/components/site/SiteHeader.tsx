import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { BrandButton } from "@/components/primitives/BrandButton";
import { Wordmark } from "./Wordmark";

const mainNav = siteConfig.nav.filter((n) => n.href !== "/free-growth-plan");

export function SiteHeader() {
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
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Wordmark
          className="text-base md:text-lg"
          markClassName="h-10"
        />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeOptions={{ exact: item.href === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <BrandButton asChild variant="secondary" size="sm">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </BrandButton>
          <BrandButton asChild size="sm">
            <Link to={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Link>
          </BrandButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
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
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <BrandButton asChild variant="secondary">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </BrandButton>
            <BrandButton asChild>
              <Link to={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Link>
            </BrandButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
