import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { APP_NAME, VENDOR, LINKS } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Sticky Add to Cart handles data when installed on your BigCommerce store.",
};

const host = LINKS.vendor.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Privacy Policy</div>
          <span className="eyebrow"><span className="dot" /> Legal</span>
          <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
          <p className="lead">How {APP_NAME} handles data when installed on your BigCommerce store. Last updated 16 June 2026.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap-narrow prose">
          <p>
            {APP_NAME} (&ldquo;the App&rdquo;) is a BigCommerce app provided by {VENDOR} (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            The App adds a customizable, persistent Add to Cart bar to a merchant&apos;s product pages. This policy explains
            what data the App accesses, stores, and processes.
          </p>

          <section>
            <h2>Information we access</h2>
            <p>When a merchant installs the App via BigCommerce OAuth, we request only the permissions needed to run the sticky bar:</p>
            <ul>
              <li><strong>Storefront scripts</strong> — to install the script that renders the bar on your product pages.</li>
              <li><strong>Products</strong> — to read product details (title, price, image, variants) so the bar shows the right information.</li>
              <li><strong>Store information</strong> — to read your store&apos;s currency and basic settings.</li>
            </ul>
            <p>The App does <strong>not</strong> access orders, customers, or payment data.</p>
          </section>

          <section>
            <h2>Information we store</h2>
            <p>We store the data required to operate the App, in Google Firebase (Firestore):</p>
            <ul>
              <li>Your <strong>store hash</strong> and the <strong>OAuth access token</strong> issued by BigCommerce at install.</li>
              <li>The <strong>store user(s)</strong> who installed or were granted access to the App (id, email, username).</li>
              <li>Your <strong>bar configuration</strong> — the styling, layout and behaviour settings you save in the dashboard.</li>
              <li>Your <strong>subscription status</strong> for billing (see Third-party processors).</li>
            </ul>
            <p>The App does not collect or store any shopper personal data. The bar runs in the shopper&apos;s browser and uses the product information already present on the page.</p>
          </section>

          <section>
            <h2>Third-party processors</h2>
            <ul>
              <li><strong>BigCommerce</strong> — the platform the App integrates with.</li>
              <li><strong>Google Firebase / Firestore</strong> — stores your store record and bar configuration.</li>
              <li><strong>Vercel</strong> — hosts the App and serves the storefront script.</li>
              <li><strong>Stripe</strong> — processes subscription billing.</li>
            </ul>
            <p>We do not sell or share your data with advertisers, and we do not use it for any purpose other than operating the App.</p>
          </section>

          <section>
            <h2>Data retention &amp; deletion</h2>
            <p>
              When you uninstall the App, BigCommerce notifies our uninstall endpoint and we remove your store record,
              access token and bar configuration, and the storefront script is removed. To request deletion at any other time,
              email us at <a href={LINKS.support}>{LINKS.email}</a>.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>All traffic uses HTTPS. Access tokens and credentials are stored server-side and are never exposed to the browser or to shoppers.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Email <a href={LINKS.support}>{LINKS.email}</a> or visit{" "}
              <a href={LINKS.vendor} target="_blank" rel="noopener noreferrer">{host}</a>.
            </p>
            <div className="note">{VENDOR} · {host}</div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
