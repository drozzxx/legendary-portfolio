'use client'

import { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { parseSimpleYaml } from '@/utils/yaml'
import 'react-vertical-timeline-component/style.min.css'

type Education = {
  institution: string
  degree: string
  period: string
  location: string
  logo: string
  description: string
  achievements?: string[]
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function EducationTimeline() {
  const [education, setEducation] = useState<Education[]>([])

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        const res = await fetch('/data/education.yml', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to load education.yml')
        const text = await res.text()
        const parsed = parseSimpleYaml(text) as unknown as Education[]
        if (isMounted) setEducation(parsed)
      } catch (e) {
        console.error('EducationTimeline load error:', e)
      }
    }
    load()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eğitim Geçmişi</h2>
          <p className="text-white/70 text-lg">YAML dosyasından otomatik olarak yüklenen eğitim bilgileri</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={fadeUpVariants}
        >
          <VerticalTimeline
            lineColor="#8b5cf6"
            className="vertical-timeline-custom"
          >
            {education.map((edu, idx) => (
              <VerticalTimelineElement
                key={`${edu.institution}-${idx}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                  color: '#fff',
                  border: '1px solid #4b5563',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
                contentArrowStyle={{
                  borderRight: '7px solid #374151'
                }}
                date={edu.period}
                dateClassName="text-purple-400 font-semibold"
                iconStyle={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                  color: '#fff',
                  border: '3px solid #1f2937',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                }}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      loading="lazy"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">{edu.institution}</h4>
                  <p className="text-gray-300 text-sm mb-3">{edu.location}</p>
                  <p className="text-gray-200 mb-4 leading-relaxed">{edu.description}</p>
                  
                  {Array.isArray(edu.achievements) && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-purple-300 mb-2">Başarılar:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  )
}
