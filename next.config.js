/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
};

module.exports = nextConfig;
