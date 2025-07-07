import type { NextConfig } from "next";
import { NextConfigComplete } from "next/dist/server/config-shared";

const nextConfig: NextConfig & Partial<NextConfigComplete> = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
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
