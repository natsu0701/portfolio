export type PhaseId = "discover" | "define" | "ideate" | "solution";

export type Phase = {
  id: PhaseId;
  label: string;
  ko: string;
  summary: string;
  points: { title: string; body: string }[];
};

export type Work = {
  slug: string;
  year: string;
  tag: string;
  title: string;
  summary: string;
  role: string;
  focus: string;
  tools: string[];
  href: string;
  phases: Phase[];
};

export const works: Work[] = [
  {
    slug: "tteugae-together",
    year: "2025",
    tag: "Service Design",
    title: "뜨개러투게더",
    summary:
      "뜨개러와 소통하며 뜨개질의 진입장벽을 낮추고, 기록 관리를 돕는 뜨개 보조 애플리케이션.",
    role: "기획 · UI/UX 디자인",
    focus: "커뮤니티 · 온보딩 · 콘텐츠 큐레이션",
    tools: ["Figma", "Photoshop", "Illustrator"],
    href: "/projects/tteugae-together",
    phases: [
      {
        id: "discover",
        label: "Discover",
        ko: "발견",
        summary:
          "혼자 뜨개를 시작하는 사람과 숙련된 뜨개러가 서로 만나지 못하는 지점을 먼저 살펴봤습니다.",
        points: [
          {
            title: "흩어진 정보",
            body: "패턴, 도구, 질문의 답이 여러 채널에 나뉘어 있어 시작의 문턱이 높았습니다.",
          },
          {
            title: "연결의 부재",
            body: "초심자와 숙련자가 같은 흐름 안에서 경험을 나누기 어려운 구조였습니다.",
          },
          {
            title: "관찰한 니즈",
            body: "패턴을 찾고, 진행을 기록하고, 커뮤니티와 교류하는 일이 하나의 경험으로 이어져야 했습니다.",
          },
        ],
      },
      {
        id: "define",
        label: "Define",
        ko: "정의",
        summary:
          "리서치에서 보인 니즈를 핵심 목표와 과업으로 좁혀, 서비스가 풀어야 할 문제를 문장으로 고정했습니다.",
        points: [
          {
            title: "설계 목표",
            body: "함께 만들고 나누는 경험을 중심으로, 뜨개를 시작하는 진입 장벽을 낮춥니다.",
          },
          {
            title: "핵심 과업",
            body: "패턴 탐색, 진행 기록, 커뮤니티 교류를 끊기지 않는 하나의 흐름으로 묶습니다.",
          },
          {
            title: "범위",
            body: "온보딩, 콘텐츠 큐레이션, 커뮤니티를 이번 설계의 초점으로 두었습니다.",
          },
        ],
      },
      {
        id: "ideate",
        label: "Ideate",
        ko: "발상",
        summary:
          "정의된 시나리오를 화면의 위계로 풀어, 정보가 따뜻하면서도 읽히도록 조형을 탐색했습니다.",
        points: [
          {
            title: "시나리오 고정",
            body: "핵심 사용자 흐름을 먼저 정한 뒤, 그 흐름을 받치는 화면만 구체화했습니다.",
          },
          {
            title: "시각 계층",
            body: "카드, 리스트, 디테일 화면의 정보 밀도를 나눠 탐색과 몰입을 구분했습니다.",
          },
          {
            title: "브랜드 톤",
            body: "따뜻한 인상을 유지하면서도 정보가 먼저 읽히도록 절제된 조형 언어를 골랐습니다.",
          },
        ],
      },
      {
        id: "solution",
        label: "Solution",
        ko: "해결",
        summary:
          "콘셉트와 화면이 어긋나지 않도록 정보 구조와 시각 시스템을 하나의 경험으로 정리했습니다.",
        points: [
          {
            title: "시각 시스템",
            body: "절제된 컬러와 타이포그래피로 브랜드 톤과 정보 위계를 함께 고정했습니다.",
          },
          {
            title: "경험의 뼈대",
            body: "패턴 탐색에서 진행 기록, 커뮤니티 교류까지 같은 구조 안에서 이어지게 설계했습니다.",
          },
          {
            title: "역할과 도구",
            body: "기획과 UI/UX 디자인을 맡았고, Figma · Photoshop · Illustrator로 산출물을 만들었습니다.",
          },
        ],
      },
    ],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
