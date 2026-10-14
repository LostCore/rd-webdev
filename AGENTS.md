# Istruzioni per gli agenti

## Progetto

Sito personale sviluppato con Eleventy (11ty). Il prodotto e i fatti confermati sono in `PRODUCT.md`. Le proposte visive, i PRD e le reference vivono in `docs/`.

Light Terminal è la direzione di lavoro corrente su `/`, `/terminal/`, `/about/`, `/cv/` e `/contact/`. Header e footer Terminal sono condivisi negli include; le tre pagine interne usano `terminal.css`. README e Web90 sono backup di design in `docs/design/backups/` e restano navigabili a `/readme/` e `/web90/`; il confronto è su `/designs/`. Mantieni i backup finché l'autore non sceglie una direzione definitiva. I fatti condivisi sono in `src/_data/profile.json`.

## Comandi

- `npm install`
- `npm run dev` per lo sviluppo locale
- `npm run build` per generare `_site/`
- `npm run test:visual` per confrontare le tre homepage in Chrome a desktop e mobile

## Regole di lavoro

- Leggi `PRODUCT.md` prima di cambiare contenuti o struttura del sito. Non inventare esperienze, clienti, risultati, progetti o recapiti.
- Scrivi in inglese tutti i contenuti pubblici del sito, inclusi metadati, etichette accessibili e testi delle pagine comuni.
- Usa `docs/content/` come spazio di lavoro editoriale, con un file Markdown in inglese per pagina. Quando l'autore chiede di applicare i testi, aggiorna il sito dai file Markdown. I file non sono pubblicati automaticamente. Le note editoriali non vanno pubblicate.
- Tratta ogni proposta in `docs/design/` come esplorazione finché non viene scelta. Tieni separati i fatti di prodotto dalle decisioni visive.
- Mantieni Eleventy e il sito statico semplici: aggiungi dipendenze o JavaScript client solo quando servono a una funzione richiesta.
- Cura semantica HTML, navigazione da tastiera, contrasto e versione mobile anche nelle proposte rétro.
- Conserva la provenienza e verifica i diritti d'uso prima di inserire asset esterni nel sito. Le risorse in `docs/references/` servono come ispirazione, non come asset pubblicabili.
- Il CV privato è descritto in `docs/references/CV.md` ed escluso da Git. Usalo come fonte per i contenuti. L'email in `docs/references/contatti.md` è autorizzata nel sorgente HTML; non pubblicare il PDF né gli altri recapiti personali senza una scelta esplicita dell'autore.
- Dopo modifiche al sito, esegui `npm run build`.
- Dopo modifiche visive alle homepage, aggiorna le anteprime in `docs/design/previews/` e controlla desktop e mobile.
- Se la modifica visiva è intenzionale, aggiorna le snapshot con `npm run test:visual -- --update-snapshots` e ricontrolla le immagini generate.
- Quando l'autore chiede di rendere il sito indicizzabile, segui `docs/operations/search-indexing.md` e verifica il risultato sul dominio di produzione dopo il deploy.
