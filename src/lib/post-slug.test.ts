import { describe, expect, it } from "vitest";
import { writingSlugFromEntryId } from "./post-slug";

describe("writingSlugFromEntryId", () => {
  it("removes .mdx", () => {
    expect(writingSlugFromEntryId("which-goalkeeper-are-you.mdx")).toBe("which-goalkeeper-are-you");
  });

  it("removes .md", () => {
    expect(writingSlugFromEntryId("draft.md")).toBe("draft");
  });

  it("leaves slug unchanged when no extension", () => {
    expect(writingSlugFromEntryId("plain-slug")).toBe("plain-slug");
  });
});
