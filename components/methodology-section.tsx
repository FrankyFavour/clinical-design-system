const methodology = [
  {
    phase: "Intake",
    number: "01",
    title: "Research",
    description: "Deep dive discovery, stakeholder interviews, and competitive dissection. Identifying the pathology.",
    color: "medical-lime",
  },
  {
    phase: "Analysis",
    number: "02",
    title: "Diagnosis",
    description:
      "Identifying the core user problems and framing the architectural solution. Defining the treatment plan.",
    color: "medical-blue",
  },
  {
    phase: "Surgery",
    number: "03",
    title: "Implementation",
    description: "Iterative design sprints, high-fidelity prototyping, and motion studies. Precise intervention.",
    color: "medical-teal",
  },
  {
    phase: "Observation",
    number: "04",
    title: "Recovery",
    description: "Development handoff, QA testing, launch, and post-op analytics. Monitoring vitals.",
    color: "medical-violet",
  },
]

export function MethodologySection() {
  return (
    <section className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="text-center mb-16 md:mb-24">
        <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Standard Operating Procedure</div>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.1] font-light text-zinc-900 dark:text-medical-white">
          Methodology
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-medical-border-light dark:border-medical-border divide-y lg:divide-y-0 lg:divide-x divide-medical-border-light dark:divide-medical-border bg-white dark:bg-medical-black">
        {methodology.map((step) => (
          <div
            key={step.number}
            className="relative p-6 md:p-8 group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-[400ms] ease-clinical hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] overflow-hidden z-0 hover:z-10"
          >
            <div
              className={`absolute top-0 left-0 w-full h-0.5 bg-${step.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-clinical delay-[50ms]`}
            />
            <div className="h-full flex flex-col justify-start transition-transform duration-[400ms] ease-clinical group-hover:-translate-y-2">
              <div className="flex justify-between items-start mb-12 transform group-hover:-translate-y-1 transition-transform duration-[300ms] ease-clinical delay-[80ms]">
                <span
                  className={`px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 font-mono text-xs uppercase tracking-widest text-${step.color}`}
                >
                  {step.phase}
                </span>
                <span className="dark:text-zinc-800 group-hover:text-zinc-900 dark:group-hover:text-medical-white transition-colors duration-[400ms] ease-in-out text-4xl font-medium text-zinc-200 tracking-tight font-serif">
                  {step.number}
                </span>
              </div>
              <h3 className="leading-[1.2] dark:text-medical-white transform group-hover:-translate-y-1 transition-transform duration-[300ms] ease-clinical delay-[120ms] text-xl font-light text-zinc-900 tracking-tight font-serif mb-4">
                {step.title}
              </h3>
              <p className="leading-relaxed transform group-hover:-translate-y-1 transition-transform duration-[300ms] ease-clinical delay-[160ms] text-sm font-light text-zinc-500 font-sans">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
