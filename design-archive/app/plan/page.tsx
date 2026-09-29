import '../layout-preview/layout-preview.css';

export default function PlanPage() {
  return (
    <main className="lp">
      <div className="lphead">
        <h1>산재보상 전문센터 — 수정안</h1>
        <p>
          대표님 의견을 반영했습니다. 들어오는 사람은 절차 단계가 아니라 <b>“내 병(또는 가족의 사망)이 산재가
          되는가”</b>를 묻습니다. 그래서 상병을 앞세우고, 그 답을 <b>기본정보·절차 + 승인사례 + 공단·법원 판단</b>
          세 축으로 받칩니다. 색은 딥 틸(#12554E), 워드프레스로 만듭니다.
        </p>
        <div className="basis">
          <b>바뀐 점</b> — ① 첫 화면 질문을 “어느 단계인가요”에서 <b>“이 병도 산재가 되나요”</b>로 바꿨습니다.
          ② 과로사·사고사 <b>유족 전용 입구</b>를 첫 화면에 따로 뒀습니다(유족은 본인이 아니라 가족이 검색합니다).
          ③ 사례를 <b>두 종류</b>로 나눴습니다 — 전승 승인사례, 그리고 공단 재결례·법원 판결. 조사한 7곳 중 공개
          판례를 정리해 쌓는 곳은 없었습니다. AI가 인용하기 가장 좋은 형태입니다.
        </div>
      </div>

      <section className="lpsec">
        <div className="lptitle">
          <b>첫 화면</b>
          <span>병명으로 들어오고, 유족은 따로 받는다</span>
        </div>
        <div className="mock">
          <div className="mnav">
            <span className="mlogo">전승 산재보상<em>전문센터</em></span>
            <span className="mmenu">
              <span>상병별 안내 <i>▾</i></span><span>산재 기본정보 <i>▾</i></span><span>사례 <i>▾</i></span><span>전체 글</span><span>센터 소개</span>
            </span>
            <span className="mcall">041-417-1915</span>
          </div>

          <div className="mhero">
            <h2>이 병도 <b>산재가 되나요?</b></h2>
            <p>
              병명을 고르시면 인정기준, 준비할 자료, 실제 인정된 사례를 함께 보여 드립니다.
              노무법인 전승 전지나 공인노무사가 직접 검토합니다.
            </p>
            <div className="mpick">
              <span>뇌출혈·심근경색<br />(과로)</span>
              <span>소음성 난청</span>
              <span>근골격계 질환</span>
              <span>직업성 암·폐질환</span>
              <span>정신질환·자살</span>
              <span>업무상 사고</span>
              <span>출퇴근 재해</span>
              <span>그 밖의 질병</span>
            </div>
            <div className="mbtns">
              <span className="mbtn">가족이 일하다 돌아가셨다면 — 유족급여 안내</span>
              <span className="mbtn g">불승인 통지를 받으셨다면</span>
            </div>
          </div>

          <div className="mbody">
            <h3>산재 기본정보</h3>
            <p>처음 찾아오신 분이 먼저 읽는 곳입니다.</p>
            <div className="mrow3">
              <div className="mcard"><b>산재란 무엇인가</b><span>업무상 사고와 업무상 질병, 인정의 기본 구조</span></div>
              <div className="mcard"><b>어떤 급여가 있나</b><span>요양·휴업·장해·유족급여와 간병·직업재활</span></div>
              <div className="mcard"><b>신청은 어떻게 하나</b><span>청구서, 증빙, 공단 조사와 판정 절차</span></div>
              <div className="mcard"><b>기한은 언제까지</b><span>급여별 소멸시효와 불승인 후 90일</span></div>
              <div className="mcard"><b>얼마를 받나</b><span>평균임금 산정과 급여별 계산 구조</span></div>
              <div className="mcard"><b>불승인되면</b><span>심사청구·재심사청구·행정소송</span></div>
            </div>

            <h3 style={{ marginTop: 26 }}>전승 승인사례</h3>
            <p>사실 그대로 적습니다. 회사명과 개인을 특정하지 않고, 성공률·보장 같은 표현은 쓰지 않습니다.</p>
            <div className="mrow3">
              <div className="mcase"><em>뇌심혈관·과로</em><b>주 평균 58시간, 야간 교대 근무자 뇌출혈 인정</b><span>쟁점: 52시간 이하 구간의 가중요인 / 자료: 근무표·출입기록</span></div>
              <div className="mcase"><em>소음성 난청</em><b>제조업 30년 근무, 퇴직 8년 뒤 장해급여 승인</b><span>쟁점: 소멸시효 기산점 / 자료: 과거 진단서·특수건강진단</span></div>
              <div className="mcase"><em>불승인 대응</em><b>심사청구로 뒤집은 요양 불승인</b><span>쟁점: 기존 질환 기여도 / 자료: 의학 소견 보강</span></div>
            </div>

            <h3 style={{ marginTop: 26 }}>공단·법원 주요 사례</h3>
            <p>근로복지공단 재결례와 법원 판결을 사건번호와 함께 정리합니다. 우리 사건이 아니어도 기준이 됩니다.</p>
            <div className="mrow2">
              <div className="mcase">
                <em>법원 판결</em>
                <b>서울행정법원 2018구단58816 — 퇴사 24년 뒤 난청, 나이만으로 부정할 수 없다</b>
                <span>쟁점: 노인성 난청과의 구분 · 결론: 부지급 처분 취소 · 시사점: 소음 노출 이력의 구체성</span>
              </div>
              <div className="mcase">
                <em>공단 발표</em>
                <b>소음성 난청 청력검사 특진 의료기관 확대(2026. 7. 1.)</b>
                <span>내용: 전국 83개 병·의원 추가 지정 · 시사점: 검사 접근성과 처리 기간</span>
              </div>
            </div>

            <div className="mwarn" style={{ marginTop: 22 }}>
              <b>유족이 찾아오는 길을 따로 둡니다</b>
              과로사·사고사는 본인이 아니라 배우자·자녀가 검색합니다. 유족급여·장의비, 사망 진단서와 근무기록을
              어떻게 모으는지, 회사가 협조하지 않을 때 무엇을 할 수 있는지를 한 페이지에 모읍니다.
            </div>
          </div>
          <div className="mbar"><span>📞 전화 상담</span><span>💬 카카오톡</span><span>📝 상담 신청</span></div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>메뉴 구조</b><span>2층까지만. 드롭다운은 상병·기본정보·사례 세 곳</span></div>
        <div className="lpfeat">
          <div><b>상병별 안내</b> 뇌심혈관·과로 / 소음성 난청 / 근골격계 / 직업성 암·폐질환 / 정신질환·자살 / 업무상 사고 / 출퇴근 재해 / 그 밖의 질병</div>
          <div><b>산재 기본정보</b> 산재란 / 급여 종류 / 신청 절차 / 기한 / 보상금 계산 / 불승인 대응 / 유족급여</div>
          <div><b>사례</b> 전승 승인사례 / 공단·법원 주요 사례</div>
          <div><b>그 밖에</b> 전체 글 · 센터 소개 · 상담 문의</div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>사례를 다루는 방식</b><span>두 종류를 형식부터 다르게 가져갑니다</span></div>
        <div className="lpmeta">
          <div><b>전승 승인사례</b>상병 · 근무 이력 요약 · 쟁점 · 준비한 자료 · 결과 · 걸린 기간. 회사명·개인 특정 금지, 성공률·보장·최대 같은 표현 금지</div>
          <div><b>공단·법원 사례</b>사건번호 · 선고일 · 쟁점 · 결론 · 우리 사건에 주는 시사점 · 원문 링크. 사건번호와 결론은 원문 확인 없이 올리지 않음</div>
          <div><b>왜 나누나</b>승인사례는 신뢰를, 공단·법원 사례는 검색과 AI 인용을 가져옵니다. 판례를 정리해 쌓는 산재 사이트가 조사 범위에 없었습니다</div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>워드프레스 구현</b><span>글 종류를 셋으로 나눠 관리합니다</span></div>
        <div className="lpfeat">
          <div><b>글(칼럼)</b> 기본 글. 상병 카테고리로 분류</div>
          <div><b>승인사례</b> 별도 글 종류(CPT) — 상병·쟁점·결과를 항목으로 입력</div>
          <div><b>공단·법원 사례</b> 별도 글 종류 — 사건번호·선고일·기관을 항목으로 입력, 검색·필터 가능</div>
          <div><b>고정 페이지</b> 상병별 안내 8, 산재 기본정보 7, 센터 소개, 상담</div>
          <div><b>테마</b> GeneratePress 무료 + 자식 테마 · <b>플러그인</b> Rank Math, 상담폼, FAQ 블록, CPT UI+ACF, IndexNow</div>
          <div><b>AI 대응</b> FAQ·Article 구조화 데이터, 손으로 쓴 llms.txt, AI 크롤러 허용, 사건번호 검색 대응</div>
        </div>
      </section>
    </main>
  );
}
