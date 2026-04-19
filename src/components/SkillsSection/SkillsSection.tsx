'use client'

import React, { useRef, useState } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import { skills } from '@/data/skills'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import BuildRoundedIcon from '@mui/icons-material/BuildRounded'
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import WebRoundedIcon from '@mui/icons-material/WebRounded'
import BrushRoundedIcon from '@mui/icons-material/BrushRounded'
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded'
import DnsRoundedIcon from '@mui/icons-material/DnsRounded'
import ApiRoundedIcon from '@mui/icons-material/ApiRounded'
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
import NetworkCheckRoundedIcon from '@mui/icons-material/NetworkCheckRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded'
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import JavascriptIcon from '@mui/icons-material/Javascript'

const skillIconMap: Record<string, React.ReactNode> = {
  'Python': <CodeRoundedIcon fontSize="inherit" />,
  'C/C++': <TerminalRoundedIcon fontSize="inherit" />,
  'SQL': <StorageRoundedIcon fontSize="inherit" />,
  'JavaScript': <JavascriptIcon fontSize="inherit" />,
  'HTML/CSS': <WebRoundedIcon fontSize="inherit" />,
  'React': <DataObjectRoundedIcon fontSize="inherit" />,
  'Material-UI': <BrushRoundedIcon fontSize="inherit" />,
  'Tailwind CSS': <ColorLensRoundedIcon fontSize="inherit" />,
  'WordPress': <WebRoundedIcon fontSize="inherit" />,
  'Node.js': <DnsRoundedIcon fontSize="inherit" />,
  'Express': <ApiRoundedIcon fontSize="inherit" />,
  'Flask': <ApiRoundedIcon fontSize="inherit" />,
  'FastAPI': <BoltRoundedIcon fontSize="inherit" />,
  'MongoDB': <StorageRoundedIcon fontSize="inherit" />,
  'Git': <AccountTreeRoundedIcon fontSize="inherit" />,
  'Postman': <NetworkCheckRoundedIcon fontSize="inherit" />,
  'VS Code': <CodeRoundedIcon fontSize="inherit" />,
  'NumPy': <AnalyticsRoundedIcon fontSize="inherit" />,
  'Pandas': <StorageRoundedIcon fontSize="inherit" />,
  'Matplotlib': <TimelineRoundedIcon fontSize="inherit" />,
  'TensorFlow': <AutoGraphRoundedIcon fontSize="inherit" />,
  'PyTorch': <AutoGraphRoundedIcon fontSize="inherit" />,
  'Scikit-learn': <AnalyticsRoundedIcon fontSize="inherit" />,
  'Arduino UNO': <DeveloperBoardRoundedIcon fontSize="inherit" />,
  'ESP32': <MemoryRoundedIcon fontSize="inherit" />,
  'OpenCV': <VisibilityRoundedIcon fontSize="inherit" />,
  'Embedded Systems': <MemoryRoundedIcon fontSize="inherit" />,
}

const proficiencyLevels = [
  { name: 'React & JavaScript', level: 'Advanced', percent: 90, icon: <BoltRoundedIcon fontSize="small" /> },
  { name: 'Python & Backend', level: 'Advanced', percent: 85, icon: <BuildRoundedIcon fontSize="small" /> },
  { name: 'IoT & Embedded Systems', level: 'Intermediate', percent: 75, icon: <MemoryRoundedIcon fontSize="small" /> },
  { name: 'Machine Learning', level: 'Intermediate', percent: 70, icon: <AutoAwesomeRoundedIcon fontSize="small" /> },
]

function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl transition-all duration-400 ${className}`}
      style={{
        background: 'var(--bg-surface)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--line-soft)',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'var(--shadow-soft)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}% ${pos.y}%, rgba(168, 85, 247, 0.1), transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}


export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16 px-4 scroll-mt-20 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText
            type="characters"
            text="Technical Skills"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-shadow"
            delay={0.1}
          />
          <AnimatedText
            type="words"
            text="A comprehensive overview of my technical expertise across languages, frameworks, and tools."
            className="text-base md:text-lg text-center max-w-[600px] mx-auto text-[var(--text-muted)]"
            delay={0.3}
          />
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skillGroup, index) => (
            <ScrollAnimation
              key={skillGroup.category}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <SpotlightCard className="p-7 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                  />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105"
                      style={{
                        background: 'rgba(168, 85, 247, 0.08)',
                        border: '1px solid rgba(168, 85, 247, 0.15)',
                        color: 'var(--text-main)',
                      }}
                    >
                      <span className="text-purple-400 flex items-center opacity-80 text-[1.1rem]">
                        {skillIconMap[skill] || <CodeRoundedIcon fontSize="inherit" />}
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* Proficiency Levels */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <h3 className="text-3xl font-bold mb-3 gradient-text">Proficiency Levels</h3>
          <p className="mb-10 text-sm" style={{ color: 'var(--text-muted)' }}>
            Detailed breakdown of expertise across core technologies.
          </p>
        </ScrollAnimation>

        <div className="space-y-6 max-w-3xl">
          {proficiencyLevels.map((skill, index) => (
            <ScrollAnimation
              animation="slideInLeft"
              delay={0.3 + index * 0.08}
              key={skill.name}
            >
              <div className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-base flex items-center gap-2.5">
                    <span className="text-xl group-hover:scale-125 transition-transform inline-block">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(168, 85, 247, 0.12)',
                      color: '#c084fc',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
                {/* Progress bar */}
                <div
                  className="w-full h-2.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255, 255, 255, 0.06)' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    style={{
                      width: `${skill.percent}%`,
                      background: 'linear-gradient(90deg, #a855f7, #ec4899, #a855f7)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s ease-in-out infinite',
                    }}
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}
