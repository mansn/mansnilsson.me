import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js,mdx}'],
  theme: {
    fontFamily: {
      display: 'Nunito',
      body: 'Hind Siliguri',
    },
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        dropIn: {
          '0%': { 
            opacity: '0',
            transform: 'translate3d(0, -32px, 0)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translate3d(0, 0, 0)'
          }
        }
      },
      animation: {
        dropIn: 'dropIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
} satisfies Config
