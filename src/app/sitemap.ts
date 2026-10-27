import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { SITE_URL, issues } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/faq",
    "/issues",
    "/how-to-vote",
    "/endorsements",
    "/volunteer",
    "/privacy-policy",
  ];
  const routes = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-10-27"),
  }));
  const issueRoutes = issues.map((issue) => ({
    url: `${SITE_URL}/issues/${issue.slug}`,
    lastModified: new Date("2026-10-27"),
  }));
  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...issueRoutes, ...postRoutes];
}
