import { json, useLoaderData } from '@remix-run/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo, useState } from 'react'
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
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="leading-7">
      <div className="flex align-center justify-center flex-row">
        <img
          className="max-h-32 lg:max-h-52 self-center"
          src="../images/me.webp"
          alt="Måns Nilsson in grayscale"
          ref={(img) => {
            // If image is already loaded (e.g., from cache), set state immediately
            if (img?.complete) {
              setImageLoaded(true)
            }
          }}
        />
        <h1 className="font-display text-2xl lg:text-5xl ml-10 my-5 self-center">
          <span
            className={`inline-block ${
              imageLoaded
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:200ms]'
                : 'opacity-0'
            }`}
          >
            Måns
          </span>
          <span
            className={
              imageLoaded
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:400ms]'
                : 'opacity-0'
            }
          >
            {' '}
          </span>
          <span
            className={`inline-block ${
              imageLoaded
                ? 'opacity-0 -translate-y-8 animate-dropIn [animation-delay:400ms]'
                : 'opacity-0'
            }`}
          >
            Nilsson
          </span>
        </h1>
      </div>
      <div className="container mx-auto mt-10 max-w-2xl">
        <Component />
      </div>
    </div>
  )
}
