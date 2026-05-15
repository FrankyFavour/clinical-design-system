interface LiveDiagnosticsSectionProps {
  isGridActive: boolean
  setIsGridActive: (value: boolean) => void
}

export function LiveDiagnosticsSection({ isGridActive, setIsGridActive }: LiveDiagnosticsSectionProps) {
  return (
    <section className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-100 dark:bg-[#050505] border border-medical-border-light dark:border-medical-border rounded-xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-medical-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-medical-red animate-pulse" />
            <span className="font-mono text-[10px] text-medical-red tracking-widest uppercase">Live Feed</span>
          </div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-zinc-900 dark:text-medical-white mb-4">
              Live Diagnostics
            </h2>
            <p className="font-sans text-sm text-zinc-500">
              Interact with the core system parameters to visualize the design philosophy in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
            <div className="space-y-8 border-r-0 md:border-r border-medical-border-light dark:border-medical-border md:pr-16">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">INTERFACE DENSITY</span>
                  <span className="font-mono text-[10px] text-medical-white bg-medical-black px-1 py-0.5 rounded border border-medical-border">
                    75%
                  </span>
                </div>
                <div className="relative w-full h-1 bg-zinc-300 dark:bg-zinc-800 rounded-full cursor-pointer group">
                  <div className="absolute top-0 left-0 h-full bg-medical-teal rounded-full w-[75%] transition-all duration-300" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-3 h-3 bg-white border border-zinc-300 dark:border-transparent rounded-full shadow-sm group-hover:scale-125 transition-transform duration-200" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">COGNITIVE LOAD</span>
                  <span className="font-mono text-[10px] text-medical-white bg-medical-black px-1 py-0.5 rounded border border-medical-border">
                    32%
                  </span>
                </div>
                <div className="relative w-full h-1 bg-zinc-300 dark:bg-zinc-800 rounded-full cursor-pointer group">
                  <div className="absolute top-0 left-0 h-full bg-medical-blue rounded-full w-[32%] transition-all duration-300" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[32%] w-3 h-3 bg-white border border-zinc-300 dark:border-transparent rounded-full shadow-sm group-hover:scale-125 transition-transform duration-200" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-center pb-6 border-b border-medical-border-light dark:border-medical-border">
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">GRID OVERLAY</span>
                <button
                  onClick={() => setIsGridActive(!isGridActive)}
                  className={`w-10 h-5 rounded-full relative cursor-pointer border transition-colors duration-300 ${
                    isGridActive
                      ? "bg-medical-teal/20 border-medical-teal/30"
                      : "bg-zinc-300 dark:bg-zinc-700 border-transparent"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full shadow-sm transition-all duration-300 ${
                      isGridActive ? "right-0.5 bg-medical-teal" : "left-0.5 bg-zinc-400"
                    }`}
                  />
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">SYSTEM ALERT</span>
                <div className="flex gap-1 h-4">
                  <div className="w-1.5 h-full bg-medical-red" />
                  <div className="w-1.5 h-full bg-medical-red opacity-50" />
                  <div className="w-1.5 h-full bg-medical-red opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
