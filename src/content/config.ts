import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Most hero photos are landscape and fill the wide banner via object-fit:
    // cover. Set 'portrait' for a tall photo (e.g. a phone-in-hand shot) so it
    // displays uncropped instead of getting cover-cropped down to a sliver.
    heroImageOrientation: z.enum(['landscape', 'portrait']).default('landscape'),
    // "amazon-finds" is a recurring series with its own archive page.
    // Any other value (or omitted) is a general long-form post.
    category: z.enum(['general', 'amazon-finds']).default('general'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
