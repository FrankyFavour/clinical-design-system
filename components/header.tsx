"use client"

import { Sun, Moon, Menu } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-medical-border-light dark:border-medical-border bg-white/80 dark:bg-medical-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-medical-lime shadow-[0_0_8px_rgba(0,255,136,0.4)]" />
          <span className="font-mono text-xs font-medium tracking-wider text-zinc-800 dark:text-zinc-200">
            PHYSIOxDESIGNS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <a
            href="#diagnosis"
            className="hover:text-[#2DD4BF] dark:hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical"
          >
            [01] DIAGNOSIS
          </a>
          <a
            href="#cases"
            className="hover:text-[#2DD4BF] dark:hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical"
          >
            [02] CASES
          </a>
          <a
            href="#lab"
            className="hover:text-[#2DD4BF] dark:hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical"
          >
            [03] LAB
          </a>
          <a
            href="#status"
            className="hover:text-[#2DD4BF] dark:hover:text-[#2DD4BF] transition-colors duration-200 ease-clinical"
          >
            [04] STATUS
          </a>

          <button
            onClick={toggleTheme}
            className="ml-4 hover:text-zinc-900 dark:hover:text-white transition-colors focus:outline-none flex items-center justify-center"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        <button className="md:hidden">
          <Menu className="w-5 h-5 text-zinc-500" />
        </button>
      </div>
    </header>
  )
}
