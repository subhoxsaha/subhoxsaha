'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Accelerate towards the end
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1
        return Math.min(prev + increment, 100)
      })
    }, 30)

    const handleLoad = () => {
      // Ensure progress reaches 100 before transitioning
      setProgress(100)
      setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => setIsVisible(false), 700)
      }, 300)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearInterval(interval)
      }
    }

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #050510 0%, #0a0a20 100%)',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isTransitioning ? 'none' : 'auto',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
          animation: 'preloader-drift 8s ease-in-out infinite',
        }}
      />

      {/* ─── Navbar-shaped loading container (top) ─── */}
      <div
        className="absolute mx-auto left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8"
        style={{
          top: 16,
          maxWidth: 1200,
          transform: isTransitioning ? 'translateY(-20px)' : 'translateY(0)',
          opacity: isTransitioning ? 0 : 1,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="flex items-center justify-between rounded-2xl"
          style={{
            padding: '14px 24px',
            background: 'linear-gradient(135deg, rgba(5, 5, 16, 0.9) 0%, rgba(10, 10, 30, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Logo — matches the real navbar */}
          <div className="flex items-center gap-3">
            <div
              className="shrink-0 overflow-hidden flex items-center"
              style={{
                height: 36,
              }}
            >
              <img
                src="/20210908_102240.png"
                alt="Subhrajit Saha"
                style={{ height: '100%', width: 'auto' }}
                className="object-contain"
              />
            </div>
          </div>

          {/* Shimmer nav pills (skeleton) */}
          <div className="hidden md:flex items-center gap-3">
            {[48, 40, 44, 40, 52].map((width, i) => (
              <div
                key={i}
                className="rounded-md overflow-hidden relative"
                style={{
                  width,
                  height: 10,
                  background: 'rgba(168, 85, 247, 0.1)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
                    animation: `preloader-shimmer 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Center content ─── */}
      <div className="relative text-center px-4">
        {/* Large logo */}
        <div
          className="mx-auto mb-8 overflow-hidden flex justify-center items-center"
          style={{
            height: 72,
            animation: 'preloader-pulse 2.5s ease-in-out infinite',
          }}
        >
          <img
            src="/20210908_102240.png"
            alt="Subhrajit Saha"
            style={{ height: '100%', width: 'auto' }}
            className="object-contain"
          />
        </div>



        {/* Progress bar */}
        <div className="w-48 mx-auto mb-4">
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              height: 4,
              background: 'rgba(168, 85, 247, 0.12)',
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)',
              }}
            />
          </div>
        </div>

        {/* Loading text */}
        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{
            color: 'var(--text-muted, #8b8ba7)',
            animation: 'preloader-pulse 2s ease-in-out infinite',
          }}
        >
          Loading portfolio...
        </p>
      </div>

      <style>{`
        @keyframes preloader-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.02); }
          66% { transform: translate(-15px, 15px) scale(0.98); }
        }
        @keyframes preloader-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes preloader-shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}

export default Preloader
