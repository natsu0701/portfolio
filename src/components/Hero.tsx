import { FilledLink, OutlinedLink } from "@/components/m3";

export function Hero() {
  return (
    <section id="top" className="bg-surface" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:py-28">
        <p className="mb-6 text-sm font-medium tracking-[0.14em] text-on-surface uppercase">
          한다영 · UX/UI
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-on-surface"
        >
          복잡한 문제를
          <span className="mt-2 block">
            <span className="bg-primary px-2">읽히는 경험</span>으로.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-on-surface md:text-lg">
          문제를 구조화하는 기획과, 메시지를 선명하게 전달하는 디자인을 함께
          다룹니다. 사용자 흐름을 정의하고 시각 언어로 풀어내며, 콘셉트부터 최종
          산출물까지 일관된 경험을 만듭니다.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <FilledLink href="/#work">작업 보기</FilledLink>
          <OutlinedLink href="/#contact">연락하기</OutlinedLink>
        </div>
      </div>
    </section>
  );
}
