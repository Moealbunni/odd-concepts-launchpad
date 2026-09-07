import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";
import lighttrailsAsset from "@/assets/media/dubai-street-lighttrails.jpg.asset.json";

export function TheReality() {
  const t = useT();
  return (
    <Section aria-labelledby="reality-heading">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center md:gap-14">
        <div>
          <SectionHeading
            eyebrow={t.reality.eyebrow}
            title={<span id="reality-heading">{t.reality.title}</span>}
          />

          <Reveal delay={160} className="mt-8">
            <div className="h-px w-24 gradient-bg" aria-hidden />
          </Reveal>

          <Reveal delay={240} className="mt-8">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>{t.reality.p1}</p>
              <p>{t.reality.p2}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div
            className="media-frame w-full max-w-sm rounded-xl border border-border/60 md:max-w-none"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={lighttrailsAsset.url}
              alt={t.reality.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
