import '../layout-preview/layout-preview.css';

const heroes = [
  {
    id: 'a',
    label: '문구 A (추천)',
    h: ['일하다 생긴 병인지,', '<b>먼저 확인해 드립니다</b>'],
    p: '산재인지 아닌지부터 판단이 갈립니다. 병명과 하신 일을 알려 주시면 인정 가능성과 준비할 자료를 짚어 드립니다.',
    why: '“되나요?”라는 질문을 그대로 받되, 답을 주는 쪽으로 돌려놓았습니다. 과로사 유족에게도 어색하지 않습니다.',
  },
  {
    id: 'b',
    label: '문구 B',
    h: ['30년을 일한 몸이', '<b>보내는 신호입니다</b>'],
    p: '어깨와 허리, 귀, 심장. 오래 일한 사람에게 찾아오는 병에는 이유가 있습니다. 산재로 인정받는 길을 찾습니다.',
    why: '감정에 먼저 닿습니다. 근골격계·난청 같은 누적 질환에 특히 맞지만, 사고성 재해와 유족에게는 덜 맞습니다.',
  },
  {
    id: 'c',
    label: '문구 C',
    h: ['산재는 아는 만큼', '<b>인정받습니다</b>'],
    p: '같은 병이라도 무엇을 어떻게 증명하느냐에 따라 결과가 달라집니다. 기준과 사례를 공개합니다.',
    why: '정보 사이트 성격을 앞세웁니다. 검색·AI 인용에는 가장 잘 맞지만, 상담 전환력은 약합니다.',
  },
];

