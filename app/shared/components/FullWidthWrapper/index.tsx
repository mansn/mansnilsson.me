import { styled } from '@linaria/react'

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: var(--viewport-padding);
`

export function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>
}
