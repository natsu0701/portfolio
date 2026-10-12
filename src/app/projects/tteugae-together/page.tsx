import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyPhases } from "@/components/CaseStudyPhases";
import { DoubleDiamond } from "@/components/DoubleDiamond";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Chip, FilledLink, Icon } from "@/components/m3";
import { getWork } from "@/data/works";

const work = getWork("tteugae-together");

export const metadata: Metadata = {
  title: "뜨개러투게더 — 한다영 포트폴리오",
  description:
    "뜨개 커뮤니티를 위한 서비스 기획·디자인 프로젝트. Discover부터 Solution까지 더블 다이아몬드 과정으로 정리한 케이스 스터디입니다.",
};

export default function TteugaeTogetherPage() {
  if (!work) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-surface">
        <article className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-24">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1 text-sm font-medium text-on-surface hover:underline"
          >
            <Icon name="arrow_forward" className="rotate-180 text-[20px]" />
            Work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Chip>{work.tag}</Chip>
            <span className="text-sm text-on-surface-variant">{work.year}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.12] tracking-tight text-on-surface">
            {work.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-on-surface md:text-lg">
            {work.summary}
          </p>

          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Role", value: work.role },
              { label: "Focus", value: work.focus },
              { label: "Tools", value: work.tools.join(" · ") },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] bg-surface-container px-5 py-5">
                <dt className="text-xs font-medium text-on-surface-variant">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium leading-6 text-on-surface">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <DoubleDiamond />
          </div>

          <div className="mt-12">
            <CaseStudyPhases work={work} idPrefix="page-" />
          </div>

          <div className="mt-14">
            <FilledLink href="/#contact">연락하기</FilledLink>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
