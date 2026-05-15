export function Footer() {
  return (
    <footer
      id="status"
      className="border-t border-medical-border-light dark:border-medical-border bg-white dark:bg-medical-black relative z-10 transition-colors duration-300"
    >
      <div className="border-b border-medical-border-light dark:border-medical-border py-3 overflow-hidden">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 font-mono text-[10px] text-zinc-500 uppercase tracking-widest whitespace-nowrap overflow-x-auto">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-medical-lime animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span className="ml-8">PHYSIOxDESIGNS 2026</span>
          <span className="ml-8">
            LAST UPDATE: <span className="text-zinc-900 dark:text-medical-white">CURRENT</span>
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-medical-teal shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
            <span className="font-mono text-xs font-medium tracking-wider text-zinc-800 dark:text-zinc-200">
              PHYSIOxDESIGNS
            </span>
          </div>
          <p className="font-sans text-xs text-zinc-500 max-w-xs mt-2 leading-relaxed">
            Clinical precision meets digital product design. Building systemic biological architectures, not just
            screens.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-12 font-mono text-[10px] text-zinc-500">
          <div className="flex flex-col gap-3">
            <span className="text-zinc-900 dark:text-medical-white mb-1 uppercase tracking-widest">Index</span>
            <a href="#diagnosis" className="hover:text-medical-teal dark:hover:text-medical-teal transition-colors duration-200">
              DIAGNOSIS
            </a>
            <a href="#cases" className="hover:text-medical-teal dark:hover:text-medical-teal transition-colors duration-200">
              CASES
            </a>
            <a href="#lab" className="hover:text-medical-teal dark:hover:text-medical-teal transition-colors duration-200">
              LAB
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-900 dark:text-medical-white mb-1 uppercase tracking-widest">Network</span>
            <a href="#" className="hover:text-medical-blue dark:hover:text-medical-blue transition-colors duration-200">
              LINKEDIN
            </a>
            <a href="#" className="hover:text-medical-blue dark:hover:text-medical-blue transition-colors duration-200">
              TWITTER // X
            </a>
            <a href="#" className="hover:text-medical-blue dark:hover:text-medical-blue transition-colors duration-200">
              READ.CV
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-900 dark:text-medical-white mb-1 uppercase tracking-widest">Legal</span>
            <a href="#" className="hover:text-medical-violet dark:hover:text-medical-violet transition-colors duration-200">
              PRIVACY
            </a>
            <a href="#" className="hover:text-medical-violet dark:hover:text-medical-violet transition-colors duration-200">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
