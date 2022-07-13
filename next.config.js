/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org","external-content.duckduckgo.com"],
  },
}

module.exports = nextConfig
