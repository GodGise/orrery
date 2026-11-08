# Orrery — Simulatore del Sistema Solare

Simulatore didattico del Sistema Solare e della nostra zona di galassia,
in una sola pagina web. Meccanica orbitale reale (elementi kepleriani J2000),
superfici generate proceduralmente, sonde spaziali, comete, vento solare e
magnetosfere.

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
