module.exports = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH ? process.env.BASE_PATH + "/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || "",
  },
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
