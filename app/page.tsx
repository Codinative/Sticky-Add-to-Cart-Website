import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import StickyPreview from "@/components/StickyPreview";
import { LINKS } from "@/lib/site";

const FEATURES = [
  { ic: "pin", t: "Always within reach", d: "A persistent Add to Cart bar follows shoppers down the page, so the buy action is never more than a glance away - no scrolling back to the top." },
  { ic: "palette", t: "Total visual control", d: "Colours, gradients, fonts, shadows, borders, opacity and button styles. Match your brand exactly with a live preview - no code, no theme edits." },
  { ic: "eye", t: "Smart show triggers", d: "Show the bar on scroll (when the original button leaves the screen), always on load, or after a timed delay. Add a dismiss button with your own close behaviour." },
  { ic: "move", t: "Drag-to-arrange layout", d: "Reorder image, title, price, variants, quantity and the button by dragging. Toggle any element off, and anchor the bar to the bottom, top, left or right." },
  { ic: "phone", t: "Built for mobile", d: "A compact mobile layout with its own breakpoint, plus the option to show or hide the bar on phones. Smooth slide, fade or bounce animations on every device." },
  { ic: "sliders", t: "Variants & quantity, inline", d: "Let shoppers pick a size or colour and set quantity right from the bar - dropdowns, swatches, radios or rectangles, with a stepper, dropdown or number input." },
];

const FLOW = [
  { t: "Install the app", d: "Add Sticky Add to Cart from the BigCommerce App Marketplace. Your free trial starts on install - no theme files to touch." },
  { t: "Configure your bar", d: "Use the Styling, Layout and Behavior tabs to design the bar. Every change updates the live preview instantly, on desktop and mobile." },
  { t: "Preview it live", d: "Check the bar on a simulated product page, switch between desktop and mobile, or open a full-page preview before you publish." },
  { t: "Save & go live", d: "Hit Save. The app installs the bar across all your product pages automatically - live in minutes, no developer required." },
];

const USECASES = [
  { ic: "cart", t: "Considered purchases", d: "Long, detailed product pages for higher-ticket items keep the buy button pinned while shoppers read specs, reviews and FAQs." },
  { ic: "phone", t: "Mobile-first stores", d: "On small screens the original button scrolls away fast. A compact sticky bar keeps checkout one tap away the whole way down." },
  { ic: "scroll", t: "Rich, scrollable pages", d: "Image galleries, descriptions, related products - whenever your product page is tall, the bar removes the friction of scrolling back up." },
];

