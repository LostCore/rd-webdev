# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Eleventy (11ty), scelto dall'autore del sito per un sito personale statico.

## Users

- Potenziali clienti che vogliono capire il profilo professionale e valutare una collaborazione.
- Recruiter che vogliono valutare il profilo per una posizione.

I due pubblici hanno pari priorità. La homepage deve favorire il percorso presentazione → profilo e CV → contatti. Il tipo di opportunità cercate è ancora da decidere; LinkedIn è visibile nella pagina Contatti; l’email diretta viene rivelata dopo un clic. La pagina offre anche un semplice modulo Netlify Forms. Il commento HTML condiviso rimanda alla pagina Contatti senza pubblicare l’indirizzo.

## Product Purpose

Presentare Riccardo D'Angelo anzitutto come Full Stack Web Developer e Systems Engineer. Oggi adotta un approccio AI-first fondato sulle conoscenze tecniche pregresse; è anche mentore e coach per professionisti IT. Il sito dovrà aiutare entrambi i pubblici a capire chi è, di cosa si occupa e come approfondire o mettersi in contatto attraverso i canali che sceglierà di pubblicare.

## Operating Context

Il sito è un portfolio personale consultabile via web. La prima fase del progetto esplora più proposte di design prima di sceglierne una.

La struttura prevista comprende quattro pagine:

- **Homepage:** breve presentazione e due progetti: Allenaria e RD Personal Training.
- **About:** approfondimento sul profilo personale e professionale.
- **CV:** contenuto web dedicato a percorso professionale, competenze e formazione, basato sul CV fornito.
- **Contatti:** canali attraverso cui clienti e recruiter possono mettersi in contatto.

## Capabilities and Constraints

- La piattaforma di sviluppo è Eleventy (11ty).
- Il contenuto deve poter essere aggiornato senza dipendere da funzionalità server non richieste.
- Il contenuto pubblico del sito è in inglese. I contenuti precisi delle quattro pagine, eventuali altri recapiti da pubblicare e un'eventuale lingua aggiuntiva sono decisioni aperte.
- La pagina CV presenta il contenuto direttamente sul web, in linea con il design del sito; il PDF rimane una fonte privata, senza download pubblico previsto.
- Il CV è una fonte per i contenuti, non un'autorizzazione a pubblicarne integralmente dati personali e recapiti.
- La prima direzione visiva richiesta è ispirata al web degli anni 90, con pixel art e/o ASCII art, colori chiari e intensi e layout minimale. È una proposta da esplorare, non una scelta definitiva.

## Evidence on Hand

Il [CV 2026 in inglese](docs/references/CV.md) è la fonte fornita dall'autore. Riporta:

- Il nome Riccardo D'Angelo e il profilo Full Stack Web Developer / Systems Engineer.
- L'esperienza come Tech Lead e Systems Engineer presso Exe Digital / WAGA da aprile 2014, descritta come in corso nel CV 2026.
- Competenze dichiarate in sviluppo backend e frontend, infrastruttura, cloud e orchestrazione di sistemi AI multi-agente.
- Formazione in psicologia clinica e attività di coaching e mentoring. L'autore ha confermato di voler far emergere il proprio ruolo di mentore e coach per professionisti IT.
- Italiano come lingua madre e inglese avanzato.

L'autore ha confermato due [progetti per la homepage](docs/references/progetti.md):

- **Allenaria:** SaaS per personal trainer indipendenti. La reference fornita dall'autore indica FastAPI, Vite, PostgreSQL e Stripe.
- **RD Personal Training:** attività personale di Riccardo come insegnante di difesa personale e personal trainer. Riccardo ha realizzato il [sito pubblico](https://difesapersonalemagenta.com/), che presenta anche percorsi di Krav Maga e coaching mentale a Magenta. Nella homepage la sua attività di insegnamento e allenamento deve avere più evidenza del lavoro di sviluppo del sito.

L'autore ha precisato che Full Stack Web Developer e Systems Engineer sono i due pilastri del profilo. L'approccio AI-first descrive il modo in cui lavora oggi, sostenuto dalle competenze già maturate; mentoring e coaching rivolti a professionisti IT fanno parte del profilo da comunicare. La formulazione pubblica e il peso di questi elementi nelle singole pagine restano da definire.

L'autore ha fornito il profilo [GitHub](https://github.com/LostCore) per il menu del sito e il profilo [LinkedIn](https://www.linkedin.com/in/rdangelo86) per la pagina Contatti. Il 14 ottobre 2026 ha autorizzato `me@riccardodangelo.com` come indirizzo pubblico nella pagina Contatti, destinazione delle notifiche Netlify Forms e sostituto dell’email Outlook nel commento HTML condiviso. Successivamente, per limitare la raccolta automatica più semplice, ha scelto di mostrare l’indirizzo e il link mailto solo dopo un clic su «Show email», con una codifica reversibile nel sorgente. Il commento HTML condiviso ora contiene «Do you have work for me? Get in touch at /contact/», senza email. Senza JavaScript rimangono disponibili modulo e LinkedIn. Questa misura non garantisce protezione dallo spam. Il modulo contiene nome, email e messaggio obbligatori; l’email diretta ha priorità, seguita da LinkedIn e dal modulo. Il CV contiene altri recapiti personali, che non sono autorizzati alla pubblicazione. Non sono stati forniti casi studio, risultati misurabili o immagini personali separati dal CV. Non creare prove fittizie per riempire il sito.

## Product Principles

- Rendere comprensibili i due pilastri professionali, l'approccio AI-first e il mentoring/coaching IT senza implicare esperienze o risultati non documentati.
- Dare a clienti e recruiter percorsi di lettura ugualmente chiari.
- Far dipendere le affermazioni professionali da contenuti reali forniti dall'autore.
- Tenere il prodotto semplice e facilmente aggiornabile durante l'esplorazione visiva.
