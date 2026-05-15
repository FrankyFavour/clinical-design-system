import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: "CASE_001",
    category: "AFRICA UPLIFTING AFRICA",
    title: "Design Uprise Africa Website",
    description:
      "Designing an adaptive ecosystem where ideas evolve into scalable community impact. A study in resilience, growth, and human-centered innovation.",
    duration: "12 WEEKS",
    role: "PRODUCT DESIGNER",
    outcome: "+240% RETENTION",
    outcomeColor: "text-medical-lime",
    status: "PATENT PENDING",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3755ff81-ae9a-48a2-86ca-2a61d4be16f2_3840w.png",
    stat: "USER GROWTH",
    statValue: "▲ 42.5%",
    statColor: "text-medical-lime",
    link: "/uprise-case-study-page",
  },
  {
    id: "CASE_002",
    category: "AI SOLUTIONS X ENTERPRISE",
    title: "Pay With Play AI Solutions",
    description:
      "Designing the trust layer between users and digital transactions. A study in behavioral design, financial transparency, and frictionless interaction.",
    duration: "8 WEEKS",
    role: "USER RESEARCHER, STRATEGIST, UI INTERFACE DESIGNER",
    outcome: "PROTOTYPE VALIDATION",
    outcomeColor: "text-zinc-900 dark:text-medical-white",
    status: "DEPLOYED",
    statusColor: "text-zinc-500",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e105e6a-8dc9-48bb-ba5c-ab9ef2a87e4e_3840w.png",
    stat: "RELIABILITY",
    statValue: "99.9%",
    statColor: "text-medical-white",
    link: "#",
  },
  {
    id: "CASE_003",
    category: "GATAAMA GROUP",
    title: "Redesigned Gataama Website",
    description:
      "Redesigned the finicial experince to replace confusion with confidence transforming complex data into actionable clarity",
    duration: "16 WEEKS",
    role: "PRODUCT DESIGNER",
    outcome: "100% ADOPTION",
    outcomeColor: "text-medical-lime",
    status: "LIVE",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec1cde50-f04e-45f8-b5ec-4553d69d351f_3840w.png",
    stat: "SYSTEM EFFICIENCY",
    statValue: "▲ 68.4%",
    statColor: "text-medical-lime",
    link: "/gataama-case-study-page",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="cases" className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="flex items-end justify-between border-b border-medical-border-light dark:border-medical-border pb-6 mb-16">
        <h2 className="font-serif text-5xl tracking-tight text-zinc-900 dark:text-medical-white">Case Files</h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-medical-red" />
          <span className="font-mono text-xs text-medical-red tracking-wider">CONFIDENTIAL DATA // AUTH REQ</span>
        </div>
      </div>

      <div className="space-y-24">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group relative will-change-transform transform-gpu transition-all duration-[400ms] ease-clinical hover:-translate-y-[2px] hover:scale-[1.01] active:duration-[150ms] active:scale-[0.985]"
          >
            <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-sm">
              <div className="w-[150%] h-full bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mix-blend-overlay opacity-0 group-hover:animate-clinical-sweep" />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 opacity-[0.96] group-hover:opacity-100 transition-opacity duration-[400ms] ease-clinical relative z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] px-2 py-1 bg-medical-blue/10 text-medical-blue rounded-sm border border-medical-blue/20">
                  {study.id}
                </span>
                <span className="text-[10px] uppercase text-zinc-500 font-mono">{study.category}</span>
              </div>

              <h3 className="md:text-5xl dark:text-medical-white leading-[1.1] text-4xl text-zinc-900 tracking-tight font-serif">
                {study.title}
              </h3>

              <p className="dark:text-zinc-400 leading-relaxed text-zinc-600 font-sans">{study.description}</p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-b border-medical-border-light dark:border-medical-border py-6 my-2">
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1">DURATION</span>
                  <span className="font-mono text-xs text-zinc-900 dark:text-medical-white">{study.duration}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1">ROLE</span>
                  <span className="dark:text-medical-white text-xs text-zinc-900 font-mono">{study.role}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1">OUTCOME</span>
                  <span className={`font-mono text-xs ${study.outcomeColor}`}>{study.outcome}</span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1">STATUS</span>
                  <span className={`font-mono text-xs ${study.statusColor || "text-zinc-900 dark:text-medical-white"}`}>
                    {study.status}
                  </span>
                </div>
              </div>

              <a
                href={study.link}
                className="inline-flex items-center gap-3 dark:text-medical-white hover:text-[#2DD4BF] dark:hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical self-start text-xs text-zinc-900 font-mono mt-2"
              >
                [ OPEN FILE ] <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative z-10">
              <div className="aspect-[16/10] bg-zinc-200 dark:bg-zinc-900 border border-medical-border-light dark:border-medical-border rounded-sm overflow-hidden relative group-hover:border-medical-blue/30 transition-colors duration-[400ms] ease-clinical">
                <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:opacity-0 transition-opacity duration-[400ms] z-10 pointer-events-none" />

                <img
                  src={study.image}
                  alt={study.title}
                  className="transition-all duration-[400ms] ease-clinical group-hover:scale-[1.03] group-hover:contrast-[1.02] group-hover:brightness-[1.02] w-full h-full object-cover"
                />

                <div className="absolute bottom-4 right-4 bg-medical-black text-medical-white font-mono text-[10px] p-3 border border-medical-border shadow-lg z-20">
                  {study.stat}
                  <br />
                  <span className={`${study.statColor} text-lg`}>{study.statValue}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
