import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/posts';

export const metadata: Metadata = {
  title: '산재 상담 안내',
  description:
    '전화·카카오톡·온라인으로 산재 상담을 받으실 수 있습니다. 위임 절차와 업무 범위, 비용 기준 안내 방식을 미리 적어 두었습니다.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <main>
      <div className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">홈</Link> › 산재 상담 안내
          </div>
          <h1>산재 상담 안내</h1>
          <p className="sub">병명과 하신 일을 알려 주시면, 산재에 해당할 가능성과 준비할 자료를 먼저 짚어 드립니다.</p>
        </div>
      </div>
      <section className="sec">
        <div className="post-wrap">
          <article className="post-body">
            <h2>상담 방법</h2>
            <ul>
              <li>
                전화 <strong>{site.tel}</strong> (평일 09:00–18:00)
              </li>
              <li>
                <a href={site.kakao} target="_blank" rel="noopener">
                  카카오톡 채널 상담 ↗
                </a>{' '}
                — 병원 서류나 통지서 사진을 바로 보내실 수 있습니다
              </li>
              <li>
                <a href={`${site.firmUrl}/contact/`}>온라인 상담 신청서 ↗</a> — 노무법인 전승 홈페이지의 신청서로
                접수됩니다
              </li>
            </ul>

            <h2>상담 전에 정리해 두면 좋은 것</h2>
            <ul>
              <li>진단명과 처음 증상이 나타난 시기</li>
              <li>일한 사업장과 기간, 실제로 한 작업</li>
              <li>이미 받은 진단서·검사 결과지</li>
              <li>공단에서 받은 통지서가 있다면 받은 날짜</li>
            </ul>
            <p>다 갖추지 못하셨어도 괜찮습니다. 지금 있는 자료로 무엇을 더 확인해야 하는지부터 정리합니다.</p>

            <h2>사건을 맡기실 때의 절차</h2>
            <ol>
              <li>
                <strong>첫 상담</strong>: 산재에 해당할 가능성, 청구할 급여, 준비할 자료를 확인합니다.
              </li>
              <li>
                <strong>위임 범위 확정</strong>: 최초 청구인지, 불승인 뒤 심사청구·재심사청구인지, 어느 급여까지인지를
                정합니다.
              </li>
              <li>
                <strong>비용 기준 안내</strong>: 착수 단계와 결과 단계의 비용 구조를 서면으로 안내해 드립니다. 개별
                금액은 사건의 내용과 범위에 따라 상담 때 제시합니다.
              </li>
              <li>
                <strong>위임장·자료 수집</strong>: 위임장을 작성하고, 회사·의료기관·공단 자료를 함께 모읍니다.
              </li>
              <li>
                <strong>청구와 진행 보고</strong>: 청구서 제출 뒤 조사·심의 단계마다 진행 상황을 알려 드립니다.
              </li>
            </ol>

            <h2>이런 사건을 다룹니다</h2>
            <ul>
              <li>산재 최초 청구 — 요양·휴업·장해·유족급여, 장례비</li>
              <li>과로성 질병(뇌심혈관), 정신질환·자살, 직업성 암, 폐질환·진폐, 소음성 난청, 근골격계 질환</li>
              <li>업무상 사고, 출퇴근 재해</li>
              <li>불승인 뒤 심사청구·재심사청구, 평균임금 정정</li>
            </ul>
          </article>
          <p className="post-note">
            천안 본사 {site.address}. 상담 내용은 공인노무사법에 따라 비밀이 보장됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}