export default function Plan2() {
  return (
    <main className="lp" style={{ ['--m' as string]: '#26303B', ['--bg' as string]: '#F3F1ED', ['--ac' as string]: '#7FC3D6' } as React.CSSProperties}>
      <div className="lphead">
        <h1>산재보상 전문센터 — 구조 재정리</h1>
        <p>
          색은 <b>차콜 #26303B + 웜 그레이 #F3F1ED</b>에 강조색을 주황(코퍼) 대신 <b>밝은 청록 #7FC3D6</b>으로
          바꿨습니다. 이름은 <b>노무법인 전승 · 산재보상전문센터</b>를 같은 크기로 크게 넣었습니다.
        </p>
        <div className="basis">
          <b>사람과산재에서 가져올 것</b> — ① 메뉴 이름이 전부 <b>질문형</b>입니다(“산재 처음이신가요?”, “저도 산재에
          해당되나요?”, “상담이 필요하신가요?”). ② 기본정보를 페이지 하나에 모으고 <b>질문마다 앵커</b>로 바로
          뜁니다. ③ 승인사례 제목이 <b>직업 + 이야기</b>입니다(“술 한잔으로 버티던 통증, 40년 석공의 산재 승인
          이야기”). ④ <b>직업·직종별 사례 해설</b>이라는 축을 따로 둡니다. ⑤ 위임 절차·업무 범위·비용을 미리
          공개합니다.
          <br />
          <b>가져오지 않을 것</b> — 전국 8개 상담센터, 노무사 여러 명 카드, 영상 채널. 우리 규모와 맞지 않습니다.
        </div>
      </div>

      {/* 문구 3안 */}
      <section className="lpsec">
        <div className="lptitle"><b>첫 문구 3안</b><span>“이 병도 산재가 되나요?”를 대신할 문장</span></div>
        {heroes.map((v) => (
          <div key={v.id} style={{ marginTop: 18 }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: '#26303B', marginBottom: 8 }}>{v.label}</div>
            <div className="mock">
              <div className="mnav">
                <span className="mlogo">노무법인 전승<em>· 산재보상전문센터</em></span>
                <span className="mmenu">
                  <span>산재가 처음이신가요? <i>▾</i></span><span>내 병은? <i>▾</i></span><span>어떤 일을? <i>▾</i></span><span>사례 <i>▾</i></span><span>유족 가이드</span><span>상담 안내</span>
                </span>
                <span className="mcall">041-417-1915</span>
              </div>
              <div className="mhero">
                <h2 dangerouslySetInnerHTML={{ __html: v.h.join('<br />') }} />
                <p>{v.p}</p>
                <div className="mbtns">
                  <span className="mbtn">내 병으로 찾아보기</span>
                  <span className="mbtn g">가족이 일하다 돌아가셨다면</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: '#6b7686', marginTop: 8 }}>{v.why}</p>
          </div>
        ))}
      </section>

      {/* 구조 */}
      <section className="lpsec">
        <div className="lptitle"><b>확정 메뉴 6개</b><span>질문형 이름 + 설명 한 줄(부제)</span></div>
        <div className="lpfeat">
          <div><b>1. 산재가 처음이신가요?</b> — 산재 보상이란<br />한 페이지 + 앵커 7개: 저도 산재인가요 / 무엇부터 하나요 / 어떤 급여가 있나요 / 얼마나 받나요 / 기한은 언제까지 / 혼자 해도 되나요 / 자주 묻는 질문</div>
          <div><b>2. 내 병은 어디에 해당하나요?</b> — 상병별 산재여부<br />과로성 질병(뇌심혈관) · 정신질환·자살 · 직업성 암 · 폐질환·진폐 · 소음성 난청 · 근골격계 · 업무상 사고 · 출퇴근 재해</div>
          <div><b>3. 어떤 일을 하셨나요?</b> — 직업별 산재여부<br />건설(형틀목공·철근·미장) · 제조(용접·프레스·도장) · 운수(버스·화물·배달) · 돌봄(요양보호사·간병) · 청소·경비 · 조리·급식 · 사무·교대</div>
          <div><b>4. 사례가 궁금하신가요?</b> — 산재 보상 승인 사례<br />전승 승인사례 / 공단·법원 주요 사례(사건번호·결론·시사점)</div>
          <div><b>5. 가족을 잃으셨다면?</b> — 산재보상 유족 가이드<br />유족급여·장의비, 사망 사건 준비 자료, 회사가 협조하지 않을 때</div>
          <div><b>6. 산재 상담 안내</b><br />전화 · 카카오톡 · 온라인 신청 / 위임 절차와 업무 범위, 비용 기준 공개</div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>왜 축을 둘로 두나</b><span>검색어가 두 갈래로 들어옵니다</span></div>
        <div className="lpmeta">
          <div><b>병명으로 찾는 사람</b>“소음성 난청 산재”, “뇌출혈 산재 인정” — 상병별 페이지가 받습니다</div>
          <div><b>직업으로 찾는 사람</b>“형틀목공 난청”, “요양보호사 어깨 산재” — 직종별 페이지가 받습니다. 사람과산재도 이 축을 따로 두고 있습니다</div>
          <div><b>교차 연결</b>직종 페이지에서 그 직종에 많은 상병으로, 상병 페이지에서 그 병이 많은 직종으로 서로 링크합니다</div>
        </div>
      </section>

      <section className="lpsec">
        <div className="lptitle"><b>승인사례 제목 방식</b><span>“무슨 병 승인” 대신 사람의 이야기로</span></div>
        <div className="mock">
          <div className="mbody">
            <div className="mrow3">
              <div className="mcase"><em>소음성 난청</em><b>“기계 소리에 묻혀 산 30년, 퇴직 8년 뒤 받은 장해급여”</b><span>제조업 · 쟁점: 소멸시효 기산점</span></div>
              <div className="mcase"><em>뇌심혈관·과로</em><b>“새벽 교대를 5년, 화물 기사의 뇌출혈”</b><span>운수업 · 쟁점: 52시간 이하 구간의 가중요인</span></div>
              <div className="mcase"><em>근골격계</em><b>“어르신을 안아 올리던 어깨, 회전근개 파열”</b><span>요양보호사 · 쟁점: 반복 동작 입증</span></div>
            </div>
            <div className="mwarn" style={{ marginTop: 18 }}>
              <b>지킬 선</b>
              회사명과 개인은 특정하지 않습니다. 성공률·보장·최대 같은 표현은 쓰지 않습니다. 각 사례에 상병·쟁점·
              준비 자료·결과·기간만 사실대로 적습니다.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
