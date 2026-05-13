// Merge main slides + memory-cs variant + memory-cs-interactive into a single Pages artifact.
// Output layout:
//   pages-dist/                       ← deployed to GitHub Pages
//     index.html                      ← main (beginner)
//     assets/                         ← main
//     memory-cs/index.html            ← Slidev variant
//     memory-cs/assets/               ← Slidev variant
//     memory-cs-interactive/index.html ← interactive static site

import { cp, rm, mkdir, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const mainDist = resolve(root, 'slides', 'dist');
const variantDist = resolve(root, 'variants', 'memory-cs', 'dist');
const interactiveDir = resolve(root, 'variants', 'memory-cs-interactive');
const out = resolve(root, 'pages-dist');

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

if (!await exists(mainDist)) {
  console.error(`✖ Main build missing: ${mainDist}`);
  console.error('  Run `npm run build` first.');
  process.exit(1);
}
if (!await exists(variantDist)) {
  console.error(`✖ Variant build missing: ${variantDist}`);
  console.error('  Run `npm run build:memory-cs` first.');
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

await cp(mainDist, out, { recursive: true });
await cp(variantDist, resolve(out, 'memory-cs'), { recursive: true });

// Static interactive variant (no build step — just copy index.html)
if (await exists(interactiveDir)) {
  await cp(interactiveDir, resolve(out, 'memory-cs-interactive'), { recursive: true });
  console.log(`✓ Merged to ${out}`);
  console.log('  / → main (일반 직장인용)');
  console.log('  /memory-cs/ → 메모리 CS팀용 Slidev (복부인 with Opus 4.7)');
  console.log('  /memory-cs-interactive/ → 메모리 CS팀용 인터랙티브 사이트');
} else {
  console.log(`✓ Merged to ${out}`);
  console.log('  / → main (일반 직장인용)');
  console.log('  /memory-cs/ → 메모리 CS팀용 (복부인 with Opus 4.7)');
}
