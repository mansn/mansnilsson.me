import { styled } from '@linaria/react'
import { Link, LinkProps } from 'react-router'

const linkStyleBase = {
  position: 'relative',
  display: 'inline-block',
  'text-decoration': 'none',
  'padding-bottom': '2px' /* space for underline */,
  width: 'fit-content',

  span: {
    position: 'relative',
  },

  'span::after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '2px',
    'background-color': 'currentColor',
    transform: 'scaleX(0)',
    'transform-origin': 'center',
    transition: 'transform 0.3s ease',
  },

  '&:hover span::after': {
    transform: 'scaleX(1)',
  },
}

const StyledAnchor = styled.a`
  ${linkStyleBase}
`

const StyledLink = styled(Link)`
  ${linkStyleBase}
`

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export default function AnchorOrLink(
  props: AnchorProps & {
    to?: LinkProps['to']
    viewTransition?: LinkProps['viewTransition']
  }
) {
  // Use anchor tag for external links, otherwise use Link.
  // This resolves a type issue where the React Router Link component
  // can't be used to directly substitute an anchor tag.
  const { to, href, ...rest } = props
  if (href && typeof href === 'string' && href.startsWith('http')) {
    return (
      <StyledAnchor href={href} target="_blank" rel="noopener noreferrer">
        <span>{props.children}</span>
      </StyledAnchor>
    )
  } else {
    return (
      <StyledLink to={to ?? ''} {...rest}>
        <span>{props.children}</span>
      </StyledLink>
    )
  }
}
