# ROZOOM docs site

Docusaurus 3 project behind https://rozoom.app/docs/ (EN) and
https://rozoom.app/uk/docs/ (UK).

Two independent builds from one config, selected by `DOCS_LOCALE`:

```bash
npm ci
DOCS_LOCALE=en npx docusaurus build --out-dir build-en   # -> /docs/
DOCS_LOCALE=uk npx docusaurus build --out-dir build-uk   # -> /uk/docs/
node scripts/add-hreflang.mjs build-en build-uk
```

Native Docusaurus i18n serves the second locale at `/docs/uk/`; the site
contract is `/uk/docs/`, hence the dual-build setup. English content lives in
`docs/`, Ukrainian in `docs-uk/`. Slugs must stay identical in both trees —
the hreflang script and the navbar locale link depend on it.

Local preview: `DOCS_LOCALE=en npx docusaurus start`.

Deploys run from `.github/workflows/pages.yml` on every push to `master`:
one Pages artifact with the landing at `/`, EN docs at `/docs/`, UK docs at
`/uk/docs/`.
