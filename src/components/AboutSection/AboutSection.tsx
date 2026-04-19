'use client'

import React from 'react'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import { experiences, education } from '@/data/resume'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 px-4 scroll-mt-20 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            type="characters"
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-shadow"
            delay={0.1}
          />
          <AnimatedText
            type="words"
            text="I'm a B.Tech student in Electronics and Communication Engineering at Kalyani Government Engineering College, passionate about building innovative solutions that combine hardware and software. With hands-on experience in IoT, embedded systems, and full-stack web development, I'm committed to creating impactful projects."
            className="text-base md:text-lg leading-relaxed max-w-[700px] mx-auto"
            delay={0.3}
          />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <ScrollAnimation animation="fadeInUp">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-400"
                  style={{ background: 'rgba(168, 85, 247, 0.12)' }}
                >
                  <SchoolRoundedIcon sx={{ fontSize: 24 }} />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Education</h3>
              </div>
            </ScrollAnimation>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <ScrollAnimation
                  key={index}
                  animation="slideInLeft"
                  delay={index * 0.1}
                >
                  <div
                    className="glass-card p-6 group"
                    style={{
                      borderLeft: '3px solid transparent',
                      borderImage: 'linear-gradient(180deg, #a855f7, #ec4899) 1',
                    }}
                  >
                    <h4 className="text-base font-bold mb-1">{edu.degree}</h4>
                    <p className="text-sm font-medium text-purple-400 mb-1">{edu.field}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {edu.school}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {edu.location}
                      </span>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(168, 85, 247, 0.1)',
                          border: '1px solid rgba(168, 85, 247, 0.2)',
                          color: '#c084fc',
                        }}
                      >
                        {edu.date}
                      </span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <ScrollAnimation animation="fadeInUp">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-pink-500"
                  style={{ background: 'rgba(236, 72, 153, 0.12)' }}
                >
                  <WorkOutlineRoundedIcon sx={{ fontSize: 24 }} />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Experience</h3>
              </div>
            </ScrollAnimation>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <ScrollAnimation
                  key={index}
                  animation="slideInRight"
                  delay={index * 0.1}
                >
                  <div
                    className="glass-card p-6 group"
                    style={{
                      borderLeft: '3px solid transparent',
                      borderImage: 'linear-gradient(180deg, #ec4899, #a855f7) 1',
                    }}
                  >
                    <h4 className="text-base font-bold mb-1">{exp.title}</h4>
                    <p className="text-sm font-medium text-pink-400 mb-1">{exp.company}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {exp.location}
                      </span>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(236, 72, 153, 0.1)',
                          border: '1px solid rgba(236, 72, 153, 0.2)',
                          color: '#f472b6',
                        }}
                      >
                        {exp.date}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm flex gap-2 leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          <span className="text-purple-400 mt-0.5 shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
