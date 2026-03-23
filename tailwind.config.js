/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dream': {
          'deep':     '#0f0c2e',
          'navy':     '#1a1650',
          'indigo':   '#2d2880',
          'cobalt':   '#3d3aaa',
          'violet':   '#6b5dd3',
          'lavender': '#9b8fe8',
          'pink':     '#c084b0',
          'rose':     '#d4a0c8',
          'star':     '#e8e4ff',
          'white':    '#f5f3ff',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body':    ['"Nunito"', 'sans-serif'],
        'accent':  ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'nebula': 'radial-gradient(ellipse at 20% 20%, #6b5dd3 0%, #2d2880 30%, #1a1650 60%, #0f0c2e 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 60% 30%, #6b5dd3 0%, #3d3aaa 20%, #1a1650 55%, #0f0c2e 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(107,93,211,0.15) 0%, rgba(45,40,128,0.3) 100%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'twinkle':    'twinkle 3s ease-in-out infinite',
        'drift':      'drift 20s linear infinite',
        'glow':       'glow 4s ease-in-out infinite',
        'slide-up':   'slideUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        twinkle:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.2' } },
        drift:    { '0%': { transform: 'translateX(-100vw)' }, '100%': { transform: 'translateX(100vw)' } },
        glow:     { '0%,100%': { boxShadow: '0 0 20px rgba(107,93,211,0.4)' }, '50%': { boxShadow: '0 0 50px rgba(107,93,211,0.8)' } },
        slideUp:  { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      boxShadow: {
        'dream': '0 0 40px rgba(107,93,211,0.3)',
        'dream-lg': '0 0 80px rgba(107,93,211,0.4)',
        'star': '0 0 10px rgba(232,228,255,0.8)',
      }
    },
  },
  plugins: [],
}
