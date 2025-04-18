import { Link, useLoaderData } from '@remix-run/react'
import { Header } from '~/components/Header'
import { getPosts } from '~/utils/content.server'

export async function loader() {
  const posts = await getPosts()
  return { posts }
}

export function ErrorBoundary() {
  return (
    <div className="font-body flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-4">
        Sorry, something went wrong while loading the blog posts.
      </p>
    </div>
  )
}

export default function BlogPosts() {
  const { posts } = useLoaderData<typeof loader>()

  console.log('posts -->', posts)
  try {
    return (
      <>
        <Header />
        <article className="font-body prose max-w-4xl mt-16">
          <ul>
            {posts.map((post) => {
              console.log('post -->', post)
              return (
                <li key={post.frontmatter.meta?.title} className="flex">
                  <Link
                    to={`/blog/${post.frontmatter.meta?.post}`}
                    className="flex-1 mt-0"
                  >
                    {post.frontmatter.meta?.title}
                  </Link>
                  <time>{post.frontmatter.meta?.date}</time>
                </li>
              )
            })}
          </ul>
        </article>
      </>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
