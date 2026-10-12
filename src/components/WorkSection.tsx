"use client";

import { useCallback, useState } from "react";
import { works, type Work } from "@/data/works";
import { CaseStudyDialog } from "@/components/CaseStudyDialog";
import { Chip, Icon } from "@/components/m3";

export function WorkSection() {
  const [selected, setSelected] = useState<Work | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="work" className="bg-surface-container" aria-labelledby="work-title">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium text-on-surface-variant">Selected work</p>
            <h2
              id="work-title"
              className="text-[2rem] font-medium leading-tight tracking-tight text-on-surface md:text-4xl"
            >
              Work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-on-surface-variant">
            카드를 누르면 Discover, Define, Ideate, Solution 순서로 케이스 스터디를 읽을 수 있습니다.
          </p>
        </div>

        <ul className="grid gap-6">
          {works.map((work) => (
            <li key={work.slug}>
              <button
                type="button"
                onClick={() => setSelected(work)}
                className="group flex w-full flex-col overflow-hidden rounded-[24px] bg-surface text-left shadow-[0_1px_2px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] transition hover:shadow-[0_2px_6px_rgba(0,0,0,0.16),0_8px_24px_rgba(0,0,0,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:flex-row"
              >
                <div className="relative min-h-56 flex-1 bg-surface-container md:min-h-72">
                  <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-primary" />
                  <div className="absolute bottom-8 left-8 right-8 rounded-[20px] bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.12)] md:right-16">
                    <p className="text-xs font-medium text-on-surface-variant">Pattern · Progress · Community</p>
                    <p className="mt-2 text-base font-medium text-on-surface">함께 만들고 나누는 흐름</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <Chip>{work.tag}</Chip>
                    <span className="text-sm text-on-surface-variant">{work.year}</span>
                  </div>
                  <h3 className="text-2xl font-medium leading-snug tracking-tight text-on-surface">
                    {work.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-on-surface-variant">{work.summary}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-on-surface">
                    케이스 스터디
                    <Icon
                      name="arrow_forward"
                      className="text-[20px] transition group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selected ? <CaseStudyDialog work={selected} onClose={close} /> : null}
    </section>
  );
}
