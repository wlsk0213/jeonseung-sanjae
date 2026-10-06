import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import { site, menus, diseaseTopics, jobs } from '@/lib/posts';
import { personBase } from '@/lib/person';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 일하다 생긴 병인지, 먼저 확인해 드립니다`,
    template: `%s | ${site.name}`,
  },
  description:
    '산재인지 아닌지부터 판단이 갈립니다. 과로성 뇌심혈관 질병, 직업성 암, 소음성 난청, 근골격계 질환, 업무상 사고와 유족급여까지 — 병명과 하신 일을 기준으로 인정 가능성과 준비할 자료를 법령 원문에 따라 정리합니다. 노무법인 전승 산재보상전문센터.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: 'ko_KR' },
};

// 고령 이용자 배려: 확대 허용 (maximumScale 지정하지 않음)
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${site.url}/#center`,
  name: site.name,
  alternateName: '노무법인 전승 산재보상 전문센터',
  url: site.url,
  telephone: '+82-41-417-1915',
  slogan: '일하다 생긴 병인지, 먼저 확인해 드립니다',
  description: site.tagline,
  parentOrganization: { '@type': 'LegalService', name: site.firm, url: site.firmUrl },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressRegion: '충청남도',
    addressLocality: '천안시 동남구',
    streetAddress: '청수9로 1, 7층 703호 (청당동, 청오법조빌딩)',
    postalCode: '31198',
  },
  areaServed: '대한민국',
  serviceType: ['산재 최초 청구', '유족급여·장례비 청구', '장해급여 청구', '산재 불승인 심사청구·재심사청구', '직업성 암·소음성 난청·근골격계 질환·뇌심혈관 질환 산재'],
  founder: personBase,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="a17e7bad81b3759a97659358bf2141075f051a19" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <div className="topbar">
          <div className="wrap">
            <span>
              산재 상담 <b>{site.tel}</b>
            </span>
            <span>평일 09:00–18:00</span>
            <span>
              <a href={site.firmUrl}>노무법인 전승 홈페이지 ↗</a>
            </span>
          </div>
        </div>

        <header className="nav">
          <div className="wrap">
            <Link className="logo" href="/" aria-label={site.name}>
              <span className="firm">노무법인 전승</span>
              <span className="dot">·</span>
              <span className="center">산재보상전문센터</span>
            </Link>
            <nav className="menu" aria-label="주 메뉴">
              <div className="dd">
                <Link href="/guide/">{menus[0].label}</Link>
                <div className="sub">
                  <span className="cap">{menus[0].sub}</span>
                  <Link href="/guide/#am-i">저도 산재인가요</Link>
                  <Link href="/guide/#first">무엇부터 하나요</Link>
                  <Link href="/guide/#benefits">어떤 급여가 있나요</Link>
                  <Link href="/guide/#how-much">얼마나 받나요</Link>
                  <Link href="/guide/#deadline">기한은 언제까지</Link>
                  <Link href="/guide/#alone">혼자 해도 되나요</Link>
                  <Link href="/guide/#faq">자주 묻는 질문</Link>
                </div>
              </div>
              <div className="dd">
                <Link href="/topics/">{menus[1].label}</Link>
                <div className="sub">
                  <span className="cap">{menus[1].sub}</span>
                  {diseaseTopics.map((t) => (
                    <Link key={t.id} href={`/topics/${t.id}/`}>
                      {t.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="dd">
                <Link href="/jobs/">{menus[2].label}</Link>
                <div className="sub">
                  <span className="cap">{menus[2].sub}</span>
                  {jobs.map((j) => (
                    <Link key={j.id} href={`/jobs/${j.id}/`}>
                      {j.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="dd">
                <Link href="/cases/">{menus[3].label}</Link>
                <div className="sub">
                  <span className="cap">{menus[3].sub}</span>
                  <Link href="/cases/#ours">전승 승인사례</Link>
                  <Link href="/cases/#public">공단·법원 주요 사례</Link>
                </div>
              </div>
              <Link href="/family/">{menus[4].label}</Link>
            </nav>
            <Link className="btn-nav" href="/contact/">
              산재 상담 안내
            </Link>
          </div>
        </header>
        <div className="mstrip" aria-label="메뉴">
          <div className="wrap">
            {menus.map((m) => (
              <Link key={m.href} href={m.href}>
                {m.label}
              </Link>
            ))}
          </div>
        </div>

        {children}

        <footer className="foot">
          <div className="wrap">
            <div className="foot-top">
              <div>
                <div className="foot-name">{site.name}</div>
                <p className="foot-desc">
                  {site.tagline} 산재보상전문센터는 재해자와 유족의 산재 최초 청구, 장해급여·유족급여 청구, 불승인
                  대응을 맡습니다. 글은 국가법령정보센터 현행 법령과 고용노동부·근로복지공단 공식 자료 원문을
                  대조해 씁니다.
                </p>
              </div>
              <ul className="foot-links">
                <li>
                  <a href={site.firmUrl}>노무법인 전승 ↗</a>
                </li>
                <li>
                  <a href={`${site.firmUrl}/members/`}>전지나 노무사 프로필 ↗</a>
                </li>
                <li>
                  <a href={site.blogUrl}>전지나 노무사 블로그 ↗</a>
                </li>
                <li>
                  <a href={site.kakao} target="_blank" rel="noopener">
                    카카오톡 상담 ↗
                  </a>
                </li>
              </ul>
            </div>
            <div className="foot-topics">
              {diseaseTopics.map((t) => (
                <Link key={t.id} href={`/topics/${t.id}/`}>
                  {t.label}
                </Link>
              ))}
            </div>
            <div className="foot-bottom">
              <span>
                {site.firm} · 천안 본사 {site.address} · 대표 전지나 · 사업자등록번호 657-88-02118
              </span>
              <span>
                상담 {site.tel} · © {site.firm}
              </span>
            </div>
          </div>
        </footer>

        <div className="fixbar" aria-label="빠른 상담">
          <a className="tel" href={`tel:${site.tel}`}>
            📞 전화
          </a>
          <a href={site.kakao} target="_blank" rel="noopener">
            💬 카카오톡
          </a>
          <Link href="/contact/">상담 신청</Link>
        </div>
      </body>
    </html>
  );
}
