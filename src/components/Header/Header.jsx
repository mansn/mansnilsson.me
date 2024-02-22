import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Burger from '../Burger'
import Menu from '../Menu'
import CommonLinks from '../CommonLinks'
import { StyledHeader } from './Header.styled'
import { useOnClickOutside } from '../../hooks'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const LinksMobile = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

const StyledHomeLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: hsl(0deg 0% 100%);
  font-weight: 900;
  &:hover {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      color: white;
    }
  }
`

const LinksDesktop = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <header className="flex items-center">
      <nav>
        <div>
          <a to="/digital-garden">Digital Garden</a>
          <a to="/">About</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
