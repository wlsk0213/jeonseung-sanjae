import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostFaq {
  q: string;
  a: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string; // 작성기준일 YYYY-MM-DD
  updated?: string;
  topic: string; // topics의 id와 정확히 일치
  jobs?: string[]; // 관련 직종 id (선택)
  description: string;
  keywords: string[];
  faq: PostFaq[];
  html: string;
  readingMin: number;
}

export interface TopicRead {
  title: string;
  href: string; // 절대 URL(홈페이지·블로그) 또는 이 사이트 내부 경로
  where: string; // 표시용 출처(홈페이지 인사이트 / 개인 블로그 / 이 사이트)
}
export interface Topic {
  id: string;
  label: string;
  lead: string;
  kind: 'disease' | 'process';
  jobs: string[]; // 이 상병이 많은 직종 id
  reads?: TopicRead[]; // 이 상병을 다룬, 법령 검토를 거친 글(사이트에 글이 쌓이기 전에도 빈 페이지가 되지 않게)
}

const FIRM = 'https://jeonseung.co.kr';
const BLOG = 'https://blog.jinanomu.com';
const R_FAMILY: TopicRead = { title: '가족을 잃으셨다면 — 유족급여·장례비 청구와 지금 남겨 둘 것', href: '/family/', where: '이 사이트' };
const R_DEATH: TopicRead = { title: '산재 사망 유족급여·장의비 청구 방법 — 신청 절차와 청구기한', href: `${BLOG}/sanjae-death-survivor-benefit/`, where: '개인 블로그' };
const R_FIRST: TopicRead = { title: '산재가 처음이신가요? — 산재 여부, 첫 할 일, 급여 종류, 기한', href: '/guide/', where: '이 사이트' };

