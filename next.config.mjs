/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.healthcareinternational.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blr1.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/doctors/oncology/dr-anil-k-dcruz',
        destination: '/doctors/oncology/dr-anil-k-d-cruz',
        permanent: true, // or false if it's a temporary redirect
      },
    ];
  },
};

export default nextConfig;
