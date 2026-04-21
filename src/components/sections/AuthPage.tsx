'use client'
import { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

type Star = { id: number; left: string; top: string; size: string; delay: string; dur: string; color: string; opacity: number }
type Shoot = { id: number; top: string; left: string; delay: string; dur: string; angle: string; len: string }

export default function AuthPage() {
    const [mode, setMode] = useState<'login' | 'signup'>('login')
    const [showPass, setShowPass] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [stars, setStars] = useState<Star[]>([])
    const [shoots, setShoots] = useState<Shoot[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const colors = ['#fff', '#e8e4ff', '#fcd34d', '#c0b8ff']
        setStars(
            Array.from({ length: 260 }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${0.5 + Math.random() * 2}px`,
                delay: `${(Math.random() * 6).toFixed(2)}s`,
                dur: `${(2 + Math.random() * 4).toFixed(2)}s`,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: parseFloat((0.3 + Math.random() * 0.65).toFixed(2)),
            }))
        )

        setShoots(
            Array.from({ length: 6 }, (_, i) => ({
                id: i,
                top: `${(5 + Math.random() * 35).toFixed(1)}%`,
                left: `${(5 + Math.random() * 65).toFixed(1)}%`,
                delay: `${(i * 3.5 + Math.random() * 2).toFixed(2)}s`,
                dur: `${(0.6 + Math.random() * 0.5).toFixed(2)}s`,
                angle: `${(15 + Math.random() * 25).toFixed(1)}deg`,
                len: `${Math.round(80 + Math.random() * 100)}px`,
            }))
        )
    }, [])

    return (
        <div style={{ minHeight: '100vh', display: 'flex', fontFamily: '"Nunito",sans-serif', overflow: 'hidden', background: '#04040f' }}>

            {/* ── LEFT PANEL ── */}
            <div style={{
                flex: '0 0 50%', position: 'relative', overflow: 'hidden',
                background: 'linear-gradient(160deg,#04040f 0%,#08081e 40%,#0c0c2a 70%,#0f0f38 100%)',
            }}>

                {mounted && stars.map(s => (
                    <div key={s.id} style={{
                        position: 'absolute', left: s.left, top: s.top,
                        width: s.size, height: s.size, borderRadius: '50%',
                        background: s.color, opacity: s.opacity,
                        animation: `twinkle ${s.dur} ${s.delay} ease-in-out infinite`,
                    }} />
                ))}

                {mounted && shoots.map(s => (
                    <div key={s.id} style={{
                        position: 'absolute', top: s.top, left: s.left,
                        width: s.len, height: '1.5px',
                        background: 'linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.9))',
                        borderRadius: '9999px',
                        transform: `rotate(${s.angle})`,
                        opacity: 0,
                        animation: `shoot ${s.dur} ${s.delay} ease-out infinite`,
                        transformOrigin: 'left center',
                    }} />
                ))}

                {/* Nebula blobs */}
                <div style={{
                    position: 'absolute', top: '5%', left: '10%', width: '55%', height: '55%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(80,60,200,0.08) 0%,transparent 70%)',
                    filter: 'blur(40px)', pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%', width: '40%', height: '40%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(160,80,150,0.06) 0%,transparent 70%)',
                    filter: 'blur(35px)', pointerEvents: 'none',
                }} />

                {/* ── Earth + Moon ── */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-52%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    {/* Orbit ring */}
                    <div style={{
                        position: 'absolute', width: '420px', height: '140px',
                        borderRadius: '50%', border: '1px dashed rgba(155,143,232,0.18)',
                        pointerEvents: 'none',
                    }} />

                    {/* ── Earth — completely static ── */}
                    <div style={{
                        width: '320px', height: '320px', borderRadius: '50%', overflow: 'hidden',
                        flexShrink: 0, position: 'relative', zIndex: 2,
                    
                    }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/Earth.png"
                            alt="Earth"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover', display: 'block',
                            }}
                        />
                        {/* Night shadow */}
                        <div style={{
                            position: 'absolute', inset: 0, borderRadius: '50%',
                            background: 'radial-gradient(ellipse at 70% 55%,rgba(0,5,25,0) 25%,rgba(0,5,25,0.55) 60%,rgba(0,5,25,0.85) 85%)',
                            pointerEvents: 'none',
                        }} />
                        {/* Atmospheric rim */}
                        <div style={{
                            position: 'absolute', inset: '-3px', borderRadius: '50%',
                            boxShadow: 'inset 0 0 18px 6px rgba(80,160,255,0.25)',
                            pointerEvents: 'none',
                        }} />
                    </div>

                    {/* ── Moon orbit wrapper */}
                    <div style={{
                        position: 'absolute', width: '420px', height: '140px',
                        animation: 'moonOrbit 50s linear infinite',
                        transformOrigin: 'center center',
                    }}>
                        {/* Moon */}
                        <div style={{
                            position: 'absolute', right: '-40px', top: '50%',
                            width: '80px', height: '80px', overflow: 'hidden',
                            animation: 'moonCounter 32s linear infinite',
                            
                        }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/Moon.png"
                                alt="Moon"
                                style={{
                                    width: '100%', height: '100%',
                                    objectFit: 'cover', display: 'block',
                                    filter: 'brightness(0.88) contrast(1.05)',
                                }}
                            />
                            {/* Moon shadow */}
                            {/* <div style={{
                                position: 'absolute', inset: 0, borderRadius: '50%',
                                background: 'radial-gradient(ellipse at 68% 52%,rgba(0,0,10,0) 20%,rgba(0,0,10,0.52) 58%,rgba(0,0,10,0.82) 85%)',
                                pointerEvents: 'none',
                            }} /> */}
                        </div>
                    </div>

                    {/* Sparkles */}
                    {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} style={{
                            position: 'absolute', width: '6px', height: '6px', borderRadius: '50%',
                            background: i % 2 === 0 ? '#fcd34d' : '#c084b0',
                            animation: `sparkle${i} ${3 + i * 0.4}s ${i * 0.7}s ease-in-out infinite`,
                            boxShadow: `0 0 6px 2px ${i % 2 === 0 ? 'rgba(252,211,77,0.6)' : 'rgba(192,132,176,0.6)'}`,
                        }} />
                    ))}
                </div>

                {/* Bottom text */}
                <div style={{ position: 'absolute', bottom: '5%', left: '6%', zIndex: 10 }}>
                    <p style={{ color: '#9b8fe8', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
                        ✦ &nbsp;Children's Picture Book
                    </p>
                    <h2 style={{ fontFamily: '"Playfair Display",serif', fontWeight: 900, fontSize: 'clamp(1.4rem,2.8vw,2.2rem)', color: 'white', lineHeight: 1.15, margin: 0 }}>
                        {mode === 'login' ? 'WELCOME BACK TO' : 'START YOUR'}
                        <br />
                        <span style={{ backgroundImage: 'linear-gradient(135deg,#ffd166,#ff9f1c)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                            {mode === 'login' ? 'YOUR ADVENTURE!' : 'DREAM JOURNEY!'}
                        </span>
                    </h2>
                </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div style={{
                flex: '0 0 50%',
                background: 'linear-gradient(180deg,#06061a 0%,#0c0c28 55%,#10103a 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem', position: 'relative',
                borderLeft: '1px solid rgba(107,93,211,0.15)', overflowY: 'auto',
            }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(107,93,211,0.16) 0%,transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '8%', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(192,132,176,0.09) 0%,transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

                <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>
                    <p style={{ color: '#9b8fe8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '0.3rem' }}>
                        {mode === 'login' ? '— Welcome back' : '— New here?'}
                    </p>
                    <h1 style={{ fontFamily: '"Playfair Display",serif', fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'white', margin: '0 0 1.5rem', letterSpacing: '-1px', lineHeight: 1 }}>
                        {mode === 'login' ? 'SIGN IN' : 'SIGN UP'}
                    </h1>

                    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', borderRadius: '9999px', padding: '3px', marginBottom: '1.6rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                        {(['login', 'signup'] as const).map(t => (
                            <button key={t} onClick={() => setMode(t)} style={{
                                flex: 1, padding: '0.55rem', borderRadius: '9999px', border: 'none', cursor: 'pointer',
                                fontSize: '0.85rem', fontWeight: 700, fontFamily: '"Nunito",sans-serif', transition: 'all 0.3s',
                                background: mode === t ? 'linear-gradient(135deg,#6b5dd3,#c084b0)' : 'transparent',
                                color: mode === t ? 'white' : 'rgba(232,228,255,0.38)',
                                boxShadow: mode === t ? '0 4px 15px rgba(107,93,211,0.4)' : 'none',
                            }}>{t === 'login' ? 'Sign In' : 'Sign Up'}</button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {mode === 'signup' && <Field icon={<FaUser />} type="text" placeholder="Your full name" label="FULL NAME" />}
                        <Field icon={<FaEnvelope />} type="email" placeholder="you@example.com" label="EMAIL ADDRESS" />
                        <div style={{ position: 'relative' }}>
                            <Field icon={<FaLock />} type={showPass ? 'text' : 'password'} placeholder="••••••••" label="PASSWORD" />
                            <EyeBtn show={showPass} toggle={() => setShowPass(v => !v)} />
                        </div>
                        {mode === 'signup' && (
                            <div style={{ position: 'relative' }}>
                                <Field icon={<FaLock />} type={showConfirm ? 'text' : 'password'} placeholder="Confirm password" label="CONFIRM PASSWORD" />
                                <EyeBtn show={showConfirm} toggle={() => setShowConfirm(v => !v)} />
                            </div>
                        )}
                        {mode === 'login' && (
                            <div style={{ textAlign: 'right', marginTop: '-0.5rem' }}>
                                <a href="#" style={{ color: '#9b8fe8', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        )}

                        <button style={{
                            width: '100%', padding: '0.95rem',
                            background: 'linear-gradient(135deg,#6b5dd3 0%,#c084b0 100%)',
                            border: 'none', borderRadius: '0.875rem', color: 'white',
                            fontSize: '1rem', fontWeight: 800, fontFamily: '"Nunito",sans-serif',
                            cursor: 'pointer', letterSpacing: '0.05em',
                            boxShadow: '0 8px 30px rgba(107,93,211,0.45)', transition: 'all 0.3s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(107,93,211,0.6)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(107,93,211,0.45)' }}
                        >{mode === 'login' ? 'Sign In' : 'Create Account'}</button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                            <span style={{ color: 'rgba(232,228,255,0.28)', fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.08em' }}>Or continue with</span>
                            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <SocialBtn icon={<GoogleIcon />} label="Google" />
                            <SocialBtn icon={<TwitterIcon />} label="Twitter" />
                        </div>
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '1.4rem', color: 'rgba(232,228,255,0.3)', fontSize: '0.78rem', lineHeight: 1.7 }}>
                        {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                        <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9b8fe8', fontWeight: 700, fontSize: '0.78rem', fontFamily: '"Nunito",sans-serif' }}>
                            {mode === 'login' ? 'Sign up free' : 'Sign in'}
                        </button>
                        <br />
                        By registering you agree to our{' '}
                        <a href="#" style={{ color: '#9b8fe8', textDecoration: 'none' }}>Terms and Conditions</a>
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes twinkle {
          0%,100%{opacity:inherit;transform:scale(1)}
          50%{opacity:0.05;transform:scale(0.4)}
        }
        @keyframes shoot {
          0%{opacity:0;transform:rotate(var(--a,20deg)) translateX(0)}
          8%{opacity:1}
          100%{opacity:0;transform:rotate(var(--a,20deg)) translateX(220px)}
        }

        /* Moon orbits Earth horizontally along an ellipse */
        @keyframes moonOrbit {
          from{ transform: rotate(0deg) }
          to  { transform: rotate(360deg) }
        }
        /* Counter-rotate so Moon image stays upright */
        @keyframes moonCounter {
          0%  { transform: translateY(-50%) rotate(0deg) }
          100%{ transform: translateY(-50%) rotate(-360deg) }
        }

        @keyframes sparkle0{0%,100%{transform:translate(170px,-40px);opacity:.8}50%{transform:translate(165px,-45px);opacity:.2}}
        @keyframes sparkle1{0%,100%{transform:translate(-175px,25px);opacity:.7}50%{transform:translate(-170px,30px);opacity:.2}}
        @keyframes sparkle2{0%,100%{transform:translate(100px,135px);opacity:.9}50%{transform:translate(105px,130px);opacity:.2}}
        @keyframes sparkle3{0%,100%{transform:translate(-90px,-135px);opacity:.6}50%{transform:translate(-95px,-130px);opacity:.2}}
        @keyframes sparkle4{0%,100%{transform:translate(25px,-155px);opacity:.8}50%{transform:translate(20px,-150px);opacity:.2}}

        input::placeholder{color:rgba(232,228,255,0.2)!important}
        *{box-sizing:border-box}
        @media(max-width:768px){
          .auth-left{display:none!important}
          .auth-right{flex:0 0 100%!important}
        }
      `}</style>
        </div>
    )
}

function Field({ icon, type, placeholder, label }: { icon: React.ReactNode; type: string; placeholder: string; label: string }) {
    return (
        <div>
            <label style={{ display: 'block', color: 'rgba(232,228,255,0.42)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '0.4rem' }}>{label}</label>
            <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(155,143,232,0.42)', fontSize: '0.85rem', pointerEvents: 'none' }}>{icon}</span>
                <input type={type} placeholder={placeholder} style={{
                    width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(107,93,211,0.20)',
                    borderRadius: '0.75rem', color: 'white', fontSize: '0.9rem',
                    fontFamily: '"Nunito",sans-serif', outline: 'none', transition: 'all 0.3s',
                }}
                    onFocus={e => { e.target.style.borderColor = '#6b5dd3'; e.target.style.background = 'rgba(107,93,211,0.09)'; e.target.style.boxShadow = '0 0 0 3px rgba(107,93,211,0.14)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(107,93,211,0.20)'; e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.boxShadow = 'none' }}
                />
            </div>
        </div>
    )
}
function EyeBtn({ show, toggle }: { show: boolean; toggle: () => void }) {
    return (
        <button onClick={toggle} style={{ position: 'absolute', right: '1rem', bottom: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(232,228,255,0.3)', fontSize: '0.95rem' }}>
            {show ? <FaEyeSlash /> : <FaEye />}
        </button>
    )
}
function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', cursor: 'pointer', color: 'white', fontSize: '0.88rem', fontWeight: 700, fontFamily: '"Nunito",sans-serif', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >{icon} {label}</button>
    )
}
function GoogleIcon() {
    return <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.2 30.2 0 24 0 14.6 0 6.5 5.4 2.5 13.3l7.8 6C12.3 13.1 17.7 9.5 24 9.5z" /><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8C43.6 37.4 46.5 31.4 46.5 24.5z" /><path fill="#FBBC05" d="M10.3 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.8.9 7.4 2.5 10.7l7.8-6z" /><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2.1 1.4-4.7 2.3-7.7 2.3-6.3 0-11.7-3.6-13.7-8.8l-7.8 6C6.5 42.6 14.6 48 24 48z" /></svg>
}
function TwitterIcon() {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
}