/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['explorer-api.walletconnect.com','gateway.lighthouse.storage']
  }
}

module.exports = nextConfig
