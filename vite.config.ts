import mdx from '@mdx-js/rollup'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remarkFrontmatter from 'remark-frontmatter'
import wyw from '@wyw-in-js/vite'

declare module '@remix-run/node' {
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter],
    }),
    remix({
      ignoredRouteFiles: ['**/*.css'],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
      },
    }),
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
