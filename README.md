# pietronoli.it — sorgente del sito

Sito di Pietro Noli, costruito con [Astro](https://astro.build) — file statici,
niente server da gestire, niente canone di licenza.

Per la guida completa alla messa online (dominio, hosting, form di contatto),
vedi **DEPLOY.md** nella cartella principale del progetto.

## Struttura

```
src/
  layouts/Base.astro       layout comune (nav, footer, meta tag, dati strutturati)
  pages/                   una pagina per file — index, chi-sono, servizi, ecc.
  pages/blog/               indice blog + template articolo singolo
  content/blog/             articoli del blog, in Markdown
  styles/tokens.css        tutti i colori, i font e gli spazi del sito, in un unico file
public/                    favicon, robots.txt — file serviti così come sono
```

## Comandi

```bash
npm install       # solo la prima volta
npm run dev        # anteprima locale su http://localhost:4321, si aggiorna da sola
npm run build       # genera il sito statico pronto per la pubblicazione, in dist/
npm run preview     # controlla in locale il risultato di npm run build
```

## Modificare i contenuti

- **Testi delle pagine**: apri il file `.astro` corrispondente in `src/pages/` — i testi sono
  dentro tag come `<p>` e `<h1>`, si modificano come testo normale.
- **Numeri e statistiche** (home page): sono in cima a `src/pages/index.astro`, nella costante `stats`.
- **Certificazioni**: elenco in cima a `src/pages/certificazioni.astro`, nella costante `certs`.
- **Nuovo articolo del blog**: crea un nuovo file `.md` in `src/content/blog/`, copiando la struttura
  di `dal-bi-alla-ai-aziendale.md` (l'intestazione tra `---` in alto è obbligatoria).
- **Colori, font, spaziature**: tutto in `src/styles/tokens.css` — cambiare un valore lì lo cambia
  su tutto il sito.

Dopo ogni modifica, se pubblichi tramite Git (vedi DEPLOY.md), basta salvare, fare commit e push:
il sito online si aggiorna da solo in circa un minuto.
