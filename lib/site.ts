/** Single source of truth for site copy + links. */
export const APP_NAME = "Sticky Add to Cart";
export const APP_TAGLINE = "A persistent, fully customizable Add to Cart bar for BigCommerce product pages.";
export const VENDOR = "Codinative";
/** Canonical public origin (no trailing slash) - used for metadata + structured data. */
export const SITE_URL = "https://stickyaddtocart.codinative.com";

/** Shared Open Graph fields. Next replaces (not merges) a page's `openGraph`, so pages
 *  that set their own url/title spread this back in via pageMeta(). */
export const OPEN_GRAPH = {
  type: "website" as const,
  siteName: APP_NAME,
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${APP_NAME} - a persistent Add to Cart bar for BigCommerce` }],
};

/** Canonical + matching Open Graph tags for a page. `path` is relative to SITE_URL. */
export function pageMeta(path: string, ogTitle: string, description: string) {
  return {
    description,
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH, url: path, title: ogTitle, description },
  };
}

/** Plan - keep in sync with the app's Stripe price and lib/billing.ts TRIAL_DAYS. */
export const PRICE = "$5";
export const TRIAL_DAYS = 7;

/** Links - update these once the listing + app URLs are final. */
export const LINKS = {
  // BigCommerce marketplace listing (placeholder until published).
  marketplace: "https://www.bigcommerce.com/apps/",
  // The live embedded app (Firebase App Hosting).
  app: "https://stickyaddtocart--bc-sticky-notes-app.us-central1.hosted.app/",
  vendor: "https://codinative.com/",
  support: "mailto:info@codinative.com?subject=Sticky%20Add%20to%20Cart",
  email: "info@codinative.com",
};
