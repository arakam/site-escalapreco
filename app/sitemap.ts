import { MetadataRoute } from "next";
import { site, getAllBlogSlugs } from "@/lib/content";

const base = site.baseUrl;
const staticPaths = [
  "",
  "/precos",
  "/recursos",
  "/como-funciona",
  "/blog",
  "/privacidade",
  "/termos",
  "/contato",
  "/calculadora-mercado-livre",
  "/taxas-mercado-livre",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path ? `${base}${path}` : base,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : path === "/blog" ? "daily" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog") ? 0.8 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
