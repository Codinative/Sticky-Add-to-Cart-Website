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
| The app (embedded) | https://sticky.codinative.com/ |
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

Deploy to Vercel as a separate project and point `sticky-add-to-cart.codinative.com`
at it. No environment variables are required.

## Editing copy & links

Update product links (marketplace listing, app URL, support email) in
[`lib/site.ts`](lib/site.ts). The marketplace URL and the embedded app URL
(`sticky.codinative.com`) are placeholders until the app is published and its
production domain is final.

---

This is the **marketing site only**. The embedded BigCommerce app itself lives in the
separate `Sticky Add to Cart App` project.
