

/**
 * @type {import('next').NextConfig}
 */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
}

module.exports = nextConfig
