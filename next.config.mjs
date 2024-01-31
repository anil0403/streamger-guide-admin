/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "13.201.19.240",
        },
      ],
    },
  };
  
  export default nextConfig;
  