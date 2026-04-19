'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import { AnimatedText } from "@/components/AnimatedText/AnimatedText";
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded'
import CVDownload from "@/components/CVDownload/CVDownload";
import ProjectsSection from "@/components/ProjectCard/ProjectsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main>
      {/* ─── Hero Section ─── */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center px-4 py-8 w-full relative overflow-hidden"
      >
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-40 transition-all duration-700 ease-out"
            style={{
              background: `
                radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(168, 85, 247, 0.15), transparent 40%),
                radial-gradient(400px circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(236, 72, 153, 0.1), transparent 40%)
              `,
            }}
          />
          {/* Static ambient blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/8 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/8 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Noise grain texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-[900px] mx-auto w-full relative z-10">
          {/* Kicker badge */}
          <ScrollAnimation animation="fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-purple-300">
                Available for opportunities
              </span>
            </div>
          </ScrollAnimation>



          {/* Name */}
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold mb-6 leading-[1.05] tracking-tight flex items-center flex-wrap gap-x-3 sm:gap-x-4">
              <span>Hi, I&apos;m</span>
              <img
                src="/20210908_102240.png"
                alt="Subhrajit Saha"
                style={{ height: 'clamp(2.5rem,8vw,5rem)', width: 'auto' }}
                className="object-contain drop-shadow-[0_4px_12px_rgba(168,85,247,0.3)]"
              />
            </h1>
          </ScrollAnimation>

          {/* Subtext */}
          <div className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-300 font-light leading-relaxed">
            <AnimatedText
              type="words"
              delay={0.3}
              text="Full-stack developer crafting innovative solutions at the intersection of"
              className="inline"
            />{" "}
            <AnimatedText
              type="words"
              delay={0.8}
              text="web technologies, IoT, and embedded systems."
              className="inline font-medium text-white"
            />
          </div>

          {/* CTA Buttons */}
          <ScrollAnimation animation="fadeInUp" delay={0.35}>
            <div className="flex gap-4 flex-wrap mb-20">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
                }}
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <WorkOutlineRoundedIcon className="relative z-10" sx={{ fontSize: 20 }} />
                <span className="relative z-10">View My Work</span>
              </a>
              <CVDownload />
            </div>
          </ScrollAnimation>


        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="work">
        <ProjectsSection />
      </section>

      {/* ─── About Section ─── */}
      <AboutSection />

      {/* ─── Skills Section ─── */}
      <SkillsSection />

      {/* ─── Contact Section ─── */}
      <ContactSection />
    </main>
  );
}
