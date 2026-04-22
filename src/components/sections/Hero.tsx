'use client'
import { useEffect, useRef, useState } from 'react'
import { FaBookOpen, FaStar } from 'react-icons/fa'
import { GiFeather, GiSpellBook } from 'react-icons/gi'
import { IoRocketSharp } from 'react-icons/io5'
import { BsStarFill } from 'react-icons/bs'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [showBook, setShowBook] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveals = el.querySelectorAll('.reveal')
    reveals.forEach((c, i) =>
      setTimeout(() => c.classList.add('visible'), i * 200)
    )

    const textDelay = reveals.length * 200 + 300
    setTimeout(() => setShowBook(true), textDelay)
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '0',
        background: 'transparent',
      }}
    >

      {/* Floating deco icons */}
      <BsStarFill className="deco-star text-yellow-300 text-2xl" style={{ top: '18%', left: '8%', animationDelay: '0s' }} />
      <BsStarFill className="deco-star text-yellow-200 text-sm" style={{ top: '30%', left: '15%', animationDelay: '1s' }} />
      <GiFeather className="deco-star text-purple-300 text-3xl" style={{ top: '15%', right: '5%', animationDelay: '0.5s' }} />
      <GiSpellBook className="deco-star text-pink-300 text-2xl" style={{ bottom: '25%', right: '3%', animationDelay: '1.5s' }} />
      <IoRocketSharp className="deco-star text-yellow-300 text-3xl" style={{ bottom: '25%', left: '6%', animationDelay: '2s' }} />
      <BsStarFill className="deco-star text-pink-200 text-xs" style={{ top: '55%', left: '20%', animationDelay: '0.8s' }} />
      <BsStarFill className="deco-star text-yellow-300 text-base" style={{ top: '45%', left: '50%', animationDelay: '1.2s' }} />
      <BsStarFill className="deco-star text-yellow-200 text-xs" style={{ bottom: '15%', left: '55%', animationDelay: '0.4s' }} />

      {/* AboutBook-style background stars */}
      <BsStarFill className="deco-star text-yellow-300 text-xl" style={{ top: '10%', right: '10%', animationDelay: '0.5s' }} />
      <GiFeather className="deco-star text-purple-300 text-3xl" style={{ top: '20%', left: '5%', animationDelay: '1s' }} />
      <BsStarFill className="deco-star text-pink-300 text-sm" style={{ bottom: '20%', left: '12%', animationDelay: '1.5s' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'flex-end' }}>

          {/* Left: Text */}
          <div ref={ref} style={{ paddingBottom: '4rem' }}>
            <div
              className="reveal"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '1.25rem', padding: '0.4rem 1rem', borderRadius: '9999px',
                background: 'rgba(255,209,102,0.15)', border: '1px solid rgba(255,209,102,0.3)',
              }}
            >
              <BsStarFill style={{ color: '#fcd34d', fontSize: '0.75rem' }} />
              <span style={{ color: '#fcd34d', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Children's Picture Book
              </span>
            </div>

            <h1
              className="reveal"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: 'white',
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                textShadow: '0 0 40px rgba(155,143,232,0.3)',
              }}
            >
              Does the Earth<br />
              <span style={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #ffd166, #ff9f1c)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}>
                Dream?
              </span>
            </h1>

            <p
              className="reveal"
              style={{
                fontSize: '0.9rem', lineHeight: 1.7,
                marginBottom: '2rem', maxWidth: '480px',
                color: 'rgba(232,228,255,0.8)',
                fontFamily: '"Nunito", sans-serif',
              }}
            >
              What if the Earth could dream—just like us? In this beautifully imaginative children’s book, young readers are invited to explore a world where the Earth dances with the moon, chooses her clouds, and even weathers her own storms. Does the Earth Dream? is a lyrical, read-aloud experience that sparks curiosity, laughter, and wonder—perfect for bedtime, classrooms, and little minds full of big questions.
            </p>

            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#newsletter" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem', gap: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
                <FaBookOpen /> Get Your book
              </a>
              <a href="#about-book" className="btn-outline-white" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Learn More
              </a>
            </div>

            <div className="reveal" style={{ display: 'flex', gap: '2.5rem' }}>
              {[
                { val: '5★', label: 'Rating' },
                { val: '3-8', label: 'Age Group' },
                { val: '48', label: 'Pages' },
              ].map(s => (
                <div key={s.val}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: '1.5rem', color: '#fcd34d' }}>{s.val}</div>
                  <div style={{ fontFamily: '"Nunito", sans-serif', fontSize: '0.75rem', marginTop: '0.2rem', color: 'rgba(155,143,232,0.8)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Book Cover */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>

            {/* Glow blob */}
            <div style={{
              position: 'absolute',
              width: '550px', height: '550px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(107,93,211,0.45) 0%, rgba(192,132,176,0.15) 50%, transparent 70%)',
              filter: 'blur(40px)',
              transform: 'translate(-30px, 40px)',
              zIndex: 0,
              opacity: showBook ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }} />

            {/* Book container */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                opacity: showBook ? 1 : 0,
                transform: showBook ? 'translateY(0px)' : 'translateY(60px)',
                transition: 'opacity 0.9s ease, transform 0.9s ease',
                animation: showBook ? 'bookFloat 4s ease-in-out infinite' : 'none',
                animationDelay: '1.2s',
                marginBottom: '-60px',
              }}
            >
              {/* Shadow */}
              <div style={{
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '65%',
                height: '30px',
                background: 'rgba(107,93,211,0.5)',
                filter: 'blur(22px)',
                borderRadius: '50%',
                zIndex: 0,
              }} />

              {/* Book image */}
              <div style={{
                transform: 'perspective(1000px) rotateY(-4deg) rotateX(1deg)',
                filter: 'drop-shadow(20px 20px 50px rgba(0,0,0,0.75)) drop-shadow(0 0 70px rgba(107,93,211,0.45))',
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'center',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/book-cover.png"
                  alt="Does the Earth Dream?"
                  style={{
                    height: '95vh',
                    width: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    borderRadius: '0.75rem',
                  }}
                />
              </div>

              {/* Floating stars around book */}
              {[
                { top: '5%', right: '-6%', bottom: undefined, left: undefined, delay: '0s', size: '1.2rem' },
                { top: '25%', left: '-7%', bottom: undefined, right: undefined, delay: '0.6s', size: '0.9rem' },
                { bottom: '25%', right: '-5%', top: undefined, left: undefined, delay: '1.2s', size: '0.7rem' },
                { bottom: '12%', left: '-5%', top: undefined, right: undefined, delay: '0.3s', size: '1rem' },
              ].map((s, i) => (
                <FaStar
                  key={i}
                  style={{
                    position: 'absolute',
                    top: s.top, bottom: s.bottom, left: s.left, right: s.right,
                    color: '#fcd34d',
                    fontSize: s.size,
                    animationDelay: s.delay,
                    filter: 'drop-shadow(0 0 6px rgba(255,209,102,0.9))',
                    zIndex: 11,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Wavy bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}