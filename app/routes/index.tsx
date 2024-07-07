import { useLoaderData } from '@remix-run/react'
import type { Frontmatter } from 'utils/content.server'
import * as contentServer from 'utils/content.server'

export async function loader(data) {
  const posts = await contentServer.getPosts()
  return posts
}

function ListOfBlogPosts() {
  const data = useLoaderData<
    Array<{
      slug: string
      frontmatter: Frontmatter
    }>
  >()
  return (
    <>
      {data.map((v) => {
        return <BlogItem item={v} key={v.slug} />
      })}
    </>
  )
}

function BlogItem(props: {
  item: {
    slug: string
    frontmatter: Frontmatter
  }
}) {
  const { item } = props
  return (
    <div className="blog-item">
      <a href={`/${item.slug}`}>
        {' '}
        <h3>{item.frontmatter.meta?.title ?? item.slug} </h3>
      </a>
      <p>{item.frontmatter.meta?.description}</p>
    </div>
  )
}

export default function Index() {
  return (
    <div className="font-serif leading-7">
      <h1>Welcome to Remix</h1>
      <ListOfBlogPosts />
    </div>
  )
}
