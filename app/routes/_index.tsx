import { useLoaderData } from 'react-router'
import { getMDXComponent } from 'mdx-bundler/client'
import { useEffect, useMemo, useState } from 'react'
import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { getIntro, getPosts } from '~/utils/content.server'
import AnchorOrLink from '~/shared/components/AnchorOrLink'

const mdxComponents = {
  a: AnchorOrLink,
}

export async function loader() {
  const posts = await getPosts()
  const intro = await getIntro()

  const data = {
    intro,
    posts,
  }
  return data
}

const MainContainer = styled.main`
  line-height: 1.75rem;
`

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 7rem 0;
  margin-top: 2rem;
`

const Title = styled.h1`
  font-size: 3.25rem;
  line-height: 2.5rem;
  font-weight: 400;
  align-self: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`

const dropInAnimation = css`
  transform: translate3d(0, -32px, 0);
  animation: dropIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;

  @keyframes dropIn {
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

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
    <MainContainer>
      <HeroContainer>
        <Title>
          <span
            className={mounted ? dropInAnimation : ''}
            style={{
              display: 'inline-block',
              animationDelay: '200ms',
              opacity: '0',
            }}
          >
            Måns
          </span>
          <span
            className={mounted ? dropInAnimation : ''}
            style={{ animationDelay: '400ms', opacity: '0' }}
          >
            {' '}
          </span>
          <span
            className={mounted ? dropInAnimation : ''}
            style={{
              display: 'inline-block',
              animationDelay: '400ms',
              opacity: '0',
            }}
          >
            Nilsson
          </span>
        </Title>
      </HeroContainer>
      <Component components={mdxComponents} />
    </MainContainer>
  )
}
