import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { VideoPlaybackProvider } from "@/components/media/VideoPlaybackContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getGroup,
  groupLabel,
  mediaItems,
  type MediaItem,
} from "@/data/media";

const cinematicItems = mediaItems.filter((i) => getGroup(i) === "cinematic");
const reelItems = mediaItems.filter((i) => getGroup(i) === "reels");

const tabs = [
  { value: "cinematic", label: groupLabel.cinematic, items: cinematicItems },
  { value: "reels", label: groupLabel.reels, items: reelItems },
].filter((t) => t.items.length > 0);

function MediaCard({
  item,
  index,
  objectFit,
  wrapperClassName,
}: {
  item: MediaItem;
  index: number;
  objectFit: "cover" | "contain";
  wrapperClassName?: string;
}) {
  return (
    <Reveal delay={index * 80}>
      <Card className={wrapperClassName ? `overflow-hidden p-2 ${wrapperClassName}` : "overflow-hidden p-2"}>
        <div style={{ aspectRatio: String(item.ratio) }} className="w-full">
          <VideoPlayer
            title={item.title}
            tag={groupLabel[getGroup(item)]}
            videoUrl={item.videoUrl}
            posterUrl={item.posterUrl}
            objectFit={objectFit}
          />
        </div>
      </Card>
    </Reveal>
  );
}

export function MediaShowcase() {
  return (
    <Section aria-labelledby="media-showcase-heading">
      <VideoPlaybackProvider>
        <SectionHeading
          eyebrow="Studio output"
          title={<span id="media-showcase-heading">Cinematic &amp; reels.</span>}
          subtitle="Real production work — organized by format."
        />

        <Tabs defaultValue={tabs[0]?.value ?? "cinematic"} className="mt-12">
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

          <TabsContent value="cinematic" className="mt-10">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
              {cinematicItems.map((item, i) => (
                <MediaCard key={item.id} item={item} index={i} objectFit="contain" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reels" className="mt-10">
            <div className="grid grid-cols-2 items-start gap-5 md:grid-cols-3 lg:grid-cols-4">
              {reelItems.map((item, i) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  index={i}
                  objectFit="cover"
                  wrapperClassName="mx-auto w-full max-w-[260px]"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </VideoPlaybackProvider>
    </Section>
  );
}
