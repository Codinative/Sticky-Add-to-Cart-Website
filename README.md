# Sticky Add to Cart - marketing website

The marketing + documentation site for **Sticky Add to Cart**, a BigCommerce app by
[Codinative](https://codinative.com) that adds a persistent, fully customizable Add to Cart bar
to every product page - styled visually, with smart triggers, variants and quantity built in.

Built with **Next.js 15** (App Router) + **React 19** + TypeScript. No database, no API -
a static, fast marketing SPA intended for `sticky-add-to-cart.codinative.com`.

## Live site & links

🌐 **Live site:** https://sticky-add-to-cart.codinative.com/

| Page | Link |
|------|------|
| Home (marketing) | https://sticky-add-to-cart.codinative.com/ |
| Documentation home | https://sticky-add-to-cart.codinative.com/docs |
| Installation guide | https://sticky-add-to-cart.codinative.com/docs/installation |
| User guide | https://sticky-add-to-cart.codinative.com/docs/user-guide |
| The app (embedded) | https://stickyaddtocart--bc-sticky-notes-app.us-central1.hosted.app/ |
| Codinative | https://codinative.com/ |

## Structure

```
app/
  page.tsx                 Landing (hero, features, how-it-works, customization, use cases, pricing, docs, FAQ, CTA)
  docs/page.tsx            Docs home
  docs/installation/       Installation guide
  docs/user-guide/         User guide
  privacy-policy/          Privacy policy (also re-exported under /docs)
  terms-of-service/        Terms of service (also re-exported under /docs)
  contact/                 Contact page
  layout.tsx               Metadata + Inter font
  globals.css              Brand design system (violet accent, light/dark)
components/                Nav, Footer, Icon, BrandMark, BigCommerceMark, PartnerBadge, StickyPreview
lib/site.ts                Single source of truth for copy + links
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy

Static export (`output: "export"` → `out/`) served by **Firebase Hosting** on project
`bc-sticky-notes-app` ([firebase.json](firebase.json)). Pushes to `main` deploy
automatically via [.github/workflows/firebase-hosting-merge.yml](.github/workflows/firebase-hosting-merge.yml);
pull requests get a preview channel. Manual deploy:

```bash
npm run build && firebase deploy --only hosting
```

Point `sticky-add-to-cart.codinative.com` at it under Hosting → Custom domains.
No environment variables are required.

## Editing copy & links

Update product links (marketplace listing, app URL, support email) and the plan
(`PRICE`, `TRIAL_DAYS`) in [`lib/site.ts`](lib/site.ts). Keep the plan in sync with the
app's Stripe price. The marketplace URL is a placeholder until the app is published.

---

This is the **marketing site only**. The embedded BigCommerce app itself lives in the
separate `Sticky Add to Cart App` project.
