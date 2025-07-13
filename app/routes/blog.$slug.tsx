import { getMDXComponent } from 'mdx-bundler/client'
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  useViewTransitionState,
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
  view-transition-name: title;

  ::view-transition-old(title) {
    animation: 0.25s linear both shrink-x;
  }

  ::view-transition-new(title) {
    animation: 0.25s 0.25s linear both grow-x;
  }
`

const Article = styled.article`
  font-family: 'Roboto', sans-serif;
  max-width: 56rem;
`

const MetaData = styled.dl`
  display: flex;
  flex-direction: row;
  gap: 0.325rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #64748b;
  font-size: 1rem;
`

const DescriptionTerm = styled.dt`
  display: block;
`

const DescriptionDetail = styled.dd`
  display: block;
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
  const isTransitioning = useViewTransitionState(
    '/blog/' + post.frontmatter.meta?.post
  )

  console.log('isTransitioning', isTransitioning)
  const Component = useMemo(() => {
    if (!post.code) return null
    return getMDXComponent(post.code)
  }, [post?.code])

  try {
    return (
      <Article>
        <Title
          style={
            isTransitioning
              ? {
                  color: '#facc15',
                  fontSize: '16px',
                }
              : {}
          }
        >
          {post.frontmatter.meta?.title}
        </Title>
        <MetaData>
          <DescriptionTerm>Posted on:</DescriptionTerm>
          <DescriptionDetail>{post.frontmatter.meta?.date}</DescriptionDetail>
        </MetaData>
        {Component && <Component components={mdxComponents} />}
      </Article>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
