import mdx from '@mdx-js/rollup'
import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remarkFrontmatter from 'remark-frontmatter'
import wyw from '@wyw-in-js/vite'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter],
    }),
    reactRouter(),
    tsconfigPaths(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: [
          '@babel/preset-typescript',
          '@babel/preset-react',
          '@wyw-in-js/babel-preset',
        ],
      },
    }),
  ],
})
