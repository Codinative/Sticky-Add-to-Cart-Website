import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export to out/ for Firebase Hosting (see firebase.json).
  output: "export",
};

export default nextConfig;
