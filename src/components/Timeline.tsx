'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

import { parseSimpleYaml } from '@/utils/yaml'

type Experience = {
  company: string
  role: string
  period: string
  location?: string
  highlights?: string[]
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 24 } },
}

export default function Timeline() {
  const [items, setItems] = useState<Experience[]>([])
  const controls = useAnimation()

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        const res = await fetch('/data/experience.yml', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to load experience.yml')
        const text = await res.text()
        const parsed = parseSimpleYaml(text) as unknown as Experience[]
        if (isMounted) setItems(parsed)
      } catch (e) {
        console.error('Timeline load error:', e)
      }
    }
    load()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Experience</h2>

          <motion.ol
            className="relative border-l border-white/10 pl-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          >
            {items.map((exp, idx) => (
              <motion.li key={`${exp.company}-${idx}`} variants={itemVariants} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 border border-white/20" />
                <time className="mb-1 text-sm text-white/60">{exp.period}</time>
                <h3 className="text-xl font-semibold text-white">{exp.role} • {exp.company}</h3>
                {exp.location && (
                  <p className="text-sm text-white/60 mb-2">{exp.location}</p>
                )}
                {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}


