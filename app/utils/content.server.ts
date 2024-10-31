import { bundleMDX } from 'mdx-bundler'
import fs from 'fs/promises'
import path from 'path'

// The frontmatter can be any set of key values
// But that's not especially useful to use
// So we'll declare our own set of properties that we are going to expect to exist
export type Frontmatter = {
  attributes: {
    meta?: {
      title?: string
      description?: string
    }
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
    path.join(process.cwd(), 'app/content/posts/intro.mdx'),
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

/**
 * Get all frontmatter for all posts
 * @returns
 */
export async function getPosts() {
  const allPosts = await fs.readdir(
    path.join(process.cwd(), 'app/content/posts')
  )

  // Use Promise.all to wait for all async operations to complete
  const mappedPosts = await Promise.all(
    allPosts.map(async (postData) => {
      const mdxResult = await getMdx(postData)
      return {
        ...mdxResult,
        frontmatter: {
          ...mdxResult.frontmatter,
        },
      }
    })
  )

  return mappedPosts
}
