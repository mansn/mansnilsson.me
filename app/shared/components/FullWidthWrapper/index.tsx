import { styled } from '@linaria/react'

const Wrapper = styled.main`
  max-width: 56rem;
  margin-inline: auto;
`

export function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>
}
