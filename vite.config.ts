import mdx from '@mdx-js/rollup'
import { reactRouter } from '@react-router/dev/vite'
import { configDefaults, defineConfig, lazyPlugins } from 'vite-plus'
import remarkFrontmatter from 'remark-frontmatter'
import wyw from '@wyw-in-js/vite'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    printWidth: 120,
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    // Don't auto-format Markdown/MDX: reflowing paragraphs can split them
    // (e.g. around <br />) and rewrite `*` as `_`, changing the rendered page.
    ignorePatterns: ['**/*.md', '**/*.mdx'],
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  test: {
    // e2e/ holds Playwright specs (pnpm run test:e2e); no Vitest suites yet.
    exclude: [...configDefaults.exclude, 'e2e/**'],
    passWithNoTests: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: lazyPlugins(() => [
    mdx({
      remarkPlugins: [remarkFrontmatter],
    }),
    reactRouter(),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react', '@wyw-in-js/babel-preset'],
      },
    }),
  ]),
})
