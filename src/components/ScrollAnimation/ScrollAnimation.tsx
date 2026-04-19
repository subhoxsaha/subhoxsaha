'use client'

import React, { ReactNode, useRef, useEffect, useState } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  delay?: number
  duration?: number
  className?: string
}

const hiddenStyles: Record<string, React.CSSProperties> = {
  fadeInUp: { opacity: 0, transform: 'translateY(40px)' },
  fadeIn: { opacity: 0 },
  slideInLeft: { opacity: 0, transform: 'translateX(-40px)' },
  slideInRight: { opacity: 0, transform: 'translateX(40px)' },
  scaleIn: { opacity: 0, transform: 'scale(0.92)' },
}

const visibleStyle: React.CSSProperties = {
  opacity: 1,
  transform: 'translateY(0) translateX(0) scale(1)',
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    const node = ref.current

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  const currentStyle = isVisible ? visibleStyle : hiddenStyles[animation]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentStyle,
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: isVisible ? `${delay}s` : '0s',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
