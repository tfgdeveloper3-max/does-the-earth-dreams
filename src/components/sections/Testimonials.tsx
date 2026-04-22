'use client'
import { useEffect, useRef } from 'react'
import { FaStar, FaQuoteRight } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'
import { GiSpellBook } from 'react-icons/gi'

const reviews = [
  {
    text: 'Love this book! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children.',
    name: 'William John', role: 'Student Father', color: '#ffd166',
  },
  {
    text: 'Love this book! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children.',
    name: 'Michel Smith', role: 'Student Father', color: '#ff9f1c',
  },
  {
    text: 'Love this book! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children.',
    name: 'William John', role: 'Student Father', color: '#ffd166',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120))
      })
    }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-dark relative overflow-hidden">
      <BsStarFill className="deco-star text-yellow-300 text-2xl" style={{ top: '10%', left: '5%' }} />
      <GiSpellBook className="deco-star text-dream-lavender text-4xl opacity-20" style={{ bottom: '15%', right: '5%' }} />
      <BsStarFill className="deco-star text-dream-rose text-sm" style={{ top: '40%', right: '8%', animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="reveal font-body font-bold text-yellow-400 text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-white mb-3">
            What Our Reader Says
          </h2>
          <p className="reveal font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(232,228,255,0.65)' }}>
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i}
              className="reveal group rounded-2xl p-6 cursor-default transition-all duration-350 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${r.color}25`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${r.color}40`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className="text-sm" style={{ color: r.color, filter: `drop-shadow(0 0 4px ${r.color}90)` }} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <FaQuoteRight className="absolute -top-1 -right-1 text-2xl opacity-10" style={{ color: r.color }} />
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(232,228,255,0.78)' }}>
                  {r.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white"
                  style={{
                    background: `linear-gradient(135deg, ${r.color}, #c084b0)`,
                    boxShadow: `0 0 15px ${r.color}40`,
                  }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-body font-bold text-dream-star text-sm">{r.name}</div>
                  <div className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.6)' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom to white */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
