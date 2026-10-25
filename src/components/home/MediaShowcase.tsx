
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
import { getMediaSections, type MediaGroup, type MediaCategory, type MediaItem } from "@/data/media";

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
    <Reveal delay={Math.min(index, 3) * 80}>
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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ "cinematic-ads": true, "reels-promos": true });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const tabs = [
    { value: "cinematic" as const, label: t.media.tabCinematic },
    { value: "reels" as const, label: t.media.tabReels },
  ].filter((tab) => getMediaSections(tab.value).length > 0);

  const renderGallery = (value: MediaGroup) => {
    const cinematic = value === "cinematic";
    const sections = getMediaSections(value);
    const categories = sections.map((section) => section.category);
    const activeFilter = filters[value] ?? "all";
    const filtered = activeFilter === "all" ? sections : sections.filter((section) => section.category === activeFilter);
    const limit = cinematic ? 2 : 4;

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
                if (category !== "all") setOpenSections((current) => ({ ...current, [`${value}-${category}`]: true }));
              }}
            >
              {category === "all" ? t.media.filterAll : t.media.categories[category]}
            </Button>
          ))}
        </div>
        <div className="divide-y divide-border border-y border-border">
          {filtered.map(({ category, items }) => {
            const key = `${value}-${category}`;
            const open = openSections[key] ?? false;
            const visible = expanded[key] ? items : items.slice(0, limit);
            return (
              <div key={key}>
                <h3>
                  <Button
                    type="button"
                    variant="ghost"
                    aria-expanded={open}
                    aria-controls={`${key}-content`}
                    className="h-auto w-full justify-between gap-3 rounded-none px-0 py-5 text-start hover:bg-transparent"
                    onClick={() => setOpenSections((current) => ({ ...current, [key]: !open }))}
                  >
                    <span className="text-base font-semibold text-foreground md:text-lg">{t.media.categories[category]}</span>
                    <span className="flex shrink-0 items-center gap-4 text-muted-foreground">
                      <span className="text-sm tabular-nums">{items.length}</span>
                      {open ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
                    </span>
                  </Button>
                </h3>
                {open && (
                  <div id={`${key}-content`} className="pb-8">
                    <div className={cinematic ? "grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8" : "grid grid-cols-1 items-start gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                      {visible.map((item, i) => (
                        <MediaCard key={item.id} item={item} index={i}
                          objectFit={cinematic ? "contain" : "cover"}
                          boxRatio={cinematic ? "16/9" : "9/16"}
                          groupName={t.media.categories[category]}
                          wrapperClassName={cinematic ? undefined : "mx-auto w-full max-w-[260px]"}
                        />
                      ))}
                    </div>
                    {items.length > limit && (
                      <div className="mt-6 flex justify-center">
                        <Button type="button" variant="outline" aria-expanded={expanded[key] ?? false}
                          onClick={() => setExpanded((current) => ({ ...current, [key]: !current[key] }))}>
                          {expanded[key] ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
                          {expanded[key] ? t.media.showLess : t.media.showMore}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
            {renderGallery("cinematic")}
          </TabsContent>

          <TabsContent value="reels" className="mt-10">
            {renderGallery("reels")}
          </TabsContent>
        </Tabs>
      </VideoPlaybackProvider>
    </Section>
  );
}
