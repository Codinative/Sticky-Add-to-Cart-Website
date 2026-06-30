import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: "mE51E51lm1Lwm73kSnZ_DXll15Ab0zp2aWaCnir5q2s" },
  title: {
    default: "Sticky Add to Cart for BigCommerce - Boost Conversions",
    template: "%s - Sticky Add to Cart",
  },
  description:
    "Add a fully customizable, always-visible Add to Cart bar to every BigCommerce product page. Style it visually, set smart triggers, no code required.",
  keywords: [
    "BigCommerce sticky add to cart", "sticky cart bar", "add to cart bar", "conversion app",
    "product page conversion", "sticky bar", "Codinative", "BigCommerce app", "mobile add to cart",
  ],
  openGraph: {
    type: "website",
    title: "Sticky Add to Cart - a persistent Add to Cart bar for BigCommerce",
    description:
      "Keep the Add to Cart button in reach as shoppers scroll. Fully customizable, mobile-ready, smart triggers - no code required.",
    siteName: "Sticky Add to Cart",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
