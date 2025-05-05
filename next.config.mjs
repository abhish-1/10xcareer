/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  compiler: {
    minify: false, // disable SWC minifier
  },
  webpack(config) {
    config.optimization.minimize = false; // disable Terser or any custom minifier
    return config;
  },
};

export default nextConfig;
