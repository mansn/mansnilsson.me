import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx,jsx,js,mdx}'],
  theme: {
    fontFamily: {
      display: 'Nunito',
      body: 'Quattrocento Sans',
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
} satisfies Config
