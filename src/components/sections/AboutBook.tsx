'use client'
import { useEffect, useRef } from 'react'
import { FaBookOpen, FaArrowRight, FaStar } from 'react-icons/fa'
import { BsLightbulbFill, BsStarFill } from 'react-icons/bs'
import { GiFeather } from 'react-icons/gi'
import { MdSchool } from 'react-icons/md'
import Image from 'next/image'

export default function AboutBook() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 110))
      })
    }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-book" ref={ref} className="section-dark relative overflow-hidden">
      {/* Stars deco */}
      <BsStarFill className="deco-star text-yellow-300 text-xl" style={{ top: '10%', right: '10%', animationDelay: '0.5s' }} />
      <GiFeather className="deco-star text-dream-lavender text-3xl" style={{ top: '20%', left: '5%', animationDelay: '1s' }} />
      <BsStarFill className="deco-star text-dream-rose text-sm" style={{ bottom: '20%', left: '12%', animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <div className="reveal flex items-center gap-2 mb-3">
              <MdSchool className="text-yellow-400 text-lg" />
              <span className="font-body font-bold text-yellow-400 text-sm uppercase tracking-wider">About Book</span>
            </div>

            <h2 className="reveal font-display font-bold leading-tight mb-5 text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Does the
              <span style={{ color: 'var(--yellow)' }}> Earth Dream?</span>
            </h2>

            <p className="reveal text-[16px] text-base leading-relaxed mb-6"
              style={{ color: 'rgba(232,228,255,0.75)' }}>
              Does the Earth Dream? is a playful and poetic children’s picture book that imagines our planet as a living, dreaming being. Through rhythmic storytelling and whimsical imagery, the Earth comes to life—sunbathing in golden light, dancing with the moon, choosing clouds, and even experiencing the occasional storm or silly nightmare. <br/>
              Blending gentle humor with meaningful themes, the story introduces children to ideas about nature, emotions, and imagination in a way that feels both fun and profound. It’s a book that not only entertains but also encourages empathy, curiosity, and a deeper appreciation for the world around us.
              Perfect for bedtime reading or classroom storytelling, this is a tale children will want to hear again and again.
            </p>

            <a href="#newsletter" className="reveal btn-primary gap-2">
              <FaBookOpen /> Get Your Book <FaArrowRight className="text-sm" />
            </a>
          </div>

          {/* Book mockup side */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute rounded-full"
                style={{
                  width: '380px', height: '380px',
                  background: 'radial-gradient(circle, rgba(107,93,211,0.35) 0%, rgba(192,132,176,0.12) 50%, transparent 70%)',
                  filter: 'blur(28px)',
                  transform: 'translate(-10px, 15px)',
                }} />

              {/* Book image */}
              <div className="relative animate-float" style={{ zIndex: 2 }}>
                {/* Shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full"
                  style={{ width: '70%', height: '24px', background: 'rgba(107,93,211,0.4)', filter: 'blur(16px)' }} />

                <div style={{
                  transform: 'perspective(1000px) rotateY(6deg) rotateX(2deg)',
                  filter: 'drop-shadow(18px 18px 35px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(107,93,211,0.35))',
                }}>
                  <Image
                    src="/images/about-book.png"
                    alt="Does the Earth Dream? - Book Cover"
                    width={380}
                    height={500}
                    className="rounded-xl"
                    style={{ objectFit: 'contain', maxHeight: '460px', width: 'auto' }}
                    priority
                  />
                </div>

                {/* Floating stars */}
                {[
                  { top: '8%', right: '-10%', delay: '0s', size: 'text-lg' },
                  { top: '25%', left: '-9%', delay: '0.7s', size: 'text-sm' },
                  { bottom: '18%', right: '-7%', delay: '1.3s', size: 'text-xs' },
                  { bottom: '8%', left: '-6%', delay: '0.4s', size: 'text-base' },
                ].map((s, i) => (
                  <FaStar key={i}
                    className={`absolute text-yellow-300 ${s.size} animate-pulse`}
                    style={{
                      top: s.top, bottom: s.bottom, left: s.left, right: s.right,
                      animationDelay: s.delay,
                      filter: 'drop-shadow(0 0 6px rgba(255,209,102,0.9))',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom to white */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
