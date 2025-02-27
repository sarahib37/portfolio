/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['yourdomain.com'],
    },
    experimental: {
      appDir: true, // Enable app directory if using Next.js 13
    },
  };

export default nextConfig;
