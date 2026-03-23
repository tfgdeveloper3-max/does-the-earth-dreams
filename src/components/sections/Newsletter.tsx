'use client'
import { useEffect, useRef, useState } from 'react'
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaUser } from 'react-icons/fa'
import { BsStarFill } from 'react-icons/bs'

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [name,  setName]  = useState('')
  const [status,  setStatus]  = useState<'idle' | 'success'>('idle')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 130))
      })
    }, { threshold: 0.08 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setLoading(false)
    setEmail(''); setName('')
  }

  return (
    <section id="newsletter" ref={ref} className="section-dark relative overflow-hidden">
      <BsStarFill className="deco-star text-yellow-300 text-xl" style={{ top: '15%', left: '8%' }} />
      <BsStarFill className="deco-star text-dream-rose text-sm" style={{ top: '30%', right: '10%', animationDelay: '1s' }} />
      <BsStarFill className="deco-star text-dream-lavender text-xs" style={{ bottom: '20%', left: '15%', animationDelay: '0.5s' }} />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center" ref={ref}>
        <p className="reveal font-body font-bold text-yellow-400 text-sm uppercase tracking-widest mb-2">Stay Updated</p>
        <h2 className="reveal font-display font-bold text-3xl md:text-4xl text-white mb-3">Join Our Newsletter</h2>
        <p className="reveal font-body text-base mb-10" style={{ color: 'rgba(232,228,255,0.65)' }}>
          Get book updates, dreamy stories, and exclusive content delivered straight to your inbox.
        </p>

        <div className="reveal rounded-3xl p-8"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(155,143,232,0.2)',
            boxShadow: '0 0 80px rgba(107,93,211,0.15)',
          }}>
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="relative inline-block mb-4">
                <FaCheckCircle className="text-6xl text-yellow-400"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,209,102,0.8))' }} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-1">You're in!</h3>
              <p className="font-body text-dream-lavender text-sm">Welcome! Check your inbox for a welcome surprise.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaUser className="text-xs" /> Your Name
                  </label>
                  <input type="text" className="dream-input" placeholder="Your Name"
                    value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="text-left">
                  <label className="flex items-center gap-2 font-body text-sm font-bold text-dream-lavender mb-2">
                    <FaEnvelope className="text-xs" /> Email Address
                  </label>
                  <input type="email" className="dream-input" placeholder="you@email.com"
                    value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
              </div>
              <button type="submit" disabled={loading}
                className="btn-primary w-full justify-center text-base py-3.5 gap-2 mt-1">
                {loading
                  ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-yellow-900/30 border-t-yellow-900 rounded-full animate-spin" /> Sending...</span>
                  : <><FaPaperPlane /> Subscribe Now</>}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
