import Link from 'next/link';
import { getAllPosts, diseaseTopics, topics, jobs, site, fmtDate, topicLabel, postsByTopic, postsByJob } from '@/lib/posts';

/** 글이 쌓이기 전에도 첫 화면이 비지 않도록, 안내 페이지를 '안내' 항목으로 함께 목록에 넣는다. */
const guides = [
  { href: '/guide/', badge: '안내', title: '산재가 처음이신가요? — 산재 여부, 첫 할 일, 급여 종류, 기한', desc: '산재인지 아닌지부터 청구 기한, 혼자 할 수 있는지까지 질문별로 정리했습니다.' },
  { href: '/family/', badge: '유족', title: '가족을 잃으셨다면 — 지금 남겨 둘 것과 유족급여·장례비 청구', desc: '장례를 치르는 동안 무엇을 남겨 두어야 하는지, 누가 어떻게 청구하는지, 회사가 협조하지 않을 때의 대응.' },
  { href: '/cases/', badge: '사례', title: '산재 보상 승인 사례 — 어떤 자료로 인정됐나', desc: '공단·법원의 공개 사례와 저희가 다룬 사건 유형을 상병별로 모았습니다.' },
];

export default function Home() {
  const posts = getAllPosts();
  const steps = [
    { n: '1', t: '병명과 하신 일 확인' },
    { n: '2', t: '기록 모으기' },
    { n: '3', t: '공단에 청구' },
    { n: '4', t: '조사와 심의' },
    { n: '5', t: '결정 뒤 대응' },
  ];
  return (
    <main>
      <section className="blog-head">
        <div className="wrap">
          <p className="eyebrow">노무법인 전승 · 산재보상전문센터</p>
          <h1>일하다 생긴 병인지, 먼저 확인해 드립니다</h1>
          <p className="lede">
            산재 인정기준과 청구 절차, 유족급여, 불승인 대응을 법령·고용노동부 매뉴얼 원문과 공개 판례에 맞춰
            씁니다. 병명이나 하시던 일로 찾아보시고, 막히는 부분은 상담으로 물어보십시오.
          </p>
        </div>
      </section>

      <div className="wrap blog-layout">
        <div className="feed">
          <h2 className="feed-h">
            최근 글 <span>{posts.length}편</span>
          </h2>
          {posts.length === 0 && <p className="empty">글을 준비하고 있습니다.</p>}
          {posts.map((p) => (
            <article className="feed-item" key={p.slug}>
              <div className="feed-meta">
                <Link className="feed-topic" href={`/topics/${p.topic}/`}>
                  {topicLabel(p.topic)}
                </Link>
                <time dateTime={p.date}>{fmtDate(p.date)}</time>
                <span>약 {p.readingMin}분</span>
              </div>
              <h3>
                <Link href={`/posts/${p.slug}/`}>{p.title}</Link>
              </h3>
              <p>{p.description}</p>
              <Link className="feed-more" href={`/posts/${p.slug}/`}>
                계속 읽기 →
              </Link>
            </article>
          ))}

          <h2 className="feed-h" style={{ marginTop: 40 }}>
            안내 페이지
          </h2>
          {guides.map((g) => (
            <article className="feed-item" key={g.href}>
              <div className="feed-meta">
                <span className="feed-topic alt">{g.badge}</span>
              </div>
              <h3>
                <Link href={g.href}>{g.title}</Link>
              </h3>
              <p>{g.desc}</p>
              <Link className="feed-more" href={g.href}>
                보기 →
              </Link>
            </article>
          ))}
        </div>

        <aside className="side">
          <div className="side-card side-cta">
            <b>지금은 서류를 다 갖추지 않으셔도 됩니다</b>
            <p>병명과 하시던 일, 지금 상황을 알려 주시면 무엇부터 확인해야 하는지 짚어 드립니다.</p>
            <a className="btn-main" href={`tel:${site.tel}`}>
              {site.tel}
            </a>
            <a className="btn-ghost" href={site.kakao} target="_blank" rel="noopener">
              카카오톡 상담
            </a>
          </div>

          <div className="side-card">
            <b>상병별로 찾기</b>
            <ul className="side-list">
              {diseaseTopics.map((t) => {
                const n = postsByTopic(t.id).length;
                return (
                  <li key={t.id}>
                    <Link href={`/topics/${t.id}/`}>{t.label}</Link>
                    {n > 0 && <span>{n}</span>}
                  </li>
                );
              })}
              {topics
                .filter((t) => t.kind === 'process')
                .map((t) => (
                  <li key={t.id}>
                    <Link href={`/topics/${t.id}/`}>{t.label}</Link>
                    {postsByTopic(t.id).length > 0 && <span>{postsByTopic(t.id).length}</span>}
                  </li>
                ))}
            </ul>
          </div>

          <div className="side-card">
            <b>직종별로 찾기</b>
            <ul className="side-list">
              {jobs.map((j) => {
                const n = postsByJob(j.id).length;
                return (
                  <li key={j.id}>
                    <Link href={`/jobs/${j.id}/`}>{j.label}</Link>
                    {n > 0 && <span>{n}</span>}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="side-card">
            <b>산재 신청 순서</b>
            <ol className="side-steps">
              {steps.map((s) => (
                <li key={s.n}>
                  <span>{s.n}</span>
                  {s.t}
                </li>
              ))}
            </ol>
            <Link className="more-link" href="/guide/">
              질문별 안내 보기 →
            </Link>
          </div>

          <div className="side-card side-family">
            <b>가족을 잃으셨다면</b>
            <p>유족급여·장례비 청구와 지금 남겨 둘 것을 따로 정리했습니다.</p>
            <Link className="btn-nav" href="/family/">
              유족 가이드
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
