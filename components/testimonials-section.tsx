const testimonials = [
  {
    quote:
      "The level of precision in the deliverables was unlike anything I've seen. Treated our chaotic data problem like a delicate surgery.",
    name: "James Alaba Alabi",
    title: "CEO @ HONESTSCHOLARS",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f288f3a-2317-4499-9e16-18c677590876_3840w.jpg",
  },
  {
    quote:
      "An absolutely flawless execution of our complex workflow. The UI feels almost organic in how it adapts to user needs.",
    name: "Mr Jeffery Okpala",
    title: "PAY WITH PLAY ENTERPRISE",
    initials: "ER",
  },
  {
    quote:
      "A rare combination of artistic vision and systemic thinking. The design system we received is future-proof and biologically scalable.",
    name: "Mr Brian Tesfa",
    title: "CEO @ GATAAMA GROUP",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2f9f0d-adb5-4455-9a8c-944e7faa3720_3840w.png",
  },
  {
    quote:
      "They diagnosed interface bottlenecks we didn't even know we had. The resulting conversion uplift was immediate and substantial.",
    name: "Olumide David Badru",
    title: "CEO @ GRADEVAULT",
    initials: "MC",
  },
]

function TestimonialCard({
  quote,
  name,
  title,
  image,
  initials,
}: {
  quote: string
  name: string
  title: string
  image?: string
  initials?: string
}) {
  return (
    <div className="w-[320px] md:w-[450px] shrink-0 p-8 md:p-12 bg-zinc-100 dark:bg-[#080808] border border-medical-border-light dark:border-medical-border rounded-sm flex flex-col justify-between min-h-[280px] hover:border-medical-teal/30 transition-colors duration-[400ms] ease-clinical cursor-pointer group">
      <p className="font-sans text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 group-hover:text-zinc-900 dark:group-hover:text-medical-white transition-colors duration-300">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        {image ? (
          <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-800 border border-medical-border-light dark:border-medical-border overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-800 border border-medical-border-light dark:border-medical-border overflow-hidden flex items-center justify-center font-serif text-zinc-500">
            {initials}
          </div>
        )}
        <div>
          <span className="block dark:text-medical-white text-sm font-medium text-zinc-900 font-sans">{name}</span>
          <span className="block text-[10px] uppercase text-zinc-500 font-mono">{title}</span>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="mb-32 reveal transition-all duration-700 ease-clinical">
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl tracking-tight text-zinc-900 dark:text-medical-white">Peer Validation</h2>
      </div>

      <div
        className="w-full overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-clinical-marquee hover:[animation-play-state:paused]">
          {/* SET 1 */}
          <div className="flex gap-6 pr-6 shrink-0">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          {/* SET 2: Duplicate for seamless loop */}
          <div className="flex gap-6 shrink-0 pr-6" aria-hidden="true">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`dup-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
