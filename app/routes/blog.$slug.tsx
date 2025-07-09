import { getMDXComponent } from 'mdx-bundler/client'
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router'
import { getPost } from '~/utils/content.server'
import type { LoaderFunctionArgs } from 'react-router'
import { useMemo } from 'react'
import { styled } from '@linaria/react'
import StyledLink from '~/shared/components/Link'

const mdxComponents = {
  a: StyledLink,
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug
  if (!slug) throw new Response('Not Found', { status: 404 })

  const post = await getPost(slug)

  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }

  return post
}

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`

const Article = styled.article`
  font-family: 'Roboto', sans-serif;
  max-width: 56rem;
`

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Container>
          <Title>Post Not Found</Title>
          <p>Sorry, we couldn't find the post you're looking for.</p>
        </Container>
      )
    }
  }

  return (
    <Container>
      <Title>Oops!</Title>
      <p>Something went wrong while loading this post.</p>
    </Container>
  )
}

export default function BlogPost() {
  const post = useLoaderData<typeof loader>()

  const Component = useMemo(() => {
    if (!post.code) return null
    return getMDXComponent(post.code)
  }, [post?.code])

  try {
    return (
      <Article>
        <Title>{post.frontmatter.meta?.title}</Title>
        {Component && <Component components={mdxComponents} />}
      </Article>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
