import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { getGroup, getMediaSections, mediaItems } from "./media";

describe("Work media organization", () => {
  test("both uploaded Vera videos are event-artwork reels", () => {
    for (const id of ["m-verajordan", "m-veraandor"]) {
      const item = mediaItems.find((media) => media.id === id);
      assert.equal(item?.category, "eventArtwork");
      assert.equal(item?.ratio, 1080 / 1920);
      if (!item) throw new Error(`Missing ${id}`);
      assert.equal(getGroup(item), "reels");
    }
  });
  test("matching reel categories stay together in the requested order", () => {
    assert.deepEqual(getMediaSections("reels").map((section) => section.category), [
      "promos", "venuePromos", "eventArtwork", "viral", "shoots", "avatar", "videoEdits",
    ]);
  });
  test("company and venue promos are separate", () => {
    assert.equal(mediaItems.find((item) => item.id === "m-room44reel")?.category, "venuePromos");
    assert.equal(mediaItems.find((item) => item.id === "m-4745")?.category, "promos");
  });
  test("every production appears exactly once in its format's sections", () => {
    const grouped = ["cinematic", "reels"] as const;
    const ids = grouped.flatMap((group) => getMediaSections(group).flatMap((section) => section.items.map((item) => item.id)));
    assert.equal(ids.length, mediaItems.length);
    assert.equal(new Set(ids).size, mediaItems.length);
  });
});