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
import { MDXComponents } from 'mdx/types'
import AnchorOrLink from '~/shared/components/AnchorOrLink'

const mdxComponents: MDXComponents = {
  a: AnchorOrLink,
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
  font-weight: 700;
  view-transition-name: ({viewTransitionName}) => viewTransitionName;
`

const Article = styled.article`
  font-family: 'Roboto', sans-serif;
  max-width: 56rem;
`

const MetaData = styled.dl`
  display: flex;
  flex-direction: row;
  gap: 0.325rem;
  margin-bottom: 2rem;
  color: #64748b;
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
          <h1>Post Not Found</h1>
          <p>Sorry, we couldn't find the post you're looking for.</p>
        </Container>
      )
    }
  }

  return (
    <Container>
      <h1>Oops!</h1>
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
    const viewTransitionName =
      post.frontmatter.meta?.title?.toLowerCase().replaceAll(' ', '-') || 'none'
    return (
      <Article>
        <Title
          style={{
            viewTransitionName,
          }}
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
