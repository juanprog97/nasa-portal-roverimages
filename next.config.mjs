/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nasa-mars-rovers',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
};

export default nextConfig;
