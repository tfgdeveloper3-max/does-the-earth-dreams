'use client'
import { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const baseLogos = [
  { src: '/images/Amazon.png', alt: 'Amazon' },
  { src: '/images/ingramSpark.png', alt: 'IngramSpark' },
  { src: '/images/barnes_logo.jpg', alt: 'Barnes & Noble' },
  { src: '/images/kobo_logo.jpg', alt: 'Kobo' },
  { src: '/images/AppleBooks.png', alt: 'Apple Books' },
]

// Triple duplicate for perfectly seamless infinite loop
const logos = [...baseLogos, ...baseLogos, ...baseLogos]

export default function VideoTrailer() {
  const ref = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-light relative overflow-hidden">
      {/* Wave top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="reveal font-body font-bold text-violet-600 text-sm uppercase tracking-widest mb-2">Watch Now</p>
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">Video Trailer</h2>
        <p className="reveal font-body text-gray-500 text-base mb-10 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s
        </p>

        {/* Video player */}
        <div
          className="reveal relative rounded-2xl overflow-hidden cursor-pointer group"
          style={{
            border: '2px solid rgba(107,93,211,0.15)',
            boxShadow: '0 20px 60px rgba(107,93,211,0.15)',
            aspectRatio: '16/9',
          }}
          onClick={() => setPlaying(!playing)}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #1a1a4e 0%, #2d2880 40%, #6b5dd3 100%)' }}
          >
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 1 + 'px',
                  height: Math.random() * 4 + 1 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  background: 'white',
                  opacity: Math.random() * 0.5 + 0.1,
                }} />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.95)',
                boxShadow: '0 0 0 8px rgba(255,255,255,0.25)',
              }}
            >
              <FaPlay className="text-violet-700 text-2xl ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Infinite scrolling logos ── */}
      <div className="reveal mt-14 relative" style={{ overflow: 'hidden', padding: '1rem 0' }}>

        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to right, white 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to left, white 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Track — moves left continuously, resets every 1/3 (one full set) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5rem',
            width: 'max-content',
            animation: 'logoScroll 22s linear infinite',
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.7,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '1'
                el.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '0.7'
                el.style.transform = 'scale(1)'
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '48px',
                  width: 'auto',
                  maxWidth: '160px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom" style={{ marginTop: '2rem' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,0 360,80 540,40 C720,0 900,80 1080,40 C1260,0 1440,60 1440,40 L1440,80 L0,80 Z" fill="#0d0d2b" />
        </svg>
      </div>
    </section>
  )
}