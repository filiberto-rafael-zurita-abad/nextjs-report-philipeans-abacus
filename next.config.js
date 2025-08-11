/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  // Do not set experimental.outputFileTracingRoot on Vercel
  // Do not set a custom distDir; keep the default ".next"
  // Do not set output: 'export' for a normal Next.js deploy
};

module.exports = nextConfig;
