/*
 * @Author: tianxiuping
 * @Date: 2025-09-01 17:51:27
 * @LastEditTime: 2025-09-04 14:17:55
 * @Description:
 */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "",
  env: {
    infuraKey: process.env.INFURA_KEY,
    alchemyKey: process.env.ALCHEMY_KEY,
    walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.alias["@src"] = path.resolve("./src");
    return config;
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
