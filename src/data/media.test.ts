/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { getGroup, getMediaSections, mediaItems } from "./media";

describe("Work media organization", () => {
  test("both uploaded Vera videos are event-artwork reels", () => {
    for (const id of ["m-verajordan", "m-veraandor"]) {
      const item = mediaItems.find((media) => media.id === id);
      expect(item?.category).toBe("eventArtwork");
      expect(item?.ratio).toBe(1080 / 1920);
      if (!item) throw new Error(`Missing ${id}`);
      expect(getGroup(item)).toBe("reels");
    }
  });
  test("matching reel categories stay together in the requested order", () => {
    expect(getMediaSections("reels").map((section) => section.category)).toEqual([
      "promos", "venuePromos", "eventArtwork", "viral", "shoots", "avatar", "videoEdits",
    ]);
  });
  test("company and venue promos are separate", () => {
    expect(mediaItems.find((item) => item.id === "m-room44reel")?.category).toBe("venuePromos");
    expect(mediaItems.find((item) => item.id === "m-4745")?.category).toBe("promos");
  });
  test("every production appears exactly once in its format's sections", () => {
    const grouped = ["cinematic", "reels"] as const;
    const ids = grouped.flatMap((group) => getMediaSections(group).flatMap((section) => section.items.map((item) => item.id)));
    expect(ids.length).toBe(mediaItems.length);
    expect(new Set(ids).size).toBe(mediaItems.length);
  });
});