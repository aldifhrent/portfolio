/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
