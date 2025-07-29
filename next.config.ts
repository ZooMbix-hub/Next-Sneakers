import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [new URL('https://boringapi.com/api/v1/static/photos/**')],
  }
};

export default nextConfig;
