# Site copy workspace

Use one Markdown file per page to write the site's English copy:

| Page | Draft | Live route |
| --- | --- | --- |
| Home | [home.md](home.md) | `/` and `/terminal/` |
| About | [about.md](about.md) | `/about/` |
| CV | [cv.md](cv.md) | `/cv/` |
| Contact | [contact.md](contact.md) | `/contact/` |
| Contact confirmation | [contact-thanks.md](contact-thanks.md) | `/contact/thanks/` |

Edit the English copy directly under each page heading. `## Editorial notes` holds working questions and is not published.

These files sit outside Eleventy's `src/` directory, so editing them does not change the site automatically. Ask me to apply a page when it is ready: I will update its template or `src/_data/profile.json`, check factual claims against `PRODUCT.md` and the references, then run the build and relevant visual tests. I will keep the drafts aligned with later site changes.

For help with positioning or copy, ask to use `content_advisor`. The project agent is in [`.codex/agents/content_advisor.toml`](../../.codex/agents/content_advisor.toml) and uses GPT-6 Astra. You can discuss the content in Italian; it will write the page copy in English.

Do not add private contact details from the CV until you decide to publish them. Product decisions belong in `PRODUCT.md`, sources in `docs/references/`, and visual choices in `docs/design/`.
