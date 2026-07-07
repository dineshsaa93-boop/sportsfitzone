/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05070D',
        bg2: '#0A0F18',
        card: '#111827',
        card2: '#151E2F',
        green: {
          DEFAULT: '#39FF14',
          secondary: '#66FF33',
          tertiary: '#8AFF5A',
        },
        purple: {
          DEFAULT: '#8A2BE2',
          secondary: '#A855F7',
        },
        orange: {
          DEFAULT: '#FF9800',
          secondary: '#FFB300',
        },
        blue: {
          DEFAULT: '#23B5FF',
          cyan: '#00D9FF',
        },
      },
      boxShadow: {
        'green-glow': '0 0 40px rgba(57, 255, 20, 0.12)',
        'green-intense': '0 0 20px #39FF14',
        'purple-glow': '0 0 25px #8A2BE2',
      },
      borderRadius: {
        'btn': '18px',
        'card': '28px',
        'card-mini': '22px',
        'nav': '26px',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
