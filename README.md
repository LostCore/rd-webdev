# riccardodangelo.com

This is the project for my personal website, [riccardodangelo.com](https://www.riccardodangelo.com). It presents my work as a Full Stack Web Developer and Systems Engineer, my AI-first approach grounded in prior technical experience, and my mentoring and coaching for IT professionals.

I developed the site with an AI-first workflow. It is built with [Eleventy (11ty)](https://www.11ty.dev/) and hosted on [Netlify](https://www.netlify.com).

## Project structure

- `src/` contains the Eleventy templates, shared data, and styles.
- `docs/content/` holds page-by-page editorial drafts. Italian source text is translated into English before it is applied to the site.
- `docs/design/` contains design exploration and saved alternatives. Light Terminal is the current direction; 90s README and 90 WEB remain available as backups.
- `docs/references/` contains source material for content and design. The private CV is excluded from Git.
- `PRODUCT.md` records product context and confirmed facts; `AGENTS.md` contains project instructions for coding agents.

## My trustworthy skills

- [Ponytail](https://github.com/DietrichGebert/ponytail)
- [Impeccable](https://github.com/pbakaus/impeccable)

## Development

```sh
npm install
npm run dev
```

`npm run build` generates the site in `_site/`. `npm run test:visual` builds it and runs the Playwright checks at desktop and mobile sizes. After an intentional visual change, update the screenshots with `npm run test:visual -- --update-snapshots`.

Search indexing is paused while the site is in progress. Before launch, remove the `noindex` meta tag in `src/_includes/base.njk` and the `X-Robots-Tag` rule in `netlify.toml`.

Follow the [search indexing launch procedure](docs/operations/search-indexing.md) when the content is ready.
