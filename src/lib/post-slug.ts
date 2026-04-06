/** Strip Astro Content Collection file suffix so `post.id` matches URL slugs. */
export function writingSlugFromEntryId(entryId: string): string {
  return entryId.replace(/\.mdx?$/, "");
}
