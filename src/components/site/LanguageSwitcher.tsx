import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

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
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-white/[0.03] p-0.5",
        className,
      )}
    >
      {options.map((o) => {
        const active = lang === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setLang(o.value)}
            aria-pressed={active}
            className={cn(
              "flex min-h-10 min-w-11 items-center justify-center rounded-full px-3 text-xs font-semibold tracking-wide transition-colors duration-200 md:min-h-0 md:min-w-0 md:px-2.5 md:py-1",
              active
                ? "bg-white/10 text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
