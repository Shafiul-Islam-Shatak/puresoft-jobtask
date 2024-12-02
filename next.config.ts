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
  api: {
    bodyParser: true,  // Ensures the body is parsed as JSON
  },
};

export default nextConfig;
