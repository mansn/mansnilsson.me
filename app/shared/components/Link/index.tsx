import { styled } from '@linaria/react'
import { Link } from 'react-router';
import { AnchorHTMLAttributes } from 'react'

const StyledLinkBase = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  padding-bottom: 2px; /* space for underline */
  width: fit-content;

  span {
    position: relative;
  }

  span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover span::after {
    transform: scaleX(1);
  }
`

export default function StyledLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const { href = '', ...rest } = props
  return (
    <StyledLinkBase to={href} {...rest}>
      <span>{rest.children}</span>
    </StyledLinkBase>
  )
}
