import { json, type LoaderFunction } from '@remix-run/server-runtime'
import { useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client/index.js'
import { useMemo } from 'react'
import type { Frontmatter } from 'utils/content.server'
import * as contentServer from 'utils/content.server'

type LoaderData = {
  frontmatter: any
  code: string
}

export const meta = (arg) => {
  const frontmatter = arg.data.frontmatter as Frontmatter
  const title = frontmatter.meta?.title ?? 'Måns Nilsson'
  const description = frontmatter.meta?.description ?? undefined

  return {
    title,
    description,
    'og:twitter:title': title,
    'og:twitter:description': description,
  }
}

export const loader: LoaderFunction = async ({
  params,
  request,
}: DataFunctionArgs) => {
  const slug = params['*']
  console.log('slug -->', slug)
  if (!slug) throw new Response('Not found', { status: 404 })

  const post = await contentServer.getPost(slug)
  if (post) {
    const { frontmatter, code } = post
    return json({ frontmatter, code })
  } else {
    throw new Response('Not found', { status: 404 })
  }

  return null
}

function PostHeader(props: { frontmatter: Frontmatter }) {
  // const { frontmatter } = props;

  // We can implement whatever we want here
  return <>{/* {JSON.stringify(frontmatter, null, 2)} */}</>
}

export default function Post() {
  const { code, frontmatter } = useLoaderData<LoaderData>()
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <PostHeader frontmatter={frontmatter} />
      <Component />
    </>
  )
}
