# Bspoke Ventures

The portfolio site for Bspoke Ventures: **building the software between the software.**

The site introduces the studio thesis and seven products:

- MarkPaid
- BrandBake
- SalamanderCRM
- Digital Toolbox
- SerumSuite
- Hosted Labels
- NameScoop

## Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm test
```

The landing page lives in `app/page.tsx`, global presentation is in
`app/globals.css`, and brand assets are in `public/`.

## Deployment

Pushes to `main` are automatically built and published to GitHub Pages by the
workflow in `.github/workflows/deploy-pages.yml`. The Next.js application is
exported as static HTML, CSS, and JavaScript in `out/`.

Configure a custom domain from the repository's **Settings → Pages** screen.
