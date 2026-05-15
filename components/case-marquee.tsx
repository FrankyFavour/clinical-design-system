"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

const cases = [
  {
    id: "CASE_001",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3755ff81-ae9a-48a2-86ca-2a61d4be16f2_3840w.png",
  },
  {
    id: "CASE_002",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e105e6a-8dc9-48bb-ba5c-ab9ef2a87e4e_3840w.png",
  },
  {
    id: "CASE_003",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec1cde50-f04e-45f8-b5ec-4553d69d351f_3840w.png",
  },
  {
    id: "ARCHIVE_004",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51e19d1a-9ac7-43e1-9f96-db30e71449f1_3840w.png",
  },
  {
    id: "CASE_005",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1acce847-6ec2-44e7-bed0-75c5fda0298a_1600w.png",
  },
  {
    id: "CASE_006",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9864a239-b523-4081-b05c-8152fa839eb8_1600w.png",
  },
]

function CaseCard({ id, image }: { id: string; image: string }) {
  return (
    <div className="group/card relative w-[280px] md:w-[380px] lg:w-[440px] shrink-0 aspect-[16/10] bg-zinc-200 dark:bg-zinc-900 border border-medical-border-light dark:border-medical-border rounded-sm overflow-hidden cursor-pointer hover:border-medical-teal/30 transition-colors duration-[400ms] ease-clinical">
      <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover/card:opacity-0 transition-opacity duration-[400ms] z-10 pointer-events-none" />
      <img
        src={image}
        className="transition-all duration-[400ms] ease-clinical group-hover/card:scale-[1.03] group-hover/card:contrast-[1.02] group-hover/card:brightness-[1.02] w-full h-full object-cover"
        alt={`Case Archive ${id}`}
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-[400ms] ease-clinical bg-white/40 dark:bg-black/60 backdrop-blur-[4px]">
        <span className="font-mono text-xs tracking-widest text-zinc-900 dark:text-medical-white uppercase flex items-center gap-3">
          [ CHECK CASE STUDY ] <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
        </span>
      </div>
      <div className="absolute top-4 left-4 z-30 opacity-100 group-hover/card:opacity-0 transition-opacity duration-[400ms] ease-clinical">
        <span className="font-mono text-[10px] px-2 py-1 bg-zinc-100/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-medical-white rounded-sm border border-medical-border-light dark:border-medical-border backdrop-blur-md block">
          {id}
        </span>
      </div>
    </div>
  )
}

export function CaseMarquee() {
  return (
    <section
      className="mb-32 w-full overflow-hidden reveal transition-all duration-700 ease-clinical group/marquee relative"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-clinical-marquee hover:[animation-play-state:paused]">
        {/* SET 1 */}
        <div className="flex gap-6 pr-6 shrink-0">
          {cases.map((c) => (
            <CaseCard key={c.id} id={c.id} image={c.image} />
          ))}
        </div>

        {/* SET 2: Duplicate for seamless loop */}
        <div className="flex gap-6 shrink-0 pr-6" aria-hidden="true">
          {cases.map((c) => (
            <CaseCard key={`dup-${c.id}`} id={c.id} image={c.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
