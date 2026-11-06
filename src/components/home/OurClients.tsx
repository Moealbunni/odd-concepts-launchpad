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

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {clients.map((name, i) => (
          <Reveal
            as="li"
            key={name}
            delay={i * 70}
            className="client-card flex min-h-[10rem] flex-col justify-between rounded-3xl p-7 sm:min-h-[11.5rem] md:p-8 lg:min-h-[13rem]"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                aria-hidden="true"
                className="client-monogram inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-semibold tracking-wide text-primary-foreground"
              >
                {monogram(name)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-[1.75rem]">
                <span dir="ltr">{name}</span>
              </h3>
              <span
                aria-hidden="true"
                className="client-rule mt-4 block"
              />
            </div>
          </Reveal>
        ))}

        <Reveal
          as="li"
          delay={clients.length * 70}
          className="client-card client-card-accent flex min-h-[10rem] flex-col justify-between rounded-3xl p-7 sm:min-h-[11.5rem] md:p-8 lg:min-h-[13rem]"
        >
          <div className="flex items-start justify-between gap-4">
            <span
              aria-hidden="true"
              className="client-monogram inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-semibold tracking-wide text-primary-foreground"
            >
              ++
            </span>
          </div>

          <div className="mt-8">
            <h3 className="gradient-text-bright text-2xl font-semibold leading-snug md:text-[1.75rem]">
              {t.ourClients.andMore}
            </h3>
            <span aria-hidden="true" className="client-rule mt-4 block" />
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}
