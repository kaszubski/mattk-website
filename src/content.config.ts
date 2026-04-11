import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(),
      deck: z.string().optional(),
      description: z.string(),
      date: z.coerce.date(),
      mediumUrl: z.string().url(),
      category: z.enum(["leadership", "coding"]),
      readingTimeMinutes: z.number().int().positive().optional(),
      ogImage: image().optional(),
    }),
});

export const collections = { writing };
