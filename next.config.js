/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/luxury-films',
  assetPrefix: '/luxury-films/'
}

module.exports = nextConfig