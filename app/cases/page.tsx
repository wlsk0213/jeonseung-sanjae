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

            <h3>소음성 난청</h3>
            <table>
              <thead>
                <tr>
                  <th>기관·사건</th>
                  <th>어떤 사건이었나</th>
                  <th>결론과 시사점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    서울행정법원 2018. 9. 19. 선고 2018구단58816 판결(확정)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?precSeq=205660" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>약 7년간 광산에서 굴진·채탄·착암·발파 작업, 퇴사 후 약 24년 6개월 뒤 만 73세에 소음성 난청 진단</td>
                  <td>나이만으로 노화 때문이라고 단정할 수 없고, 소음 때문에 청력이 자연스러운 속도 이상으로 나빠졌다고 보아 공단의 부지급 처분 취소. 퇴직 후 오래 지나도, 고령이어도 인정될 수 있다는 사례</td>
                </tr>
                <tr>
                  <td>
                    서울고등법원 2024누30023 판결(선고일 원문 미기재)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?mode=0&precSeq=611691" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>6년 5개월간 광업소에서 선탄 작업 등, 광업소를 떠난 지 30년이 지나 78세에 진단</td>
                  <td>소음성 난청은 뒤늦게 발견되는 경향이 있어 오랜 공백만으로 부정할 수 없고, 소음으로 노인성 난청이 더 빨리 진행됐다고 보아 부지급 처분 취소</td>
                </tr>
                <tr>
                  <td>
                    서울고등법원 2017누31271 판결(선고일 원문 미기재)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?precSeq=402060&mode=0" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>오래전 장애인 등록을 위해 받은 진단서에 회복 불가 소견이 있었고, 그 검사 수치가 최근 검사와 크게 다르지 않았던 사건</td>
                  <td>공단의 항소 기각(근로자 승). 장해급여 소멸시효는 [더는 치료의 효과를 기대할 수 없다는 확진을 받은 때]부터 계산하되, 이 사건에서는 공단의 반려 실무 때문에 청구권을 행사할 수 없었던 사정이 있어 공단의 시효 주장을 권리남용으로 보았음. 예전 확진이 있으면 새 진단서를 받아도 5년이 다시 시작되지 않을 수 있다는 점도 보여 주는 사례</td>
                </tr>
                <tr>
                  <td>
                    서울행정법원 2022구단59861 판결(선고일 원문 미기재)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?mode=0&precSeq=415706" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>양쪽 귀의 청력 차이가 크고, 소음 노출이 끝난 지 오래 지나 검사한 사건</td>
                  <td>노인성 난청에 더 가깝다고 보아 청구 기각. 오래 일했거나 나이가 많다는 사정만으로 결론이 나지 않고, 작업 이력·과거 검사·다른 귀 질환·의학 소견을 함께 본다는 점을 보여 주는 사례. 이 판결은 업무상 질병 인정기준을 예시 규정으로 본 대법원 2014. 6. 12. 선고 2012두24214 판결을 인용</td>
                </tr>
              </tbody>
            </table>

            <h3>직업성 암·첨단산업 질환</h3>
            <table>
              <thead>
                <tr>
                  <th>기관·사건</th>
                  <th>어떤 사건이었나</th>
                  <th>결론과 시사점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    대법원 2017. 8. 29. 선고 2015두3867 판결(파기환송)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?precSeq=185582" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>LCD 공장 근로자의 다발성경화증. 사업주 비협조와 영업비밀로 유해요소의 종류와 노출 정도를 특정하기 어려웠던 사건</td>
                  <td>첨단산업 현장에서 새로 나타나는 질환은 인과관계를 밝히기 어렵다는 이유만으로 부정할 수 없고, 유해요소를 특정하지 못한 사정은 근로자에게 유리한 간접사실로 볼 수 있으며, 여러 유해요인의 복합 작용도 살펴야 한다고 판단. 암 사건은 아니지만 직업성 암 사건에서도 같은 판단 방식이 원용되기도 함</td>
                </tr>
                <tr>
                  <td>
                    서울행정법원 2020. 9. 11. 선고 2017구합84082 판결(확정)
                    <br />
                    <a href="https://www.law.go.kr/LSW/precInfoP.do?precSeq=230331" target="_blank" rel="noopener">원문</a>
                  </td>
                  <td>반도체·LCD 설비 관련 업무에 종사한 근로자의 폐암 사망</td>
                  <td>구체적인 직업력과 작업환경, 여러 물질의 복합 노출 등 여러 사정을 종합해 업무관련성 인정. 같은 직종이면 자동으로 인정된다는 뜻이 아니라 개별 작업 이력이 그만큼 중요하다는 사례</td>
                </tr>
              </tbody>
            </table>

            <p>
              상병별 인정기준과 함께 읽으시려면{' '}
              <a href={`${site.firmUrl}/insights/jikeopseong-am-sanjae-injeong-gijun/`}>직업성 암 산재 인정기준</a>,{' '}
              <a href={`${site.firmUrl}/insights/noesimhyeolgwan-sanjae-geunrosigan/`}>뇌출혈·심근경색 산재와 근로시간</a>,{' '}
              <a href={`${site.firmUrl}/insights/sanjae-bulseungin-90il/`}>산재 불승인 통지 뒤 90일</a>을 참고하십시오.
              과로성 질병과 유족급여 사례는 검토를 마치는 대로 추가합니다.
            </p>
          </article>
          <p className="post-note">
            사례는 일반적인 정보 제공을 목적으로 하며, 비슷한 사건이라도 개별 사실관계에 따라 결과는 달라집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
