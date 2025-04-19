import { getMDXComponent } from 'mdx-bundler/client'
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import { getPost } from '~/utils/content.server'
import type { LoaderFunction } from '@remix-run/node'
import { useMemo } from 'react'
import { Header } from '~/components/Header'

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug
  const post = await getPost(slug!)

  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }

  return { post }
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="font-bodyflex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4">
            Sorry, we couldn't find the post you're looking for.
          </p>
        </div>
      )
    }
  }

  return (
    <div className="font-body flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-4">Something went wrong while loading this post.</p>
    </div>
  )
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>()

  const Component = useMemo(() => {
    if (!post?.code) return null
    return getMDXComponent(post.code)
  }, [post?.code])

  try {
    return (
      <article className="font-body prose max-w-4xl mt-16">
        <h1 className="font-display">{post.frontmatter.meta?.title}</h1>
        {Component && <Component />}
      </article>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
