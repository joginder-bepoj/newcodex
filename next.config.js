/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized: true,
    domains: ['api.codexview.com']
  }
}

module.exports = nextConfig
