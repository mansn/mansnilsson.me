import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { Frontmatter } from '~/utils/content.server'
import { getPosts } from '~/utils/content.server'

export async function loader(data) {
  const posts = await getPosts()
  return json(posts)
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
      <a href={`/blog/${item.slug}`}>
        {' '}
        <h3>{item.frontmatter.attributes.meta?.title ?? item.slug} </h3>
      </a>
      <p>{item.frontmatter.attributes.meta?.description}</p>
    </div>
  )
}

export default function Index() {
  return (
    <div className="leading-7">
      <h1>Måns Nilsson</h1>
      <ListOfBlogPosts />
    </div>
  )
}
