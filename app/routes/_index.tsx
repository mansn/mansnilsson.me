import { useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { useEffect, useMemo, useState } from 'react'
import { getIntro, getPosts } from '~/utils/content.server'

export async function loader() {
  const posts = await getPosts()
  const intro = await getIntro()

  const data = {
    intro,
    posts,
  }
  return data
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const { intro } = data
  const code = intro?.code ?? ''
  const Component = useMemo(() => getMDXComponent(code), [code])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="leading-7">
      <div className="flex align-center justify-center flex-row my-28">
        <h1 className="font-display text-4xl lg:text-5xl self-center">
          <span
            className={`inline-block ${
              mounted
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:200ms]'
                : 'opacity-0'
            }`}
          >
            Måns
          </span>
          <span
            className={
              mounted
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:400ms]'
                : 'opacity-0'
            }
          >
            {' '}
          </span>
          <span
            className={`inline-block ${
              mounted
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:400ms]'
                : 'opacity-0'
            }`}
          >
            Nilsson
          </span>
        </h1>
      </div>
      <div className="container m-auto mt-10">
        <Component />
      </div>
    </main>
  )
}
