'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        width: '100%',
        maxWidth: '920px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      {/* Main bar */}
      <div
        style={{
          background: 'white',
          borderRadius: '0 0 2rem 2rem',
          padding: '1rem 2rem',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.18)' : '0 4px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          transition: 'box-shadow 0.5s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            color: '#1a1a5e',
            textDecoration: 'none',
            fontSize: '1.6rem',
            fontWeight: 900,
            letterSpacing: '-1px',
            textTransform: 'uppercase' as const,
            flexShrink: 0,
          }}
        >
          Tim Star
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: '#1a1a5e',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a
            href="#about-book"
            style={{
              background: '#1a1a5e',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.7rem 1.4rem',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(26,26,94,0.3)',
            }}
          >
            Get Your book
            <span
              style={{
                background: 'rgba(255,255,255,0.2)',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaArrowRight style={{ fontSize: '0.6rem' }} />
            </span>
          </a>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: '#1a1a5e',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.3rem',
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: 'white',
            borderRadius: '0 0 1.5rem 1.5rem',
            padding: '1.2rem 2rem',
            boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
            marginTop: '2px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: '#1a1a5e',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    display: 'block',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#about-book"
            style={{
              background: '#1a1a5e',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Get Your book
            <FaArrowRight style={{ fontSize: '0.75rem' }} />
          </a>
        </div>
      )}
    </nav>
  )
}