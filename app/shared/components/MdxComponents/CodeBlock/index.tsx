import { styled } from '@linaria/react'

const StyledPre = styled.pre`
  background-color: #0f172a;
  border-left: 3px solid #facc15;
  border-radius: 8px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #e2e8f0;
`

export default function FencedCode(props: React.HTMLAttributes<HTMLElement>) {
  return <StyledPre {...props} />
}
