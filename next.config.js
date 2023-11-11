/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.rays-counter.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
