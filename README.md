# Orrery — Simulatore del Sistema Solare

Simulatore didattico del Sistema Solare e della nostra zona di galassia,
in una sola pagina web. Meccanica orbitale reale (elementi kepleriani J2000),
mappe reali dei pianeti, struttura interna a strati, sonde spaziali, comete,
vento solare e magnetosfere, Via Lattea, Gruppo Locale e universo vicino.

Funziona senza connessione e senza installare niente: Three.js è incluso
nella cartella `lib/`.

## Metterlo online con GitHub Pages

1. Crea una repository **pubblica** chiamata `orrery`.
2. Carica tutto il contenuto di questa cartella nella radice della repository
   (non la cartella stessa: `index.html` deve stare in cima).
   Il file nascosto `.nojekyll` serve: senza, GitHub ignora alcune cartelle.
3. Vai in **Settings → Pages**, alla voce *Source* scegli **Deploy from a
   branch**, ramo `main` e cartella `/ (root)`, poi salva.
4. Dopo un paio di minuti il sito è su `https://<tuo-utente>.github.io/orrery/`.

## Struttura

    index.html        tutto il simulatore: markup, stile e codice
    lib/              Three.js r169 e i moduli di post-produzione
    audio/ambient.mp3 musica di sottofondo

## Comandi

- Trascina per ruotare, rotella o pizzico per avvicinarti, clic per selezionare.
- Il lucchetto nella scheda di un corpo aggancia la visuale a quel corpo.
- La tendina *Qualità* ricarica la pagina: su un computer potente scegli Ultra.

## Crediti delle mappe

Le immagini nella cartella `tex/` non sono mie:

- Pianeti, Luna, Sole, anelli di Saturno, Via Lattea:
  [Solar System Scope](https://www.solarsystemscope.com/textures/), CC BY 4.0, da dati NASA.
- Lune, Plutone e Caronte:
  [NASA 3D Resources](https://github.com/nasa/NASA-3D-Resources), pubblico dominio.
- Titano e Tritone: A. Anpilogov e altri,
  [CelestiaContent](https://github.com/CelestiaProject/CelestiaContent), CC BY 3.0,
  da dati NASA/JPL/USGS.

Sono state ridimensionate e in parte rielaborate (rilievo, luci notturne, colore).

## Versione da pubblicare

`npm install && npm run build` crea la cartella `dist/` con lo stesso sito ma con
il codice compresso. È quella che va online: su Cloudflare Pages il comando di
build è `npm run build` e la cartella di uscita è `dist`.
