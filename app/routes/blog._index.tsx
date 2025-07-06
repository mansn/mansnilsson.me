import { useLoaderData } from '@remix-run/react'
import { styled } from '@linaria/react'
import { getPosts } from '~/utils/content.server'
import Link from '~/shared/components/Link'

export async function loader() {
  const posts = await getPosts()
  return { posts }
}

const Container = styled.div`
  font-family: 'Hind Siliguri', sans-serif;
  width: 100%;
  margin-top: 4rem;
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

const PostLink = styled(Link)`
  flex: 1;
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
          {posts.map((post) => (
            <PostItem key={post.frontmatter.meta?.title}>
              <PostLink to={`/blog/${post.frontmatter.meta?.post}`}>
                <span>{post.frontmatter.meta?.title}</span>
              </PostLink>
              <time>{post.frontmatter.meta?.date}</time>
            </PostItem>
          ))}
        </PostList>
      </Container>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return <div>Error rendering content</div>
  }
}
