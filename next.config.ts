import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // 👇 REQUIRED for static export
  output: 'export',
  // 👇 REQUIRED for proper routing on shared hosting
  trailingSlash: true,
  
  // 👇 Fix for multiple lockfiles warning
  outputFileTracingRoot: path.join(__dirname),

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
