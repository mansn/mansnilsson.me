# AGENTS.md

This file is included in full context for every agent conversation. Keep it tiny and stable.

- Build/dev/start:
  - Build: pnpm run build (react-router build)
  - Dev/start dev server: pnpm run dev (local dev server)
  - Type check: pnpm run typecheck (react-router typegen + tsc)
- Lint/format (Vite+, configured in the lint/fmt blocks of vite.config.ts):
  - All checks: vp check (format + Oxlint + type-aware checks). Auto-fix: vp check --fix. Pre-commit hook runs vp staged.
  - Format: vp fmt (Oxfmt; semi=false, singleQuote=true, trailingComma=es5, printWidth=120). .md/.mdx are excluded and hand-formatted.
  - Lint: vp lint (Oxlint).
- Tests:
  - Unit: vp test (Vitest via Vite+; none yet, e2e/ is excluded).
  - E2E: Playwright in e2e/ (starts the dev server itself). Run all: pnpm run test:e2e. Single test: pnpm exec playwright test e2e/smoke.spec.ts -g "test name". First time: pnpm exec playwright install chromium.
- TypeScript/style:
  - TS strict=true; jsx=react-jsx; target ES2020; moduleResolution=Bundler; noEmit; Node ^22.18 || ^24.11 || >=26 required.
  - Use TypeScript (preferred over JS). Add explicit return types for loaders/actions/utils; leverage inference for locals.
  - Imports: group builtin/third-party first, then internal using ~/*alias (maps to app/*). Avoid unused imports.
  - Components PascalCase; variables/functions camelCase; route files follow React Router file-based routing (e.g., app/routes/blog.$slug.tsx).
  - Styling: linaria (@linaria/react) and styled-components are available; co-locate styles; name files *.styled.ts when applicable.
- Error handling:
  - Prefer try/catch around filesystem, network, and MDX bundling. For route errors, provide ErrorBoundary in route modules and return typed responses.
- Content/MDX:
  - Use app/content and app/utils/content.server.ts helpers (bundleMDX with remark-gfm, rehype-highlight). Keep frontmatter under frontmatter.meta.
  - Don’t autocomplete sentences in .md/.mdx.
- Verification
  - Typecheck your changes and run vp check
- Architecture
  - See [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for mermaid diagrams of modules, routes and the content/MDX request flow. Keep it updated when adding routes, components or content helpers.
