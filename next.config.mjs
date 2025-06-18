/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.healthcareinternational.in", "blr1.digitaloceanspaces.com"],
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
