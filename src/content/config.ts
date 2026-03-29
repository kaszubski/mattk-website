import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    mediumUrl: z.string().url(),
    category: z.enum(["leadership", "coding"]),
  }),
});

export const collections = { writing };
