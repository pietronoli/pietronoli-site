# Guida alla pubblicazione — da zero a online

Questa guida presume che tu non abbia mai pubblicato un sito in questo modo. Segui i passi in
ordine: dal primo all'ultimo bastano circa 30-40 minuti, quasi tutti di attesa (non di lavoro).

Non ti serve installare nulla sul tuo computer: tutto quello che segue si fa dal browser.
Se in futuro vorrai modificare i contenuti dal tuo computer invece che dal browser, la Parte 6
spiega anche quello — ma è facoltativo.

---

## Il percorso in breve

1. Crei un account GitHub (dove vive il codice del sito) — gratuito
2. Carichi lì i file che ti ho preparato
3. Crei un account Vercel (che pubblica il sito) e lo colleghi a GitHub — gratuito
4. Vercel ti dà un sito online funzionante, su un indirizzo provvisorio
5. Colleghi il tuo dominio pietronoli.it a quell'indirizzo
6. Attivi il modulo di contatto
7. Fatto: da quel momento, ogni modifica che salvi si pubblica da sola in circa un minuto

---

## Parte 1 — Creare l'account GitHub

GitHub è dove risiede il codice del tuo sito. È gratuito per un progetto come questo.

1. Vai su **https://github.com/signup**
2. Inserisci la tua email, una password, un nome utente (es. `pietronoli`)
3. Completa la verifica richiesta e conferma l'indirizzo email
4. Una volta dentro, in alto a destra clicca il **+** e scegli **New repository**
5. Come nome del repository scrivi `pietronoli-site`
6. Lascialo **Public** (va bene così: il codice pubblico di un sito vetrina non è un problema —
   nessun dato sensibile ci finisce dentro)
7. Non selezionare nessuna delle caselle "Add a README" ecc. — il progetto le ha già
8. Clicca **Create repository**

Ti troverai davanti a una pagina con delle istruzioni tecniche (comandi `git`): **ignorale**, userai
invece il caricamento da browser spiegato nella Parte 2.

---

## Parte 2 — Caricare i file del sito

1. Nella pagina del repository appena creato, clicca il link **uploading an existing file**
   (oppure, se non lo vedi, il pulsante **Add file → Upload files**)
2. Apri sul tuo computer la cartella del progetto che ti ho consegnato (`pietronoli-site`)
3. Trascina **tutto il contenuto della cartella** (non la cartella stessa: il contenuto) nella
   pagina del browser — file come `package.json`, `astro.config.mjs`, e le cartelle `src/` e `public/`
4. Aspetta che il caricamento finisca (la barra di avanzamento lo mostra)
5. In basso, nel campo del messaggio di commit, scrivi qualcosa come `Primo caricamento del sito`
6. Clicca **Commit changes**

A questo punto il codice del sito vive su GitHub. Non è ancora online: il prossimo passo lo pubblica.

---

## Parte 3 — Creare l'account Vercel e pubblicare il sito

Vercel è il servizio che prende il codice da GitHub, lo trasforma in un sito vero e lo mette online,
con HTTPS incluso automaticamente. Il piano gratuito è più che sufficiente per un sito come questo.

1. Vai su **https://vercel.com/signup**
2. Scegli **Continue with GitHub** e autorizza il collegamento tra i due account — è il modo più
   comodo: Vercel troverà da solo il repository che hai appena creato
3. Nella schermata successiva, Vercel ti mostra i tuoi repository GitHub: clicca **Import** accanto
   a `pietronoli-site`
4. Vercel riconosce automaticamente che è un progetto **Astro** e propone già le impostazioni giuste
   — non serve cambiare nulla
5. Clicca **Deploy**
6. Attendi 1-2 minuti: vedrai i log della build scorrere, poi la scritta di successo con dei
   coriandoli sullo schermo

Vercel ti darà un indirizzo provvisorio del tipo `pietronoli-site.vercel.app` — aprilo e controlla
che il sito sia esattamente come te lo aspetti. Da questo momento il sito è online, solo non ancora
sul tuo dominio.

---

## Parte 4 — Collegare il dominio pietronoli.it

