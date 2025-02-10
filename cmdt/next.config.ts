import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb'  //! Exposed to attack
    }
  }
};

export default nextConfig;
