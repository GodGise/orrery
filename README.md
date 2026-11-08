# Orrery — Simulatore del Sistema Solare

Simulatore didattico del Sistema Solare che gira interamente nel browser.
Nessuna dipendenza esterna: Three.js è incluso in `lib/`, quindi funziona
anche offline e su GitHub Pages senza build.

## Cosa fa

- **Orbite vere**: elementi kepleriani J2000 per pianeti, Plutone, Cerere e
  Vesta, con l'equazione di Kepler risolta a ogni fotogramma.
- **Due scale**: raggi ingranditi per vedere qualcosa, oppure geometria esatta
  per capire quanto è vuoto lo spazio.
- **Superfici procedurali**: la Terra ha i continenti al posto giusto, le luci
  delle città sul lato notte, Saturno proietta l'ombra degli anelli sul globo.
- **Vento solare e magnetosfere**: chi il campo magnetico ce l'ha devia il
  vento, chi non ce l'ha (Venere, Marte) ci perde l'atmosfera.
- **Sonde spaziali**: 19 missioni. Le interstellari sono posizionate da
  distanza misurata e direzione di fuga; le altre orbitano il corpo che visitano.

## Come pubblicarlo

Carica questi file nella radice di una repo pubblica, poi
Settings → Pages → Source: *Deploy from a branch*, branch `main`, cartella `/`.
Dopo un paio di minuti il sito è online.

## Come provarlo in locale

Serve un server HTTP, perché la pagina usa i moduli ES:

```
python3 -m http.server 8000
```

poi apri http://localhost:8000
