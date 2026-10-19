# Architecture

Personal site / blog built with React Router v7 (framework mode, SSR) on Vite,
deployed to Vercel. Content is MDX bundled at request time with `mdx-bundler`.
Styling is zero-runtime CSS via Linaria (`@linaria/react` / `@linaria/core`,
compiled by `@wyw-in-js/vite`).

## Module map

```mermaid
flowchart TD
  subgraph Build["Build / config"]
    vite["vite.config.ts<br/>plugins: @mdx-js/rollup, reactRouter,<br/>tsconfigPaths (~/* → app/*), wyw (Linaria)"]
    rrconf["react-router.config.ts<br/>ssr: true, vercelPreset()"]
    routesTs["app/routes.ts<br/>flatRoutes() — file-based routing"]
  end

  subgraph Client["Client entry"]
    entryClient["app/entry.client.tsx<br/>HydratedRouter + PostHog init"]
  end

  subgraph Shell["App shell"]
    root["app/root.tsx<br/>html/head, Google Fonts links,<br/>Vercel Analytics"]
    global["app/styles/global.ts<br/>globalStyles (Linaria :global)"]
    header["Header"]
    footer["Footer"]
    wrapper["FullWidthWrapper<br/>(MaxWidthWrapper)"]
    social["SocialList"]
  end

  subgraph Routes["app/routes/"]
    index["_index.tsx → /<br/>loader: getIntro(), getPosts()"]
    about["about.tsx → /about<br/>static, no loader"]
    blogIndex["blog._index.tsx → /blog<br/>loader: getPosts()<br/>ErrorBoundary"]
    blogSlug["blog.$slug.tsx → /blog/:slug<br/>loader: getPost(slug), 404 if missing<br/>ErrorBoundary"]
  end

  subgraph Shared["app/shared/components/"]
    anchor["AnchorOrLink<br/>http href → &lt;a target=_blank&gt;<br/>else → react-router Link"]
    mdxComps["MdxComponents({ AnchorOrLink })<br/>maps a → AnchorOrLink, code → InlineCode | CodeBlock"]
    inlineCode["MdxComponents/InlineCode"]
    codeBlock["MdxComponents/CodeBlock"]
  end

  subgraph Server["Server-only"]
    contentServer["app/utils/content.server.ts<br/>getIntro / getPost / getPosts<br/>bundleMDX + remark-gfm + rehype-highlight"]
  end

  subgraph Content["app/content/"]
    intro["intro.mdx"]
    posts["posts/*.mdx<br/>frontmatter.meta: { post, date, title }"]
  end

  rrconf --> routesTs --> Routes
  entryClient --> root
  root --> global
  root --> header --> social
  root --> wrapper
  root --> footer
  root -- "&lt;Outlet /&gt;" --> Routes

  index --> contentServer
  blogIndex --> contentServer
  blogSlug --> contentServer
  contentServer -- "fs.readFile" --> intro
  contentServer -- "fs.readdir / readFile" --> posts

  index --> mdxComps
  blogSlug --> mdxComps
  index --> anchor
  about --> anchor
  blogIndex --> anchor
  blogSlug --> anchor
  mdxComps --> inlineCode
  mdxComps --> codeBlock
```

## Request flow: rendering a blog post

```mermaid
sequenceDiagram
  participant B as Browser
  participant R as React Router (SSR, Vercel)
  participant L as blog.$slug.tsx loader
  participant C as content.server.ts
  participant FS as app/content/posts

  B->>R: GET /blog/:slug
  R->>L: loader({ params })
  L->>C: getPost(slug)
  C->>FS: readFile(`${slug}.mdx`)
  FS-->>C: MDX source
  C->>C: bundleMDX (remark-gfm, rehype-highlight)
  C-->>L: { code, frontmatter }
  alt file missing / no post
    L-->>R: throw Response 404
    R-->>B: ErrorBoundary ("Post Not Found")
  else ok
    L-->>R: post
    R->>R: getMDXComponent(code) rendered with MdxComponents({ AnchorOrLink })
    R-->>B: HTML + hydration scripts
    B->>B: entry.client.tsx hydrates, PostHog + Vercel Analytics init
  end
```

## Conventions and gotchas

- Adding a post: create `app/content/posts/<slug>.mdx` with frontmatter under
  `meta` (`post`, `date` as `YYYY-MM-DD`, `title`). The **filename must equal
  `meta.post`**, because `/blog` links use `meta.post` while `getPost` reads the
  file by that slug.
- `getPosts()` bundles every post on each request (no caching) and sorts by
  `meta.date` descending. Both `/` and `/blog` call it.
- View transitions: the blog list link and the post `<Title>` share a
  `viewTransitionName` derived from the title (lowercased, spaces → `-`).
- MDX is compiled at runtime via `mdx-bundler`, not by the `@mdx-js/rollup` Vite
  plugin. Images (`.png`, `.gif`) imported in MDX are inlined as data URLs.
- Any file named `*.server.ts` is server-only; don't import it from client code
  except through a route `loader`.
- All styling uses Linaria. `styled-components` is installed but not used in
  `app/`.
- Static assets (e.g. `/images/me.webp`) live in `public/`.
