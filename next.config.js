/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
  },
  // Add trailing slashes to ensure proper static routing
  trailingSlash: true,
  // Ensure links work correctly in static export
  assetPrefix: '/',
}

module.exports = nextConfig