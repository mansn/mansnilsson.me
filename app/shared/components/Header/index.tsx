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
  margin-bottom: 4rem;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

const NavLink = styled(Link)<LinkProps>`
  color: white;
`

export default function Header() {
  return (
    <HeaderContainer style={{ maxWidth: '100%' }}>
      <Nav>
        <NavLink to="/" viewTransition>
          {' '}
          <span>Måns Nilsson</span>
        </NavLink>
        <Link to="/blog" viewTransition>
          Blog
        </Link>
        <Link to="/about" viewTransition>
          About
        </Link>
      </Nav>
      <SocialList />
    </HeaderContainer>
  )
}
