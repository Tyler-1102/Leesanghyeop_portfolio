import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import profileImage from '@/images/sanghyeop.jpg'
import {
  axProfile,
  axProjects,
  axCareer,
  axEducation,
  axSkills,
  axCertifications,
} from '@/config/axPortfolio'

export const metadata: Metadata = {
  title: 'AX Portfolio · 이상협',
  description: 'F&F MLB AX 직무 지원용 포트폴리오 (인쇄/PDF 전용)',
  robots: { index: false, follow: false },
}

// 인쇄/PDF 전용 페이지 — 사이트 기존 템플릿 디자인(Container·prose·색·타이포)을
// 그대로 재사용하고, AX 직무에 맞춘 문구/이미지는 axPortfolio.ts에서만 가져옵니다.
// 사이트 원본 데이터/페이지는 변경하지 않습니다.
export default function PrintAxPage() {
  return (
    <>
      <style>{printChrome}</style>

      {/* 화면 안내 (인쇄 시 숨김) */}
      <div className="ax-toolbar mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-xs text-primary">
        <span>AX 포트폴리오 · 인쇄 미리보기</span>
        <span>npm run pdf:ax 또는 ⌘/Ctrl+P → 배경 그래픽 켜기</span>
      </div>

      <Container className="ax-print mt-10 sm:mt-14">
        <div className="mx-auto max-w-3xl">
          {/* ── 히어로 (홈 템플릿 스타일) ── */}
          <section className="ax-hero ax-block grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                {axProfile.name}
              </h1>
              <p className="mt-2 text-lg font-semibold text-muted-foreground">
                {axProfile.role}
              </p>
              <p className="mt-5 text-base font-semibold text-primary">
                {axProfile.headline}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                {axProfile.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>{axProfile.email}</span>
                <span>{axProfile.github}</span>
              </div>
            </div>
            <div className="ax-hero-photo relative mx-auto w-full max-w-[220px] overflow-hidden rounded-lg border border-muted shadow-sm md:max-w-none">
              <Image
                src={profileImage}
                alt="이상협 프로필"
                priority
                sizes="(min-width: 768px) 30vw, 60vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </section>

          {/* ── 핵심 역량 ── */}
          <section className="ax-block mt-14 border-t border-muted pt-10">
            <p className="text-sm font-semibold uppercase text-primary">
              Skills
            </p>
            <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              핵심 역량
            </h2>
            <ul className="mt-8 space-y-3">
              {axSkills.map((s) => (
                <li
                  key={s.group}
                  className="ax-skill-row grid grid-cols-[100px_1fr] items-baseline gap-4"
                >
                  <span className="text-sm font-semibold text-primary">
                    {s.group}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {s.items}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── 프로젝트 (프로젝트 상세 템플릿 스타일) ── */}
          <section className="mt-14 border-t border-muted pt-10">
            <p className="text-sm font-semibold uppercase text-primary">
              Projects
            </p>
            <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              프로젝트
            </h2>

            {axProjects.map((p) => (
              <article
                key={p.name}
                className="ax-project mt-12 border-t border-muted pt-10 first:mt-10"
              >
                <header>
                  <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {p.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                    <span>{p.date}</span>
                    {p.team && (
                      <>
                        <span className="text-muted-foreground/40">|</span>
                        <span>{p.team}</span>
                      </>
                    )}
                    <span className="text-muted-foreground/40">|</span>
                    <span>{p.role}</span>
                  </div>
                  <p className="mt-4 rounded-lg bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                    ▶ {p.axAngle}
                  </p>
                </header>

                {/* 하이라이트 (상세 페이지와 동일한 카드) */}
                <div className="ax-highlight-grid mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {p.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-lg border border-muted p-5"
                    >
                      <p className="text-xl font-bold text-primary">{h.value}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 본문 — 사이트 프로젝트 상세 페이지(MDX)와 동일한 헤딩/문단 스타일 */}
                <div className="mt-4 text-zinc-800 dark:text-zinc-200">
                  <h4 className="mb-6 mt-10 border-b border-zinc-200 pb-1 text-3xl font-bold tracking-tight dark:border-zinc-700">
                    어떤 문제에서 시작했나
                  </h4>
                  <p className="my-6 text-base leading-relaxed opacity-85">
                    {p.problem}
                  </p>
                  <h4 className="mb-6 mt-10 border-b border-zinc-200 pb-1 text-3xl font-bold tracking-tight dark:border-zinc-700">
                    내가 한 일
                  </h4>
                  {p.contributions.map((c) => (
                    <div key={c.title} className="ax-avoid">
                      <h5 className="mb-4 mt-8 text-xl font-bold tracking-tight">
                        {c.title}
                      </h5>
                      <p className="my-4 text-base leading-relaxed opacity-85">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 화면 갤러리 */}
                {p.images.length > 0 && (
                  <div className="mt-10 space-y-6">
                    <h4 className="mb-6 border-b border-zinc-200 pb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:border-zinc-700 dark:text-zinc-200">
                      화면
                    </h4>
                    {p.images.map((img) => (
                      <figure key={img.src} className="ax-avoid">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full rounded-lg border border-muted"
                        />
                        <figcaption className="mt-2 text-sm italic text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {/* Tech Stack (상세 페이지와 동일) */}
                <div className="mt-8">
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    Tech Stack
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {p.techStack.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* ── 경력 ── */}
          <section className="ax-block mt-14 border-t border-muted pt-10">
            <p className="text-sm font-semibold uppercase text-primary">
              Experience
            </p>
            <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              경력
            </h2>
            <ul className="mt-8 space-y-6">
              {axCareer.map((c) => (
                <li key={c.company} className="ax-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {c.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {c.start} – {c.end}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.title}</p>
                  {c.axNote && (
                    <p className="mt-1 text-sm text-primary">└ {c.axNote}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* ── 학력 · 자격 ── */}
          <section className="ax-edu-cert ax-block mt-14 grid grid-cols-1 gap-10 border-t border-muted pt-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">
                Education
              </p>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                학력·교육
              </h2>
              <ul className="mt-6 space-y-4">
                {axEducation.map((e) => (
                  <li key={e.school}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {e.school}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {e.start} – {e.end}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.major}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase text-primary">
                Certifications
              </p>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                자격·어학
              </h2>
              <ul className="mt-6 space-y-4">
                {axCertifications.map((c) => (
                  <li key={c.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {c.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {c.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}

// 인쇄 시 사이트 크롬만 제거하고, 템플릿 디자인은 그대로 둡니다.
const printChrome = `
  .ax-print {
    color-scheme: light;
  }

  @media print {
    @page { size: A4; margin: 14mm; }

    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      background: hsl(var(--background)) !important;
      color: hsl(var(--foreground)) !important;
    }

    header, footer, .ax-toolbar { display: none !important; }
    .fixed.inset-0 { display: none !important; }
    nextjs-portal { display: none !important; }

    .ax-print {
      margin-top: 0 !important;
    }

    .ax-hero {
      grid-template-columns: minmax(0, 1fr) 220px !important;
      align-items: center !important;
      gap: 32px !important;
    }

    .ax-hero-photo {
      max-width: 220px !important;
    }

    .ax-skill-row {
      grid-template-columns: 132px minmax(0, 1fr) !important;
    }

    .ax-highlight-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }

    .ax-edu-cert {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    /* 프로젝트마다 새 페이지에서 시작 (첫 프로젝트 제외) */
    .ax-project { break-before: page; padding-top: 0 !important; border-top: 0 !important; margin-top: 0 !important; }
    .ax-project:first-of-type { break-before: auto; }

    /* 잘리면 안 되는 덩어리: 이미지+캡션, 소제목+본문, 카드, 하이라이트 */
    figure, .ax-avoid, .rounded-lg { break-inside: avoid; page-break-inside: avoid; }

    /* 제목이 페이지 끝에 홀로 남지 않게 */
    h1, h2, h3, h4, h5 { break-after: avoid; }
    p { orphans: 3; widows: 3; }

    /* 이미지가 한 페이지를 넘겨 여백을 만들지 않도록 높이 제한 */
    figure img { max-height: 88vh; object-fit: contain; width: auto; max-width: 100%; }

    a { text-decoration: none !important; }
  }
`
