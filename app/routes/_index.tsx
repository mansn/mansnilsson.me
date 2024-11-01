import { json, useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { getIntro, getPosts } from '~/utils/content.server'

export async function loader() {
  const posts = await getPosts()
  const intro = await getIntro()

  const data = {
    intro,
    posts,
  }
  return json(data)
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const { intro } = data
  const code = intro?.code ?? ''
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="leading-7">
      <div className="flex align-center justify-center">
        <img
          className="max-h-52"
          src="../images/me.webp"
          alt="Måns Nilsson in grayscale"
        />
        <h1 className="font-display self-center ml-10">Måns Nilsson</h1>
      </div>
      <Component />
    </div>
  )
}
