import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/games",
        destination: "/games/rock-paper-scissors",
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
