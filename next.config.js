/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint 10 removed options that Next.js 14 passes internally; skip during build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['img.magnific.com', 'media.istockphoto.com', 'www.franchiseexpo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'www.franchiseexpo.com',
      },
    ],
  },
}

module.exports = nextConfig