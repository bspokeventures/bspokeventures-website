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

## Deploying to Netlify

Import this GitHub repository as a new Netlify site. Netlify will detect the
Next.js application automatically; use `npm run build` and leave the publish
directory at its detected default.
