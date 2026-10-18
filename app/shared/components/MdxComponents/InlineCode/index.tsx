import { styled } from '@linaria/react'

const StyledCode = styled.code`
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.85em;
`

export default function InlineCode(props: React.HTMLAttributes<HTMLElement>) {
  return <StyledCode {...props} />
}
