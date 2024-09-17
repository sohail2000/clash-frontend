/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "w1k8rk33-3001.inc1.devtunnels.ms",
          protocol: "https",
        },
      ],
    },
    reactStrictMode: false,
  };

export default nextConfig;
