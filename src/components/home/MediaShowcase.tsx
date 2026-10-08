
import { Section } from "@/components/primitives/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { VideoPlaybackProvider } from "@/components/media/VideoPlaybackContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useT } from "@/i18n/LanguageContext";
import type { Translations } from "@/i18n/translations";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGroup, mediaItems, type MediaCategory, type MediaItem } from "@/data/media";

const cinematicItems = mediaItems.filter((i) => getGroup(i) === "cinematic");
const reelItems = mediaItems.filter((i) => getGroup(i) === "reels");
type Filter = "all" | MediaCategory;

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
  const [filters, setFilters] = useState<Record<string, Filter>>({ cinematic: "all", reels: "all" });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ cinematic: false, reels: false });
  const tabs = [
    { value: "cinematic", label: t.media.tabCinematic, items: cinematicItems },
    { value: "reels", label: t.media.tabReels, items: reelItems },
  ].filter((tab) => tab.items.length > 0);

  const renderGallery = (value: string, items: MediaItem[], cinematic: boolean) => {
    const categories = Array.from(new Set(items.map((item) => item.category)));
    const activeFilter = filters[value] ?? "all";
    const filtered = activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);
    const limit = cinematic ? 6 : 8;
    const visible = expanded[value] || activeFilter !== "all" ? filtered : filtered.slice(0, limit);
    const canExpand = activeFilter === "all" && filtered.length > limit;

    return (
      <>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label={`${value} filters`}>
          {(["all", ...categories] as Filter[]).map((category) => (
            <Button
              key={category}
              type="button"
              size="sm"
              variant={activeFilter === category ? "secondary" : "ghost"}
              aria-pressed={activeFilter === category}
              className="shrink-0"
              onClick={() => {
                setFilters((current) => ({ ...current, [value]: category }));
                setExpanded((current) => ({ ...current, [value]: false }));
              }}
            >
              {category === "all" ? t.media.filterAll : t.media.categories[category]}
            </Button>
          ))}
        </div>
        <div className={cinematic ? "grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8" : "grid grid-cols-2 items-start gap-5 md:grid-cols-3 lg:grid-cols-4"}>
          {visible.map((item, i) => (
            <MediaCard
              key={item.id}
              item={item}
              index={i}
              objectFit={cinematic ? "contain" : "cover"}
              boxRatio={cinematic ? "16/9" : "9/16"}
              groupName={cinematic ? t.media.tabCinematic : t.media.tabReels}
              wrapperClassName={cinematic ? undefined : "mx-auto w-full max-w-[260px]"}
            />
          ))}
        </div>
        {canExpand && (
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setExpanded((current) => ({ ...current, [value]: !current[value] }))}
              aria-expanded={expanded[value]}
            >
              {expanded[value] ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
              {expanded[value] ? t.media.showLess : t.media.showMore}
            </Button>
          </div>
        )}
      </>
    );
  };

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
            {renderGallery("cinematic", cinematicItems, true)}
          </TabsContent>

          <TabsContent value="reels" className="mt-10">
            {renderGallery("reels", reelItems, false)}
          </TabsContent>
        </Tabs>
      </VideoPlaybackProvider>
    </Section>
  );
}
