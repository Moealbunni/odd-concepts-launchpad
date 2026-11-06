import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { useT } from "@/i18n/LanguageContext";

/** Proper nouns — never translated. */
const clients = [
  "VenYa",
  "Gem Hospitality",
  "7 Management",
  "The Spot Network",
  "Room 44",
  "Amer Central AC",
  "Ekoko",
];

export function OurClients() {
  const t = useT();
  return (
    <Section aria-labelledby="our-clients-heading">
      <SectionHeading
        eyebrow={t.ourClients.eyebrow}
        title={
          <span id="our-clients-heading">
            {t.ourClients.title}
            <span className="gradient-text">{t.ourClients.titleGradient}</span>
            {t.ourClients.titleAfter}
          </span>
        }
        subtitle={t.ourClients.subtitle}
      />

      <Reveal delay={120} className="mt-14">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((name, i) => (
            <li
              key={name}
              className="group bg-background/70 px-6 py-8 transition-colors duration-200 hover:bg-highlight-soft md:px-7 md:py-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-highlight md:text-xl">
                <span dir="ltr">{name}</span>
              </h3>
            </li>
          ))}

          <li className="flex flex-col justify-center bg-background/70 px-6 py-8 md:px-7 md:py-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-highlight">
              ++
            </span>
            <p className="mt-3 text-lg font-semibold leading-snug text-foreground md:text-xl">
              {t.ourClients.andMore}
            </p>
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}
