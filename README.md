# appliedgenai.io

The website for **Applied GenAI** — practical, opinionated recipes for building with generative AI. Built with [Astro](https://astro.build) + MDX.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve the built site
```

## Write a new recipe

1. Copy `src/content/recipes/_TEMPLATE.mdx` to `src/content/recipes/your-recipe.mdx`.
2. Fill in **every** frontmatter field (title, description, author, difficulty, tags, stack, diagram, code link).
3. Keep the section order from the template — every recipe shares the same structure so readers can adopt any of them the same way.
4. Diagrams: write [Mermaid](https://mermaid.js.org) in the `diagram:` frontmatter field, or set `diagramImage:` to an image in `public/diagrams/`.
5. Set `draft: false` to publish. `npm run dev` to preview.

## Structure

```
src/
  content/recipes/   # the recipes (MDX) + _TEMPLATE.mdx (the fixed structure)
  layouts/           # Base + Recipe layouts
  components/        # FormattedDate, Mermaid
  pages/             # index, about, recipes/[slug], tags/[tag], rss.xml
  consts.ts          # site title, cookbook URL — EDIT the GitHub handle here
public/              # favicon, CNAME (custom domain), diagrams/
```

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages. See `../SETUP.md` for one-time setup.
Update the GitHub handle in `src/consts.ts` (`COOKBOOK_URL`) and in recipe `code:` links.
