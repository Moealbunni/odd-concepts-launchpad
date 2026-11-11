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
  "Ignite Events",
];

/** Words never used for a monogram. */
const ARTICLES = new Set(["the", "a", "an", "al", "el"]);

/** Up to two initials, e.g. "The Spot Network" -> "SN", "Room 44" -> "R4". */
function monogram(name: string) {
  const words = name
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word) && !ARTICLES.has(word.toLowerCase()));

  if (words.length === 0) return name.slice(0, 1).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

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

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
        {clients.map((name, i) => (
          <Reveal
            as="li"
            key={name}
            delay={i * 50}
            className="client-card flex flex-col justify-between gap-5 rounded-2xl p-4 md:p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <span
                aria-hidden="true"
                className="client-monogram inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold tracking-wide text-primary-foreground"
              >
                {monogram(name)}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-snug text-foreground sm:text-base lg:text-lg">
                <span dir="ltr">{name}</span>
              </h3>
              <span aria-hidden="true" className="client-rule mt-2.5 block" />
            </div>
          </Reveal>
        ))}

        <Reveal
          as="li"
          delay={clients.length * 50}
          className="client-card client-card-accent flex flex-col justify-between gap-5 rounded-2xl p-4 md:p-5"
        >
          <div className="flex items-start justify-between gap-2">
            <span
              aria-hidden="true"
              className="client-monogram inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold tracking-wide text-primary-foreground"
            >
              ++
            </span>
          </div>

          <div>
            <h3 className="gradient-text-bright text-sm font-semibold leading-snug sm:text-base lg:text-lg">
              {t.ourClients.andMore}
            </h3>
            <span aria-hidden="true" className="client-rule mt-2.5 block" />
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
