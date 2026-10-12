const skills = [
  { name: "Photoshop", level: 90, label: "높음", note: "이미지 보정 · 합성 · 비주얼 제작" },
  { name: "Illustrator", level: 60, label: "중간", note: "벡터 그래픽 · 아이콘 · 레이아웃" },
  { name: "After Effects", level: 75, label: "중상", note: "모션 그래픽 · 영상 연출" },
  { name: "InDesign", level: 70, label: "중상", note: "편집 디자인 · 인쇄물" },
  { name: "Figma", level: 80, label: "중상", note: "UI 설계 · 프로토타입" },
  { name: "Blender", level: 70, label: "중상", note: "3D 모델링 · 렌더링" },
];

export function About() {
  return (
    <section id="about" className="bg-surface" aria-labelledby="about-title">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:py-28">
        <p className="mb-3 text-sm font-medium text-on-surface-variant">Profile</p>
        <h2
          id="about-title"
          className="mb-10 text-[2rem] font-medium leading-tight tracking-tight text-on-surface md:text-4xl"
        >
          About
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-7 text-on-surface">
            <p>
              한다영은 시각영상디자인을 전공하며 기획과 시각 표현을 연결하는
              작업을 해왔습니다. 콘셉트 정의, 스토리보드, 화면 구성까지 한 흐름으로
              다루며 메시지가 명확히 전달되는 결과물을 목표로 합니다.
            </p>
            <p>
              전공 과정에서 영상·그래픽·공간 미디어를 폭넓게 경험했고, 문제의
              맥락을 먼저 정리한 뒤 적합한 매체와 조형 언어를 선택하는 방식으로
              프로젝트를 진행합니다.
            </p>
          </div>

          <div className="rounded-[24px] border border-outline bg-surface p-6">
            <h3 className="mb-6 text-base font-medium text-on-surface">Skills</h3>
            <ul className="space-y-5">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-on-surface">{skill.name}</span>
                    <span className="text-xs font-medium text-on-surface-variant">{skill.label}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container" role="presentation">
                    <div className="h-full bg-on-surface" style={{ width: `${skill.level}%` }} />
                  </div>
                  <p className="mt-2 text-xs leading-5 text-on-surface-variant">{skill.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
