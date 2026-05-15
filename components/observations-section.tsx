import { ArrowUpRight } from "lucide-react"

const observations = [
  {
    date: "OCT 12, 23",
    title: "The user interface as a placebo effect.",
    description:
      "Does a loading spinner reduce anxiety? Investigating the psychology of waiting in digital products and the perception of speed.",
  },
  {
    date: "SEP 04, 23",
    title: "Systemic failure in minimal design.",
    description:
      "When reduction becomes obstruction. Why data density is making a comeback in professional tools and dashboard design.",
  },
  {
    date: "AUG 11, 23",
    title: "Biomimicry in navigation patterns.",
    description:
      "Looking at how organic cells organize information and applying it to complex mega-menu structures.",
  },
]

export function ObservationsSection() {
  return (
    <section className="mb-32 max-w-4xl mx-auto reveal transition-all duration-700 ease-clinical">
      <div className="text-center mb-16">
        <span className="font-mono text-[10px] text-medical-teal uppercase tracking-widest block mb-4">
          FIELD NOTES &amp; OBSERVATIONS
        </span>
      </div>

      <div className="flex flex-col">
        {observations.map((obs, index) => (
          <a
            key={index}
            href="#"
            className="group py-8 border-b border-medical-border-light dark:border-medical-border flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-zinc-100 dark:hover:bg-zinc-900/20 transition-colors duration-300 px-4 -mx-4 rounded-sm"
          >
            <span className="font-mono text-xs text-zinc-500 w-32 shrink-0">{obs.date}</span>
            <div className="flex-1">
              <h3 className="font-serif text-2xl text-zinc-900 dark:text-medical-white mb-2 group-hover:text-[#2DD4BF] dark:group-hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical">
                {obs.title}
              </h3>
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400">{obs.description}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical shrink-0" />
          </a>
        ))}
      </div>
    </section>
  )
}
