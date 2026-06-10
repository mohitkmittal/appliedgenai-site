import { defineCollection, z } from 'astro:content';

/**
 * Every recipe follows the SAME fixed structure so any reader can adopt it.
 * The frontmatter below is the contract; the body follows the section order
 * documented in src/content/recipes/_TEMPLATE.mdx.
 */
const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),          // one-line "what & why"
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Author block (shown on every recipe)
    author: z.string(),
    authorUrl: z.string().url().optional(),

    // Adoption metadata
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    readingTime: z.string().optional(),     // e.g. "8 min"
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]), // e.g. ["Python", "Anthropic API"]

    // Architecture diagram. Either a Mermaid string (rendered inline) or an image path.
    diagram: z.string().optional(),
    diagramAlt: z.string().optional(),
    diagramImage: z.string().optional(),

    // Link to runnable code in the cookbook repo
    code: z.string().url().optional(),

    draft: z.boolean().default(false),
  }),
});

export const collections = { recipes };
