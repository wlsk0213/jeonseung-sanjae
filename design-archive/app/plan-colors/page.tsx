import '../layout-preview/layout-preview.css';

const palettes = [
  {
    id: 'teal',
    name: '현재 안 · 딥 틸',
    m: '#12554E',
    bg: '#F7F4ED',
    ac: '#C8873C',
    note: '신뢰(파랑)와 회복(초록)의 중간. 의료·복지에서 흔해 안전하지만, 그만큼 개성은 약합니다.',
  },
  {
    id: 'forest',
    name: '딥 포레스트 그린',
    m: '#14452F',
    bg: '#F5F2E8',
    ac: '#C08A2E',
    note: '틸보다 초록이 깊어 더 묵직합니다. 법률사무소 특유의 권위가 생기고, 크림 바탕과 만나 따뜻함도 남습니다.',
  },
  {
    id: 'midnight',
    name: '미드나잇 블루 + 골드',
    m: '#17324F',
    bg: '#F2F4F7',
    ac: '#C9A227',
    note: '가장 격식 있는 조합입니다. 신뢰가 강하고 유족 대상 페이지에서도 무게가 맞습니다. 다만 차갑습니다.',
  },
  {
    id: 'charcoal',
    name: '차콜 + 코퍼',
    m: '#26303B',
    bg: '#F3F1ED',
    ac: '#C2703D',
    note: '색기가 거의 없는 중립. 사진과 표가 튀어 보입니다. 브랜드색은 코퍼가 담당합니다.',
  },
  {
    id: 'brown',
    name: '딥 브라운 + 샌드',
    m: '#4A3728',
    bg: '#F6F1E7',
    ac: '#B0713A',
    note: '가장 따뜻하고 오래된 느낌. 고령 이용자에게 편안하지만, 전문성보다 온화함이 앞섭니다.',
  },
  {
    id: 'plum',
    name: '딥 플럼 + 크림',
    m: '#4A2440',
    bg: '#F6F1EF',
    ac: '#BE7A4A',
    note: '드문 색이라 기억에 남습니다. 다른 산재 사이트와 확실히 구분되지만 호불호가 갈립니다.',
  },
];

export default function PlanColors() {
  return (
    <main className="lp">
      <div className="lphead">
        <h1>색 다시 보기 — 같은 화면, 여섯 가지 색</h1>
        <p>
          수정안(병명으로 들어오는 첫 화면)에 색만 바꿔 입혔습니다. 모두 <b>진한 메인 + 따뜻한 바탕 + 강조색 하나</b>의
          투톤 구성이고, 본문 크기와 대비는 동일합니다.
        </p>
      </div>

      {palettes.map((p) => (
        <section
          className="lpsec"
          key={p.id}
          style={{ ['--m' as string]: p.m, ['--bg' as string]: p.bg, ['--ac' as string]: p.ac } as React.CSSProperties}
        >
          <div className="lptitle">
            <b>{p.name}</b>
            <span>{p.m} · {p.bg} · {p.ac}</span>
          </div>
          <p style={{ margin: '4px 0 12px', fontSize: 14, color: '#6b7686' }}>{p.note}</p>

          <div className="mock">
            <div className="mnav">
              <span className="mlogo">전승 산재보상<em>전문센터</em></span>
              <span className="mmenu">
                <span>상병별 안내 <i>▾</i></span><span>산재 기본정보 <i>▾</i></span><span>사례 <i>▾</i></span><span>전체 글</span>
              </span>
              <span className="mcall">041-417-1915</span>
            </div>
            <div className="mhero">
              <h2>이 병도 <b>산재가 되나요?</b></h2>
              <p>병명을 고르시면 인정기준, 준비할 자료, 실제 인정된 사례를 함께 보여 드립니다.</p>
              <div className="mpick">
                <span>뇌출혈·심근경색<br />(과로)</span>
                <span>소음성 난청</span>
                <span>근골격계 질환</span>
                <span>직업성 암·폐질환</span>
              </div>
              <div className="mbtns">
                <span className="mbtn">가족이 일하다 돌아가셨다면</span>
                <span className="mbtn g">불승인 통지를 받으셨다면</span>
              </div>
            </div>
            <div className="mbody">
              <h3>공단·법원 주요 사례</h3>
              <div className="mrow2">
                <div className="mcase">
                  <em>법원 판결</em>
                  <b>퇴사 24년 뒤 난청, 나이만으로 부정할 수 없다</b>
                  <span>서울행정법원 2018구단58816 · 부지급 처분 취소</span>
                </div>
                <div className="mcase">
                  <em>전승 승인사례</em>
                  <b>주 평균 58시간 교대 근무자 뇌출혈 인정</b>
                  <span>쟁점: 가중요인 · 자료: 근무표·출입기록</span>
                </div>
              </div>
              <div className="mwarn" style={{ marginTop: 18 }}>
                <b>기한을 먼저 확인하세요</b>
                요양·휴업급여는 3년, 장해·유족급여는 5년. 불승인에 대한 심사청구는 통지받은 날부터 90일입니다.
              </div>
            </div>
            <div className="mbar"><span>📞 전화 상담</span><span>💬 카카오톡</span><span>📝 상담 신청</span></div>
          </div>
        </section>
      ))}
    </main>
  );
}
