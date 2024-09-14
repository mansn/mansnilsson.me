import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        montserrat: 'MontSerrat',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
} satisfies Config
