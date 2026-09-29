import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, fmtDate, topicLabel } from '@/lib/posts';

export const metadata: Metadata = {
  title: '전체 글',
  description: '산재 인정기준, 청구 절차, 유족급여, 불승인 대응에 관한 글을 모았습니다. 법령·매뉴얼 원문과 공개 판례를 대조해 씁니다.',
  alternates: { canonical: '/posts/' },
};

export default function PostsPage() {
  const posts = getAllPosts();
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 전체 글
          </div>
          <h1>전체 글</h1>
          <p className="sub">법령·고용노동부 매뉴얼 원문과 공개 판례를 대조해 씁니다.</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="empty">글을 준비하고 있습니다.</p>
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
        </div>
      </section>
    </main>
  );
}
