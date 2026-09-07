import { MapPin, Target, ShieldCheck, type LucideIcon } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";
import museumAsset from "@/assets/media/museum-of-the-future.jpg.asset.json";

/** Icons follow the fixed order of `why.items` in the dictionaries. */
const icons: LucideIcon[] = [MapPin, Target, ShieldCheck];

export function WhyOddConcepts() {
  const t = useT();
  return (
    <Section aria-labelledby="why-heading">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center md:gap-14">
        <div>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={<span id="why-heading">{t.why.title}</span>}
            subtitle={t.why.subtitle}
          />
          <Reveal delay={160} className="mt-8 max-w-xl space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.why.p1}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.why.p2}
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div
            className="media-frame w-full max-w-sm rounded-xl border border-border/60 md:max-w-none"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={museumAsset.url}
              alt={t.why.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-10">
        <Card className="p-7 md:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.why.cardHeading}
          </h3>
          <ul className="mt-6 space-y-5">
            {t.why.items.map((item, i) => {
              const Icon = icons[i] ?? MapPin;
              return (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-[hsl(var(--surface-elevated))]"
                    aria-hidden
                  >
                    <Icon className="size-4 text-muted-foreground" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-sm font-medium text-foreground md:text-base">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.line}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
