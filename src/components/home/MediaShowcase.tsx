import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { VideoPlaybackProvider } from "@/components/media/VideoPlaybackContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ads,
  categoryLabel,
  photos,
  ugc,
  videos,
  type MediaItem,
} from "@/data/media";

const tabs = [
  { value: "videos", label: "Videos", items: videos },
  { value: "ugc", label: "UGC", items: ugc },
  { value: "photos", label: "Photos", items: photos },
  { value: "ads", label: "Ads", items: ads },
].filter((t) => t.items.length > 0);


function PhotoCard({ item }: { item: MediaItem }) {
  return (
    <div className="group/photo relative h-full w-full overflow-hidden rounded-xl bg-[hsl(var(--surface-elevated))]">
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted/30">
          <span className="px-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Placeholder
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-background/80 via-background/10 to-background/40 p-4 opacity-100 motion-safe:transition-opacity motion-safe:duration-300 md:opacity-0 md:group-hover/photo:opacity-100">
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {categoryLabel[item.category]}
        </span>
        <p className="text-sm font-medium text-foreground">{item.title}</p>
      </div>
    </div>
  );
}

function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div
      className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3"
      style={{ gridAutoFlow: "dense" }}
    >
      {items.map((item, i) => (
        <Reveal key={item.id} delay={i * 100}>
          <Card className="overflow-hidden p-2">
            <div style={{ aspectRatio: String(item.ratio) }} className="w-full">
              {item.category === "photo" ? (
                <PhotoCard item={item} />
              ) : (
                <VideoPlayer
                  title={item.title}
                  tag={categoryLabel[item.category]}
                  videoUrl={item.videoUrl}
                  posterUrl={item.posterUrl}
                />
              )}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function MediaShowcase() {
  return (
    <Section aria-labelledby="media-showcase-heading">
      <VideoPlaybackProvider>
      <SectionHeading
        eyebrow="Studio output"
        title={<span id="media-showcase-heading">Video, UGC, photos &amp; ads.</span>}
        subtitle="Real production work — organized by type."
      />

      <Tabs defaultValue="videos" className="mt-12">
        <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-border bg-transparent p-0">
          {tabs.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="relative rounded-none border-0 bg-transparent px-4 py-3 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <span className="relative z-10">{t.label}</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 bottom-0 h-[2px] rounded-full opacity-0 motion-safe:transition-opacity [[data-state=active]_&]:opacity-100"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((t) => (
          <TabsContent key={t.value} value={t.value} className="mt-10">
            <MediaGrid items={t.items} />
          </TabsContent>
        ))}
      </Tabs>
      </VideoPlaybackProvider>
    </Section>
  );
}
