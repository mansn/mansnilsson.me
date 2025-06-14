import fs from 'fs/promises'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

// The frontmatter can be any set of key values
// But that's not especially useful to use
// So we'll declare our own set of properties that we are going to expect to exist
export type Frontmatter = {
  meta?: {
    post?: string
    date?: string
    title?: string
  }
}

const getMdx = async (source: string) => {
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import('rehype-highlight').then((mod) => mod.default),
    import('remark-gfm').then((mod) => mod.default),
  ])

  const mdx = await bundleMDX<Frontmatter>({
    source,
    cwd: process.cwd(),
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
        '.gif': 'dataurl',
      }
      return options
    },
    mdxOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight,
      ]
      return options
    },
  })

  return mdx
}

export async function getIntro() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'app/content/intro.mdx'),
    'utf8'
  )

  const post = await getMdx(data)

  return {
    ...post,
    frontmatter: {
      ...post.frontmatter,
    },
  }
}

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getPost(slug: string) {
  const data = await fs.readFile(
    path.join(process.cwd(), `app/content/posts/${slug}.mdx`),
    'utf8'
  )
  const post = await getMdx(data)

  return {
    ...post,
    frontmatter: {
      ...post.frontmatter,
    },
  }
}

export async function getPosts() {
  const allPosts = await fs.readdir(
    path.join(process.cwd(), 'app/content/posts')
  )

  const mappedPosts = await Promise.all(
    allPosts.map(async (fileName) => {
      const postData = await fs.readFile(
        path.join(process.cwd(), `app/content/posts/${fileName}`),
        'utf8'
      )
      const mdxResult = await getMdx(postData)
      return {
        ...mdxResult,
      }
    })
  )

  const sortedPosts = mappedPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.meta?.date || 0)
    const dateB = new Date(b.frontmatter.meta?.date || 0)
    return dateB.getTime() - dateA.getTime()
  })

  return sortedPosts
}
