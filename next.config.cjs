/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? basePath + "/" : "",
  trailingSlash: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;
