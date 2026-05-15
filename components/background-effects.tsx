interface BackgroundEffectsProps {
  isGridActive: boolean
}

export function BackgroundEffects({ isGridActive }: BackgroundEffectsProps) {
  return (
    <>
      {/* BACKGROUND ENHANCEMENT SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-[-5] ambient-depth" />
      <div className="fixed inset-0 pointer-events-none z-[-4] light-response" />
      <div className="fixed inset-0 pointer-events-none z-[-3] micro-medical-texture" />

      <div className="fixed inset-0 pointer-events-none z-[-2] bg-[#0f172a]/[0.03] dark:bg-black/[0.04] mix-blend-multiply dark:mix-blend-normal transition-colors duration-[400ms]" />

      {/* GLOBAL GRID WITH TOGGLE */}
      <div
        className={`fixed inset-0 bg-grid-pattern pointer-events-none z-[-1] transition-opacity duration-[500ms] ${
          isGridActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70 dark:opacity-100 transition-opacity duration-[400ms]"
        aria-hidden="true"
      >
        <div className="absolute -inset-[10%] w-[120%] h-[120%] noise-texture" />
        <div className="absolute inset-0 crt-scanlines" />
        <div className="absolute inset-x-0 h-[25vh] scan-line" />
      </div>
    </>
  )
}
