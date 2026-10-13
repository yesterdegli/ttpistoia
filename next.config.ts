import type { NextConfig } from "next";
import { LEGACY_HTM_REDIRECTS } from "./lib/legacy-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_HTM_REDIRECTS.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
  // Webpack dev on Windows is more stable than Turbopack for this project.
  webpack: (config, { dev }) => {
    if (dev && process.platform === "win32") {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
