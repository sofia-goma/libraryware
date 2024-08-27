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
    domains: ["covers.openlibrary.org"],
  },
};

export default nextConfig;
