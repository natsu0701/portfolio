import Link from "next/link";

const project = {
  href: "/projects/tteugae-together",
  year: "2025",
  tag: "Service Design",
  title: "뜨개러투게더",
  description:
    "뜨개 커뮤니티를 위한 서비스 기획·디자인 프로젝트. 함께 만들고 나누는 경험을 중심으로 정보 구조와 시각 시스템을 설계했습니다.",
};

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[1280px] px-6 py-section"
      aria-labelledby="projects-title"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="projects-title"
          className="text-[32px] font-semibold leading-tight tracking-tight text-on-dark"
        >
          Projects
        </h2>
        <p className="font-mono text-sm text-muted">
          <span className="text-primary">01</span> selected work
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <Link
            href={project.href}
            className="group flex h-full flex-col rounded-xl bg-card p-6 transition-colors hover:bg-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <article className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-primary">{project.year}</span>
                <span className="text-xs font-medium text-muted">{project.tag}</span>
              </div>
              <h3 className="text-xl font-semibold leading-snug text-on-dark">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                {project.description}
              </p>
              <div className="mt-6 border-t border-hairline pt-4">
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  상세 보기
                </span>
              </div>
            </article>
          </Link>
        </li>
      </ul>
    </section>
  );
}
