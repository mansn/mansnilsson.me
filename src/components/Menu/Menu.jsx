import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StyledMenu } from './Menu.styled'

const StyledLink = styled(Link)`
  padding: 0 20px;
  color: hsl(327deg 100% 70%);
  &:hover {
    color: hsl(0deg 0% 100%);
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Links>
        <StyledLink to="/digital-garden">Digital Garden</StyledLink>
        <StyledLink to="/">Portfolio</StyledLink>
        <StyledLink to="/">About</StyledLink>
      </Links>
    </StyledMenu>
  )
}
export default Menu
