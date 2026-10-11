# RD Webdev

Sito personale con [Eleventy (11ty)](https://www.11ty.dev/).

```sh
npm install
npm run dev
```

`npm run build` genera il sito statico in `_site/`.

`npm run test:visual` verifica le tre homepage con Playwright e Chrome a desktop e mobile, confrontandole con le snapshot salvate in `tests/homepages.spec.js-snapshots/`. Dopo una modifica visiva intenzionale: `npm run test:visual -- --update-snapshots`.

Apri `/` per la homepage Light Terminal corrente. Le prove README e Web90 restano navigabili a `/readme/` e `/web90/` e salvate in `docs/design/backups/`; `/designs/` permette di confrontarle. Le pagine About, CV e Contatti sono bozze comuni durante questa fase.

`PRODUCT.md` raccoglie il contesto di prodotto. Le proposte e i riferimenti sono in `docs/design/` e `docs/references/`; i futuri PRD in `docs/prd/`.
