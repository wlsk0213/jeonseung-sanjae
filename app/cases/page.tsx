import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/posts';

export const metadata: Metadata = {
  title: '사례가 궁금하신가요? — 산재 보상 승인 사례',
  description:
    '노무법인 전승이 진행한 산재 승인 사례와 근로복지공단·법원의 주요 사례를 상병·쟁점·준비 자료·결과 기준으로 정리합니다. 회사명과 개인은 특정하지 않습니다.',
  alternates: { canonical: '/cases/' },
};

export default function CasesPage() {
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 사례가 궁금하신가요?
          </div>
          <h1>사례가 궁금하신가요?</h1>
          <p className="sub">
            비슷한 병, 비슷한 일을 한 사람이 어떻게 인정받았는지가 가장 궁금하실 겁니다. 두 종류의 사례를 씁니다.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="post-wrap">
          <article className="post-body">
            <h2 id="ours">전승 승인사례</h2>
            <p>
              노무법인 전승이 진행한 사건을 상병·직종·근무 이력 요약·쟁점·준비 자료·결과·걸린 기간의 순서로
              적습니다. 제목은 [기계 소리에 묻혀 산 30년, 퇴직 8년 뒤 받은 장해급여]처럼 그 사람의 일과 이야기가
              드러나게 붙입니다.
            </p>
            <p>
              지키는 선이 있습니다. 회사명과 개인이 특정될 수 있는 정보는 적지 않습니다. 성공률·보장·최대 같은
              표현은 쓰지 않습니다. 사례마다 결과와 함께 [왜 인정됐는지]와 [무엇이 없었으면 어려웠을지]를 같이
              적어, 읽는 분이 자기 사건에 무엇을 준비해야 하는지 알 수 있게 합니다.
            </p>
            <p>
              <em>첫 사례를 준비하고 있습니다.</em> 사례가 올라오면 이 자리에 상병별로 정리됩니다.
            </p>

            <h2 id="public">공단·법원 주요 사례</h2>
            <p>
              근로복지공단의 결정례와 산업재해보상보험재심사위원회 재결, 법원 판결 가운데 실무에 참고가 되는
              것을 기관·사건번호·선고일·쟁점·결론·시사점·원문 링크의 순서로 정리합니다. 우리 사건이 아니어도
              올립니다. 사건번호와 결론은 원문을 확인하지 않고는 올리지 않습니다.
            </p>
            <p>
              공개된 사례를 꾸준히 정리해 두는 산재 사이트가 드물어서, 이 자리는 시간이 갈수록 가치가 커지는
              자료가 될 것입니다. 현재는 홈페이지 인사이트의 글 안에서 판례를 다루고 있습니다.
            </p>
            <ul>
              <li>
                <a href={`${site.firmUrl}/insights/jikeopseong-am-sanjae-injeong-gijun/`}>
                  직업성 암 산재 인정기준 — 대법원 2015두3867, 서울행정법원 2017구합84082
                </a>
              </li>
              <li>
                <a href={`${site.firmUrl}/insights/noesimhyeolgwan-sanjae-geunrosigan/`}>
                  뇌출혈·심근경색 산재, 주 60시간 미만이면 인정받기 어렵나요?
                </a>
              </li>
              <li>
                <a href={`${site.firmUrl}/insights/sanjae-bulseungin-90il/`}>산재 불승인 통지를 받았다면 — 90일 안에 해야 할 일</a>
              </li>
            </ul>
          </article>
          <p className="post-note">
            사례는 일반적인 정보 제공을 목적으로 하며, 비슷한 사건이라도 개별 사실관계에 따라 결과는 달라집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
