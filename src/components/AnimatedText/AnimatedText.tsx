'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedTextProps {
  text: string | React.ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: 'words' | 'characters' | 'fadeInUp'
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  type = 'words',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // On mobile, skip per-character/word animation for speed — just fade in
  if (isMobile || type === 'fadeInUp' || typeof text !== 'string') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.4, delay: Math.min(delay, 0.2), ease: [0.2, 0.65, 0.3, 0.9] }}
        className={className}
      >
        {text}
      </motion.div>
    )
  }

  const generateWords = (str: string) => {
    return str.split(' ').map((word, idx) => (
      <span key={idx} className="inline-block whitespace-pre">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 15, filter: 'blur(4px)' }}
          transition={{
            duration: duration,
            delay: delay + idx * 0.06,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}{' '}
        </motion.span>
      </span>
    ))
  }

  const generateCharacters = (str: string) => {
    return str.split('').map((char, idx) => (
      <motion.span
        key={idx}
        className="inline-block"
        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(4px)' }}
        transition={{
          duration: duration,
          delay: delay + idx * 0.025,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))
  }

  return (
    <div ref={ref} className={className}>
      {type === 'words' ? generateWords(text) : generateCharacters(text)}
    </div>
  )
}
