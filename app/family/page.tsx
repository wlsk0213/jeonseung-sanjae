import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/posts';

export const metadata: Metadata = {
  title: '가족을 잃으셨다면? — 산재보상 유족 가이드',
  description:
    '가족이 일하다 세상을 떠났을 때 유족이 무엇을 남겨 두어야 하는지, 유족급여와 장례비는 누가 어떻게 청구하는지, 청구 기한과 회사가 협조하지 않을 때의 대응을 정리했습니다.',
  alternates: { canonical: '/family/' },
};

const faq = [
  {
    q: '장례부터 치러도 되나요, 아니면 먼저 할 일이 있나요?',
    a: '장례를 미룰 필요는 없습니다. 다만 사인이 분명하지 않은 경우에는 부검 여부를 장례 전에 결정해야 하므로, 경찰이나 공단에서 부검 이야기가 나오면 그 자리에서 결정하기보다 한 번 상의해 보시기 바랍니다. 장례 중이라도 회사에서 온 연락, 사망 전 근무 상황에 대해 들은 이야기는 메모로 남겨 두십시오.',
  },
  {
    q: '유족급여는 누가 받나요?',
    a: '근로자가 사망할 당시 생계를 같이 하던 유족 가운데 배우자(사실혼 포함)와, 25세 미만 자녀·손자녀, 60세 이상 부모·조부모, 19세 미만 또는 60세 이상 형제자매 등이 유족보상연금을 받을 자격이 있고, 순위는 배우자·자녀·부모·손자녀·조부모·형제자매 순입니다. 학업·취업·요양으로 따로 살았어도 고인의 소득으로 생계를 유지했다면 생계를 같이 한 유족으로 봅니다.',
  },
  {
    q: '청구 기한은 언제까지인가요?',
    a: '유족급여와 장례비를 받을 권리의 소멸시효는 5년입니다. 다만 5년은 청구할 수 있는 기간이지 자료를 천천히 모아도 된다는 뜻은 아닙니다. 회사 기록과 동료의 기억은 시간이 갈수록 사라지므로 근무 기록을 남기는 일은 서두르는 편이 좋습니다.',
  },
  {
    q: '회사가 자료를 주지 않습니다.',
    a: '회사의 동의나 협조는 청구 요건이 아닙니다. 유족이 직접 근로복지공단에 청구하면 공단이 조사 과정에서 회사에 근무 기록을 요구합니다. 그와 별개로 4대보험 이력, 고인의 휴대전화 통화·메신저 기록, 출입카드 기록, 급여명세서, 동료 진술로 근무 시간과 상황을 재구성할 수 있습니다.',
  },
];

