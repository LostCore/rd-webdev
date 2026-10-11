# Homepage — tre concept da confrontare

**Stato:** Light Terminal è la direzione attiva per ora; README e Web90 sono conservati come backup in [`backups/`](backups/README.md) e restano navigabili. La scelta definitiva è ancora aperta.  
**Modalità Impeccable:** Experience — il profilo e i progetti sono il contenuto da esplorare.  
**Fonti:** [`PRODUCT.md`](../../PRODUCT.md), [sample ASCII](../references/layout-sample.txt), [progetti](../references/progetti.md), [proposta rétro iniziale](01-web-retro.md).

## Obiettivo comune

Clienti e recruiter devono capire subito chi è Riccardo e quali tre ambiti copre. Il percorso principale porta dalla breve presentazione alle pagine **About** e **CV**, quindi ai **Contatti**. Allenaria e RD Personal Training sono visibili nella homepage come progetti, ma non interrompono quel percorso. RD Personal Training va presentato prima come attività di Riccardo nell'insegnamento e nel personal training; il sito che ha realizzato è un fatto secondario.

Le tre prove usano gli stessi contenuti verificati e la stessa struttura di quattro pagine. Cambiano composizione, ritmo e modo in cui il linguaggio rétro organizza la lettura. Il testo di presentazione definitivo e il canale di contatto pubblico restano da approvare.

## Anteprime

| Variante | Desktop | Mobile |
| --- | --- | --- |
| A — README | [Apri anteprima](previews/readme-desktop.png) | [Apri anteprima](previews/readme-mobile.png) |
| B — Web anni 90 | [Apri anteprima](previews/web90-desktop.png) | [Apri anteprima](previews/web90-mobile.png) |
| C — Terminale chiaro | [Apri anteprima](previews/terminal-desktop.png) | [Apri anteprima](previews/terminal-mobile.png) |

Le immagini mostrano il primo viewport delle pagine 11ty. Per esplorare scroll, link e stati interattivi, avviare `npm run dev` e aprire le tre URL indicate sotto.

## Direction contract

**A — README.** THESIS: un file personale che si legge dall'alto verso il basso. OWN-WORLD: superficie avorio, metadati da archivio, separatori scuri, titolo pixel e pochi blocchi ciano/rosa/blu. STORY: `whoami` → tre ambiti → presentazione → About/CV → progetti. FIRST VIEWPORT: nome e percorso di approfondimento immediati. INTERACTION: link reali con etichette da file; solo il cursore decorativo pulsa. RISK: un'estetica da documento tecnico può raffreddare il lato personale.

**B — Web anni 90.** THESIS: una pagina personale luminosa con un segno grafico memorabile. OWN-WORLD: testata blu, grandi lettere pixel, finestra rosa/ciano e bordi netti. STORY: saluto → lavoro → About/CV → due progetti. FIRST VIEWPORT: presentazione e finestra `RD_PROFILE.EXE` condividono il campo visivo. INTERACTION: link evidenti; la finestra è solo grafica. RISK: la grafica potrebbe attirare più attenzione delle esperienze reali.

**C — Terminale chiaro.** THESIS: un output leggibile, senza trasformare il sito in una shell finta. OWN-WORLD: carta chiara, inchiostro verde scuro, prompt blu/rosa, tipi da terminale e righe di output. STORY: `whoami` → About/CV → `ls projects` → Contatti. FIRST VIEWPORT: identità e due comandi-link, con l'inizio dei progetti visibile in basso. INTERACTION: solo i link sono azionabili; il cursore del nome pulsa e rispetta la riduzione del movimento. RISK: i termini da terminale possono rallentare chi non è tecnico.

Le tre direzioni restano indipendenti: i template README e Web90 vivono in `src/readme/` e `src/web90/`, la homepage attiva usa `src/_includes/terminal-home.njk`; i fogli stile sono in `src/assets/`. I fatti condivisi vivono in `src/_data/profile.json`.

## A — README anni 90

**Tesi:** la homepage è il `README` personale di Riccardo: un documento da sfogliare, con una gerarchia netta e piccoli segni da software distribuito su floppy. Il sample ASCII è riconoscibile, ma non richiede di simulare un terminale.

