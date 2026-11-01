import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { Button } from "@/components/ui/button";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ar", label: "AR" },
];

/**
 * Small on-brand EN / AR pill toggle. Same URL — switches language in place.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.site.languageLabel}
      className={cn(
        "inline-flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-muted/30 p-0.5",
        className,
      )}
    >
      {options.map((o) => {
        const active = lang === o.value;
        return (
          <Button
            variant="ghost"
            key={o.value}
            type="button"
            onClick={() => setLang(o.value)}
            aria-pressed={active}
            className={cn(
              "h-10 min-w-10 rounded-full px-2.5 text-xs font-semibold transition-colors duration-200 xl:h-8",
              active
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {o.label}
          </Button>
        );
      })}
    </div>
  );
}
