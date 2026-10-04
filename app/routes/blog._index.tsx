import { useLoaderData } from 'react-router'
import { styled } from '@linaria/react'
import { getPosts } from '~/utils/content.server'
import AnchorOrLink from '~/shared/components/AnchorOrLink'

export async function loader() {
  const posts = await getPosts()
  return { posts }
}

const Container = styled.div`
  font-family: 'Nunito', sans-serif;
`

const PostList = styled.ul`
  padding: 0;
  margin: 0;
`

const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  gap: 2em;
`

const PostTime = styled.time`
  text-wrap: nowrap;
  display: block;
  margin-left: 1em;
  margin-right: 1em;
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
                    viewTransitionName,
                  }}
                >
                  <span>{post.frontmatter.meta?.title}</span>
                </AnchorOrLink>
                <PostTime>{post.frontmatter.meta?.date}</PostTime>
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
