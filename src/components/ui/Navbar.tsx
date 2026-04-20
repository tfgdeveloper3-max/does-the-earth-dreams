'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#author' },
  { label: 'My Book', href: '#about-book' },
  { label: 'Blogs', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Render desktop layout on server (avoids hydration mismatch)
  const showMobile = mounted && isMobile

  return (
    <nav style={{
      position: 'fixed', top: 0, left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50, width: '100%', maxWidth: '980px',
      paddingLeft: '1rem', paddingRight: '1rem',
    }}>

      {/* Main bar */}
      <div style={{
        background: 'white',
        borderRadius: '0 0 2rem 2rem',
        padding: '0.9rem 1.75rem',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.18)' : '0 4px 24px rgba(0,0,0,0.12)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        width: '100%', transition: 'box-shadow 0.5s ease',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          color: '#1a1a5e', textDecoration: 'none',
          fontSize: '1.6rem', fontWeight: 900,
          letterSpacing: '-1px', textTransform: 'uppercase' as const,
          flexShrink: 0,
        }}>
          Tim Star
        </a>

        {/* Desktop nav links */}
        {!showMobile && (
          <ul style={{
            display: 'flex', alignItems: 'center', gap: '1.75rem',
            listStyle: 'none', margin: 0, padding: 0,
            flex: 1, justifyContent: 'center',
          }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  color: '#1a1a5e', textDecoration: 'none',
                  fontSize: '0.95rem', fontWeight: 600,
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#6b5dd3')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1a1a5e')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTAs */}
        {!showMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            <a href="/auth" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.2rem',
              background: 'transparent',
              border: '1.5px solid #6b5dd3',
              borderRadius: '9999px',
              color: '#6b5dd3',
              fontSize: '0.88rem', fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#6b5dd3'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#6b5dd3'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <HiSparkles style={{ fontSize: '0.9rem' }} />
              Login
            </a>

            <a href="#about-book" style={{
              background: '#1a1a5e', color: 'white',
              borderRadius: '9999px', padding: '0.65rem 1.3rem',
              textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700,
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(26,26,94,0.3)',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(26,26,94,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(26,26,94,0.3)'
              }}
            >
              Get Your book
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                width: '20px', height: '20px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FaArrowRight style={{ fontSize: '0.55rem' }} />
              </span>
            </a>
          </div>
        )}

        {/* Mobile */}
        {showMobile && (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="/auth" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
              padding: '0.45rem 0.9rem',
              border: '1.5px solid #6b5dd3', borderRadius: '9999px',
              color: '#6b5dd3', fontSize: '0.8rem', fontWeight: 700,
              textDecoration: 'none',
            }}>
              <HiSparkles style={{ fontSize: '0.8rem' }} />
              Login
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              color: '#1a1a5e', background: 'none', border: 'none',
              cursor: 'pointer', padding: '0.3rem',
              display: 'flex', alignItems: 'center',
            }}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {showMobile && menuOpen && (
        <div style={{
          background: 'white', borderRadius: '0 0 1.5rem 1.5rem',
          padding: '1.2rem 2rem', boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          marginTop: '2px',
        }}>
          <ul style={{
            listStyle: 'none', margin: 0, padding: 0,
            display: 'flex', flexDirection: 'column', gap: '1rem',
          }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  color: '#1a1a5e', textDecoration: 'none',
                  fontSize: '1rem', fontWeight: 600, display: 'block',
                }} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#about-book" style={{
            background: '#1a1a5e', color: 'white',
            borderRadius: '9999px', padding: '0.75rem 1.5rem',
            textDecoration: 'none', fontSize: '1rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem', marginTop: '1rem',
          }} onClick={() => setMenuOpen(false)}>
            Get Your book
            <FaArrowRight style={{ fontSize: '0.75rem' }} />
          </a>
        </div>
      )}
    </nav>
  )
}