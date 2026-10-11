# RD Webdev

Sito personale con [Eleventy (11ty)](https://www.11ty.dev/).

```sh
npm install
npm run dev
```

`npm run build` genera il sito statico in `_site/`.

`npm run test:visual` verifica le tre homepage con Playwright e Chrome a desktop e mobile, confrontandole con le snapshot salvate in `tests/homepages.spec.js-snapshots/`. Dopo una modifica visiva intenzionale: `npm run test:visual -- --update-snapshots`.

Apri `/` per la homepage Light Terminal corrente. About, CV e Contact seguono lo stesso design. Le prove README e Web90 restano navigabili a `/readme/` e `/web90/` e salvate in `docs/design/backups/`; `/designs/` permette di confrontarle.

`PRODUCT.md` raccoglie il contesto di prodotto. Le proposte e i riferimenti sono in `docs/design/` e `docs/references/`; i futuri PRD in `docs/prd/`.

I testi delle pagine si elaborano in [`docs/content/`](docs/content/README.md). Sono bozze Markdown separate dal sito: dopo la revisione si applicano ai template e ai dati in `src/`.
