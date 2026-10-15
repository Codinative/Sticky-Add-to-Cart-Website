/** Single source of truth for site copy + links. */
export const APP_NAME = "Sticky Add to Cart";
export const APP_TAGLINE = "A persistent, fully customizable Add to Cart bar for BigCommerce product pages.";
export const VENDOR = "Codinative";
/** Canonical public origin (no trailing slash) - used for metadata + structured data. */
export const SITE_URL = "https://sticky-add-to-cart.codinative.com";

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
