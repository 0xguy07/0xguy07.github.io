import { readFile, writeFile } from 'node:fs/promises';

// Refresh the checked-in profile before building, without page-view requests.
const source = process.argv[2];
const canonical = 'https://raw.githubusercontent.com/0xguy07/0xguy07/main/README.md';
let text;
if (source) {
  text = await readFile(source, 'utf8');
} else {
  const response = await fetch(canonical);
  if (!response.ok) throw new Error(`Profile download failed: HTTP ${response.status}`);
  text = await response.text();
}
if (!text.startsWith('# Guy Friley\n') || !text.includes('## Education & credentials')) {
  throw new Error('Profile source did not match the expected README structure.');
}
await writeFile(new URL('../src/data/profile.md', import.meta.url), text);
console.log('Updated profile snapshot from', source ?? canonical);
