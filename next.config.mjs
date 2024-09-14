/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nasa-mars-rovers',
  images: {
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
