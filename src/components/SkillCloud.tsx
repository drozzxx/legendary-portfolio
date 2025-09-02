'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Figma, Cpu, BadgeCheck } from 'lucide-react'

type Tag = {
  label: string
  icon: React.ReactNode
  angleDeg: number
}

const RAW = [
  { label: 'React', icon: <Sparkles size={14} /> },
  { label: 'TypeScript', icon: <Code2 size={14} /> },
  { label: 'Next.js', icon: <Code2 size={14} /> },
  { label: 'Tailwind', icon: <Sparkles size={14} /> },
  { label: 'Framer Motion', icon: <BadgeCheck size={14} /> },
  { label: 'Three.js', icon: <Cpu size={14} /> },
  { label: 'Figma', icon: <Figma size={14} /> },
]

const RADIUS = 150 // px — tek halka

function CloudTag({ t }: { t: Tag }) {
  const theta = t.angleDeg

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(-50%,-50%) rotate(${theta}deg) translateX(${RADIUS}px)` }}
    >
      {/* Hover animasyonu İÇ sarmalda: dış sarmalın transform'u sabit kalsın */}
      <motion.div whileHover={{ scale: 1.08 }} style={{ transform: `rotate(${-theta}deg)` }}>
        <div className="px-3 py-1 rounded-full text-xs font-medium border border-white/30 text-white/90 backdrop-blur select-none">
          <span className="inline-flex items-center gap-1">
            {t.icon}
            {t.label}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          whileHover={{ opacity: 1, y: -8, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8"
        >
          <div className="px-2 py-1 rounded-md text-[10px] font-semibold shadow bg-black/80 text-white">
            <span className="inline-flex items-center gap-1">
              {t.icon}
              {t.label}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function SkillCloud() {
  const tags = useMemo<Tag[]>(() => {
    const n = RAW.length
    return RAW.map((s, i) => ({
      label: s.label,
      icon: s.icon,
      angleDeg: (i / n) * 360, // tek çemberde eşit açı dağılımı
    }))
  }, [])

  return (
    <div className="relative w-full h-[360px]">
      {/* Sadece parent dönüyor, çocukların konumu sabit kalıyor */}
      <div className="absolute inset-0 origin-center will-change-transform animate-[spin_30s_linear_infinite]">
        {tags.map((t) => (
          <CloudTag key={t.label} t={t} />
        ))}
      </div>
    </div>
  )
}
