import { json, type LoaderFunction } from '@remix-run/server-runtime'
import { useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client/index.js'
import { useMemo } from 'react'
import type { Frontmatter } from '~/utils/content.server'
import { getPost } from '~/utils/content.server'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const frontmatter = data.frontmatter
  const title = frontmatter.meta?.title ?? 'Måns Nilsson'
  const description = frontmatter.meta?.description ?? undefined

  return [
    {
      title,
      description,
      'og:twitter:title': title,
      'og:twitter:description': description,
    },
  ]
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params
  if (!slug) throw new Response('Not found', { status: 404 })

  const post = await getPost(slug)

  if (!post) {
    throw new Response('Not found', { status: 404 })
  }

  const { frontmatter, code } = post
  return json({ frontmatter, code })
}

function PostHeader(props: { frontmatter: Frontmatter }) {
  // const { frontmatter } = props;

  // We can implement whatever we want here
  return <>{/* {JSON.stringify(frontmatter, null, 2)} */}</>
}

export default function Post() {
  const { code, frontmatter } = useLoaderData<typeof loader>()
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <PostHeader frontmatter={frontmatter} />
      <Component />
    </>
  )
}
