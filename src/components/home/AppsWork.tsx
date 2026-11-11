import phones from "@/assets/around-app-phones.png";
import ignitePhones from "@/assets/ignite-app-phones.png";
import ekokoPhones from "@/assets/ekoko-app-phones.png";
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
        width={1267}
        height={802}
        loading="lazy"
        className="mx-auto mt-10 h-auto w-full max-w-4xl object-contain"
      />
      <div className="mt-16 border-t border-border/60 pt-12">
        <h3 dir="ltr" className="font-display text-3xl font-semibold text-foreground md:text-4xl">{t.appsWork.ekokoTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.appsWork.ekokoSubtitle}</p>
        <img
          src={ekokoPhones}
          alt={t.appsWork.ekokoImageAlt}
          width={1316}
          height={886}
          loading="lazy"
          className="mx-auto mt-8 h-auto w-full max-w-4xl object-contain"
        />
      </div>
      <div className="mt-16 border-t border-border/60 pt-12">
        <h3 dir="ltr" className="font-display text-3xl font-semibold text-foreground md:text-4xl">{t.appsWork.igniteTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.appsWork.igniteSubtitle}</p>
        <img
          src={ignitePhones}
          alt={t.appsWork.igniteImageAlt}
          width={1316}
          height={870}
          loading="lazy"
          className="mx-auto mt-8 h-auto w-full max-w-4xl object-contain"
        />
      </div>
    </Section>
  );
}