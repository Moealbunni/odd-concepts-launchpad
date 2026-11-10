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
      "promos", "venuePromos", "eventArtwork", "viralHooks", "viral", "shoots", "avatar", "videoEdits", "motionGraphics",
    ]);
  });
  test("company and venue promos are separate", () => {
    assert.equal(mediaItems.find((item) => item.id === "m-room44reel")?.category, "venuePromos");
    assert.equal(mediaItems.find((item) => item.id === "m-4745")?.category, "promos");
  });
  test("the company mascot video belongs to company promos, not storytelling", () => {
    const item = mediaItems.find((media) => media.id === "m-amer");
    assert.equal(item?.category, "promos");
    assert.equal(getGroup(item!), "cinematic");
  });
  test("all three music promos are landscape cinematic pieces in their own section", () => {
    for (const id of ["m-musicpromo1", "m-musicpromo2", "m-musicpromo3"]) {
      const item = mediaItems.find((media) => media.id === id);
      if (!item) throw new Error(`Missing ${id}`);
      assert.equal(item.category, "musicPromo");
      assert.equal(item.ratio, 1920 / 1080);
      assert.equal(getGroup(item), "cinematic");
    }
    const section = getMediaSections("cinematic").find((entry) => entry.category === "musicPromo");
    assert.deepEqual(section?.items.map((item) => item.id), ["m-musicpromo1", "m-musicpromo2", "m-musicpromo3"]);
  });
  test("all ten uploaded viral marketing hooks belong to their own Reels section", () => {
    const section = getMediaSections("reels").find((entry) => entry.category === "viralHooks");
    assert.deepEqual(section?.items.map((item) => item.id), Array.from({ length: 10 }, (_, index) => `m-hook${String(index + 1).padStart(2, "0")}`));
    for (const item of section?.items ?? []) {
      assert.equal(item.ratio, 720 / 1280);
      assert.equal(getGroup(item), "reels");
    }
  });
  test("the uploaded motion graphics video belongs to its own Reels section", () => {
    const section = getMediaSections("reels").find((entry) => entry.category === "motionGraphics");
    assert.deepEqual(section?.items.map((item) => item.id), ["m-motiongraphics"]);
    assert.equal(section?.items[0]?.ratio, 720 / 1280);
  });
  test("every production appears exactly once in its format's sections", () => {
    const grouped = ["cinematic", "reels"] as const;
    const ids = grouped.flatMap((group) => getMediaSections(group).flatMap((section) => section.items.map((item) => item.id)));
    assert.equal(ids.length, mediaItems.length);
    assert.equal(new Set(ids).size, mediaItems.length);
  });
});