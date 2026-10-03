import { styled } from '@linaria/react'

const Wrapper = styled.main`
`

export function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>
}
