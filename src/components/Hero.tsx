export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-[1280px] px-6 py-section"
      aria-labelledby="hero-title"
    >
      <p className="mb-4 text-sm font-medium text-muted-strong">
        Planning · Visual Design
      </p>
      <h1
        id="hero-title"
        className="max-w-4xl text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-on-dark"
      >
        한다영 포트폴리오
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
        문제를 구조화하는 기획과, 메시지를 선명하게 전달하는 디자인을 함께
        다룹니다. 사용자 흐름을 정의하고 시각 언어로 풀어내며, 콘셉트부터 최종
        산출물까지 일관된 경험을 만듭니다.
      </p>
      <div className="mt-8">
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
        >
          연락하기
        </a>
      </div>
    </section>
  );
}
