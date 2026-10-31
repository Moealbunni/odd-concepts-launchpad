import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { ar, dictionaries, en } from "./translations";

describe("AI Outreach Autopilot service", () => {
  test("retains its own page link", () => {
    const item = en.services.items.find(
      (service) => service.name === "AI Outreach Autopilot",
    );
    assert.ok(item, "AI Outreach Autopilot must be listed in the services");
    assert.equal(item.link, "/services/ai-outreach");
  });

  test("is listed in Arabic with the same page link", () => {
    const item = ar.services.items.find(
      (service) => service.link === "/services/ai-outreach",
    );
    assert.ok(item, "the Arabic services must link to the same page");
    assert.ok(item.detail.length > 0, "the Arabic card needs its own detail");
  });

  test("has full page copy in both languages", () => {
    for (const lang of ["en", "ar"] as const) {
      const page = dictionaries[lang].aiOutreach;
      assert.equal(page.steps.length, 4);
      assert.equal(page.included.length, 6);
      assert.equal(page.guards.length, 4);
      assert.ok(page.backToServices.length > 0);
      assert.ok(
        page.steps.every(
          (step) => step.title.length > 0 && step.detail.length > 0,
        ),
      );
    }
  });
});
