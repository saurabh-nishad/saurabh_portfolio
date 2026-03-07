/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? basePath + "/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

module.exports = nextConfig;
