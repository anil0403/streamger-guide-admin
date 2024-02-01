/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.201.19.240",
      },
      {
        protocol: "http",
        hostname: "192.168.1.73",
      },
      {
        protocol: "https",
        hostname: "images.justwatch.com",
      },
      {
        protocol: "https",
        hostname: "www.justwatch.com",
      },
    ],
  },
};

export default nextConfig;
