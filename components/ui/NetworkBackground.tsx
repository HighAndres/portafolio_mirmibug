'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let points: Point[] = []

    const POINT_COUNT = 60
    const MAX_DIST = 160
    const POINT_COLOR = 'rgba(56, 216, 78, 0.35)'
    const LINE_COLOR_BASE = [56, 216, 78]
    const SPEED = 0.25

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    function initPoints() {
      points = []
      const w = canvas!.width
      const h = canvas!.height
      for (let i = 0; i < POINT_COUNT; i++) {
        points.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
        })
      }
    }

    function draw() {
      const w = canvas!.width
      const h = canvas!.height
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx!.fillStyle = POINT_COLOR
        ctx!.fill()

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            const opacity = 0.15 * (1 - dist / MAX_DIST)
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(${LINE_COLOR_BASE[0]},${LINE_COLOR_BASE[1]},${LINE_COLOR_BASE[2]},${opacity})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initPoints()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      initPoints()
    })
    resizeObserver.observe(document.body)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
