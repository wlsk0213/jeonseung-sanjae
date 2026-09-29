import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topics, postsByTopic, fmtDate, getJob, site } from '@/lib/posts';

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = topics.find((x) => x.id === slug);
  if (!t) return {};
  return {
    title: `${t.label} 산재`,
    description: `${t.label} — ${t.lead}. 산재 인정기준과 준비 자료를 법령 원문 기준으로 정리합니다.`,
    alternates: { canonical: `/topics/${t.id}/` },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = topics.find((x) => x.id === slug);
  if (!t) notFound();
  const posts = postsByTopic(t.id);
  const relJobs = t.jobs.map(getJob).filter(Boolean);
  const crumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: '내 병은 어디에 해당하나요?', item: `${site.url}/topics/` },
      { '@type': 'ListItem', position: 3, name: t.label, item: `${site.url}/topics/${t.id}/` },
    ],
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }} />
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › <Link href="/topics/">내 병은 어디에 해당하나요?</Link> › {t.label}
          </div>
          <h1>{t.label}</h1>
          <p className="sub">{t.lead}</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="empty">이 상병의 안내 글을 준비하고 있습니다. 상담은 지금도 가능합니다 — {site.tel}</p>
          ) : (
            <div className="post-grid">
              {posts.map((p) => (
                <Link className="pcard" key={p.slug} href={`/posts/${p.slug}/`}>
                  <b className="pcard-title">{p.title}</b>
                  <span className="pcard-desc">{p.description}</span>
                  <span className="pcard-meta">
                    {fmtDate(p.date)} · 약 {p.readingMin}분
                  </span>
                </Link>
              ))}
            </div>
          )}
          {relJobs.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h2 className="sec-h" style={{ fontSize: 20 }}>
                이 상병이 많은 직종
              </h2>
              <div className="chips" style={{ marginTop: 12 }}>
                {relJobs.map((j) => (
                  <Link key={j!.id} href={`/jobs/${j!.id}/`}>
                    {j!.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Link className="more-link" href="/topics/">
            다른 상병 보기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
