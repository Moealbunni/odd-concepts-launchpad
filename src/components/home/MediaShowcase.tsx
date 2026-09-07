
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { VideoPlaybackProvider } from "@/components/media/VideoPlaybackContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useT } from "@/i18n/LanguageContext";
import type { Translations } from "@/i18n/translations";
import { getGroup, mediaItems, type MediaItem } from "@/data/media";

const cinematicItems = mediaItems.filter((i) => getGroup(i) === "cinematic");
const reelItems = mediaItems.filter((i) => getGroup(i) === "reels");

function itemTitle(t: Translations, item: MediaItem) {
  return t.media.titles[item.id] ?? item.title;
}

function MediaCard({
  item,
  index,
  objectFit,
  boxRatio,
  groupName,
  wrapperClassName,
}: {
  item: MediaItem;
  index: number;
  objectFit: "cover" | "contain";
  boxRatio: string;
  groupName: string;
  wrapperClassName?: string;
}) {
  const t = useT();
  const title = itemTitle(t, item);
  return (
    <Reveal delay={index * 80}>
      <Card className={wrapperClassName ? `overflow-hidden p-2 ${wrapperClassName}` : "overflow-hidden p-2"}>
        <div className="min-w-0 px-1 pb-2 pt-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {groupName}
          </p>
          <h3 className="mt-1 text-sm font-medium leading-snug text-foreground">
            {title}
          </h3>
        </div>
        <div style={{ aspectRatio: boxRatio }} className="w-full">
          <VideoPlayer
            title={title}
            tag={groupName}
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
  const t = useT();
  const tabs = [
    { value: "cinematic", label: t.media.tabCinematic, items: cinematicItems },
    { value: "reels", label: t.media.tabReels, items: reelItems },
  ].filter((tab) => tab.items.length > 0);

  return (
    <Section aria-labelledby="media-showcase-heading">
      <VideoPlaybackProvider>
        <SectionHeading
          eyebrow={t.media.eyebrow}
          title={<span id="media-showcase-heading">{t.media.title}</span>}
          subtitle={t.media.subtitle}
        />

        <Tabs defaultValue={tabs[0]?.value ?? "cinematic"} className="mt-12">
          <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-border bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative rounded-none border-0 bg-transparent px-4 py-3 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                <span className="relative z-10">{tab.label}</span>
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
                <MediaCard
                  key={item.id}
                  item={item}
                  index={i}
                  objectFit="contain"
                  boxRatio="16/9"
                  groupName={t.media.tabCinematic}
                />
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
                  boxRatio="9/16"
                  groupName={t.media.tabReels}
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
