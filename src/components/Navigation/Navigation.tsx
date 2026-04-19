'use client'

import React, { useEffect, useMemo, useState, useCallback } from 'react'
import Image from 'next/image'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const getInitialTheme = (): 'light' | 'dark' => {
  return 'dark'
}


export const Navigation: React.FC = () => {
  const [activeHash, setActiveHash] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const navItems = useMemo(() => [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ], [])

  const scrollToSection = useCallback((hash: string) => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', hash)
      setActiveHash(hash)
      setMobileOpen(false)
    }
  }, [])

  // Scroll tracking & active section detection
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))

    const updateActiveSection = () => {
      let current = '#home'
      const viewportOffset = 120
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (window.scrollY >= section.offsetTop - viewportOffset) current = `#${id}`
      }
      setActiveHash(current)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      updateActiveSection()
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [navItems])

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Sync theme to DOM
  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ─── Fixed Navbar ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-[1200] transition-all duration-400"
        style={{ padding: isMobile ? '10px 12px' : '16px 24px' }}
      >
        <nav
          className="mx-auto flex items-center justify-between transition-all duration-400"
          style={{
            maxWidth: 1200,
            padding: isMobile ? '10px 16px' : '14px 24px',
            background: scrolled
              ? 'linear-gradient(135deg, rgba(5, 5, 16, 0.95) 0%, rgba(10, 10, 30, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(5, 5, 16, 0.8) 0%, rgba(10, 10, 30, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 16,
            border: `1px solid ${scrolled ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.06)'}`,
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)'
              : 'none',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            aria-label="Go to home"
          >
            <div
              className="shrink-0 overflow-hidden flex items-center"
              style={{
                height: isMobile ? 32 : 36,
              }}
            >
              <img
                src="/20210908_102240.png"
                alt="Subhrajit Saha"
                style={{ height: '100%', width: 'auto' }}
                className="object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeHash === item.href
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-all duration-300"
                    style={{
                      color: isActive ? '#ec4899' : 'var(--text-muted)',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {item.label}
                    {/* Active underline */}
                    <span
                      className="absolute bottom-0.5 left-2 right-2 h-[2px] rounded-full transition-transform duration-300 origin-center"
                      style={{
                        background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </button>
                )
              })}
            </div>
          )}

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            {isMobile && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-xl transition-all duration-300"
                style={{
                  color: '#c084fc',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.15)',
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
              </button>
            )}
          </div>
        </nav>

        {/* ─── Mobile Side Drawer ─── */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          style={{
            zIndex: -1,
            opacity: mobileOpen && isMobile ? 1 : 0,
            pointerEvents: mobileOpen && isMobile ? 'auto' : 'none',
          }}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className="fixed top-0 right-0 flex flex-col pt-24 pb-4 transition-transform duration-400 ease-out"
          style={{
            zIndex: -1, // Keep it under the nav bar since the nav bar has the close toggle
            height: 'auto',
            width: '33vw',
            minWidth: '240px',
            transform: mobileOpen && isMobile ? 'translateX(0)' : 'translateX(100%)',
            background: 'rgba(5, 5, 16, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(168, 85, 247, 0.2)',
            borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
            borderBottomLeftRadius: '24px',
            boxShadow: '-8px 8px 32px rgba(0,0,0,0.6)'
          }}
        >
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item, index) => {
              const isActive = activeHash === item.href
              return (
                <React.Fragment key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-7 py-4 transition-all duration-200"
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.08) 100%)'
                        : 'transparent',
                      borderLeft: isActive ? '3px solid #a855f7' : '3px solid transparent',
                      color: isActive ? '#ec4899' : 'var(--text-muted)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem',
                    }}
                  >
                    {item.label}
                  </button>
                  {index < navItems.length - 1 && (
                    <div className="mx-7 my-1 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }} />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div style={{ height: isMobile ? 72 : 88 }} />
    </>
  )
}

export default Navigation
