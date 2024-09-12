/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    myApi: {
      fetchOptions: {
        timeout: 30000, // 30 secondes
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org'
      },
      {
        protocol: "https",
        hostname: "fabulous-starfish-340.convex.cloud"
      }
    ]
  },
};

export default nextConfig;
