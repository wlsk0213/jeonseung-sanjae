import './layout-preview.css';

export default function LayoutPreview() {
  return (
    <main className="lp">
      <div className="lphead">
        <h1>산재보상 전문센터 — 구조 3개 안</h1>
        <p>
          색은 1안(딥 틸 #12554E + 아이보리 #F7F4ED + 앰버 #C8873C)으로 통일했습니다. 세 안은 <b>첫 화면에서 무엇을
          먼저 묻는가</b>로 갈립니다. 워드프레스로 만들 예정이며, 어느 안이든 글 페이지 형식은 같습니다.
        </p>
        <div className="basis">
          <b>실측 근거</b> — 박실로 노무사 산재 블로그(글 191편)는 상병별 평면 메뉴에 상담 폼·계산기가 없고,
          대신 AI 크롤러 허용과 직접 작성한 llms.txt로 인용을 가져갑니다. 반대로 대형 법인 3곳(이산·더보상·도원)은
          상병 8종 분류 + 실적 카운터 + 승인사례 + 계산기·자가진단으로 상담 전환을 노립니다. 조사한 7곳 가운데
          <b> FAQ 구조화 데이터를 넣은 산재 사이트는 한 곳도 없었습니다.</b> 절차·기한 정리와 유족 전용 동선,
          고령자 접근성도 비어 있습니다.
        </div>
      </div>

      {/* ── A안 ───────────────────────── */}
      <section className="lpsec">
        <div className="lptitle">
          <b>A안 · 상병 중심형</b>
          <span>“어떤 병으로 오셨나요?” — 병명으로 들어가 글로 설득</span>
        </div>
        <div className="lpmeta">
          <div><b>강점</b>검색·AI 인용에 가장 강함. 글이 쌓일수록 힘이 붙음. 박실로 노무사와 같은 전략이되 FAQ 스키마로 앞섬</div>
          <div><b>약점</b>글이 적은 초기에는 빈 방처럼 보임. 상담 전환은 세 안 중 가장 느림</div>
          <div><b>맞는 경우</b>주 2~3편씩 꾸준히 발행할 수 있을 때</div>
        </div>

        <div className="mock">
          <div className="mnav">
            <span className="mlogo">전승 산재보상<em>전문센터</em></span>
            <span className="mmenu">
              <span>상병별 안내 <i>▾</i></span><span>산재 절차</span><span>승인사례</span><span>전체 글</span><span>센터 소개</span>
            </span>
            <span className="mcall">041-417-1915</span>
          </div>
          <div className="mhero">
            <h2>어떤 병으로 오셨나요?</h2>
            <p>병명을 고르시면 인정기준과 준비할 자료부터 보여 드립니다. 전지나 공인노무사가 직접 검토합니다.</p>
            <div className="mpick">
              <span>소음성 난청</span><span>근골격계</span><span>뇌심혈관·과로</span><span>직업성 암·폐질환</span>
              <span>정신질환</span><span>업무상 사고</span><span>장해등급</span><span>불승인 대응</span>
            </div>
          </div>
          <div className="mbody">
            <h3>최근 글</h3>
            <div className="mrow3">
              <div className="mcard"><b>소음성 난청, 퇴직 후에도 되나요</b><span>시효·과거 진단·등급표</span></div>
              <div className="mcard"><b>근골격계, 반복작업 입증 자료</b><span>작업동작·근무이력 정리법</span></div>
              <div className="mcard"><b>불승인 통지 후 90일</b><span>심사청구·재심사청구 기한</span></div>
            </div>
            <h3 style={{ marginTop: 24 }}>글 한 편은 이렇게 생깁니다</h3>
            <div className="mpost">
              <div className="toc"><b>이 글의 순서</b>1. 시효 · 2. 나이와 인정 · 3. 인정기준 · 4. 증명 자료 · 5. 등급 · 6. 신청 순서</div>
              <h4>퇴직하고 시간이 지나도 신청할 수 있나요?</h4>
              <p>퇴직했다는 사실만으로 신청 길이 막히지는 않습니다. 장해급여를 받을 권리는 5년 동안…</p>
              <div className="mfaq"><div>보청기를 끼면 잘 들리는데도 청구할 수 있나요?</div><div>한쪽 귀만 나빠도 인정받을 수 있나요?</div></div>
            </div>
          </div>
          <div className="mbar"><span>📞 전화 상담</span><span>💬 카카오톡</span></div>
        </div>

        <div className="lpfeat">
          <div><b>메뉴</b> 상병별 안내(8) · 산재 절차 · 승인사례 · 전체 글 · 센터 소개 · 상담</div>
          <div><b>핵심 기능</b> 상병 랜딩 8종, 글 목차, FAQ 아코디언(스키마 자동), 근거 조문 목록</div>
          <div><b>전환 장치</b> 모바일 하단 고정바, 글 끝 상담 박스</div>
          <div><b>만드는 데</b> 가장 빠름 — 테마 설정 + 글 형식만 잡으면 시작</div>
        </div>
      </section>

      {/* ── B안 ───────────────────────── */}
      <section className="lpsec">
        <div className="lptitle">
          <b>B안 · 상황 중심형 (추천)</b>
          <span>“지금 어느 단계인가요?” — 기한을 먼저 알려 주고 움직이게 함</span>
        </div>
        <div className="lpmeta">
          <div><b>강점</b>재해자가 자기 상황을 바로 찾음. 기한 경고로 상담이 빨라짐. 유족 전용 길이 있는 곳은 거의 없음</div>
          <div><b>약점</b>상병별 검색 유입은 A안보다 한 단계 뒤. 상병 페이지를 2층에 둬야 함</div>
          <div><b>맞는 경우</b>글과 상담을 함께 가져가려는 지금 상황</div>
        </div>

        <div className="mock">
          <div className="mnav">
            <span className="mlogo">전승 산재보상<em>전문센터</em></span>
            <span className="mmenu">
              <span>내 상황 <i>▾</i></span><span>상병별 안내 <i>▾</i></span><span>보상금·기한</span><span>승인사례</span><span>전체 글</span>
            </span>
            <span className="mcall">041-417-1915</span>
          </div>
          <div className="mhero">
            <h2>지금 <b>어느 단계</b>이신가요?</h2>
            <p>단계마다 남은 기한과 해야 할 일이 다릅니다. 해당하는 곳을 눌러 주세요.</p>
            <div className="mrow3" style={{ marginTop: 18 }}>
              <div className="mcard big"><b>아직 신청 전</b><span>어떤 급여를 청구할지, 무슨 자료부터 모을지</span></div>
              <div className="mcard big"><b>신청했고 조사 중</b><span>재해조사·특별진찰·질병판정위 대응</span></div>
              <div className="mcard big"><b>불승인 받았다</b><span>90일 안에 심사청구, 무엇을 보강할지</span></div>
            </div>
            <div className="mbtns">
              <span className="mbtn">가족을 잃으셨다면 (유족급여)</span>
              <span className="mbtn g">사업주이신가요</span>
            </div>
          </div>
          <div className="mbody">
            <div className="mwarn">
              <b>기한을 먼저 확인하세요</b>
              요양·휴업급여는 3년, 장해·유족급여는 5년. 불승인에 대한 심사청구는 통지받은 날부터 90일입니다.
            </div>
            <h3 style={{ marginTop: 22 }}>내 상황 확인 7문항</h3>
            <p>진단명·근무 이력·통지서 유무를 고르면 지금 해야 할 일과 남은 기한을 알려 드립니다.</p>
            <div className="mrow2">
              <div className="mcard"><b>① 어떤 상병인가요</b><span>난청·근골격계·뇌심혈관·직업성 암·정신질환·사고</span></div>
              <div className="mcard"><b>② 언제 진단받으셨나요</b><span>기한 계산의 출발점</span></div>
            </div>
            <h3 style={{ marginTop: 22 }}>상병별로 보기</h3>
            <div className="mrow3">
              <div className="mcard"><b>소음성 난청</b><span>퇴직 후 장해급여</span></div>
              <div className="mcard"><b>근골격계 질환</b><span>반복작업 입증</span></div>
              <div className="mcard"><b>뇌심혈관·과로</b><span>업무시간과 가중요인</span></div>
            </div>
          </div>
          <div className="mbar"><span>📞 전화 상담</span><span>💬 카카오톡</span><span>📝 상담 신청</span></div>
        </div>

        <div className="lpfeat">
          <div><b>메뉴</b> 내 상황(신청 전·조사 중·불승인·유족·사업주) · 상병별 안내(8) · 보상금·기한 · 승인사례 · 전체 글</div>
          <div><b>핵심 기능</b> 상황별 랜딩 5종, 기한 안내 박스, 자가 확인 7문항, 상병 랜딩 8종</div>
          <div><b>전환 장치</b> 하단 고정바 3종(전화·카톡·폼), 상황 페이지마다 짧은 상담 폼</div>
          <div><b>만드는 데</b> 중간 — 상황 페이지 5개를 먼저 써야 함</div>
        </div>
      </section>

      {/* ── C안 ───────────────────────── */}
      <section className="lpsec">
        <div className="lptitle">
          <b>C안 · 상담·사례 중심형</b>
          <span>“누가, 어떻게 해 줬나” — 사람과 결과를 앞세움</span>
        </div>
        <div className="lpmeta">
          <div><b>강점</b>상담 전환이 가장 빠름. 대표님 얼굴·이력·위촉 실적을 정면에 씀</div>
          <div><b>약점</b>승인사례를 꾸준히 채워야 함. 광고규정(성공률·보장 표현 금지) 관리 부담. 검색 유입은 가장 약함</div>
          <div><b>맞는 경우</b>이미 사례가 쌓여 있고 광고·지역 검색으로 밀어붙일 때</div>
        </div>

        <div className="mock">
          <div className="mnav">
            <span className="mlogo">전승 산재보상<em>전문센터</em></span>
            <span className="mmenu">
              <span>상담 안내</span><span>승인사례</span><span>상병별 안내 <i>▾</i></span><span>자료실</span><span>센터 소개</span>
            </span>
            <span className="mcall">041-417-1915</span>
          </div>
          <div className="mhero">
            <div className="mrow2" style={{ alignItems: 'start' }}>
              <div>
                <h2>산재는 <b>혼자 준비하면</b> 어렵습니다</h2>
                <p>
                  노무법인 전승 대표 전지나 공인노무사가 첫 상담부터 결정까지 직접 검토합니다. 충청남도 갑질 예방
                  안심노무사 · 산업안전보건공단 컨설팅 4년 연속 수행(A등급).
                </p>
                <div className="mbtns">
                  <span className="mbtn">041-417-1915</span>
                  <span className="mbtn g">카카오톡 상담</span>
                </div>
              </div>
              <div className="mform">
                <b>상담 신청 (1분)</b>
                <div className="mfield">성함</div>
                <div className="mfield">연락처</div>
                <div className="mfield">상병 / 지금 상황</div>
                <div className="msubmit">상담 요청하기</div>
              </div>
            </div>
          </div>
          <div className="mbody">
            <h3>이렇게 진행됩니다</h3>
            <div className="mstep"><i>1</i> 전화·카톡으로 상황을 말씀해 주세요</div>
            <div className="mstep"><i>2</i> 자료를 보고 인정 가능성과 준비물을 알려 드립니다</div>
            <div className="mstep"><i>3</i> 청구서 작성부터 결정까지 함께 진행합니다</div>
            <h3 style={{ marginTop: 22 }}>승인 사례</h3>
            <div className="mrow3">
              <div className="mcase"><em>소음성 난청</em><b>제조업 30년 근무, 퇴직 8년 뒤 장해급여 승인</b><span>과거 진단 기록으로 시효 쟁점 정리</span></div>
              <div className="mcase"><em>근골격계</em><b>요양보호사 어깨 회전근개 파열 인정</b><span>작업동작 분석과 동료 확인서</span></div>
              <div className="mcase"><em>불승인 대응</em><b>심사청구로 뒤집은 과로 사건</b><span>근무기록 재정리·의학 소견 보강</span></div>
            </div>
          </div>
          <div className="mbar"><span>📞 전화 상담</span><span>💬 카카오톡</span><span>📝 상담 신청</span></div>
        </div>

        <div className="lpfeat">
          <div><b>메뉴</b> 상담 안내 · 승인사례 · 상병별 안내(8) · 자료실 · 센터 소개 · 전체 글</div>
          <div><b>핵심 기능</b> 첫 화면 상담 폼, 승인사례 고정 형식(상병·쟁점·결과), 상담 절차 3단계, 자료실</div>
          <div><b>전환 장치</b> 모든 페이지 폼, 하단 고정바, 사례 끝 상담 유도</div>
          <div><b>만드는 데</b> 가장 오래 — 사례 원고와 광고규정 검토가 선행</div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>세 안 공통</b><span>어느 것을 고르셔도 이건 넣습니다</span></div>
        <div className="lpfeat">
          <div><b>글 형식</b> 목차 → 핵심 요약 → 질문형 소제목 → 표 → FAQ → 근거 조문 → 글쓴이 → 면책</div>
          <div><b>AI 대응</b> FAQ·Article 구조화 데이터, 손으로 쓴 llms.txt, AI 크롤러 개별 허용, IndexNow</div>
          <div><b>고령자 배려</b> 본문 17px·줄간격 1.9, 확대 허용, 큰 전화 버튼, 대비 강화</div>
          <div><b>개인 블로그와 분리</b> 산재 단일 주제, 글 재게시 금지, 카테고리 이름 겹치지 않게, llms.txt에 역할 구분 명시</div>
          <div><b>테마</b> GeneratePress(무료) + 자식 테마 — 벤치마크와 같고 가벼움</div>
          <div><b>플러그인</b> Rank Math · Fluent Forms Lite · FAQ 블록 · CPT UI+ACF(사례) · IndexNow · 접근성</div>
        </div>
      </section>
    </main>
  );
}
