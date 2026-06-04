'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [time, setTime] = useState('')
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
    const fmt = () =>
      new Date().toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Mexico_City',
      })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-green/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          {year ? `© ${year}` : '©'} Mirmibug IT Solutions — CDMX, México
        </p>
        <p className="font-mono text-xs text-green/60">
          {time ? `CDMX ${time}` : ''}
        </p>
      </div>
    </footer>
  )
}
