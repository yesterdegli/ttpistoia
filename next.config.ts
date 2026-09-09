import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
