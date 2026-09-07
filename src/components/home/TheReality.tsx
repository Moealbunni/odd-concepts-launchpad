import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import lighttrailsAsset from "@/assets/media/dubai-street-lighttrails.jpg.asset.json";

export function TheReality() {
  return (
    <Section aria-labelledby="reality-heading">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center md:gap-14">
        <div>
        <SectionHeading
          eyebrow="The reality"
          title={
            <span id="reality-heading">
              You’re great at what you do. Online, the business that shows up first wins.
            </span>
          }
        />

        <Reveal delay={160} className="mt-8">
          <div className="h-px w-24 gradient-bg" aria-hidden />
        </Reveal>

        <Reveal delay={240} className="mt-8">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Most customers choose whoever they find and trust first — not always the best option, just the easiest to find and the most convincing at a glance.
            </p>
            <p>
              If you’re hard to find or easy to overlook, you lose them before you ever get the chance to compete.
            </p>
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
              alt="Dubai city street at night with blue light trails rising between towers"
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
