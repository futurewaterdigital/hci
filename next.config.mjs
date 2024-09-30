/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.healthcareinternational.in'],
  },
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  compress: true,
}

export default nextConfig
