'use client'
import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const stars: { x: number; y: number; r: number; alpha: number; speed: number; twinkleOffset: number; color: string }[] = []
    const shootingStars: { x: number; y: number; len: number; speed: number; opacity: number; active: boolean }[] = []

    const starColors = ['232,228,255', '155,143,232', '192,132,176', '255,255,255']

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 280; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.2,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.004 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      })
    }

    for (let i = 0; i < 5; i++) {
      shootingStars.push({ x: 0, y: 0, len: 0, speed: 0, opacity: 0, active: false })
    }

    const launchShootingStar = (s: typeof shootingStars[0]) => {
      s.x = Math.random() * canvas.width
      s.y = Math.random() * canvas.height * 0.5
      s.len = Math.random() * 120 + 60
      s.speed = Math.random() * 10 + 6
      s.opacity = 1
      s.active = true
    }

    setInterval(() => {
      const idle = shootingStars.find(s => !s.active)
      if (idle) launchShootingStar(idle)
    }, 2800)

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.012

      // Regular stars
      stars.forEach(s => {
        const twinkle = Math.sin(t * s.speed * 100 + s.twinkleOffset) * 0.4 + 0.6
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color},${s.alpha * twinkle})`
        ctx.fill()
        if (s.r > 1.3) {
          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
          grad.addColorStop(0, `rgba(${s.color},${0.15 * twinkle})`)
          grad.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
        }
      })

      // Shooting stars
      shootingStars.forEach(s => {
        if (!s.active) return
        s.x += s.speed
        s.y += s.speed * 0.5
        s.opacity -= 0.018
        if (s.opacity <= 0) { s.active = false; return }
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.5)
        grad.addColorStop(0, `rgba(232,228,255,${s.opacity})`)
        grad.addColorStop(1, 'rgba(232,228,255,0)')
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.len, s.y - s.len * 0.5)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="starfield" className="fixed inset-0 pointer-events-none z-0" />
}
