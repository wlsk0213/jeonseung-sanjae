import Link from 'next/link';
import { getAllPosts, diseaseTopics, jobs, site, fmtDate, topicLabel, postsByTopic } from '@/lib/posts';

const steps = [
  { n: '1', t: '병명과 하신 일 확인', d: '진단명과 증상이 시작된 시기, 어느 사업장에서 어떤 작업을 얼마나 했는지부터 정리합니다.' },
  { n: '2', t: '기록 모으기', d: '4대보험 이력, 근태·작업 기록, 작업환경측정·건강진단 결과, 동료 진술을 모읍니다.' },
  { n: '3', t: '공단에 청구', d: '요양·휴업·장해·유족급여 중 해당 급여를 근로복지공단에 청구합니다. 회사 동의는 필요하지 않습니다.' },
  { n: '4', t: '조사와 심의', d: '공단 조사와, 질병이면 업무상질병판정위원회 심의를 거칩니다. 이때 자료를 보강할 수 있습니다.' },
  { n: '5', t: '결정 뒤 대응', d: '불승인이면 90일 안에 심사청구·재심사청구를, 승인이면 급여 지급과 장해등급을 확인합니다.' },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 6);
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">노무법인 전승 · 산재보상전문센터</div>
          <h1>
            일하다 생긴 병인지,
            <br />
            <b>먼저 확인해 드립니다</b>
          </h1>
          <p className="lede">
            산재인지 아닌지부터 판단이 갈립니다. 병명과 하신 일을 알려 주시면 인정 가능성과 준비할 자료를 짚어
            드립니다.
          </p>
          <div className="hero-cta">
            <Link className="btn-main" href="/topics/">
              내 병으로 찾아보기
            </Link>
            <Link className="btn-ghost" href="/family/">
              가족이 일하다 돌아가셨다면
            </Link>
          </div>
          <div className="hero-pick" aria-label="자주 찾는 상병">
            {diseaseTopics.slice(0, 4).map((t) => (
              <Link key={t.id} href={`/topics/${t.id}/`}>
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">내 병은 어디에 해당하나요?</h2>
          <p className="sec-sub">같은 산재라도 상병에 따라 인정기준과 모아야 할 자료가 다릅니다.</p>
          <div className="topic-grid">
            {diseaseTopics.map((t) => {
              const n = postsByTopic(t.id).length;
              return (
                <Link className="topic-card" key={t.id} href={`/topics/${t.id}/`}>
                  <span className="topic-name">{t.label}</span>
                  <span className="topic-lead">{t.lead}</span>
                  {n > 0 && <span className="topic-count">글 {n}편</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <h2 className="sec-h">어떤 일을 하셨나요?</h2>
          <p className="sec-sub">병명이 아니라 직업으로 찾아오는 분도 많습니다. 직종마다 자주 문제 되는 상병이 다릅니다.</p>
          <div className="job-grid">
            {jobs.map((j) => (
              <Link className="topic-card" key={j.id} href={`/jobs/${j.id}/`}>
                <span className="topic-name">{j.label}</span>
                <span className="topic-lead">{j.lead}</span>
                <span className="chips">
                  {j.topics.slice(0, 3).map((id) => (
                    <span key={id}>{topicLabel(id)}</span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="family-band">
            <div>
              <h3>가족을 잃으셨다면</h3>
              <p>
                장례를 치르는 동안 무엇을 남겨 두어야 하는지, 유족급여와 장례비는 누가 어떻게 청구하는지, 회사가
                협조하지 않을 때는 어떻게 하는지를 따로 정리했습니다.
              </p>
            </div>
            <Link className="btn-nav" href="/family/">
              유족 가이드 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <h2 className="sec-h">산재 신청은 이 순서로 갑니다</h2>
          <p className="sec-sub">처음이시면 「산재가 처음이신가요?」에서 질문별로 확인하실 수 있습니다.</p>
          <div className="step-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.n}>
                <span className="step-n">{s.n}</span>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <Link className="more-link" href="/guide/">
            산재가 처음이신가요? — 질문별 안내 →
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">최근 글</h2>
          <p className="sec-sub">법령·고용노동부 매뉴얼 원문과 공개 판례를 대조해 씁니다.</p>
          {posts.length === 0 ? (
            <p className="empty">글을 준비하고 있습니다.</p>
          ) : (
            <div className="post-grid">
              {posts.map((p) => (
                <Link className="pcard" key={p.slug} href={`/posts/${p.slug}/`}>
                  <span className="pcard-topic">{topicLabel(p.topic)}</span>
                  <b className="pcard-title">{p.title}</b>
                  <span className="pcard-desc">{p.description}</span>
                  <span className="pcard-meta">
                    {fmtDate(p.date)} · 약 {p.readingMin}분
                  </span>
                </Link>
              ))}
            </div>
          )}
          <Link className="more-link" href="/posts/">
            전체 글 보기 →
          </Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>병명과 하신 일을 알려 주세요.</h2>
          <p>산재인지 아닌지, 무엇을 준비해야 하는지를 첫 상담에서 짚어 드립니다.</p>
          <div className="cta-row">
            <a className="btn-main" href={`tel:${site.tel}`}>
              {site.tel}
            </a>
            <a className="btn-ghost" href={site.kakao} target="_blank" rel="noopener">
              카카오톡 상담
            </a>
            <Link className="btn-ghost" href="/contact/">
              상담 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
