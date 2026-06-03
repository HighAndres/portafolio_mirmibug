'use client'

import { useEffect, useRef, useState } from 'react'
import { stack } from '@/data/stack'

export default function StackSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stack" ref={ref} className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs text-green/60 mb-2 uppercase tracking-widest">
        // stack técnico
      </p>
      <h2 className="font-mono text-3xl font-bold text-white mb-10">
        Herramientas que usamos
      </h2>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
        {stack.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-1.5">
              <span className="font-mono text-sm text-white">{item.name}</span>
              <span className="font-mono text-xs text-green/70">{item.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-green/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-green transition-none"
                style={{
                  width: visible ? `${item.level}%` : '0%',
                  transition: visible ? 'width 1s ease-out' : 'none',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
