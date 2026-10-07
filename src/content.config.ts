import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      title: z.string(),
      // 一覧に出す種類。掲載・選出は目立たせる
      category: z.enum(['release', 'join', 'event', 'press', 'award', 'update']).default('update'),
      link: z.url().optional(),
      image: image().optional(),
    }),
})

export const collections = { news }
