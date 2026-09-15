import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "뜨개러투게더 — 한다영 포트폴리오",
  description:
    "뜨개 커뮤니티를 위한 서비스 기획·디자인 프로젝트 상세 페이지입니다.",
};

export default function TteugaeTogetherPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-[1280px] px-6 py-section">
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted-strong transition-colors hover:text-primary"
          >
            ← Projects
          </Link>

          <p className="mt-8 font-mono text-sm text-primary">2025 · Service Design</p>
          <h1 className="mt-3 max-w-3xl text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-on-dark">
            뜨개러투게더
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            뜨개 커뮤니티를 위한 서비스 기획·디자인 프로젝트입니다. 함께 만들고
            나누는 경험을 중심으로 사용자 여정, 정보 구조, 시각 시스템을
            설계했습니다.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Role", value: "기획 · UI/UX 디자인" },
              { label: "Focus", value: "커뮤니티 · 온보딩 · 콘텐츠 큐레이션" },
              { label: "Tools", value: "Figma · Photoshop · Illustrator" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-card p-6">
                <p className="text-xs font-medium text-muted">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-on-dark">{item.value}</p>
              </div>
            ))}
          </div>

          <section className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-body">
            <h2 className="text-2xl font-semibold text-on-dark">Overview</h2>
            <p>
              뜨개러투게더는 혼자 뜨개를 시작하는 사람과 숙련된 뜨개러가 서로
              연결되도록 돕는 서비스입니다. 패턴 탐색, 진행 기록, 커뮤니티
              교류를 하나의 흐름으로 묶어 진입 장벽을 낮추는 것이 목표였습니다.
            </p>
            <p>
              리서치에서 도출된 핵심 니즈를 바탕으로 핵심 시나리오를 정의하고,
              카드·리스트·디테일 화면의 시각 계층을 정리했습니다. 브랜드 톤은
              따뜻하면서도 정보가 읽히도록 절제된 컬러와 타이포그래피로
              구성했습니다.
            </p>
          </section>

          <div className="mt-12">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              연락하기
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
