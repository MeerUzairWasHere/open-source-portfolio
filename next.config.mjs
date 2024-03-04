/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com"],
    domains: ["cloudinary.com"],
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "https://aceternity.com.com",
      },
    ],
  },
};

export default nextConfig;
