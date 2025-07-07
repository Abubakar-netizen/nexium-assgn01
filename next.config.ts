import type { NextConfig } from "next";
import { NextConfigComplete } from "next/dist/server/config-shared";

const nextConfig: NextConfig & Partial<NextConfigComplete> = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...(config.resolve?.fallback || {}),
          fs: false,
          path: false,
          os: false,
          encoding: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
