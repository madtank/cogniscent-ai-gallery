/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // Add trailing slashes to ensure proper static routing
  trailingSlash: true,
  // Ensure links work correctly in static export
  basePath: '',
  // Asset prefix should match the CloudFront domain
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://thecogniscentai.com' : '',
}

module.exports = nextConfig