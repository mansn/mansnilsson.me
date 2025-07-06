import { HydratedRouter } from 'react-router/dom';
import { startTransition, StrictMode, useEffect } from 'react'
import { hydrateRoot } from 'react-dom/client'
import posthog from 'posthog-js'

function PosthogInit() {
  useEffect(() => {
    posthog.init('phc_W09Kgul74R645XHwzslTTnrBeQ83hOEjaqJc44LEDJ9', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'always',
      persistence: 'memory',
    })
  }, [])

  return null
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
      <PosthogInit />
    </StrictMode>
  )
})
