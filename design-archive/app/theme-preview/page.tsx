import './theme-preview.css';

const variants = [
  {
    id: 'teal',
    n: '1안 (추천)',
    name: '딥 틸 + 아이보리',
    note: '신뢰(파랑)와 회복(초록)을 함께. 의료·복지에서 검증된 조합',
    main: '#12554E',
    bg: '#F7F4ED',
    accent: '#C8873C',
  },
  {
    id: 'indigo',
    n: '2안',
    name: '딥 인디고 + 웜 샌드',
    note: '법인 남색과 가장 잘 이어짐. 신뢰는 가장 강하고 따뜻함은 덜함',
    main: '#23375E',
    bg: '#F5F1E8',
    accent: '#D98E4A',
  },
  {
    id: 'sage',
    n: '3안',
    name: '세이지 그린 + 크림',
    note: '가장 부드럽고 가족 같은 느낌. 전문성·권위는 상대적으로 약함',
    main: '#3E6B54',
    bg: '#F6F3EC',
    accent: '#B9743C',
  },
];

const topics = [
  ['소음성 난청', '퇴직 후 청력 저하, 장해급여 청구와 등급'],
  ['근골격계 질환', '어깨·허리·무릎, 반복작업과 업무관련성'],
  ['뇌심혈관 질환·과로', '뇌출혈·심근경색, 업무시간과 가중요인'],
  ['직업성 암·폐질환', '폐암·진폐·석면, 노출 이력 입증'],
];

export default function ThemePreview() {
  return (
    <main className="tvpage">
      <div className="tvhead">
        <h1>산재보상 전문센터 — 색 시안 3가지</h1>
        <p>
          같은 화면을 색만 바꿔 보여 드립니다. 본문 글자는 17px, 줄 간격을 넓혀 60~70대 이용자가 읽기 편하게
          맞췄습니다.
        </p>
      </div>

      {variants.map((v) => (
        <section
          className={`tv tv-${v.id}`}
          key={v.id}
          style={
            {
              ['--m' as string]: v.main,
              ['--bg' as string]: v.bg,
              ['--ac' as string]: v.accent,
            } as React.CSSProperties
          }
        >
          <div className="tvlabel">
            <b>{v.n} · {v.name}</b>
            <span>{v.note}</span>
            <span className="tvchips">
              <i style={{ background: v.main }} /> {v.main}
              <i style={{ background: v.bg, border: '1px solid #ccc' }} /> {v.bg}
              <i style={{ background: v.accent }} /> {v.accent}
            </span>
          </div>

          <div className="tvdemo">
            <div className="tvnav">
              <span className="tvlogo">전승 산재보상 <em>전문센터</em></span>
              <span className="tvmenu">
                <span>상병별 안내</span>
                <span>산재 신청 가이드</span>
                <span>전체 글</span>
                <span>센터 소개</span>
              </span>
              <span className="tvbtn">상담 문의</span>
            </div>

            <div className="tvhero">
              <span className="tveyebrow">노무법인 전승 · 산재보상 전문센터</span>
              <h2>
                혼자 판단하지 마세요.
                <br />
                <b>산재는 일한 이력으로 증명합니다</b>
              </h2>
              <p>
                소음성 난청, 근골격계 질환, 뇌심혈관 질환, 직업성 암까지. 최초 청구부터 장해급여와 불승인 대응까지
                전지나 공인노무사가 직접 검토합니다.
              </p>
              <div className="tvcta">
                <span className="tvbtn-main">상담 041-417-1915</span>
                <span className="tvbtn-ghost">산재 신청 가이드</span>
              </div>
            </div>

            <div className="tvbody">
              <h3>어떤 상병인가요</h3>
              <div className="tvgrid">
                {topics.map(([t, d]) => (
                  <div className="tvcard" key={t}>
                    <b>{t}</b>
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              <div className="tvtext">
                <h4>퇴직하고 시간이 지나도 신청할 수 있나요?</h4>
                <p>
                  퇴직했다는 사실만으로 신청 길이 막히지는 않습니다. 장해급여를 받을 권리는 5년 동안 행사하지 않으면
                  사라지지만, 소음성 난청은 그 5년을 퇴직한 날부터 세지 않습니다. 예전에 난청 진단을 받은 적이 있다면
                  그 진단서를 먼저 찾아 날짜를 확인해 두세요.
                </p>
                <div className="tvbox">
                  <b>먼저 답부터</b>
                  <ul>
                    <li>퇴직한 지 오래돼도 청구할 수 있습니다</li>
                    <li>나이가 많다는 이유만으로 제외되지 않습니다</li>
                  </ul>
                </div>
              </div>

              <div className="tvband">
                <b>지금 상황을 말씀해 주세요</b>
                <span>산재 신청 전이든, 불승인 통지를 받은 뒤든 첫 상담에서 방향을 잡아드립니다.</span>
                <span className="tvband-cta">
                  <span className="tvbtn-main">041-417-1915</span>
                  <span className="tvbtn-ghost">카카오톡 상담</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
