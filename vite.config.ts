import mdx from '@mdx-js/rollup'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remarkFrontmatter from 'remark-frontmatter'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter],
    }),
    remix(),
    tsconfigPaths(),
  ],
})
