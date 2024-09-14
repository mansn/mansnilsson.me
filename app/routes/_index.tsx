import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { Frontmatter } from '~/utils/content.server'
import { getIntro, getPosts } from '~/utils/content.server'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

type LoaderData = {
  intro: string
  posts: {
    slug: string
    frontmatter: Frontmatter
  }[]
}

export async function loader() {
  const posts = await getPosts()
  const intro = await getIntro()

  const data = {
    intro,
    posts,
  }
  return json(data)
}

function ListOfBlogPosts() {
  const data = useLoaderData<LoaderData>()

  return (
    <>
      {data.posts.map((v) => {
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
  const data = useLoaderData<typeof loader>()
  const { intro } = data
  const code = intro?.code ?? ''
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="leading-7">
      <Component />
      <ListOfBlogPosts />
    </div>
  )
}
