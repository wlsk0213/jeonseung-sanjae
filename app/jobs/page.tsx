import type { Metadata } from 'next';
import Link from 'next/link';
import { jobs, topicLabel } from '@/lib/posts';

export const metadata: Metadata = {
  title: '어떤 일을 하셨나요? — 직업별 산재여부',
  description:
    '건설(형틀목공·철근·미장), 제조(용접·프레스·도장), 운수(버스·화물·배달), 돌봄(요양보호사·간병), 청소·경비, 조리·급식, 사무·교대. 직종별로 자주 문제 되는 상병과 준비 자료를 안내합니다.',
  alternates: { canonical: '/jobs/' },
};

export default function JobsPage() {
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 어떤 일을 하셨나요?
          </div>
          <h1>어떤 일을 하셨나요?</h1>
          <p className="sub">
            병명보다 [무슨 일을 얼마나 했는지]가 먼저 떠오르는 분을 위한 안내입니다. 직종마다 자주 문제 되는
            상병이 다르고, 모아야 할 자료도 다릅니다.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <div className="job-grid">
            {jobs.map((j) => (
              <Link className="topic-card" key={j.id} href={`/jobs/${j.id}/`}>
                <span className="topic-name">{j.label}</span>
                <span className="topic-lead">{j.lead}</span>
                <span className="chips">
                  {j.topics.map((id) => (
                    <span key={id}>{topicLabel(id)}</span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