Questa è la parte che richiede più attenzione, perché tocca il tuo dominio esistente. Procedi con
calma e **non spegnere il sito Wix finché non hai verificato che tutto funziona**.

### 4.1 — Aggiungere il dominio su Vercel

1. Nel progetto Vercel, vai su **Settings → Domains**
2. Scrivi `www.pietronoli.it` e clicca **Add**
3. Vercel ti mostrerà uno o più **record DNS** da impostare — di solito un record di tipo `CNAME`
   che punta a `cname.vercel-dns.com`. Tienili a portata di mano, ti serviranno tra un attimo
4. Ripeti aggiungendo anche `pietronoli.it` senza `www`: Vercel in genere propone di farlo
   reindirizzare automaticamente verso `www.pietronoli.it` (consigliato, così funzionano entrambi)

### 4.2 — Trovare dove gestisci il DNS del dominio oggi

Il "DNS" è la parte che stabilisce a quale servizio punta il tuo dominio. Oggi punta a Wix. Per
sapere dove modificarlo:

- Se hai registrato o rinnovato `pietronoli.it` direttamente su **Wix**, il DNS si gestisce dal
  pannello Wix: **Impostazioni → Domini**
- Se il dominio è registrato altrove (es. Aruba, Register.it, un altro provider italiano comune),
  dovrai accedere al pannello di quel provider — cerca una voce chiamata **DNS**, **Gestione DNS** o
  **Zona DNS**

Se non sei sicuro, il modo più semplice per scoprirlo è cercare su un sito come
**https://who.is** il dominio `pietronoli.it`: nella sezione "Registrar" trovi il nome del gestore.

### 4.3 — Inserire i record DNS

Nel pannello DNS che hai trovato al punto 4.2:

1. Cerca eventuali record esistenti di tipo `A` o `CNAME` sul nome `www` o sulla radice del dominio
   (spesso indicata con `@`) — quelli che oggi puntano a Wix
2. Sostituiscili con i valori che Vercel ti ha mostrato al punto 4.1 (tipicamente: record `CNAME`
   su `www` con valore `cname.vercel-dns.com`, e un record `A` sulla radice `@` con l'indirizzo IP
   che Vercel indica)
3. Salva le modifiche

**Nota sui tempi**: le modifiche DNS non sono immediate — possono impiegare da pochi minuti fino a
24-48 ore per propagarsi ovunque nel mondo. Torna sulla pagina **Settings → Domains** di Vercel: ti
mostrerà quando il dominio risulta correttamente verificato, con un segno di spunta verde.

4. Una volta verificato, Vercel genera automaticamente il certificato di sicurezza (HTTPS/SSL) —
   non devi fare nulla, succede da solo entro pochi minuti

### 4.4 — Il momento del cambio

Finché il DNS non è aggiornato, il tuo sito Wix resta visibile ai visitatori: non c'è interruzione
di servizio. Dal momento in cui il DNS punta a Vercel, il nuovo sito prende il posto del vecchio in
modo automatico, senza che tu debba "spegnere" nulla su Wix — puoi comunque scegliere di cancellare
o sospendere il sito Wix in un secondo momento, con calma, una volta verificato che tutto funziona
per qualche giorno.

---

## Parte 5 — Attivare il modulo di contatto

