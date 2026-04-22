'use client'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaGlobe } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'

const links = ['Home', 'About Me', 'My Book', 'Blog', 'Contact ME']
const socials = [
  { icon: FaFacebookF, color: '#6b5dd3' },
  { icon: FaTwitter, color: '#9b8fe8' },
  { icon: FaInstagram, color: '#c084b0' },
  { icon: FaYoutube, color: '#d4a0c8' },
]

export default function Footer() {
  return (
    <footer className="relative z-10"
      style={{ background: 'transparent' }}>

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6b5dd3, transparent)' }} />

      {/* Floating deco */}
      <BsStarFill className="absolute text-yellow-300 text-xl opacity-30 animate-pulse" style={{ top: '20%', left: '5%' }} />
      <BsStarFill className="absolute text-dream-rose text-sm opacity-25 animate-pulse" style={{ top: '40%', right: '8%', animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto px-6 py-16 text-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaGlobe className="text-2xl text-dream-lavender"
            style={{ filter: 'drop-shadow(0 0 10px rgba(155,143,232,0.7))' }} />
          <span className="font-display font-black text-2xl text-white">Tim Star</span>
        </div>

        {/* Tagline */}
        <p className="font-body text-base leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: 'rgba(232,228,255,0.6)' }}>
          Does the Earth Dream? is a poetic children’s book that inspires imagination, emotional connection, and a love for our planet
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map(l => (
            <a key={l} href="#" className="font-body text-sm font-semibold transition-colors duration-200 hover:text-yellow-300"
              style={{ color: 'rgba(232,228,255,0.7)' }}>
              {l}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-10">
          {socials.map(({ icon: Icon, color }, i) => (
            <div key={i}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{
                background: `${color}20`,
                border: `1px solid ${color}35`,
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}50`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
            >
              <Icon className="text-sm" style={{ color, filter: `drop-shadow(0 0 4px ${color}80)` }} />
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(107,93,211,0.15)' }}>
          <p className="font-body text-xs" style={{ color: 'rgba(155,143,232,0.4)' }}>
            Copyright 2026 © | Powered by 
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1.5 font-body text-xs" style={{ color: 'rgba(155,143,232,0.4)' }}>
              
              <FaHeart className="text-dream-pink animate-pulse"
                style={{ filter: 'drop-shadow(0 0 4px rgba(192,132,176,0.7))', animationDuration: '1.5s' }} />
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(107,93,211,0.25)', border: '1px solid rgba(155,143,232,0.3)' }}>
              <FiArrowUp className="text-dream-lavender text-sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
