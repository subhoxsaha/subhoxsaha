'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const tabs = [
  { id: 'preview', label: 'Live Preview', icon: <VisibilityOutlinedIcon fontSize="small" /> },
  { id: 'info', label: 'About Project', icon: <InfoOutlinedIcon fontSize="small" /> },
]

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('preview')

  // Reset tab when project changes
  useEffect(() => {
    if (project) setActiveTab('preview')
  }, [project])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-12 z-[2001] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 25, 0.98) 0%, rgba(15, 15, 35, 0.98) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(168, 85, 247, 0.1)',
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                {/* Sera UI style animated tabs */}
                <div
                  className="flex items-center gap-1 p-1 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                      style={{
                        color: activeTab === tab.id ? '#fff' : 'rgba(255,255,255,0.5)',
                        border: 'none',
                        background: 'transparent',
                      }}
                    >
                      {/* Animated active indicator */}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 100%)',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                        <span className="text-sm sm:text-base">{tab.icon}</span>
                        <span className="text-xs sm:text-sm">{tab.label}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Project title */}
                <h2 className="text-lg font-bold text-white hidden md:block">
                  {project.title}
                </h2>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      color: '#c084fc',
                    }}
                  >
                    <OpenInNewRoundedIcon sx={{ fontSize: 18 }} />
                    Open in New Tab
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <CloseRoundedIcon sx={{ fontSize: 22 }} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                {activeTab === 'preview' && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    {project.demoUrl ? (
                      <iframe
                        src={project.demoUrl}
                        title={`${project.title} live preview`}
                        className="w-full h-full"
                        style={{ border: 'none', background: '#fff' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <p>No live preview available for this project.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'info' && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0 overflow-y-auto p-5 sm:p-8 md:p-12"
                  >
                    <div className="max-w-2xl">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        {project.title}
                      </h2>

                      <p
                        className="text-base md:text-lg leading-relaxed mb-8"
                        style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                      >
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-4">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105"
                              style={{
                                background: 'rgba(168, 85, 247, 0.1)',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                color: '#c084fc',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                              color: 'white',
                              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
                            }}
                          >
                            <LaunchRoundedIcon sx={{ fontSize: 18 }} />
                            Visit Live Site
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                              borderColor: 'rgba(168, 85, 247, 0.3)',
                              color: '#c084fc',
                              background: 'rgba(168, 85, 247, 0.08)',
                            }}
                          >
                            <GitHubIcon sx={{ fontSize: 18 }} />
                            View Source
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
