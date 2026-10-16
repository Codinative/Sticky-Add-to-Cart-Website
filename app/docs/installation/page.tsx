import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS, PRICE, TRIAL_DAYS, pageMeta } from "@/lib/site";

export const metadata = {
  title: "Installation guide",
  ...pageMeta(
    "/docs/installation",
    "Installation guide - Sticky Add to Cart",
    "Requirements, permissions and a step-by-step setup to install Sticky Add to Cart and publish a sticky Add to Cart bar on your BigCommerce product pages.",
  ),
};

const TOC = [
  { id: "requirements", t: "Before you install" },
  { id: "permissions", t: "Permissions" },
  { id: "steps", t: "Installation steps" },
  { id: "publish", t: "Going live" },
  { id: "troubleshooting", t: "Troubleshooting" },
];

const REQUIREMENTS = [
  { t: "A BigCommerce store", d: "Any plan. Install from the App Marketplace or your control panel under Apps → My Apps." },
  { t: "Product pages with an Add to Cart button", d: "The bar mirrors your product page's title, price, image, variants and quantity, so a standard product template is all you need." },
  { t: "A few minutes", d: "There are no theme files to edit. You configure the bar in the dashboard and the app installs it on your storefront for you." },
  { t: "A payment card", d: `The ${TRIAL_DAYS}-day free trial starts through Stripe Checkout, which asks for a card. You're not charged until the trial ends, then it's ${PRICE}/month.` },
];

const STEPS = [
  { t: "Install the app", d: "Add Sticky Add to Cart from the BigCommerce App Marketplace, or from Apps → My Apps." },
  { t: "Grant the requested permissions", d: "BigCommerce shows the permissions the app needs and asks you to confirm. Approve them to finish - you're returned to the app dashboard." },
  { t: "Start your free trial", d: `In the plan card at the top of the dashboard, click Start ${TRIAL_DAYS}-day free trial. Stripe Checkout opens in a new tab - add your card, then close the tab and return to the app. The bar only shows on your storefront while your trial or plan is active.` },
  { t: "Configure your bar", d: "Use the Styling, Layout and Behavior tabs to design the bar. Every change is reflected instantly in the live preview on the right." },
  { t: "Preview on desktop & mobile", d: "Toggle the preview between desktop and mobile, or open a full-page preview in a new tab, to check the bar at real resolution before publishing." },
  { t: "Save & publish", d: "Click Save Changes. The app installs the bar across all your product pages automatically - no theme edits, no developer required." },
  { t: "Verify on the storefront", d: "Open a product page on your live store and scroll down. The sticky bar should appear according to your chosen trigger." },
];

export default function InstallationGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> Installation guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>Installation guide</h1>
          <p className="lead">Everything you need to install Sticky Add to Cart and publish a persistent Add to Cart bar on your BigCommerce product pages.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/user-guide" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>User guide →</Link>
            </div>
          </aside>

          <article className="prose">
            <div className="scope-banner">
              <Icon name="info" size={18} />
              <span>Sticky Add to Cart adds a <b>persistent Add to Cart bar</b> to every product page, with full control over its <b>look, layout and behaviour</b> - no theme files to edit.</span>
            </div>

            <section id="requirements">
              <h2>Before you install</h2>
              <p>Make sure your store is ready. You&apos;ll need:</p>
              <div className="dsteps" style={{ marginTop: 16 }}>
                {REQUIREMENTS.map((r) => (
                  <div key={r.t} className="dstep">
                    <span className="dstep-n check"><Icon name="check" size={15} /></span>
                    <div className="dstep-b"><b>{r.t}</b><p>{r.d}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="permissions">
              <h2>Permissions</h2>
              <p>On install the app requests only the scopes it needs to run the sticky bar - nothing about your orders or payments:</p>
              <ul>
                <li><strong>Content - modify</strong> - to install the storefront script that renders the bar on your product pages.</li>
                <li><strong>Products - modify</strong> - to display the correct title, price, image and variant options in the bar. The app only reads product data; it never changes your catalogue.</li>
                <li><strong>Carts - modify</strong> - for the add-to-cart flow from the bar.</li>
                <li><strong>Storefront API tokens - generate</strong> - to look up the product a shopper is viewing through the BigCommerce Storefront API.</li>
              </ul>
              <div className="note">The app never reads or writes orders or payment data.</div>
            </section>

            <section id="steps">
              <h2>Installation steps</h2>
              <p>Seven steps from install to a live bar.</p>
              <div className="dsteps" style={{ marginTop: 18 }}>
                {STEPS.map((s, i) => (
                  <div key={s.t} className="dstep">
                    <span className="dstep-n">{i + 1}</span>
                    <div className="dstep-b"><b>{s.t}</b><p>{s.d}</p></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
                <a href={LINKS.app} target="_blank" rel="noopener" className="btn btn-primary btn-sm"><Icon name="store" size={16} /> Open the app</a>
                <Link href="/docs/user-guide" className="btn btn-ghost btn-sm"><Icon name="book" size={16} /> Read the User guide</Link>
              </div>
            </section>

            <section id="publish">
              <h2>Going live</h2>
              <p>Unlike most storefront customisations, there&apos;s no script to copy and paste:</p>
              <ul>
                <li>When you click <strong>Save Changes</strong>, the app installs (or updates) its script on your store automatically through the BigCommerce Scripts API.</li>
                <li>The bar then renders on all product pages, pulling each product&apos;s live title, price, image and variants.</li>
                <li>The bar is shown only while your free trial or subscription is active. If the plan lapses, the bar is hidden until you subscribe again - your settings are kept.</li>
                <li>To pause the bar without losing your settings, switch off both <strong>Show on desktop</strong> and <strong>Show on mobile</strong> in the <strong>Visibility</strong> card and save. To remove it entirely, uninstall the app - this also cancels your subscription.</li>
              </ul>
            </section>

            <section id="troubleshooting">
              <h2>Troubleshooting</h2>
              <h3>The bar isn&apos;t appearing</h3>
              <p>Check that the plan card shows an active trial or plan, that <strong>Show on desktop</strong> / <strong>Show on mobile</strong> are on in the Visibility card, and that your settings are saved. If the trigger is set to <strong>Show on scroll</strong>, scroll past the page&apos;s original Add to Cart button to reveal it.</p>
              <h3>The bar is hidden behind another element</h3>
              <p>A chat widget or cookie banner may have a higher stacking order. Increase the <strong>Z-Index</strong> value in Behavior → Advanced (the default is 9999).</p>
              <h3>Variant options look wrong</h3>
              <p>In Styling → Variant Selector, make sure each option name matches your BigCommerce product option exactly (matching is case-insensitive). Unconfigured options fall back to a dropdown.</p>
              <div className="note" style={{ marginTop: 16 }}>
                Still stuck? Email <a href={LINKS.support}>{LINKS.email}</a> - we reply within one business day.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
