import type { Work } from "@/data/works";
import { Chip } from "@/components/m3";

export function CaseStudyPhases({
  work,
  idPrefix,
}: {
  work: Work;
  idPrefix: string;
}) {
  return (
    <div className="flex flex-col gap-14">
      {work.phases.map((phase, index) => (
        <section
          key={phase.id}
          id={`${idPrefix}${phase.id}`}
          className="scroll-mt-28"
          aria-labelledby={`${idPrefix}${phase.id}-title`}
        >
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-on-surface-variant">
              0{index + 1}
            </span>
            <Chip>{phase.label}</Chip>
            <span className="text-sm text-on-surface-variant">{phase.ko}</span>
          </div>
          <h3
            id={`${idPrefix}${phase.id}-title`}
            className="text-[1.75rem] font-medium leading-tight tracking-tight text-on-surface"
          >
            {phase.label}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-on-surface">{phase.summary}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {phase.points.map((point) => (
              <li
                key={point.title}
                className="rounded-[24px] border border-outline bg-surface p-5"
              >
                <h4 className="text-sm font-medium text-on-surface">{point.title}</h4>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">{point.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