```text
┌ RD / README ─────────────────────── ABOUT  CV  CONTACT ┐
│ $ whoami                                               │
│ RICCARDO  [titolo ASCII decorativo]                    │
│ Full Stack · Systems · AI                              │
│ breve presentazione                                    │
│ [leggi About] [apri CV]                                │
├ PROJECTS ───────────────────────────────────────────────┤
│ 01 Allenaria                02 RD Personal Training    │
└──────────────────────────────────────────────────────────┘
```

- **Primo schermo:** nome, tre ambiti e accessi ad About e CV; i progetti iniziano subito sotto la prima piega.
- **Regole visive:** fondo chiaro, caratteri scuri, accenti ciano e rosa in blocchi limitati; titoli monospaziati, righe e numerazione nette.
- **Interazione:** navigazione con veri link che ricordano nomi di file. Nessun input finto o effetto di digitazione necessario.
- **Rischio da valutare:** la cornice README potrebbe sembrare un template tecnico se il testo personale resta troppo generico.

## B — Homepage web anni 90, ordinata

**Tesi:** una pagina personale del primo web, ripensata con molto spazio e poche sezioni. I riquadri colorati portano prima alla persona e al CV, poi ai progetti.

```text
┌ RICCARDO D'ANGELO ────────────────── Home About CV Contact ┐
│                                                            │
│  Ciao, sono Riccardo.         [piccolo segno pixel]         │
│  Full Stack · Systems · AI                                  │
│  [About]                              [CV]                  │
│                                                            │
├ Lavori e attività ───────────────────────────────────────────┤
│ Allenaria                  RD Personal Training             │
└────────────────────────────────────────────────────────────┘
```

- **Primo schermo:** presentazione in linguaggio naturale, due accessi evidenti ad About e CV, dettaglio pixel art originale come firma.
- **Regole visive:** base chiara, campiture blu elettrico e ciano, bordi netti e link sottolineati; meno monospace nel testo lungo.
- **Interazione:** link e stati di focus evidenti, senza effetti che rallentano la lettura.
- **Rischio da valutare:** può perdere parte della personalità del sample se i riquadri diventano troppo convenzionali.

## C — Terminale chiaro

**Tesi:** una sessione di consultazione leggibile, con prompt e output che danno ritmo alla pagina. Il linguaggio dei comandi organizza informazioni reali; la pagina non finge di essere una shell interattiva.

```text
$ whoami
RICCARDO D'ANGELO
Full Stack Web Developer / Systems Engineer / AI Engineer

$ open profile
breve presentazione
> about             > cv

$ ls projects
01 Allenaria
02 RD Personal Training

$ contact
> pagina contatti
```

- **Primo schermo:** `whoami`, nome e ruoli, poi due comandi-link per About e CV. I progetti seguono come elenco numerato.
- **Regole visive:** caratteri monospaziati, molto spazio vuoto, sfondo avorio e un colore intenso per prompt, link e stato attivo.
- **Interazione:** prompt e output sono testo; solo i link sono azionabili. Nessun campo di input che prometta comandi non supportati.
- **Rischio da valutare:** il linguaggio da terminale può risultare meno immediato per visitatori non tecnici.

## Vincoli comuni alla prova

- Desktop e mobile devono conservare ordine di lettura e navigazione. Il titolo ASCII decorativo della proposta A avrà una versione compatta per schermi stretti; il nome resta testo HTML accessibile in tutte e tre.
- Collegamenti About, CV e Contatti chiari anche senza hover, colore o animazione; focus visibile e contrasti leggibili.
- Niente selettore IT/EN finché non è decisa e scritta una seconda lingua. Niente dominio non confermato o recapiti fittizi.
- Allenaria: SaaS per personal trainer indipendenti; stack indicato nel sample. RD Personal Training: attività di insegnamento e allenamento di Riccardo, con link al sito realizzato da lui. Niente metriche, immagini o casi studio inventati.

## Scelta da fare

La direzione di lavoro corrente è Light Terminal su `/` e `/terminal/`. Le altre varianti restano disponibili a `/readme/` e `/web90/`; `/designs/` le presenta affiancate. Le pagine About, CV e Contatti sono bozze comuni per mantenere funzionante la navigazione durante il confronto.
