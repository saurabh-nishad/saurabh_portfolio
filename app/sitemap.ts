import type { MetadataRoute } from "next";

const SITE_URL = "https://saurabh-nishad.github.io/saurabh_portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
