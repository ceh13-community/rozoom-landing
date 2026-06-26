# rozoom-landing

Static marketing landing for **Rozoom** — the Swiss Army Knife for Kubernetes.

- Single-screen visit card: hero + CTA to the product repo.
- Hosted on GitHub Pages.
- Social preview (Open Graph / Twitter Card) drives link unfurls on LinkedIn, HN, Reddit, and X.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Whole site — one screen, inline CSS. |
| `og-rozoom-1280x640.png` | Social card (1280×640), referenced by `og:image`. |
| `.nojekyll` | Serve files as-is, skip Jekyll. |

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Notes

- `og:image` / `og:url` use absolute `*.github.io` URLs. When a custom domain
  is wired up, update those two values and add a `CNAME` file.
- Validate previews via the LinkedIn Post Inspector and the Twitter Card Validator.
