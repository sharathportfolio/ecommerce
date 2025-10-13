import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's6k4-mumbai.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
