/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["65.108.132.145"],
  },
};

module.exports = nextConfig;
