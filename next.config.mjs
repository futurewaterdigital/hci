/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.healthcareinternational.in", "blr1.digitaloceanspaces.com"],
  },
  compress: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
