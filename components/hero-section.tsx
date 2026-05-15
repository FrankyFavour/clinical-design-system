"use client"

import { useState, useEffect } from "react"

const words = ["Precision", "Systems", "Logic", "Purpose", "Empathy"]

export function HeroSection() {
  const [displayText, setDisplayText] = useState("Precision")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1)

      timeout = setTimeout(
        () => setDisplayText(nextText),
        isDeleting ? 60 : 120
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section
      id="diagnosis"
      className="min-h-[85vh] flex flex-col justify-center relative mb-32 reveal transition-all duration-700 ease-clinical opacity-100 translate-y-0"
    >
      {/* Decorative circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[0.5px] border-zinc-200 dark:border-white/5 pointer-events-none opacity-50 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-[0.5px] border-zinc-200 dark:border-white/5 scale-75" />
        <div className="w-full h-full absolute rounded-full border-[0.5px] border-zinc-200 dark:border-white/5 scale-50" />
      </div>

      <div className="flex items-center gap-3 mb-12">
        <div className="w-1.5 h-1.5 bg-medical-lime rounded-sm animate-pulse" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-medical-lime">
          Initial Diagnosis: Critical Creativity
        </span>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 z-10">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[1.1] font-normal text-zinc-900 dark:text-medical-white">
          Design with
        </h1>
        <div className="h-[80px] md:h-[120px]">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[1.1] font-light italic text-zinc-500 dark:text-zinc-400">
            <span className="cursor-blink">{displayText}</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 border-medical-border-light dark:border-medical-border border-t mt-32 pt-8 gap-x-12 gap-y-12 items-end">
        <div className="col-span-1 md:col-span-4 font-mono text-xs flex flex-col gap-3">
          <div className="flex justify-between border-b border-medical-border-light dark:border-medical-border pb-2">
            <span className="text-zinc-500">DISCIPLINE</span>
            <span className="text-zinc-900 dark:text-medical-white">PRODUCT DESIGNER</span>
          </div>
          <div className="flex justify-between border-b border-medical-border-light dark:border-medical-border pb-2">
            <span className="text-zinc-500">STATUS</span>
            <span className="text-medical-teal">AVAILABLE</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-zinc-500">VERSION</span>
            <span className="dark:text-medical-white text-zinc-900">SYS.001</span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-8 md:pl-12">
          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl">
            A highly calibrated approach to digital products. Merging human physiology concepts
            with advanced UI systems to construct unforgettable, conversion-optimized interfaces.
          </p>
        </div>
      </div>
    </section>
  )
}
