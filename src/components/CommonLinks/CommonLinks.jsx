import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 0 20px;
  text-decoration: none;
  color: hsl(327deg 100% 70%);
  &:hover {
    color: hsl(0deg 0% 100%);
  }
  border-radius: 8px;
`

const CommonLinks = () => (
  <>
    <StyledLink to="/digital-garden">Digital Garden</StyledLink>
    <StyledLink to="/">About</StyledLink>
  </>
)

export default CommonLinks
