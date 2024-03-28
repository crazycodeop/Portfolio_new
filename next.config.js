/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["res.cloudinary.com", "user-images.githubusercontent.com"],
  },
};

module.exports = nextConfig
