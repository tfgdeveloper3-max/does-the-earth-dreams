'use client'
import { useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { BsLightbulbFill } from 'react-icons/bs'
import { GiFeather, GiSpellBook } from 'react-icons/gi'
import { BsStarFill } from 'react-icons/bs'
import { IoRocketSharp } from 'react-icons/io5'

export default function AboutAuthor() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 130))
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="author" ref={ref} className="section-light relative overflow-hidden">
      {/* Wave top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* Floating deco */}
      <GiSpellBook className="absolute text-violet-200 text-5xl opacity-20" style={{ top: '15%', right: '5%', transform: 'rotate(12deg)' }} />
      <BsStarFill className="absolute text-yellow-300 text-2xl opacity-30" style={{ top: '20%', left: '5%' }} />
      <IoRocketSharp className="absolute text-violet-300 text-3xl opacity-20" style={{ bottom: '20%', right: '8%' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Avatar side */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Outer orbit rings */}
              <div className="absolute -inset-10 " />
              <div className="absolute -inset-16 " style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

              {/* Main circle */}
              <div className="w-100 h-100 overflow-hidden flex items-center justify-center"
               >
                <img
                  src="/images/About-Author.png"
                  alt="Tim Star"
                  className="w-full h-full"
                />
              </div>
              {/* Floating deco items around avatar */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #ffd166, #ff9f1c)', boxShadow: '0 4px 15px rgba(255,209,102,0.5)' }}>
                <BsLightbulbFill className="text-white text-lg" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6b5dd3, #c084b0)', boxShadow: '0 4px 15px rgba(107,93,211,0.4)' }}>
                <GiFeather className="text-white text-sm" />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="reveal flex items-center gap-2 mb-3">
              <BsLightbulbFill className="text-yellow-500 text-base" />
              <span className="font-body font-bold text-violet-600 text-sm uppercase tracking-wider">Author </span>
            </div>

            <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-2">
              About the Author - 
              <span style={{ color: 'var(--violet)' }}> Tim Star</span>
            </h2>

            <p className="reveal font-body text-gray-600 text-base leading-relaxed mb-6">
              Not in 2024 or at any time in the past 71 years did Tim Star ever think of writing a book (much less a children’s book.) People thought of him as a contractor or maybe an architect but certainly not a writer. Some, who knew him longer, remember that he owned record stores in Hawaii or that he was kind of a serial entrepreneur…..starting a new business every few years (some of them even successful). But children’s books? Does he even read children’s books? Yes he does, apparently. <br />
              So now, to let the readers in on a secret only his dearest friends know…..Tim is kind of a softy at heart and this Does The Earth Dream book was obviously written for his own inner child. And maybe, just maybe, some other children, masquerading as adults, will enjoy sharing it with their grandkids too!
              One last thing……Tim is really good at interpreting dreams.
            </p>

            <a href="#contact" className="reveal inline-flex items-center gap-2 font-body font-bold text-base px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #6b5dd3, #c084b0)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(107,93,211,0.35)',
              }}>
              More About <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,0 360,80 540,40 C720,0 900,80 1080,40 C1260,0 1440,60 1440,40 L1440,80 L0,80 Z" fill="#0d0d2b" />
        </svg>
      </div>
    </section>
  )
}
