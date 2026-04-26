/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "i.ibb.co",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;