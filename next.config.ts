import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 👇 REQUIRED for static export
  output: 'export',
  // 👇 REQUIRED for proper routing on shared hosting
  trailingSlash: true,

  images: {
    // 👇 REQUIRED because next/image doesn't work on shared hosting
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
