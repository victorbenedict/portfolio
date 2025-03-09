import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['github.com', 'cdn.simpleicons.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simpleicons.org',
      },
    ],
  },
};

export default nextConfig;
