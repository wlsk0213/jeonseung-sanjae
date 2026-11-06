import type { MetadataRoute } from 'next';
import { getAllPosts, topics, jobs, site } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod는 빌드 시각이 아니라 실제로 내용이 바뀐 날짜로 둔다(빌드마다 바뀌면 구글이 lastmod를 믿지 않음).
  const posts = getAllPosts();
  const latest = (list: { date: string; updated?: string }[], fallback: string) =>
    new Date(list.map((p) => p.updated ?? p.date).sort().pop() ?? fallback);
  const SITE_LAUNCH = '2026-09-29';
  const newest = latest(posts, SITE_LAUNCH);
  // 글 목록이 붙는 페이지는 최신 글 날짜, 나머지 안내 페이지는 개설일
  const fixed: [string, number, Date][] = [
    ['/', 1, newest],
    ['/guide/', 0.9, new Date(SITE_LAUNCH)],
    ['/topics/', 0.9, newest],
    ['/jobs/', 0.9, newest],
    ['/cases/', 0.7, newest],
    ['/family/', 0.9, new Date(SITE_LAUNCH)],
    ['/contact/', 0.7, new Date(SITE_LAUNCH)],
    ['/posts/', 0.8, newest],
    ['/about/', 0.5, new Date(SITE_LAUNCH)],
  ];
  const fixedUrls = fixed.map(([p, pr, d]) => ({ url: `${site.url}${p}`, lastModified: d, priority: pr }));
  const topicUrls = topics.map((t) => ({
    url: `${site.url}/topics/${t.id}/`,
    lastModified: latest(posts.filter((p) => p.topic === t.id), SITE_LAUNCH),
    priority: 0.8,
  }));
  const jobUrls = jobs.map((j) => ({
    url: `${site.url}/jobs/${j.id}/`,
    lastModified: latest(posts.filter((p) => p.jobs?.includes(j.id)), SITE_LAUNCH),
    priority: 0.8,
  }));
  const postUrls = posts.map((p) => ({
    url: `${site.url}/posts/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    priority: 0.8,
  }));
  return [...fixedUrls, ...topicUrls, ...jobUrls, ...postUrls];
}
