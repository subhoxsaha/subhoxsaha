'use client'

import React from 'react'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div className="mb-12">
          <AnimatedText
            type="characters"
            text="Get In Touch"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-shadow"
            delay={0.1}
          />
          <AnimatedText
            type="words"
            text="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            className="text-base md:text-lg leading-relaxed max-w-[600px] mx-auto text-gray-300"
            delay={0.3}
          />
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <a
              href="mailto:contact@subhrajitsaha.com"
              className="glass-card flex items-center gap-4 p-6 min-w-[280px] hover:scale-105 transition-transform duration-300 group"
              style={{
                borderTop: '2px solid transparent',
                borderImage: 'linear-gradient(90deg, transparent, #a855f7, transparent) 1',
              }}
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <EmailRoundedIcon />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 font-medium">Email Me</p>
                <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                  Say Hello
                </p>
              </div>
            </a>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <a
              href="https://www.linkedin.com/in/subhrajit-saha-853b293a1"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-6 min-w-[280px] hover:scale-105 transition-transform duration-300 group"
              style={{
                borderTop: '2px solid transparent',
                borderImage: 'linear-gradient(90deg, transparent, #0a66c2, transparent) 1',
              }}
            >
              <div className="p-3 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] group-hover:bg-[#0a66c2]/20 transition-colors">
                <LinkedInIcon />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 font-medium">Connect on</p>
                <p className="text-white font-semibold group-hover:text-[#0a66c2] transition-colors">
                  LinkedIn
                </p>
              </div>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}