const FAQS = [
  { q: "How does the bar get onto my product pages?", a: "When you click Save, the app automatically installs its storefront script on your store via the BigCommerce Scripts API - there are no theme files to edit. The bar then appears on all product pages. To remove it, toggle it off in the app or uninstall." },
  { q: "Will it match my store's design?", a: "Yes. The Styling tab gives you full control over background (solid or gradient), typography, colours, button style, shadows, borders, the product image, variant controls and the quantity picker. Set the font to Store Default to inherit your theme's font automatically." },
  { q: "When exactly does the bar appear?", a: "You choose. Show it on scroll once the page's original Add to Cart button leaves the viewport (recommended), always on page load, or after a time delay. You can also set a scroll threshold and an optional close button." },
  { q: "Does it work on mobile?", a: "Fully. There's a compact mobile layout, a configurable mobile breakpoint, and a toggle to show or hide the bar on phones entirely - plus smooth entry and exit animations." },
  { q: "Can shoppers choose variants and quantity from the bar?", a: "Yes. Add the variant selector (dropdown, swatch, radio or rectangle list) and a quantity picker (stepper, dropdown or number input) to the bar, so customers can configure and add to cart without scrolling." },
  { q: "What permissions does the app need?", a: "It needs access to storefront scripts (to install the bar) and to read product information so the bar shows the right title, price, image and variants. It does not touch your orders or payment data." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow on-ink"><span className="dot" /> BigCommerce Conversion App</span>
            <h1>Keep Add to Cart <span className="hl">always in reach</span>.</h1>
            <p className="lead">
              Add a persistent, fully customizable Add to Cart bar to every BigCommerce product page.
              As shoppers scroll, the buy action stays with them - styled to your brand, with smart
              triggers, variants and quantity built in. No code required.
            </p>
            <div className="hero-cta">
              <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                <Icon name="store" size={18} /> Get it on BigCommerce
              </a>
              <Link href="/docs" className="btn btn-ink btn-lg">
                <Icon name="book" size={18} /> Read the docs
              </Link>
            </div>
            <div className="trust">
              <span className="trust-item"><Icon name="check" /> No code required</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> Live preview</span>
              <span className="trust-sep" />
              <span className="trust-item"><Icon name="check" /> 7-day free trial</span>
            </div>
          </div>
          <StickyPreview />
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Why merchants use it</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>A buy button that never leaves the screen.</h2>
            <p className="lead">Shoppers lose interest when they have to hunt for the Add to Cart button. Keep it pinned, on-brand, and one tap away - and watch fewer carts slip through the cracks.</p>
          </div>
          <div className="fgrid">
            {FEATURES.map((f) => (
              <div key={f.t} className="fcard">
                <div className="fic"><Icon name={f.ic} size={22} /></div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how" className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Set up in minutes</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>From install to live bar in four steps.</h2>
            <p className="lead">Configure it once in a visual dashboard - the app does the storefront install for you.</p>
          </div>
          <div className="flow">
            {FLOW.map((s, i) => (
              <div key={s.t} className="fstep">
                <div className="fstep-n">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="fstep-arrow"><Icon name="arrowR" size={22} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Customization showcase ---------- */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <span className="eyebrow"><span className="dot" /> Make it yours</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Three tabs. Endless looks.</h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Everything is configured from one dashboard with a real-time live preview - so the bar
              feels like a native part of your storefront, not a bolted-on widget.
            </p>
            <ul className="checks">
              <li><span className="ck"><Icon name="check" /></span><div><b>Style every detail.</b><br /><span>Gradients, fonts, shadows, button styles, image, variants and quantity.</span></div></li>
              <li><span className="ck"><Icon name="check" /></span><div><b>Arrange the layout.</b><br /><span>Drag to reorder, hide elements, and anchor the bar to any edge.</span></div></li>
              <li><span className="ck"><Icon name="check" /></span><div><b>Control the behaviour.</b><br /><span>Triggers, animations, success messages, mobile rules and z-index.</span></div></li>
            </ul>
          </div>
          <div className="split-list">
            <div className="pcard">
              <h4><span className="tag">Styling</span> Pixel-perfect to your brand</h4>
              <p>Background and gradient, typography and colours, four button styles, product image, variant selectors and the quantity picker.</p>
            </div>
            <div className="pcard">
              <h4><span className="tag">Layout</span> Position &amp; arrangement</h4>
              <p>Drag elements into the order you want, toggle any of them off, set full or contained width, alignment and spacing - bottom, top, left or right.</p>
            </div>
            <div className="pcard">
              <h4><span className="tag">Behavior</span> When &amp; how it shows</h4>
              <p>Scroll, always-on or delayed triggers, entry and exit animations, add-to-cart success notifications, and dedicated mobile settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Use cases ---------- */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Made for</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Wherever shoppers scroll, keep them buying.</h2>
            <p className="lead">The longer your product page, the more a sticky bar earns its place.</p>
          </div>
          <div className="fgrid">
            {USECASES.map((u) => (
              <div key={u.t} className="fcard">
                <div className="fic"><Icon name={u.ic} size={22} /></div>
                <h3>{u.t}</h3>
                <p>{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="pricing" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Pricing</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>One simple plan.</h2>
            <p className="lead">Start with a free trial. Every styling, layout and behaviour option included - no limits.</p>
          </div>
          <div className="plan-wrap">
            <div className="plan">
              <div className="plan-head">
                <span className="plan-name">Pro <span className="chip">7-day free trial</span></span>
                <div className="plan-price">
                  <b>$50</b><span>/ month</span>
                </div>
                <p className="plan-sub">Try every feature free for 7 days - cancel any time by uninstalling. No setup fees, no per-page charges.</p>
              </div>
              <div className="plan-body">
                <ul className="checks">
                  <li><span className="ck"><Icon name="check" /></span><div><b>Unlimited product pages</b><br /><span>The bar runs across your entire catalogue - no caps.</span></div></li>
                  <li><span className="ck"><Icon name="check" /></span><div><b>Every customization option</b><br /><span>Full styling, layout and behaviour controls with live preview.</span></div></li>
                  <li><span className="ck"><Icon name="check" /></span><div><b>Desktop &amp; mobile</b><br /><span>Compact mobile layout, animations and smart triggers included.</span></div></li>
                </ul>
                <div className="plan-foot">
                  <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                    <Icon name="store" size={18} /> Start free on BigCommerce
                  </a>
                  <span className="plan-note">Billed in USD. See the BigCommerce listing for current pricing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Docs ---------- */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> Documentation</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Guides for every step.</h2>
            <p className="lead">Everything you need to install the app and dial in your sticky bar - reviewable before you install.</p>
          </div>
          <div className="dgrid">
            <Link href="/docs/installation" className="dcard">
              <div className="fic"><Icon name="box" size={22} /></div>
              <h3>Installation guide</h3>
              <p>Requirements, permissions, and a step-by-step setup from install to a live sticky bar on your storefront.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
            <Link href="/docs/user-guide" className="dcard">
              <div className="fic"><Icon name="book" size={22} /></div>
              <h3>User guide</h3>
              <p>Day-to-day usage: the Styling, Layout and Behavior tabs, the live preview, and saving your bar live.</p>
              <span className="more">Read the guide <Icon name="arrowR" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow"><span className="dot" /> FAQ</span>
            <h2 className="h-sec" style={{ marginTop: 12 }}>Questions, answered.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q} <span className="ic"><Icon name="plus" size={18} /></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <div className="cta-in">
              <h2>Ready to keep Add to Cart in reach?</h2>
              <p>Install Sticky Add to Cart, design your bar, and start turning more scrolls into checkouts - live in minutes, free for 7 days.</p>
              <div className="cta-btns">
                <a href={LINKS.marketplace} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                  <Icon name="store" size={18} /> Get it on BigCommerce
                </a>
                <Link href="/docs/installation" className="btn btn-ink btn-lg">
                  <Icon name="box" size={18} /> Installation guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
