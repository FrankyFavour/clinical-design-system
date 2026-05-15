import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center text-center reveal transition-all duration-700 ease-clinical delay-150">
      <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-zinc-900 dark:text-medical-white mb-6">
        Ready for
        <br />
        Consultation?
      </h2>
      <p className="font-sans text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl">
        Available for select projects and long-term system architecture. Let&apos;s diagnose your product&apos;s
        potential.
      </p>

      <button className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <span className="relative z-10 flex items-center gap-3">
          INITIATE CONTACT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-zinc-800 dark:bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-clinical" />
      </button>

      <div className="mt-8 flex gap-4 font-mono text-[10px] text-zinc-500">
        <span>RESPONSE TIME &lt; 24HRS</span>
        <span>|</span>
        <span>ENCRYPTION: ENABLED</span>
      </div>
    </section>
  )
}
