import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", 
      },
    ],
    dangerouslyAllowSVG: true, 
    contentDispositionType: "inline",
  },
};

export default nextConfig;
