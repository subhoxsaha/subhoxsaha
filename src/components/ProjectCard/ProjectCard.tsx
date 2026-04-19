'use client'

import React, { useRef, useState } from 'react'
import { Project } from '@/types'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'

interface ProjectCardProps {
  project: Project
  index?: number
  onOpen?: () => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setSpotlightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const animationDelay = (index % 3) * 0.1

  return (
    <ScrollAnimation animation="fadeInUp" delay={animationDelay} duration={0.6}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full rounded-2xl overflow-hidden transition-all duration-400 ease-out"
        style={{
          background: 'var(--bg-surface)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--line-soft)',
          boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-soft)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        }}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(350px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(168, 85, 247, 0.12), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Top accent border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)',
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Image preview */}
        {project.imageUrl && (
          <div
            className="relative h-48 overflow-hidden border-b border-white/[0.06] cursor-pointer"
            onClick={onOpen}
          >
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60 pointer-events-none" />
            {/* Play overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <PlayArrowRoundedIcon sx={{ fontSize: 28, color: '#fff' }} />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-7">
          <h3
            className="text-xl font-bold mb-3 gradient-text transition-all duration-300"
          >
            {project.title}
          </h3>

          <p
            className="text-sm mb-5 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  color: 'var(--brand-1)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2 border-t border-white/[0.06]">
            {project.demoUrl && (
              <button
                onClick={(e) => { e.stopPropagation(); onOpen?.(); }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.25)',
                  border: 'none',
                }}
              >
                <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                Live Preview
              </button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--line-soft)',
                  color: 'var(--text-main)',
                  background: 'var(--bg-surface)',
                }}
              >
                <GitHubIcon sx={{ fontSize: 18 }} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ProjectCard
