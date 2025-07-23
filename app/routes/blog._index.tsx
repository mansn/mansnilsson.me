import { useLoaderData, type LinkProps } from 'react-router'
import { styled } from '@linaria/react'
import { getPosts } from '~/utils/content.server'
import AnchorOrLink from '~/shared/components/AnchorOrLink'

export async function loader() {
  const posts = await getPosts()
  return { posts }
}

const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  width: 100%;
`

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-left: 0;
`

const PostItem = styled.li`
  display: flex;
  padding-left: 0;
  margin-top: 1em;
`

export function ErrorBoundary() {
  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong while loading the blog posts.</p>
    </Container>
  )
}

export default function BlogPosts() {
  const { posts } = useLoaderData<typeof loader>()

  try {
    return (
      <Container>
        <PostList>
          {posts.map((post) => {
            const viewTransitionName =
              post.frontmatter.meta?.title
                ?.toLowerCase()
                .replaceAll(' ', '-') || 'none'

            return (
              <PostItem key={post.frontmatter.meta?.title}>
                <AnchorOrLink
                  to={`/blog/${post.frontmatter.meta?.post}`}
                  viewTransition
                  style={{
                    flex: 1,
                    viewTransitionName,
                  }}
                >
                  <span>{post.frontmatter.meta?.title}</span>
                </AnchorOrLink>
                <time>{post.frontmatter.meta?.date}</time>
              </PostItem>
            )
          })}
        </PostList>
      </Container>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
