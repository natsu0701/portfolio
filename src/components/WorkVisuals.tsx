"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import thumbnail from "@/assets/tteugae/thumbnail.webp";
import poster1 from "@/assets/tteugae/poster-1.webp";
import poster2 from "@/assets/tteugae/poster-2.webp";
import screenHome from "@/assets/tteugae/screen-home.webp";
import screenBag from "@/assets/tteugae/screen-bag.webp";
import screenGauge from "@/assets/tteugae/screen-gauge.webp";
import { Icon } from "@/components/m3";

const screens: { src: StaticImageData; alt: string; caption: string }[] = [
  {
    src: screenHome,
    alt: "뜨개러투게더 홈 화면. 벤쿠버 가디건 진행 카드와 뜨개 도구가 보인다.",
    caption: "홈화면",
  },
  {
    src: screenBag,
    alt: "뜨개 가방 화면. 실 카테고리와 진행 중인 프로젝트 23%가 보인다.",
    caption: "뜨개 가방",
  },
  {
    src: screenGauge,
    alt: "게이지 계산 화면. 10cm 코 수와 목표 길이로 필요한 코를 계산한다.",
    caption: "게이지",
  },
];

export function WorkThumbnail({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={thumbnail}
      alt="뜨개러투게더 썸네일. 로고와 휴대폰 목업, 실뭉치 캐릭터가 있는 캡스톤 디자인."
      className={className}
      priority={priority}
      sizes="(min-width: 768px) 640px, 100vw"
    />
  );
}

export function WorkVisuals() {
  const [zoomed, setZoomed] = useState<StaticImageData | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      setZoomed(null);
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [zoomed]);

  return (
    <div className="flex flex-col gap-8">
      <figure>
        <WorkThumbnail className="h-auto w-full rounded-[24px]" priority />
        <figcaption className="mt-3 text-sm text-on-surface-variant">썸네일</figcaption>
      </figure>

      <figure>
        <Image
          src={poster1}
          alt="뜨개러투게더 포스터. 태블릿 가이드와 뜨개질의 진입장벽을 낮추는 서비스 소개."
          className="h-auto w-full rounded-[24px]"
          sizes="(min-width: 1120px) 1040px, 100vw"
        />
        <figcaption className="mt-3 text-sm text-on-surface-variant">포스터</figcaption>
      </figure>

      <figure className="overflow-hidden rounded-[24px] border border-outline bg-surface">
        <button
          type="button"
          className="block w-full text-left"
          onClick={() => setZoomed(poster2)}
        >
          <Image
            src={poster2}
            alt="뜨개러투게더 내용 포스터. 배경, 문제, 인사이트, 페르소나, 사용자 조사, 스타일 가이드, 더블 다이아몬드."
            className="h-auto w-full"
            sizes="(min-width: 1120px) 1040px, 100vw"
          />
        </button>
        <figcaption className="flex items-center justify-between gap-3 px-5 py-4 text-sm text-on-surface">
          <span>내용 포스터 · 리서치와 프로세스</span>
          <button
            type="button"
            className="inline-flex items-center gap-1 font-medium hover:underline"
            onClick={() => setZoomed(poster2)}
          >
            크게 보기
            <Icon name="arrow_outward" className="text-[18px]" />
          </button>
        </figcaption>
      </figure>

      <div>
        <p className="text-sm font-medium text-on-surface">화면</p>
        <ul className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {screens.map((screen, index) => (
            <li key={screen.caption} className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-auto">
              <figure className="overflow-hidden rounded-[24px] bg-surface-container">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 320px, 80vw"
                />
                <figcaption className="px-4 py-3 text-sm font-medium text-on-surface">
                  0{index + 1} {screen.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {zoomed ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/80 p-4 sm:p-8">
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-surface px-4 text-sm font-medium text-on-surface"
              onClick={() => setZoomed(null)}
            >
              닫기
              <Icon name="close" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            <Image
              src={zoomed}
              alt="뜨개러투게더 내용 포스터 원본 비율"
              className="mx-auto h-auto w-full max-w-[1100px]"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
