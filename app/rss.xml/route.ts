import { getAllPosts, site } from '@/lib/posts';

// 네이버 서치어드바이저 RSS 제출용 피드(10-29). 정적 내보내기로 /rss.xml 파일이 만들어진다.
export const dynamic = 'force-static';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const posts = getAllPosts().slice(0, 50);
  const items = posts
    .map((p) => {
      const url = `${site.url}/posts/${p.slug}/`;
      return [
        '<item>',
        `<title>${esc(p.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${esc(p.description)}</description>`,
        `<pubDate>${new Date(p.date).toUTCString()}</pubDate>`,
        '</item>',
      ].join('');
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${esc(site.name)}</title>
<link>${site.url}/</link>
<description>산재 신청·불승인·유족급여·업무상 질병 인정 기준과 인정 사례를 정리한 노무법인 전승 산재보상전문센터의 글</description>
<language>ko</language>
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
