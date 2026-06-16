import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { LINKS } from "@/lib/site";

export const metadata = {
  title: "User guide",
  description: "How to style, arrange and control your sticky Add to Cart bar — the Styling, Layout and Behavior tabs, the live preview, and saving your bar live.",
};

const TOC = [
  { id: "dashboard", t: "The dashboard" },
  { id: "styling", t: "Styling tab" },
  { id: "layout", t: "Layout tab" },
  { id: "behavior", t: "Behavior tab" },
  { id: "preview", t: "Live preview" },
  { id: "saving", t: "Saving & going live" },
];

export default function UserGuide() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <div className="doc-crumb"><Link href="/">Home</Link> <Icon name="chevR" size={13} /> <Link href="/docs">Docs</Link> <Icon name="chevR" size={13} /> User guide</div>
          <span className="eyebrow"><span className="dot" /> Guide</span>
          <h1 style={{ marginTop: 12 }}>User guide</h1>
          <p className="lead">How to style, arrange and control your sticky Add to Cart bar in the dashboard, day to day.</p>
        </div>
      </section>

      <section className="doc-body">
        <div className="wrap doc-layout">
          <aside className="doc-toc">
            <div className="doc-toc-title">On this page</div>
            {TOC.map((t) => <a key={t.id} href={`#${t.id}`}>{t.t}</a>)}
            <div style={{ marginTop: 16 }}>
              <Link href="/docs/installation" className="btn btn-ghost btn-sm" style={{ width: "100%" }}>← Installation</Link>
            </div>
          </aside>

          <article className="prose">
            <section id="dashboard">
              <h2>The dashboard</h2>
              <p>The dashboard has two areas: a <strong>configuration panel</strong> on the left, organised into three tabs, and a <strong>live preview</strong> on the right that updates as you work. A floating save bar appears at the bottom whenever you have unsaved changes.</p>
              <ul>
                <li><strong>Styling</strong> — the visual appearance of the bar and its elements.</li>
                <li><strong>Layout</strong> — which elements show, their order, and where the bar sits.</li>
                <li><strong>Behavior</strong> — when and how the bar appears, animates and reacts.</li>
              </ul>
            </section>

            <section id="styling">
              <h2>Styling tab</h2>
              <p>Control every visual detail of the bar:</p>
              <ul>
                <li><strong>Bar appearance</strong> — solid or two-colour gradient background, border radius, padding, shadow, border and opacity.</li>
                <li><strong>Typography &amp; colours</strong> — title and price colours and weights, compare-at price (strikethrough or sale badge), font family (including Store Default), size, transform and letter spacing.</li>
                <li><strong>Button</strong> — filled, outline, pill or ghost styles, custom label text, an optional cart icon, colours, hover state, radius, padding, weight and shadow.</li>
                <li><strong>Product image, variant selector &amp; quantity picker</strong> — size and styling for the thumbnail, the variant controls (dropdown, swatch, radio or rectangle list) and the quantity input (stepper, dropdown or number).</li>
              </ul>
            </section>

            <section id="layout">
              <h2>Layout tab</h2>
              <p>Decide what the bar contains and where it lives:</p>
              <ul>
                <li><strong>Element arrangement</strong> — drag to reorder the product image, title, price, variant selector, quantity picker and Add to Cart button, and hide any of them.</li>
                <li><strong>Position</strong> — anchor the bar to the bottom (default), top, left or right of the viewport.</li>
                <li><strong>Width &amp; alignment</strong> — full-width or contained with a max width, content max width, horizontal distribution and vertical alignment.</li>
                <li><strong>Spacing</strong> — gaps between elements, the gap between the left and right groups, and the bar&apos;s offset from the screen edge.</li>
              </ul>
            </section>

            <section id="behavior">
              <h2>Behavior tab</h2>
              <p>Control when and how the bar behaves:</p>
              <ul>
                <li><strong>Display</strong> — the master enable toggle, trigger mode (on scroll, always, or after a delay), scroll threshold, and an optional close button with your chosen close behaviour.</li>
                <li><strong>Animation</strong> — entry (slide, fade, bounce or instant), exit (slide, fade or instant) and the animation duration.</li>
                <li><strong>Cart behaviour</strong> — show a success notification with custom text, and optionally auto-hide the bar after an item is added.</li>
                <li><strong>Mobile</strong> — show or hide on mobile, a compact mobile layout, and a configurable mobile breakpoint.</li>
                <li><strong>Advanced</strong> — z-index control (to sit above chat widgets or cookie banners) and a custom CSS class for theme-level overrides.</li>
              </ul>
            </section>

            <section id="preview">
              <h2>Live preview</h2>
              <p>The preview panel shows a simulated product page with your bar applied in real time. Switch between <strong>desktop and mobile</strong> views, watch the active/inactive status, and use <strong>Full Preview</strong> to open an expanded view in a new tab before saving.</p>
              <div className="note">The preview uses a sample product with placeholder data. On your storefront the real product name, price, image and variants come from BigCommerce automatically.</div>
            </section>

            <section id="saving">
              <h2>Saving &amp; going live</h2>
              <p>When you make changes, the floating save bar appears. Click <strong>Save Changes</strong> to publish — the app updates the storefront script for you, so your latest bar goes live on all product pages without any theme edits. Click <strong>Discard</strong> to revert to your last saved state.</p>
              <div className="note" style={{ marginTop: 16 }}>
                New here? Start with the <Link href="/docs/installation">Installation guide</Link>. For anything else, email <a href={LINKS.support}>{LINKS.email}</a>.
              </div>
            </section>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
