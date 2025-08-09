import { styled } from '@linaria/react'

const StyledFooter = styled.footer`
  font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
  width: 100%;
  margin: 2.5rem auto 0;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
`

const Text = styled.span`
  color: #64748b; /* slate-500 in Tailwind */
`

export default function Footer() {
  return (
    <StyledFooter>
      <Text>{`Måns Nilsson © ${new Date().getFullYear()}`}</Text>
    </StyledFooter>
  )
}
