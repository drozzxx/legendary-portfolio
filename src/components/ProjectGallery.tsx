'use client'

import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { parseSimpleYaml } from '@/utils/yaml'

type Project = {
  title: string
  year: number
  stack: string[]
  description: string
  liveUrl?: string
  repoUrl?: string
  previewGif?: string
}

const cardHover = {
  initial: { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  whileHover: { y: -5, scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.25)' },
}

export default function ProjectGallery() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const res = await fetch('/data/projects.yml', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to load projects.yml')
        const text = await res.text()
        const parsed = parseSimpleYaml(text) as unknown as Project[]
        if (mounted) setProjects(parsed)
      } catch (e) {
        console.error('ProjectGallery load error:', e)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  const breakpoints = {
    default: 3, // ≥1025 px
    1025: 3,
    641: 2,
    0: 1,
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projeler</h2>
          <p className="text-white/70 mt-2">YAML dosyasına yeni proje eklendiğinde liste otomatik güncellenir.</p>
        </div>

        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={`${p.title}-${idx}`}
              className="bg-[#0f0f16] rounded-xl overflow-hidden border border-white/10"
              initial={cardHover.initial}
              whileHover={cardHover.whileHover}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {p.previewGif && (
                <img
                  src={p.previewGif}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              )}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{p.year}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{p.description}</p>
                {Array.isArray(p.stack) && p.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 pt-2">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      GitHub <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </Masonry>
      </div>
    </section>
  )
}


