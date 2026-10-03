import { styled } from '@linaria/react'
import { Link, type LinkProps } from 'react-router'
import SocialList from '../SocialList'

const HeaderContainer = styled.header`
  width: 100%;
  font-family: 'Nunito', sans-serif;
  text-align: left;
  color: white;
  display: flex;
  justify-content: space-between;
  padding-block: 3rem;
  padding-inline: 5vw;

`

const Nav = styled.nav`
  display: flex;
  gap: 0.8rem;
`

const NavLink = styled(Link) <LinkProps>`
  color: white;
`

const FullName = styled.span`
  display: none;
  @media (min-width: 430px) {
    display: inline;
  }
`

const ShortName = styled.span`
  display: inline;
  @media (min-width: 430px) {
    display: none;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/" viewTransition>
          <FullName>Måns Nilsson</FullName>
          <ShortName>Måns N.</ShortName>
        </NavLink>
        <Link to="/blog" viewTransition>
          Blog
        </Link>
        <Link to="/about" viewTransition prefetch="render">
          About
        </Link>
      </Nav>
      <SocialList />
    </HeaderContainer>
  )
}
