export function AboutSection() {
  return (
    <section className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-clinical -z-10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-medical-border-light dark:border-medical-border bg-zinc-200 dark:bg-zinc-900">
            {/* Corner markers */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-zinc-500 dark:border-zinc-400 z-20" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-500 dark:border-zinc-400 z-20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-zinc-500 dark:border-zinc-400 z-20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-zinc-500 dark:border-zinc-400 z-20" />

            <span className="absolute top-4 left-8 font-mono text-[10px] text-medical-teal z-20 mix-blend-difference">
              SCAN_ID: 8042
            </span>
            <span className="absolute top-4 right-8 font-mono text-[10px] text-medical-teal z-20 mix-blend-difference">
              CORTEX_LOGIC
            </span>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b2a6e4d-0fef-46c0-a94c-a0e61b175358_3840w.jpg"
                alt="Patient Profile"
                className="group-hover:scale-[1.03] transition-transform duration-700 ease-clinical w-full h-full object-cover"
              />
            </div>

            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-overlay opacity-30"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 L20,50 L25,40 L30,60 L35,20 L40,80 L45,50 L100,50"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                className="text-white"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="inline-block px-3 py-1 border border-medical-border-light dark:border-medical-border rounded-full self-start">
            <span className="text-[10px] uppercase dark:text-zinc-400 text-zinc-500 tracking-widest font-mono">
              [ MY PROFILE ]
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-4xl md:text-5xl tracking-tight text-zinc-900 dark:text-medical-white">
              Precision in Structure.
            </h3>
            <h4 className="md:text-4xl dark:text-zinc-400 text-3xl italic text-zinc-500 font-serif">
              Chaos in Expression.
            </h4>
          </div>

          <p className="dark:text-zinc-300 leading-relaxed text-lg text-zinc-600 font-sans">
            I approach design not as decoration, but as a surgical intervention. Every pixel is a cell, every
            interaction a neural pathway. My background in clinical physiology allows me to dissect complex problems and
            reconstruct them into intuitive, high-performance digital organisms.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-6 border border-medical-border-light dark:border-medical-border rounded-sm hover:border-medical-teal/30 dark:hover:border-medical-teal/50 transition-colors duration-300">
              <span className="block dark:text-medical-white text-3xl text-zinc-900 font-serif mb-1">4+ Years</span>
              <span className="uppercase text-xs text-zinc-500 font-mono">design Practice</span>
            </div>
            <div className="p-6 border border-medical-border-light dark:border-medical-border rounded-sm hover:border-medical-teal/30 dark:hover:border-medical-teal/50 transition-colors duration-300">
              <span className="block dark:text-medical-white text-3xl text-zinc-900 font-serif mb-1">20+ Ops</span>
              <span className="uppercase text-xs text-zinc-500 font-mono">Successful Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
