import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */  
    eslint: {
    ignoreDuringBuilds: true, // ignore les erreurs ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // ignore les erreurs TypeScript
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
