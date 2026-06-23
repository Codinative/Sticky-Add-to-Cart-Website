import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "Documentation",
  description: "All guides, policies and support for Sticky Add to Cart in one place.",
};

const RESOURCES = [
  { href: "/docs/installation", external: false, ic: "box", t: "Installation guide",
    d: "Requirements, permissions, and a step-by-step setup from install to a live sticky bar on your storefront." },
  { href: "/docs/user-guide", external: false, ic: "book", t: "User guide",
    d: "Day-to-day usage: the Styling, Layout and Behavior tabs, the live preview, and saving your bar live." },
  { href: "/docs/privacy-policy", external: false, ic: "shield", t: "Privacy policy",
    d: "What data the app accesses and stores when installed on your BigCommerce store." },
  { href: "/docs/terms-of-service", external: false, ic: "doc", t: "Terms of service",
    d: "The terms for using the app: service, responsibilities, billing and liability." },
  { href: "/contact", external: false, ic: "mail", t: "Contact & support",
    d: "Questions or issues? Reach the Codinative team - we reply within one business day." },
  { href: LINKS.marketplace, external: true, ic: "store", t: "Get the app",
    d: "Install Sticky Add to Cart on your BigCommerce store from the App Marketplace." },
];

export default function DocsHome() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> Docs</div>
          <span className="eyebrow"><span className="dot" /> Documentation</span>
          <h1 style={{ marginTop: 12 }}>Everything in one place.</h1>
          <p className="lead">Guides, policies and support for Sticky Add to Cart - the BigCommerce app that pins a fully customizable Add to Cart bar to every product page.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap">
          <div className="hub-grid">
            {RESOURCES.map((r) =>
              r.external ? (
                <a key={r.t} href={r.href} target="_blank" rel="noopener" className="dcard">
                  <div className="fic"><Icon name={r.ic} size={22} /></div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <span className="more">Open <Icon name="arrowR" /></span>
                </a>
              ) : (
                <Link key={r.t} href={r.href} className="dcard">
                  <div className="fic"><Icon name={r.ic} size={22} /></div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                  <span className="more">Read <Icon name="arrowR" /></span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
