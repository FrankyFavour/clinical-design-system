"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { BackgroundEffects } from "@/components/background-effects"
import { HeroSection } from "@/components/hero-section"
import { CaseMarquee } from "@/components/case-marquee"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { MethodologySection } from "@/components/methodology-section"
import { ObservationsSection } from "@/components/observations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LiveDiagnosticsSection } from "@/components/live-diagnostics-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDark, setIsDark] = useState(true)
  const [isGridActive, setIsGridActive] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <BackgroundEffects isGridActive={isGridActive} />
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Scroll Progress */}
      <div className="fixed left-0 top-16 w-full h-[1px] bg-medical-border-light dark:bg-medical-border z-40">
        <div 
          className="h-full bg-medical-teal transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="md:px-6 lg:px-12 z-10 max-w-[1280px] mr-auto ml-auto pt-32 pr-4 pb-32 pl-4 relative">
        <HeroSection />
        <CaseMarquee />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <MethodologySection />
        <ObservationsSection />
        <TestimonialsSection />
        <LiveDiagnosticsSection isGridActive={isGridActive} setIsGridActive={setIsGridActive} />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
