import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs, getTopic, postsByJob, postsByTopic, fmtDate, topicLabel, site } from '@/lib/posts';

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const j = jobs.find((x) => x.id === slug);
  if (!j) return {};
  return {
    title: `${j.label} 산재`,
    description: `${j.label} — ${j.lead} 자주 문제 되는 상병: ${j.topics.map(topicLabel).join(', ')}.`,
    alternates: { canonical: `/jobs/${j.id}/` },
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = jobs.find((x) => x.id === slug);
  if (!j) notFound();
  const direct = postsByJob(j.id);
  const viaTopic = j.topics.flatMap((id) => postsByTopic(id)).filter((p) => !direct.some((d) => d.slug === p.slug));
  const posts = [...direct, ...viaTopic];
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › <Link href="/jobs/">어떤 일을 하셨나요?</Link> › {j.short}
          </div>
          <h1>{j.label}</h1>
          <p className="sub">{j.lead}</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h" style={{ fontSize: 21 }}>
            어떤 작업이 문제 되나
          </h2>
          <p className="sec-sub">{j.work}</p>
          <h2 className="sec-h" style={{ fontSize: 21, marginTop: 36 }}>
            이 직종에서 자주 문제 되는 상병
          </h2>
          <div className="topic-grid">
            {j.topics.map((id) => {
              const t = getTopic(id);
              if (!t) return null;
              return (
                <Link className="topic-card" key={t.id} href={`/topics/${t.id}/`}>
                  <span className="topic-name">{t.label}</span>
                  <span className="topic-lead">{t.lead}</span>
                </Link>
              );
            })}
          </div>
          <h2 className="sec-h" style={{ fontSize: 21, marginTop: 44 }}>
            관련 글
          </h2>
          {posts.length === 0 ? (
            <p className="empty">이 직종만 다룬 글은 준비 중입니다. 위의 상병별 안내에서 해당하는 병을 먼저 보시고, 하시던 일과 병명을 알려 주시면 상담에서 인정 가능성을 짚어 드립니다 — {site.tel}</p>
          ) : (
            <div className="post-grid">
              {posts.map((p) => (
                <Link className="pcard" key={p.slug} href={`/posts/${p.slug}/`}>
                  <span className="pcard-topic">{topicLabel(p.topic)}</span>
                  <b className="pcard-title">{p.title}</b>
                  <span className="pcard-desc">{p.description}</span>
                  <span className="pcard-meta">
                    {fmtDate(p.date)} · 약 {p.readingMin}분
                  </span>
                </Link>
              ))}
            </div>
          )}
          <Link className="more-link" href="/jobs/">
            다른 직종 보기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
