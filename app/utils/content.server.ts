import parseFrontMatter from 'front-matter'
import { readFile, readdir, access } from 'fs/promises'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'

async function fileExists(filename: string) {
  try {
    await access(filename)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false
    } else {
      throw err
    }
  }
}

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
  // Dynamically import all the rehype/remark plugins we are using
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import('rehype-highlight').then((mod) => mod.default),
    import('remark-gfm').then((mod) => mod.default),
  ])

  const mdx = await bundleMDX<Frontmatter>({
    source,
    cwd: process.cwd(),

    esbuildOptions: (options) => {
      // Configuration to allow image loading
      // https://github.com/kentcdodds/mdx-bundler#image-bundling
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
  const filePath = path.join(process.cwd(), 'app', 'content', 'intro.mdx')
  if (!(await fileExists(filePath))) return null

  const source = await readFile(filePath, 'utf-8')

  const post = await getMdx(source)

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
  const filePath = path.join(
    process.cwd(),
    'app',
    'content',
    'posts',
    slug + '.mdx'
  )
  if (!(await fileExists(filePath))) return null

  const source = await readFile(filePath, 'utf-8')

  const post = await getMdx(source)

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
  const filePath = path.join(process.cwd(), 'app', 'content', 'posts')

  const postsPath = await readdir(filePath, {
    withFileTypes: true,
  })

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const fPath = path.join(filePath, dirent.name)
      const [file] = await Promise.all([readFile(fPath)])
      const frontmatter = parseFrontMatter(file.toString())
      const attributes = frontmatter as Frontmatter

      return {
        slug: dirent.name.replace(/\.mdx/, ''),
        frontmatter: {
          ...attributes,
        },
      }
    })
  )
  return posts
}
