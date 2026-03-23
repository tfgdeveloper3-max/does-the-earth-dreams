'use client'
import { useEffect, useRef } from 'react'
import { FaArrowRight, FaUser, FaCalendarAlt } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'

const posts = [
  {
    tag: 'Author', tagColor: '#ff9f1c',
    date: '19 Mar, 2026',
    title: "How to Prepare Your Child for Their First Day",
    author: 'John Smith', role: 'Blog Writer', color: '#6b5dd3',
  },
  {
    tag: 'Author', tagColor: '#6b5dd3',
    date: '19 Mar, 2026',
    title: 'Discovering the Joys of Child Kindergarten...',
    author: 'John Smith', role: 'Blog Writer', color: '#c084b0',
  },
  {
    tag: 'Author', tagColor: '#e84855',
    date: '19 Mar, 2026',
    title: 'Creating Friendships and Memories in Schoo...',
    author: 'John Smith', role: 'Blog Writer', color: '#9b8fe8',
  },
]

export default function Blog() {
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
    <section id="blog" ref={ref} className="section-light relative overflow-hidden">
      {/* Wave top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>

      <BsStarFill className="absolute text-violet-200 text-xl opacity-30" style={{ top: '15%', right: '6%' }} />
      <BsStarFill className="absolute text-yellow-300 text-lg opacity-25" style={{ top: '60%', left: '4%' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="reveal font-body font-bold text-violet-600 text-sm uppercase tracking-widest mb-2">Latest Posts</p>
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">Our Latest Blogs</h2>
          <p className="reveal font-body text-gray-500 text-base max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i}
              className="reveal group rounded-2xl overflow-hidden cursor-pointer transition-all duration-350 hover:-translate-y-2"
              style={{
                background: 'white',
                boxShadow: '0 4px 30px rgba(107,93,211,0.08)',
                border: '1px solid rgba(107,93,211,0.08)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 15px 50px ${p.color}25`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 30px rgba(107,93,211,0.08)'}
            >
              {/* Image placeholder */}
              <div className="h-44 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.color}20, ${p.color}40)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: `${p.color}25`, border: `2px solid ${p.color}40` }}>
                    <FaUser className="text-2xl" style={{ color: p.color, opacity: 0.7 }} />
                  </div>
                </div>
                {/* Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-white font-bold text-xs"
                  style={{ background: p.tagColor }}>
                  {p.tag}
                </div>
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-body text-gray-400">
                    <FaCalendarAlt className="text-xs" style={{ color: p.color }} />
                    {p.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-4 group-hover:text-violet-700 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Author + arrow */}
                <div className="flex items-center justify-between pt-3"
                  style={{ borderTop: '1px solid rgba(107,93,211,0.08)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${p.color}, #c084b0)` }}>
                      {p.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body font-bold text-gray-700 text-xs">{p.author}</p>
                      <p className="font-body text-gray-400 text-xs">{p.role}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    <FaArrowRight className="text-xs" style={{ color: p.color }} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,0 360,80 540,40 C720,0 900,80 1080,40 C1260,0 1440,60 1440,40 L1440,80 L0,80 Z" fill="#0d0d2b"/>
        </svg>
      </div>
    </section>
  )
}