Il modulo nella pagina Contatti è già pronto graficamente, ma per inoltrarti davvero i messaggi via
email serve collegarlo a **Formspree** (https://formspree.io), un servizio gratuito fino a 50
messaggi al mese — più che sufficiente per un sito come questo.

1. Vai su **https://formspree.io** e crea un account gratuito con la tua email
2. Clicca **New Form**, dai un nome (es. "Contatti sito"), e imposta la tua email come destinatario
3. Formspree ti darà un indirizzo del tipo `https://formspree.io/f/xxxxabcd`
4. Apri su GitHub il file `src/pages/contatti.astro` (puoi modificarlo direttamente dal browser:
   apri il file su github.com, clicca l'icona a forma di matita in alto a destra)
5. Cerca la riga che contiene `INSERISCI-QUI-IL-TUO-ID-FORMSPREE` e sostituiscila con l'indirizzo
   che ti ha dato Formspree
6. Salva con **Commit changes** direttamente dal browser

Vercel rileva automaticamente la modifica su GitHub e ripubblica il sito da solo entro un minuto:
non devi fare nient'altro.

---

## Parte 6 — Modificare i contenuti in futuro

Hai due strade, a seconda di quanto ti va di installare strumenti sul tuo computer.

### Strada A — solo browser, zero installazioni

1. Vai sul repository `pietronoli-site` su github.com
2. Apri il file che vuoi modificare (es. `src/pages/index.astro` per la home, oppure un file in
   `src/content/blog/` per un nuovo articolo)
3. Clicca l'icona a forma di matita (**Edit**) in alto a destra
4. Modifica il testo direttamente nella pagina
5. In basso, scrivi una breve descrizione della modifica e clicca **Commit changes**

Entro un minuto la modifica è online. È la strada più semplice, perfetta per correggere testi,
aggiornare un numero, pubblicare un articolo di blog.

### Strada B — dal tuo computer, con anteprima locale

Utile se vuoi vedere le modifiche prima di pubblicarle, o fare cambiamenti più corposi (nuove
pagine, cambi di layout).

1. Installa **Node.js** da https://nodejs.org (scegli la versione "LTS", quella consigliata) —
   è un programma gratuito, richiede solo "Avanti, Avanti, Fine"
2. Installa **GitHub Desktop** da https://desktop.github.com — un programma con interfaccia
   grafica che evita di usare la riga di comando
3. In GitHub Desktop, scegli **Clone a repository from the internet**, seleziona
   `pietronoli-site` e scegli dove salvarlo sul tuo computer
4. Apri il Terminale (Mac) o Prompt dei comandi (Windows) nella cartella del progetto e lancia:
   ```
   npm install
   npm run dev
   ```
5. Apri `http://localhost:4321` nel browser: è l'anteprima live del sito, si aggiorna da sola a
   ogni modifica che salvi nei file
6. Quando sei soddisfatto, torna su GitHub Desktop: vedrai le modifiche elencate, scrivi un
   messaggio di commit, clicca **Commit to main**, poi **Push origin**

Vercel farà il resto, come nella Strada A.

---

## Parte 7 — Cose utili da sapere, ma non urgenti

- **Analytics privacy-friendly**: se in futuro vuoi sapere quante persone visitano il sito senza
  banner sui cookie invasivi, valuta **Plausible** (https://plausible.io, a pagamento ma economico)
  o **Vercel Analytics** (incluso gratis nel piano che stai già usando, attivabile da
  Settings → Analytics nel progetto Vercel).
- **Backup**: non ti serve pensarci — ogni versione del sito resta salvata per sempre nella
  cronologia di GitHub. Se una modifica rompe qualcosa, puoi sempre tornare a una versione
  precedente dalla scheda **Deployments** su Vercel, con un clic su **Promote to Production**
  di un deploy precedente.
- **Email professionale** (es. `info@pietronoli.it` invece di un indirizzo Fastweb/Gmail): non è
  legata a questo sito, ma se ti interessa si configura dal pannello dove gestisci il DNS (Parte
  4.2) — un servizio come Google Workspace o un piano email del tuo registrar.

---

## Se qualcosa non funziona

- **Il dominio non si verifica su Vercel dopo 48 ore**: ricontrolla di aver salvato correttamente
  i record DNS al punto 4.3 — è l'errore più comune, spesso per un carattere in più o in meno.
- **La build fallisce su Vercel** (schermata rossa invece dei coriandoli): clicca sul deploy fallito
  per vedere il log dell'errore — nella stragrande maggioranza dei casi è un file `.md` del blog con
  l'intestazione tra `---` scritta in modo leggermente diverso dall'originale.
- **Il modulo di contatto non arriva**: controlla la cartella spam della email collegata a
  Formspree, e verifica di aver incollato l'indirizzo corretto al punto 5.4.

Per qualunque altro dubbio in questi passaggi, torna pure a chiedermi: posso guidarti passo passo
anche dentro questa conversazione.
