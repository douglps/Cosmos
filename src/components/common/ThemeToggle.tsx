'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'
  const iconSrc = isDark ? '/utils/sun-br.svg' : '/utils/moon.svg'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Alternar tema"
      className="transition duration-3000 ease-in-out p-2"
    >
      <Image
        src={iconSrc}
        alt="Alternar tema"
        width={32}
        height={32}
        priority
      />
    </button>
  )
}
