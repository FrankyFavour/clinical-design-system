const experiences = [
  {
    title: "Junior Designer",
    company: "ERILEARN ACADEMY",
    year: "2024",
    color: "zinc",
    description:
      "Early stage residency focused on mobile application anatomy. Assisted in the birth of one major iOS products.",
    tags: [],
  },
  {
    title: "Interface Designer",
    company: "GATAAMA GROUP",
    year: "2024",
    color: "medical-blue",
    description:
      "Designed a fully animated, editorial experience that reframes Africa as self-organising, capable, and globally confident.",
    tags: ["UI DESIGN", "INTERACTION DESIGN"],
  },
  {
    title: "Lead Product Designer",
    company: "PAY WITH PLAY ENTERPRISE",
    year: "2025",
    color: "medical-teal",
    description:
      "Lead the diagnostic team in restructuring legacy banking interfaces. Conducted extensive user biopsies to identify friction points and deployed a new atomic design system.",
    tags: ["LEADERSHIP", "STRATEGY", "USER RESEARCH"],
  },
  {
    title: "Senior Product Systems Designer",
    company: "FREELANCE",
    year: "2025-PRESENT",
    color: "medical-violet",
    description:
      "Led early-stage interface diagnostics for emerging digital products, focusing on usability architecture and modular design thinking. Established foundational UX systems later adopted across multiple client platforms.",
    tags: ["PRODUCT_ARCHITECTURE", "UX_STRATEGY", "SYSTEMS_THINKING"],
  },
]

export function ExperienceSection() {
  return (
    <section className="mb-32 max-w-4xl mx-auto reveal transition-all duration-700 ease-clinical">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">CLINICAL HISTORY</span>
      </div>

      <div className="border-medical-border-light dark:border-medical-border md:ml-8 border-l ml-4 pb-8 relative space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="md:pl-16 group pl-8 relative">
            <div
              className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full border border-zinc-400 dark:border-zinc-500 bg-white dark:bg-medical-black group-hover:bg-${exp.color} group-hover:border-${exp.color} transition-colors duration-300 shadow-[0_0_0_4px_#f5f5f7] dark:shadow-[0_0_0_4px_#0a0a0a]`}
            />
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 dark:text-medical-white">{exp.title}</h3>
              <div className="inline-flex items-center border border-medical-border-light dark:border-medical-border rounded-full px-3 py-1 bg-zinc-100 dark:bg-zinc-900/50">
                <span className={`text-[10px] ${exp.color === "zinc" ? "text-zinc-500" : `text-${exp.color}`} font-mono`}>
                  {exp.company} • {exp.year}
                </span>
              </div>
            </div>
            <p className="dark:text-zinc-400 leading-relaxed text-zinc-600 font-sans max-w-2xl mb-4">{exp.description}</p>
            {exp.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