/** 메뉴 2 「내 병은 어디에 해당하나요?」 — 상병 8 + 절차 2. 글의 topic은 여기 id와 일치해야 한다. */
export const topics: Topic[] = [
  {
    id: 'cardio', label: '과로성 질병(뇌심혈관)', lead: '뇌출혈·뇌경색·심근경색, 발병 전 업무시간과 가중요인', kind: 'disease', jobs: ['transport', 'cleaning', 'office', 'manufacturing'],
    reads: [
      { title: '출퇴근 기록이 없는데 과로 산재가 되나요? — 뇌출혈·심근경색 업무시간을 다시 세우는 방법', href: '/posts/overwork-stroke-work-hours-no-records/', where: '이 사이트' },
      { title: '뇌출혈·심근경색 산재, 주 60시간 미만이면 인정받기 어렵나요?', href: `${FIRM}/insights/noesimhyeolgwan-sanjae-geunrosigan/`, where: '홈페이지 인사이트' },
      R_DEATH,
      R_FAMILY,
    ],
  },
  {
    id: 'mental', label: '정신질환·자살', lead: '적응장애·우울증, 업무상 스트레스와 자살의 업무관련성', kind: 'disease', jobs: ['office', 'care'],
    reads: [
      { title: '퇴직 압박으로 생긴 우울증·적응장애, 괴롭힘이 아니어도 산재가 되나요?', href: `${FIRM}/insights/jeongsin-jilhwan-sanjae-toejik-apbak/`, where: '홈페이지 인사이트' },
      R_FAMILY,
    ],
  },
  {
    id: 'cancer', label: '직업성 암', lead: '폐암·백혈병, 어떤 물질에 얼마나 노출됐는지', kind: 'disease', jobs: ['construction', 'manufacturing', 'cooking'],
    reads: [
      { title: '직업성 암 산재 인정기준 — 폐암·백혈병, 어떤 노출이 인정되나', href: `${FIRM}/insights/jikeopseong-am-sanjae-injeong-gijun/`, where: '홈페이지 인사이트' },
      R_DEATH,
    ],
  },
  {
    id: 'lung', label: '폐질환·진폐', lead: '진폐·만성폐쇄성폐질환, 분진 노출 이력', kind: 'disease', jobs: ['construction', 'manufacturing'],
    reads: [
      { title: '직업성 암 산재 인정기준 — 노출 이력을 시간 순서로 정리하는 방법은 폐질환에도 같습니다', href: `${FIRM}/insights/jikeopseong-am-sanjae-injeong-gijun/`, where: '홈페이지 인사이트' },
      R_FIRST,
    ],
  },
  {
    id: 'hearing', label: '소음성 난청', lead: '85데시벨·3년 기준, 퇴직 후에도 청구하는 장해급여', kind: 'disease', jobs: ['manufacturing', 'construction'],
    reads: [
      { title: '소음성 난청 산재, 퇴직하고 몇 년이 지나도 장해급여를 받을 수 있나요?', href: `${BLOG}/noise-induced-hearing-loss-disability-benefit/`, where: '개인 블로그' },
    ],
  },
  {
    id: 'musculoskeletal', label: '근골격계 질환', lead: '어깨·허리·무릎, 반복 동작과 중량물 취급', kind: 'disease', jobs: ['care', 'construction', 'manufacturing', 'cleaning', 'cooking'],
    reads: [
      { title: '형틀목공 회전근개 파열, 퇴행성이라는데 산재가 되나요? — 여러 현장의 작업 경력 입증', href: '/posts/formwork-carpenter-rotator-cuff-tear/', where: '이 사이트' },
      R_FIRST,
    ],
  },
  {
    id: 'accident', label: '업무상 사고', lead: '사고 직후 남겨야 할 기록과 신청 순서', kind: 'disease', jobs: ['construction', 'manufacturing', 'transport', 'cleaning'],
    reads: [R_FIRST, R_FAMILY],
  },
  {
    id: 'commute', label: '출퇴근 재해', lead: '통상적인 경로와 방법, 경로 일탈의 판단', kind: 'disease', jobs: ['transport', 'office', 'care'],
    reads: [R_FIRST],
  },
  {
    id: 'benefit', label: '보험급여·장해등급', lead: '요양·휴업·장해·유족급여, 무엇을 얼마나 받나', kind: 'process', jobs: [],
    reads: [
      { title: '혼인신고를 안 했거나 따로 살았다면 — 산재 유족급여는 누가 받나요?', href: '/posts/survivor-benefit-de-facto-spouse-separated-parents/', where: '이 사이트' },
      { title: '산재 보상에는 어떤 급여가 있고 얼마나 받나 — 산재 가이드 3·4절', href: '/guide/#benefits', where: '이 사이트' },
      R_DEATH,
    ],
  },
  {
    id: 'appeal', label: '불승인 대응', lead: '심사청구·재심사청구·행정소송, 90일 기한', kind: 'process', jobs: [],
    reads: [
      { title: '산재 불승인 통지를 받았다면 — 90일 안에 해야 할 일', href: `${FIRM}/insights/sanjae-bulseungin-90il/`, where: '홈페이지 인사이트' },
    ],
  },
];

export const diseaseTopics = topics.filter((t) => t.kind === 'disease');

export function topicLabel(id: string): string {
  return topics.find((t) => t.id === id)?.label ?? '산재보상';
}
export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export interface Job {
  id: string;
  label: string;
  short: string;
  lead: string;
  work: string; // 어떤 작업이 문제 되나
  topics: string[]; // 이 직종에 많은 상병 id
}

