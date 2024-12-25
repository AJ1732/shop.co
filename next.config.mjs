/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/products/**",
      }
    ],
  },
};

export default nextConfig;
