/** @type {import('next').NextConfig} */

import nextPWA from '@ducanh2912/next-pwa';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

const withPWA = nextPWA({
  dest: 'public',
});

export default withPWA(nextConfig);
