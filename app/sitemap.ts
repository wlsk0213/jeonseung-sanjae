import type { MetadataRoute } from 'next';
import { getAllPosts, topics, jobs, site } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: [string, number][] = [
    ['/', 1],
    ['/guide/', 0.9],
    ['/topics/', 0.9],
    ['/jobs/', 0.9],
    ['/cases/', 0.7],
    ['/family/', 0.9],
    ['/contact/', 0.7],
    ['/posts/', 0.8],
    ['/about/', 0.5],
  ];
  const fixedUrls = fixed.map(([p, pr]) => ({ url: `${site.url}${p}`, lastModified: now, priority: pr }));
  const topicUrls = topics.map((t) => ({ url: `${site.url}/topics/${t.id}/`, lastModified: now, priority: 0.8 }));
  const jobUrls = jobs.map((j) => ({ url: `${site.url}/jobs/${j.id}/`, lastModified: now, priority: 0.8 }));
  const postUrls = getAllPosts().map((p) => ({
    url: `${site.url}/posts/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    priority: 0.8,
  }));
  return [...fixedUrls, ...topicUrls, ...jobUrls, ...postUrls];
}
