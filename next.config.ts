import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Stand-in photography. Remove this once every image is replaced with files in /public/images.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default config;
