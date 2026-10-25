import phones from "@/assets/around-app-phones.png";
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { useT } from "@/i18n/LanguageContext";

export function AppsWork() {
  const t = useT();
  return (
    <Section aria-labelledby="apps-work-heading" className="border-t border-border/60">
      <SectionHeading
        eyebrow={t.appsWork.eyebrow}
        title={<span id="apps-work-heading" dir="ltr">{t.appsWork.title}</span>}
        subtitle={t.appsWork.subtitle}
      />
      <img
        src={phones}
        alt={t.appsWork.imageAlt}
        width={1233}
        height={804}
        loading="lazy"
        className="mx-auto mt-10 h-auto w-full max-w-4xl object-contain"
      />
    </Section>
  );
}