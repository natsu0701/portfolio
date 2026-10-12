"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { PhaseId, Work } from "@/data/works";
import { CaseStudyPhases } from "@/components/CaseStudyPhases";
import { DoubleDiamond } from "@/components/DoubleDiamond";
import { Chip, FilledLink, Icon, OutlinedLink } from "@/components/m3";

export function CaseStudyDialog({
  work,
  onClose,
}: {
  work: Work;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<PhaseId>(work.phases[0].id);

  useEffect(() => {
    const panel = panelRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      ) ?? [];

    const nodes = focusable();
    nodes[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = [...focusable()];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const sections = work.phases
      .map((phase) => root.querySelector<HTMLElement>(`#case-${phase.id}`))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id.replace("case-", "") as PhaseId | undefined;
        if (id) setActive(id);
      },
      { root, rootMargin: "-15% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [work]);

  function jumpTo(id: PhaseId) {
    const root = scrollerRef.current;
    const section = root?.querySelector<HTMLElement>(`#case-${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        tabIndex={-1}
        className="absolute inset-0 bg-black/40"
        aria-label="케이스 스터디 닫기"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="m3-dialog-panel relative flex max-h-[100dvh] w-full flex-col overflow-hidden bg-surface shadow-[0_8px_28px_rgba(0,0,0,0.22)] sm:max-h-[min(880px,calc(100dvh-48px))] sm:max-w-[880px] sm:rounded-[28px]"
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-7">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Chip>{work.tag}</Chip>
              <span className="text-sm text-on-surface-variant">{work.year}</span>
            </div>
            <h2
              id={titleId}
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight tracking-tight text-on-surface"
            >
              {work.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-on-surface sm:text-base sm:leading-7">
              {work.summary}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-on-surface hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={onClose}
            aria-label="닫기"
          >
            <Icon name="close" />
          </button>
        </div>

        <div ref={scrollerRef} className="mt-5 min-h-0 flex-1 overflow-y-auto">
          <div className="px-5 sm:px-8">
            <dl className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Role", value: work.role },
                { label: "Focus", value: work.focus },
                { label: "Tools", value: work.tools.join(" · ") },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-surface-container px-4 py-4">
                  <dt className="text-xs font-medium text-on-surface-variant">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium leading-6 text-on-surface">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <DoubleDiamond active={active} />
            </div>
          </div>

          <div className="sticky top-0 z-10 mt-4 border-y border-outline bg-surface/95 px-5 py-3 backdrop-blur sm:px-8">
            <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="더블 다이아몬드 단계">
              {work.phases.map((phase) => {
                const selected = active === phase.id;
                return (
                  <button
                    key={phase.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => jumpTo(phase.id)}
                    className={`h-8 shrink-0 rounded-lg border px-3 text-xs font-medium ${
                      selected
                        ? "border-primary bg-primary text-on-primary"
                        : "border-primary bg-surface text-on-surface hover:bg-black/5"
                    }`}
                  >
                    {phase.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10">
            <CaseStudyPhases work={work} idPrefix="case-" />
            <div className="mt-12 flex flex-wrap gap-3 border-t border-outline pt-6">
              <OutlinedLink href={work.href} onClick={onClose}>
                페이지로 보기
                <Icon name="arrow_outward" className="text-[20px]" />
              </OutlinedLink>
              <FilledLink href="/#contact" onClick={onClose}>
                연락하기
              </FilledLink>
            </div>
            <p className="mt-4 text-xs text-on-surface-variant">
              <Link href={work.href} className="underline" onClick={onClose}>
                {work.title}
              </Link>
              의 전체 케이스 스터디로 이동합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
