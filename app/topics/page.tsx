import type { Metadata } from 'next';
import Link from 'next/link';
import { topics, diseaseTopics, postsByTopic, topicLabel } from '@/lib/posts';

export const metadata: Metadata = {
  title: '내 병은 어디에 해당하나요? — 상병별 산재여부',
  description:
    '과로성 질병(뇌심혈관), 정신질환·자살, 직업성 암, 폐질환·진폐, 소음성 난청, 근골격계 질환, 업무상 사고, 출퇴근 재해. 상병별로 산재 인정기준과 준비 자료를 정리했습니다.',
  alternates: { canonical: '/topics/' },
};

export default function TopicsPage() {
  const process = topics.filter((t) => t.kind === 'process');
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 내 병은 어디에 해당하나요?
          </div>
          <h1>내 병은 어디에 해당하나요?</h1>
          <p className="sub">같은 산재라도 상병에 따라 인정기준과 모아야 할 자료가 다릅니다. 병명으로 찾아보세요.</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <h2 className="sec-h">상병별 산재여부</h2>
          <div className="topic-grid">
            {diseaseTopics.map((t) => {
              const n = postsByTopic(t.id).length;
              return (
                <Link className="topic-card" key={t.id} href={`/topics/${t.id}/`}>
                  <span className="topic-name">{t.label}</span>
                  <span className="topic-lead">{t.lead}</span>
                  <span className="topic-count">{n > 0 ? `글 ${n}편` : '안내 준비 중'}</span>
                </Link>
              );
            })}
          </div>
          <h2 className="sec-h" style={{ marginTop: 56 }}>
            절차와 급여
          </h2>
          <div className="topic-grid">
            {process.map((t) => {
              const n = postsByTopic(t.id).length;
              return (
                <Link className="topic-card" key={t.id} href={`/topics/${t.id}/`}>
                  <span className="topic-name">{t.label}</span>
                  <span className="topic-lead">{t.lead}</span>
                  <span className="topic-count">{n > 0 ? `글 ${n}편` : '안내 준비 중'}</span>
                </Link>
              );
            })}
          </div>
          <p className="sec-sub" style={{ marginTop: 26 }}>
            병명이 아니라 직업으로 찾고 계시다면 <Link href="/jobs/" style={{ color: 'var(--ac-deep)', fontWeight: 700 }}>어떤 일을 하셨나요?</Link>
            에서 {topicLabel('musculoskeletal')} 같은 상병이 많은 직종을 확인하실 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