/** 메뉴 3 「어떤 일을 하셨나요?」 — 직종 7 */
export const jobs: Job[] = [
  { id: 'construction', label: '건설(형틀목공·철근·미장)', short: '건설', lead: '중량물과 무리한 자세, 소음과 분진이 한 현장에 겹칩니다.', work: '형틀·철근·미장·해체 작업, 장비 소음, 석면·시멘트 분진', topics: ['musculoskeletal', 'hearing', 'accident', 'cancer', 'lung'] },
  { id: 'manufacturing', label: '제조(용접·프레스·도장)', short: '제조', lead: '기계 소음, 용접 흄, 도장 용제, 반복 조립 동작이 문제 됩니다.', work: '용접·프레스·도장·조립 라인, 교대근무', topics: ['hearing', 'musculoskeletal', 'cancer', 'accident', 'cardio'] },
  { id: 'transport', label: '운수(버스·화물·배달)', short: '운수', lead: '장시간·야간 운행과 배차 압박이 심장과 혈관에 부담을 줍니다.', work: '버스·화물·택배·배달 운행, 상하차', topics: ['cardio', 'musculoskeletal', 'accident', 'commute'] },
  { id: 'care', label: '돌봄(요양보호사·간병)', short: '돌봄', lead: '사람을 안아 올리고 부축하는 일이 어깨와 허리에 쌓입니다.', work: '이승·체위 변경·목욕 보조, 야간 근무, 이용자 폭언·폭행', topics: ['musculoskeletal', 'mental', 'accident'] },
  { id: 'cleaning', label: '청소·경비', short: '청소·경비', lead: '새벽 출근과 격일 야간 근무, 계단과 중량물이 겹칩니다.', work: '건물 청소, 격일제 경비, 야간 순찰', topics: ['cardio', 'musculoskeletal', 'accident'] },
  { id: 'cooking', label: '조리·급식', short: '조리·급식', lead: '뜨거운 조리 환경과 반복 동작, 조리 흄 노출이 문제 됩니다.', work: '학교·병원 급식 조리, 대량 조리, 배식·세척', topics: ['musculoskeletal', 'cancer', 'accident'] },
  { id: 'office', label: '사무·교대', short: '사무·교대', lead: '장시간 근무와 교대제, 업무 스트레스가 뇌심혈관과 정신 건강에 영향을 줍니다.', work: '장시간 사무, 교대·야간 근무, 실적 압박', topics: ['cardio', 'mental', 'commute'] },
];

export function getJob(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

const dir = path.join(process.cwd(), 'content', 'posts');

marked.setOptions({ gfm: true });

function toIso(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v ? String(v) : '';
}

function load(file: string): Post {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8');
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  const plain = content.replace(/[#>*|`_\-\n]/g, '');
  return {
    slug: file.replace(/\.md$/, ''),
    title: String(data.title ?? ''),
    date: toIso(data.date),
    updated: data.updated ? toIso(data.updated) : undefined,
    topic: String(data.topic ?? 'benefit'),
    jobs: Array.isArray(data.jobs) ? data.jobs.map(String) : undefined,
    description: String(data.description ?? ''),
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
    faq: Array.isArray(data.faq) ? (data.faq as PostFaq[]) : [],
    html,
    readingMin: Math.max(1, Math.round(plain.length / 500)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map(load)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function postsByTopic(id: string): Post[] {
  return getAllPosts().filter((p) => p.topic === id);
}

export function postsByJob(id: string): Post[] {
  return getAllPosts().filter((p) => p.jobs?.includes(id));
}

export function fmtDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return d ? `${y}. ${m}. ${d}.` : iso;
}

/** 사이트 공통 값 */
export const site = {
  name: '노무법인 전승 · 산재보상전문센터',
  short: '산재보상전문센터',
  url: 'https://sanjae.jinanomu.com',
  tel: '041-417-1915',
  firm: '노무법인 전승',
  firmUrl: 'https://jeonseung.co.kr',
  blogUrl: 'https://blog.jinanomu.com',
  kakao: 'http://pf.kakao.com/_AxmxdJn',
  author: '전지나 공인노무사',
  address: '충남 천안시 동남구 청수9로 1, 7층 703호 (청당동, 청오법조빌딩)',
  // 공식문장 [E] 기본 (2026-09-16 확정)
  tagline: '산업안전·산재보상·직장 내 괴롭힘 전문 노무법인, 노무법인 전승입니다.',
};

/** 메뉴 6개 (2026-09-19 확정) */
export const menus = [
  { href: '/guide/', label: '산재가 처음이신가요?', sub: '산재 보상이란' },
  { href: '/topics/', label: '내 병은 어디에 해당하나요?', sub: '상병별 산재여부' },
  { href: '/jobs/', label: '어떤 일을 하셨나요?', sub: '직업별 산재여부' },
  { href: '/cases/', label: '사례가 궁금하신가요?', sub: '산재 보상 승인 사례' },
  { href: '/family/', label: '가족을 잃으셨다면?', sub: '산재보상 유족 가이드' },
  { href: '/contact/', label: '산재 상담 안내', sub: '전화 · 카카오톡 · 온라인' },
];
