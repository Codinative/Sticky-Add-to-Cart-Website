import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="doc-hero">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" /> 404</span>
          <h1 style={{ marginTop: 12 }}>Page not found.</h1>
          <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <Link href="/" className="btn btn-primary btn-sm"><Icon name="arrowR" size={16} /> Back to home</Link>
            <Link href="/docs" className="btn btn-ghost btn-sm"><Icon name="book" size={16} /> Documentation</Link>
            <Link href="/contact" className="btn btn-ghost btn-sm"><Icon name="mail" size={16} /> Contact</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
