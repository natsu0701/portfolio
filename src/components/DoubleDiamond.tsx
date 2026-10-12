import type { PhaseId } from "@/data/works";

const phases: { id: PhaseId; label: string; x: number }[] = [
  { id: "discover", label: "Discover", x: 80 },
  { id: "define", label: "Define", x: 240 },
  { id: "ideate", label: "Ideate", x: 400 },
  { id: "solution", label: "Solution", x: 560 },
];

export function DoubleDiamond({ active }: { active?: PhaseId }) {
  const firstActive = active === "discover" || active === "define";
  const secondActive = active === "ideate" || active === "solution";

  return (
    <figure className="w-full">
      <svg viewBox="0 0 640 120" className="h-auto w-full" role="img">
        <title>Discover, Define, Ideate, Solution으로 이어지는 더블 다이아몬드</title>
        <path
          d="M80 60 L160 16 L240 60 L160 104 Z"
          fill={firstActive ? "#D0BCFF" : "#F4F4F5"}
          stroke="#000"
          strokeWidth="1.5"
        />
        <path
          d="M400 60 L480 16 L560 60 L480 104 Z"
          fill={secondActive ? "#D0BCFF" : "#F4F4F5"}
          stroke="#000"
          strokeWidth="1.5"
        />
        {phases.map((phase) => {
          const selected = active === phase.id;
          return (
            <circle
              key={phase.id}
              cx={phase.x}
              cy="60"
              r={selected ? 7 : 4.5}
              fill={selected ? "#000" : "#fff"}
              stroke="#000"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
      <figcaption className="mt-1 grid grid-cols-4 text-center text-[11px] font-medium tracking-wide sm:text-xs">
        {phases.map((phase) => (
          <span
            key={phase.id}
            className={active === phase.id ? "text-on-surface" : "text-on-surface-variant"}
          >
            {phase.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
