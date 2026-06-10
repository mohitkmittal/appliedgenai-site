import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const recipes = await getCollection('recipes', ({ data }) => !data.draft);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: recipes
      .sort((a, b) => b.data.pubDate - a.data.pubDate)
      .map((r) => ({
        title: r.data.title,
        description: r.data.description,
        pubDate: r.data.pubDate,
        link: `/recipes/${r.slug}/`,
        categories: r.data.tags,
      })),
  });
}
