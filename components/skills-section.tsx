import { Pen, Code, TestTube, Activity } from "lucide-react"

const colorClasses = {
  teal: {
    icon: "text-teal-400",
    bar: "bg-teal-400",
    barDim: ["bg-teal-400/20", "bg-teal-400/40", "bg-teal-400/60", "bg-teal-400/80", "bg-teal-400"],
    border: "hover:border-teal-400/30",
    topLine: "bg-teal-400",
  },
  blue: {
    icon: "text-blue-400",
    bar: "bg-blue-400",
    barDim: ["bg-blue-400/20", "bg-blue-400/40", "bg-blue-400/60", "bg-blue-400/80", "bg-blue-400"],
    border: "hover:border-blue-400/30",
    topLine: "bg-blue-400",
  },
  lime: {
    icon: "text-lime-400",
    bar: "bg-lime-400",
    barDim: ["bg-lime-400/20", "bg-lime-400/40", "bg-lime-400/60", "bg-lime-400/80", "bg-lime-400"],
    border: "hover:border-lime-400/30",
    topLine: "bg-lime-400",
  },
  violet: {
    icon: "text-violet-400",
    bar: "bg-violet-400",
    barDim: ["bg-violet-400/20", "bg-violet-400/40", "bg-violet-400/60", "bg-violet-400/80", "bg-violet-400"],
    border: "hover:border-violet-400/30",
    topLine: "bg-violet-400",
  },
}

const skills = [
  {
    id: "TOOL_SET_01",
    title: "User Interface Design",
    icon: Pen,
    color: "teal" as const,
    bars: [40, 60, 80, 100, 90],
    animateIndex: 3,
    details: [
      { label: "FIGMA", value: "V125.1.2" },
      { label: "DESIGN SYSTEMS", value: "ATOMIC" },
      { label: "PROTOTYPING", value: "HIGH-FI" },
    ],
  },
  {
    id: "TOOL_SET_02",
    title: "Basic Frontend Anatomy",
    icon: Code,
    color: "blue" as const,
    bars: [100, 80, 60, 40, 30],
    animateIndex: 0,
    details: [
      { label: "REACT/VUE", value: "MODULAR" },
      { label: "TAILWIND", value: "UTILITY" },
      { label: "WEBGL", value: "THREE.JS" },
    ],
  },
  {
    id: "TOOL_SET_03",
    title: "User Diagnostics",
    icon: TestTube,
    color: "lime" as const,
    bars: [50, 70, 90, 80, 60],
    animateIndex: 3,
    details: [
      { label: "TESTING", value: "A/B" },
      { label: "ANALYTICS", value: "DATA" },
      { label: "HEURISTICS", value: "AUDIT" },
    ],
  },
  {
    id: "TOOL_SET_04",
    title: "Interaction Design",
    icon: Activity,
    color: "violet" as const,
    bars: [30, 50, 80, 60, 100],
    animateIndex: 1,
    details: [
      { label: "AFTER EFFECTS", value: "KEYFRAME" },
      { label: "FIGMA", value: "MOTION" },
      { label: "LOTTIE", value: "JSON" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="lab" className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="flex items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-12">
        <h2 className="dark:text-white text-4xl text-zinc-900 tracking-tight font-serif">Skill sets</h2>
        <span className="font-mono text-xs text-zinc-500">SYSTEM CALIBRATION: 99.8%</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon
          const colors = colorClasses[skill.color]
          return (
            <div
              key={skill.id}
              className={`group relative p-6 bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-sm cursor-pointer transition-all duration-250 hover:-translate-y-1 ${colors.border} active:scale-[0.98]`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-[1px] ${colors.topLine} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 will-change-transform transform-gpu`}
              />

              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-[10px] text-zinc-500">{skill.id}</span>
                <Icon className={`w-4 h-4 ${colors.icon} transition-transform duration-250 group-hover:scale-110`} />
              </div>

              <h3 className="dark:text-white text-lg font-medium text-zinc-900 font-sans mb-6">{skill.title}</h3>

              <div className="flex items-end gap-1 h-8 mb-8">
                {skill.bars.map((height, index) => (
                  <div
                    key={index}
                    className={`w-1.5 ${index === skill.animateIndex ? colors.bar : colors.barDim[index]} ${
                      index === skill.animateIndex ? "animate-pulse" : ""
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                {skill.details.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={`flex justify-between ${
                      index < skill.details.length - 1
                        ? "border-b border-zinc-200 dark:border-zinc-800 pb-1"
                        : ""
                    }`}
                  >
                    <span className="text-zinc-500">{detail.label}</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}