export default function FamilyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 가족을 잃으셨다면?
          </div>
          <h1>가족을 잃으셨다면</h1>
          <p className="sub">
            가족이 일하다 세상을 떠난 뒤에 남은 사람이 마주하는 것은 서류입니다. 무엇을 언제 해야 하는지,
            순서대로 정리했습니다.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="post-wrap">
          <article className="post-body">
            <p>
              과로로 쓰러져 돌아가신 경우, 오래 다룬 유해물질 때문에 생긴 암으로 돌아가신 경우, 현장 사고로
              돌아가신 경우 모두 업무상 재해로 인정되면 유족에게 유족급여와 장례비가 지급됩니다. 회사가 동의하지
              않아도 유족이 직접 청구할 수 있습니다.
            </p>

            <h2>지금 남겨 두어야 할 것</h2>
            <ul>
              <li>
                <strong>사망 전 근무 상황</strong>: 마지막 몇 주의 출퇴근 시간, 야간·휴일 근무, 회사에서 있었던 일.
                가족이 들은 이야기도 날짜와 함께 메모해 두십시오.
              </li>
              <li>
                <strong>회사에서 온 연락</strong>: 문자·통화·문서를 그대로 보관합니다. 합의를 권하는 연락이 오면
                서명하기 전에 상의하십시오.
              </li>
              <li>
                <strong>병원 기록</strong>: 사망진단서(시체검안서), 응급실·입원 기록, 부검이 있었다면 부검 결과.
              </li>
              <li>
                <strong>고인의 휴대전화</strong>: 통화 기록, 메신저, 사진은 근무 시간과 상황을 보여 주는 자료가 됩니다.
                초기화하거나 해지하기 전에 보존하십시오.
              </li>
            </ul>

            <h2>사망 원인별로 무엇을 보나</h2>
            <table>
              <thead>
                <tr>
                  <th>사망 원인</th>
                  <th>판단의 중심</th>
                  <th>자세히</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>과로(뇌출혈·뇌경색·심근경색)</td>
                  <td>발병 전 12주·4주의 근무시간과 야간·교대 등 가중요인. 기준일은 사망일이 아니라 발병일</td>
                  <td>
                    <Link href="/topics/cardio/">과로성 질병</Link>
                  </td>
                </tr>
                <tr>
                  <td>직업성 암</td>
                  <td>어느 사업장에서 어떤 물질을 얼마나 오래 다뤘는지. 과거 직장까지 시간 순서로</td>
                  <td>
                    <Link href="/topics/cancer/">직업성 암</Link>
                  </td>
                </tr>
                <tr>
                  <td>현장 사고</td>
                  <td>사고 경위, 목격자, 안전조치 여부. 산업안전보건법 문제와 형사 절차가 함께 진행되기도 함</td>
                  <td>
                    <Link href="/topics/accident/">업무상 사고</Link>
                  </td>
                </tr>
                <tr>
                  <td>자살</td>
                  <td>업무상 스트레스와 정신질환, 사망 전 상황을 보여 주는 기록</td>
                  <td>
                    <Link href="/topics/mental/">정신질환·자살</Link>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>유족급여와 장례비, 어떻게 청구하나</h2>
            <p>
              근로복지공단 사업장 관할 지사에 유족급여 청구서와 장례비 청구서를 냅니다. 두 급여는 함께 청구할 수
              있지만 유족급여를 받을 사람과 장례를 치른 사람이 다를 수 있어 각각 청구권자를 확인합니다. 업무상
              질병으로 인한 사망은 원칙적으로 업무상질병판정위원회 심의를 거칩니다. 유족보상연금은 급여기초연액의
              47%를 기본으로 유족 1명당 5%씩(본인 포함, 최대 20%)이 더해지고, 일시금은 평균임금의 1,300일분,
              장례비는 평균임금의 120일분(고시 한도 범위)입니다.
            </p>
            <p>
              청구 절차와 준비 자료, 불승인 뒤 90일 기한까지는{' '}
              <a href={`${site.blogUrl}/sanjae-death-survivor-benefit/`}>산재 사망 유족급여·장례비 청구 방법</a>에
              자세히 정리해 두었습니다.
            </p>

            <h2>회사가 협조하지 않을 때</h2>
            <p>
              회사의 동의는 청구 요건이 아닙니다. 공단이 조사 과정에서 회사에 근무 기록을 요구하고, 유족 쪽에서도
              4대보험 이력과 고인의 기록으로 근무 상황을 재구성할 수 있습니다. 회사가 먼저 합의를 제안하는 경우도
              있는데, 합의금과 산재보험급여는 별개의 문제이고 합의 내용에 따라 나중에 다툴 수 없게 되는 부분이
              생기므로 서명 전에 반드시 확인하십시오.
            </p>
          </article>

          <div className="post-faq">
            <h2>자주 묻는 질문</h2>
            {faq.map((f, i) => (
              <details className="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <p className="post-note">
            이 페이지는 일반적인 정보 제공을 목적으로 하며 개별 사안에 대한 법률 자문이 아닙니다. 근거: 산업재해보상보험법
            제62조·제63조·제65조·제71조·제112조, 별표 3, 시행령 제61조·제66조의2. 상담 {site.tel}.
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>지금은 서류를 다 갖추지 않으셔도 됩니다.</h2>
          <p>고인의 병명과 하시던 일, 사망 전 상황을 알려 주시면 무엇부터 확인해야 하는지 짚어 드립니다.</p>
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
