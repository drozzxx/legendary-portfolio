'use client'

import { useState, useEffect } from 'react'
import Signature from './Signature'

interface AboutData {
  tr: {
    title: string
    bio: string
    skills: string[]
    experience: string
    projects: string
    languages: string
  }
  en: {
    title: string
    bio: string
    skills: string[]
    experience: string
    projects: string
    languages: string
  }
}

export default function About() {
  const [data, setData] = useState<AboutData | null>(null)
  const [language, setLanguage] = useState<'tr' | 'en'>('en')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/about.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const aboutData = await response.json()
        setData(aboutData)
      } catch (error) {
        console.error('Error fetching about data:', error)
        // Fallback data
        setData({
          tr: {
            title: "Hakkımda",
            bio: "Merhaba! Ben Muhammed Zahid, tutkulu bir frontend geliştiricisi ve yaratıcı kod yazarıyım.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Node.js"],
            experience: "3+ yıl",
            projects: "50+",
            languages: "Türkçe, İngilizce"
          },
          en: {
            title: "About Me",
            bio: "Hello! I'm Muhammed Zahid, a passionate frontend developer and creative coder.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Node.js"],
            experience: "3+ years",
            projects: "50+",
            languages: "Turkish, English"
          }
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading || !data) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </section>
    )
  }

  const currentData = data[language]

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <button
                className={`px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all duration-300 ${
                  language === 'tr' 
                    ? 'bg-purple-600 text-white border-purple-600 shadow-lg' 
                    : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-lg'
                }`}
                onClick={() => setLanguage('tr')}
              >
                🇹🇷 TR
              </button>
              <button
                className={`px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-purple-600 text-white border-purple-600 shadow-lg' 
                    : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-lg'
                }`}
                onClick={() => setLanguage('en')}
              >
                🇺🇸 EN
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {currentData.title}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                {currentData.bio}
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {language === 'tr' ? 'Yetenekler' : 'Skills'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {currentData.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Deneyim' : 'Experience'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {currentData.projects}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Proje' : 'Projects'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {currentData.languages.split(', ').length}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Dil' : 'Languages'}
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Signature />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 