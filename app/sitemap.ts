import type { MetadataRoute } from "next";
import { SITE_URL as BASE_URL } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/docs",
  "/docs/installation",
  "/docs/user-guide",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`,
  }));
}
