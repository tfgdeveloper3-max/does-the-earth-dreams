'use client'
import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaGlobe, FaInstagram, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaUser, FaCommentDots, FaPhone } from 'react-icons/fa'

const info = [
  { icon: FaEnvelope,     label: 'Email',    val: 'hello@earthdreams.com', color: '#6b5dd3' },
  { icon: FaPhone,        label: 'Phone',    val: '+1 (555) 123-4567',     color: '#c084b0' },
  { icon: FaInstagram,    label: 'Social',   val: '@EarthDreamsBook',      color: '#9b8fe8' },
  { icon: FaMapMarkerAlt, label: 'Location', val: 'The Dreaming Universe', color: '#6b5dd3' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [status,  setStatus]  = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100))
      })
    }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setLoading(false)
  }

  return (
    <section id="contact" ref={ref} className="section-light relative overflow-hidden">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="reveal font-body font-bold text-violet-600 text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-gray-900">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="reveal rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, #6b5dd3, #c084b0)', boxShadow: '0 10px 40px rgba(107,93,211,0.3)' }}>
              <h3 className="font-display font-bold text-xl text-white mb-2">Say Hello 👋</h3>
              <p className="font-body text-sm leading-relaxed text-white/80">
                Whether you're a bookseller, educator, parent, or just a fan — we'd love to hear from you!
              </p>
            </div>
            {info.map(({ icon: Icon, label, val, color }) => (
              <div key={label}
                className="reveal flex items-center gap-4 p-4 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'white', border: '1.5px solid rgba(107,93,211,0.1)',
                  boxShadow: '0 4px 20px rgba(107,93,211,0.06)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${color}20`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(107,93,211,0.06)'}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${color}15`, boxShadow: `0 0 15px ${color}20` }}>
                  <Icon className="text-base" style={{ color }} />
                </div>
                <div>
                  <div className="font-body text-xs font-bold uppercase tracking-wider mb-0.5 text-gray-400">{label}</div>
                  <div className="font-body text-gray-800 text-sm font-semibold">{val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="reveal rounded-2xl p-8"
              style={{ background: 'white', boxShadow: '0 10px 50px rgba(107,93,211,0.1)', border: '1px solid rgba(107,93,211,0.08)' }}>
              {status === 'success' ? (
                <div className="text-center py-14">
                  <FaCheckCircle className="text-6xl mx-auto mb-4 text-violet-500" />
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">Message Sent!</h3>
                  <p className="font-body text-gray-500">We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-gray-600 mb-2">
                        <FaUser className="text-xs text-violet-500" /> Name
                      </label>
                      <input name="name" type="text" className="dream-input" placeholder="Your name" onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-bold text-gray-600 mb-2">
                        <FaEnvelope className="text-xs text-violet-500" /> Email
                      </label>
                      <input name="email" type="email" className="dream-input" placeholder="your@email.com" onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-gray-600 mb-2">
                      <FaCommentDots className="text-xs text-violet-500" /> Subject
                    </label>
                    <select name="subject" className="dream-input" onChange={handleChange} required>
                      <option value="">Select a topic...</option>
                      <option value="press">Press & Media</option>
                      <option value="schools">Schools & Libraries</option>
                      <option value="events">Events & Appearances</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-bold text-gray-600 mb-2">
                      <FaCommentDots className="text-xs text-violet-500" /> Message
                    </label>
                    <textarea name="message" rows={5} className="dream-input resize-none"
                      placeholder="Tell us what's on your mind..." onChange={handleChange} required />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center text-base py-3.5 gap-2">
                    {loading
                      ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-yellow-900/30 border-t-yellow-900 rounded-full animate-spin" /> Sending...</span>
                      : <><FaPaperPlane /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
