'use client'

import React, { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import { ProjectModal } from '@/components/ProjectModal/ProjectModal'
import { Project } from '@/types'
import styles from './ProjectCard.module.css'

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <AnimatedText
            type="characters"
            text="Featured Projects"
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-shadow"
            delay={0.1}
          />
          <AnimatedText
            type="words"
            text="A showcase of recent work spanning full-stack development, real-time systems, and interactive applications. Each project represents innovation and technical excellence."
            className="text-gray-400 text-lg max-w-2xl"
            delay={0.3}
          />
        </div>

        <div className={styles['projects-grid']}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default ProjectsSection
