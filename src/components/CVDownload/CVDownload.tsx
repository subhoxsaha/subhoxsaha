'use client'

import React, { useState } from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import CircularProgress from '@mui/material/CircularProgress'

export const CVDownload: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)

    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/my_Resume.pdf'
      link.download = 'Subhrajit_Saha_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setIsLoading(false)
    }, 800)
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      style={{
        border: '1px solid var(--line-soft)',
        color: 'var(--text-main)',
        background: 'var(--bg-surface)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {isLoading ? (
        <CircularProgress size={20} sx={{ color: 'inherit' }} />
      ) : (
        <FileDownloadOutlinedIcon className="transition-transform group-hover:translate-y-0.5" sx={{ fontSize: 20 }} />
      )}
      {isLoading ? 'Downloading...' : 'Download CV'}
    </button>
  )
}

export default CVDownload
