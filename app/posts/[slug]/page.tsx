import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPost, postsByTopic, fmtDate, topicLabel, site } from '@/lib/posts';
import { personBase } from '@/lib/person';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/posts/${p.slug}/` },
    openGraph: { type: 'article', title: p.title, description: p.description, publishedTime: p.date, modifiedTime: p.updated ?? p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const url = `${site.url}/posts/${p.slug}/`;
  const related = postsByTopic(p.topic).filter((x) => x.slug !== p.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    inLanguage: 'ko-KR',
    articleSection: topicLabel(p.topic),
    keywords: p.keywords.join(', '),
    mainEntityOfPage: url,
    author: personBase,
    publisher: { '@type': 'Organization', name: site.name, url: site.url, parentOrganization: { '@type': 'Organization', name: site.firm, url: site.firmUrl } },
  };
  const crumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name: topicLabel(p.topic), item: `${site.url}/topics/${p.topic}/` },
      { '@type': 'ListItem', position: 3, name: p.title, item: url },
    ],
  };
  const faqJsonLd =
    p.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }
      : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › <Link href="/topics/">내 병은 어디에 해당하나요?</Link> ›{' '}
            <Link href={`/topics/${p.topic}/`}>{topicLabel(p.topic)}</Link>
          </div>
          <h1>{p.title}</h1>
          <p className="sub">
            글 · {site.author} &nbsp;|&nbsp; 작성기준일 {fmtDate(p.date)}
            {p.updated && <> &nbsp;|&nbsp; 수정 {fmtDate(p.updated)}</>} &nbsp;|&nbsp; 약 {p.readingMin}분
          </p>
        </div>
      </div>

      <section className="sec">
        <div className="post-wrap">
          <article className="post-body" dangerouslySetInnerHTML={{ __html: p.html }} />

          {p.faq.length > 0 && (
            <div className="post-faq">
              <h2>자주 묻는 질문</h2>
              {p.faq.map((f, i) => (
                <details className="faq" key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          )}

          <div className="author-box">
            <b>글쓴이 · 전지나 대표 공인노무사</b>
            <ul>
              <li>노무법인 전승 대표</li>
              <li>산업안전·중대재해 | 산재보상 | 직장 내 괴롭힘 조사</li>
              <li>충청남도 갑질·괴롭힘 예방 안심노무사 · 충청남도의회 갑질 상담 조사관</li>
              <li>
                <a href={`${site.firmUrl}/members/`}>프로필·이력</a> · <a href={site.firmUrl}>{site.firm}</a> ·{' '}
                <a href={site.blogUrl}>블로그</a> · {site.tel}
              </li>
            </ul>
          </div>

          <p className="post-note">
            이 글은 일반적인 정보 제공을 목적으로 작성되었으며, 개별 사안에 대한 법률 자문이 아닙니다. 작성기준일{' '}
            {fmtDate(p.date)}.
          </p>

          {related.length > 0 && (
            <div className="related">
              <h2>같은 상병의 다른 글</h2>
              <div className="post-grid">
                {related.map((r) => (
                  <Link className="pcard" key={r.slug} href={`/posts/${r.slug}/`}>
                    <b className="pcard-title">{r.title}</b>
                    <span className="pcard-meta">{fmtDate(r.date)}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>같은 상황이신가요?</h2>
          <p>병명과 하신 일을 알려 주시면 인정 가능성과 준비할 자료를 먼저 짚어 드립니다.</p>
          <div className="cta-row">
            <a className="btn-main" href={`tel:${site.tel}`}>
              {site.tel}
            </a>
            <a className="btn-ghost" href={site.kakao} target="_blank" rel="noopener">
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
