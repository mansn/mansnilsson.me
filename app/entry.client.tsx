import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode, useEffect } from 'react'
import { hydrateRoot } from 'react-dom/client'
import posthog from 'posthog-js'

function PosthogInit() {
  useEffect(() => {
    posthog.init('phc_W09Kgul74R645XHwzslTTnrBeQ83hOEjaqJc44LEDJ9', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'always',
    })
  }, [])

  return null
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
      <PosthogInit />
    </StrictMode>
  )
})
