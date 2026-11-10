// Genera in dist/ la versione da pubblicare: stesso sito, ma con il codice
// compresso e i nomi delle variabili accorciati, così non si legge a colpo
// d'occhio. Uso: npm install && npm run build
const fs = require('fs'), path = require('path'), { minify } = require('terser');

(async () => {
  const src = fs.readFileSync('index.html', 'utf8');
  const open = '<script type="module">', a = src.lastIndexOf(open), b = src.indexOf('</script>', a);
  if (a < 0 || b < 0) throw new Error('script principale non trovato');
  const code = src.slice(a + open.length, b);

  const out = await minify(code, {
    module: true, ecma: 2020,
    compress: { passes: 2 },
    mangle: { toplevel: true },
    format: { comments: false }
  });
  if (!out.code) throw new Error('compressione non riuscita');
  // gli shader stanno dentro stringhe: via i commenti e gli spazi a inizio riga
  const js = out.code
    .replace(/\\n[ \t]*\/\/[^\\`]*(?=\\n)/g, '')
    .replace(/\\n[ \t]+/g, '\\n');

  const html = (src.slice(0, a) + open + js + src.slice(b))
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\n\s*\n/g, '\n');

  fs.rmSync('dist', { recursive: true, force: true });
  fs.mkdirSync('dist');
  fs.writeFileSync('dist/index.html', html);
  for (const d of ['lib', 'tex', 'audio']) if (fs.existsSync(d)) fs.cpSync(d, path.join('dist', d), { recursive: true });
  console.log(`index.html: ${(src.length / 1024).toFixed(0)} kB -> ${(html.length / 1024).toFixed(0)} kB`);
})().catch(e => { console.error(e); process.exit(1); });
