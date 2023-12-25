/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'persona-business-academy-website.s3.us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'https://d2cnsoh3yg3xet.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;
