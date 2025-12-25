/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // <-- pozwala na App Router
  },
};

module.exports = nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Jeśli masz już App Router w /src/app, to tego zwykle nie trzeba
  // (w nowszych wersjach Next to domyślne), ale nie zaszkodzi:
  experimental: {
    appDir: true,
  },

  async headers() {
    return [
      {
        source: "/poradnik/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
