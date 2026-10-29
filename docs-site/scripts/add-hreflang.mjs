#!/usr/bin/env node
// Inject hreflang alternates into every built HTML page of both locale
// builds. The two locales are independent Docusaurus builds (see
// docusaurus.config.js), so hreflang cannot come from the framework.
// Relies on the invariant that both trees use identical slugs:
//   /docs/<path>  <->  /uk/docs/<path>
//
// Usage: node scripts/add-hreflang.mjs <build-en-dir> <build-uk-dir>

import {readdirSync, readFileSync, writeFileSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

const [, , enDir, ukDir] = process.argv;
if (!enDir || !ukDir) {
  console.error('usage: add-hreflang.mjs <build-en-dir> <build-uk-dir>');
  process.exit(1);
}

const SITE = 'https://rozoom.app';

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function inject(root, prefixSelf, prefixAlt, langSelf, langAlt) {
  let patched = 0;
  for (const file of htmlFiles(root)) {
    const rel = relative(root, file).replace(/\\/g, '/');
    if (rel === '404.html') continue;
    const urlPath = rel.endsWith('index.html')
      ? rel.slice(0, -'index.html'.length)
      : rel;
    const tags = [
      `<link rel="alternate" hreflang="${langSelf}" href="${SITE}${prefixSelf}${urlPath}">`,
      `<link rel="alternate" hreflang="${langAlt}" href="${SITE}${prefixAlt}${urlPath}">`,
      `<link rel="alternate" hreflang="x-default" href="${SITE}/docs/${urlPath}">`,
    ].join('');
    // Docusaurus emits self + x-default alternates per build; in the uk
    // build its x-default points at /uk/docs/, which is wrong for a
    // dual-build site. Strip them and write the full correct set.
    const html = readFileSync(file, 'utf8')
      .replace(/<link[^>]*hreflang[^>]*>/g, '');
    writeFileSync(file, html.replace('</head>', `${tags}</head>`));
    patched += 1;
  }
  return patched;
}

const en = inject(enDir, '/docs/', '/uk/docs/', 'en', 'uk');
const uk = inject(ukDir, '/uk/docs/', '/docs/', 'uk', 'en');
console.log(`hreflang injected: en=${en} pages, uk=${uk} pages`);
