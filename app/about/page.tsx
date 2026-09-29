import type { Metadata } from 'next';
import Link from 'next/link';
import { site, menus } from '@/lib/posts';

export const metadata: Metadata = {
  title: '센터 소개',
  description:
    '노무법인 전승 산재보상전문센터는 재해자와 유족의 산재 최초 청구, 장해급여·유족급여 청구, 불승인 대응을 맡습니다. 전지나 대표 공인노무사가 직접 검토합니다.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 센터 소개
          </div>
          <h1>{site.name}</h1>
          <p className="sub">일하다 생긴 병인지, 먼저 확인해 드립니다.</p>
        </div>
      </div>
      <section className="sec">
        <div className="post-wrap">
          <article className="post-body">
            <p>{site.tagline} 산재보상전문센터는 그중 재해자와 유족의 보상 절차를 맡는 곳입니다.</p>
            <h2>이 사이트의 구성</h2>
            <ul>
              {menus.map((m) => (
                <li key={m.href}>
                  <Link href={m.href}>{m.label}</Link> — {m.sub}
                </li>
              ))}
            </ul>
            <h2>글을 쓰는 방식</h2>
            <p>
              이 사이트의 글은 국가법령정보센터의 현행 법령과 고용노동부·근로복지공단의 공식 자료 원문을 대조해
              씁니다. 조문 번호와 금액, 기한, 판례 번호는 원문을 확인하지 않고 쓰지 않습니다. 법률상 의무와 매뉴얼
              권고, 실무 제안은 문장에서 구분합니다. 승인 사례는 회사명과 개인을 특정하지 않고, 성공률·보장 같은
              표현은 쓰지 않습니다.
            </p>
            <h2>전지나 대표 공인노무사</h2>
            <ul>
              <li>노무법인 전승 대표</li>
              <li>산업안전·중대재해 | 산재보상 | 직장 내 괴롭힘 조사</li>
              <li>충청남도 갑질·괴롭힘 예방 안심노무사 · 충청남도의회 갑질 상담 조사관</li>
              <li>충청남도 충청소방학교 소방공무원 고충심사위원회 민간위원</li>
              <li>
                <a href={`${site.firmUrl}/members/`}>프로필·이력 보기 ↗</a>
              </li>
            </ul>
            <h2>노무법인 전승</h2>
            <p>
              천안 본사와 서울·경기 지사를 둔 노무법인 전문가 그룹으로, 산업안전보건공단 안전보건관리체계 구축
              컨설팅을 4년 연속 수행(A등급)했습니다. 산재보상 외의 업무는{' '}
              <a href={site.firmUrl}>노무법인 전승 홈페이지</a>에서 안내합니다.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
