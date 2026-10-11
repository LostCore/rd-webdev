# Proposta 01 — Web personale rétro

**Stato:** esplorazione, non approvata.  
**Fonte dei fatti di prodotto:** [`PRODUCT.md`](../../PRODUCT.md).  
**Reference:** [`docs/references/`](../references/README.md).

## Idea

Un sito personale che ricorda l'energia delle pagine web degli anni 90, ma usa una struttura molto semplice. L'espressione rétro vive in caratteri monospaziati, piccoli segni pixel e cornici nette. I contenuti rimangono il centro della pagina.

Il primo schermo dovrebbe comunicare subito le tre aree professionali. Il CV fornisce materiale per una breve biografia; Allenaria e RD Personal Training danno contenuto alla lista progetti. I recapiti da pubblicare sono ancora da definire.

## Pagine previste

1. **Homepage:** nome Riccardo D'Angelo, breve presentazione e accessi chiari ad About e CV, seguiti da Allenaria e RD Personal Training. La descrizione distingue il SaaS dall'attività personale di insegnamento e allenamento, indicando in secondo piano che Riccardo ha realizzato il sito di RD Personal Training.
2. **About:** racconto più ampio del profilo, collegando sviluppo web, sistemi e AI con contenuti verificati.
3. **CV:** esperienza, competenze e formazione tratte dal documento fornito, come contenuto HTML leggibile sul web. Una cronologia verticale e separatori testuali possono richiamare il mood rétro senza trasformare la lettura in un blocco ASCII. Nessun download del PDF previsto.
4. **Contatti:** canali scelti dall'autore, con indicazioni chiare per clienti e recruiter. Nessun recapito segnaposto pubblicato come reale.

Una navigazione testuale compatta collega le quattro pagine. Non servono menu complessi per questa prima versione.

## Linguaggio visivo da provare

- **Superficie:** avorio chiaro `#F8F4E9`, con testo grafite `#25243A`.
- **Accenti:** ciano `#44E5D2`, blu elettrico `#4148D7`, rosa `#FF6AA2`. Usarli per gerarchia e piccoli dettagli, non come sfondo di lunghi paragrafi.
- **Tipografia:** un carattere monospaziato leggibile per titoli, numeri e piccoli elementi ASCII; testo corrente con un carattere di sistema per facilitare letture più lunghe. La scelta esatta resta aperta.
- **Grafica:** un solo motivo pixel o ASCII principale, originale e pertinente al profilo. Evitare una collezione di GIF decorative.
- **Composizione:** una colonna principale, ampi margini, separatori netti e pochi blocchi. I tre ruoli sono contenuto, non tre pagine separate.

La [palette SVG](../references/palette-01.svg) è un campionario esplorativo; non costituisce ancora un sistema di design approvato.

Il [sample di layout fornito dall'autore](../references/layout-sample.txt) aggiunge una possibile sequenza per la homepage: barra superiore, comando `$ whoami`, titolo ASCII, introduzione e lista numerata dei progetti. I link del sample diventano la navigazione tra le quattro pagine; la lista progetti resta nella homepage. Il secondo progetto sostituisce il segnaposto «Project name» del sample. Dominio, selettore lingua e altri testi del mockup restano da confermare.

## Comportamento e accessibilità

- Su schermi stretti, titoli e ASCII devono andare a capo o avere una variante compatta senza scorrimento orizzontale.
- Le informazioni e i link devono restare comprensibili senza colore, hover o animazioni.
- Contrastare i testi rispetto allo sfondo e rendere evidente il focus da tastiera.
- Se sarà introdotto movimento, rispettare `prefers-reduced-motion` e non farne dipendere alcun contenuto.

## Cosa validare nella prossima iterazione

- Quale breve presentazione ricavare dal CV e approvare.
- Quale dettaglio e quali eventuali immagini mostrare per ciascuno dei due progetti.
- Quale canale di contatto pubblicare.
- Se l'equilibrio tra nostalgia e leggibilità rappresenta davvero l'autore.

Questa proposta non modifica ancora l'aspetto del sito: serve a confrontare una direzione concreta con le prossime alternative prima di sceglierne una.
