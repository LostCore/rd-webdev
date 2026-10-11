# Site copy workspace

Usa un file Markdown per pagina per scrivere i tuoi testi in italiano:

| Page | Draft | Live route |
| --- | --- | --- |
| Home | [home.md](home.md) | `/` and `/terminal/` |
| About | [about.md](about.md) | `/about/` |
| CV | [cv.md](cv.md) | `/cv/` |
| Contact | [contact.md](contact.md) | `/contatti/` |

In ciascun file trovi in cima **I tuoi testi in italiano**: scrivi sotto i sottotitoli o cambiali liberamente. Più sotto resta la bozza inglese attualmente sul sito, utile come riferimento. `## Editorial notes` contiene domande di lavoro, non testi da pubblicare.

Questi file sono bozze fuori dalla cartella `src/` di Eleventy: modificarli non cambia automaticamente il sito. Quando vuoi pubblicare una pagina, chiedimi di applicarla: tradurrò i tuoi testi in inglese, aggiornerò la bozza inglese e il template o `src/_data/profile.json`, verificherò i fatti con `PRODUCT.md` e le reference ed eseguirò build e test visivi. Terrò allineate le bozze alle modifiche successive.

Per lavorare su target e testi, chiedi «Usa `content_advisor` per aiutarmi a definire il target» oppure «Usa `content_advisor` per scrivere la pagina About». L'agente di progetto è in [`.codex/agents/content_advisor.toml`](../../.codex/agents/content_advisor.toml) e usa GPT-6 Astra. Ti farà domande in italiano prima di fissare una direzione.

Non aggiungere recapiti privati del CV qui finché non decidi di pubblicarli. Le decisioni di prodotto vanno in `PRODUCT.md`, le fonti in `docs/references/` e le scelte visive in `docs/design/`.
