'use client'

import React from 'react'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded'

const contactMethods = [
  {
    icon: <PhoneOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Phone',
    value: '+91 8537862652',
    href: 'tel:+918537862652',
    color: '#a855f7',
  },
  {
    icon: <EmailOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Email',
    value: 'subhrajit.saha.work@gmail.com',
    href: 'mailto:subhrajit.saha.work@gmail.com',
    color: '#ec4899',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/subhrajit-saha',
    href: 'https://linkedin.com/in/subhrajit-saha',
    color: '#0077B5',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 32 }} />,
    title: 'GitHub',
    value: 'github.com/subhoxsaha',
    href: 'https://github.com/subhoxsaha',
    color: '#c084fc',
  },
]

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 scroll-mt-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <AnimatedText
            type="characters"
            text="Get In Touch"
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-shadow"
            delay={0.1}
          />
          <AnimatedText
            type="words"
            text="I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
            className="text-lg max-w-2xl"
            delay={0.3}
          />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {contactMethods.map((method, index) => (
            <ScrollAnimation animation="scaleIn" delay={index * 0.08} key={method.title}>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block h-full"
              >
                <div
                  className="glass-card p-7 h-full text-center group-hover:scale-[1.03] transition-transform duration-300"
                >
                  {/* Icon with colored glow */}
                  <div className="relative mb-5 inline-flex">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: method.color }}
                    />
                    <div
                      className="relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${method.color}15`,
                        color: method.color,
                      }}
                    >
                      {method.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold mb-2 transition-colors duration-300 group-hover:text-purple-300">
                    {method.title}
                  </h3>
                  <p className="text-sm break-all" style={{ color: 'var(--text-muted)' }}>
                    {method.value}
                  </p>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>

        {/* Info panels */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          <ScrollAnimation animation="slideInLeft">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-400" style={{ background: 'rgba(168, 85, 247, 0.12)' }}>
                  <RocketLaunchRoundedIcon sx={{ fontSize: 22 }} />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Quick Response</h3>
              </div>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                For urgent matters or quick inquiries, feel free to call or text me directly.
                I&apos;ll get back to you as soon as possible.
              </p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                }}
              >
                Response time: Within 24 hours
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideInRight">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-pink-400" style={{ background: 'rgba(236, 72, 153, 0.12)' }}>
                  <MarkEmailReadRoundedIcon sx={{ fontSize: 22 }} />
                </div>
                <h3 className="text-xl font-bold text-pink-400">Email Preferred</h3>
              </div>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                For detailed discussions about projects or collaborations, email is the best way
                to reach me. I love detailed conversations about technical topics.
              </p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  color: '#f472b6',
                }}
              >
                Response time: 24-48 hours
              </span>
            </div>
          </ScrollAnimation>
        </div>

        {/* CTA Banner */}
        <ScrollAnimation animation="fadeInUp">
          <div
            className="relative rounded-2xl p-12 text-center overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 60%)',
              }}
            />
            <div className="relative z-10">
              <AnimatedText
                type="words"
                text="Ready to Work Together?"
                className="text-3xl font-bold mb-4 gradient-text"
                delay={0.1}
              />
              <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
                Whether you have a project in mind, want to collaborate, or just want to chat about
                tech, I&apos;d love to hear from you!
              </p>
              <a
                href="mailto:subhrajit.saha.work@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  boxShadow: '0 8px 24px rgba(168, 85, 247, 0.35)',
                }}
              >
                Send me an Email
                <ArrowForwardRoundedIcon sx={{ fontSize: 20 }} />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default ContactSection
